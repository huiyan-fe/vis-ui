import React, { Component } from 'react';
import { Menu } from '../../../../src';

export default class App extends Component {
    render() {
        return <div>
            <Menu defaultSelectedIndexs={['1', '11']} style={{marginBottom: '10px'}}>
                <span style={{
                    padding: '0 20px',
                    color: '#fff'
                }}>我的标题</span>
                <Menu.SubMenu title={<a href="http://www.baidu.com">导航菜单1</a>} index="1">
                    <Menu.Item index="11"><a href="http://www.baidu.com">导航11</a></Menu.Item>
                    <Menu.Item index="12"><a href="http://www.baidu.com">导航12</a></Menu.Item>
                    <Menu.Item index="13">导航13</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu title="导航菜单2" index="2">
                    <Menu.Item index="21"><a href="http://www.baidu.com">导航菜单2</a></Menu.Item>
                    <Menu.Item index="22">导航22</Menu.Item>
                    <Menu.Item index="23">导航23</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item index="3"><a href="http://www.baidu.com">导航菜单3</a></Menu.Item>
            </Menu>
            <Menu defaultSelectedIndexs={['1', '11']} mode="vertical">
                <div style={{
                    padding: '20px',
                }}>我的标题</div>
                <Menu.ItemGroup title="导航菜单1" index="1">
                        <Menu.Item index="11"><a href="http://www.baidu.com">导航11</a></Menu.Item>
                        <Menu.Item index="12"><a href="http://www.baidu.com">导航12</a></Menu.Item>
                        <Menu.Item index="13">导航13</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="导航菜单2" index="2">
                    <Menu.Item index="21"><a href="http://www.baidu.com">导航21</a></Menu.Item>
                    <Menu.Item index="22">导航22</Menu.Item>
                    <Menu.Item index="23">导航23</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="导航菜单2" index="2">
                    <Menu.Item index="3">导航菜单3</Menu.Item>
                </Menu.ItemGroup>
            </Menu>
        </div>
    }
}
