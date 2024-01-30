import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDoacaoComponent } from './pagina-doacao.component';

describe('PaginaDoacaoComponent', () => {
  let component: PaginaDoacaoComponent;
  let fixture: ComponentFixture<PaginaDoacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaDoacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaDoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
