import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedCurrency:any = "USD";
  selectedCurrencyt:any = "GBP";
  constructor() { 
    
  }

  datalist = ['USD', 'EUR', 'GBP', 'BRL'];
  // myHero = this.heroes[0];
  var_currency:any;

  ngOnInit() {
    var myIndex = 0;
  console.log(this.datalist);
    carousel();
    function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = "block";  
      setTimeout(carousel, 3000);    
    }

    function classdynamic(){

    }
   
  }
  status: boolean = false;
  statuss: boolean = false;
    clickEvent(){
        this.status = !this.status;       
    }

    clickEvents(){
      this.statuss = !this.statuss;       
  }
    getvalue(var_currency){
      console.log(var_currency)
     // this.status = !this.status; 
      this.selectedCurrency = var_currency;
    }
    getvalues(var_currency){
      console.log(var_currency)
     // this.status = !this.status; 
      this.selectedCurrencyt = var_currency;
    }

}
