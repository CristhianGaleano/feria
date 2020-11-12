import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-cie',
  templateUrl: './cie.component.html',
  styleUrls: ['./cie.component.css']
})
export class CieComponent implements OnInit {

  public informacion;

  constructor(private titleService: Title, private _router: Router) {
    $( ".liveChatWidget" ).remove();
    // this.redireccionar();
  }

  ngOnInit() {
    this.titleService.setTitle("Expo Virtual - UCatólica");
  }

}
