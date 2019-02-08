import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-add-post-alert',
  template: `<div><a target="_blank" rel="noopener noreferrer" [href]="link">{{link}}</a></div>`,
  styleUrls: ['./add-post-alert.component.scss']
})
export class AddPostAlertComponent implements OnInit {

  link: string;

  constructor(@Inject(MAT_SNACK_BAR_DATA) data: any) {
    this.link = data;
  }

  ngOnInit() {
  }

}
