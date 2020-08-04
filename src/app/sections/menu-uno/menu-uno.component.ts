import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PromoComponent } from '../promo/promo.component';

@Component({
  selector: 'app-menu-uno',
  templateUrl: './menu-uno.component.html',
  styleUrls: ['./menu-uno.component.css']
})
export class MenuUnoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openPromo(img: string) {
    this.dialog.open(PromoComponent, {data: { imagen: img}, height:"90%", id: 'mat-dialog-12363'});
  }

}
