import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import App from './App';
import Results from "./components/movieResults"

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


