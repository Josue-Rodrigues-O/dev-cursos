import { Routes } from '@angular/router';
import { PaginaEntrarComponent } from './paginas/pagina-entrar/pagina-entrar.component';
import { PaginaCadastrarComponent } from './paginas/pagina-cadastrar/pagina-cadastrar.component';
import { PaginaAreaDoConsumidorComponent } from './paginas/pagina-area-do-consumidor/pagina-area-do-consumidor.component';
import { PaginaMercadoComponent } from './paginas/pagina-mercado/pagina-mercado.component';
import { PaginaAquisicaoCursoComponent } from './paginas/pagina-aquisicao-curso/pagina-aquisicao-curso.component';
import { PaginaExibicaoCursoComponent } from './paginas/pagina-exibicao-curso/pagina-exibicao-curso.component';
import { PaginaDoacaoComponent } from './paginas/pagina-doacao/pagina-doacao.component';

export const routes: Routes = [
    {path: '', component: PaginaEntrarComponent},
    {path: 'cadastrar', component: PaginaCadastrarComponent},
    {path: 'area-do-consumidor', component: PaginaAreaDoConsumidorComponent},
    {path: 'mercado', component: PaginaMercadoComponent},
    {path: 'detalhes-do-curso', component: PaginaAquisicaoCursoComponent},
    {path: 'curso', component: PaginaExibicaoCursoComponent},
    {path: 'pagina-doacao', component: PaginaDoacaoComponent}
];
