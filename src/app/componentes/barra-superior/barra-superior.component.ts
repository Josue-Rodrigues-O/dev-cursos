import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-superior',
  standalone: true,
  imports: [],
  templateUrl: './barra-superior.component.html',
  styleUrl: './barra-superior.component.css'
})
export class BarraSuperiorComponent {
  constructor(private route: Router) { }

  navegarPara(link: any) {
    this.route.navigate([link])
  }
}
