import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, MatInputModule,
    MatFormFieldModule,
    MatButtonModule, MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  token!: string;
  constructor(private http: HttpClient, private router: Router) { }
  login() {

    this.http.post("http://localhost:8000/api/Login", this.loginForm.value).subscribe(res => {
      console.log('res', res);
      this.token = res as string;
      localStorage.setItem("token", this.token);
      this.router.navigate(['/app/add-employee']);
    })
  }

}
