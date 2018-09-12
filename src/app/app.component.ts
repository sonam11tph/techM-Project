import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { DataAPIs } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'techMProject';
  public userInfo: any;
  public searchName: any
  public displayUserData: any;

  constructor(public appService: AppService) { }

  ngOnInit() {
    let dataParam = {};
    let getUrl = DataAPIs.userData.data;
    this.appService.getDataInfo(dataParam, getUrl).subscribe((res => {
      this.userInfo = res;
    }))
  }

  getSearchName(event) {
    this.searchName = event;
  }

  getUserDetails(data) {
    this.displayUserData = data;
  }

}


