import { Component, inject } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-userform',
  imports: [FormsModule, CommonModule],
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css'
})
export class UserformComponent {
  newUser: Partial<User> = {};

  private userService = inject(UserService);

  onSubmit(userForm: NgForm){
    this.userService.addUsers(this.newUser);
    this.newUser = {};
    userForm.resetForm();
  }
}
