import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { IMovieDetail } from "../../app/MovieDetail";
import { MoviesService } from "../../services/MoviesService";

@Component({
  selector: "movie-detail",
  templateUrl: "./movieDetail.component.html",
  styleUrls: ["./movieDetail.component.css"]
})
export class movieDetail implements OnInit {
  id = "Movies App";
  moviedetail: IMovieDetail;

  constructor(private route: ActivatedRoute, private movies: MoviesService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    this.movies.getDetail(this.id).subscribe(data => {
      console.log(data);
      this.moviedetail = {
        id: data.id,
        name: data.title,
        date: data.release_date,
        cover: "http://image.tmdb.org/t/p/w185/" + data.poster_path,
        overview: data.overview,
        page: data.homepage
      };
    });
  }
}
