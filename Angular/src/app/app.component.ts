import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';

  constructor(private router:Router){}

  goToLogin() {
    this.router.navigate(['/login']);
  }
  goToHome(){
    this.router.navigate(['/home'])
  }

}
