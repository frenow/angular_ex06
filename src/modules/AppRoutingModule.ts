import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { HelloRoute } from "../components/HelloRoute";
import { AppComponent } from "../app/app.component";
import { movieDetail } from "../components/movieDetail/movieDetail.component";
import { homePage } from "../components/homePage/homePage.component";
const routes: Routes = [
  { path: "", component: homePage },
  { path: "movie-detail/:id", component: movieDetail }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
