import React from 'react';
import {Svg, Path} from 'react-native-svg';

export default props => (
  <Svg viewBox="0 0 24 24" height="24" width="24" {...props}>
    <Path
      d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
      fill={props.tintColor || '#333'}
    />
  </Svg>
);
