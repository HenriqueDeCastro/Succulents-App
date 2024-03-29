import { NgModule } from '@angular/core';
import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  imports: [NgxMaskModule.forRoot(maskConfig)],
  exports: [NgxMaskModule]
})

export class MaskModule { }
