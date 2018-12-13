/**
 * @file Modal组件
 * @author hedongran
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Button, Icon} from '../../index';

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.onCancel = this.onCancel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClickMask = this.onClickMask.bind(this);
        this.bindKeyEvent = this.bindKeyEvent.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.bindKeyEvent);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.bindKeyEvent);
    }

    bindKeyEvent(e) {
        if (this.props.visible && e.keyCode == 27) {
            this.onCancel();
        }
    }

    /**
     * 点击取消的回调函数
     */
    onCancel() {
        this.props.onCancel && this.props.onCancel();
    }

    /**
     * 点击确定的回调函数
     */
    onSubmit() {
        this.props.onSubmit && this.props.onSubmit();
    }

    /**
     * 点击蒙层的触发事件
     */
    onClickMask(event) {
        const e = event.nativeEvent;
        const target = e.target;
        e.preventDefault();
        e.stopPropagation();
        if (this.props.maskClosable && target === this.mask) {
            this.onCancel();
        }
        return false;
    }

    render() {
        const {className, style, mini, title, visible, hideCancel, children, footer} = this.props;
        const showCancel = !hideCancel && !mini;
        const classname = classNames({
            'visui-modal': true,
            'mini': mini,
            'hidden': !visible,
            [className]: className
        });
        return (
            <div className={classname} style={style} onClick={this.onClickMask} ref={mask => this.mask = mask}>
                <div className="modal-container">
                    <div className="modal-header">
                        <span className="modal-header-text">{title}</span>
                        <Icon type="draw-circle" className="modal-close" onClick={this.onCancel} />
                    </div>
                    <div className="modal-content">
                        {children}
                    </div>
                    {footer !== null &&
                    <div className="modal-footer">
                        {footer ? footer : 
                        <div>
                            {showCancel && <Button type="default" onClick={this.onCancel}>取消</Button>}
                            <Button type="primary" size={mini ? 'large' : ''} onClick={this.onSubmit}>确定</Button>
                        </div>
                        }
                    </div>
                    }
                </div>
            </div>
        );
    }
}

Modal.defaultProps = {
    title: '',
    mini: false,
    visible: false,
    hideCancel: false,
    maskClosable: true,
    keyClosable: true
};

Modal.propTypes = {
    title: PropTypes.string,
    mini: PropTypes.bool,
    visible: PropTypes.bool,
    footer: PropTypes.any,
    hideCancel: PropTypes.bool,
    maskClosable: PropTypes.bool,
    keyClosable: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func
};

export default Modal;
