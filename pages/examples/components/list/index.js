import React, { Component } from 'react';
import { List } from '../../../../src';

export default class App extends Component {

    render() {
        let data1 = [
            {name: 'aaa', value: 123, extra: 0.23},
            {name: 'aaa', value: 123, extra: 0.23},
            {name: 'aaa', value: 123, extra: 0.23},
            {name: 'aaa', value: 123, extra: 0.23},
            {name: 'aaa', value: 123, extra: 0.23},
            {name: 'aaa', value: 123, extra: 0.23},
            {name: 'aaa', value: 123, extra: 0.23},
            {name: 'aaa', value: 123, extra: 0.23},
            {name: 'aaa', value: 123, extra: 0.23},
            {name: 'aaa', value: 123, extra: 0.23},
        ];
        let data2 = [
            {name: 'aaa', value: 123},
            {name: 'aaa', value: 123},
            {name: 'aaa', value: 123},
            {name: 'aaa', value: 123},
            {name: 'aaa', value: 123},
            {name: 'aaa', value: 123},
            {name: 'aaa', value: 123},
            {name: 'aaa', value: 123},
            {name: 'aaa', value: 123},
            {name: 'aaa', value: 123},
            {name: 'aaa', value: 123},
        ];

        return <div className="liststyle">
            <List data={data1} 
                loadMore={true}
                loadSize={10}
                formatValue={(value) => value + '个'}
                formatExtra={(extra) => parseFloat(extra * 100).toFixed(1) + '%'}
                style={{display:'inline-block',marginRight:'20px'}}
            />
            <List data={data2} 
                autoTitle={false}
                style={{display:'inline-block',verticalAlign:'top'}}
            />
        </div>;
    }
}

