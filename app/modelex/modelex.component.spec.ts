import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelexComponent } from './modelex.component';

describe('ModelexComponent', () => {
  let component: ModelexComponent;
  let fixture: ComponentFixture<ModelexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
