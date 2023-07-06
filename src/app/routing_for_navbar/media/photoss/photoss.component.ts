import { Component } from '@angular/core';

@Component({
  selector: 'app-photoss',
  templateUrl: './photoss.component.html',
  styleUrls: ['./photoss.component.css']
})
export class PhotossComponent {
  photos = [
    { url: '/assets/img/MAAM1.jpeg', caption: 'Photo 1' },
    { url: '/assets/img/MAAM2.jpeg', caption: 'Photo 2' },
    { url: '/assets/img/MAAM3.jpeg', caption: 'Photo 3' },
    { url: '/assets/img/MAAM9.jpeg', caption: 'Photo 4' },
    { url: '/assets/img/MAAM10.jpeg', caption: 'Photo 5' },
    { url: '/assets/img/MAAM11.jpeg', caption: 'Photo 6' },
    { url: '/assets/img/MAAM12.jpeg', caption: 'Photo 7' },
    { url: '/assets/img/MAAM13.jpeg', caption: 'Photo 8' },
    { url: '/assets/img/MAAM14.jpeg', caption: 'Photo 9' },
    { url: '/assets/img/MAAM1.jpeg', caption: 'Photo 10' },
    { url: '/assets/img/MAAM11.jpeg', caption: 'Photo 11' },
    { url: '/assets/img/MAAM2.jpeg', caption: 'Photo 12' }
  ];
}
