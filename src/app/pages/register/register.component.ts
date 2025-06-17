import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { SignalService } from '../../Services/signal.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink, MatInputModule,
    MatFormFieldModule,
    MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private http: HttpClient,
    public signalservice: SignalService,
    private router: Router) { }
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  register() {

    this.http.post('http://localhost:8000/api/Register', this.registerForm.value).subscribe(res => {
      console.log('res', res);
      if (res) {
        this.router.navigate(['/login']);
      }
    })
  }
}
