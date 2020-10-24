import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodebookCellComponent } from './codebook-cell.component';

describe('CodebookCellComponent', () => {
  let component: CodebookCellComponent;
  let fixture: ComponentFixture<CodebookCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodebookCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodebookCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
