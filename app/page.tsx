import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDollarSign,
  Crosshair,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Swords,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

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

const performanceTopics = [
  "Análise técnica individual",
  "Estratégia de luta",
  "Correção de erros",
  "Desenvolvimento dos seus pontos fortes",
  "Mentalidade para treinos e competições",
  "Controle emocional e confiança",
  "Sparring e tomada de decisão",
  "Preparação para competição",
  "Direcionamento dos seus treinos",
];

const businessTopics = [
  "Como começar a dar aulas",
  "Como conquistar seus primeiros alunos",
  "Como estruturar uma aula que faça o aluno querer voltar",
  "Como transformar uma aula experimental em aluno",
  "Quanto cobrar pelo seu trabalho",
  "Como criar planos e pacotes",
  "Como fidelizar alunos",
  "Como lotar sua agenda de personal",
  "Como utilizar as redes sociais para conseguir clientes",
  "Como construir autoridade",
  "Como aumentar seu valor profissional",
  "Como transformar conhecimento em renda",
];

const achievements = [
  { value: "46", label: "lutas profissionais" },
  { value: "13", label: "GPs disputados" },
  { value: "2x", label: "campeão Attack Fight" },
  { value: "2016", label: "melhor lutador do Brasil" },
];

export default function Home() {
  return (
    <main className="sales-page">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

      <nav className="site-nav" aria-label="Navegação principal">
        <div className="nav-inner">
          <Link className="nav-brand" href="/" aria-label="FM Academy, início">
            <img src="/assets/fm-academy-logo.png" alt="" />
            <span>FM Academy</span>
          </Link>
          <div className="nav-links">
            <a href="#mentorias">Mentorias</a>
            <a href="#trajetoria">Trajetória</a>
            <Link href="/links">Links</Link>
          </div>
          <a className="button button-small button-gold" href={generalUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={17} aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </div>
      </nav>

      <header className="hero" id="conteudo">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-image" aria-hidden="true">
          <img src="/assets/francisco-luta.jpeg" alt="" />
        </div>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              Mentoria para atletas e profissionais
            </div>
            <h1>
              Conhecimento, experiência e direção para quem quer ir mais longe no
              <span> Muay Thai.</span>
            </h1>
            <p className="hero-lead">
              Aprenda diretamente com Francisco Mairon e escolha o caminho que vai
              conduzir o seu próximo nível, dentro ou fora do ringue.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#mentorias">
                Escolher minha mentoria
                <ArrowDown size={18} aria-hidden="true" />
              </a>
              <a className="button button-outline" href={generalUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} aria-hidden="true" />
                Falar com Francisco
              </a>
            </div>
            <div className="hero-metrics" aria-label="Destaques da trajetória">
              <div><strong>46</strong><span>lutas profissionais</span></div>
              <div><strong>13</strong><span>GPs disputados</span></div>
              <div><strong>02</strong><span>caminhos de mentoria</span></div>
            </div>
          </div>
        </div>
        <div className="hero-caption">
          <span>Francisco Mairon</span>
          <small>Ex-atleta profissional · treinador · mentor</small>
        </div>
      </header>

      <div className="achievement-marquee" aria-label="Conquistas">
        <div className="marquee-track">
          {[...Array(2)].flatMap((_, group) =>
            [
              "Campeão Paulista Profissional",
              "2x Campeão Attack Fight",
              "Melhor Lutador do Brasil em 2016",
              "13 GPs disputados",
            ].map((item) => (
              <span key={`${group}-${item}`}>
                <Sparkles size={15} aria-hidden="true" />
                {item}
              </span>
            ))
          )}
        </div>
      </div>

      <section className="section section-intro">
        <div className="container intro-grid">
          <Reveal className="section-heading">
            <span className="section-number">01</span>
            <div className="eyebrow">FM Academy</div>
            <h2>Minha experiência. Meu método. Meu acompanhamento.</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={120}>
            <p className="lead-paragraph">
              A FM Academy nasceu de anos vivendo o Muay Thai dentro e fora dos ringues.
            </p>
            <p>
              Eu sou Francisco Mairon, ex-atleta profissional, treinador e mentor.
              Transformei tudo que vivi e aprendi em um método de ensino para ajudar
              outras pessoas a percorrerem, com direção, um caminho que levei anos
              para compreender.
            </p>
            <div className="signature-line">
              <span>Essa é a FM Academy.</span>
              <small>Conhecimento aplicado à sua evolução.</small>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-paths" id="mentorias">
        <div className="container">
          <Reveal className="center-heading">
            <span className="section-number">02</span>
            <div className="eyebrow eyebrow-centered">Escolha o seu caminho</div>
            <h2>Qual é o seu objetivo?</h2>
            <p>
              Existem diferentes formas de crescer através do Muay Thai. A FM
              Academy reúne dois caminhos de mentoria para momentos e objetivos diferentes.
            </p>
          </Reveal>
          <div className="path-grid">
            <Reveal className="path-card path-performance" delay={80}>
              <div className="path-index">Caminho 01</div>
              <div className="path-icon"><Swords size={30} aria-hidden="true" /></div>
              <h3>Mentoria Performance</h3>
              <p className="path-tagline">
                Evolua sua técnica. Fortaleça sua mentalidade. Lute com mais inteligência.
              </p>
              <ul className="micro-list">
                <li>Técnica</li><li>Estratégia</li><li>Mentalidade</li><li>Performance</li>
              </ul>
              <a className="text-link" href="#performance">
                Conhecer este caminho <ArrowRight size={18} aria-hidden="true" />
              </a>
            </Reveal>
            <Reveal className="path-card path-business" delay={160}>
              <div className="path-index">Caminho 02</div>
              <div className="path-icon"><BriefcaseBusiness size={30} aria-hidden="true" /></div>
              <h3>Mentoria Vivendo do Muay Thai</h3>
              <p className="path-tagline">
                Transforme seu conhecimento em valor, carreira e renda.
              </p>
              <ul className="micro-list">
                <li>Posicionamento</li><li>Alunos</li><li>Autoridade</li><li>Renda</li>
              </ul>
              <a className="text-link" href="#vivendo-do-muay-thai">
                Conhecer este caminho <ArrowRight size={18} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section mentorship-section" id="performance">
        <div className="container">
          <div className="mentorship-header">
            <Reveal className="mentorship-title-block">
              <div className="path-label"><Crosshair size={17} aria-hidden="true" />Caminho 01</div>
              <h2>Mentoria<br />Performance</h2>
            </Reveal>
            <Reveal className="mentorship-intro" delay={100}>
              <p className="display-quote">Pare de simplesmente treinar. Comece a evoluir com direção.</p>
              <p>
                Uma mentoria individual para atletas e praticantes. Vou analisar o
                seu momento, identificar os principais erros e mostrar o que precisa
                ser desenvolvido para você alcançar o próximo nível.
              </p>
            </Reveal>
          </div>
          <div className="topics-panel">
            <Reveal className="topics-heading">
              <span>O que vamos trabalhar</span><Target size={24} aria-hidden="true" />
            </Reveal>
            <div className="topics-grid">
              {performanceTopics.map((topic, index) => (
                <Reveal className="topic-item" delay={(index % 3) * 60} key={topic}>
                  <span className="check-mark"><Check size={15} /></span>{topic}
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="audience-panel">
            <div><span className="mini-label">Para quem é?</span><h3>Para quem sente que pode entregar mais.</h3></div>
            <p>
              Praticantes, atletas e competidores que precisam de um olhar
              experiente para entender onde estão errando, organizar prioridades e
              evoluir com mais clareza.
            </p>
            <a className="button button-gold" href={performanceUrl} target="_blank" rel="noreferrer">
              Quero evoluir como atleta <ArrowRight size={18} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section mentorship-section mentorship-business" id="vivendo-do-muay-thai">
        <div className="container">
          <div className="mentorship-header">
            <Reveal className="mentorship-title-block">
              <div className="path-label"><CircleDollarSign size={17} aria-hidden="true" />Caminho 02</div>
              <h2>Vivendo do<br />Muay Thai</h2>
            </Reveal>
            <Reveal className="mentorship-intro" delay={100}>
              <p className="display-quote">
                Saber Muay Thai é o começo. Construir valor é o que transforma
                conhecimento em profissão.
              </p>
              <p>
                Muitos professores dominam a técnica, mas ainda não sabem conseguir
                alunos, se posicionar, cobrar, vender seu trabalho e construir uma
                carreira. Esta mentoria foi criada para organizar esse caminho.
              </p>
            </Reveal>
          </div>
          <div className="topics-panel topics-panel-silver">
            <Reveal className="topics-heading">
              <span>O que vamos trabalhar</span><BriefcaseBusiness size={24} aria-hidden="true" />
            </Reveal>
            <div className="topics-grid topics-grid-business">
              {businessTopics.map((topic, index) => (
                <Reveal className="topic-item" delay={(index % 3) * 60} key={topic}>
                  <span className="check-mark"><Check size={15} /></span>{topic}
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="audience-panel audience-panel-silver">
            <div><span className="mini-label">Para quem é?</span><h3>Para quem quer construir uma carreira no Muay Thai.</h3></div>
            <p>
              Pessoas que querem começar a ensinar e professores que já dão aulas,
              mas desejam crescer com mais estrutura, autoridade e resultado financeiro.
            </p>
            <a className="button button-silver" href={businessUrl} target="_blank" rel="noreferrer">
              Quero viver do Muay Thai <ArrowRight size={18} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="fight-feature" aria-label="Trajetória profissional de Francisco Mairon">
        <div className="container">
          <Reveal className="fight-frame">
            <img
              src="/assets/francisco-luta.jpeg"
              alt="Francisco Mairon comemorando uma vitória no ringue"
            />
            <div className="fight-caption">
              <span>Trajetória profissional</span>
              <strong>46 lutas construindo experiência dentro do ringue.</strong>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="proof-section" id="trajetoria">
        <div className="proof-background" aria-hidden="true"><img src="/assets/francisco-palestra.jpeg" alt="" /></div>
        <div className="proof-overlay" aria-hidden="true" />
        <div className="container proof-content">
          <Reveal className="proof-heading">
            <div className="eyebrow">Por que a FM Academy?</div>
            <h2>Eu ensino aquilo que vivi.</h2>
            <p>
              A experiência foi construída em 46 lutas profissionais e ampliada em
              anos de trabalho com aulas, personal, seminários, palestras,
              mentorias, conteúdo digital e oportunidades profissionais.
            </p>
          </Reveal>
          <div className="achievement-grid">
            {achievements.map((achievement, index) => (
              <Reveal className="achievement-card" delay={index * 70} key={achievement.label}>
                <strong>{achievement.value}</strong><span>{achievement.label}</span>
              </Reveal>
            ))}
          </div>
          <Reveal className="champion-line"><Trophy size={25} aria-hidden="true" /><span>Campeão Paulista Profissional</span></Reveal>
        </div>
      </section>

      <section className="section two-worlds-section">
        <div className="container two-worlds-grid">
          <Reveal className="worlds-copy">
            <span className="section-number">03</span>
            <div className="eyebrow">Uma trajetória, dois mundos</div>
            <h2>A FM Academy une o crescimento dentro e fora do ringue.</h2>
            <p>
              Foi vivendo esses dois mundos que entendi como técnica, mentalidade,
              posicionamento e carreira se conectam. Hoje, esse aprendizado orienta
              cada acompanhamento.
            </p>
          </Reveal>
          <div className="world-cards">
            <Reveal className="world-card" delay={80}>
              <div className="world-card-number">01</div><Zap size={28} aria-hidden="true" />
              <h3>Dentro do ringue</h3><p>Evolução como atleta, com técnica, estratégia e mentalidade.</p>
            </Reveal>
            <Reveal className="world-card" delay={160}>
              <div className="world-card-number">02</div><Users size={28} aria-hidden="true" />
              <h3>Fora do ringue</h3><p>Crescimento como profissional, com autoridade, alunos e renda.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section founder-section">
        <div className="container founder-grid">
          <Reveal className="founder-image-wrap">
            <img className="founder-image" src="/assets/francisco-palco-perfil.jpeg" alt="Francisco Mairon falando em um palco" />
            <div className="founder-stamp"><Award size={20} aria-hidden="true" />Experiência compartilhada diretamente</div>
          </Reveal>
          <Reveal className="founder-copy" delay={100}>
            <div className="eyebrow">Quem é a FM Academy?</div>
            <h2>Francisco Mairon.</h2>
            <p className="lead-paragraph">
              A FM Academy é um acompanhamento próximo, feito por quem viveu cada etapa desse caminho.
            </p>
            <p>
              Sou eu compartilhando diretamente com você minha experiência, meus
              erros, meus acertos, minha visão e os métodos que desenvolvi ao longo da trajetória.
            </p>
            <blockquote>“Fazer o meu conhecimento encurtar o seu caminho.”</blockquote>
            <div className="founder-signature"><span>Francisco Mairon</span><small>Fundador da FM Academy</small></div>
          </Reveal>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container">
          <Reveal className="center-heading final-heading">
            <ShieldCheck size={34} aria-hidden="true" />
            <div className="eyebrow eyebrow-centered">Seu próximo nível começa aqui</div>
            <h2>Escolha o caminho que acompanha o seu objetivo.</h2>
          </Reveal>
          <div className="final-options">
            <Reveal className="final-option" delay={70}>
              <div className="final-option-top"><Swords size={25} aria-hidden="true" /><span>Performance</span></div>
              <h3>Quero evoluir como atleta</h3>
              <p>Técnica · Estratégia · Mentalidade · Performance</p>
              <a className="button button-gold button-full" href={performanceUrl} target="_blank" rel="noreferrer">
                Conhecer Mentoria Performance <ChevronRight size={18} aria-hidden="true" />
              </a>
            </Reveal>
            <Reveal className="final-option final-option-silver" delay={140}>
              <div className="final-option-top"><BriefcaseBusiness size={25} aria-hidden="true" /><span>Carreira</span></div>
              <h3>Quero viver do Muay Thai</h3>
              <p>Posicionamento · Alunos · Autoridade · Renda</p>
              <a className="button button-silver button-full" href={businessUrl} target="_blank" rel="noreferrer">
                Conhecer Mentoria Vivendo do Muay Thai <ChevronRight size={18} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/assets/fm-academy-logo.png" alt="Logo da FM Academy" />
            <div><strong>FM Academy</strong><span>Conhecimento é o que te leva mais longe.</span></div>
          </div>
          <p>Invista em você. Mude seus resultados.</p>
          <div className="footer-links"><Link href="/links">Links úteis</Link><a href={generalUrl} target="_blank" rel="noreferrer">WhatsApp</a></div>
        </div>
      </footer>

      <a className="mobile-whatsapp" href={generalUrl} target="_blank" rel="noreferrer">
        <MessageCircle size={20} aria-hidden="true" />Falar no WhatsApp
      </a>
    </main>
  );
}
