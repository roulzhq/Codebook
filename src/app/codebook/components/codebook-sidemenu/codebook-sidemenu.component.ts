import { Component, OnInit } from '@angular/core';
import { faSave, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faMinusCircle, faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'codebook-sidemenu',
  templateUrl: './codebook-sidemenu.component.html',
  styleUrls: ['./codebook-sidemenu.component.scss']
})
export class CodebookSidemenuComponent implements OnInit {

  public faSave = faSave;
  public faSync = faSync;
  public faMinusCircle = faMinusCircle;
  public faTimesCircle = faTimesCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
