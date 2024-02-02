import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAcquisitionComponent } from './page-acquisition.component';

describe('PageAcquisitionComponent', () => {
  let component: PageAcquisitionComponent;
  let fixture: ComponentFixture<PageAcquisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAcquisitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageAcquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
