import React from "react";

import Photo from "./Photo";
import PropTypes from 'prop-types';

export default function Photowall(props) {
  return (
    <div>
      <div className="photoGrid">
        {props.posts.map((post, index) => (
          <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
        ))}
      </div>
    </div>
  );
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
}