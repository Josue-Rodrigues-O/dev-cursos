import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEntrarComponent } from './pagina-entrar.component';

describe('PaginaEntrarComponent', () => {
  let component: PaginaEntrarComponent;
  let fixture: ComponentFixture<PaginaEntrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaEntrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaEntrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
