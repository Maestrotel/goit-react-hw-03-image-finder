import { Component } from 'react';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getPixabayImages } from '../../src/services/api';

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

  handleSubmit = query => {
    this.setState({ query });
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({
        isLoading: true,
      });
      try {
        const { hits, totalHits } = await getPixabayImages(
          this.state.query,
          this.state.page
        );
        this.setState({
          images: [...this.state.images, ...hits],
          totalHits: totalHits,
        });
      } catch (error) {
        this.setState({ error: error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

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
