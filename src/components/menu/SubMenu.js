import React from 'react';
import classNames from "classnames";

export default class SubMenu extends React.Component {

    constructor(props: Object) {
        super(props);

        this.state = {
        }
    }

    render() {
        const classname = classNames('visui-menu-submenu', this.props.className);
        return <div className={classname}>
            {this.props.title}
            <div className="subNav">{this.props.children}</div>
        </div>;
    }

}
