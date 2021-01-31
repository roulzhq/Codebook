import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ToastrModule } from 'ngx-toastr';

const toastrOptions = {
  timeOut: 3000,
  positionClass: 'toast-bottom-right',
  preventDuplicates: true,
};

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, ToastrModule.forRoot(toastrOptions)],
  exports: [ButtonComponent],
})
export class SharedModule {}
