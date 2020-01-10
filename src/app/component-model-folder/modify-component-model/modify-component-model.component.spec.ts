import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyComponentModelComponent } from './modify-component-model.component';

describe('ModifyComponentModelComponent', () => {
  let component: ModifyComponentModelComponent;
  let fixture: ComponentFixture<ModifyComponentModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyComponentModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyComponentModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
