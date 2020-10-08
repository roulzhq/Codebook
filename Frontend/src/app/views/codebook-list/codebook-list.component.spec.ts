import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodebookListView } from './codebook-list.component';

describe('CodebookListView', () => {
  let component: CodebookListView;
  let fixture: ComponentFixture<CodebookListView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodebookListView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodebookListView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
