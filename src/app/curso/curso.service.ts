import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
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

  cadastrarCurso(c: Curso): Promise<Response> {
    return fetch(this.url + 'cadastrar', {
      body: JSON.stringify({ cursos: c }),
      method: 'POST'
    })
  }

  removerCurso(c: Curso): Promise<Response> {
    return fetch(this.url + 'remover', {
      body: JSON.stringify({ cursos: c }),
      method: 'POST'
    })

  }
}
