import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexView } from './index.component';

describe('IndexView', () => {
  let component: IndexView;
  let fixture: ComponentFixture<IndexView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
