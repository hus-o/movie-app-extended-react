import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Search from "./components/Search";
import renderer from 'react-test-renderer';

test('fake test', () => {
  expect(true).toBeTruthy();
});

test('renders correctly', () => {
  const tree = renderer.create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('it searches', () =>{
  
})