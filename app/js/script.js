// variables
const modalElement = document.getElementById("simple-modal");
const closeModalElement = document.getElementById("close-modal");
const pokemonCardContainerElement = document.getElementById(
  "pokemon-card-container"
);

// Fetch data pokemon
function getPokemon(url) {
  return fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Error, al llamar a la API");
  });
}

// Fetch data pokemon's
function getListPokemon() {
  return fetch("https://pokeapi.co/api/v2/pokemon/?offset=12&limit=12")
    .then((value) => {
      if (value.ok) {
        return value.json();
      }
      throw new Error("Error, al llamar a la API");
    })
    .then((value) => value.results);
}

// render components
function renderWebComponents() {
  getListPokemon().then((pokemons) => {
    pokemons.forEach((pokemon) => {
      getPokemon(pokemon.url).then((value) => {
        const newComponent = new PokemonCard();
        newComponent.data = value;
        const webComponentParentDiv = document.createElement("div");
        webComponentParentDiv.append(newComponent);
        newComponent.addEventListener("getPokemon$", (evt) => {
          openModal(newComponent.data);
        });
        pokemonCardContainerElement.append(webComponentParentDiv);
      });
    });
  });
}

// show modal
function openModal({ name, sprites, types, order, base_experience, height, weight }) {
  modalElement.classList.add("modal--show");
  modalElement.querySelector("#modal-title").innerText = name;
  modalElement.querySelector("#modal-image").src =
    sprites.other.dream_world.front_default;
  modalElement.querySelector("#type").innerText =
    types[0].type.name.toUpperCase();
  modalElement.querySelector("#order").innerText = order;
  modalElement.querySelector("#exp").innerText = base_experience;
  modalElement.querySelector("#height").innerText = height;
  modalElement.querySelector("#weight").innerText = weight;

  document.body.style.overflow = "hidden";
}

// close modal
function closeSimpleModal() {
  modalElement.classList.remove("modal--show");
  document.body.style.overflow = "auto";
}

// events
closeModalElement.addEventListener("click", () => {
  closeSimpleModal();
});

document.addEventListener("DOMContentLoaded", () => {
  renderWebComponents();
});
