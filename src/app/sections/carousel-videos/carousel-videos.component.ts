import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-carousel-videos',
  templateUrl: './carousel-videos.component.html',
  styleUrls: ['./carousel-videos.component.css']
})
export class CarouselVideosComponent implements OnInit {

  public videos: any;

  gallerythumbs: any = {
    pagination: { el: '.swiper-pagination', clickable: true },
    paginationHide: false,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.videos = data.videos;
  }

  ngOnInit() {
  }

}
