import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Icon, Message } from '../../../../src';
import './index.scss';

let iconlist = [
    'arrow-down','arrow-left','arrow-left-active','arrow-right','arrow-right-active','draw-circle','draw-circle-active','draw-rect','draw-rect-active','draw-polygon','draw-polygon-active',
    'help','setting','fullscreen','restorescreen','zoomin','zoomout','monitor','traffic-light','aim','clock','file','console','chat','offline','scan','api','crown','polyline','calendar'
];

export default class App extends Component {
    onCopied() {
        Message.tip('复制成功');
    }

    render() {
        return <div className="iconstyle">
            <p>点击图标可复制代码</p>
            {iconlist.map((icon,index)=>{
                const text = `<Icon type="${icon}" />`;
                return <CopyToClipboard text={text} onCopy={this.onCopied.bind(this)} key={index}>
                <div className="listStyle">
                    <Icon type={icon} className="icon"/>
                    <div className="icontext">{icon}</div>
                </div>
                </CopyToClipboard>
            })}
        </div>;
    }
}

