import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirebaseInIonicPage } from './firebase-in-ionic.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseInIonicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebaseInIonicPageRoutingModule {}
