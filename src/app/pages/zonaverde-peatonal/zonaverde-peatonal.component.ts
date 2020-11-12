import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-zonaverde-peatonal',
  templateUrl: './zonaverde-peatonal.component.html',
  styleUrls: ['./zonaverde-peatonal.component.css']
})
export class ZonaverdePeatonalComponent implements OnInit {

  public informacion;

  constructor(private titleService: Title, private _router: Router) {
    $( ".liveChatWidget" ).remove();
    // this.redireccionar();
  }

  ngOnInit() {
    this.titleService.setTitle("Expo Virtual - UCatólica");
  }

}
