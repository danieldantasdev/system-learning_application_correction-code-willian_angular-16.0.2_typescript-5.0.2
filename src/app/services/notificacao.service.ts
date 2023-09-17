import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import {Notificacao} from "../models/Notficacao";


const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('TokeUsuarioLogado')}`,
    }),
  };
@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {
  private readonly apiServer : string = environment.apiServer;

  constructor(private _httpClient : HttpClient) { }

  getAll = () :Observable<Notificacao[]> => {
    return this._httpClient.get<Notificacao[]>(`${this.apiServer}/Notificacao`);
  }
}
