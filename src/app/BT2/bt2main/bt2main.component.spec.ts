import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2mainComponent } from './bt2main.component';

describe('Bt2mainComponent', () => {
  let component: Bt2mainComponent;
  let fixture: ComponentFixture<Bt2mainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2mainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2mainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
