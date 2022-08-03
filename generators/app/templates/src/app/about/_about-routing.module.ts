import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

<% if (!props.lazy) { -%>
import { Shell } from '@app/shell/shell.service';
<% } -%>
import { AboutComponent } from './about.component';

const routes: Routes = [
<% if (props.lazy) { -%>
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component: AboutComponent, data: { title: marker('About') } }
<% } else { -%>
  Shell.childRoutes([
    { path: 'about', component: AboutComponent, data: { title: marker('About') } }<% if (props.lazy) { %> as Route <% } %>
  ])
<% } -%>
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule { }
