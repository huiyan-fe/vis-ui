/**
 * @file CheckboxList 单选下拉组件（下拉为radio单选框）
 * @author hedongran
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Checkbox, Radio, Icon} from '../../index';
const RadioGroup = Radio.Group;

class CheckboxRadioList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDown: false,
            checkTitle: this.getDefaultCheckTitle(props),
            checkedVal: this.getDefaultCheckVal(props)
        };
        this.bodyClick = this.bodyClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onCheckedValChange = this.onCheckedValChange.bind(this);
        this.onCheckedTitle = this.onCheckedTitle.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // 外部通过value属性使组件受控
        if ('value' in nextProps && nextProps.value !== this.props.value) {
            let checkedVal = nextProps.value;
            this.setState({
                checkedVal,
                checkTitle: !!checkedVal
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
            return Boolean(props.value);
        }
        return Boolean(props.defaultValue);
    }

    /**
     * 获取初始状态面板内RadioGroup的值
     *
     * @param {Object} props react的props属性
     * @return {string | number} 面板内RadioGroup的值
     */
    getDefaultCheckVal(props) {
        if ('value' in props) {
            return props.value;
        }
        return props.defaultValue || undefined;
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
     * 面板内RadioGroup的点击回调事件
     *
     * @param {string | number} checkedVal 面板内RadioGroup的选中值
     */
    onChange(checkedVal) {
        this.setState({
            checkedVal,
            checkTitle: !!checkedVal
        }, this.onCheckedValChange);
    }

    /**
     * 组件给父组件的回调事件
     */
    onCheckedValChange() {
        this.props.onChange && this.props.onChange(this.state.checkedVal);
    }

    /**
     * 面板外Checkbox的点击回调事件
     *
     * @param {boolen} checked 面板外Checkbox的选中状态
     */
    onCheckedTitle(checked) {
        const {options, defaultCheckedKey} = this.props;
        if (checked && this.state.checkedVal === undefined) {
            let checkedVal = options[defaultCheckedKey] && options[defaultCheckedKey].value;
            this.setState({
                checkTitle: checked,
                checkedVal: checkedVal || undefined
            }, this.onCheckedValChange);
        } else if (!checked) {
            this.setState({
                checkTitle: checked,
                checkedVal: undefined
            }, this.onCheckedValChange);
        }
    }

    render() {
        const {checkTitle, checkedVal, showDown} = this.state;
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
                    </span><Icon type="arrow-down" />
                </div>
                {showDown && <div className="visui-checkboxlist-down-container" onClick={e => {
                    e.nativeEvent.stopImmediatePropagation();
                }}>
                    <RadioGroup onChange={this.onChange} value={checkedVal} disabled={disabled}>
                        {options && options.map((checkbox, index) => {
                            return <Radio value={checkbox.value} key={index}>{checkbox.label}</Radio>;
                        })}
                    </RadioGroup>
                </div>}
            </div>
        );
    }
}

CheckboxRadioList.defaultProps = {
    title: '',
    options: [],
    defaultCheckedKey: 0,
    defaultValue: undefined
};

CheckboxRadioList.propTypes = {
    title: PropTypes.string.isRequired,
    defaultCheckedKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
    options: PropTypes.array,
    onChange: PropTypes.func
};

export default CheckboxRadioList;
