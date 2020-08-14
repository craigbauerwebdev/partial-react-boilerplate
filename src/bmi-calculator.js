class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return (
      <div className="wrapper">
        {this.state.liked &&
          <p>You liked this.</p>
        }
        {!this.state.liked &&
          <button onClick={() => {
            this.setState({ liked: true })}
            }>
            Like
          </button>
        }
        <Ext />
      </div>
    );
  }
}

class Ext extends React.Component {

  render() {
    return (
      <h1>From EXT cap</h1>
    );
  }
}

const domContainer = document.querySelector('#bmi-calculator');
ReactDOM.render(<LikeButton />, domContainer);