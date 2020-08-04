import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public informacion;

  constructor(private titleService: Title, private _router: Router) {
    $( ".liveChatWidget" ).remove();
    this.redireccionar();
  }

  ngOnInit() {
    this.titleService.setTitle("Expo Virtual - UCP");
  }

  redireccionar(){
    let cont = 0;
    let _this = this
    let timevideo = setInterval(function() {
      cont++;
      if(cont >= 98){
        clearInterval(timevideo);
        _this._router.navigate(['/experiencia-unica/']);
      }
    }, 1000);
  }

}
