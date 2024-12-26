import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-website';
  year = new Date().getFullYear();
  currentTab = 'socials'; // Default tab

  socials = [
    { name: 'Twitter', link: 'https://twitter.com/yourhandle', icon: 'assets/twitter.png' },
    { name: 'GitHub', link: 'https://github.com/yourhandle', icon: 'assets/github.png' },
    { name: 'LinkedIn', link: 'https://linkedin.com/in/yourhandle', icon: 'assets/linkedin.png' },
  ];

  projects = [
    { title: 'Project 1', description: 'Description of project 1', link: 'https://github.com/project1' },
    { title: 'Project 2', description: 'Description of project 2', link: 'https://github.com/project2' },
  ];

  articles = [
    { title: 'Article 1', description: 'Description of article 1', link: 'https://medium.com/article1' },
    { title: 'Article 2', description: 'Description of article 2', link: 'https://medium.com/article2' },
  ];
}
