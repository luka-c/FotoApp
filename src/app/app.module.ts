import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryImageComponent } from './product-details/gallery-image/gallery-image.component';
import { DescriptionComponent } from './product-details/description/description.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RemarksComponent } from './product-details/remarks/remarks.component';
import { BuyingOptionsComponent } from './product-details/buying-options/buying-options.component';
import { BuyingInfoComponent } from './product-details/buying-info/buying-info.component';
import { ButtonGroupComponent } from './button-group/button-group.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryImageComponent,
    DescriptionComponent,
    ProductDetailsComponent,
    RemarksComponent,
    BuyingOptionsComponent,
    BuyingInfoComponent,
    ButtonGroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
