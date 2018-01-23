import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];

  pagina: number;

  constructor(private cursosService: CursosService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}
