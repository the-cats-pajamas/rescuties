import React, { useState } from 'react';
import { connect } from 'react-redux'
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  Button,
  Row,
  Col
} from 'reactstrap';
import { showFilterHandler } from '../../../redux/settings/reducers/animal-reducer';
const mapDispatchToProps = {showFilterHandler};
const Dropdowns = (props) => {
console.log('props44444444444', props)
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggle1 = () => {
    setIsOpen1(!isOpen1);
  }

  const toggle2 = () => {
    setIsOpen2(!isOpen2);
  }

  const toggle3 = () => {
    setIsOpen3(!isOpen3);
  }

  const toggle4 = () => {
    setIsOpen4(!isOpen4);
  }

  return (
    <div
    style={{margin: '0px 0px 10px 0px' }}
    >
      {/* --------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
              <div className="d-flex align-items-center">
                <ButtonDropdown
                  className="ml-2"
                  isOpen={isOpen1}
                  toggle={toggle1.bind(null)}
                >
                  <Button id="caret" color="success">
                    Type
                    </Button>
                  <DropdownToggle caret color="success" />
                  <DropdownMenu>
                    <DropdownItem disabled>Show All Animals</DropdownItem>
                    <DropdownItem onClick={() => props.showFilterHandler("Cat", "species")}>Show Cats</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => props.showFilterHandler("Dog", "species")}>Show Dogs</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                <ButtonDropdown
                  className="ml-2"
                  isOpen={isOpen2}
                  toggle={toggle2.bind(null)}
                >
                  <Button id="caret" color="success">
                    Age
                    </Button>
                  <DropdownToggle caret color="success" />
                  <DropdownMenu>
                    <DropdownItem disabled>All Ages</DropdownItem>
                    <DropdownItem onClick={() => props.showFilterHandler("Baby", "age")}>Baby 0 - 1yr</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => props.showFilterHandler("Young", "age")}>Young 1yr - 3yrs</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => props.showFilterHandler("Adult", "age")}>Adult 3yrs - 10yrs</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => props.showFilterHandler("Senior", "age")}>Senior 10yrs +</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                <ButtonDropdown
                  className="ml-2"
                  isOpen={isOpen3}
                  toggle={toggle3.bind(null)}
                >
                  <Button id="caret" color="success">
                    Gender
                    </Button>
                  <DropdownToggle caret color="success" />
                  <DropdownMenu>
                    <DropdownItem disabled>All Genders</DropdownItem>
                    <DropdownItem onClick={() => props.showFilterHandler("Female", "gender")}>Female</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => props.showFilterHandler("Male", "gender")}>Male</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                <ButtonDropdown
                  className="ml-2"
                  isOpen={isOpen4}
                  toggle={toggle4.bind(null)}
                >
                  <Button id="caret" color="success">
                    Environment
                    </Button>
                  <DropdownToggle caret color="success" />
                  <DropdownMenu>
                    <DropdownItem disabled>All Environments</DropdownItem>
                    <DropdownItem onClick={() => props.showFilterHandler("cats", "environment")}>Good With Cats</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => props.showFilterHandler("dogs", "environment")}>Good With Dogs</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => props.showFilterHandler("children", "environment")}>Good With Children</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
        </Col>
        <Col xs="12" md="6">
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
}

const mapStateToProps = state => ({
  animals: state.animals,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdowns);




