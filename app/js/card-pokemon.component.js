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
      border-top: 0.3125rem solid var(--facebook);
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
      font-weight: 700;
      letter-spacing: -0.125rem;
      line-height: 1;
      margin-bottom: 0.1875rem;
    }
    .card__name--big {
      font-size: 3.5rem;
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
    <div class="card card--pokemon" id="card__title">
      <div class="card__detail">
        <img
          class="card__icon"
          src="/images/icon-facebook.svg"
          alt="icon"
        />
        <div class="card__code">@nathanf</div>
      </div>
      <div class="card__principal">
        <div class="card__name card__name--big">${this.data.name}</div>
        <div class="card__city">Followers</div>
      </div>
      <div class="card__change card__change--up">
        <img class="" src="/images/icon-up.svg" alt="up arrow" />
        <div class="card__number">12 Today</div>
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
