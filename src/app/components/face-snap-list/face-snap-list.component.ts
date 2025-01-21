import { Component, inject, OnInit } from '@angular/core';
import { FaceSnap } from '../../models/face-snap';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { FaceSnapsService } from '../../services/face-snaps.service';
import { fromFetch } from 'rxjs/fetch';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  private faceSnapsService = inject(FaceSnapsService);
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
  }
  faceSnaps! : FaceSnap[];
}
