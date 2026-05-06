// ═══════════════════════════════════════
// DATA — positions from pixel analysis
// center_x%, center_y% on the 1800×1319 canvas
// These are the exact centers of each character's pixels
// ═══════════════════════════════════════
const PHILOSOPHERS = [
  {
    slug: "platao",
    name: "Platão",
    dates: "c. 428 – 348 a.C.",
    num: "01",
    position: "Centro — à esquerda, aponta para o céu",
    // center of character at 48.1%, 62.9% of painting
    cx: 48.1,
    cy: 62.9,
    sw: 22,
    sh: 26,
    text: "Pupilo de Sócrates e mestre de Aristóteles, Platão funda a tradição idealista: o mundo sensível é mera sombra de uma realidade superior de Formas perfeitas e eternas. Na pintura, aponta para o alto — em direção ao mundo das Ideias. Rafael deu-lhe o rosto de Leonardo da Vinci, o maior gênio que ele conhecia.",
  },
  {
    slug: "aristoteles",
    name: "Aristóteles",
    dates: "384 – 322 a.C.",
    num: "02",
    position: "Centro — à direita, mão estendida à terra",
    cx: 53.8,
    cy: 62.8,
    sw: 22,
    sh: 26,
    text: "Discípulo de Platão que superou o mestre em método. Aristóteles estende a mão para a terra — a realidade está nos objetos concretos, na observação e na lógica empírica. É o fundador da biologia, da física, da ética e da política como disciplinas sistemáticas. A oposição gestual entre os dois é o coração filosófico de toda a obra.",
  },
  {
    slug: "diogenes",
    name: "Diógenes",
    dates: "c. 412 – 323 a.C.",
    num: "03",
    position: "Centro — deitado nos degraus, indiferente",
    cx: 60.2,
    cy: 78.5,
    sw: 20,
    sh: 16,
    text: 'O filósofo cínico por excelência. Vivia em um tonel, rejeitava toda convenção social e provocava os poderosos sem cerimônia. Quando Alexandre, o Grande, lhe perguntou o que desejava, respondeu: "Que saias da minha luz." Rafael o representa deitado nos degraus — a única figura relaxada em toda a composição, soberanamente indiferente ao mundo intelectual ao redor.',
  },
  {
    slug: "heraclito",
    name: "Heráclito",
    dates: "c. 535 – 475 a.C.",
    num: "04",
    position: "Centro-baixo — melancólico, isolado",
    cx: 41.5,
    cy: 86.9,
    sw: 20,
    sh: 22,
    text: '"Não se entra duas vezes no mesmo rio" — o filósofo do eterno devir e da unidade dos opostos. Pensador solitário e obscuro da Jônia, aparece sentado sozinho e melancólico na composição, com o rosto de Michelangelo. Rafael o adicionou depois de ver o teto da Sistina, querendo homenagear o rival genial em plena execução da obra.',
  },
  {
    slug: "socrates",
    name: "Sócrates",
    dates: "c. 470 – 399 a.C.",
    num: "05",
    position: "Esquerda — gesticulando, contando nos dedos",
    cx: 32.9,
    cy: 61.9,
    sw: 16,
    sh: 22,
    text: "O pai da filosofia ocidental nunca escreveu uma linha sequer. Seu método — a maiêutica, ou arte de parir ideias — consistia em questionar até que o interlocutor chegasse ao conhecimento por si mesmo. Na obra, gesticula enumerando argumentos nos dedos, rodeado de jovens discípulos. Foi condenado à morte em Atenas por corrupção da juventude e impiedade.",
  },
  {
    slug: "alexandre",
    name: "Alexandre",
    dates: "356 – 323 a.C.",
    num: "06",
    position: "Esquerda — com elmo dourado",
    cx: 22.6,
    cy: 62.2,
    sw: 16,
    sh: 26,
    text: "Alexandre, o Grande — discípulo de Aristóteles e maior conquistador da Antiguidade. Rafael o representa como um jovem guerreiro com elmo dourado, próximo ao grupo de Sócrates, sugerindo a linhagem intelectual que conecta o filósofo ao seu mais famoso aluno e ao conquistador que este formou. Uma cadeia de sabedoria e poder que atravessou o mundo antigo.",
  },
  {
    slug: "pitagoras",
    name: "Pitágoras",
    dates: "c. 570 – 495 a.C.",
    num: "07",
    position: "Canto inferior esquerdo — escrevendo",
    cx: 20.7,
    cy: 86.7,
    sw: 18,
    sh: 24,
    text: "Matemático, filósofo e fundador de uma das primeiras comunidades filosóficas organizadas. Para Pitágoras, o número é a essência de todas as coisas — o cosmos é ordenado por relações matemáticas e harmônicas. Aparece na canto inferior esquerdo, debruçado e escrevendo intensamente, rodeado de discípulos que observam seu trabalho com admiração.",
  },
  {
    slug: "epicuro",
    name: "Epicuro",
    dates: "341 – 270 a.C.",
    num: "08",
    position: "Extremo esquerdo — coroado, lendo",
    cx: 7.4,
    cy: 72.4,
    sw: 16,
    sh: 18,
    text: "Fundador do epicurismo, escola que pregava a busca pela eudaimonia — o bem-estar duradouro — através da amizade, da filosofia e do prazer moderado. Contrariando sua reputação posterior, Epicuro não pregava o hedonismo: o maior prazer era a ataraxia, a paz da alma. Aparece lendo, com uma coroa de louros, no extremo esquerdo da composição.",
  },
  {
    slug: "euclides",
    name: "Euclides",
    dates: "c. 300 a.C.",
    num: "09",
    position: "Canto inferior direito — compasso na ardósia",
    cx: 86.7,
    cy: 86.4,
    sw: 18,
    sh: 22,
    text: "O pai da geometria debruça-se sobre uma ardósia, demonstrando um teorema com compasso para um grupo de alunos admirados. Rafael deu-lhe o rosto de Bramante — o arquiteto que estava projetando a nova Basílica de São Pedro simultaneamente à execução deste afresco. Uma homenagem de Rafael ao amigo que definia a geometria do espaço sagrado enquanto ele a pintava.",
  },
  {
    slug: "ptolomeu",
    name: "Ptolomeu",
    dates: "c. 100 – 170 d.C.",
    num: "10",
    position: "Canto direito inferior — globo celeste",
    cx: 94.5,
    cy: 80.9,
    sw: 16,
    sh: 32,
    text: "Astrônomo, matemático e geógrafo de Alexandria, Ptolomeu sistematizou o modelo geocêntrico do universo que permaneceu canônico por quatorze séculos. Aparece no canto direito carregando um globo celeste — seu emblema intelectual — de costas para o espectador, como se observasse o cosmos que modelou em tratados que definiram a visão de mundo ocidental até Copérnico.",
  },
  {
    slug: "zoroastro",
    name: "Zoroastro",
    dates: "c. 1500 – 1000 a.C.",
    num: "11",
    position: "Canto direito — globo estrelado",
    cx: 90.7,
    cy: 69.7,
    sw: 14,
    sh: 14,
    text: "Fundador do zoroastrismo, uma das religiões mais antigas do mundo, Zoroastro é representado segurando um globo estrelado — símbolo do conhecimento cósmico. Sua presença na obra demonstra a ambição totalizante de Rafael: reunir não apenas filósofos gregos, mas toda a tradição do saber humano, do Oriente ao Ocidente, num único espaço de diálogo universal.",
  },
];

// ═══════════════════════
// STATE
// ═══════════════════════
let active = null;

// ═══════════════════════
// BUILD NAV PILLS
// ═══════════════════════
const philNav = document.getElementById("phil-nav");
PHILOSOPHERS.forEach((p) => {
  const btn = document.createElement("button");
  btn.className = "phil-btn";
  btn.textContent = p.name;
  btn.dataset.slug = p.slug;
  btn.addEventListener("click", () => activatePhil(p.slug));
  philNav.appendChild(btn);
});

// ═══════════════════════
// BUILD MARKERS
// ═══════════════════════
const stageEl = document.getElementById("stage");
PHILOSOPHERS.forEach((p) => {
  const m = document.createElement("div");
  m.className = "marker";
  m.id = "marker-" + p.slug;
  m.style.left = p.cx + "%";
  m.style.top = p.cy + "%";
  m.innerHTML = `<div class="marker-dot">${p.num}</div><div class="marker-label">${p.name}</div>`;
  m.addEventListener("click", () => activatePhil(p.slug));
  stageEl.appendChild(m);
});

// ═══════════════════════
// ACTIVATE PHILOSOPHER
// ═══════════════════════
function activatePhil(slug) {
  // Toggle off if same
  if (active === slug) {
    deactivateAll();
    return;
  }
  active = slug;
  const p = PHILOSOPHERS.find((x) => x.slug === slug);

  // Transition painting to B&W
  document.getElementById("paint-color").style.opacity = "0";
  document.getElementById("paint-bw").style.opacity = "1";

  // Spotlight
  const sp = document.getElementById("spotlight");
  sp.style.left = p.cx - p.sw / 2 + "%";
  sp.style.top = p.cy - p.sh / 2 + "%";
  sp.style.width = p.sw + "%";
  sp.style.height = p.sh + "%";
  sp.style.opacity = "1";

  // Hide all philosopher PNGs
  document
    .querySelectorAll(".phil-img")
    .forEach((img) => img.classList.remove("active"));
  // Show active
  const img = document.getElementById("img-" + slug);
  if (img) img.classList.add("active");

  // Markers
  document
    .querySelectorAll(".marker")
    .forEach((m) => m.classList.remove("active-m"));
  const marker = document.getElementById("marker-" + slug);
  if (marker) marker.classList.add("active-m");

  // Nav pills
  document
    .querySelectorAll(".phil-btn")
    .forEach((b) => b.classList.remove("active"));
  const btn = philNav.querySelector(`[data-slug="${slug}"]`);
  if (btn) btn.classList.add("active");

  // Panel update with transition
  const panel = document.getElementById("panel");
  panel.style.opacity = "0";
  panel.style.transform = "translateY(8px)";

  setTimeout(() => {
    document.getElementById("panel-hint").style.display = "none";
    const content = document.getElementById("panel-content");
    content.style.display = "block";
    document.getElementById("p-num").textContent =
      p.num + " / " + String(PHILOSOPHERS.length).padStart(2, "0");
    document.getElementById("p-name").textContent = p.name;
    document.getElementById("p-dates").textContent = p.dates;
    document.getElementById("p-text").textContent = p.text;
    document.getElementById("p-pos").textContent = p.position;
    document.getElementById("panel-placeholder").textContent = p.num;

    panel.style.transition = "opacity .45s ease, transform .45s ease";
    panel.style.opacity = "1";
    panel.style.transform = "translateY(0)";
  }, 180);

  // Scroll panel into view
  setTimeout(() => {
    document
      .querySelector(".panel-wrap")
      .scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 350);
}

function deactivateAll() {
  active = null;
  document.getElementById("paint-color").style.opacity = "1";
  document.getElementById("paint-bw").style.opacity = "0";
  document.getElementById("spotlight").style.opacity = "0";
  document
    .querySelectorAll(".phil-img")
    .forEach((img) => img.classList.remove("active"));
  document
    .querySelectorAll(".marker")
    .forEach((m) => m.classList.remove("active-m"));
  document
    .querySelectorAll(".phil-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById("panel-hint").style.display = "flex";
  document.getElementById("panel-content").style.display = "none";
}

// ═══════════════════════
// SCROLL EFFECTS
// ═══════════════════════
const progressBar = document.getElementById("progress");

window.addEventListener(
  "scroll",
  () => {
    const st = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (st / docH) * 100 + "%";

    // Hero parallax
    const hbg = document.getElementById("hero-bg");
    if (hbg) hbg.style.transform = `scale(1.05) translateY(${st * 0.25}px)`;
  },
  { passive: true },
);

// ═══════════════════════
// INTERSECTION OBSERVER
// ═══════════════════════
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("vis");
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
);

document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

// ═══════════════════════
// CUSTOM CURSOR
// ═══════════════════════
const cur = document.getElementById("cur");
const trail = document.getElementById("cur-trail");
let tx = 0,
  ty = 0,
  cx2 = 0,
  cy2 = 0;

document.addEventListener(
  "mousemove",
  (e) => {
    cx2 = e.clientX;
    cy2 = e.clientY;
    cur.style.left = cx2 + "px";
    cur.style.top = cy2 + "px";
  },
  { passive: true },
);

(function animTrail() {
  tx += (cx2 - tx) * 0.1;
  ty += (cy2 - ty) * 0.1;
  trail.style.left = tx + "px";
  trail.style.top = ty + "px";
  requestAnimationFrame(animTrail);
})();

document.querySelectorAll("a,button,.marker,.phil-btn").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cur.style.width = "18px";
    cur.style.height = "18px";
    cur.style.borderColor = "#E8D5A0";
  });
  el.addEventListener("mouseleave", () => {
    cur.style.width = "10px";
    cur.style.height = "10px";
    cur.style.borderColor = "#C9A84C";
  });
});

// ═══════════════════════
// HERO BG ANIMATE IN
// ═══════════════════════
setTimeout(
  () => document.getElementById("hero-bg").classList.add("loaded"),
  80,
);

// Keyboard navigation for philosophers
document.addEventListener("keydown", (e) => {
  if (
    !document.getElementById("filosofos").getBoundingClientRect().top <
    window.innerHeight
  )
    return;
  const idx = active ? PHILOSOPHERS.findIndex((p) => p.slug === active) : -1;
  if (e.key === "ArrowRight")
    activatePhil(PHILOSOPHERS[(idx + 1) % PHILOSOPHERS.length].slug);
  if (e.key === "ArrowLeft")
    activatePhil(
      PHILOSOPHERS[(idx - 1 + PHILOSOPHERS.length) % PHILOSOPHERS.length].slug,
    );
  if (e.key === "Escape") deactivateAll();
});

// Guns
function revealGNR() {
  // 1. Hide the button
  document.getElementById("gnr-reveal-btn").style.display = "none";

  // 2. Show highlight box on Rafael detail
  document.getElementById("gnr-highlight").style.opacity = "1";
  document.getElementById("gnr-highlight-label").style.opacity = "1";
  document.getElementById("rafael-detail").style.filter =
    "sepia(.1) brightness(.6)";

  // 3. After 1.4s, collapse step-1 and expand comparison
  setTimeout(() => {
    const step1 = document.getElementById("gnr-step-rafael");
    step1.style.opacity = "0";
    step1.style.pointerEvents = "none";

    setTimeout(() => {
      step1.style.display = "none";
      const comp = document.getElementById("gnr-step-comparison");
      comp.style.height = "auto";
      comp.style.overflow = "visible";

      // Slight delay for reflow then fade in
      requestAnimationFrame(() => {
        comp.style.opacity = "1";

        // Album covers animate in with scale
        setTimeout(() => {
          const v1 = document.getElementById("gnr-vol1");
          const v2 = document.getElementById("gnr-vol2");
          v1.style.transform = "scale(1)";
          v1.style.boxShadow = "0 0 40px rgba(180,40,0,.35)";
          v1.querySelector("img").style.filter = "brightness(1)";
          v2.style.transform = "scale(1)";
          v2.style.boxShadow = "0 0 40px rgba(0,60,160,.35)";
          v2.querySelector("img").style.filter = "brightness(1)";
        }, 200);

        // Scroll into view
        setTimeout(() => {
          document
            .getElementById("gnr-step-comparison")
            .scrollIntoView({ behavior: "smooth", block: "start" });
        }, 400);
      });
    }, 600);
  }, 1400);
}
