import { Component, OnInit } from "@angular/core";
import { ReviewBusca } from "./reviewBusca";
import { ReviewService } from "src/app/review.service";
import { Review } from "../review";


@Component({
    selector: 'app-review-lista',
    templateUrl: './review-lista.component.html',
    styleUrls: ['./review-lista.component.css']
})
export class ReviewListaComponent implements OnInit {

    title: string;
    lista: Review[] = [];
    message: string;

    constructor(
        private reviewService: ReviewService
    ) { }

    ngOnInit(): void {
        this.reviewService.buscar()
            .subscribe(response => {
                this.lista = response;
                if (this.lista.length <= 0) {
                    this.message = "Nenhum Registro encontrado";
                } else {
                    this.message = null;
                }
            });
    }

    consultar() { }


}