import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlunosComponent, AlunoFormComponent]
})
export class AlunosModule { }
