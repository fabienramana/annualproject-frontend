import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentModelViewComponent } from './component-model-view.component';

describe('ComponentModelViewComponent', () => {
  let component: ComponentModelViewComponent;
  let fixture: ComponentFixture<ComponentModelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentModelViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentModelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
