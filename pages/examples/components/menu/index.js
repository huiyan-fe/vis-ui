import React, { Component } from 'react';
import { Menu } from '../../../../src';

export default class App extends Component {
    render() {
        return <Menu defaultSelectedIndexs={['1', '11']}>
            <span style={{
                padding: '0 20px',
                color: '#fff'
            }}>我的标题</span>
            <Menu.SubMenu title="导航菜单1" index="1">
                <Menu.Item index="11"><a href="http://www.baidu.com">导航菜单1</a></Menu.Item>
                <Menu.Item index="12">导航2</Menu.Item>
                <Menu.Item index="13">导航3</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="导航菜单2" index="2">
                <Menu.Item index="21"><a href="http://www.baidu.com">导航菜单2</a></Menu.Item>
                <Menu.Item index="22">导航22</Menu.Item>
                <Menu.Item index="23">导航23</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item index="3"><a href="http://www.baidu.com">导航菜单3</a></Menu.Item>
        </Menu>
    }
}
