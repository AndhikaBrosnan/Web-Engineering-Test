import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { Pagination } from "semantic-ui-react";
import {
  fetchData,
  fetchPaginationData,
  updateSortingAction,
} from "../../redux/actions/table";
import moment from "moment";

const Table = () => {
  const dispatch = useDispatch();
  moment.locale();

  const tableData = useSelector((state) => state.table);

  useEffect(() => {
    fetchData(dispatch); // eslint-disable-next-line
  }, []);

  const currentActivePage = (event, data) => {
    fetchPaginationData(dispatch, data.activePage);
  };

  const onHandleSortUsername = () => {
    let sortedTableData = [...tableData];
    sortedTableData = tableData.sort((a, b) =>
      a.login.username.localeCompare(b.login.username)
    );
    updateSortingAction(dispatch, sortedTableData);
  };

  const onHandleSortName = () => {
    let sortedTableData = [...tableData];
    sortedTableData = tableData.sort((a, b) =>
      a.name.first.localeCompare(b.name.first)
    );
    updateSortingAction(dispatch, sortedTableData);
  };

  const onHandleSortEmail = () => {
    let sortedTableData = [...tableData];
    sortedTableData = tableData.sort((a, b) => a.email.localeCompare(b.email));
    updateSortingAction(dispatch, sortedTableData);
  };

  const onHandleSortGender = () => {
    let sortedTableData = [...tableData];
    sortedTableData = tableData.sort((a, b) =>
      a.gender.localeCompare(b.gender)
    );

    updateSortingAction(dispatch, sortedTableData);
  };

  const onHandleSortDate = () => {
    let sortedTableData = [...tableData];
    sortedTableData = tableData.sort(
      (a, b) => new Date(a.registered.date) - new Date(b.registered.date)
    );
    updateSortingAction(dispatch, sortedTableData);
  };

  return (
    <div className={`ui container user-table`}>
      <table className="ui celled sortable table">
        <thead>
          <tr>
            <th onClick={onHandleSortUsername}>Username</th>
            <th onClick={onHandleSortName}>Name</th>
            <th onClick={onHandleSortEmail}>Email</th>
            <th onClick={onHandleSortGender}>Gender</th>
            <th onClick={onHandleSortDate}>Registered Date</th>
          </tr>
        </thead>
        {tableData.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td data-label="Username">{item.login.username}</td>
              <td data-label="FullName">{item.name.first}</td>
              <td data-label="Email">{item.email}</td>
              <td data-label="Gender">{item.gender}</td>
              <td data-label="RegisteredDate">
                {moment(item.registered.date).format("DD-MM-YYYY h:mm")}
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <Pagination
        className="right floated"
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={2}
        onPageChange={currentActivePage}
      />
    </div>
  );
};

export default Table;
