import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
  imports: [
    CommonModule,
    //RouterModule
    CursosRoutingModule
  ],
  declarations: [
    CursosComponent,
    CursoNaoEncontradoComponent,
    CursoDetalheComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
