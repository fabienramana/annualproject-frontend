import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponentModelComponent } from './create-component-model.component';

describe('CreateComponentModelComponent', () => {
  let component: CreateComponentModelComponent;
  let fixture: ComponentFixture<CreateComponentModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComponentModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponentModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
