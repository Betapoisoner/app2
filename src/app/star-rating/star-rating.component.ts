import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent implements OnInit {
  @Input() rating!: number;
  @Output() ratingChanged = new EventEmitter<number>();
  auxRating!: number;

  setRating() {
    this.ratingChanged.emit(this.auxRating);
    }

  restoreRating() {
    this.auxRating = this.rating;
  }
  ngOnInit() {
    this.restoreRating();
  }
}
