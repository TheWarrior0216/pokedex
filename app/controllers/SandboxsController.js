import { sandboxService } from "../services/SandboxService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxsController {
  async catchActivePokemon() {
    try {
      await sandboxService.catchActivePokemon()
    } catch (error) {
      Pop.error(error)
      console.error('HELP', error)
    }
  }
}
