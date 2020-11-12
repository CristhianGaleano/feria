import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarouselVideosComponent } from '../../sections/carousel-videos/carousel-videos.component';
import { CarouselFotosComponent } from '../../sections/carousel-fotos/carousel-fotos.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-exp-unica',
  templateUrl: './exp-unica.component.html',
  styleUrls: ['./exp-unica.component.css']
})
export class ExpUnicaComponent implements OnInit {

  public listVideos: any[];
  public listFotos: any[];

  constructor(public dialog: MatDialog, private titleService: Title) {
    this.listVideos = [
      {iframe: "https://www.youtube.com/embed/UqTZulAkqW0", img: "http://i3.ytimg.com/vi/UqTZulAkqW0/hqdefault.jpg"},
      {iframe: "https://www.youtube.com/embed/L6rKMPA6uR4", img: "http://i3.ytimg.com/vi/L6rKMPA6uR4/hqdefault.jpg"},
      {iframe: "https://www.youtube.com/embed/7F3AdmZ7F0I", img: "http://i3.ytimg.com/vi/7F3AdmZ7F0I/hqdefault.jpg"},
      {iframe: "https://www.youtube.com/embed/jwlfE1rKMkY", img: "http://i3.ytimg.com/vi/jwlfE1rKMkY/hqdefault.jpg"}
    ]

    this.listFotos = [
      {url: "./assets/img/exp-unica/galeria/foto 1.png"},
      {url: "./assets/img/exp-unica/galeria/foto 2.png"},
      {url: "./assets/img/exp-unica/galeria/foto 3.png"},
      {url: "./assets/img/exp-unica/galeria/foto 4.png"},
      {url: "./assets/img/exp-unica/galeria/foto 5.png"},
      {url: "./assets/img/exp-unica/galeria/foto 6.png"},
      {url: "./assets/img/exp-unica/galeria/foto 7.png"},
      {url: "./assets/img/exp-unica/galeria/foto 8.png"},
      {url: "./assets/img/exp-unica/galeria/foto 9.png"},
      {url: "./assets/img/exp-unica/galeria/foto 10.png"}
    ]
  }

  ngOnInit() {
    this.titleService.setTitle("Experiencia Única - Expo Virtual - UCatólica");
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
