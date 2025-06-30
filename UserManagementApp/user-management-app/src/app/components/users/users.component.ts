import { Component, inject, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { UsercardComponent } from "../usercard/usercard.component";

@Component({
  selector: 'app-users',
  imports: [CommonModule, UsercardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  userService = inject(UserService)
  ngOnInit(): void {
    this.userService.fetchUsers().subscribe({
      next: () => {
        console.log('users fetched successfully')
      }, 
      error: (error) => {
        console.error('Error fetching users', error)
      }
    })
  }
  onDeleteUser(userId: number){
    this.userService.deleteUser(userId);
  }
  onAddUser(newUser: Partial<User>){
    this.userService.addUsers(newUser)
  }
  onUpdateUser(updatedUser: User){
    this.userService.editUserId(updatedUser.id, updatedUser);
  }

}
