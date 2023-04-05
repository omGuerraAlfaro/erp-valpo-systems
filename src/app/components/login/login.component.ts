import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin = new FormControl('');
  loginGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private router: Router, private auth: AuthService) { }
  
  ngOnInit(): void {
    localStorage.setItem('ingresado', 'false');
  }
  onSubmit() {
    console.log(this.loginGroup.value);
    const {email, password} = this.loginGroup.value
    if (email && password) {
      this.auth.login(email, password).subscribe((data: any) => {
        if(data[0]){
          const [ user ] = data;
          localStorage.setItem('User', user);
          this.router.navigate(['/home']);
          location.reload();
        }
      });
    }

  }

}