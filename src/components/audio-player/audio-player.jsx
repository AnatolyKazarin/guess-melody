import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = React.createRef();

    this._audio = new Audio(this.props.src);

    this.state = {
      progress: this._audio.currentTime,
      isLoading: true,
      isPlaying: false,
    };

    this._audio.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    this._audio.onplay = () => this.setState({
      isPlaying: true,
    });

    this._audio.onpause = () => this.setState({
      isPlaying: false,
    });

    this._audio.ontimeupdate = () => this.setState({
      progress: this._audio.currentTime,
    });

    this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
  }

  render() {
    const {isLoading, isPlaying} = this.state;

    return (
      <React.Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={this._onPlayButtonClick}
        />
        <div className="track__status">
          <audio
            ref={this._audioRef}
          />
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this._audioRef.current;

    audio.src = src;

    audio.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    audio.onplay = () => this.setState({
      isPlaying: true,
    });

    audio.onpause = () => this.setState({
      isPlaying: false,
    });

    audio.ontimeupdate = () => this.setState({
      progress: this._audio.currentTime,
    });
  }

  componentDidUpdate() {
    if (this.props.isPlaying) {
      this._audio.play();
    } else {
      this._audio.pause();
    }
  }

  componentWillUnmount() {
    this._audio.oncanplaythrough = null;
    this._audio.onplay = null;
    this._audio.onpause = null;
    this._audio.ontimeupdate = null;
    this._audio.src = ``;
    this._audio = null;
  }

  _onPlayButtonClick() {
    this.props.onPlayButtonClick();
    this.setState({isPlaying: !this.state.isPlaying});
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool,
  onPlayButtonClick: PropTypes.func,
  src: PropTypes.string,
};

export {AudioPlayer};
