/**
 * @file test CheckboxList
 */
import React from 'react';
import CheckboxList from '../index';
import {shallow, mount, configure} from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

const CheckboxRadioList = CheckboxList.Radio;

describe('enzyme test CheckboxList before click', () => {
    let onChange = sinon.spy();
    let wrapper = shallow(<CheckboxList
        title="音乐类型"
        options={[
            {label: 'R&B', value: 1},
            {label: 'Jazz', value: 2},
            {label: 'Soul', value: 3}
        ]}
        onChange={onChange}
    />);

    it('checklist panel should be closed', () => {
        expect(wrapper.hasClass('visui-checkboxlist-down-container')).toBeFalsy();
    });

    it('title should be 音乐类型', () => {
        expect(wrapper.find('.visui-checkboxlist-title-text').text()).toEqual('音乐类型');
    });

});

describe('enzyme test CheckboxList after click', () => {
    let onChange = sinon.spy();
    let wrapper = mount(<CheckboxList
        title="音乐类型"
        options={[
            {label: 'R&B', value: 1},
            {label: 'Jazz', value: 2},
            {label: 'Soul', value: 3}
        ]}
        onChange={onChange}
    />);

    wrapper.find('.visui-checkboxlist-title-container').simulate('click');

    it('checklist panel should be open after body clicked', () => {
        expect(wrapper.find('.visui-checkboxlist-down-container').exists()).toBeTruthy();
    });

    it('checklist panel options should be number of 3', () => {
        expect(wrapper.find('visui-checkbox-group-item').length).toEqual(3);
    });

    it('when options changed, onChange() should be called', () => {
        wrapper.find('.visui-checkbox-wrapper').first().simulate('click');
        expect(onChange).toHaveProperty('callCount', 1);
    });
});

describe('enzyme test CheckboxRadioList before click', () => {
    let onChange = sinon.spy();
    let wrapper = shallow(<CheckboxRadioList
        title="舞蹈类型"
        options={[
            {label: 'Popping', value: 4},
            {label: 'Locking', value: 5},
            {label: 'Breaking', value: 6}
        ]}
        onChange={onChange}
    />);

    it('checklist panel should be closed', () => {
        expect(wrapper.hasClass('visui-checkboxlist-down-container')).toBeFalsy();
    });

    it('title should be 音乐类型', () => {
        expect(wrapper.find('.visui-checkboxlist-title-text').text()).toEqual('舞蹈类型');
    });

});

describe('enzyme test CheckboxRadioList after click', () => {
    let onChange = sinon.spy();
    let wrapper = shallow(<CheckboxRadioList
        title="舞蹈类型"
        options={[
            {label: 'Popping', value: 4},
            {label: 'Locking', value: 5},
            {label: 'Breaking', value: 6}
        ]}
        onChange={onChange}
    />);

    wrapper.find('.visui-checkboxlist-title-container').simulate('click');

    it('checklist panel should be open after body clicked', () => {
        expect(wrapper.find('.visui-checkboxlist-down-container').exists()).toBeTruthy();
    });

    it('checklist panel options should be number of 3', () => {
        expect(wrapper.find('visui-radio-group-item').length).toEqual(3);
    });

    it('when options changed, onChange() should be called', () => {
        wrapper.find('.visui-radio-wrapper').first().simulate('click');
        expect(onChange).toHaveProperty('callCount', 1);
    });
});