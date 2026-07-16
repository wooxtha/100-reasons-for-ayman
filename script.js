/* =========================================================
   AYMAN, MY SWEET ANGEL — script.js
   ---------------------------------------------------------
   WANT TO EDIT THE 100 REASONS?
   Scroll down to the "reasons" array below. Each line is
   one card. Just rewrite the text between the quotes —
   you don't need to touch anything else in this file.
   ========================================================= */

/* ---------------------------------------------------------
   THE 100 REASONS
   Each reason has a category (used as the little label
   at the top of the card) and a text (the reason itself).
   Feel free to replace ANY of these with your own memories —
   the numbering will update itself automatically.
--------------------------------------------------------- */
const reasons = [
  // ---- YOUR PERSONALITY (1–17) ----
  { category: "your personality", text: "Because you are kind even when no one is watching, and especially when it costs you something." },
  { category: "your personality", text: "Because you listen to finish understanding, not just to finish talking." },
  { category: "your personality", text: "Because your humor sneaks up on me — dry one second, ridiculous the next." },
  { category: "your personality", text: "Because you say what you mean, and I never have to guess where I stand with you." },
  { category: "your personality", text: "Because you're gentle with people who are having a hard day, including me." },
  { category: "your personality", text: "Because you're stubborn about the right things — your values don't bend just to keep the peace." },
  { category: "your personality", text: "Because you ask questions like you actually want to know the answer." },
  { category: "your personality", text: "Because you're curious about things that have nothing to do with you, just because they're interesting." },
  { category: "your personality", text: "Because you apologize first when you know you're wrong, no ego about it." },
  { category: "your personality", text: "Because you're patient with slow mornings, long stories, and me changing my mind three times." },
  { category: "your personality", text: "Because your calm is contagious — you slow the room down just by being in it." },
  { category: "your personality", text: "Because you're honest in a soft way, never honest just to be cruel." },
  { category: "your personality", text: "Because you take care of the people you love without needing to be thanked for it." },
  { category: "your personality", text: "Because you have this quiet confidence that never needs to be loud to be felt." },
  { category: "your personality", text: "Because you're silly in private in a way almost no one else gets to see." },
  { category: "your personality", text: "Because you take responsibility instead of making excuses." },
  { category: "your personality", text: "Because you are, plainly, one of the good ones — and I don't say that lightly." },

  // ---- WHY YOU MAKE ME HAPPY (18–34) ----
  { category: "you make me happy", text: "Because you make ordinary Tuesdays feel like something worth remembering." },
  { category: "you make me happy", text: "Because your laugh is one of my favorite sounds in the entire world." },
  { category: "you make me happy", text: "Because you remember the small things I mention once in passing." },
  { category: "you make me happy", text: "Because you make fun of me in the exact way that makes me laugh instead of hurt." },
  { category: "you make me happy", text: "Because you get excited about my good news like it's your own." },
  { category: "you make me happy", text: "Because you send me things throughout the day that made you think of me." },
  { category: "you make me happy", text: "Because a bad day gets smaller the second I hear your voice." },
  { category: "you make me happy", text: "Because you turn errands into inside jokes." },
  { category: "you make me happy", text: "Because you dance badly and completely without shame, and I love you for it." },
  { category: "you make me happy", text: "Because you make me feel interesting, even when I'm just telling you about my day." },
  { category: "you make me happy", text: "Because you plan little surprises just to see my face when I find out." },
  { category: "you make me happy", text: "Because you're the person I want to tell things to first, good or bad." },
  { category: "you make me happy", text: "Because being near you feels like exhaling after holding my breath all day." },
  { category: "you make me happy", text: "Because you make me laugh so hard I forget what we were even talking about." },
  { category: "you make me happy", text: "Because your good mood is contagious, even through a phone screen." },
  { category: "you make me happy", text: "Because you find joy in small things, and it reminds me to look for it too." },
  { category: "you make me happy", text: "Because loving you is easy, even on the days when everything else isn't." },

  // ---- HOW SAFE I FEEL WITH YOU (35–51) ----
  { category: "i feel safe with you", text: "Because I can say the ugly, unfiltered version of my feelings and you don't flinch." },
  { category: "i feel safe with you", text: "Because you never use my vulnerable moments against me later." },
  { category: "i feel safe with you", text: "Because your arms feel like the safest place I know." },
  { category: "i feel safe with you", text: "Because you make room for my bad days without making me feel like a burden." },
  { category: "i feel safe with you", text: "Because I trust you with the parts of me I don't show anyone else." },
  { category: "i feel safe with you", text: "Because you stay calm when I'm anxious, instead of making it worse." },
  { category: "i feel safe with you", text: "Because you've never once made me feel small for feeling something deeply." },
  { category: "i feel safe with you", text: "Because your word means something — if you say it, I know it's true." },
  { category: "i feel safe with you", text: "Because I can fall asleep on the phone with you and it feels like the safest sleep there is." },
  { category: "i feel safe with you", text: "Because you check on me without me having to ask." },
  { category: "i feel safe with you", text: "Because you make disagreements feel like something we solve together, not a fight to win." },
  { category: "i feel safe with you", text: "Because I never have to perform a version of myself around you." },
  { category: "i feel safe with you", text: "Because you hold space for my fears instead of rushing me past them." },
  { category: "i feel safe with you", text: "Because even when we're upset with each other, I never doubt that you love me." },
  { category: "i feel safe with you", text: "Because you are the calm I come back to when everything else feels loud." },
  { category: "i feel safe with you", text: "Because you've earned every bit of the trust I have in you." },
  { category: "i feel safe with you", text: "Because home stopped being a place and started being wherever you are." },

  // ---- MEMORIES WE SHARE (52–68) ----
  { category: "a memory we share", text: "The way you looked at me the very first time we really talked — like you already knew." },
  { category: "a memory we share", text: "That one night we stayed up talking about nothing and everything until the sky changed color." },
  { category: "a memory we share", text: "The first time you made me laugh so hard I actually cried." },
  { category: "a memory we share", text: "The playlist you made me that somehow explained things you couldn't say out loud." },
  { category: "a memory we share", text: "The day you showed up right when I needed someone and didn't even ask why." },
  { category: "a memory we share", text: "That silly argument over something small that we still bring up and laugh about now." },
  { category: "a memory we share", text: "The first trip we took together and how easy it was to just be with you." },
  { category: "a memory we share", text: "The message you sent that I still have saved because of how it made me feel." },
  { category: "a memory we share", text: "The first time you said something and I thought, oh — I could really fall for this person." },
  { category: "a memory we share", text: "That ordinary evening that somehow became one of my favorite memories of us." },
  { category: "a memory we share", text: "The way we found our own little rhythm — our own jokes, our own language." },
  { category: "a memory we share", text: "The time you stayed on the phone with me until I fell asleep because I didn't want to hang up." },
  { category: "a memory we share", text: "The photo I keep going back to because of exactly how you were looking at me in it." },
  { category: "a memory we share", text: "The first \"I love you\" — however it happened, however nervous we both were." },
  { category: "a memory we share", text: "The little tradition we built without ever really deciding to." },
  { category: "a memory we share", text: "The version of us from our very first weeks, still a little shy, already so sure." },
  { category: "a memory we share", text: "Every ordinary day with you that somehow became a memory I didn't know I was making at the time." },

  // ---- LITTLE HABITS I LOVE ABOUT YOU (69–84) ----
  { category: "a little habit i love", text: "The way you say my name differently when you're being soft with me." },
  { category: "a little habit i love", text: "How you always text \"landed safe\" or \"home safe\" without me having to ask." },
  { category: "a little habit i love", text: "The way you get a little shy right before you say something sincere." },
  { category: "a little habit i love", text: "How you hum without noticing you're doing it." },
  { category: "a little habit i love", text: "The way you always offer me the last bite of whatever you're eating." },
  { category: "a little habit i love", text: "How you check the weather for wherever I am before I even mention it." },
  { category: "a little habit i love", text: "The specific laugh you do when something catches you off guard." },
  { category: "a little habit i love", text: "How you always have to have the last word in an argument, even a silly one." },
  { category: "a little habit i love", text: "The way you say \"one more episode\" and mean it every single time." },
  { category: "a little habit i love", text: "How you talk with your hands when you're excited about something." },
  { category: "a little habit i love", text: "The way you always ask \"did you eat yet?\" before anything else." },
  { category: "a little habit i love", text: "How you get oddly competitive about the smallest, most pointless games." },
  { category: "a little habit i love", text: "The way you say goodnight like you actually mean for it to be a good one." },
  { category: "a little habit i love", text: "How your voice gets quieter right before you say something you really mean." },
  { category: "a little habit i love", text: "The little face you make when you're concentrating on something." },
  { category: "a little habit i love", text: "How you always find a way to make me smile, even through a screen, even from far away." },

  // ---- HOW YOU SUPPORT ME (85–100) ----
  { category: "how you support me", text: "Because you believe in my plans before I've even fully believed in them myself." },
  { category: "how you support me", text: "Because you never make me feel silly for wanting something big." },
  { category: "how you support me", text: "Because you celebrate my wins like they're the best news you've heard all week." },
  { category: "how you support me", text: "Because you remind me of my own strength on the days I forget I have any." },
  { category: "how you support me", text: "Because you show up — not just when it's easy, but when it actually matters." },
  { category: "how you support me", text: "Because you never once made me choose between your love and my own goals." },
  { category: "how you support me", text: "Because you talk me down gently when I spiral, instead of telling me to just calm down." },
  { category: "how you support me", text: "Because you take my stress seriously instead of brushing it off." },
  { category: "how you support me", text: "Because you're proud of me in the quiet, unglamorous moments, not just the big ones." },
  { category: "how you support me", text: "Because you push me to try, gently, without ever making me feel pressured." },
  { category: "how you support me", text: "Because you're the first person I want in my corner when things get hard." },
  { category: "how you support me", text: "Because your \"you've got this\" has gotten me through more than you probably know." },
  { category: "how you support me", text: "Because you make space for my dreams, even the ones that are still half-formed." },
  { category: "how you support me", text: "Because you never let me shrink myself just to make things comfortable." },
  { category: "how you support me", text: "Because you're steady — the kind of person I know will still be there tomorrow." },
  { category: "how you support me", text: "Because loving you, Ayman, has quietly made me a softer, braver, happier version of myself." },
];

/* =========================================================
   SCRAPBOOK REASON BOOK
   ========================================================= */

const reasonText = document.getElementById("reasonText");
const reasonPage = document.getElementById("reasonPage");
const pageNumber = document.getElementById("pageNumber");

const nextReason = document.getElementById("nextReason");
const prevReason = document.getElementById("prevReason");

const reasonsSeen = document.getElementById("reasonsSeen");
const progressBar = document.getElementById("reasonsProgressBar");

let currentReason = 0;

function updateReason(){

    reasonPage.classList.add("turning");

    setTimeout(()=>{

        reasonText.textContent = reasons[currentReason].text;

        const roman = [
        "I","II","III","IV","V","VI","VII","VIII","IX","X",
        "XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX",
        "XXI","XXII","XXIII","XXIV","XXV","XXVI","XXVII","XXVIII","XXIX","XXX",
        "XXXI","XXXII","XXXIII","XXXIV","XXXV","XXXVI","XXXVII","XXXVIII","XXXIX","XL",
        "XLI","XLII","XLIII","XLIV","XLV","XLVI","XLVII","XLVIII","XLIX","L",
        "LI","LII","LIII","LIV","LV","LVI","LVII","LVIII","LIX","LX",
        "LXI","LXII","LXIII","LXIV","LXV","LXVI","LXVII","LXVIII","LXIX","LXX",
        "LXXI","LXXII","LXXIII","LXXIV","LXXV","LXXVI","LXXVII","LXXVIII","LXXIX","LXXX",
        "LXXXI","LXXXII","LXXXIII","LXXXIV","LXXXV","LXXXVI","LXXXVII","LXXXVIII","LXXXIX","XC",
        "XCI","XCII","XCIII","XCIV","XCV","XCVI","XCVII","XCVIII","XCIX","C"
        ];

        pageNumber.textContent = roman[currentReason];

        reasonsSeen.textContent = currentReason+1;

        progressBar.style.setProperty(
            "--progress",
            `${((currentReason+1)/reasons.length)*100}%`
        );

        prevReason.disabled = currentReason===0;

       if(currentReason===reasons.length-1){

    nextReason.style.display = "none";

    document.getElementById("musicUnlock").style.display = "flex";

}else{

    nextReason.style.display = "flex";

    nextReason.innerHTML = "›";

    document.getElementById("musicUnlock").style.display = "none";

}

        reasonPage.classList.remove("turning");

    },180);

}

nextReason.addEventListener("click",()=>{

    if(currentReason<reasons.length-1){

        currentReason++;

        updateReason();
}
});

prevReason.addEventListener("click",()=>{

    if(currentReason>0){

        currentReason--;

        updateReason();

    }

});

updateReason();

/* =========================================================
   SCROLL REVEAL (fades sections + cards in as you scroll)
   ========================================================= */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) =>
  revealObserver.observe(el)
);

/* =========================================================
   FLOATING HEARTS BACKGROUND ANIMATION
   ========================================================= */
const heartsLayer = document.getElementById('heartsLayer');
const heartSymbols = ['·', '•'];

function spawnHeart() {
  const heart = document.createElement('span');
  heart.className = 'floating-heart';
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${4 + Math.random() * 5}px`;
  heart.style.setProperty('--drift', `${(Math.random() - 0.5) * 40}px`);
  heart.style.animationDuration = `${8 + Math.random() * 10}s`;
  heartsLayer.appendChild(heart);
  setTimeout(() => heart.remove(), 15000);
}

// Spawn a gentle drift of hearts, not too many at once
setInterval(spawnHeart, 5000);
for (let i = 0; i < 2; i++) setTimeout(spawnHeart, i * 500);

/* =========================================================
   OPEN BUTTON — smooth scroll from cover to memories
   ========================================================= */
document.getElementById("openButton").addEventListener("click", () => {

    const memories = document.getElementById("memories");

    memories.style.display = "block";

    memories.scrollIntoView({
        behavior: "smooth"
    });

});

document.getElementById("videoButton").addEventListener("click", () => {

    const video = document.getElementById("video");

    video.style.display = "block";

    video.scrollIntoView({
        behavior:"smooth"
    });

});

document.getElementById("chapterButton").addEventListener("click", () => {

    const chapter = document.getElementById("chapterBreak");

    chapter.style.display = "block";

    chapter.scrollIntoView({
        behavior:"smooth"
    });

});

/* =========================================================
   CHAPTER BREAK
   ========================================================= */

document.getElementById("reasonsButton").addEventListener("click", () => {

    const reasons = document.getElementById("reasons");

    reasons.style.display = "block";

    reasons.scrollIntoView({
        behavior: "smooth"
    });

});

document.getElementById("musicButton").addEventListener("click", () => {

    const music = document.getElementById("music");

    music.style.display = "block";

    music.scrollIntoView({
        behavior:"smooth"
    });

});

document.getElementById("letterButton").addEventListener("click", () => {

    const letter = document.getElementById("letter");

    letter.style.display = "block";

    letter.scrollIntoView({
        behavior:"smooth"
    });

});
/* =========================================================
   MUSIC PLAYER (floating corner player + inline button)
   ========================================================= */
const bgAudio = document.getElementById('bgAudio');
const musicToggle = document.getElementById('musicToggle');
const musicDisc = document.getElementById('musicToggle'); // same element, spins via class
const iconPlay = document.getElementById('iconPlay');
const iconPause = document.getElementById('iconPause');
const recordSpin = document.getElementById('recordSpin');
const playInline = document.getElementById('playInline');

let isPlaying = false;

function setPlayingState(playing) {
  isPlaying = playing;
  iconPlay.style.display = playing ? 'none' : 'block';
  iconPause.style.display = playing ? 'block' : 'none';
  musicDisc.classList.toggle('spinning', playing);
  recordSpin.classList.toggle('spinning', playing);
  playInline.textContent = playing ? '❚❚ pause our song' : '▶ play our song';
}

function toggleMusic() {
  if (isPlaying) {
    bgAudio.pause();
    setPlayingState(false);
  } else {
    // play() returns a promise — if there's no audio file yet, it will
    // quietly fail instead of breaking the page. That's expected until
    // you add your own mp3 file into the "music" folder.
    bgAudio.play().then(() => setPlayingState(true)).catch(() => {
      alert('Add your mp3 file to the "music" folder (named about-you.mp3) to hear the song play here 🤍');
    });
  }
}

musicToggle.addEventListener('click', toggleMusic);
playInline.addEventListener('click', toggleMusic);

/* =========================================================
   ENVELOPE — tap to reveal the letter
   ========================================================= */
const envelope = document.getElementById('envelope');
const letterPaper = document.getElementById('letterPaper');

envelope.addEventListener('click', () => {
  envelope.classList.add('opened');
  letterPaper.classList.add('visible');
});
/* =========================================================
   LOADING SCREEN
   ========================================================= */

window.addEventListener('load', () => {

  const loader = document.getElementById('loadingScreen');

  setTimeout(() => {

    loader.classList.add('hide');

  }, 3000);

});
