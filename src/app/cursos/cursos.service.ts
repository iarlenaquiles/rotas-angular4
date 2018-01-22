import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  getCursos() {
    return [
      {id: 1, nome: 'Angular 5'},
      {id: 2, nome: 'Java'}
    ];
  }

  constructor() { }

}
