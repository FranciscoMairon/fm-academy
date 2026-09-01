#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec bash "${script_dir}/sites-env.sh" -- bash "$0" "$@"
fi

command -v timeout || {
  echo "build-verified.sh requires GNU timeout." >&2
  exit 69
}

vinext="${SITES_PROJECT_ROOT}/node_modules/.bin/vinext"
if [[ ! -x "${vinext}" ]]; then
  echo "vinext is unavailable. Run npm run install:ci and wait for it to finish before building." >&2
  exit 69
fi

# tw-animate-css is optional for this site, but its package import can fail to
# resolve in the Cloudflare/Vinext build environment. Remove only that import
# from the disposable CI checkout before compiling; the rest of globals.css is
# left untouched.
globals_css="${SITES_PROJECT_ROOT}/app/globals.css"
if grep -Fqx '@import "tw-animate-css";' "${globals_css}"; then
  echo "[sites] removing optional tw-animate-css import for Cloudflare build compatibility"
  sed -i '/^@import "tw-animate-css";$/d' "${globals_css}"
fi

echo "Running bounded vinext build..."
timeout \
  --signal=TERM \
  --kill-after="${SITES_BUILD_KILL_AFTER:-10s}" \
  "${SITES_BUILD_TIMEOUT:-3m}" \
  "${vinext}" build
