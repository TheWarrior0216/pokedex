import { AppState } from "../AppState.js"
import { Pokedex } from "../models/Pokedex.js"
import { pokeApi } from "./AxiosService.js"

class PokeServices {
  async choosePokemon(pokemonName) {

    const response = await pokeApi.get(`pokemon/${pokemonName}`)
    const chosenPokemon = new Pokedex(response.data)
    // @ts-ignore
    AppState.activePokemon = chosenPokemon

  }
  async getPokemon() {
    const response = await pokeApi.get('/generation/6/')
    AppState.pokedex = response.data.pokemon_species
    console.log(AppState.pokedex)
  }

}
export const pokeServices = new PokeServices()