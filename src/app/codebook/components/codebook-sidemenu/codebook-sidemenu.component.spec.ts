import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodebookSidemenuComponent } from './codebook-sidemenu.component';

describe('CodebookSidemenuComponent', () => {
  let component: CodebookSidemenuComponent;
  let fixture: ComponentFixture<CodebookSidemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodebookSidemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodebookSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
