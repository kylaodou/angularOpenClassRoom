import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      "img/mylittleponey.png",
      "My little poney saison 1",
      "Mon meilleur ami depuis toujours !",
      new Date(),
      22
    ),
    new FaceSnap(
      "img/winx.png",
      "Les avantures des Winx saison 7",
      "Découvrez la vrai magie des Winx !",
      new Date(),
      200
    ),
    new FaceSnap(
      "img/totalisspies.png",
      "Les Totally Spies saison 2",
      "Découvrez le monde merveilleux des Spies !",
      new Date(),
      156
    ),
  ];
  constructor() {
    this.faceSnaps[0].setLocalisation("Les poneys à Echestria");
  }
  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }
  snapFaceByID(snapID : string, snapType : SnapType) : void{
    const faceSnap : FaceSnap|undefined = this.findsnapFaceByID(snapID);
    faceSnap.snap(snapType);
  }
  findsnapFaceByID(snapID : string) : FaceSnap{
    const foundFaceSnap : FaceSnap|undefined = this.faceSnaps.find(faceSnap => faceSnap.id == snapID);
    if(!foundFaceSnap){
      throw new Error("Dessin animé introuvable");
    }
    return foundFaceSnap;
  }
}
