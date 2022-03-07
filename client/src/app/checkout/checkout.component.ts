import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountt/account.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
userLoggedIn = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.checkLoggedUser();
  }

  checkLoggedUser() {
    let user = this.accountService.loadCurrentUser;

    if (user) {
      this.userLoggedIn = true;
    }
  }

}
