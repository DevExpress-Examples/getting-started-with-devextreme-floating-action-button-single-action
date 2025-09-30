import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { DxSpeedDialActionTypes } from 'devextreme-angular/ui/speed-dial-action';
import { SpeedDialActionOptions } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  speedDialActionOptions: SpeedDialActionOptions = {
    label: 'Add',
    icon: 'add',
    index: 1,
  };

  handleClick(e: DxSpeedDialActionTypes.ClickEvent): void {
    notify('SpeedDialAction was clicked!', 'success', 2000);
  }
}
