import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protfolio',
  templateUrl: './protfolio.component.html',
  styleUrls: ['./protfolio.component.css']
})
export class ProtfolioComponent implements OnInit {
  show:boolean=false;
  toggleDiv(){
  this.show=!this.show;
}
   constructor() { }

  ngOnInit(): void {
  }

}
