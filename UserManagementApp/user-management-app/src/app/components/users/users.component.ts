import { Component } from '@angular/core';
import { UsercardComponent } from '../usercard/usercard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [UsercardComponent, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

}
