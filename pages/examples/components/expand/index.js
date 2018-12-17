import React, { Component } from 'react';
import { Expand } from '../../../../src';

export default class App extends Component {

    render() {

        return <div className="expand">
            <Expand title="💊不能🚫">
                <img alt="猫咪" src="//img.zcool.cn/community/0178e358d4e4fda801219c77716987.JPG@1280w_1l_2o_100sh.jpg" style={{width:'100%'}} />
            </Expand>
        </div>;
    }
}

