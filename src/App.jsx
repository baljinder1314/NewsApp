import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  country = "in";
  language = "en";
  myApiKey = import.meta.env.VITE_SOME_KEY;
  
  state = {
    progress: 0,
  }
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <div>
        <NavBar />
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
        />
        <Routes>
          <Route
            path="/"
            element={
              <News myApiKey={this.myApiKey} setProgress={this.setProgress} exact 
                country={this.country}
                key='top' language={this.language}
                category='top'
              />
            }
          />
          <Route path="/business" element={<News myApiKey={this.myApiKey} setProgress={this.setProgress} exact country={this.country} key='business' language={this.language} category='business' />} />
          <Route path="/world" element={<News myApiKey={this.myApiKey} setProgress={this.setProgress} exact country={this.country} key='world' language={this.language} category='world' />} />
          <Route path="/crime" element={<News myApiKey={this.myApiKey} setProgress={this.setProgress} exact country={this.country} key='crime' language={this.language} category='crime' />} />
          <Route path="/education" element={<News myApiKey={this.myApiKey} setProgress={this.setProgress} exact country={this.country} key='education' language={this.language} category='education' />} />
          <Route path="/entertainment" element={<News myApiKey={this.myApiKey} setProgress={this.setProgress} exact country={this.country} key='entertainment' language={this.language} category='entertainment' />} />
          <Route path="/environment" element={<News myApiKey={this.myApiKey} setProgress={this.setProgress} exact country={this.country} key='environment' language={this.language} category='environment' />} />
          <Route path="/food" element={<News myApiKey={this.myApiKey} setProgress={this.setProgress} exact country={this.country} key='food' language={this.language} category='food' />} />
          <Route path="/health" element={<News myApiKey={this.myApiKey} setProgress={this.setProgress} exact country={this.country} key='health' language={this.language} category='health' />} />
          <Route path="/lifestyle" element={<News myApiKey={this.myApiKey} setProgress={this.setProgress} exact country={this.country} key='lifestyle' language={this.language} category='lifestyle' />} />
          <Route path="/other" element={<News myApiKey={this.myApiKey} setProgress={this.setProgress} exact country={this.country} key='other' language={this.language} category='other' />} />
          <Route path="/politics" element={<News myApiKey={this.myApiKey} setProgress={this.setProgress} exact country={this.country} key='politics' language={this.language} category='politics' />} />
          <Route path="/science" element={<News myApiKey={this.myApiKey} setProgress={this.setProgress} exact country={this.country} key='science' language={this.language} category='science' />} />
          <Route path="/sports" element={<News myApiKey={this.myApiKey} setProgress={this.setProgress} exact country={this.country} key='sports' language={this.language} category='sports' />} />
          <Route path="/technology" element={<News myApiKey={this.myApiKey} setProgress={this.setProgress} exact country={this.country} key='technology' language={this.language} category='technology' />} />
          <Route path="/tourism" element={<News myApiKey={this.myApiKey} setProgress={this.setProgress} exact country={this.country} key='tourism' language={this.language} category='tourism' />} />
        </Routes>
      </div>
    );
  }
}

export default App;
