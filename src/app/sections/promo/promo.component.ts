import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {

  public img: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.img = data.imagen;
  }

  ngOnInit() {
  }

}
