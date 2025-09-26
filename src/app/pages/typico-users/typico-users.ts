import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';

// Angular Material imports
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule, } from '@angular/material/grid-list';


@Component({
  selector: 'app-typico-users',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
],

  templateUrl: './typico-users.html',
  styleUrl: './typico-users.css'
})
export class TypicoUsers implements OnInit {
  private http = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  users: any[] = [];
  showForm = false;
  editingUserId: number | null = null;
  loading = false;

  formData = {
    name: '',
    username: '',
    email: '',
    city: '',
    phone: '',
    website: ''
  };

  ngOnInit() {
    this.getUsers();
  }

  /** GET Users */
  getUsers() {
    this.loading = true;
    this.http.get<any[]>(this.apiUrl)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => this.users = data,
        error: (err) => console.error('Error fetching users:', err),
        complete: () => this.loading = false
      });
  }

  toggleForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) this.resetForm();
  }

  addUser() {
    this.http.post<any>(this.apiUrl, this.formData)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (newUser) => {
          newUser.id = this.users.length + 1;
          this.users = [newUser, ...this.users];
          this.toggleForm();
        },
        error: (err) => console.error('Error adding user:', err)
      });
  }

  updateUser() {
    if (this.editingUserId == null) return;
    this.http.put<any>(`${this.apiUrl}/${this.editingUserId}`, this.formData)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (updatedUser) => {
          const idx = this.users.findIndex(u => u.id === this.editingUserId);
          if (idx > -1) {
            this.users[idx] = {
              ...updatedUser,
              id: this.editingUserId,
              address: { city: this.formData.city }
            };
          }
          this.toggleForm();
        },
        error: (err) => console.error('Error updating user:', err)
      });
  }

  onDelete(user: any) {
    this.http.delete(`${this.apiUrl}/${user.id}`)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.users = this.users.filter(u => u.id !== user.id),
        error: (err) => console.error('Error deleting user:', err)
      });
  }

  onEdit(user: any) {
    this.formData = {
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.address?.city,
      phone: user.phone,
      website: user.website
    };
    this.editingUserId = user.id;
    this.showForm = true;
  }

  onSubmit() {
    if (this.editingUserId) {
      this.updateUser();
    } else {
      this.addUser();
    }
  }

  private resetForm() {
    this.formData = { name: '', username: '', email: '', city: '', phone: '', website: '' };
    this.editingUserId = null;
  }
}
