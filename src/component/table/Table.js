import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { Pagination } from "semantic-ui-react";
import {
  fetchData,
  fetchPaginationData,
  updateSortingAction,
} from "../../redux/actions/table";
import moment from "moment";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useForceUpdate,
} from "@chakra-ui/react";

const TableComponent = () => {
  const dispatch = useDispatch();
  moment.locale();
  const forceUpdate = useForceUpdate();

  const tableData = useSelector((state) => state.table);
  const [localState, setLocalState] = useState([]);

  useEffect(() => {
    if (tableData) {
      setLocalState(tableData);
    }
    forceUpdate(); // eslint-disable-next-line
  }, [tableData]);

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
    setLocalState(sortedTableData);
  };

  const onHandleSortName = () => {
    let sortedTableData = [...tableData];
    sortedTableData = tableData.sort((a, b) =>
      a.name.first.localeCompare(b.name.first)
    );

    updateSortingAction(dispatch, sortedTableData);
    setLocalState(sortedTableData);
  };

  const onHandleSortEmail = () => {
    let sortedTableData = [...tableData];
    sortedTableData = tableData.sort((a, b) => a.email.localeCompare(b.email));

    updateSortingAction(dispatch, sortedTableData);
    setLocalState(sortedTableData);
  };

  const onHandleSortGender = () => {
    let sortedTableData = [...tableData];
    sortedTableData = tableData.sort((a, b) =>
      a.gender.localeCompare(b.gender)
    );

    updateSortingAction(dispatch, sortedTableData);
    setLocalState(sortedTableData);
  };

  const onHandleSortDate = () => {
    let sortedTableData = [...tableData];
    sortedTableData = tableData.sort(
      (a, b) => new Date(a.registered.date) - new Date(b.registered.date)
    );
    updateSortingAction(dispatch, sortedTableData);
    setLocalState(sortedTableData);
  };

  return (
    <div className={`ui container user-table`}>
      {/* Start Of: trying table chakra UI*/}
      <TableContainer>
        <Table variant="simple">
          <Thead backgroundColor="gray.200">
            <Tr>
              <Th onClick={onHandleSortUsername} cursor="pointer">
                Username
              </Th>
              <Th onClick={onHandleSortName} cursor="pointer">
                Name
              </Th>
              <Th onClick={onHandleSortEmail} cursor="pointer">
                Email
              </Th>
              <Th onClick={onHandleSortGender} cursor="pointer">
                Gender
              </Th>
              <Th onClick={onHandleSortDate} cursor="pointer">
                Registered Date
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {localState.map((item, index) => (
              <Tr key={index}>
                <Td>{item.login.username}</Td>
                <Td>{item.name.first}</Td>
                <Td>{item.email}</Td>
                <Td>{item.gender}</Td>
                <Td>
                  {moment(item.registered.date).format("DD-MM-YYYY h:mm")}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {/* End Of: trying table chakra UI*/}

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

export default TableComponent;
