import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PromoComponent } from '../promo/promo.component';

@Component({
  selector: 'app-menu-stand',
  templateUrl: './menu-stand.component.html',
  styleUrls: ['./menu-stand.component.css']
})
export class MenuStandComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openPromo(img: string) {
    console.log(img);
    if(img === 'plan'){
      console.log("entre");
      img = `./assets/img${window.location.pathname}/plan-estudio.png`;
    }
    this.dialog.open(PromoComponent, {data: { imagen: img}, height:"90%", id: 'mat-dialog-12363'});
  }

  openForm(){
    this.dialog.open(formStands, {width: '80%', height: '80%' });
  }

}

@Component({
  selector: "form",
  templateUrl: "form.html"
})
export class formStands {
  constructor(
    public dialogRef: MatDialogRef<formStands>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
