import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMeuCursoComponent } from './card-meu-curso.component';

describe('CardMeuCursoComponent', () => {
  let component: CardMeuCursoComponent;
  let fixture: ComponentFixture<CardMeuCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMeuCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMeuCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
