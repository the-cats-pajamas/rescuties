import React from "react";
import * as data from "./DataBootstrapTable";
import { Row, Col, Card, CardBody } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

//This is for the Delete row
function onAfterDeleteRow(rowKeys) {
  alert("The rowkey you drop: " + rowKeys);
}
//This is for the insert new row
/*
function onAfterInsertRow(row) {
  let newRowStr = '';

  for (const prop in row) {
    newRowStr += prop + ': ' + row[prop] + ' \n';
  }
  alert('The new row is:\n ' + newRowStr);
}*/
//This is for the Search item
function afterSearch(searchText, result) {
  console.log("Your search text is " + searchText);
  console.log("Result is:");
  for (let i = 0; i < result.length; i++) {
    console.log(
      "Fruit: " + result[i].id + ", " + result[i].name + ", " + result[i].price
    );
  }
}
const options = {
  //afterInsertRow: onAfterInsertRow,  // A hook for after insert rows
  afterDeleteRow: onAfterDeleteRow, // A hook for after droping rows.
  afterSearch: afterSearch, // define a after search hook
};
const selectRowProp = {
  mode: "checkbox",
};
const cellEditProp = {
  mode: "click",
  blurToSave: true,
};

const Datatables = () => {
  return (
    <div>
      <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <BootstrapTable
                striped
                hover
                condensed
                search={true}
                data={data.jsondata}
                deleteRow={true}
                selectRow={selectRowProp}
                pagination
                insertRow={true}
                options={options}
                cellEdit={cellEditProp}
                tableHeaderClass="mb-0"
              >
                <TableHeaderColumn width="100" dataField="name" isKey>
                  Name
                </TableHeaderColumn>
                <TableHeaderColumn width="100" dataField="gender">
                  Gender
                </TableHeaderColumn>
                <TableHeaderColumn width="100" dataField="company">
                  Company
                </TableHeaderColumn>
              </BootstrapTable>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Datatables;
