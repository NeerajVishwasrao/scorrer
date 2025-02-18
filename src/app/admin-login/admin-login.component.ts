import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.router.navigateByUrl('controlPanel')
    }

  }
  submit() {
    console.log(" submitted ");

    if (this.loginForm.username == "valid" && this.loginForm.password == "valid") {
      localStorage.setItem("user", "teamZP")
      this.router.navigateByUrl('controlPanel')
    } else {
      alert("invalid credentials !!! ")
    }
  }
  router = inject(Router)
  loginForm: login = {
    username: "",
    password: ""
  }

  gotoRegister() {
    this.router.navigateByUrl("register")
  }

}
interface login {
  username: string;
  password: string;
}