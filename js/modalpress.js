//MODAL AVEYRONAIS

const AveyronaisModal = document.getElementById("AveyronaisModal");
const AveyronaisBtn = document.getElementById("AveyronaisModalTrigger");
const Aveyronaisspan = document.getElementById("close-aveyronais");
AveyronaisBtn.onclick = function () {
  AveyronaisModal.style.display = "block";
};

Aveyronaisspan.onclick = function () {
  AveyronaisModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == AveyronaisModal) {
    AveyronaisModal.style.display = "none";
  }
};

//MODAL MIDI LIBRE

const MidiLibreModal = document.getElementById("MidiLibreModal");
const MidiLibreBtn = document.getElementById("MidiLibreModalTrigger");
const MidiLibrespan = document.getElementById("close-midilibre");
MidiLibreBtn.onclick = function () {
  MidiLibreModal.style.display = "block";
};

MidiLibrespan.onclick = function () {
  MidiLibreModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == MidiLibreModal) {
    MidiLibreModal.style.display = "none";
  }
};
