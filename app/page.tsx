"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Linkedin, Mail, MessageCircle, ShoppingBag, Heart, ArrowDown, Lock, Terminal, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [visits, setVisits] = useState(0);
  const [step, setStep] = useState(1); 

  useEffect(() => {
    const stored = localStorage.getItem("visits");
    const count = stored ? Number(stored) + 1 : 1;
    localStorage.setItem("visits", String(count));
    setVisits(count);
  }, []);

  const timeline = [
    { year: "2019", title: "Comunicação de Base", text: "Guia de trenzinho turístico — o despertar da oratória e do trato com o público." },
    { year: "2020", title: "Resiliência", text: "Trabalhos informais — aprendendo a arte de resolver problemas complexos sob pressão." },
    { year: "2021", title: "O Código", text: "Ensino médio técnico em informática — onde a lógica virou minha ferramenta de construção." },
    { year: "2022", title: "Academia", text: "Monitoria e iniciação científica — o prazer de decodificar conhecimento para outros." },
    { year: "2023", title: "Sistemas", text: "Formação técnica — imersão profunda em dados, arquitetura de APIs e UX Design." },
    { year: "2024", title: "UaneBag & Uni", text: "Universidade e o nascimento da marca — unindo tecnologia à sobrevivência criativa." }
  ];

  return (
    <main className="min-h-screen bg-[#0b0014] text-neutral-100 overflow-x-hidden selection:bg-fuchsia-500/30">
      
      <AnimatePresence mode="wait">
        {/* PASSO 1: O GATILHO (PRIVACY / MARKETING) */}
        {step === 1 && (
          <motion.section 
            key="hero"
            exit={{ opacity: 0, scale: 0.95 }}
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
            
            <motion.pre
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              className="absolute top-10 left-10 text-green-400 text-xs md:text-sm font-mono pointer-events-none hidden md:block"
            >{`class Student {
  constructor() {
    this.name = "Lauane";
    this.brand = "UaneBag";
  }
}`}</motion.pre>

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

        {/* PASSO 2: A MENSAGEM IMPACTANTE */}
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
                "O marketing da curiosidade abre portas, mas o <span className="text-fuchsia-500 not-serif font-sans font-black uppercase tracking-tight">esforço real</span> é o que nos mantém dentro delas."
              </h2>
              
              <p className="text-neutral-400 max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
                As fofocas e curiosidades movimentam o mercado hoje. <span className="text-white">Obrigada por chegar até aqui!</span> Eu, como estudante, preciso chamar a atenção de alguma forma para meus sonhos e ocupar espaços.
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

        {/* PASSO 3: O CONTEÚDO REVELADO */}
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
                <a href="https://wa.me/5512997716710" className="bg-fuchsia-600 p-2 rounded-full hover:bg-fuchsia-500 transition"><ShoppingBag size={18} /></a>
              </div>
            </nav>

            <section className="py-24 px-6 max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">CRIAR PARA <br/><span className="text-fuchsia-600 underline">RESISTIR.</span></h2>
                  <div className="space-y-6 text-neutral-400 text-lg">
                    <p>
                      Estudar e trabalhar não é um "lifestyle", é a realidade de quem constrói o próprio futuro do zero. 
                      A <span className="text-white font-bold">UaneBag</span> nasceu para financiar um sonho técnico.
                    </p>
                    <p className="border-l-4 border-fuchsia-600 pl-6 italic">
                      "Tenho um currículo vasto e uma sede maior ainda por desafios. Onde faltam oportunidades, eu utilizo a tecnologia para inventar meus caminhos."
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-80 aspect-square rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl rotate-3 hover:rotate-0">
                   <img src="/img/hero.jpg" alt="Lauane" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* UANEBAG - PRODUTOS (SEM PREÇO) */}
            <section className="py-24 px-6 bg-white text-black">
              <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center md:text-left">
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-4 uppercase">UaneBag®</h2>
                  <p className="text-neutral-600 max-w-xl text-lg font-medium italic">Edição limitada. Solicite disponibilidade e modelos exclusivos via direct.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  {[
                    { title: "Ecobag MPB MULHERES", desc: "A armadura do dia a dia. Espaçosa, reforçada e com estética industrial.", img: "/img/ecobag1.jpg" },
                    { title: "Ecobag LATINO AMERICANO", desc: "Minimalismo para quem carrega notebooks e ideias pesadas.", img: "/img/ecobag2.jpg" }
                  ].map((item, idx) => (
                    <div key={idx} className="group cursor-crosshair">
                      <div className="relative overflow-hidden aspect-[4/5] bg-neutral-100 mb-6">
                         <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                         <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Handmade</div>
                      </div>
                      <div className="mb-6">
                        <h3 className="text-3xl font-black tracking-tighter uppercase">{item.title}</h3>
                        <p className="text-neutral-500 max-w-xs text-sm mt-2">{item.desc}</p>
                      </div>
                      <a
                        href={`https://wa.me/5512997716710?text=Oi%20Uane!%20Quero%20saber%20mais%20sobre%20a%20${item.title}`}
                        className="w-full inline-flex items-center justify-center gap-3 py-4 bg-black text-white hover:bg-fuchsia-600 transition-colors font-bold uppercase text-xs tracking-[0.2em]"
                      >
                        <MessageCircle size={16} /> Consultar Disponibilidade
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-24 px-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-16">
                <Terminal className="text-fuchsia-500" />
                <h2 className="text-3xl font-black uppercase tracking-tighter italic underline">Logs de Evolução</h2>
              </div>
              
              <div className="relative border-l border-white/10 ml-4">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-12 ml-8 relative"
                  >
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#0b0014] border-2 border-fuchsia-500" />
                    <span className="text-xs font-mono text-fuchsia-500 mb-1 block tracking-[0.3em] font-bold">{item.year}</span>
                    <h4 className="text-xl font-black uppercase tracking-tight text-white mb-2">{item.title}</h4>
                    <p className="text-neutral-400 text-base leading-relaxed max-w-xl">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="py-32 px-6 text-center bg-fuchsia-600 text-white">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic uppercase">Não é só uma vaga, <br/>é um investimento.</h2>
              <p className="max-w-2xl mx-auto mb-12 text-lg font-medium opacity-90 leading-relaxed">
                Você viu meu corre, viu minha marca e viu meu código. <br/>
                Agora, que tal transformarmos esse potencial em resultado para sua empresa?
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <button 
                  onClick={() => window.open('https://wa.me/5512997716710','_blank')}
                  className="px-12 py-5 bg-black text-white font-black uppercase text-xs tracking-widest hover:scale-105 transition"
                >
                  Apoiar com PIX
                </button>
                <a href="mailto:lauanepb10@gmail.com" className="px-12 py-5 border-2 border-black text-black font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition">
                  Contratar Lauane
                </a>
              </div>
            </section>

            <footer className="py-20 px-6 border-t border-white/5 bg-black">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
                <div>
                  <h3 className="text-3xl font-black italic mb-2 tracking-tighter uppercase">UaneBag®</h3>
                  <p className="text-neutral-500 text-sm font-mono tracking-widest italic uppercase">Resistência Digital</p>
                </div>
                
                <div className="flex gap-8">
                  <a href="https://www.instagram.com/lauaneperes?igsh=MXdqN3J3ajBlMTNjag==" className="text-neutral-400 hover:text-fuchsia-500 transition"><Instagram size={28}/></a>
                  <a href="https://www.linkedin.com/in/lauane-barbosa/" className="text-neutral-400 hover:text-fuchsia-500 transition"><Linkedin size={28}/></a>
                  <a href="mailto:lauanepb10@gmail.com" className="text-neutral-400 hover:text-fuchsia-500 transition"><Mail size={28}/></a>
                </div>

                <div className="text-right">
                  <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-[0.4em] mb-2">Visitas Detectadas: {visits}</p>
                  <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest underline decoration-fuchsia-600 underline-offset-4">© 2026 Lauane Barbosa</p>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}