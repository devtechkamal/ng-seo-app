import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  standalone: true,
})
export class HomePage {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Home');
    this.meta.addTags([
      {
        name: 'description',
        content: 'This is an SEO-optimized Angular page using SSR and hydration.',
      },
      { name: 'keywords', content: 'Angular, SEO, SSR, Universal, Hydration' },
      { property: 'og:title', content: 'My Angular SEO Page' },
      { property: 'og:description', content: 'Rendered on the server for full SEO benefits!' },
    ]);
  }
}
