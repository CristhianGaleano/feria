import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { CarouselVideosComponent } from '../../../sections/carousel-videos/carousel-videos.component';
import { CarouselFotosComponent } from '../../../sections/carousel-fotos/carousel-fotos.component';

@Component({
  selector: 'app-especializacion-psicologia-psicosocial',
  templateUrl: './especializacion-psicologia-psicosocial.component.html',
  styleUrls: ['./especializacion-psicologia-psicosocial.component.css']
})
export class EspecializacionPsicologiaPsicosocialComponent implements OnInit {

  public listVideos: any[];
  public listFotos: any[];

  constructor(public dialog: MatDialog, private titleService: Title) {
    this.listVideos = [
      {iframe: "https://www.youtube.com/embed/EcRnuS-y2xY", img: "http://i3.ytimg.com/vi/v6RB-jabufw/hqdefault.jpg"}
    ]

    this.listFotos = [
      {url: "./assets/img/pregrado/psicologia/galeria/foto 1.png"},
      {url: "./assets/img/pregrado/psicologia/galeria/foto 2.png"},
      {url: "./assets/img/pregrado/psicologia/galeria/foto 3.png"},
      {url: "./assets/img/pregrado/psicologia/galeria/foto 4.png"},
      {url: "./assets/img/pregrado/psicologia/galeria/foto 5.png"},
      {url: "./assets/img/pregrado/psicologia/galeria/foto 6.png"},
      {url: "./assets/img/pregrado/psicologia/galeria/foto 7.png"},
      {url: "./assets/img/pregrado/psicologia/galeria/foto 8.png"},
      {url: "./assets/img/pregrado/psicologia/galeria/foto 9.png"},
      {url: "./assets/img/pregrado/psicologia/galeria/foto 10.png"}
    ]
  }

  ngOnInit() {
    this.titleService.setTitle("Especialización en Psicología Social y Acción Psicosocial - Expo Virtual - UCP");
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
