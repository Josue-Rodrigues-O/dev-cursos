import { Routes } from '@angular/router';
import { PageLoginComponent } from './paginas/page-login/page-login.component';
import { PageRegisterComponent } from './paginas/page-register/page-register.component';
import { PageMainComponent } from './paginas/page-main/page-main.component';
import { PageMarketplaceComponent } from './paginas/page-marketplace/page-marketplace.component';
import { PageAcquisitionComponent } from './paginas/page-acquisition/page-acquisition.component';
import { PageCourseComponent } from './paginas/page-course/page-course.component';
import { PageAboutComponent } from './paginas/page-about/page-about.component';

export const routes: Routes = [
    {path: '', component: PageLoginComponent},
    {path: 'cadastrar', component: PageRegisterComponent},
    {path: 'area-do-consumidor', component: PageMainComponent},
    {path: 'mercado', component: PageMarketplaceComponent},
    {path: 'detalhes-do-curso/:id', component: PageAcquisitionComponent},
    {path: 'curso/:id', component: PageCourseComponent},
    {path: 'pagina-doacao', component: PageAboutComponent}
];
