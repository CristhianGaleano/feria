import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { CarouselVideosComponent } from '../../../sections/carousel-videos/carousel-videos.component';
import { CarouselFotosComponent } from '../../../sections/carousel-fotos/carousel-fotos.component';

@Component({
  selector: 'app-especializacion-psicologia-clinica',
  templateUrl: './especializacion-psicologia-clinica.component.html',
  styleUrls: ['./especializacion-psicologia-clinica.component.css']
})
export class EspecializacionPsicologiaClinicaComponent implements OnInit {

  public listVideos: any[];
  public listFotos: any[];

  constructor(public dialog: MatDialog, private titleService: Title) {
    this.listVideos = [
      {iframe: "https://www.youtube.com/embed/Hv5IdK8xudA", img: "https://i.ytimg.com/vi/Hv5IdK8xudA/hqdefault.jpg"}
    ]

    this.listFotos = [
      {url: "./assets/img/pregrado/comunicacion-social-periodismo/galeria/foto 2.png"}
    ]
  }

  ngOnInit() {
    this.titleService.setTitle("Especialización en Psicología Clínica con énfasis en Psicoterapia con niños y adolescentes - Expo Virtual - UCP");
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
