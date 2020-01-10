import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComponentModelComponent } from './delete-component-model.component';

describe('DeleteComponentModelComponent', () => {
  let component: DeleteComponentModelComponent;
  let fixture: ComponentFixture<DeleteComponentModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteComponentModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComponentModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
