import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  isLogged = false;
  constructor(private router: Router) { 
    this.isLogged = localStorage.getItem('User') !== null ? true : false;
    if(this.isLogged){
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
  }

}
