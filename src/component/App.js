import { Heading } from "@chakra-ui/react";
import React from "react";
import Filter from "./filters/Filter";
import Table from "./table/Table";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Heading mb={2} mt={2} as="h1" size="lg">
          Data Table with Search and Table
        </Heading>
        <Filter />
        <Table />
      </div>
    );
  }
}

export default App;
