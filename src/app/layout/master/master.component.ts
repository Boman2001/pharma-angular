import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-master",
  templateUrl: "./master.component.html",
  styleUrls: ["./master.component.css"]
})
export class MasterComponent implements OnInit {
  navBar = false;
  profile = false;

  constructor() { }

  ngOnInit(): void {
  }

  profileClick(): void {
    this.profile = !this.profile;
  }

  toggleNavBar(): void{
    this.navBar = !this.navBar;
  }
}
