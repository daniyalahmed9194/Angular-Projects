import { Injectable, signal } from '@angular/core';
import { User } from '../Modals/user.modal';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private users = signal<User[]>([]);
  loadAllUsers = this.users.asReadonly();

addNewUser(newUser: Omit<User, 'id'>) {
  const prevUsers = this.users();
  const newId = prevUsers.length > 0 
    ? Math.max(...prevUsers.map((u) => u.id)) + 1 
    : 0;
  
  // No need to check for duplicate ID since we're generating it fresh
  this.users.set([...prevUsers, { ...newUser, id: newId }]);
}

  get allUsers(){
    return this.loadAllUsers;
  }

  deleteUser(userId: number) {
    this.users.update((prevUsers) =>
      prevUsers.filter((user) => user.id !== userId)
    );
  }

  updateUser(updatedUser: User, userId: number) {
    this.users.update((prevUser) =>
      prevUser.map((user) =>
        user.id === userId ? { ...user, ...updatedUser } : user
      )
    );
  }
}
