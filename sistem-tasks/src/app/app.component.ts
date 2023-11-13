import { Component } from '@angular/core';
import { FooterComponent } from './components/layout-base/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout-base/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [],
    standalone: true,
    imports: [HeaderComponent, RouterOutlet, FooterComponent]
})
export class AppComponent {
}
