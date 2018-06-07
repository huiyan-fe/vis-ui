import React from 'react';
import './style/index';

export default class Menu extends React.Component {

    constructor(props: Object) {
        super(props);

        this.state = {
        }
    }

    render() {
        return <div className="visui-menu">
            {this.props.children}
        </div>;
    }

}
