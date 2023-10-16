import { Component } from '@angular/core';
import { UserAuthService } from './services/userAuth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService:UserAuthService){}
  ngOnInit(){
    this.authService.autoLogin()
  }
}
