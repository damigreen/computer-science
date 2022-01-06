import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: "courses",
    template:   `<h2>{{"Title:" + title }}</h2>
                    <p>{{ getTitle() }}</p>
                    <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                    </li>
                    </ul>
                `
})

export class CoursesComponent {
    title = "Course Description";
    // courses = ["Course1","Course2","Course3","Course4"]
    courses;
    constructor() {
        let service = new CoursesService();
        this.courses = service.getCourses()
    }

    getTitle() {
        return this.title.length;
    }
}
