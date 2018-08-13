import React, { Component } from 'react';
import { Modal, Button } from '../../../../src';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show1: false,
            show2: false
        }
    }

    render() {

        return <div className="modalstyle">
            <Button size="large" onClick={()=>{
                this.setState({
                    show1: true
                });
            }}>点击弹出Modal框</Button>
            <Button size="large" onClick={()=>{
                this.setState({
                    show2: true
                });
            }}>点击弹出Mini Modal框</Button>

            <Modal visible={this.state.show1}
                title="大Modal的标题霸气有型" 
                onSubmit={()=>{this.setState({show1:false})}}
                onCancel={()=>{this.setState({show1:false})}}
            >
                123
            </Modal>
            
            <Modal visible={this.state.show2}
                title="迷你宝贝" 
                mini
                onSubmit={()=>{this.setState({show2:false})}}
                onCancel={()=>{this.setState({show2:false})}}
            >
                啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
            </Modal>
        </div>;
    }
}

