import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { CarouselVideosComponent } from '../../../sections/carousel-videos/carousel-videos.component';
import { CarouselFotosComponent } from '../../../sections/carousel-fotos/carousel-fotos.component';

@Component({
  selector: 'app-maestria-pedagogia-y-desarrollo-humano',
  templateUrl: './maestria-pedagogia-y-desarrollo-humano.component.html',
  styleUrls: ['./maestria-pedagogia-y-desarrollo-humano.component.css']
})
export class MaestriaPedagogiaYDesarrolloHumanoComponent implements OnInit {

  public listVideos: any[];
  public listFotos: any[];

  constructor(public dialog: MatDialog, private titleService: Title) {
    this.listVideos = [
      {iframe: "https://www.youtube.com/embed/6Cxadg_2LYc", img: "http://i3.ytimg.com/vi/v6RB-jabufw/hqdefault.jpg"}
    ]

    this.listFotos = [
      {url: "./assets/img/posgrado/maestria-pedagogia-y-desarrollo-humano/galeria/foto 1.png"},
      // {url: "./assets/img/posgrados/maestria-pedagogia-y-desarrollo-humano/galeria/foto 2.png"},
      // {url: "./assets/img/posgrados/maestria-pedagogia-y-desarrollo-humano/galeria/foto 3.png"},
      // {url: "./assets/img/posgrados/maestria-pedagogia-y-desarrollo-humano/galeria/foto 4.png"}
    ]
  }

  ngOnInit() {
    this.titleService.setTitle("Maestría en Pedagogía y Desarrollo Humano - Expo Virtual - UCatólica");
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
