import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public searchText: any;
  
  @Output() public searchTextValue = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  getChange(searchText) {
    this.searchText = searchText;
    this.searchTextValue.emit(this.searchText);
  }
  clearSearch() {
    this.searchText = "";
    this.searchTextValue.emit(this.searchText);
  }
}
