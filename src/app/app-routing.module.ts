import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { WebComponent } from "./pages/web/web.component";
import { VisualsComponent } from "./pages/visuals/visuals.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/Home", pathMatch: "full" },
  { path: "Home", component: HomeComponent, data: { animation: "HomePage" } },
  {
    path: "About",
    component: AboutMeComponent,
    data: { animation: "AboutPage" }
  },

  {
    path: "Contact",
    component: ContactComponent,
    data: { animation: "contact" }
  },
  { path: "Resume", component: WebComponent, data: { animation: "web" } },
  {
    path: "Portfolio",
    component: VisualsComponent,
    data: { animation: "visuaels" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
