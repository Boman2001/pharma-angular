import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  profile = false;

  constructor() { }

  ngOnInit(): void {
  }

  profileClick() {
    this.profile = !this.profile;
  }

}
