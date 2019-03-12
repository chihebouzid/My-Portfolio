import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { WebComponent } from "./pages/web/web.component";
import { VisualsComponent } from "./pages/visuals/visuals.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { VideoPopUpComponent } from "./pages/about-me/video-pop-up/video-pop-up.component";
import { PersonalityPopUpComponent } from './pages/about-me/personality-pop-up/personality-pop-up.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutMeComponent,
    WebComponent,
    VisualsComponent,
    ContactComponent,
    VideoPopUpComponent,
    PersonalityPopUpComponent
  ],
  entryComponents: [
    VideoPopUpComponent,
    PersonalityPopUpComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
