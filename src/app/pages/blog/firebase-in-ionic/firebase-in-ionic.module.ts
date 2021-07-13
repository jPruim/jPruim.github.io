import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirebaseInIonicPageRoutingModule } from './firebase-in-ionic-routing.module';

import { FirebaseInIonicPage } from './firebase-in-ionic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebaseInIonicPageRoutingModule
  ],
  declarations: [FirebaseInIonicPage]
})
export class FirebaseInIonicPageModule {}
