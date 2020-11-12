import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-zonaverde-dabar',
  templateUrl: './zonaverde-dabar.component.html',
  styleUrls: ['./zonaverde-dabar.component.css']
})
export class ZonaverdeDabarComponent implements OnInit {

  public informacion;

  constructor(private titleService: Title, private _router: Router) {
    $( ".liveChatWidget" ).remove();
    // this.redireccionar();
  }

  ngOnInit() {
    this.titleService.setTitle("Expo Virtual - UCatólica");
  }

}