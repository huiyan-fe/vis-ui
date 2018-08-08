import React, { Component } from 'react';
import { List } from '../../../../src';

export default class App extends Component {

    render() {
        let data = [
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

        return <div className="liststyle">
            <List data={data} 
                loadMore={true}
                loadSize={10}
                formatValue={(value) => value + '个'}
                formatExtra={(extra) => parseFloat(extra * 100).toFixed(1) + '%'}
                style={{display:'inline-block',marginRight:'10px'}}
            />
            <List data={data} 
                autoTitle={false}
                style={{display:'inline-block',marginRight:'10px',verticalAlign:'top'}}
            />
        </div>;
    }
}

