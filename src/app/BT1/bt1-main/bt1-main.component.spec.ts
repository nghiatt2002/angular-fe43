import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt1MainComponent } from './bt1-main.component';

describe('Bt1MainComponent', () => {
  let component: Bt1MainComponent;
  let fixture: ComponentFixture<Bt1MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt1MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt1MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
