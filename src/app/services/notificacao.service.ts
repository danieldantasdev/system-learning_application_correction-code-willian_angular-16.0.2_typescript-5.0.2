import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {HttpHEaders, HttpClient} from '@angular/common/http'


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

  getAll = () :void :Observable<Notificacao[]> => {
    return this._httpClient.get<Notification[]>(url: `${this.apiServer}/Notificacao`);
  }
}
