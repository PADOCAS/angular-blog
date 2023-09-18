import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  //Deixando as propriedade inputáveis para serem alimentadas ao chamar o componente:
  @Input() photoCover:string = "";
  @Input() cardTitle:string = "";
  @Input() cardDescription:string = "";
  @Input() cardResumoDescription:string = "";
  @Input() cardData:string = "";
  //Propriedade ID para trabalhar com id dinamicos na navegação:
  @Input() id:string = "0";
}
