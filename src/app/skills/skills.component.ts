import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import {
  faPython,
  faJs,
  faAngular,
  faCss3,
  faCss3Alt,
  faHtml5,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  imports: [FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  faPython = faPython;
  faTypeScript = faCode;
  faJS = faJs;
  faSQL = faDatabase;
  faAngular = faAngular;
  faTailwind = faCss3;
  faCSS = faCss3Alt;
  faHTML = faHtml5;
}
