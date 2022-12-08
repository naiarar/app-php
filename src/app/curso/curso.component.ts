import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //Vetor
  vetor!: Curso[];

  //Objeto da classe Curso
  curso = new Curso();

  //Construtor
  constructor(private curso_servico: CursoService) {

  }
  //Inicializador
  ngOnInit() {
    //Ao iniciar o sistema deverá listar os cursos
    this.selecao();
  }

  selecao() {
    this.curso_servico.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;

      }
    )
  }


  cadastro() {
    this.curso_servico.cadastrarCurso(this.curso).subscribe(
      (res: Curso[]) => {
        //adc dados ao vetor
        this.vetor = res;

        //limpar os atributos
        this.curso = new Curso()

        //atualizar listagem
        this.selecao();
      }
    )

  }

  remover() {
    this.curso_servico.removerCurso(this.curso).subscribe(
      (res: Curso[]) => {
        this.vetor = res;

        this.curso = new Curso()

      }
    )
  }


  // alterar(): void {
  //     alert("alterar");
  //   }

}
