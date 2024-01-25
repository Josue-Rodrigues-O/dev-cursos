import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAreaDoConsumidorComponent } from './pagina-area-do-consumidor.component';

describe('PaginaAreaDoConsumidorComponent', () => {
  let component: PaginaAreaDoConsumidorComponent;
  let fixture: ComponentFixture<PaginaAreaDoConsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaAreaDoConsumidorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaAreaDoConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
