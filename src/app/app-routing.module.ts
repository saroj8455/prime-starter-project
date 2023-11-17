import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CommonFormComponent } from './components/common-form/common-form.component';
import { GridComponent } from './components/grid/grid.component';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'common-form', component: CommonFormComponent },
  { path: 'grid', component: GridComponent },
  { path: 'editor', component: CodeEditorComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
