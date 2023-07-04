import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent {
  messages1: string[] = [
    'Admission Notice 2023-2024',
    'Compilation of Research Studies 2019-2022',
    'Additional message 1',
    
  ];
  messages2: string[] = [
    'State Level Teachers Conference',
    'On site support to school under BRC ,Rakdong,East Sikkim',
    'Coordination meeting of Teacher Education Institutes(DIET)',
    'School Internship Programs for 2nd and 4th Semester Students Teachers',
    'Consultative meeting with heads of schools',
    'Pre-SIP Preparatory Workshop for second year pre service Student Teacher',
  ];
  messages3: string[] = ['STAFF SELECTION COMMISSION PUBLIC PORTAL', 'Employment News of Sikkim', 'Important News Portal of India'];
}