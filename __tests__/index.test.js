import React from 'react';
import expect from 'expect';
import CookieBanner from '../index';

describe('CookieBanner', () => {
  it('renders correctly', () => {
    const wrapper = <CookieBanner cookieHeadline="Test" cookieMessage="Hello World!" />;
    expect(wrapper).toMatchSnapshot();
  });
});
