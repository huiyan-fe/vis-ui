/**
 * @file CheckboxList 单选下拉组件（下拉为checkbox多选框）
 * @author hedongran
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shallowequal from 'shallowequal';
import {Checkbox, Icon} from '../../index';
const CheckboxGroup = Checkbox.Group;

class CheckboxList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDown: false,
            indeterminate: this.getDefaultIndeterminate(props),
            checkAll: this.getDefaultCheckAll(props),
            checkTitle: this.getDefaultCheckTitle(props),
            checkedList: props.value || props.defaultValue || []
        };
        this.bodyClick = this.bodyClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onCheckAllChange = this.onCheckAllChange.bind(this);
        this.onCheckedListChange = this.onCheckedListChange.bind(this);
        this.onCheckedTitle = this.onCheckedTitle.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // 外部通过value属性使组件受控
        if ('value' in nextProps && !shallowequal(nextProps.value, this.props.value)) {
            let checkedList = nextProps.value;
            this.setState({
                checkedList: checkedList,
                indeterminate: !!checkedList.length && (checkedList.length < this.props.options.length),
                checkAll: checkedList.length === this.props.options.length,
                checkTitle: !!checkedList.length
            });
        }
    }

    /**
     * 获取初始状态标题外checkbox选中状态
     *
     * @param {Object} props react的props属性
     * @return {boolean} 选中状态
     */
    getDefaultCheckTitle(props) {
        if ('value' in props) {
            return Boolean(props.value.length);
        }
        return Boolean(props.defaultValue.length);
    }

    /**
     * 获取初始状态面板内全选Checkbox选中状态
     *
     * @param {Object} props react的props属性
     * @return {boolean} 选中状态
     */
    getDefaultCheckAll(props) {
        if ('value' in props) {
            return props.value.length === props.options.length;
        }
        return props.defaultValue.length === props.options.length;
    }

    /**
     * 获取初始状态面板内Indeterminate Checkbox选中状态
     *
     * @param {Object} props react的props属性
     * @return {boolean} 选中状态
     */
    getDefaultIndeterminate(props) {
        if ('value' in props) {
            return !!props.value.length && (props.value.length < props.options.length);
        }
        return !!props.defaultValue.length && (props.defaultValue.length < props.options.length);
    }

    componentDidMount() {
        window.addEventListener('click', this.bodyClick);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.bodyClick);
    }

    /**
     * 监听用户点击事件，当点击不在面板内时收起面板
     *
     * @param {Object} e 用户点击事件
     */
    bodyClick(e) {
        let dom = e.target;
        let flag = true;
        let showDown = this.state.showDown;
        while (dom) {
            if (dom === this.refs.titleContainer) {
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

    /**
     * 面板内Checkbox的点击回调事件
     *
     * @param {Array} checkedList 面板内Checkbox的选中值
     */
    onChange(checkedList) {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < this.props.options.length),
            checkAll: checkedList.length === this.props.options.length,
            checkTitle: !!checkedList.length
        }, this.onCheckedListChange);
    }

    /**
     * 面板内全选Checkbox的点击回调事件
     *
     * @param {boolen} checked 面板内全选Checkbox的选中状态
     */
    onCheckAllChange(checked) {
        this.setState({
            checkedList: checked ? this.props.options.map(item => {
                return item.value;
            }) : [],
            indeterminate: false,
            checkAll: checked,
            checkTitle: checked
        }, this.onCheckedListChange);
    }

    /**
     * 组件给父组件的回调事件
     */
    onCheckedListChange() {
        this.props.onChange && this.props.onChange(this.state.checkedList);
    }

    /**
     * 面板外Checkbox的点击回调事件
     *
     * @param {boolen} checked 面板外Checkbox的选中状态
     */
    onCheckedTitle(checked) {
        const {options, defaultCheckedKey} = this.props;
        if (checked && this.state.checkedList.length === 0) {
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
        const {checkTitle, checkAll, indeterminate, checkedList, showDown} = this.state;
        const {className, style, title, options, disabled} = this.props;
        const classname = classNames({
            'visui-checkboxlist': true,
            [className]: className
        });
        return (
            <div className={classname} style={style}>
                <div ref="titleContainer"
                    className="visui-checkboxlist-title-container"
                    onClick={e => {
                        this.setState({
                            showDown: !showDown
                        });
                    }}
                >
                    <Checkbox checked={checkTitle} onChange={this.onCheckedTitle} disabled={disabled}/>
                    <span className="visui-checkboxlist-title-text">
                        {title}
                        {checkedList.length > 0
                        && <span className="visui-checkboxlist-num">({checkedList.length})</span>}
                    </span><Icon type="arrow-down" />
                </div>
                {showDown && <div className="visui-checkboxlist-down-container" onClick={e => {
                    e.nativeEvent.stopImmediatePropagation();
                }}>
                    <div key={-1} className="visui-checkboxlist-down-line">
                        <Checkbox onChange={this.onCheckAllChange}
                            indeterminate={indeterminate}
                            checked={checkAll}
                            disabled={disabled}>
                            全选
                        </Checkbox>
                    </div>
                    <CheckboxGroup onChange={this.onChange} value={checkedList} disabled={disabled}>
                        {options && options.map((checkbox, index) => {
                            return <Checkbox value={checkbox.value} key={index}>{checkbox.label}</Checkbox>;
                        })}
                    </CheckboxGroup>
                </div>}
            </div>
        );
    }
}

CheckboxList.defaultProps = {
    title: '',
    options: [],
    defaultCheckedKey: 0,
    defaultValue: []
};

CheckboxList.propTypes = {
    title: PropTypes.string.isRequired,
    defaultCheckedKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.array,
    options: PropTypes.array,
    onChange: PropTypes.func
};

export default CheckboxList;
