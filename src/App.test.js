import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from "enzyme"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import App from './App';
import Info from "./components/moreInfo"
import Results from "./components/movieResults"
configure({ adapter: new Adapter() });

describe("Results", () => {
  it('render with empty array', () => {
    const testSearchResults = []
    const tree = renderer.create(<Results searchResults = {testSearchResults}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("render with a result in array", () => {
    const testSearchResults = [{"Title": "Saw",
    "Year": "2004",
    "imdbID": "tt0387564",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE4MDYzNDE1OV5BMl5BanBnXkFtZTcwNDY2OTYwNA@@._V1_SX300.jpg"}]
    const tree = renderer.create(<Results searchResults = {testSearchResults}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
