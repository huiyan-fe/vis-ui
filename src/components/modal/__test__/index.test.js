/**
 * @file 单元测试 Modal
 */
import React from 'react';
import Modal from '../index';
import {shallow, configure} from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('enzyme test Modal', () => {
    let wrapper = shallow(<Modal visible={false} title="hedongran">content</Modal>);

    it('modal should be hidden', () => {
        expect(wrapper.hasClass('hidden')).toBeTruthy();
    });

    it('title should be hedongran', () => {
        expect(wrapper.find('.modal-header-text').text()).toEqual('hedongran');
    });

    it('renders children when passed in', () => {
        expect(wrapper.contains('content')).toBeTruthy();
    });

    it('when subimt button clicked, onSubmit() should be called', () => {
        const onSubmit = sinon.spy();
        wrapper = shallow(<Modal visible={false} title="hedongran" onSubmit={onSubmit}>content</Modal>);
        wrapper.find('Button').last().simulate('click');
        expect(onSubmit).toHaveProperty('callCount', 1);
    });

    it('when cancel button clicked, onCancel() should be called', () => {
        const onCancel = sinon.spy();
        wrapper = shallow(<Modal visible={false} title="hedongran" onCancel={onCancel}>content</Modal>);
        wrapper.find('Button').first().simulate('click');
        expect(onCancel).toHaveProperty('callCount', 1);
    });

    it('become mini when mini props is added', () => {
        wrapper = shallow(<Modal visible={false} title="hedongran" mini>content</Modal>);
        expect(wrapper.hasClass('mini')).toBeTruthy();
    });
});
