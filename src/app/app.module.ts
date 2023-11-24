import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RepoEffects } from './state/effects/repo.effects'; 
import { repoReducer } from './state/reducers/repo.reducer';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidebarComponent,
    RepoCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatChipsModule,
    StoreModule.forRoot({ repo: repoReducer }),
    EffectsModule.forRoot([RepoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
