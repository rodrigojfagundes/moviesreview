import { SafeResourceUrl } from '@angular/platform-browser';

export class Movie {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    urlSafe: SafeResourceUrl;
}