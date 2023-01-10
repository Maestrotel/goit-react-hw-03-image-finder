import { Component } from 'react';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
// import { getPixabayImages } from '../../src/services/api';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    totalHits: null,
    largeImageURL: '',
    isLoading: false,
    error: null,
  };

  render() {
    return (
      <>
        <Searchbar />
        {/* <ImageGallery /> */}
        <Loader />
        <Button />
      </>
    );
  }
}
