import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, map } from 'rxjs';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];
  private httpClient = inject(HttpClient);

  fetchUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL).pipe(
      map((rawUsers) => {
        this.users = rawUsers.map((user) => new User(user));
        return this.users;
      })
    );
  }

  getUser(): User[] {
    return this.users;
  }

  addUsers(newUser: Partial<User>): void {
    const userId = Math.max(0, ...this.users.map((user) => user.id)) + 1;
    const userInstance = new User({
      ...newUser,
      id: userId,
    });
    this.users.push(userInstance);
  }

  deleteUser(userId: number): void {
    this.users = this.users.filter((user) => user.id !== userId);
  }

  findUserId(userId: number): User | undefined {
    return this.users.find((user) => user.id === userId);
  }

  editUserId(userId: number, updatedUser: Partial<User>): User | undefined {
    const user = this.findUserId(userId);
    if (!user) {
      throw new Error('User with id ${userId} not found. ');
    }
    Object.assign(user, updatedUser);
    return user;
  }
}
