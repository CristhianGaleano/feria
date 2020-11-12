import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { CarouselFotosComponent } from '../../sections/carousel-fotos/carousel-fotos.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  public listFotos: any[];

  constructor(private titleService: Title, public dialog: MatDialog) {
    this.listFotos = [
      {url: "./assets/img/exp-unica/galeria/foto 15.png"},
      {url: "./assets/img/exp-unica/galeria/foto 16.png"},
      {url: "./assets/img/exp-unica/galeria/foto 17.png"},
      {url: "./assets/img/exp-unica/galeria/foto 18.png"},
      {url: "./assets/img/exp-unica/galeria/foto 19.png"},
      {url: "./assets/img/exp-unica/galeria/foto 20.png"},
      {url: "./assets/img/exp-unica/galeria/foto 21.png"},
      {url: "./assets/img/exp-unica/galeria/foto 22.png"},
      {url: "./assets/img/exp-unica/galeria/foto 23.png"},
      {url: "./assets/img/exp-unica/galeria/foto 24.png"}
    ]
  }

  ngOnInit() {
    this.titleService.setTitle("Mapa Expo Virtual - UCatólica");
  }

  facultad(pop: string, estado: boolean, id: string = null){
    var facult = document.getElementById(id);
    var popTitulo = document.getElementById(pop);
    if(id !== null){
      facult.hidden = estado;
    }
    popTitulo.hidden = estado;
    
  }

  openGaleria(){
    this.dialog.open(CarouselFotosComponent, {data: { fotos: this.listFotos}, id: 'mat-dialog-1238'});
  }

}
