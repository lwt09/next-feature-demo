import React from "react";
import ClientComponent from "../components/clientComponent/ClientComponent";
import ServerComponent from "../components/serverComponent/ServerComponent";

export default function page() {
  console.log("mix-component/page.tsx ===> server-component");
  return (
    <>
      <ServerComponent str={"index 1"}>
        <ClientComponent>
          <ServerComponent str={"index 2"}></ServerComponent>
        </ClientComponent>
      </ServerComponent>
    </>
  );
}
