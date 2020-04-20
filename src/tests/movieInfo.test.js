import React from 'react';
import {shallow, mount} from "enzyme"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Info from "../components/moreInfo"
configure({ adapter: new Adapter() });

describe("More Info", () =>{
    const testSelectedMovie = [{"Title": "Saw",
      "Year": "2004",
      "imdbID": "tt0387564",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE4MDYzNDE1OV5BMl5BanBnXkFtZTcwNDY2OTYwNA@@._V1_SX300.jpg"}]
      const wrapper = mount(<Info selectedMovie = {testSelectedMovie} />);
    it("Returns correct link", () =>{
      const linkWrapper = wrapper.find("a").prop("href")
      expect(linkWrapper).toBe("https://imdb.com/title/tt0387564")
    })
  
  })