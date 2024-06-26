import { AppState } from "../AppState.js"
import { api } from "../services/AxiosService.js"
import { pokeServices } from "../services/PokeServices.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class PokesController {
  constructor() {
    console.log('loaded')
    this.getPokemon()
    AppState.on('pokedex', this.drawPokemon)
  }
  async getPokemon() {
    try {
      await pokeServices.getPokemon()
    } catch (error) {
      Pop.error(error)
    }
  }
  drawPokemon() {
    const pokemons = AppState.pokedex
    let Html = ''
    pokemons.forEach(pokemon => Html += `<div onclick ="app.PokesController.choosePokemon('${pokemon.name}')" role= "button" class="d-block col-12 my-3 border fs-3 text-light bg-info text-capitalize">${pokemon.name}</div>`)
    setHTML('PokemonSelect', Html)
  }
  async choosePokemon(pokemonName) {
    try {
      await pokeServices.choosePokemon(pokemonName)
      this.drawActivePokemon()
    } catch (error) {
      Pop.error(error)
    }
  }
  drawActivePokemon() {
    const pokemons = AppState.activePokemon
    console.log(pokemons)
    setHTML('activeBody', pokemons.activePokeTemplate)
  }
}