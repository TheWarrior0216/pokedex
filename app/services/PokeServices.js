import { AppState } from "../AppState.js"
import { pokeApi } from "./AxiosService.js"

class PokeServices {
  async getPokemon() {
    const response = await pokeApi.get('/generation/6/')
    AppState.pokedex = response.data.pokemon_species
    console.log(AppState.pokedex)
  }

}
export const pokeServices = new PokeServices()