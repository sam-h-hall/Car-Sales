import React from 'react';
import { removeFeature } from "../actions/featureActions";
import { connect } from "react-redux";

const AddedFeature = props => {
  console.log("added feature", props.feature)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        className="button" 
        onClick={() => props.removeFeature(props.feature.id)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(
  null, 
  { removeFeature }
)(AddedFeature);