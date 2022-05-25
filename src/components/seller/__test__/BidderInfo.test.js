import React from "react";
import {shallow} from 'enzyme';

import BidderInfo from './BidderInfo';


describe('test for bidderinfo',()=>{
    it('should render with div component',()=>{
        const wrapper = shallow(<BidderInfo />);
        expect(wrapper.find('div').lenght).toBe(2);
    })
})
