import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ProductsComponent } from './pages/products/products.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { FeaturedComponent } from './components/featured/featured.component';


//MODULES
import { FormsModule } from '@angular/forms';
// import {IvyCarouselModule} from 'angular-responsive-carousel';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    CarouselComponent,
    JumbotronComponent,
    FooterComponent,
    TestimonialsComponent,
    ProductsComponent,
    GalleryComponent,
    FeaturedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
