import React from "react";
import Responsive from "react-responsive";

export const XS = ({ children }) =>
  <Responsive maxWidth={768} children={children} />;

export const MD = ({ children }) =>
  <Responsive maxWidth={991} children={children} />;

export const LG = ({ children }) =>
  <Responsive minWidth={992} children={children} />;
