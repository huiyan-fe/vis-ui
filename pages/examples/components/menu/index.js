import React, { Component } from 'react';
import { Menu } from '../../../../src';

export default class App extends Component {
    render() {
        return <Menu>
            <span style={{
                padding: '0 20px',
                color: '#fff'
            }}>我的标题</span>
            <Menu.SubMenu title="导航菜单1" key="1">
                <Menu.Item key="11"><a href="http://www.baidu.com">导航菜单1</a></Menu.Item>
                <Menu.Item key="12">导航2</Menu.Item>
                <Menu.Item key="13">导航3</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="导航菜单2" key="2">
                <Menu.Item key="21"><a href="http://www.baidu.com">导航菜单2</a></Menu.Item>
                <Menu.Item key="22">导航22</Menu.Item>
                <Menu.Item key="23">导航23</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="3"><a href="http://www.baidu.com">导航菜单3</a></Menu.Item>
        </Menu>
    }
}
