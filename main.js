// Functionize Minecraft Fishing Start Code

// HTML Variables
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");

// Fish Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  // Determine Selected Character
  let character = document.getElementById("character-select").value;
  let randNum = Math.random();

  if (character === `steve`) {
    // Fish with Steve
    console.log(randNum);
    if (randNum < 0.7) {
      resultImg = `img/Raw-Cod.png`;
      numCod++;
      numCodSpan.innerHTML = `${numCod}`;
    } else if (randNum < 0.9) {
      resultImg = `img/Raw-Salmon.png`;
      numSalmon++;
      numSalmonSpan.innerHTML = `${numSalmon}`;
    } else if (randNum < 0.95) {
      resultImg = `img/Tropical-Fish.png`;
      numTropical++;
      numTropicalSpan.innerHTML = `${numTropical}`;
    } else {
      resultImg = `img/Pufferfish.png`;
      numPuffer++;
      numPufferSpan.innerHTML = `${numPuffer}`;
    }
  } else if (character === `alex`) {
    // Fish with Alex
    console.log(randNum);
    if (randNum < 0.1) {
      resultImg = `img/Raw-Cod.png`;
      numCod++;
      numCodSpan.innerHTML = `${numCod}`;
    } else if (randNum < 0.2) {
      resultImg = `img/Raw-Salmon.png`;
      numSalmon++;
      numSalmonSpan.innerHTML = `${numSalmon}`;
    } else if (randNum < 0.5) {
      resultImg = `img/Tropical-Fish.png`;
      numTropical++;
      numTropicalSpan.innerHTML = `${numTropical}`;
    } else {
      resultImg = `img/Pufferfish.png`;
      numPuffer++;
      numPufferSpan.innerHTML = `${numPuffer}`;
    }
  } else if (character === `villager`) {
    // Fish with Villager
    console.log(randNum);
    if (randNum < 0.25) {
      resultImg = `img/Raw-Cod.png`;
      numCod++;
      numCodSpan.innerHTML = `${numCod}`;
    } else if (randNum < 0.5) {
      resultImg = `img/Raw-Salmon.png`;
      numSalmon++;
      numSalmonSpan.innerHTML = `${numSalmon}`;
    } else if (randNum < 0.75) {
      resultImg = `img/Tropical-Fish.png`;
      numTropical++;
      numTropicalSpan.innerHTML = `${numTropical}`;
    } else {
      resultImg = `img/Pufferfish.png`;
      numPuffer++;
      numPufferSpan.innerHTML = `${numPuffer}`;
    }
  }
}
