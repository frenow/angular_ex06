import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { IMovie } from "../../app/Movie";

@Component({
  selector: "thumb-movie",
  templateUrl: "./thumbMovie.component.html",
  styleUrls: ["./thumbMovie.component.css"]
})
export class thumbMovie implements OnInit {
  @Input("movieItem") movieItem: IMovie;

  ngOnInit() {
    console.log("thumbMovie", this.movieItem);
  }
}
