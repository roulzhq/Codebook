import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'index-view',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexView implements OnInit {

  public faArrowAltCircleDown= faArrowAltCircleDown;

  constructor() { }

  ngOnInit(): void {
  }

}
