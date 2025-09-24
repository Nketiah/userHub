import { Routes } from '@angular/router';
import { App } from './app';
import { TypicoUsers } from './pages/typico-users/typico-users';
import { GithubUsers } from './pages/github-users/github-users';
import { Welcome } from './pages/welcome/welcome';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

export const routes: Routes = [
    { path: "", component: Welcome },
    { path: "json-placeholder-users", component: TypicoUsers },
    { path: "github-finder", component: GithubUsers },
    { path: "login", component: Login },
    { path: "register", component: Register },
    { path: "**", redirectTo: "" } 
];
