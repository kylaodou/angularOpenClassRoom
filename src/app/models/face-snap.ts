import { SnapType } from "./snap-type.type";

export class FaceSnap {
    localisation? : string;
    id : string;
    constructor(
        public imageUrl: string, 
        public titre: string, 
        public description: string, 
        public createdAt: Date, 
        public snaps: number) {
            this.id = crypto.randomUUID().substring(0,8);
        }
        addSnap() : void{
            this.snaps++;
        }
        removeSnap(){
          this.snaps--;
        }
        snap(snapType : SnapType){
            if(snapType == "snap"){
                this.addSnap();
            }else if (snapType == "unsnap"){
                this.removeSnap();
            }
        }
    setLocalisation(localisation : string) : void{
        this.localisation = localisation;
    }
}