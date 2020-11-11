import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { CarouselVideosComponent } from '../../../sections/carousel-videos/carousel-videos.component';
import { CarouselFotosComponent } from '../../../sections/carousel-fotos/carousel-fotos.component';

@Component({
  selector: 'app-epecializacion-gestion-construccion-sostenible',
  templateUrl: './epecializacion-gestion-construccion-sostenible.component.html',
  styleUrls: ['./epecializacion-gestion-construccion-sostenible.component.css']
})
export class EpecializacionGestionConstruccionSostenibleComponent implements OnInit {

  public listVideos: any[];
  public listFotos: any[];

  constructor(public dialog: MatDialog, private titleService: Title) {
    this.listVideos = [
      {iframe: "https://www.youtube.com/embed/UfP_QVpUcTc", img: "http://i3.ytimg.com/vi/v6RB-jabufw/hqdefault.jpg"}
    ]

    this.listFotos = [
      {url: "./assets/img/pregrado/administracion-empresa/galeria/foto 2.png"}
    ]
  }

  ngOnInit() {
    this.titleService.setTitle("Especialización en Gestión de la Construcción Sistenible - Expo Virtual - UCP");
  }

  openVideos() {
    this.dialog.open(CarouselVideosComponent, {data: { videos: this.listVideos}, width:"80%", height:"70%", id: 'mat-dialog-1236'});
  }

  openGaleria(){
    this.dialog.open(CarouselFotosComponent, {data: { fotos: this.listFotos}, width:"80%", height:"90%", id: 'mat-dialog-1238'});
  }

  play(estado: boolean){
    var myImg = document.getElementById("play");
    var currWidth = myImg.clientWidth;
    var currTop = myImg.clientTop;
    if(estado){
      myImg.style.width = (currWidth + 6) + "px";
      myImg.style.top = (currTop + 46) + "%";
    }else{
      myImg.style.width = (currWidth - 6) + "px";
      myImg.style.top = (currTop + 46.5) + "%";
    }
  }
}
