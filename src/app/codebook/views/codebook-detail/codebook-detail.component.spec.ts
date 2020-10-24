import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodebookDetailComponent } from './codebook-detail.component';

describe('CodebookDetailComponent', () => {
  let component: CodebookDetailComponent;
  let fixture: ComponentFixture<CodebookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodebookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodebookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
