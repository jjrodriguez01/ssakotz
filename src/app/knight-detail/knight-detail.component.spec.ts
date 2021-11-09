import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightDetailComponent } from './knight-detail.component';

describe('KnightDetailComponent', () => {
  let component: KnightDetailComponent;
  let fixture: ComponentFixture<KnightDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnightDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnightDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
