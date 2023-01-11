import { Component } from 'react';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
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

  async componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query)
      console.log('query string has changed');
  }

  handleSubmit = query => {
    this.setState({ query });
    console.log(query);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        <Loader />
        <Button />
      </>
    );
  }
}
