import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-cie-principal',
  templateUrl: './cie-principal.component.html',
  styleUrls: ['./cie-principal.component.css']
})
export class CiePrincipalComponent implements OnInit {

  public informacion;

  constructor(private titleService: Title, private _router: Router) {
    $( ".liveChatWidget" ).remove();
    // this.redireccionar();
  }

  ngOnInit() {
    this.titleService.setTitle("Expo Virtual - UCatólica");
  }

}
