import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Button, Icon} from '../../index';

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        this.onCancel = this.onCancel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
    }

    onCancel() {
        this.props.onCancel && this.props.onCancel();
    }

    onSubmit() {
        this.props.onSubmit && this.props.onSubmit();
    }

    render() {
        const { className, style, mini, title, visible, hideCancel, children } = this.props;
        const showCancel = !hideCancel && !mini;
        const classname = classNames({
            'visui-modal': true,
            'mini': mini,
            'hidden': !visible,
            [className]: className
        });

        return <div className={classname} style={style}>
            <div className="modal-container">
                <div className="modal-header">
                    <span className="modal-header-text">{title}</span>
                    <Icon type="draw-circle" className="modal-close" onClick={this.onCancel} />
                </div>
                <div className="modal-content">
                    {children}
                </div>
                <div className="modal-footer">
                    {showCancel && <Button type="default" onClick={this.onCancel}>取消</Button>}
                    <Button type="primary" onClick={this.onSubmit}>确定</Button>
                </div>
            </div>
        </div>
    }
}

Modal.defaultProps = {
    title: '',
    mini: false,
    visible: false,
    hideCancel: false
};

Modal.propTypes = {
    title: PropTypes.string,
    mini: PropTypes.bool,
    visible: PropTypes.bool,
    hideCancel: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func
};

export default Modal;