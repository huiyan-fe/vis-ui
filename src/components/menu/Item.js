import React from 'react';
import classNames from "classnames";

export default class MenuItem extends React.Component {

    constructor(props: Object) {
        super(props);

        this.state = {
        }
    }

    render() {
        const classname = classNames('visui-menu-item', this.props.className);
        return <div className={classname}>
            {this.props.children}
        </div>;
    }

}