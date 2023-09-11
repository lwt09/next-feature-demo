import React from "react";

export default function layout(props: {
  children: React.ReactNode;
  folderLeft: React.ReactNode;
  folderRight: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      {props.folderLeft}
      {props.folderRight}
    </>
  );
}
