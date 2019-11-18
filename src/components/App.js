import React from "react";
import SearchBar from "./SearchBar";
import youtube, { baseParams } from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    // this is to show the initial page with house as a search term
    this.onTermSubmit("house"); // this calls onTermSubmit function and passes house as for the term argument. after completing the request to the api, it then updates the state
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        ...baseParams,
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmits={this.onTermSubmit} />

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {/* semantic ui has total 16 columns */}
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
