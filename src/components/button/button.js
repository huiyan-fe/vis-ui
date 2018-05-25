import React from 'react';
// import './style/index';

export default class Button extends React.Component {
    render() {
        const classname = this.props.className;
        return <div className={classname}>{this.props.children}</div>;
    }
}