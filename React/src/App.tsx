import React from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.css';
import SpeedDialAction from 'devextreme-react/speed-dial-action';
import config from 'devextreme/core/config';
import notify from 'devextreme/ui/notify';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    config({
      floatingActionButtonConfig: {
        position: {
          of: '#app-container',
          my: 'right bottom',
          at: 'right bottom',
          offset: '-16 -16',
        },
      },
    });
  }

  render(): JSX.Element {
    return (
      <div id="app-container">
        <p>View&apos;s content</p>
        <SpeedDialAction
          hint="Edit"
          icon="edit"
          onClick={(): void => showNotification('Edit is clicked')}
        />
      </div>
    );
  }
}

function showNotification(message: string): void {
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

export default App;

