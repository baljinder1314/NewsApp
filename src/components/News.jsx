import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  state = {
    result: [],
    loading: false,
    totalResults: 0,
  };
  static defaultProps = {
    country: "in",
    language: "en",
    category: "",
    pageKey:''
  };
  static propTypes = {
    country: PropTypes.string,
    language: PropTypes.string,
    category: PropTypes.string,
  };

  componentDidMount = async () => {
    this.props.setProgress(10);
    this.setState({ loading: true });
    const url = `https://newsdata.io/api/1/latest?category=${this.props.category}&country=${this.props.country}&language=${this.props.language}&apikey=${this.props.myApiKey}`;

    let data = await fetch(url);
    let response = await data.json();

    this.props.setProgress(40);
    this.setState({
      result: response.results,
      loading: false,
      totalResults: response.totalResults,
      pageKey: response.nextPage,
    });
    this.props.setProgress(100);
  };

  fetchMoreData = async () => {
    this.props.setProgress(10);
    const url = `https://newsdata.io/api/1/latest?category=${this.props.category}&country=${this.props.country}&language=${this.props.language}&apikey=${this.props.myApiKey}&page=${this.state.pageKey}`;
    let data = await fetch(url);
    let response = await data.json();
    this.props.setProgress(40);

    this.setState({
      result: this.state.result.concat(response.results),
      loading: false,
      pageKey: response.nextPage,
    });
    this.props.setProgress(100);
  };

  render() {
    return (
      <div>
        <h1 className="text-center my-4">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.result.length}
          next={this.fetchMoreData}
          hasMore={this.state.result.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.result.map((elements, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <NewsItem
                      title={elements.title ? elements.title.slice(0, 45) : ""}
                      description={
                        elements.description
                          ? elements.description.slice(0, 100)
                          : ""
                      }
                      imageUrl={elements.image_url}
                      link={elements.link}
                      date={elements.pubDate}
                      creator={
                        elements.creator
                          ? elements.creator.map((e) => {
                              return e;
                            })
                          : "Unknown"
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
