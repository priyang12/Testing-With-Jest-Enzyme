import App from './App';
import React from 'react';
import { shallow } from 'enzyme';
import { testStore, getelementByTestId } from './utils/tests';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const setup = (init = {}) => {
  const teststore = testStore(init);
  const wrapper = shallow(<App store={teststore} />);
  return wrapper;
};

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const init = {
      post: [
        {
          title: 'Example Title 1',
          body: 'Some Text',
        },
        {
          title: 'Example Title 2',
          body: 'Some Text',
        },
        {
          title: 'Example Title 3',
          body: 'Some Text',
        },
      ],
    };
    wrapper = setup(init);
  });
  it('it Should render Without Error', () => {
    const component = getelementByTestId(wrapper, 'AppComponent');
    expect(component.length).toBe(1);
  });
});
