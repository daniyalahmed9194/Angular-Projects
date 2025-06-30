import { Component } from '@angular/core';
import { LoginReactiveComponent } from "./auth/login-reactive/login-reactive.component";
import { LoginComponent } from "./auth/login(older)/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LoginReactiveComponent, LoginComponent],
})
export class AppComponent {}
