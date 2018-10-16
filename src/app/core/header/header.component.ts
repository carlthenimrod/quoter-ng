import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn = false;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.loggedIn = this.auth.loggedIn();
  }
}
