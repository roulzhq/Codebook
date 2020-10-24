import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodebookListComponent } from './codebook-list.component';

describe('CodebookListComponent', () => {
  let component: CodebookListComponent;
  let fixture: ComponentFixture<CodebookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodebookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodebookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
