import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-carousel-fotos',
  templateUrl: './carousel-fotos.component.html',
  styleUrls: ['./carousel-fotos.component.css']
})
export class CarouselFotosComponent implements OnInit {

  public fotos: any;

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
    this.fotos = data.fotos;
  }

  ngOnInit() {
  }

}
