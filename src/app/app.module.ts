import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "../modules/AppRoutingModule";
import { HelloRoute } from "../components/HelloRoute";
import { pageTitle } from "../components/pageTitle/pageTitle.component";
import { formSearch } from "../components/formSearch/formSearch.component";
import { thumbMovie } from "../components/thumbMovie/thumbMovie.component";
import { movieDetail } from "../components/movieDetail/movieDetail.component";
import { homePage } from "../components/homePage/homePage.component";

@NgModule({
  declarations: [
    AppComponent,
    HelloRoute,
    pageTitle,
    formSearch,
    thumbMovie,
    movieDetail,
    homePage
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
