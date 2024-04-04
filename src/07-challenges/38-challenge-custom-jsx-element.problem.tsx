import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "custom-element": {
        children: string;
        isProp: boolean;
      };
    }
  }
}

/**
 * How do we add a new base element to React's JSX?
 *
 * You'll need to do some detective work: check
 * out JSX.IntrinsicElements.
 *
 * The JSX namespace comes from React - you'll need
 * to check out React's type definitions.
 */

const element = <custom-element isProp>hello world</custom-element>;
