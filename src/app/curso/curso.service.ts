import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //URL base
  url = "http://localhost/api/php/";

  //Vetor de cursos
  vetor!: Curso[];

  //Construtor
  constructor(private http: HttpClient) { }

  obterCursos(): Observable<Curso[]> {
    return this.http.get(this.url + "listar").pipe(
      map((res: any) => {
        console.log(res)
        this.vetor = res['cursos'];
        return this.vetor;
      })
    )
  }

  cadastrarCurso(c: Curso): Observable<Curso[]> {
    return this.http.post(this.url + 'cadastrar', { cursos: c }).pipe(
      map((res: any) => {
        this.vetor.push(res['cursos']);
        return this.vetor;
      })
    )
  }
}
