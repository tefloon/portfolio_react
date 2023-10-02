import React from "react";

type SpacerProps = {
  space?: number;
};

export default function Spacer({ space: space = 8 }: SpacerProps) {
  const style = {
    color: "white",
    paddingTop: `${space}rem`,
  };

  return <div style={style}></div>;
}
