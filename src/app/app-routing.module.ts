import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MemoirComponent } from './ui/memoir/memoir.component';
import { MemoriesComponent } from './ui/memories/memories.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: MemoriesComponent,
      },
      {
        path: 'memoir/:date',
        component: MemoirComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
