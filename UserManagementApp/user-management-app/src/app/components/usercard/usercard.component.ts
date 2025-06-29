import { Component, inject, input, signal , Signal} from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-usercard',
  imports: [FormsModule],
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css'
})
export class UsercardComponent {
  user = input.required<User>();
  isEditModalOpen = signal(false);
  editUser: User = new User({ ...this.user()});

  private userService = inject(UserService);
  
  onEdit(){
    this.editUser = new User({ ...this.user()});
    this.isEditModalOpen.set(false)
  }
  
  closeModal(){
    this.isEditModalOpen.set(false)
  }

  saveChanges(){
    this.userService.editUserId(this.user().id, this.editUser)
    this.isEditModalOpen.set(false)
  }
  onDelete(){
    this.userService.deleteUser(this.user().id)
  }
}
