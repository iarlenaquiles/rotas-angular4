import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

const alunosRoutes: Routes = [
  {
    path: '', component: AlunosComponent, children: [
        {
          path: 'novo', component: AlunoFormComponent
        },
        {
          path: ':id', component: AlunoDetalheComponent,
              resolve: {aluno: AlunoDetalheResolver}
        },
        {
          path: ':id/editar', component: AlunoFormComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule {}
