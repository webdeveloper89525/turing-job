import { Routes } from "@angular/router";
import { LayoutComponent } from "../layout/layout.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./home/home.module').then(x => x.HomeModule) },
    ]
  }

  // Not found
  // { path: "**", redirectTo: "home" }
];
