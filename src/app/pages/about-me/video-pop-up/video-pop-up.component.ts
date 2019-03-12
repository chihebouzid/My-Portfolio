import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-video-pop-up',
  templateUrl: './video-pop-up.component.html',
  styleUrls: ['./video-pop-up.component.css']
})
export class VideoPopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<VideoPopUpComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
