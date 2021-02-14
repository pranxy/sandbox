import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-css',
    templateUrl: './css.component.html',
    styleUrls: ['./css.component.scss']
})
export class CssComponent implements OnInit {
    links = [
        {
            path: 'button',
            title: 'Button'
        },
        {
            path: 'text',
            title: 'Text'
        }
    ]
    constructor() {}

    ngOnInit() {}
}
