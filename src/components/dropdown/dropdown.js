import React from 'react';
import PropTypes from 'prop-types';
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
        this.onChange = this.onChange.bind(this);
        this.onCheckAllChange = this.onCheckAllChange.bind(this);
        this.onCheckedListChange = this.onCheckedListChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value && JSON.stringify(nextProps.value) !== JSON.stringify(this.state.value)) {
            let checkedList = nextProps.value;
            this.setState({
                checkedList: checkedList,
                indeterminate: !!checkedList.length && (checkedList.length < this.props.options.length),
                checkAll: checkedList.length === this.props.options.length
            });
        }
    }

    componentDidMount() {
        window.addEventListener('click', (e) => {
            let dom = e.target;
            let flag = true;
            while (dom) {
                if (dom == this.refs.titleContainer) {
                    flag = false;
                }
                dom = dom.parentNode;
            }
            if (flag) {
                this.setState({
                    showDown: false
                });
            }
        });
    }

    onChange(checkedList) {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < this.props.options.length),
            checkAll: checkedList.length === this.props.options.length
        }, this.onCheckedListChange);
    }

    onCheckAllChange(e) {
        this.setState({
            checkedList: e.target.checked ? this.props.options.map((item) => {
                return item.value;
            }) : [],
            indeterminate: false,
            checkAll: e.target.checked,
        }, this.onCheckedListChange);
    }

    onCheckedListChange() {
        this.props.onChange && this.props.onChange(this.state.checkedList);
    }

    render() {

        return (
            <div className="huiyan-dropdown" style={this.props.style}>
                <div ref="titleContainer" className="title-container" onClick={(e) => {
                    this.setState({
                        showDown: !this.state.showDown
                    });
                }}>
                    <span className="title-text">{this.props.title}{this.state.checkedList.length > 0 ? '(' + this.state.checkedList.length + ')' : ''}</span> <Icon type="down" />
                </div>
                {this.state.showDown && <div className="down-container" onClick={(e) => {
                    e.nativeEvent.stopImmediatePropagation();
                }}>
                    <div key={-1} className="down-line">
                        <Checkbox onChange={this.onCheckAllChange} indeterminate={this.state.indeterminate} checked={this.state.checkAll}>全选</Checkbox>
                    </div>
                    <CheckboxGroup options={this.props.options} onChange={this.onChange} value={this.state.checkedList}/>
                </div>}
            </div>
        )
    }
}

Dropdown.defaultProps = {
    title: '公共设施',
    options: [
        { label: '金融设施', value: 1 },
        { label: '金融设施1', value: 2 },
        { label: '金融设施2', value: 3 },
        { label: '金融设施3', value: 4 },
        { label: '金融设施4', value: 5 }
    ]
};
Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.array,
    onChange: PropTypes.func
};

export default Dropdown;