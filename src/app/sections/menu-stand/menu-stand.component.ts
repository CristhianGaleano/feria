import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PromoComponent } from '../promo/promo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-stand',
  templateUrl: './menu-stand.component.html',
  styleUrls: ['./menu-stand.component.css']
})
export class MenuStandComponent implements OnInit {
  public href: string = "";
        url: string = "asdf";


  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<formStands>,
    @Inject(MAT_DIALOG_DATA) public data: any,private router : Router) {
    // let liformpos = document.getElementById("li-pos");
    // let liformpre = document.getElementById("li-pre");
    // console.log(liformpos)
    // var modo = this.router.url.split('/');
    // console.log(modo)
    // if( modo[1] == 'pregrado' ){
    //   liformpre.style.display = "none";
    // }
    // else{
    //   liformpos.style.display = "none";
      
    // }
  }
  
  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
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
    var modo = this.router.url.split('/');
    let formpos = document.getElementById("pos");
    let formpre = document.getElementById("pre");
    if( modo[1] == 'pregrado' ){
      formpos.style.display = "none";
    }
    else{
      formpre.style.display = "none";
    }
    this.dialog.open(MenuStandComponent, {width: '80%', height: '80%' });
  }

}

@Component({
  selector: "form",
  templateUrl: "form.html"
}
)
@Component({
  selector: "formpos",
  templateUrl: "formpos.html"
}
)

export class formStands {
  constructor(
    public dialogRef: MatDialogRef<formStands>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}

