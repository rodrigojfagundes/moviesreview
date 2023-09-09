import { Component, OnInit } from "@angular/core";
import { ReviewBusca } from "./reviewBusca";
import { ReviewService } from "src/app/review.service";
import { Review } from "../review";


@Component({
    selector: 'app-review-list',
    templateUrl: './review-list.component.html',
    styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

    title: string;
    list: Review[] = [];
    message: string;

    constructor(
        private reviewService: ReviewService
    ) { }

    ngOnInit(): void {
        this.reviewService.getReviews()
            .subscribe(response => {
                this.list = response;
                if (this.list.length <= 0) {
                    this.message = "Nenhum Registro encontrado";
                } else {
                    this.message = null;
                }
            });
    }

    consultar() { }


}