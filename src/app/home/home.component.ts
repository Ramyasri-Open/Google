import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  logout() {
    this.router.navigate(['']);
    localStorage.clear();
  }
  ngOnInit() {
    const first: any = {};
  }
}
