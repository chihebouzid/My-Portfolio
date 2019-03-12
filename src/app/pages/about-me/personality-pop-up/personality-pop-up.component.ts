import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-personality-pop-up',
  templateUrl: './personality-pop-up.component.html',
  styleUrls: ['./personality-pop-up.component.css']
})
export class PersonalityPopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PersonalityPopUpComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
