import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { User } from '../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private user: User = undefined;
  private userSub: Subscription;

  constructor(private api: APIService) { }

  ngOnInit() {
    this.userSub = this.api.getCurrentUser().subscribe(user => this.user)
  }

  ngOnDestroy() {
    if (this.userSub){
      this.userSub.unsubscribe();
      this.userSub = undefined;
    }
  }
}
