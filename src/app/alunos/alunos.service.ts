import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno1@email.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno2@email.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno3@email.com'}
  ];

  constructor() { }

}
