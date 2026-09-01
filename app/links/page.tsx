import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  MessageCircle,
  Swords,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Links",
  description: "Acesse as mentorias e fale com Francisco Mairon.",
};

const whatsappBase = "https://wa.me/5511911809144";
const performanceUrl = `${whatsappBase}?text=${encodeURIComponent(
  "Olá, Francisco! Quero conhecer a Mentoria Performance da FM Academy."
)}`;
const businessUrl = `${whatsappBase}?text=${encodeURIComponent(
  "Olá, Francisco! Quero conhecer a Mentoria Vivendo do Muay Thai da FM Academy."
)}`;
const generalUrl = `${whatsappBase}?text=${encodeURIComponent(
  "Olá, Francisco! Quero saber mais sobre as mentorias da FM Academy."
)}`;

export default function LinksPage() {
  return (
    <main className="bio-page">
      <div className="bio-background" aria-hidden="true">
        <img src="/assets/francisco-mentor.jpeg" alt="" />
      </div>
      <div className="bio-overlay" aria-hidden="true" />
      <div className="bio-orb bio-orb-one" aria-hidden="true" />
      <div className="bio-orb bio-orb-two" aria-hidden="true" />

      <div className="bio-shell">
        <Reveal className="bio-profile">
          <Link className="bio-back" href="/">
            <ArrowLeft size={16} aria-hidden="true" />
            Página principal
          </Link>
          <div className="bio-logo-wrap">
            <img src="/assets/fm-academy-logo.png" alt="Logo da FM Academy" />
          </div>
          <div className="bio-kicker">Mentoria · Performance · Carreira</div>
          <h1>FM Academy</h1>
          <p>
            Conhecimento, experiência e direção para quem quer ir mais longe no Muay Thai.
          </p>
        </Reveal>

        <div className="bio-links" aria-label="Links da FM Academy">
          <Reveal delay={60}>
            <a className="bio-link bio-link-gold" href={performanceUrl} target="_blank" rel="noreferrer">
              <span className="bio-link-icon"><Swords size={22} /></span>
              <span className="bio-link-copy"><small>Para atletas e praticantes</small><strong>Mentoria Performance</strong></span>
              <ArrowUpRight size={21} aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal delay={120}>
            <a className="bio-link bio-link-silver" href={businessUrl} target="_blank" rel="noreferrer">
              <span className="bio-link-icon"><BriefcaseBusiness size={22} /></span>
              <span className="bio-link-copy"><small>Para professores e profissionais</small><strong>Vivendo do Muay Thai</strong></span>
              <ArrowUpRight size={21} aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal delay={180}>
            <Link className="bio-link bio-link-dark" href="/">
              <span className="bio-link-copy"><small>Conheça a história e o método</small><strong>Página oficial da FM Academy</strong></span>
              <ArrowUpRight size={21} aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal delay={240}>
            <a className="bio-link bio-link-whatsapp" href={generalUrl} target="_blank" rel="noreferrer">
              <span className="bio-link-icon"><MessageCircle size={22} /></span>
              <span className="bio-link-copy"><small>Atendimento direto</small><strong>Falar com Mairon no WhatsApp</strong></span>
              <ArrowUpRight size={21} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <Reveal className="bio-footer" delay={280}>
          <span>Francisco Mairon</span>
          <small>Fundador da FM Academy</small>
        </Reveal>
      </div>
    </main>
  );
}
