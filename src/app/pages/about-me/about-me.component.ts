import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material';
import { VideoPopUpComponent } from "./video-pop-up/video-pop-up.component";
import { PersonalityPopUpComponent } from './personality-pop-up/personality-pop-up.component';

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.css"]
})
export class AboutMeComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  openVideoDialog(): void {
    const dialogRef = this.dialog.open(VideoPopUpComponent, {
      width: '99%',
      height: '90%',
    })
  }

  openPersonalityDialog(): void {
    const dialogRef = this.dialog.open(PersonalityPopUpComponent, {
      width: '99%',
      height: '90%',
    })
  }
}
