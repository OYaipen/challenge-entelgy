class PokemonCard extends HTMLElement {
  constructor() {
    super();
    this._data = {};
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
    <style>
    .card {
      background: var(--dark-card);
      border-radius: 0.3125rem;
      color: var(--dark-text1);
      flex: 1;
      overflow: hidden;
      padding: 1.5625rem;
      position: relative;
      text-align: center;
    }
    .card--pokemon {
      border-top: 0.3125rem solid var(--yellow);
    }
    .card__detail {
      align-items: center;
      display: flex;
      justify-content: center;
      margin-bottom: 1.75rem;
      margin-top: 0.3125rem;
    }
    .card__icon {
      margin-right: 0.5rem;
    }
    .card__code {
      font-size: 0.75rem;
    }
    .card__principal {
      margin-bottom: 1.5625rem;
    }
    .card__name {
      color: var(--light-bg);
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: -0.125rem;
      line-height: 1;
      margin-bottom: 0.1875rem;
    }
    .card__name--big {
      cursor: pointer;
      font-size: 2.5rem;
    }
    .card__city {
      color: var(--dark-text1);
      font-size: 0.75rem;
      font-weight: 400;
      letter-spacing: 0.3125rem;
      text-transform: uppercase;
    }
    .card__change {
      align-items: center;
      display: flex;
      font-size: 0.75rem;
      font-weight: 700;
      justify-content: center;
    }
    .card__change--up {
      color: var(--limegreen);
    }
    .card__change--down {
      color: var(--brightred);
    }
    .card__change img {
      margin-right: 0.25rem;
    }
    </style>
    <div class="card card--pokemon" >
      <div class="card__detail">
        <div class="card__code" >Order: ${this.data.order}</div>
      </div>
      <div class="card__principal">
        <div class="card__name card__name--big" id="card__title">${this.data.name}</div>
        <div class="card__city">Type: ${this.data.types[0].type.name.toUpperCase()}</div>
      </div>
    </div>
  `;
    const title = shadowRoot.querySelector("#card__title");

    title.addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("getPokemon$", null));
    });
  }

  get data() {
    return this._data;
  }

  set data(pokemon) {
    this._data = pokemon;
  }
}

window.customElements.define("pokemon-card", PokemonCard);
