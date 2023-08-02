import React from "react";
import { MarkerType } from "reactflow";

export const nodes = [
  {
    id: "1",
    type: "input",
    data: {
      label: <>Machine Learning</>,
    },
    position: { x: 10, y: 10 },
  },
  {
    id: "2",
    type: "group",
    data: {
      label: (
        <>
          <h2>General</h2>,
        </>
      ),
    },
    position: { x: 10, y: 90 },
    style: {
      width: 280,
      height: 200,
    },
  },
  {
    id: "3",
    type: "input",
    data: { label: "concepts, Inputs & Attributes" },
    position: { x: 10, y: 20 },
    parentNode: "2",
    extent: "parent",
    style: {
      width: 250,
    },
  },
  {
    id: "4",
    data: { label: "Cost functions and gradient descent" },
    position: { x: 10, y: 80 },
    parentNode: "2",
    extent: "parent",
    style: {
      width: 250,
    },
  },
];

export const edges = [
  { id: "e1-2", source: "1", target: "2" },
  // { id: "e1-3", source: "1", target: "3" },
];
