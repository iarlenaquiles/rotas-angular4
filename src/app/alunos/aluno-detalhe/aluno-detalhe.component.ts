import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Rx';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  inscricao: Subscription;
  aluno: any;

  constructor(private route: ActivatedRoute,
              private alunosService: AlunosService) { }

  ngOnInit() {
    this.inscricao = this.route.queryParams.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
