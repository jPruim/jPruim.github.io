import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webgl-intro',
  templateUrl: './webgl-intro.page.html',
  styleUrls: ['./webgl-intro.page.scss'],
})
export class WebglIntroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  initialize() {
    const canvas = <HTMLCanvasElement>document.querySelector("#glCanvas");
    // Initialize the GL context
    const gl = canvas.getContext("webgl");

    // Only continue if WebGL is available and working
    if (gl === null) {
      alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
  }

  ionViewWillEnter() {
    this.initialize();
  }

}