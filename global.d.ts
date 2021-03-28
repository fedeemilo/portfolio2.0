import * as React from "react";

declare module "*.png" {
  const value: any;
  export = value;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": any;
    }
  }
}
