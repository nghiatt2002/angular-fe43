import { BaiTap3Module } from './bai-tap3/bai-tap3.module';

import { Buoi1Module } from './buoi1/buoi1.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
// import { HeaderComponent } from './BT1/header/header.component';
// import { ContentsComponent } from './BT1/contents/contents.component';
// import { SlibarComponent } from './BT1/slibar/slibar.component';
// import { FooterComponent } from './BT1/footer/footer.component';
// import { Bt1MainComponent } from './BT1/bt1-main/bt1-main.component';
import { HeaderComponent } from './BT2/header/header.component';
import { Bt2mainComponent } from './BT2/bt2main/bt2main.component';
import { CarouselComponent } from './BT2/carousel/carousel.component';
import { ContentComponent } from './BT2/content/content.component';
import { ItemCardComponent } from './BT2/item-card/item-card.component';
import { ListCardComponent } from './BT2/list-card/list-card.component';
import { Bt2FooterComponent } from './BT2/bt2-footer/bt2-footer.component';

@NgModule({
  // quản lý component import những component
  declarations: [
    AppComponent,
    DemoComponent,
    // HeaderComponent,
    // ContentsComponent,
    // SlibarComponent,
    // FooterComponent,
    // Bt1MainComponent,
    HeaderComponent,
    Bt2mainComponent,
    CarouselComponent,
    ContentComponent,
    ItemCardComponent,
    ListCardComponent,
    Bt2FooterComponent,
  ],
  // Quản lý những module khác
  imports: [
    BrowserModule,
    AppRoutingModule,
    Buoi1Module,
    BaiTap3Module
  ],
  // add service
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
