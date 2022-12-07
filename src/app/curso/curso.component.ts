import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  nome: string = "Naiara";
  //Contrutor
  constructor() {

  }
  //Inicializador
  ngOnInit() {
  }

  cadastro(): void {
    alert("cadastro");
  }

  selecao(): void {
    alert("selecao");
  }

  alterar(): void {
    alert("alterar");
  }

  remover(): void {
    alert("remover");
  }

}
