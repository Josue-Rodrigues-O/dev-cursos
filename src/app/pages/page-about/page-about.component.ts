import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-page-about',
    standalone: true,
    templateUrl: './page-about.component.html',
    styleUrl: './page-about.component.css',
    imports: [NavBarComponent, FooterComponent]
})
export class PageAboutComponent {

}
