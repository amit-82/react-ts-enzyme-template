import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';

describe('Testing Main component', () => {
    const wrapper = shallow(<Main />);
    test('should render', () => {
        expect(wrapper.hasClass('Main')).toBeTruthy();
    });
});
