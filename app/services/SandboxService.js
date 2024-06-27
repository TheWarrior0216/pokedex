
import { AppState } from "../AppState.js"
import { Pokedex } from "../models/Pokedex.js"
import { api } from "./AxiosService.js"

class SandboxService {
  async catchActivePokemon() {
    console.log(AppState.sandbox)

    const pokemons = AppState.activePokemon
    const response = await api.post('api/pokemon', pokemons)
    const newPoke = new Pokedex(response.data)
    console.log(newPoke)
    AppState.sandbox.push(newPoke)
    console.log(AppState.sandbox)
  }

}
export const sandboxService = new SandboxService()