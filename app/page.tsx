"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Linkedin, Mail, MessageCircle, ShoppingBag, ArrowDown, Lock, Terminal, Sparkles, Code, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [visits, setVisits] = useState(0);
  const [step, setStep] = useState(1);
  const [showPix, setShowPix] = useState(false);

  useEffect(() => {

    // 3. Contador de visitas
    const stored = localStorage.getItem("visits");
    const count = stored ? Number(stored) + 1 : 1;
    localStorage.setItem("visits", String(count));
    setVisits(count);
  }, []);

  const timeline = [
    { year: "2019", title: "Comunicação de Base", text: "Guia de trenzinho turístico — o despertar da oratória e do trato com o público." },
    { year: "2021", title: "O Código", text: "Ensino médio técnico em informática pelo IFSP — onde a lógica virou minha ferramenta de construção." },
    { year: "2022", title: "Dados & Monitoria", text: "Monitoria em Banco de Dados no IFSP — ensinando e estruturando conhecimento para outros." },
    { year: "2024", title: "Sistemas & UNIFEI", text: "Ingresso em Eng. de Produção e atuação técnica na Secretaria de Desenvolvimento Institucional da UNIFEI." },
    { year: "2025", title: "GE Vernova", text: "Experiência em Sales and Proposal, lidando com propostas comerciais, organização de dados e processos críticos." },
    { year: "2025-2026", title: "UaneBag & Futuro", text: "Foco total na universidade e expansão da marca própria unindo tecnologia e design." }
  ];

  return (
    <main className="min-h-screen bg-[#0b0014] text-neutral-100 overflow-x-hidden selection:bg-fuchsia-500/30">
      
      <AnimatePresence mode="wait">
        {/* PASSO 1: PRIVACY */}
        {step === 1 && (
          <motion.section 
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
            
            <div className="relative z-10 text-center flex flex-col items-center">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center gap-3 text-fuchsia-500 mb-8 border border-fuchsia-500/30 px-4 py-1.5 rounded-full bg-fuchsia-500/5 backdrop-blur-sm"
              >
                <Lock size={14} className="animate-pulse" />
                <span className="text-[10px] md:text-xs font-mono tracking-[0.4em] uppercase">Private Repository</span>
              </motion.div>
              
              <motion.h1 
                className="text-7xl md:text-9xl font-black mb-8 tracking-tighter bg-gradient-to-b from-white via-white to-neutral-600 bg-clip-text text-transparent italic"
              >
                Privacy
              </motion.h1>
              
              <p className="max-w-md text-base md:text-lg text-neutral-400 mb-10 font-light leading-relaxed">
                A curiosidade é o primeiro passo para o <span className="text-white font-medium">conhecimento</span>. <br/>
                Desbloqueie para entender o que acontece quando o código encontra a resistência.
              </p>

              <button 
                onClick={() => setStep(2)}
                className="group relative px-12 py-4 overflow-hidden rounded-full bg-white text-black font-black uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Desbloquear Acesso</span>
                <motion.div className="absolute inset-0 bg-fuchsia-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </motion.section>
        )}

        {/* PASSO 2: MENSAGEM DE IMPACTO */}
        {step === 2 && (
          <motion.section 
            key="message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-[#0b0014] to-[#1a0033]"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-4xl"
            >
              <h2 className="text-3xl md:text-6xl font-serif italic text-neutral-100 leading-[1.1] mb-12">
                "Não é sobre visibilidade gratuita, é sobre ter a coragem de <span className="text-fuchsia-500 not-serif font-sans font-black uppercase tracking-tight">dar a cara a tapa</span> para ocupar meu lugar."
              </h2>
              
              <p className="text-neutral-400 max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
                Sei que, para ser notada no mercado hoje, preciso me posicionar com firmeza. <span className="text-white">Obrigada por chegar até aqui!</span> Este acesso não é apenas um convite à curiosidade, mas a prova de que estou pronta para criar impacto.
              </p>
              
              <button 
                onClick={() => setStep(3)}
                className="group flex flex-col items-center gap-4 transition-all"
              >
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-fuchsia-500 group-hover:bg-fuchsia-500/10 transition-all duration-500">
                  <ArrowDown className="text-white group-hover:text-fuchsia-500 group-hover:translate-y-1 transition-all" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold">Ver Trajetória</span>
              </button>
            </motion.div>
          </motion.section>
        )}

        {/* PASSO 3: CONTEÚDO REVELADO */}
        {step === 3 && (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full"
          >
            <nav className="p-6 flex justify-between items-center sticky top-0 bg-[#0b0014]/80 backdrop-blur-md z-50 border-b border-white/5">
              <span className="font-black tracking-tighter text-xl">UANE.</span>
              <div className="flex gap-4">
                <a href="https://wa.me/5512997716710" target="_blank" rel="noopener noreferrer" className="bg-fuchsia-600 p-2 rounded-full hover:bg-fuchsia-500 transition"><ShoppingBag size={18} /></a>
              </div>
            </nav>

            {/* SEÇÃO SOBRE MIM */}
            <section className="py-24 px-6 max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-16 items-start">
                <div className="w-full md:w-1/3 sticky top-32 flex flex-col items-center md:items-start">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-fuchsia-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative w-64 h-64 md:w-full md:aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white/10">
                       <img src="/img/hero.jpeg" alt="Lauane Peres Barbosa" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="mt-8 space-y-2 text-center md:text-left">
                    <h1 className="text-3xl font-black uppercase tracking-tighter">Lauane Peres Barbosa</h1>
                    <p className="text-fuchsia-500 font-mono text-sm tracking-widest uppercase italic">Engenharia de Produção @ UNIFEI</p>
                  </div>
                </div>

                <div className="flex-1 space-y-12">
                  <div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none italic">
                      CRIAR PARA <br/><span className="text-fuchsia-600 underline">RESISTIR.</span>
                    </h2>
                    <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
                      <p>Olá, eu sou a <span className="text-white font-bold">Lauane Peres Barbosa</span>. Estudar e trabalhar não é um "lifestyle", é a realidade de quem constrói o próprio futuro do zero.</p>
                      <p>Atualmente na <span className="text-white font-bold">UNIFEI</span>, fundo a lógica da engenharia com o desenvolvimento de software, dominando <span className="text-white font-bold">Python e tecnologias de automação</span>.</p>
                      <p className="border-l-4 border-fuchsia-600 pl-6 italic bg-fuchsia-600/5 py-4 text-white">
                        "Enquanto a Uane sonha em alcançar seus objetivos, a Lauane é quem levanta todos os dias para alcançá-los."
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-white font-black uppercase text-sm tracking-widest">
                        <Code size={18} className="text-fuchsia-500"/> Stack Técnica
                      </div>
                      <p className="text-neutral-400 text-sm leading-relaxed">Foco em <span className="text-fuchsia-400">FastAPI</span>, automação de dados e modelagem SQL.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-white font-black uppercase text-sm tracking-widest">
                        <Sparkles size={18} className="text-fuchsia-500"/> Soft Skills
                      </div>
                      <p className="text-neutral-400 text-sm leading-relaxed">Comunicação assertiva e resiliência para transformar desafios em soluções.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* UANEBAG SECTION */}
            <section className="py-24 px-6 bg-white text-black">
              <div className="max-w-6xl mx-auto text-center md:text-left">
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 uppercase">UaneBag®</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  {[
                    { title: "Ecobag MPB MULHERES", desc: "A armadura do dia a dia. Espaçosa e reforçada.", img: "/img/ecobag1.png" },
                    { title: "Ecobag LATINO AMERICANO", desc: "Minimalismo para quem carrega notebooks e ideias.", img: "/img/ecobag2.png" }
                  ].map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="relative overflow-hidden aspect-[4/5] bg-neutral-100 mb-6">
                         <motion.img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                         />
                         <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">UANEBAG</div>
                      </div>
                      <h3 className="text-3xl font-black tracking-tighter uppercase mb-2">{item.title}</h3>
                      <p className="text-neutral-500 mb-6">{item.desc}</p>
                      <a
                        href={`https://wa.me/5512997716710?text=Oi%20Uane!%20Quero%20saber%20mais%20sobre%20a%20${item.title}`}
                        target="_blank" rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-3 py-4 bg-black text-white hover:bg-fuchsia-600 transition-colors font-bold uppercase text-xs tracking-[0.2em]"
                      >
                        <MessageCircle size={16} /> Consultar Disponibilidade
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* TIMELINE */}
            <section className="py-24 px-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-16">
                <Terminal className="text-fuchsia-500" />
                <h2 className="text-3xl font-black uppercase tracking-tighter italic underline">Logs de Evolução</h2>
              </div>
              <div className="relative border-l border-white/10 ml-4">
                {timeline.map((item, i) => (
                  <motion.div key={i} className="mb-12 ml-8 relative">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#0b0014] border-2 border-fuchsia-500" />
                    <span className="text-xs font-mono text-fuchsia-500 mb-1 block tracking-[0.3em] font-bold">{item.year}</span>
                    <h4 className="text-xl font-black uppercase tracking-tight text-white mb-2">{item.title}</h4>
                    <p className="text-neutral-400 text-base leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-32 px-6 text-center bg-fuchsia-600 text-white">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic uppercase">Não é só uma vaga, <br/>é um investimento.</h2>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <button onClick={() => setShowPix(true)} className="px-12 py-5 bg-black text-white font-black uppercase text-xs tracking-widest hover:scale-105 transition">Apoiar com PIX</button>
                <a href="mailto:lauanepr@outlook.com" className="px-12 py-5 border-2 border-black text-black font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition">Contratar Lauane</a>
              </div>
            </section>

            {/* FOOTER */}
            <footer className="py-20 px-6 border-t border-white/5 bg-black">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-black italic mb-2 tracking-tighter uppercase">UaneBag®</h3>
                  <p className="text-neutral-500 text-sm font-mono tracking-widest uppercase italic">Resistência Digital</p>
                </div>
                <div className="flex gap-8">
                  <a href="https://www.instagram.com/lauaneperes?igsh=MXdqN3J3ajBlMTNjag==" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-fuchsia-500 transition"><Instagram size={28}/></a>
                  <a href="https://www.linkedin.com/in/lauane-barbosa/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-fuchsia-500 transition"><Linkedin size={28}/></a>
                  <a href="mailto:lauanepr@outlook.com" className="text-neutral-400 hover:text-fuchsia-500 transition"><Mail size={28}/></a>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-[0.4em] mb-2">Visitas Detectadas: {visits}</p>
                  <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest decoration-fuchsia-600 underline underline-offset-4">© 2026 Lauane Barbosa</p>
                </div>
              </div>
            </footer>

            {/* MODAL PIX */}
            <AnimatePresence>
              {showPix && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
                  onClick={() => setShowPix(false)}
                >
                  <motion.div 
                    initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
                    className="bg-white p-8 rounded-3xl max-w-sm w-full text-center relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button onClick={() => setShowPix(false)} className="absolute top-4 right-4 text-neutral-400 hover:text-black"><X size={24} /></button>
                    <h3 className="text-black font-black text-2xl uppercase italic mb-4">Apoie o Projeto</h3>
                    <div className="aspect-square bg-neutral-100 rounded-xl mb-6 border-2 border-fuchsia-500 p-2">
                       <img src="/img/qrcode.png" alt="QR Code PIX" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-neutral-600 text-sm">Sua contribuição ajuda a financiar meus estudos na UNIFEI e o crescimento da UaneBag. 🖤</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}