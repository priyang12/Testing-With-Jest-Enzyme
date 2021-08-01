import React from 'react';
import { checkProps, getelementByTestId } from '../utils/tests';
import Btn from './btn';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Button for Getting refresh the posts', () => {
  describe('Checking PropTypes', () => {
    it('sould not throw a warning', () => {
      const expactedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {},
      };
      const porpsError = checkProps(Btn, expactedProps);
      expect(porpsError).toBeUndefined;
    });
  });
});

describe('Render Button', () => {
  let wrapper;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      buttonText: 'Example Button Text',
      emitEvent: mockFunc,
    };
    wrapper = shallow(<Btn {...props} />);
  });
  it('should Render a Button', () => {
    const btn = getelementByTestId(wrapper, 'buttonComponent');
    expect(btn.length).toBe(1);
  });
  it('should emit callback on click event', () => {
    const btn = getelementByTestId(wrapper, 'buttonComponent');
    btn.simulate('click');
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });
});
