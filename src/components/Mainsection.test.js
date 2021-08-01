import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { checkProps } from '../utils/tests';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { getelementByTestId } from '../utils/tests';
Enzyme.configure({ adapter: new Adapter() });

import Mainsection from './Mainsection';
let wrapper;

const setup = (props) => {
  const component = shallow(<Mainsection {...props} />);
  return component;
};

describe('Main Showcase Component', () => {
  describe('Checking propTypes', () => {
    it('Should not throw Error', () => {
      const expectedProps = {
        title: 'Test Header',
        desc: 'Test Description',
        image: 'Test Image',
        temparr: [
          {
            fName: 'Test First Name',
            lName: 'Test Last Name',
            email: 'Test Email',
          },
        ],
      };

      const porpsErr = checkProps(Mainsection, expectedProps);

      expect(porpsErr).toBeUndefined();
    });
  });
  // describe('component render', () => {
  //   beforeEach(() => {
  //     const props = {
  //       title: 'Test Header Title',
  //       desc: 'Test Description',
  //       image: 'Test Image',
  //       temparr: [
  //         {
  //           fName: 'Test First Name',
  //           lName: 'Test Last Name',
  //           email: 'Test Email',
  //         },
  //       ],
  //     };
  //     wrapper = setup(props);
  //   });
  //   it('should render the title ', () => {
  //     const title = getelementByTestId(wrapper, 'titleID');
  //     expect(title.length).toBe(1);
  //     expect(title.text()).toBe('Test Header Title');
  //   });
  // });
});
