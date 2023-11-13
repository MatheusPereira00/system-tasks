import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `<nav class="navbar bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand m-auto" style="color: white" href="#"
        >Developer by Matheus Pereira</a
      >
    </div>
  </nav>`,
    styleUrls: ['./footer.component.scss'],
    standalone: true,
})
export class FooterComponent {}
