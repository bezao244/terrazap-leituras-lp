interface HeroProps {
  onCtaClick?: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 pb-40"
      style={{
        paddingTop: 'calc(8rem - 75px)',
      }}
    >
      {/* Main Headline */}
      <h1
        id="hero-headline"
        className="font-instrument text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal text-[#000000] animate-fade-rise"
        style={{
          lineHeight: '0.95',
          letterSpacing: '-2.46px',
        }}
      >
        Onde cada <span className="italic text-[#6F6F6F]">leitura</span> abre um novo{' '}
        <span className="italic text-[#6F6F6F]">horizonte.</span>
      </h1>

      {/* Description */}
      <p
        id="hero-description"
        className="font-inter text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-[#6F6F6F] animate-fade-rise-delay"
      >
        Um espaço para descobrir livros, compartilhar ideias e transformar boas histórias em novas perspectivas.
      </p>

      {/* Hero CTA Button */}
      <button
        id="hero-cta-btn"
        type="button"
        onClick={onCtaClick}
        className="rounded-full px-14 py-5 text-base font-medium mt-12 bg-[#000000] text-[#FFFFFF] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer animate-fade-rise-delay-2"
      >
        Explorar leituras
      </button>
    </section>
  );
}
