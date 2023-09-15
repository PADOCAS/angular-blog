import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'https://cdn.meutimao.com.br/fotos-do-corinthians/w941/2022/09/05/cassio_foi_o_goleiro_titular_do_corinthians_yryv.jpg';
  contentTitle: string = 'asdsad';
  contentDescription: string = 'asdasd';

  //Ativa o Route:
  constructor(private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    //Verificar o ID que está recebendo na route content como parametro:
    this.route.paramMap.subscribe(value =>
      console.log(value.get("id"))
    )
  }
}
