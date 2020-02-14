import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
    window.onscroll = function() {myFunction()};

    var header = document.getElementById("nvbar");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("is-sticky");
      } else {
        header.classList.remove("is-sticky");
      }
    }
  }

  

}
