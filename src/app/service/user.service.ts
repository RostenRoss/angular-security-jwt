import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'https://rosten-web-spring-angular.herokuapp.com/api/test/user';
  private pmUrl ='http://localhost:8080/api/test/pm';
    private adminUrl ='https://rosten-web-spring-angular.herokuapp.com/api/test/admin';

  constructor( private http: HttpClient) { }

    getUserBoard(): Observable<string>{
      return this.http.get(this.userUrl, { responseType: 'text'});
    }

    getPMBoard(): Observable<string>{
      return this.http.get(this.pmUrl, { responseType: 'text'});
    }
    getAdminBoard(): Observable<string>{
      return this.http.get(this.adminUrl, { responseType: 'text'});
    }

}
