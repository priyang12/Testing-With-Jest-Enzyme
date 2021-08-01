import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { getelementByTestId } from '../utils/tests';
import { shallow } from 'enzyme';

import Header from './Header';
import LogoImg from '../image/cloud.png';

let component;

const setup = (props = {}) => {
  const component = shallow(<Header />);
  return component;
};

Enzyme.configure({ adapter: new Adapter() });

describe('Header Component', () => {
  beforeEach(() => {
    component = setup();
  });

  it('header renders logo and alternative properly', () => {
    const logo = getelementByTestId(component, 'logo');

    expect(logo.prop('src')).toEqual(LogoImg);

    expect(logo.prop('alt')).toEqual('cloud');
  });
});
