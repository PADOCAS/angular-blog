import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  // Roteando nossos componentes
  // path em branco (seria o root) -> HomeComponent
  // path: content -> ContentComponent (acessar passando localhost:4200/content )
  {
    path: '',
    component: HomeComponent,
  },
  {
    // Posso receber parâmetros no path da rota, no caso vamos receber o 'id'
    // A página ficará localhost:4200/content/1....2..3... etc (dinamicamente pegará no arquivo dataFake.ts o conteúdo do ID solicitado)
    path: 'content/:id',
    component: ContentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
