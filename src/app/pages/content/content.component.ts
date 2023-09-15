import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//Importando nosso arquivo dataFake para alimentação de dados:
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";
  private id: string | null = '0';

  //Ativa o Route:
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //Verificar o ID que está recebendo na route content como parametro:
    // Ao iniciar o component já vai alimentar o id do this.contentDescription.component:
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    // Vamos procurar no nosso dataFake o ID que está vindo
    const result = dataFake.filter((article) => article.id == id)[0];

    // Alimenta os atributos:
    this.photoCover = result.photo;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }
}
