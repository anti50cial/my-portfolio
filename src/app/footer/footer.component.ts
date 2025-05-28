import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faTwitch,
  faWhatsapp,
  faDiscord,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  faFB = faFacebook;
  faTwitter = faTwitter;
  faIG = faInstagram;
  faGitHub = faGithub;
  faTwitch = faTwitch;
  faWA = faWhatsapp;
  faDiscord = faDiscord;
  faDribbble = faDribbble;
}
