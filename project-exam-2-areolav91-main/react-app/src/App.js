
import React from 'react';
import './App.css';
import axios from 'axios';

axios.get('http://localhost:1337/Hotels').then(response => {
  console.log(response);
});

class App extends React.Component {
  // State of your application
  state = {
    hotels: [],
    error: null,
  };

  // Fetch your hotels immediately after the component is mounted
  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/Hotels');
      this.setState({ hotels: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, property } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div className="App">
        <ul>
          {this.state.hotels.map(property => (
            <li key={property.id}>{property.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
