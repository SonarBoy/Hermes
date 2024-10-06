import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryDisplayComponent } from './query-display.component';

describe('QueryDisplayComponent', () => {
  let component: QueryDisplayComponent;
  let fixture: ComponentFixture<QueryDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
