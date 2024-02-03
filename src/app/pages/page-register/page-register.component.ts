import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-register',
  standalone: true,
  imports: [],
  templateUrl: './page-register.component.html',
  styleUrl: './page-register.component.css'
})
export class PageRegisterComponent {
  constructor(private route: Router){}

  aoClicarEntrar() {
    this.route.navigate(['/area-do-consumidor'])
  }
}
