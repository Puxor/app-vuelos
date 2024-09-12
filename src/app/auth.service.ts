import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USERS_KEY = 'users';
  private readonly CURRENT_USER_KEY = 'currentUser';

  constructor() { }

  register(username: string, password: string): void {
    const users = JSON.parse(localStorage.getItem(this.USERS_KEY) || '[]');
    users.push({ username, password });
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  }

  login(username: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem(this.USERS_KEY) || '[]');
    const user = users.find((u: any) => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.CURRENT_USER_KEY);
  }

  logout(): void {
    localStorage.removeItem(this.CURRENT_USER_KEY);
  }
}

