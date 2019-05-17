import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenLoginFormComponent } from './template-driven-login-form.component';

describe('TemplateDrivenLoginFormComponent', () => {
  let component: TemplateDrivenLoginFormComponent;
  let fixture: ComponentFixture<TemplateDrivenLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
