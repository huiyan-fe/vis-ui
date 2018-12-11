import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import Modal from '../modal';

class Expand extends React.Component {

    constructor(args) {
        super(args);
        this.state = {
            showModal: false
        }
    }

    componentDidMount() {

    }

    getContent() {
        const {className, style} = this.props;
        const classname = classNames('visui-expand', className);
        
        return <div className={classname} style={style}>
            {this.props.children}
            {!this.state.showModal && 
            <Icon type="fullscreen" className="expand-open" onClick={() => {this.setState({showModal: true});}} />
            }
        </div>;
    }

    render() {
        const {showModal} = this.state;
        const {title, modalClassName, modalStyle} = this.props;
        const modalClassname = classNames('visui-expand-modal', modalClassName);
        const content = this.getContent();

        return (
            <div className="visui-expand-wrapper">
                {content}
                <Modal
                    className={modalClassname}
                    style={modalStyle}
                    title={title}
                    visible={showModal}
                    footer={null}
                    onCancel={() => {this.setState({showModal: false});}}
                >
                    {content}
                </ Modal>
            </div >
        );
    }
}

Expand.defaultProps = {
    title: '展开内容'
};

Expand.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    modalClassName: PropTypes.string,
    modalStyle: PropTypes.object
};

export default Expand;