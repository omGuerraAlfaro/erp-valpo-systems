import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'erp-valpo-systems';
  user= false;
  constructor(private router: Router) {
    const estado = localStorage.getItem('ingresado')
    console.log(estado);
    
    if(estado != 'true'){
      this.user=true;
      this.router.navigate(['/home']);
    }
  }
}
