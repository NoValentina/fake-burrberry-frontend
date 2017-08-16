import React from 'react';
import Responsive from 'react-responsive';
import PropTypes from 'prop-types';

export const XS = ({ children }) =>
  (<Responsive maxWidth={767}>
    {children}{' '}
  </Responsive>);

export const MD = ({ children }) =>
  (<Responsive minWidth={768}>
    {children}
  </Responsive>);

export const LG = ({ children }) =>
  (<Responsive minWidth={992}>
    {children}
  </Responsive>);

export const SM = ({ children }) =>
  (<Responsive minWidth={768} maxWidth={991}>
    {children}
  </Responsive>);

XS.propTypes = {
  children: PropTypes.node.isRequired,
};

MD.propTypes = {
  children: PropTypes.node.isRequired,
};

LG.propTypes = {
  children: PropTypes.node.isRequired,
};

SM.propTypes = {
  children: PropTypes.node.isRequired,
};
