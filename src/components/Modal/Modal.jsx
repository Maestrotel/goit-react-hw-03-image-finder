import { Component } from 'react';
import { createPortal } from 'react-dom';

export class Modal extends Component {
  handleBackdrop = e => {
    if (e.target === e.currentTarget) this.props.onClose();
  };

  handleKeyDown = e => {
    if (e.key === 'Escape') this.props.onClose();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return createPortal(
      <div className="overlay" onClick={this.handleBackdrop}>
        <div className="modal">
          <img src={this.props.largeImageURL} alt="modal" />
        </div>
      </div>,
      document.querySelector('#portalModal')
    );
  }
}
