export interface Ad {
  id: number;
  link: string;
  html: string;
}

export const ADS: Ad[] = [
  {
    id: 1,
    link: 'https://www.infobroadcaster.com',
    html: `
      <div class="flex h-32 md:h-40 w-full items-center justify-between px-6 md:px-12 bg-gradient-to-r from-[#6324a0] via-[#9154cf] to-[#c9a7eb]">
        <div class="hidden sm:flex items-center gap-2 text-white/90">
          <img src="/ad/logo1.png" alt="Ad Image" class="h-16 w-16 object-contain" />
          <span class="text-2xl font-medium tracking-tight">Info Broadcaster</span>
        </div>
        <img src="/ad/rainbow.png" alt="Ad Image" class="h-16 w-16 object-contain" />
        <img src="/ad/matou.png" alt="Ad Image" class="h-32 w-16 object-contain absolute bottom-6 right-80" />
        <div class="flex flex-col items-end md:items-start text-right md:text-left space-y-1 md:space-y-2">
          <div>
            <h2 class="text-white text-lg md:text-2xl font-bold leading-tight">Diffusez vos idées !</h2>
            <p class="text-white/80 text-xs md:text-sm hidden sm:block">Connectez-vous maintenant !</p>
          </div>
          <div class="inline-block bg-white text-[#6324a0] px-4 py-1.5 rounded-lg text-xs md:text-sm font-bold shadow-sm group-hover:bg-[#7c3aed] group-hover:text-white transition-colors">
            Visiter le site
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 2,
    link: 'https://www.cnam-grandest.fr/',
    html: `
  <div class="relative flex h-32 md:h-40 w-full items-center justify-between overflow-hidden bg-[#E2001A] px-4 md:px-12">
    <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

    <div class="relative z-10 flex items-center gap-4 md:gap-8">
      <div class="flex h-16 w-16 md:h-24 md:w-24 shrink-0 items-center justify-center bg-white p-2 shadow-lg">
        <img src="/ad/cnam.png" alt="CNAM" class="object-contain" />
      </div>
      
      <div class="flex flex-col text-white">
        <h2 class="text-xl md:text-3xl font-black uppercase tracking-tighter leading-none">Formation CNAM</h2>
        <p class="text-xs md:text-lg font-medium opacity-90 mt-1">Devenez ingénieur informatique !</p>
      </div>
    </div>

    <div class="relative z-10 flex items-center h-full">
      <img src="/ad/j2m.png" alt="Formateur" class="absolute bottom-0 right-24 md:right-40 h-full object-contain hidden sm:block" />
      
      <div class="bg-white text-[#E2001A] px-4 py-2 md:px-6 md:py-3 rounded-full font-black text-sm md:text-base shadow-xl transform group-hover:scale-105 transition-transform">
        DÉCOUVRIR
      </div>
    </div>

    <div class="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/20 to-transparent"></div>
  </div>
`,
  },
  {
    id: 3,
    link: 'https://www.linkedin.com/in/edouard-mangel-/?originalSubdomain=fr',
    html: `
  <div class="relative flex h-32 md:h-40 w-full items-center justify-between overflow-hidden bg-slate-950 px-4 md:px-12">
    <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-red-900/20"></div>

    <div class="relative z-10 flex flex-col text-white max-w-[60%] md:max-w-xl">
      <div class="flex items-center gap-2 mb-1">
        <span class="h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
        <span class="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-red-500">Alerte Qualité Code</span>
      </div>
      <h2 class="text-xl md:text-3xl font-black italic leading-tight uppercase tracking-tighter">
        Ton code est <span class="text-red-600">sale</span> ?
      </h2>
      <p class="text-xs md:text-lg font-bold text-slate-400 mt-1 leading-tight">
        Edouard Mangel sait où tu habites!
      </p>
    </div>

    <div class="relative z-10 flex items-center h-full">
      <img src="/ad/edouard.png" alt="Edouard Mangel" class="absolute bottom-0 right-28 md:right-44 h-[90%] md:h-[110%] object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-110" />
      
      <div class="flex flex-col items-center gap-2">
         <div class="bg-red-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-black text-xs md:text-sm shadow-2xl border border-red-500 transform group-hover:bg-red-600 transition-all hover:scale-105 active:scale-95">
          REFACTO IMMÉDIAT
        </div>
        <span class="text-[9px] font-mono text-slate-500 hidden md:block italic">Dernier avertissement.</span>
      </div>
    </div>

    <div class="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%]"></div>
  </div>
`,
  },
];
