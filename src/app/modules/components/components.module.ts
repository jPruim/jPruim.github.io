import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from 'src/app/components/custom-header/custom-header.component';



@NgModule({
  declarations: [CustomHeaderComponent],
  imports: [
    CommonModule,
  ],
  exports: [CustomHeaderComponent],
})
export class ComponentsModule { }
