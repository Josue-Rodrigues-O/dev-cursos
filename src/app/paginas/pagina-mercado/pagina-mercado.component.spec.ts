import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMercadoComponent } from './pagina-mercado.component';

describe('PaginaMercadoComponent', () => {
  let component: PaginaMercadoComponent;
  let fixture: ComponentFixture<PaginaMercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaMercadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
