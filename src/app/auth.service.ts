import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private currentUser: string | null = null;

  private validUsers = [
    { username: 'Admin', password: 'mica' },
    { username: 'Josue', password: 'ormaza' },
    { username: 'steeven', password: 'riofrio' },
    { username: 'Maria', password: 'mary' }
  ];

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    const user = this.validUsers.find(u => u.username === username && u.password === password);

    if (user) {
      this.isLoggedIn = true;
      this.currentUser = username;
      return true;
    } else {
      this.isLoggedIn = false;
      this.currentUser = null;
      return false;
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getLoggedInUser(): string | null {
    return this.currentUser;
  }
}
