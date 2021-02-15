import React from 'react';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.material.blue.light.css';
// Custom icons by Ionicons
import 'ionicons/dist/css/ionicons.css';
import './App.css';

import SpeedDialAction from 'devextreme-react/speed-dial-action';
import config from 'devextreme/core/config';
import notify from 'devextreme/ui/notify';

class App extends React.Component {
    constructor(props) {
        super(props);
        config({
            floatingActionButtonConfig: {
                position: {
                    of: '#app-container',
                    my: 'right bottom',
                    at: 'right bottom',
                    offset: '-16 -16'
                }
            }
        });
    }

    render() {
        return (
            <div id="app-container">
                <p>View's content</p>
                <SpeedDialAction
                    hint="Edit"
                    icon="icon ion-md-create"
                    onClick={() => showNotification('Edit is clicked')}
                />
            </div>
        );
    }
}

function showNotification(message) {
    notify({
        message: message,
        position: {
            my: 'left bottom',
            at: 'left bottom',
            of: '#app-container',
            offset: '16 -16'
        },
        minWidth: null,
        width: 320 * 0.7
    }, 'info', 1000);
}

export default App;