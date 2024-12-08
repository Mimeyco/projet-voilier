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

//MODAL MIDI LIBRE NOVEMBRE 24

const MidiLibreNovembreModal = document.getElementById(
  "MidiLibreNovembreModal"
);
const MidiLibreNovembreBtn = document.getElementById(
  "MidiLibreNovembreModalTrigger"
);
const MidiLibreNovembrespan = document.getElementById(
  "close-midilibrenovembre"
);
MidiLibreNovembreBtn.onclick = function () {
  MidiLibreNovembreModal.style.display = "block";
};

MidiLibreNovembrespan.onclick = function () {
  MidiLibreNovembreModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == MidiLibreNovembreModal) {
    MidiLibreNovembreModal.style.display = "none";
  }
};
//MODAL MIDI LIBRE DECEMBRE 24

const MidiLibreDecembreModal = document.getElementById(
  "MidiLibreDecembreModal"
);
const MidiLibreDecembreBtn = document.getElementById(
  "MidiLibreDecembreModalTrigger"
);
const MidiLibreDecembrespan = document.getElementById(
  "close-midilibredecembre"
);
MidiLibreDecembreBtn.onclick = function () {
  MidiLibreDecembreModal.style.display = "block";
};

MidiLibreDecembrespan.onclick = function () {
  MidiLibreDecembreModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == MidiLibreDecembreModal) {
    MidiLibreDecembreModal.style.display = "none";
  }
};

//MODAL CMCAS DECEMBRE 24

const CMCASModal = document.getElementById("CMCASModal");
const CMCASBtn = document.getElementById("CMCASModalTrigger");
const CMCASspan = document.getElementById("close-CMCAS");
CMCASBtn.onclick = function () {
  CMCASModal.style.display = "block";
};

CMCASspan.onclick = function () {
  CMCASModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == CMCASModal) {
    CMCASModal.style.display = "none";
  }
};
