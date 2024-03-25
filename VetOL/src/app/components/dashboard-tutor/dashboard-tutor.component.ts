import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-tutor',
  templateUrl: './dashboard-tutor.component.html',
  imports:[FontAwesomeModule],
  styleUrl: './dashboard-tutor.component.scss'
})
export class DashboardTutorComponent {

  faBars = faBars;
  faSquarePlus = faSquarePlus;
  faUserDoctor = faUserDoctor;
  faCat = faCat;
  faFileLines = faFileLines;
  faBriefcaseMedical = faBriefcaseMedical;
  faVideo = faVideo;
  faEnvelope = faEnvelope;


}
