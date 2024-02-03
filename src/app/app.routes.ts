import { Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { PageMarketplaceComponent } from './pages/page-marketplace/page-marketplace.component';
import { PageAcquisitionComponent } from './pages/page-acquisition/page-acquisition.component';
import { PageCourseComponent } from './pages/page-course/page-course.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';

export const routes: Routes = [
    {path: '', component: PageLoginComponent},
    {path: 'cadastrar', component: PageRegisterComponent},
    {path: 'area-do-consumidor', component: PageMainComponent},
    {path: 'mercado', component: PageMarketplaceComponent},
    {path: 'detalhes-do-curso/:id', component: PageAcquisitionComponent},
    {path: 'curso/:id', component: PageCourseComponent},
    {path: 'pagina-doacao', component: PageAboutComponent}
];
