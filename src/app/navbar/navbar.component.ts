import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isSmallScreen = false; // Initially, the menu is shown

  constructor() { }

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 768; // Adjust the threshold as needed
  }

  toggleMenu() {
    this.isSmallScreen = !this.isSmallScreen;
  }
}
