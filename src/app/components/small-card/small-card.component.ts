import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css'],
})
export class SmallCardComponent {
  // Propriedades inputáveis
  @Input() photoCover: string = "";
  @Input() cardTitle: string = "";
  @Input() cardData: string = "";
  //Propriedade ID para trabalhar com id dinamicos na navegação:
  @Input() id:string = "0";
}
