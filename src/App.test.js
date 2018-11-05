import React from 'react';
import {App} from './App';
import Cards from './components/Cards';
import AssetSummary from './components/AssetSummary';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import data from './assets';

Enzyme.configure({ adapter: new Adapter() });

const appProps = {
  data,
  previewData: []
}

it('renders', () => {
  const div = shallow(
  <App 
    {...appProps}
  />)
  expect(div).toMatchSnapshot();
});

it('renders assets count', () => {
  const div = shallow(
  <App 
    {...appProps}
  />)
  const text = div.find("span").text();
  expect(text).toEqual("0 assets");
});

it('renders Cards ', () => {
  const cards = shallow(
  <Cards 
    {...appProps}
  />)
  expect(cards).toMatchSnapshot();
});

it('checks for the first and last Card in array', () => {
  const cards = mount(
  <Cards
    {...appProps}
  />)
  expect(cards.find('h2').first().text()).toContain('10 Principles of Change Management');
  expect(cards.find('h2').last().text()).toContain('Overview of change management phases');
});

it('Asset Summary dislays correct values for each asset', () => {
  const component = mount(
    <AssetSummary 
      data={data}
    />,
  )
  //Snapshot taken with 1 Article, 3 Videos, 3 Documents, 1 Course
  expect(component).toMatchSnapshot();
});
