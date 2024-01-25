import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAquisicaoCursoComponent } from './pagina-aquisicao-curso.component';

describe('PaginaAquisicaoCursoComponent', () => {
  let component: PaginaAquisicaoCursoComponent;
  let fixture: ComponentFixture<PaginaAquisicaoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaAquisicaoCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaAquisicaoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
