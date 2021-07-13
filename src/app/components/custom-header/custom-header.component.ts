import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})
export class CustomHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {}



  //When the menu icon is clicked, display the menu (with the new class styling)
  toggleMenu(){
    let menuElement = document.getElementById("menu");
    if(menuElement.className ==="menu-nav"){
      menuElement.className +=" responsive";
    }else{
      menuElement.className = 'menu-nav';
    }
  }

}
