import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-center-panel',
  templateUrl: './center-panel.component.html',
  styleUrls: ['./center-panel.component.css']
})
export class CenterPanelComponent implements OnInit, OnChanges {
  public serachName: any;
  public searchText: any;

  @Input("searchName") public searchName;
  @Input("userInfo") public userInfo;
  @Output("userDetails") public userDetails = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (this.userInfo !== undefined && this.userInfo !== null) {
      this.searchText = this.searchName;
      this.serachName = this.userInfo.People;
    }
  }
  public showDetails(data) {
    this.userDetails.emit(data);
  }
}
