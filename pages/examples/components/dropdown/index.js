import React, { Component } from 'react';
import { Dropdown } from '../../../../src';

export default class App extends Component {
    render() {
        const options = {
            title: '公共设施',
            options: [
                { label: '金融设施', value: 1 },
                { label: '金融设施1', value: 2 },
                { label: '金融设施2', value: 3 },
                { label: '金融设施3', value: 4 },
                { label: '金融设施4', value: 5 }
            ],
            onChange: (e)=>{console.log(e)}
        };
        
        return <div>
            <Dropdown {...options}/>
        </div>
    }
}

