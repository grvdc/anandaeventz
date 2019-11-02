import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliderpage',
  templateUrl: './sliderpage.component.html',
  styleUrls: ['./sliderpage.component.css']
})
export class SliderpageComponent implements OnInit {
  // @ViewChild('cd', { static: false }) private countdown: CountdownComponent;
  // this.countdown.begin();
  constructor() { }
  imagesUrl;
  ngOnInit() {
    this.imagesUrl = [
      'https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252__340.jpg',
      'https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ];
  }

}
