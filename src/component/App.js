import React from "react";
import Filter from "./filters/Filter";
import Table from "./table/Table";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h1>Data Table with Search and Table</h1>
        <Filter />
        <Table />
      </div>
    );
  }
}

export default App;
