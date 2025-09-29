import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-typico-users',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSelectModule,
     MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
  ],
  templateUrl: './typico-users.html',
  styleUrl: './typico-users.css',
})
export class TypicoUsers {
  // ✅ Static array (clinics data)
  clinics = [
    { name: 'PAEDIATRICS', type: 'GENERAL', gender: 'All', patientType: 'ALL', isActive: true, code: '24' },
    { name: 'DIABETIC', type: 'MEDICAL', gender: 'All', patientType: 'ALL', isActive: true, code: '21' },
    { name: 'DIRECT PHARMACY', type: 'DIRECT PHARMACY', gender: 'All', patientType: 'ALL', isActive: true, code: '76' },
    { name: 'UROLOGY', type: 'GENERAL', gender: 'All', patientType: 'OUT', isActive: true, code: '22' },
    { name: 'EYE', type: 'EYE', gender: 'All', patientType: 'ALL', isActive: true, code: '23' },
    { name: 'SPECIALIST', type: 'GENERAL', gender: 'All', patientType: 'ALL', isActive: true, code: '25' },
    { name: 'PHYSIOTHERAPY', type: 'GENERAL', gender: 'All', patientType: 'ALL', isActive: true, code: '26' },
    { name: 'GYNECOLOGY', type: 'GYNECOLOGY', gender: 'All', patientType: 'ALL', isActive: true, code: '27' },
    { name: 'DENTAL', type: 'DENTAL', gender: 'All', patientType: 'ALL', isActive: true, code: '28' },
    { name: 'APPOINTMENT', type: 'APPOINTMENT', gender: 'All', patientType: 'ALL', isActive: true, code: '30' },
  ];

  displayedColumns: string[] = ['name', 'type', 'gender', 'patientType', 'isActive', 'code', 'actions'];

  // ✅ Form handling
  showForm = false;
  editingClinic: any = null;
   sidebarOpen = true;

  formData = {
    name: '',
    type: '',
    gender: '',
    patientType: '',
    isActive: true,
    code: '',
  };

  toggleForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) this.resetForm();
  }

  onSubmit() {
    if (this.editingClinic) {
      Object.assign(this.editingClinic, this.formData);
    } else {
      this.clinics = [{ ...this.formData }, ...this.clinics];
    }
    this.toggleForm();
  }

  onEdit(clinic: any) {
    this.formData = { ...clinic };
    this.editingClinic = clinic;
    this.showForm = true;
  }

  onDelete(clinic: any) {
    this.clinics = this.clinics.filter(c => c !== clinic);
  }

   resetForm() {
    this.formData = { name: '', type: '', gender: '', patientType: '', isActive: true, code: '' };
    this.editingClinic = null;
  }

  onAction(action: string, clinic: any) {
  if (action === 'edit') {
    this.onEdit(clinic);
  } else if (action === 'delete') {
    this.onDelete(clinic);
  }
}


 toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    console.log('Sidebar toggled:', this.sidebarOpen);
  }

// CreateUserId
// CreateDate
}
