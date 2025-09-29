import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBar } from './shared/reusableComponent/navigation-bar/navigation-bar';
import { TypicoUsers } from './pages/typico-users/typico-users';

@Component({
  selector: 'app-root',
  imports: [NavigationBar, TypicoUsers],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('userHub');
}
