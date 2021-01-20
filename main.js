let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off.",
  "You will soon be in good company.",
  "Miracles are coming your way.",
  "A long-held wish is about to come true.",
  "Your path ahead holds great happiness."
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Come back tomorrow!";
  button.style.cursor = "default";

  // eventTarget.removeEventListener('event', eventHandlerFunction);
  // should only be able to see daily fortune once, not click multiple times
  button.removeEventListener('click', showFortune);
}

button.addEventListener('click', showFortune);