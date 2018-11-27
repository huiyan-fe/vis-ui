import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';

class List extends React.Component {

    constructor(args) {
        super(args);
        this.state = {
            hoverBlockId: null
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {

    }

    handleClick() {
        this.props.onLoadMore && this.props.onLoadMore();
    }

    clickItem(item) {
        this.props.onClick && this.props.onClick(item);
    }

    render() {
        const self = this;
        const { className, style, data, loadMore, loadSize, autoTitle, formatValue, formatExtra } = this.props;
        const notitle = data.length && !('title' in data[0]) && !autoTitle && ('extra' in data[0]);
        const noextra = data.length && !('extra' in data[0]) && (('title' in data[0]) || autoTitle);
        const neither = data.length && !('title' in data[0]) && !autoTitle && !('extra' in data[0]);

        const classname = classNames({
            'visui-list': true,
            [className]: className
        });
        const titleclassname = classNames({
            'title': true,
            'noextra': noextra
        });
        const nameclassname = classNames({
            'name': true,
            'notitle': notitle,
            'noextra': noextra,
            'neither': neither
        });
        const valueclassname = classNames({
            'value': true,
            'noextra': noextra,
            'neither': neither
        });
        const extraclassname = classNames({
            'extra': true
        });
        const loadmoreclassname = classNames({
            'loadmore': true,
            'hidden': data.length !== parseInt(loadSize)
        });

        let listStr = data.map((item, index) => {
            return <p key={'listItem_' + index} className="visui-list-item" onClick={this.clickItem.bind(this, item)}>
                {item.title || autoTitle && <span title={index + 1} className={titleclassname}>{item.title || index + 1}</span>}
                <span title={item.name} className={nameclassname}>{item.name}</span>
                <span title={item.value} className={valueclassname}>{formatValue ? formatValue(item.value) : item.value}</span>
                {item.extra && <span title={item.extra} className={extraclassname}>{formatExtra ? formatExtra(item.extra) : item.extra}</span>}
            </p>
        });

        return <div className={classname} style={style}>
            {listStr}
            {loadMore && <p onClick={this.handleClick} className={loadmoreclassname}>
                <span>加载更多</span>
                <Icon type="arrow-down" />
            </p>}
        </div>
    }
}

List.defaultProps = {
    data: [],
    loadMore: false,
    loadSize: 10,
    autoTitle: true
};

List.propTypes = {
    data: PropTypes.array.isRequired,
    loadMore: PropTypes.bool,
    loadSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    autoTitle: PropTypes.bool,
    formatValue: PropTypes.func,
    formatExtra: PropTypes.func,
    onClick: PropTypes.func,
    onLoadMore: PropTypes.func
};

export default List;