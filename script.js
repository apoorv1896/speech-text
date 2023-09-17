const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readButton = document.getElementById("read");
const toggleButton = document.getElementById("toggle");
const closeButton = document.getElementById("close");

const data = [
  {
    image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?cs=srgb&dl=pexels-pixabay-416528.jpg&fm=jpg",
    text: "I'm Thirsty",
  },
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    text: "I'm Hungry",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1678980766534-c8be07e3c92a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGlyZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
    text: "I'm Tired",
  },
  {
    image: "https://images.unsplash.com/photo-1526063402628-3cda107c8df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
    text: "I'm Hurt",
  },
  {
    image: "https://images.unsplash.com/photo-1668554245790-bfdc72f0bb3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFwcHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
    text: "I'm Happy",
  },
  {
    image: "https://images.unsplash.com/photo-1503525537183-c84679c9147f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5ncnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
    text: "I'm Angry",
  },
  {
    image: "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FkfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60",
    text: "I'm Sad",
  },
  {
    image: "https://images.unsplash.com/photo-1491319669671-30014eb16b8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NhcmVkfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60",
    text: "I'm Scared",
  },
  {
    image: "https://images.unsplash.com/photo-1457104312140-ada7fcd34df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3V0c2lkZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
    text: "I Want To Go Outside",
  },
  {
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
    text: "I Want To Go Home",
  },
  {
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60",
    text: "I Want To Go To School",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1663090078686-08c4014d9bad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhbmRtYSUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60",
    text: "I Want To Go To Grandmas",
  },
];

//G1HOnQMxrRFyD0f8T6Zn1POOBlKS4RGKfbJ7uYz9Rks

function createBox(item) {
  const box = document.createElement("div");
  const { image, text } = item;
  box.classList.add("box");
  box.innerHTML = `
    <img src='${image}' alt="${text}"/>
    <p class="info">${text}</p>
    `;
  box.addEventListener("click", () => handleSpeech(text, box));
  main.appendChild(box);
}

data.forEach(createBox);

let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;
    voicesSelect.appendChild(option);
  });
}

function handleSpeech(text, box) {
  setTextMessage(text);
  speakText();
  box.classList.add("active");
  setTimeout(() => box.classList.remove("active"), 800);
}

const message = new SpeechSynthesisUtterance();

function setTextMessage(text) {
  message.text = text;
}

function speakText() {
  speechSynthesis.speak(message);
}

function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

// Event Listeners
toggleButton.addEventListener("click", () => {
  document.getElementById("text-box").classList.toggle("show");
});
closeButton.addEventListener("click", () => {
  document.getElementById("text-box").classList.remove("show");
});
speechSynthesis.addEventListener("voiceschanged", getVoices);
voicesSelect.addEventListener("change", setVoice);
readButton.addEventListener("click", () => {
  setTextMessage(textarea.value);
  speakText();
});

getVoices();


