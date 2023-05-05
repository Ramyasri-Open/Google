import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  public flag: boolean = false;

  changeColor() {
    this.flag = !this.flag;

    // this.flag  ? (this.flag = false) : (this.flag = true);

    // if (this.flag) {
    //   this.flag = false;
    // } else {
    //   this.flag = true;
    // }
  }
}
