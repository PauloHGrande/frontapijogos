import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgOptimizedImage, 
            RouterOutlet, 
            RouterLink,
            HeaderComponent,
            MatSidenavModule, 
            MatButtonModule, 
            MatListModule, 
            MatIconModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['home'])
  }

}
