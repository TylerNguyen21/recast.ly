import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from '/compiled/src/components/VideoList.js';
import VideoPlayer from '/compiled/src/components/VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vid: exampleVideoData,
      curVid: exampleVideoData[0]
    };
    this.onVideoClick = this.onVideoClick.bind(this);
  }
 
  onVideoClick(video) {
    this.setState({
      curVid: video
    });
  }
 
  render() {
    let currentVideo = this.state.curVid;
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>Video Player</em></h5></div>
            <VideoPlayer video={currentVideo}/>
          </div>
          <div className="col-md-5">
            <div><h5><em>Videos</em></h5></div>
            <VideoList videos={this.state.vid} function={this.onVideoClick}/>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
