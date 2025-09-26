import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-navigation-bar',
   imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule
  ],
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
