import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SommaireComponent } from './sommaire.component';

describe('ChartComponent', () => {
  let component: SommaireComponent;
  let fixture: ComponentFixture<SommaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SommaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SommaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
