import { Component, OnInit } from '@angular/core';
import { Recurso } from 'src/app/models/Recurso';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { RecursoService } from 'src/app/services/recurso.service';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-usuario-recursos',
  templateUrl: './usuario-recursos.component.html',
  styleUrls: ['./usuario-recursos.component.css']
})
export class UsuarioRecursosComponent implements OnInit {

  
  idUsuarioLogado : string;
  constructor(
    private recursoService : RecursoService,
    private authGuardService: AuthGuardService
  ) { }


  ngOnInit(): void {
    this.idUsuarioLogado = this.authGuardService.getIdUsuarioLogado();

  
}
teladepostagem(){
  return true
}

}