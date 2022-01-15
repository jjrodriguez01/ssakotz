import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightResultComponent } from './knight-result.component';

describe('KnightResultComponent', () => {
  let component: KnightResultComponent;
  let fixture: ComponentFixture<KnightResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnightResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnightResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
