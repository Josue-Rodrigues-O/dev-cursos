import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCadastrarComponent } from './pagina-cadastrar.component';

describe('PaginaCadastrarComponent', () => {
  let component: PaginaCadastrarComponent;
  let fixture: ComponentFixture<PaginaCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaCadastrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
