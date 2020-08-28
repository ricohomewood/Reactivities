import React from 'react';
import { shallow, configure, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import App from './App';

configure({ adapter: new Adapter() });

test('returns reactivies in the header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Reactivities/i);
  expect(linkElement).toBeInTheDocument();
});

test('should check `componentDidMount()` called once', () => {
  let wrapper;
  wrapper = shallow(<App />);
  const instance = wrapper.instance(); // you assign your instance of the wrapper
  jest.spyOn(instance, 'componentDidMount'); // You spy on the randomFunction
  instance.componentDidMount();
    expect(instance.componentDidMount).toHaveBeenCalledTimes(1); // You check if the condition you want to match is correct.
});






// test('fetch values on #componentDidMount', () => {

  
//   jest.mock('axios', () => {
//     const exampleValues = [
//       { "id": 1, "name": "Value 101" }
//     ];
    
//     return {
//       get: jest.fn(() => Promise.resolve(exampleValues)),
//     };
//   });

//   const axios = require('axios');

//   const app = shallow(<App />);
//   app
//     .instance()
//     .componentDidMount()
//     .then(() => {
//        expect(axios.get).toHaveBeenCalled();
//     //   expect(axios.get).toHaveBeenCalledWith('http://localhost:5000/api/values');
//     //   expect(app.state()).toHaveProperty('values', [
//     //     { "id": 1, "name": "Value 101" }
//     //   ]);
//       //done();
//     });
// });

