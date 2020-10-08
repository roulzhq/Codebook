import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutView } from './about.component';

describe('AboutView', () => {
  let component: AboutView;
  let fixture: ComponentFixture<AboutView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
