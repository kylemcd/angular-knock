import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import Knock from '@knocklabs/client';
import { AuthService } from '@lib/services';
import { ThemeService } from '@lib/services/theme';
import { LayoutHorizontalComponent } from './lib/components/layouts/layout-horizontal/layout-horizontal.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule, LayoutHorizontalComponent],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    isAuthenticated$ = inject(AuthService).isAuthenticated$;

    private readonly _themeService = inject(ThemeService);
    private readonly _knock = new Knock('pk_test_D6PYFOeKCNpuqieHPGB5cLBAdgerTjA8YbdEg0R9LwA', {
        host: 'https://api.knock-dev.app',
    });

    constructor() {
        this._knock.authenticate('32b6e470-47e4-44cb-988e-a59ed015bfd6');
    }

    ngOnInit(): void {
        this._themeService.init();
    }
}
