import { Usuario } from "./Usuario"
import { UsuarioAutor } from "./UsuarioAutor";

export class Notificacao {
        id: number = 0;
        notificacaoTexto: string = "";
        data: Date = new Date();
        status: number = 0;
        usuarioId: string = "";
    usuario: Usuario = new Usuario();
        usuarioIdAutor: string = "";
        usuarioAutor: UsuarioAutor = new UsuarioAutor();
      }
