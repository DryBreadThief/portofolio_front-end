import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})

export class Contact {
  email = 'your-email@example.com';
  github = 'https://github.com/your-username';
  linkedin = 'https://linkedin.com/in/your-username';
}