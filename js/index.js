const creaCelle = () => {
  const tab = document.getElementById("tabella");
  for (let i = 1; i < 77; i++) {
    const divCella = document.createElement("div");
    divCella.className = "cella";

    const elementoCella = document.createElement("h3");
    elementoCella.innerText = i;

    divCella.appendChild(elementoCella);
    tab.appendChild(divCella);
  }
};
creaCelle();

const bottone = document.getElementById("btt");
bottone.onclick = function () {
  const cella = document.querySelectorAll(".cella");
  const numeroExtract = Math.floor(Math.random() * cella.length);
  const numeroRandom = cella[numeroExtract];
  numeroRandom.classList.add("selected");
};
