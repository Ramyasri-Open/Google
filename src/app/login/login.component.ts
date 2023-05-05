import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  uname: string = '';
  pass: string = '';
  dataSource: any;
  constructor(private router: Router) {}
  login() {
    if (!this.uname.trim().length || !this.pass.trim().length) {
      return;
    }

    const item = { user: this.uname, password: this.pass };
    localStorage.setItem('user', JSON.stringify(item));
    this.router.navigate(['/home']);
  }
}
