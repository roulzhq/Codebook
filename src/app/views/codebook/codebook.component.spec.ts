import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodebookView } from './codebook.component';

describe('CodebookView', () => {
  let component: CodebookView;
  let fixture: ComponentFixture<CodebookView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodebookView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodebookView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
