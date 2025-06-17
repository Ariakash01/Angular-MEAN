import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private http:HttpClient,private router:Router){}
  // ngOnInit(){
  //   const token=localStorage.getItem("token");
  //   console.log("home",token);
  //   this.http.post("http://localhost:8000/api/Verify", { token: token }).subscribe(res=>{
  //     console.log('res',res);
  //     if(res===false){
  //       this.router.navigate(['/login']);
  //     }
  //   });
  // }
}
