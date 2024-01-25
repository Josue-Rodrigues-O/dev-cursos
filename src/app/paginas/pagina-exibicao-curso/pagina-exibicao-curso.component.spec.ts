import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaExibicaoCursoComponent } from './pagina-exibicao-curso.component';

describe('PaginaExibicaoCursoComponent', () => {
  let component: PaginaExibicaoCursoComponent;
  let fixture: ComponentFixture<PaginaExibicaoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaExibicaoCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaExibicaoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
