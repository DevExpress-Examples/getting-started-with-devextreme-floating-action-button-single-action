import { useCallback } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import SpeedDialAction from 'devextreme-react/speed-dial-action';
import notify from 'devextreme/ui/notify';
import type { SpeedDialActionTypes } from 'devextreme-react/speed-dial-action';
import type { SpeedDialActionOptions } from './types';

function App(): JSX.Element {
  const speedDialActionOptions: SpeedDialActionOptions = {
    label: 'Add',
    icon: 'add',
    index: 1,
  };

  const handleClick = useCallback((e: SpeedDialActionTypes.ClickEvent) => {
    const label = e.component.option('label');
    notify(`SpeedDialAction ${label} was clicked!`, 'success', 2000);
  }, []);

  return (
    <div id="app-container">
      <SpeedDialAction
        label={speedDialActionOptions.label}
        icon={speedDialActionOptions.icon}
        index={speedDialActionOptions.index}
        onClick={handleClick}
      />
    </div>
  );
}

export default App;
