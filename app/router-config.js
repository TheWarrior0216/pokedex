import { AccountController } from "./controllers/AccountController.js";
import { PokesController } from "./controllers/PokesController.js";
import { SandboxsController } from "./controllers/SandboxsController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [PokesController, SandboxsController],
    view: ``
  },

  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




