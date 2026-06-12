import { Component, ChangeDetectionStrategy } from '@angular/core';
import notify from 'devextreme/ui/notify';
import config from 'devextreme/core/config';

config({
  floatingActionButtonConfig: {
    position: {
      my: 'right bottom',
      at: 'right bottom',
      of: '#app-container',
      offset: '-16 -16',
    },
  },
});

import { DxSpeedDialActionModule } from 'devextreme-angular/ui/speed-dial-action';

@Component({
    selector: 'app-root',
    imports: [DxSpeedDialActionModule],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showNotification(message: string): void {
    notify(
      {
        message,
        position: {
          my: 'left bottom',
          at: 'left bottom',
          of: '#app-container',
          offset: '16 -16',
        },
        minWidth: null,
        width: 320 * 0.7,
      },
      'info',
      1000,
    );
  }
}
