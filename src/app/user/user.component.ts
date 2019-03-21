import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { TokenStorageService} from '../auth/token-storage.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  info: any;
  board:string;
  errorMessage:string;

  constructor(private userService: UserService, private token: TokenStorageService) { }

  ngOnInit() {
    this.userService.getUserBoard().subscribe(
      data => {
        this.board =data;
      },
      error => {
        this.errorMessage= `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
    this.info= {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    }
    console.log(this.token.getToken());
  }
  logout(){
  this.token.singOut();
  //window.location.reload();
  window.location.replace('home');
}
}
