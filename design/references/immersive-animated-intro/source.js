/* ═══════════════════════
   THEMES
═══════════════════════ */
const T = {
	breathe: {
		bg: "#0e0904",
		accent: [232, 96, 38],
		accentHex: "#e86026",
		vigA: "rgba(8,4,1,.54)",
		vigB: "rgba(4,2,0,.92)",
		textMain: "#ede7d8",
		textDim: "rgba(245,238,220,.26)",
		cueCol: "rgba(232,96,38,.75)",
		heroIdle: ["let yourself", "go"],
		heroIdleAccent: -1,
		heroAct: ["be here", "now"],
		heroActAccent: -1,
		tagIdle: "Breathing · Meditation · Stillness",
		tagAct: "inhale · hold · exhale · hold",
		cueStart: "breathe with the light",
		pattern: "Box Breathing",
		detail: "4 · 4 · 4 · 4",
		phases: [
			{ n: "inhale", d: 4 },
			{ n: "hold", d: 4 },
			{ n: "exhale", d: 4 },
			{ n: "hold", d: 4 }
		],
		barCol: "rgba(232,96,38,.55)",
		barLbl: "rgba(245,232,212,.45)",
		slPat: "rgba(245,232,212,.55)",
		slDet: "rgba(232,96,38,.7)",
		dotCol: "#e86026",
		ringCol: "rgba(232,96,38,.6)",
		navBg: "rgba(14,6,2,.82)",
		navBorder: "rgba(232,96,38,.28)",
		pillActive: "#fff0e0",
		pillDim: "rgba(245,225,200,.82)",
		pillActiveBg: "#e86026",
		pillDimBg: "transparent",
		thumbBg: "rgba(232,96,38,.45)",
		flashCol: "rgba(232,96,38,.07)"
	},
	meditate: {
		bg: "#060510",
		accent: [148, 105, 255],
		accentHex: "#9469ff",
		vigA: "rgba(3,2,12,.58)",
		vigB: "rgba(1,1,7,.94)",
		textMain: "#dfd7f5",
		textDim: "rgba(220,210,255,.24)",
		cueCol: "rgba(148,105,255,.75)",
		heroIdle: ["still your", "mind"],
		heroIdleAccent: -1,
		heroAct: ["drift into", "peace"],
		heroActAccent: -1,
		tagIdle: "Presence · Awareness · Depth",
		tagAct: "4 · 7 · 8 breathing",
		cueStart: "settle into stillness",
		pattern: "4–7–8 Breath",
		detail: "4 · 7 · 8",
		phases: [
			{ n: "inhale", d: 4 },
			{ n: "hold", d: 7 },
			{ n: "exhale", d: 8 }
		],
		barCol: "rgba(148,105,255,.55)",
		barLbl: "rgba(220,210,255,.45)",
		slPat: "rgba(220,210,255,.55)",
		slDet: "rgba(148,105,255,.7)",
		dotCol: "#9469ff",
		ringCol: "rgba(148,105,255,.6)",
		navBg: "rgba(6,3,18,.85)",
		navBorder: "rgba(148,105,255,.28)",
		pillActive: "#efe6ff",
		pillDim: "rgba(210,195,255,.82)",
		pillActiveBg: "#9469ff",
		pillDimBg: "transparent",
		thumbBg: "rgba(148,105,255,.45)",
		flashCol: "rgba(148,105,255,.06)"
	},
	anxiety: {
		bg: "#020904",
		accent: [60, 185, 98],
		accentHex: "#3cb962",
		vigA: "rgba(1,6,2,.58)",
		vigB: "rgba(0,4,1,.94)",
		textMain: "#cce8d4",
		textDim: "rgba(190,228,202,.24)",
		cueCol: "rgba(60,185,98,.75)",
		heroIdle: ["you are", "safe"],
		heroIdleAccent: -1,
		heroAct: ["this too", "passes"],
		heroActAccent: -1,
		tagIdle: "Ground · Release · Trust",
		tagAct: "slow breath · slow mind",
		cueStart: "you are safe right now",
		pattern: "Calm Breath",
		detail: "4 · 4 · 6",
		phases: [
			{ n: "inhale", d: 4 },
			{ n: "hold", d: 4 },
			{ n: "exhale", d: 6 }
		],
		barCol: "rgba(60,185,98,.52)",
		barLbl: "rgba(190,228,202,.45)",
		slPat: "rgba(190,228,202,.55)",
		slDet: "rgba(60,185,98,.7)",
		dotCol: "#3cb962",
		ringCol: "rgba(60,185,98,.6)",
		navBg: "rgba(2,12,4,.85)",
		navBorder: "rgba(60,185,98,.25)",
		pillActive: "#e0ffea",
		pillDim: "rgba(175,228,190,.82)",
		pillActiveBg: "#3cb962",
		pillDimBg: "transparent",
		thumbBg: "rgba(60,185,98,.45)",
		flashCol: "rgba(60,185,98,.05)"
	},
	nature: {
		bg: "#030d0e",
		accent: [105, 195, 215],
		accentHex: "#69c3d7",
		vigA: "rgba(1,7,8,.5)",
		vigB: "rgba(0,5,6,.88)",
		textMain: "#d2ecf0",
		textDim: "rgba(148,220,235,.28)",
		cueCol: "rgba(105,195,215,.75)",
		heroIdle: ["still as", "water"],
		heroIdleAccent: -1,
		heroAct: ["let rain", "fall"],
		heroActAccent: -1,
		tagIdle: "Lake · Rain · Wind · Stillness",
		tagAct: "breathe with the rain",
		cueStart: "listen to the water",
		pattern: "Nature Breath",
		detail: "follow the rain",
		phases: [
			{ n: "inhale", d: 5 },
			{ n: "exhale", d: 6 }
		],
		barCol: "rgba(105,195,215,.5)",
		barLbl: "rgba(148,220,235,.45)",
		slPat: "rgba(148,220,235,.55)",
		slDet: "rgba(105,195,215,.7)",
		dotCol: "#69c3d7",
		ringCol: "rgba(105,195,215,.6)",
		navBg: "rgba(2,14,18,.85)",
		navBorder: "rgba(105,195,215,.25)",
		pillActive: "#e6f7fb",
		pillDim: "rgba(155,215,230,.82)",
		pillActiveBg: "#69c3d7",
		pillDimBg: "transparent",
		thumbBg: "rgba(105,195,215,.45)",
		flashCol: "rgba(105,195,215,.05)"
	},
	classical: {
		bg: "#f4ece0",
		accent: [152, 22, 42],
		accentHex: "#98162a",
		vigA: "rgba(185,162,135,.3)",
		vigB: "rgba(155,128,98,.52)",
		textMain: "#221416",
		textDim: "rgba(55,22,28,.38)",
		cueCol: "rgba(132,16,36,.78)",
		heroIdle: ["listen to", "silence"],
		heroIdleAccent: -1,
		heroAct: ["feel the", "music"],
		heroActAccent: -1,
		tagIdle: "Classical · Harmony · Timeless",
		tagAct: "breathe with the phrase",
		cueStart: "let the music guide you",
		pattern: "Natural Breath",
		detail: "follow the phrase",
		phases: [
			{ n: "inhale", d: 4 },
			{ n: "exhale", d: 6 }
		],
		barCol: "rgba(132,16,36,.45)",
		barLbl: "rgba(55,22,28,.5)",
		slPat: "rgba(55,22,28,.55)",
		slDet: "rgba(132,16,36,.7)",
		dotCol: "#98162a",
		ringCol: "rgba(152,22,42,.5)",
		navBg: "rgba(244,235,218,.92)",
		navBorder: "rgba(152,22,42,.28)",
		pillActive: "#ffe6e8",
		pillDim: "rgba(130,60,40,.82)",
		pillActiveBg: "#98162a",
		pillDimBg: "transparent",
		thumbBg: "rgba(152,22,42,.45)",
		flashCol: "rgba(152,22,42,.05)"
	},
	jazz: {
		bg: "#0d0804",
		accent: [238, 162, 24],
		accentHex: "#eea218",
		vigA: "rgba(6,3,0,.44)",
		vigB: "rgba(4,2,0,.84)",
		textMain: "#ffedbc",
		textDim: "rgba(255,210,115,.3)",
		cueCol: "rgba(238,162,24,.82)",
		heroIdle: ["feel the", "groove"],
		heroIdleAccent: -1,
		heroAct: ["swing and", "sway"],
		heroActAccent: -1,
		tagIdle: "Jazz · Improvisation · Soul",
		tagAct: "ride the rhythm",
		cueStart: "let loose",
		pattern: "Free Breathing",
		detail: "follow the beat",
		phases: [
			{ n: "inhale", d: 3 },
			{ n: "exhale", d: 4 }
		],
		barCol: "rgba(238,162,24,.55)",
		barLbl: "rgba(255,210,115,.45)",
		slPat: "rgba(255,210,115,.55)",
		slDet: "rgba(238,162,24,.7)",
		dotCol: "#eea218",
		ringCol: "rgba(238,162,24,.65)",
		navBg: "rgba(22,10,0,.88)",
		navBorder: "rgba(238,162,24,.30)",
		pillActive: "#fff7e6",
		pillDim: "rgba(255,210,140,.82)",
		pillActiveBg: "#eea218",
		pillDimBg: "transparent",
		thumbBg: "rgba(238,162,24,.45)",
		flashCol: "rgba(238,162,24,.07)"
	}
};

const AFFIRMATIONS = [
	"In the cosmic scale of existence, this moment of fear is already dissolving.",
	"You have survived every hard day until now. Your record is perfect.",
	"Nothing troubling you right now will matter in a hundred years.",
	"The universe has held you this long. It is not about to let go.",
	"This feeling is weather — it will pass, as all weather does.",
	"You are not your anxiety. You are the sky; anxiety is just a cloud.",
	"Right now, in this breath, you are okay. That is enough.",
	"Everything is always working out for you, even when it feels otherwise.",
	"You are loved by forces far larger than your fears.",
	"Your nervous system is doing its job. You can thank it and let go.",
	"In ten years you will barely remember this moment. Be gentle.",
	"The earth is beneath you. The sky is above. You belong here.",
	"You don't have to solve everything tonight. Tonight, just breathe.",
	"Chaos has always given way to calm. This is the law of life.",
	"Nothing is permanent — not pain, not panic, not this moment."
];

const BASE_C = "https://archive.org/download/classical_music_202209/";
const CLASSICAL_TRACKS = [
	{ url: BASE_C + "Beethoven%20-%20Moonlight%20Sonata.mp3", name: "Beethoven — Moonlight Sonata" },
	{ url: BASE_C + "Chopin%20-%20Nocturne%20No%202.mp3", name: "Chopin — Nocturne No. 2" },
	{ url: BASE_C + "Beethoven%20-%20Fur%20Elise.mp3", name: "Beethoven — Für Elise" },
	{ url: BASE_C + "Chopin%20-%20Minute%20Waltz.mp3", name: "Chopin — Minute Waltz" }
];
const JAZZ_TRACKS = [
	{ url: "https://archive.org/download/78_west-end-blues_louis-armstrong-and-his-hot-five-louis-armstrong_gbia0001057a/West%20End%20Blues%20-%20Louis%20Armstrong.mp3", name: "Louis Armstrong — West End Blues" },
	{ url: "https://archive.org/download/78_saint-louis-blues_bessie-smith-louis-armstrong-w-c-handy_gbia0001052b/Saint%20Louis%20Blues%20-%20Bessie%20Smith.mp3", name: "Bessie Smith — Saint Louis Blues" },
	{ url: "https://archive.org/download/78_stardust_hoagy-carmichael_gbia0001352a/Stardust%20-%20Hoagy%20Carmichael.mp3", name: "Hoagy Carmichael — Stardust" },
	{ url: "https://archive.org/download/78_tiger-rag_original-dixieland-jass-band_gbia0000141b/Tiger%20Rag%20-%20Original%20Dixieland%20Jass%20Band.mp3", name: "Original Dixieland Jazz Band — Tiger Rag" },
	{ url: "https://archive.org/download/78_indiana_original-dixieland-jazz-band_gbia0000143a/Indiana%20-%20Original%20Dixieland%20Jazz%20Band.mp3", name: "Original Dixieland Jazz Band — Indiana" }
];
let musicAudio = null;

/* ═══ CANVAS ══ */
const bgC = document.getElementById("c-bg"),
	fxC = document.getElementById("c-fx"),
	tpC = document.getElementById("c-top");
const bgX = bgC.getContext("2d"),
	fxX = fxC.getContext("2d"),
	tpX = tpC.getContext("2d");
let W, H;
function resize() {
	W = bgC.width = fxC.width = tpC.width = innerWidth;
	H = bgC.height = fxC.height = tpC.height = innerHeight;
}
window.addEventListener("resize", resize);
resize();

/* ═══ STATE ══ */
let mode = "breathe", isActive = false, phase = 0, timer = 0, bs = 0, breathCount = 0, exhaleVal = 0;
let textAnim = 0, charData = [], cueChars = [];
let natureCycleT = 0;

/* ═══ MOUSE + DRAG STATE ══ */
let mx = 0.5, my = 0.5, rmx = 0.5, rmy = 0.5;
let pmx = 0.5, pmy = 0.5, mvx = 0, mvy = 0;
let clickImpulse = 0, isDragging = false, dragEnergy = 0;
let clickRipples = [];

document.addEventListener("mousedown", (e) => {
	isDragging = true;
	clickImpulse = 1.0;
	clickRipples.push({ x: e.clientX / W, y: e.clientY / H, t: 0, strength: 1.0 });
	if (clickRipples.length > 6) clickRipples.shift();
});
document.addEventListener("mouseup", () => { isDragging = false; });
document.addEventListener("mousemove", (e) => {
	pmx = mx; pmy = my;
	mx = e.clientX / W; my = e.clientY / H;
	mvx = (mx - pmx) * 60; mvy = (my - pmy) * 60;
	if (isDragging) {
		dragEnergy = Math.min(dragEnergy + Math.sqrt(mvx * mvx + mvy * mvy) * 0.04, 1.5);
		if (Math.random() < 0.08) {
			clickRipples.push({ x: mx, y: my, t: 0, strength: 0.4 + dragEnergy * 0.3 });
			if (clickRipples.length > 8) clickRipples.shift();
		}
	}
	const dotEl = document.getElementById("dot");
	dotEl.style.left = e.clientX + "px";
	dotEl.style.top = e.clientY + "px";
});
document.addEventListener("touchstart", (e) => {
	isDragging = true;
	const t2 = e.touches[0];
	clickImpulse = 1.0;
	clickRipples.push({ x: t2.clientX / W, y: t2.clientY / H, t: 0, strength: 1.0 });
	if (clickRipples.length > 6) clickRipples.shift();
}, { passive: true });
document.addEventListener("touchend", () => { isDragging = false; });
document.addEventListener("touchmove", (e) => {
	const t2 = e.touches[0];
	mx = t2.clientX / W; my = t2.clientY / H;
}, { passive: true });

/* lazy smoothing for cursor ring */
const dotEl = document.getElementById("dot"), ringEl = document.getElementById("ring");
let csx = 0, csy = 0, crx = 0, cry = 0;
document.addEventListener("mousemove", (e) => { csx = e.clientX; csy = e.clientY; });
(function ac() {
	crx += (csx - crx) * 0.11;
	cry += (csy - cry) * 0.11;
	rmx += (mx - rmx) * 0.04;
	rmy += (my - rmy) * 0.04;
	clickImpulse *= 0.94;
	dragEnergy *= 0.97;
	for (let i = clickRipples.length - 1; i >= 0; i--) {
		clickRipples[i].t += 0.016;
		if (clickRipples[i].t > 2.5) clickRipples.splice(i, 1);
	}
	mvx *= 0.88; mvy *= 0.88;
	ringEl.style.left = crx + "px";
	ringEl.style.top = cry + "px";
	requestAnimationFrame(ac);
})();

/* ═══ RIPPLES ══ */
function spawnRipple(x, y) {
	const el = document.createElement("div");
	el.className = "ripple";
	const th = T[mode], [ar, ag, ab] = th.accent, sz = 68 + bs * 52;
	el.style.cssText = `left:${x}px;top:${y}px;width:${sz}px;height:${sz}px;border:1.5px solid rgba(${ar},${ag},${ab},.55)`;
	document.body.appendChild(el);
	setTimeout(() => el.remove(), 880);
}
document.addEventListener("click", (e) => {
	if (e.target.closest("#mode-switcher") || e.target.closest("#breath-btn")) return;
	spawnRipple(e.clientX, e.clientY);
});
document.addEventListener("touchstart", (e) => {
	[...e.touches].forEach((t3) => {
		if (!e.target.closest("#mode-switcher") && !e.target.closest("#breath-btn"))
			spawnRipple(t3.clientX, t3.clientY);
	});
}, { passive: true });

/* ═══ TEXT BUILD ══ */
function buildHeroText(lines, tag) {
	const h1 = document.getElementById("h1-text");
	h1.innerHTML = "";
	charData = [];
	const th = T[mode];
	if (mode === "classical") {
		h1.style.fontFamily = "'Playfair Display',serif";
		h1.style.fontWeight = "300";
		h1.style.fontStyle = "italic";
		h1.style.letterSpacing = "-0.01em";
	} else if (mode === "jazz") {
		h1.style.fontFamily = "'Syne',sans-serif";
		h1.style.fontWeight = "800";
		h1.style.fontStyle = "normal";
		h1.style.letterSpacing = "0.04em";
	} else {
		h1.style.fontFamily = "'Cormorant Garamond',serif";
		h1.style.fontWeight = "300";
		h1.style.fontStyle = "italic";
		h1.style.letterSpacing = "-0.02em";
	}
	lines.forEach((lineText, li) => {
		const lineEl = document.createElement("div");
		lineEl.style.cssText = "display:block;text-align:center;";
		const words = lineText.split(" ");
		words.forEach((w, wi) => {
			if (wi > 0) {
				const sp = document.createElement("span");
				sp.className = "word-space";
				lineEl.appendChild(sp);
			}
			const wrap = document.createElement("span");
			wrap.className = "word-wrap";
			lineEl.appendChild(wrap);
			[...w].forEach((ch, ci) => {
				const s = document.createElement("span");
				s.className = "char";
				s.textContent = ch;
				s.style.color = th.textMain;
				wrap.appendChild(s);
				charData.push({
					el: s, line: li, word: wi, idx: ci,
					phase: Math.random() * Math.PI * 2,
					freq: 0.00036 + Math.random() * 0.00025,
					amp: 3 + Math.random() * 5.5
				});
			});
		});
		h1.appendChild(lineEl);
	});
	const allChars = h1.querySelectorAll(".word-wrap:last-child .char");
	allChars.forEach((c) => (c.style.color = th.accentHex));
	const tgEl = document.getElementById("tagline-text");
	tgEl.textContent = tag;
	tgEl.style.color = th.textDim;
}

function buildCueText(txt) {
	const el = document.getElementById("cue");
	el.innerHTML = "";
	cueChars.length = 0;
	[...txt].forEach((ch, i) => {
		if (ch === " ") { el.appendChild(document.createTextNode(" ")); return; }
		const s = document.createElement("span");
		s.className = "cue-char";
		s.textContent = ch;
		el.appendChild(s);
		cueChars.push({ el: s, i, phase: i * 0.17, freq: 0.00046 + i * 0.000016, amp: 2 + Math.random() * 3 });
	});
	el.style.color = T[mode].cueCol;
}

/* ═══ SHARED WAVE HELPER (used by all six modes) ══ */
function wv(ctx, t, yc, amp, fm, sp, ph2, chaos, mouseAmp) {
	const ma = mouseAmp || 0;
	const yB = H * yc + H * (rmy - 0.5) * ma * 0.06;
	ctx.beginPath();
	for (let x = 0; x <= W; x += 3) {
		const nx = x / W, ph = t * sp;
		const mouseWarp = (rmx - 0.5) * ma * amp * 0.5 * Math.sin(nx * Math.PI * 2 + 0.5);
		const dragWarp = dragEnergy * amp * 0.3 * Math.sin(nx * Math.PI * 3 + t * 0.003 + (rmx - 0.5) * 4);
		let rippleWarp = 0;
		for (const r of clickRipples) {
			const dx = nx - r.x, age = r.t;
			const wavefront = age * 0.6, dist = Math.abs(dx), spread = 0.12 + age * 0.2;
			rippleWarp += r.strength * amp * 0.22 *
				Math.exp(-Math.pow(dist - wavefront, 2) / (spread * spread)) *
				Math.exp(-age * 0.9) * Math.sin((dist - wavefront) * 18);
		}
		let y = yB + mouseWarp + dragWarp + rippleWarp +
			Math.sin(nx * Math.PI * 2 * fm + ph * 7) * amp * (1 + ma * 0.4) +
			Math.sin(nx * Math.PI * 3 * fm * 0.73 + ph * 5.2 + ph2) * amp * 0.4;
		if (chaos > 0.04) {
			y += Math.sin(nx * Math.PI * 8 * fm + ph * 16 + ph2) * amp * chaos * 0.55;
			y += Math.sin(nx * Math.PI * 14 * fm + ph * 24) * amp * chaos * 0.22;
		}
		x === 0 ? ctx.moveTo(0, y) : ctx.lineTo(x, y);
	}
}

/* ═══════════════════════════════════════════════════════════════════════
   FULL ORIGINAL SOURCE — the remaining ~1100 lines of the CodePen are the
   six per-mode canvas renderers (drawBreathe / drawMeditate / drawAnxiety /
   drawNature / drawClassical / drawJazz), the enhanced animateText() with
   drag/click reactions, the drawMouseWave() overlay, the WebAudio synthesis
   engine (mkCtx, pinkBuf, loopNoise, pad, drops, bells, crickets, owl,
   rainSound, windSound, waterDrops, whoosh, synthJazz, playMusicTrack,
   startAudio), the affirmation cycler, applyTheme(), the nav-thumb logic,
   startSession()/stopSession(), the render() loop, and the window "load"
   init. They are preserved verbatim in the FULL reference kept alongside
   this project (see README.md → "Full source"). This file captures the
   architecture and the parts we would actually reuse; the audio/breathing
   layers are intentionally NOT part of what we would ship. Treat the whole
   thing as a study asset, adapt — do not copy wholesale — and verify the
   original author's licence before reuse.
   ═══════════════════════════════════════════════════════════════════════ */
