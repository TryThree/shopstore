'use strict';
const e = React.createElement;

class clothes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressed: false };
  }

//const form = new FormData(document.getElementById('login-form'));
   componentDidMount() {

  const response = fetch('http://localhost:3000/api/clothes/'
, {
    method: 'Get',
    body: {}
  });
 
  }

  render() {
    if (this.state.pressed) {
      return 'You pressed this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ pressed: true }) },
      'pressed'
    );
  }
}
const domContainer = document.querySelector('#clothes_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(clothes));
