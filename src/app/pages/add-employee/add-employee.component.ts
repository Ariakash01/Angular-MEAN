import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogService } from '../../Services/dialog.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,FlexLayoutModule]
})
export class AddEmployeeComponent implements OnInit {

  empForm!: FormGroup;
  picker: any;
  constructor(public service:DialogService) { }

  ngOnInit(): void {
    // Create the FormGroup manually
    this.empForm = new FormGroup({
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      department: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      dateOfJoining: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    });
  }
  checkForm() {
    return this.empForm?!this.empForm.dirty:true;
  }
  empFormSubmit() {
    console.log('Form Submitted:', this.empForm.dirty);
  }
  
// closeDialog(){
//   dialogRef.afterClosed().subscribe((res) => {
//     if (res) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   })
// }
}
