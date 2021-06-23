import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebglIntroPageRoutingModule } from './webgl-intro-routing.module';

import { WebglIntroPage } from './webgl-intro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebglIntroPageRoutingModule
  ],
  declarations: [WebglIntroPage]
})
export class WebglIntroPageModule {}
