import React, { Component } from "react";
import Photowall from "./Photowall";
import Title from "./Title";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();
  }

  removePhoto(postRemove) {
    console.log(postRemove.description);
    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== postRemove),
    }));
  }

  addPhoto(postSubmitted) {
    this.setState((state) => ({
      posts: state.posts.concat([postSubmitted]),
    }));
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Title title={"PhotoWall"} />
              <Photowall posts={this.props.posts} />
            </div>
          )}
        />
        {/* <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto
              onAddPhoto={(addedPost) => {
                this.addPhoto(addedPost);
                history.push("/");
              }}
            />
          )}
        /> */}
      </div>
    );
  }
}

export default Main;
