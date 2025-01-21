import { Component, inject, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../../models/face-snap';
import { FaceSnapsService } from '../../services/face-snaps.service';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  imports: [NgClass, NgStyle, TitleCasePipe, DatePipe],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{
  ngOnInit(): void {
    this.messageSnap = "Oh Snap";
    this.userHasSanped = false;
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.findsnapFaceByID(faceSnapId);
  }
  private faceSnapService = inject(FaceSnapsService);
  private route = inject(ActivatedRoute);
  onSnap() : void{
    if(this.userHasSanped){
      this.faceSnapService.snapFaceByID(this.faceSnap.id, "unsnap");
      this.messageSnap = "Oh Snap!";
      this.userHasSanped = false;
    }else{
      this.faceSnapService.snapFaceByID(this.faceSnap.id, "unsnap");
      this.messageSnap = "Opps, un Snap!"
      this.userHasSanped = true;
    }
  }
  userHasSanped! :  boolean;
  messageSnap! : string;
  faceSnap! : FaceSnap;
}
