import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
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
    MatPaginatorModule,
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
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ✅ Form handling
  showForm = false;
  editingClinic: any = null;
   sidebarOpen = true;
  selectedTabIndex = 0; // 0: List, 1: Add/Edit
  showSearch = false;

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
    // Basic validation: prevent empty form saves
    const { name, type, gender, patientType, code } = this.formData;
    if (!name || !type || !gender || !patientType || !code) {
      return;
    }

    if (this.editingClinic) {
      Object.assign(this.editingClinic, this.formData);
    } else {
      this.clinics = [{ ...this.formData }, ...this.clinics];
      this.refreshTable();
    }
    this.toggleForm();
    this.selectedTabIndex = 0; // switch to Clinics List tab
  }

  onCheckAction() {
    // If currently on list tab, go to form tab
    if (this.selectedTabIndex === 0) {
      this.selectedTabIndex = 1;
      this.showForm = true;
      return;
    }
    // Otherwise, attempt to submit with validation
    this.onSubmit();
  }

  onEdit(clinic: any) {
    this.formData = { ...clinic };
    this.editingClinic = clinic;
    this.showForm = true;
  }

  onDelete(clinic: any) {
    this.clinics = this.clinics.filter(c => c !== clinic);
    this.refreshTable();
  }

   resetForm() {
    this.formData = { name: '', type: '', gender: '', patientType: '', isActive: true, code: '' };
    this.editingClinic = null;
  }

  onAction(action: string, clinic: any) {
  if (action === 'edit') {
    this.onEdit(clinic);
    this.editingClinic = true;
    this.formData = { ...clinic };
  } else if (action === 'delete') {
    this.onDelete(clinic);
  }
}


 toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    console.log('Sidebar toggled:', this.sidebarOpen);
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<any>(this.clinics);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  private refreshTable() {
    this.dataSource.data = this.clinics.slice();
  }

  // showSearch = false;

toggleSearch() {
  this.showSearch = !this.showSearch;
}


// CreateUserId
// CreateDate
}
