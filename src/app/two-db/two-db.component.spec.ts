import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDbComponent } from './two-db.component';

describe('TwoDbComponent', () => {
  let component: TwoDbComponent;
  let fixture: ComponentFixture<TwoDbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoDbComponent]
    });
    fixture = TestBed.createComponent(TwoDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
