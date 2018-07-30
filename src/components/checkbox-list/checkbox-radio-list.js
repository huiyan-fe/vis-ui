import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Checkbox, Radio, Icon } from '../../index';
const RadioGroup = Radio.Group;

class CheckboxRadioList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDown: false,
            checkTitle: this.getDefaultCheckTitle(props),
            checkedVal: this.getDefaultCheckVal(props)
        }
        this.bodyClick = this.bodyClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onCheckedValChange = this.onCheckedValChange.bind(this);
        this.onCheckedTitle = this.onCheckedTitle.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // 外部通过value属性使组件受控
        if ('value' in nextProps && nextProps.value != this.props.value) {
            let checkedVal = nextProps.value;
            this.setState({
                checkedVal,
                checkTitle: !!checkedVal,
            });
        }
    }

    getDefaultCheckTitle(props) {
        if ('value' in props) {
            return Boolean(props.value);
        }
        return Boolean(props.defaultValue);
    }

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

    onChange(checkedVal) {
        this.setState({
            checkedVal,
            checkTitle: !!checkedVal,
        }, this.onCheckedValChange);
    }

    onCheckedValChange() {
        this.props.onChange && this.props.onChange(this.state.checkedVal);
    }

    onCheckedTitle(checked) {
        const {options, defaultCheckedKey} = this.props;
        if (checked && this.state.checkedVal == undefined) {
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
        const { checkTitle, checkedVal, showDown } = this.state;
        const { className, style, title, options, disabled } = this.props;
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
                    <Checkbox checked={checkTitle} onChange={this.onCheckedTitle} disabled={disabled}/>
                    <span className="visui-checkboxlist-title-text">
                        {title} 
                    </span> <Icon type="down" />
                </div>
                {showDown && <div className="visui-checkboxlist-down-container" onClick={(e) => {
                    e.nativeEvent.stopImmediatePropagation();
                }}>
                    <RadioGroup onChange={this.onChange} value={checkedVal} disabled={disabled}>
                        {options && options.map((checkbox, index)=>{
                            return <Radio value={checkbox.value} key={index}>{checkbox.label}</Radio>
                        })}
                    </RadioGroup>
                </div>}
            </div>
        )
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