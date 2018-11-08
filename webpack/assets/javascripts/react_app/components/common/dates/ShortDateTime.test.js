// Configure Enzyme
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import ShortDateTime from './ShortDateTime';
import { i18nProviderWrapperFactory } from '../../../common/i18nProviderWrapperFactory';

describe('ShortDateTime', () => {
  const date = new Date('2017-10-13 00:54:55 -1100');
  const now = new Date('2017-10-28 00:00:00 -1100');
  const IntlDate = i18nProviderWrapperFactory(now, 'UTC')(ShortDateTime);

  it('formats date', () => {
    const wrapper = mount(<IntlDate data={{ date, defaultValue: 'Default value' }} />);

    expect(toJson(wrapper.find('ShortDateTime'))).toMatchSnapshot();
  });

  it('formats date with seconds', () => {
    const wrapper = mount(<IntlDate data={{
      date,
      defaultValue: 'Default value',
      seconds: true,
    }} />);

    expect(toJson(wrapper.find('ShortDateTime'))).toMatchSnapshot();
  });

  it('renders default value', () => {
    const wrapper = mount(<IntlDate data={{ date: null, defaultValue: 'Default value' }} />);

    expect(toJson(wrapper.find('ShortDateTime'))).toMatchSnapshot();
  });
});