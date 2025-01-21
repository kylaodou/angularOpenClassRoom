import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leading',
  imports: [],
  templateUrl: './leading.component.html',
  styleUrl: './leading.component.scss'
})
export class LeadingComponent {
  router = inject(Router);
  redirection(){
    this.router.navigateByUrl("faceSnapList");
  }
}
