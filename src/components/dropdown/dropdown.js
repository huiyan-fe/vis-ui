import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shallowequal from 'shallowequal';
import { Checkbox, Icon } from '../../index';
const CheckboxGroup = Checkbox.Group;

class Dropdown extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            showDown: false,
            indeterminate: false,
            checkAll: false,
            checkedList: this.props.value || []
        }
        this.bodyClick = this.bodyClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onCheckAllChange = this.onCheckAllChange.bind(this);
        this.onCheckedListChange = this.onCheckedListChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // 外部通过value属性使组件受控
        if ('value' in nextProps && !shallowequal(nextProps.value, this.props.value)) {
            let checkedList = nextProps.value;
            this.setState({
                checkedList: checkedList,
                indeterminate: !!checkedList.length && (checkedList.length < this.props.options.length),
                checkAll: checkedList.length === this.props.options.length
            });
        }
    }

    componentDidMount() {
        window.addEventListener('click', this.bodyClick);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.bodyClick);
    }

    bodyClick(e) {
        let dom = e.target;
        let flag = true;
        let showDown = this.state.showDown;
        while (dom) {
            if (dom == this.refs.titleContainer) {
                flag = false;
                break;
            }
            dom = dom.parentNode;
        }
        if (flag && showDown) {
            this.setState({
                showDown: false
            });
        }
    }

    onChange(checkedList) {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < this.props.options.length),
            checkAll: checkedList.length === this.props.options.length
        }, this.onCheckedListChange);
    }

    onCheckAllChange(checked) {
        this.setState({
            checkedList: checked ? this.props.options.map((item) => {
                return item.value;
            }) : [],
            indeterminate: false,
            checkAll: checked,
        }, this.onCheckedListChange);
    }

    onCheckedListChange() {
        this.props.onChange && this.props.onChange(this.state.checkedList);
    }

    render() {
        const { checkAll, indeterminate, checkedList, showDown } = this.state;
        const { className, style, title, options } = this.props;
        const classname = classNames({
            'visui-dropdown': true,
            [className]: className
        });
        return (
            <div className={classname} style={style}>
                <div ref="titleContainer" 
                    className="visui-dropdown-title-container" 
                    onClick={(e) => {
                        this.setState({
                            showDown: !showDown
                        });
                    }}
                >
                    <span className="visui-dropdown-title-text">
                        {title}
                        {checkedList.length > 0 ? 
                        <span className="visui-dropdown-num">({checkedList.length})</span>
                        : null}
                    </span><Icon type="arrow-down" />
                </div>
                {showDown && <div className="visui-dropdown-down-container" onClick={(e) => {
                    e.nativeEvent.stopImmediatePropagation();
                }}>
                    <div key={-1} className="visui-dropdown-down-line">
                        <Checkbox onChange={this.onCheckAllChange} indeterminate={indeterminate} checked={checkAll}>全选</Checkbox>
                    </div>
                    <CheckboxGroup onChange={this.onChange} value={checkedList}>
                        {options && options.map((checkbox, index)=>{
                            return <Checkbox value={checkbox.value} key={index}>{checkbox.label}</Checkbox>
                        })}
                    </CheckboxGroup>
                </div>}
            </div>
        )
    }
}

Dropdown.defaultProps = {
    title: '',
    options: []
};
Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.array,
    onChange: PropTypes.func
};

export default Dropdown;