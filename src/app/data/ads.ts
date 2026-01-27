export interface Ad {
  id: number;
  link: string;
  html: string;
}

export const ADS: Ad[] = [
  {
    id: 1,
    link: 'https://infobroadcaster.netlify.app',
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
  {
    id: 4,
    link: '/subscribe',
    html: `
  <div class="relative flex h-32 md:h-40 w-full items-center justify-between overflow-hidden bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 px-4 md:px-8">
    
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <img src="/ad/test.gif" alt="Animation publicitaire" class="h-full w-full object-cover opacity-50 blur-sm scale-110" />
    </div>

    <div class="relative z-10 flex flex-col sm:flex-row items-center justify-between w-full text-white">
      
      <div class="text-center sm:text-left mb-3 sm:mb-0">
        <h2 class="text-2xl md:text-3xl font-extrabold leading-tight tracking-tight">
          <span class="bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">OFFRE FLASH GAMERZ!</span>
        </h2>
        <p class="text-sm md:text-base opacity-90 mt-1">Ne manquez pas nos promotions exclusives.</p>
      </div>
      
      <div class="flex items-center gap-4">
        <div class="relative text-lg md:text-xl font-bold p-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm shadow-md">
          Code: <span class="text-yellow-300">B1M20</span>
        </div>
        <button class="bg-yellow-400 text-purple-900 px-5 py-2 md:px-7 md:py-3 rounded-full font-extrabold text-sm md:text-base shadow-xl transform group-hover:scale-105 active:scale-95 transition-all">
          Profiter !
        </button>
      </div>

    </div>

    <div class="absolute bottom-0 left-0 bg-white/20 text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider backdrop-blur-sm">
      Pub animée
    </div>
  </div>
`,
  },
  {
    id: 5,
    link: 'https://www.bozlak-kebab.fr/', // Remplace par le vrai lien
    html: `
  <div class="relative flex h-32 md:h-40 w-full items-center justify-between overflow-hidden bg-gradient-to-r from-[#1a1a1a] via-[#331a00] to-[#e67e22] px-4 md:px-12">
    <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

    <div class="relative z-10 flex flex-col text-white max-w-[50%]">
      <div class="flex items-center gap-2 mb-1 md:mb-2">
        <span class="bg-orange-500 text-[10px] font-black px-2 py-0.5 rounded uppercase">Authentique</span>
        <span class="text-orange-200 text-[10px] md:text-xs font-mono">#BozlakStyle</span>
      </div>
      <h2 class="text-xl md:text-4xl font-black italic uppercase leading-none tracking-tighter shadow-black drop-shadow-lg">
        Bozlak <span class="text-orange-500">Kebab</span>
      </h2>
      <p class="text-xs md:text-lg font-bold text-white/90 mt-1 md:mt-2 italic">
        La découpe des maîtres, le goût de la tradition.
      </p>
    </div>

    <div class="relative z-10 flex items-center h-full">
      <div class="absolute bottom-0 right-28 md:right-48 h-[110%] w-48 md:w-64">
        <img src="/ad/fatih.jpg" alt="Chef Bozlak" class="h-full w-full object-cover object-top mask-linear-gradient drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]" 
             style="mask-image: linear-gradient(to right, transparent, black 20%); -webkit-mask-image: linear-gradient(to right, transparent, black 20%);" />
      </div>
      
      <div class="flex flex-col items-center gap-2">
        <div class="group relative inline-flex">
          <div class="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <button class="relative bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-lg font-black text-xs md:text-sm shadow-xl transition-all transform hover:scale-105 active:scale-95">
            COMMANDER MAINTENANT
          </button>
        </div>
        <span class="text-[9px] md:text-[10px] font-bold text-orange-200 uppercase tracking-widest hidden md:block">Ouvert 7j/7</span>
      </div>
    </div>

    <div class="absolute bottom-0 right-0 w-1/2 h-1/4 bg-gradient-to-t from-orange-600/20 to-transparent pointer-events-none"></div>
  </div>
`,
  },
  {
    id: 6,
    link: 'https://www.sacchetto-pizza.com/', // Remplace par le vrai lien
    html: `
  <div class="relative flex h-32 md:h-40 w-full items-center justify-between overflow-hidden bg-white px-4 md:px-12">
    <div class="absolute inset-0 flex">
      <div class="w-1/3 h-full bg-[#009246] opacity-90"></div>
      <div class="w-1/3 h-full bg-white"></div>
      <div class="w-1/3 h-full bg-[#ce2b37] opacity-90"></div>
    </div>

    <div class="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>

    <div class="relative z-10 flex flex-col max-w-[55%]">
      <div class="flex items-center gap-2 mb-1">
        <span class="bg-[#ce2b37] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">La Vera Pizza</span>
        <span class="text-[#009246] text-[10px] md:text-xs font-black italic tracking-widest">#ItaliaTradizione</span>
      </div>
      <h2 class="text-xl md:text-4xl font-serif font-black text-slate-900 leading-none">
        SACCHETTO <br class="hidden md:block"> <span class="text-[#ce2b37]">de la Mama</span>
      </h2>
      <p class="text-xs md:text-lg font-medium text-slate-700 mt-1 md:mt-2 italic">
        Les pizzas Italia de la mama ! 🇮🇹
      </p>
    </div>

    <div class="relative z-10 flex items-center h-full">
      <div class="absolute bottom-0 right-24 md:right-44 h-[95%] w-40 md:w-56 overflow-hidden">
        <img src="/ad/vlad.png" alt="Chef Sacchetto" class="h-full w-full object-contain object-bottom drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" 
             style="mask-image: linear-gradient(to top, black 80%, transparent); -webkit-mask-image: linear-gradient(to top, black 80%, transparent);" />
      </div>
      
      <div class="flex flex-col items-center gap-2">
        <button class="group relative flex items-center justify-center px-6 py-2 md:px-8 md:py-3 font-black text-white bg-[#009246] rounded-full shadow-[0_4px_0_0_#006430] hover:shadow-[0_2px_0_0_#006430] hover:translate-y-[2px] transition-all">
          DÉGUSTER
        </button>
        <div class="flex items-center gap-1">
           <span class="text-[9px] md:text-[10px] font-bold text-slate-800 uppercase tracking-tighter bg-white/50 px-2 py-0.5 rounded">▶ Préparé avec amour</span>
        </div>
      </div>
    </div>

    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#009246] via-white to-[#ce2b37]"></div>
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#009246] via-white to-[#ce2b37]"></div>
  </div>
`,
  },
  {
    id: 7,
    link: 'https://chargemap.com/about/jobs', // Lien vers la page recrutement
    html: `
<div class="relative flex h-32 md:h-40 w-full items-center justify-between overflow-hidden bg-[#00AEEF] px-4 md:px-12">
    <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
    
    <div class="relative z-10 flex items-center gap-4 md:gap-6">
      <div class="flex h-16 w-16 md:h-20 md:w-20 shrink-0 items-center justify-center bg-white rounded-xl shadow-lg p-2">
        <img src="/ad/chargemap.png" alt="Logo" class="object-contain" />
      </div>
      
      <div class="flex flex-col">
        <h1 class="text-3xl md:text-5xl font-black text-white leading-none tracking-tighter uppercase">
          Charge<span class="text-yellow-300">Map</span>
        </h1>
        <div class="flex items-center gap-2 mt-1">
          <span class="bg-white/20 text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded backdrop-blur-sm">
            RECRUTEMENT IT
          </span>
        </div>
      </div>
    </div>

    <div class="relative z-10 flex flex-col items-end text-right">
      <h2 class="text-white text-lg md:text-2xl font-bold leading-tight">
        Rejoins la team <span class="underline decoration-yellow-300 decoration-2 underline-offset-4 text-yellow-300">Alternance</span>
      </h2>
      <p class="text-white/90 text-xs md:text-sm mb-3 font-medium italic">
        Strasbourg ou Télétravail
      </p>
      
      <div class="group relative inline-flex">
        <div class="absolute -inset-1 bg-white rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-300"></div>
        <button class="relative bg-yellow-300 text-[#00AEEF] px-6 py-2 md:px-8 md:py-2.5 rounded-lg font-black text-xs md:text-sm shadow-xl transition-all transform hover:scale-105 active:scale-95">
          POSTULER
        </button>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 h-1.5 bg-yellow-300 animate-[pulse_1.5s_infinite]" style="width: 100%"></div>
  </div>
`,
  },
];
