import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CursosService } from './cursos.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];

  pagina: number;

  inscricao: Subscription;

  constructor(private cursosService: CursosService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
