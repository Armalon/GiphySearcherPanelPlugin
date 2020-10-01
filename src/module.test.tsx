import React from 'react';
import { SimplePanel } from './SimplePanel';
import { shallow, ShallowWrapper } from 'enzyme';

// Just a stub test
describe('[UNIT] Testing the SimplePanel component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    // @ts-ignore
    // todo: consider using here the right passed props and options
    wrapper = shallow(<SimplePanel options={{ searchLimit: 20 }} />);
  });

  describe('Component loading are responsiveness validation', () => {
    it('Has the search form', () => {
      expect(wrapper.find('form input[type="search"]').prop('placeholder')).toBe('Please enter keyword');
      // disabled at first
      expect(wrapper.find('form button').prop('disabled')).toBeTruthy()
      expect(wrapper.find('form button svg').exists()).toBeTruthy()
    });

    it('search input is responsive', () => {
      wrapper.find('form input[type="search"]').simulate('change', {
        target: { value: 'boobs' }
      })
      expect(wrapper.find('form button').prop('disabled')).toBeFalsy()
      expect(wrapper.state('inputText')).toBe('boobs')
    });

    it('loader is shown an request processed', async () => {
      wrapper.find('form input[type="search"]').simulate('change', {
        target: { value: 'boobs' }
      })
      wrapper.find('form').simulate('submit')
      expect(wrapper.find('#loader').exists()).toBeTruthy()

      // Wait all promises to complete hack
      await (() => new Promise(setImmediate))()

      // within `setImmediate` all of the promises have been exhausted
      wrapper.update()

      expect(wrapper.find('#results div').length).toBeGreaterThan(0)
    });
  });
});
