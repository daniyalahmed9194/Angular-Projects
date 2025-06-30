import { Component, inject, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-usercard',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./usercard.component.css'],
  templateUrl: './usercard.component.html'  
})
export class UsercardComponent {
  @Input() user!: User;
  isEditModalOpen: boolean = false;
  editUser: User = new User({}); // initialize empty

  private userService = inject(UserService);


  onEdit() {
    this.editUser = new User({ ...this.user });
    this.isEditModalOpen = true;
  }

  closeModal() {
    this.isEditModalOpen =false;
  }

  saveChanges() {
    this.userService.editUserId(this.user.id, this.editUser);
    this.isEditModalOpen =false;
  }

  onDelete() {
    this.userService.deleteUser(this.user.id);
  }
}
