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

# Reconstruct the high-definition transparent logo from small text chunks.
# Keeping the chunks in the repository avoids binary upload corruption while
# still producing a normal PNG before Vinext bundles the public assets.
logo_chunks_dir="${SITES_PROJECT_ROOT}/public/assets/logo-hq-chunks"
logo_target="${SITES_PROJECT_ROOT}/public/assets/fm-academy-logo.png"
if [[ -d "${logo_chunks_dir}" ]]; then
  command -v base64 || {
    echo "base64 is required to reconstruct the FM Academy logo." >&2
    exit 69
  }

  logo_tmp="${SITES_RUNTIME_ROOT}/fm-academy-logo-hq.png"
  cat "${logo_chunks_dir}"/chunk_*.b64 | base64 -d > "${logo_tmp}"

  if [[ ! -s "${logo_tmp}" ]]; then
    echo "Failed to reconstruct the FM Academy logo." >&2
    exit 69
  fi

  mv "${logo_tmp}" "${logo_target}"
  echo "[sites] reconstructed high-definition FM Academy logo"
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
