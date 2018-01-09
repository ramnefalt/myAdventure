// the usual barebones bootstrapping, nothing added or changed
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app';
import { SceneComponent } from './scene';
import { StateHandler }   from './services/stateHandler';
import { myAdventure } from './constants/data';

@NgModule({
    imports: [ 
        BrowserModule
    ],
    declarations: [ 
        AppComponent, 
        SceneComponent 
    ],
    bootstrap: [ 
        AppComponent 
    ],
    providers: [ //DI
        StateHandler
    ]
})
export class AppModule {}
