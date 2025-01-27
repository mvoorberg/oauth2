import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from '../services/auth-google.service';

const MODULES = [CommonModule];
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MODULES],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  private authService = inject(AuthGoogleService);
  private router = inject(Router);

  get profile() {
    return  this.authService.profile;
  }

  get idToken(): string {
    return this.authService.getIDToken();
  }

  goDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
