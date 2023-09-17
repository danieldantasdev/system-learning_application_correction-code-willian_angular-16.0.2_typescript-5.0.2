import { SenacCoin } from "./SenacCoin";

export class UsuarioAutor{
        id: string = "";
        userName: string = "";
        normalizedUserName: string = "";
        normalizedEmail: string =  "";
        emailConfirmed: boolean = true;
        passwordHash: string = "";
        securityStamp: string = "";
        concurrencyStamp: string = "";
        phoneNumber: string = "";
        phoneNumberConfirmed: boolean = true;
        twoFactorEnabled: boolean = true;
        lockoutEnd: Date= new Date();
        lockoutEnabled: boolean = true;
        accessFailedCount: number = 0;
        cpf: string = "";
        foto: string = "";
        nomeCompleto: string = "";
        apelido: string = "";
        email: string = "";
        dataNascimento: Date= new Date();
        telefone: string = "";
        dataCadastro: Date= new Date();
        status: number = 0;
        senacCoin : SenacCoin = new SenacCoin();
}