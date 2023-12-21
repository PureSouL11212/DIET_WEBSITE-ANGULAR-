// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-startbar',
//   templateUrl: './startbar.component.html',
//   styleUrls: ['./startbar.component.css']
// })
// export class StartbarComponent {

// }
import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-startbar',
    templateUrl: './startbar.component.html',
    styleUrls: ['./startbar.component.css']
})
export class StartbarComponent {
  isSmallScreen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isSmallScreen = window.innerWidth <= 950; // Adjust the threshold as needed
  }
  toggleLanguage(): void {
    this.isSmallScreen = !this.isSmallScreen;
  }
}
