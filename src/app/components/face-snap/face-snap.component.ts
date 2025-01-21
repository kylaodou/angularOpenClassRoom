import { Component, inject, Input } from '@angular/core';
import { FaceSnap } from '../../models/face-snap';
import { TitleCasePipe, } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  imports: [TitleCasePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent  {

  private route = inject(Router);
  viewSingle() {
    this.route.navigateByUrl(`faceSnap/${this.faceSnap.id}`);
  }
  @Input() faceSnap! : FaceSnap;
}
