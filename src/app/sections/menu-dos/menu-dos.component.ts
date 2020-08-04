import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PromoComponent } from '../promo/promo.component';
import { CarouselFotosComponent } from '../carousel-fotos/carousel-fotos.component';

@Component({
  selector: 'app-menu-dos',
  templateUrl: './menu-dos.component.html',
  styleUrls: ['./menu-dos.component.css']
})
export class MenuDosComponent implements OnInit {

  public listEventos: any[];

  constructor(public dialog: MatDialog) {
    this.listEventos = [
      {url: "./assets/img/eventos/event1.png"}
    ]
  }

  ngOnInit() {
  }

  openPromo(img: string) {
    this.dialog.open(PromoComponent, {data: { imagen: img}, height:"90%", id: 'mat-dialog-12363'});
  }

  openGaleria(){
    this.dialog.open(CarouselFotosComponent, {data: { fotos: this.listEventos}, width:"80%", height:"90%", id: 'mat-dialog-1238'});
  }

}
