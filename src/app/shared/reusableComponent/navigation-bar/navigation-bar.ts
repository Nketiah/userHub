import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.css'
})
export class NavigationBar {

  constructor(){}

  private router = inject(Router)

  openLoginPage(){
    this.router.navigateByUrl("/login")
  }

  openRegisterPage(){
    this.router.navigateByUrl("/register")
  }


}
