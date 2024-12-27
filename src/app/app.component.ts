import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FlexLayoutModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-website';
  year = new Date().getFullYear();
  currentTab: string = 'projects';
  hover: boolean = false;

  socials = [
    {
      name: "Twitter",
      bio: "Not your average 23 year old who owns a business *sad noises* | Not a shit poster, just a shit replier | NYU",
      link: "https://x.com/shresthkapoor7",
      follow: "Follow",
      showFollow: true,
      followClickLink: "https://twitter.com/intent/follow?screen_name=shresthkapoor7",
      icon: "https://pbs.twimg.com/profile_images/1683364783033139200/q256m4uQ_400x400.jpg",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/shresth-kapoor-7skp/",
      bio: "Ex: Software Engineer at @TalentTitan | Familiar with Flutter, Angular, and Spring boot",
      follow: "Connect",
      showFollow: true,
      followClickLink: "https://www.linkedin.com/in/shresth-kapoor-7skp/",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrdlv1qle8ssb16zhv0dVmNpGUcLxqIlo-A&s",
    },
    {
      name: "GitHub",
      link: "https://github.com/shresthkapoor7",
      bio: "I kill bugs when I see them be it on a computer or real life",
      follow: "Follow",
      showFollow: true,
      followClick: "https://github.com/shresthkapoor7",
      icon: "https://cdn-icons-png.flaticon.com/256/25/25231.png",
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/shresthkapoor7/",
      bio: "Student | Flutter App Developer",
      follow: "Follow",
      showFollow: true,
      followClick: "https://leetcode.com/shresthkapoor7/",
      icon: "https://avatars.githubusercontent.com/u/41718343?s=280&v=4g",
    },
    {
      name: "Hashnode",
      link: "https://shresthkapoor7.hashnode.dev/",
      bio: "If you don't know what you're doing, try throwing hash-maps at the question",
      follow: "Follow",
      showFollow: true,
      followClick: "https://hashnode.com/onboard?next=/@shresthkapoor7",
      icon: "https://img.icons8.com/?size=512&id=HnB8zGOh5xgd&format=png",
    }
  ];

  projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my work.",
      link: "https://github.com/shresthkapoor7/portfolio",
      image: "https://avatars.githubusercontent.com/u/73338689?s=400&u=64ff6a0a645d9b7d720739be1e7108eb6d053813&v=4"
    },
    // {
    //   title: "E-Commerce App",
    //   description: "An app for managing online stores.",
    //   link: "https://example.com",
    //   image: "https://avatars.githubusercontent.com/u/73338689?s=400&u=64ff6a0a645d9b7d720739be1e7108eb6d053813&v=4"
    // },
    // {
    //   title: "Weather App",
    //   description: "An app providing real-time weather updates.",
    //   link: "https://example.com",
    //   image: "https://via.placeholder.com/100"
    // },
    // {
    //   title: "E-Commerce App",
    //   description: "An app for managing online stores.",
    //   link: "https://example.com",
    //   image: "https://via.placeholder.com/100"
    // },
  ];

  articles = [
    { title: "DBMS Concepts", description: "As I am preparing for job interviews that involve database management systems (DBMS), I took notes on the key concepts that I felt were important and often asked in these interviews. I noticed that while there are many websites online that cover these concepts, I wanted to have a single page that summarized them all. With this in mind, I decided to create a blog post to review and summarize these concepts.", link: "https://shresthkapoor7.hashnode.dev/dbms-concepts" },
    { title: "Deploying Flutter", description: "Deploying your first flutter website on firebase", link: "https://shresthkapoor7.hashnode.dev/deploying-on-firebase" },
  ];

  connect() {
    alert('Contact functionality coming soon!');
  }

  openLink(url?: string): void {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.warn('URL is undefined');
    }
  }
}
