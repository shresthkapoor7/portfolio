import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-website';
  year = new Date().getFullYear();
  projects = [
    {
      title: 'Healthy Food Analyzer',
      description: 'An app to analyze the healthiness of food items using Gemini API.',
      link: 'https://github.com/shresthkapoor/healthy-food-analyzer'
    },
    {
      title: 'RAG for Obsidian',
      description: 'A project to integrate RAG into Obsidian using MongoDB and Qdrant.',
      link: 'https://github.com/shresthkapoor/rag-obsidian'
    }
  ];
}
