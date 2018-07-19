import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Checkbox, Icon } from '../../index';
const CheckboxGroup = Checkbox.Group;

class CheckboxList extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            showDown: false,
            indeterminate: this.getDefaultIndeterminate(this.props),
            checkAll: this.getDefaultCheckAll(this.props),
            checkTitle: Boolean(this.props.defaultCheckedValue.length),
            checkedList: this.props.defaultCheckedValue || []
        }
        this.bodyClick = this.bodyClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onCheckAllChange = this.onCheckAllChange.bind(this);
        this.onCheckedListChange = this.onCheckedListChange.bind(this);
        this.onCheckedTitle = this.onCheckedTitle.bind(this);
    }

    componentWillReceiveProps(nextProps) {
    }

    componentDidMount() {
        window.addEventListener('click', this.bodyClick);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.bodyClick);
    }

    getDefaultCheckAll(props) {
        return props.defaultCheckedValue.length === props.options.length;
    }

    getDefaultIndeterminate(props) {
        return !!props.defaultCheckedValue.length && (props.defaultCheckedValue.length < props.options.length);
    }

    bodyClick(e) {
        let dom = e.target;
        let flag = true;
        let showDown = this.state.showDown;
        while (dom) {
            if (dom == this.refs.titleContainer) {
                flag = false;
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
            checkAll: checkedList.length === this.props.options.length,
            checkTitle: !!checkedList.length,
        }, this.onCheckedListChange);
    }

    onCheckAllChange(checked) {
        this.setState({
            checkedList: checked ? this.props.options.map((item) => {
                return item.value;
            }) : [],
            indeterminate: false,
            checkAll: checked,
            checkTitle: checked
        }, this.onCheckedListChange);
    }

    onCheckedListChange() {
        this.props.onChange && this.props.onChange(this.state.checkedList);
    }

    onCheckedTitle(checked) {
        const {options, defaultCheckedKey} = this.props;
        if (checked && this.state.checkedList.length == 0) {
            let checkedList = options[defaultCheckedKey] && [options[defaultCheckedKey].value];
            this.setState({
                checkTitle: checked,
                indeterminate: true,
                checkedList: checkedList || []
            }, this.onCheckedListChange);
        } else if (!checked) {
            this.setState({
                checkTitle: checked,
                indeterminate: false,
                checkAll: false,
                checkedList: []
            }, this.onCheckedListChange);
        }
    }

    render() {
        const { checkTitle, checkAll, indeterminate, checkedList, showDown } = this.state;
        const { className, style, title, options } = this.props;
        const classname = classNames({
            'visui-checkboxlist': true,
            [className]: className
        });
        return (
            <div className={classname} style={style}>
                <div ref="titleContainer" 
                    className="visui-checkboxlist-title-container" 
                    onClick={(e) => {
                        this.setState({
                            showDown: !showDown
                        });
                    }}
                >
                    <Checkbox checked={checkTitle} onChange={this.onCheckedTitle} />
                    <span className="visui-checkboxlist-title-text">
                        {title} 
                        {checkedList.length > 0 ? 
                        <span className="visui-checkboxlist-num">{'(' + checkedList.length + ')'}</span>
                        : null}
                    </span> <Icon type="down" />
                </div>
                {showDown && <div className="visui-checkboxlist-down-container" onClick={(e) => {
                    e.nativeEvent.stopImmediatePropagation();
                }}>
                    <div key={-1} className="visui-checkboxlist-down-line">
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

CheckboxList.defaultProps = {
    title: '',
    options: [],
    defaultCheckedKey: 0,
    defaultCheckedValue: [],
};
CheckboxList.propTypes = {
    title: PropTypes.string.isRequired,
    defaultCheckedKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultCheckedValue: PropTypes.array,
    options: PropTypes.array,
    onChange: PropTypes.func
};

export default CheckboxList;
