import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { LeadingComponent } from './components/leading/leading.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';

export const routes: Routes = [
    {
        path : "faceSnapList",
        component : FaceSnapListComponent
    },
    {
        path : "faceSnap/:id",
        component : SingleFaceSnapComponent
    },
    {
        path : "",
        component : LeadingComponent
    }

];
