import { Component, OnInit,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input("displayUserData") public displayUserData;
  public userData: any;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes){
    this.userData = this.displayUserData;
  }
}
