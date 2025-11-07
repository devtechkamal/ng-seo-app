import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  constructor(private title: Title, private meta: Meta) {}
  ngOnInit() {
    this.title.setTitle('About');
    this.meta.addTags([
      {
        name: 'description',
        content: 'About Page',
      },
    ]);
  }
}
