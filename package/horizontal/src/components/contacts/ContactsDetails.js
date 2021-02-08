import React, { Fragment } from "react";
import { Table, Button, Input } from "reactstrap";
import { setEditContactFlag, updateContact } from "../../redux/contacts/Action";
import { useSelector, useDispatch } from "react-redux";

const ContactsDetails = () => {
  const selectedContacts = useSelector(
    (state) =>
      state.contactReducer.contacts[state.contactReducer.contactsDetails]
  );
  const editContactFlag = useSelector(
    (state) => state.contactReducer.editContact
  );

  const dispatch = useDispatch();

  return (
    <Fragment>
      {selectedContacts ? (
        <div className="">
          <div className="d-flex align-items-center p-4 border-bottom">
            <div className="mr-3">
              <img
                src={selectedContacts.image}
                alt="user"
                className="rounded-circle"
                width="50"
              />
            </div>
            <div>
              <h5 className="message-title mb-0">
                {selectedContacts.firstname} {selectedContacts.lastname}
              </h5>
              <p className="mb-0">{selectedContacts.department}</p>
              {editContactFlag ? (
                <Button
                  className="btn btn-success mt-2"
                  size="sm"
                  onClick={() => dispatch(setEditContactFlag())}
                >
                  Save
                </Button>
              ) : (
                <Button
                  className="btn btn-info mt-2"
                  size="sm"
                  onClick={() => dispatch(setEditContactFlag())}
                >
                  Edit
                </Button>
              )}
            </div>
          </div>
          <div className="details-table px-4">
            <Table responsive borderless size="sm" className="mt-4">
              <tbody>
                <tr className="d-flex">
                  <td className="col-3 font-bold">First Name</td>
                  <td className="col-9">
                    {editContactFlag ? (
                      <Input
                        type="text"
                        name="firstName"
                        id="firstName"
                        defaultValue={selectedContacts.firstname}
                        onChange={(e) =>
                          dispatch(
                            updateContact(
                              selectedContacts.id,
                              "firstname",
                              e.target.value
                            )
                          )
                        }
                      />
                    ) : (
                      ": " + selectedContacts.firstname
                    )}
                  </td>
                </tr>
                <tr className="d-flex">
                  <td className="col-3 font-bold">Last Name</td>
                  <td className="col-9">
                    {editContactFlag ? (
                      <Input
                        type="text"
                        name="lastName"
                        id="lastName"
                        defaultValue={selectedContacts.lastname}
                        onChange={(e) =>
                          dispatch(
                            updateContact(
                              selectedContacts.id,
                              "lastname",
                              e.target.value
                            )
                          )
                        }
                      />
                    ) : (
                      ": " + selectedContacts.lastname
                    )}
                  </td>
                </tr>
                <tr className="d-flex">
                  <td className="col-3 font-bold">Company</td>
                  <td className="col-9">
                    {editContactFlag ? (
                      <Input
                        type="text"
                        name="company"
                        id="company"
                        defaultValue={selectedContacts.company}
                        onChange={(e) =>
                          dispatch(
                            updateContact(
                              selectedContacts.id,
                              "company",
                              e.target.value
                            )
                          )
                        }
                      />
                    ) : (
                      ": " + selectedContacts.company
                    )}
                  </td>
                </tr>
                <tr className="d-flex">
                  <td className="col-3 font-bold">Department</td>
                  <td className="col-9">
                    {editContactFlag ? (
                      <Input
                        type="text"
                        name="department"
                        id="department"
                        defaultValue={selectedContacts.department}
                        onChange={(e) =>
                          dispatch(
                            updateContact(
                              selectedContacts.id,
                              "department",
                              e.target.value
                            )
                          )
                        }
                      />
                    ) : (
                      ": " + selectedContacts.department
                    )}
                  </td>
                </tr>
                <tr className="d-flex">
                  <td className="col-3 font-bold">Email</td>
                  <td className="col-9">
                    {editContactFlag ? (
                      <Input
                        type="text"
                        name="email"
                        id="email"
                        defaultValue={selectedContacts.email}
                        onChange={(e) =>
                          dispatch(
                            updateContact(
                              selectedContacts.id,
                              "email",
                              e.target.value
                            )
                          )
                        }
                      />
                    ) : (
                      ": " + selectedContacts.email
                    )}
                  </td>
                </tr>
                <tr className="d-flex">
                  <td className="col-3 font-bold">Phone</td>
                  <td className="col-9">
                    {editContactFlag ? (
                      <Input
                        type="text"
                        name="phone"
                        id="phone"
                        defaultValue={selectedContacts.phone}
                        onChange={(e) =>
                          dispatch(
                            updateContact(
                              selectedContacts.id,
                              "phone",
                              e.target.value
                            )
                          )
                        }
                      />
                    ) : (
                      ": " + selectedContacts.phone
                    )}
                  </td>
                </tr>
                <tr className="d-flex">
                  <td className="col-3 font-bold">Address</td>
                  <td className="col-9">
                    {editContactFlag ? (
                      <Input
                        type="text"
                        name="address"
                        id="address"
                        defaultValue={selectedContacts.address}
                        onChange={(e) =>
                          dispatch(
                            updateContact(
                              selectedContacts.id,
                              "address",
                              e.target.value
                            )
                          )
                        }
                      />
                    ) : (
                      ": " + selectedContacts.address
                    )}
                  </td>
                </tr>
                <tr className="d-flex">
                  <td className="col-3 font-bold">Note</td>
                  <td className="col-9">
                    {editContactFlag ? (
                      <Input
                        type="text"
                        name="notes"
                        id="notes"
                        defaultValue={selectedContacts.notes}
                        onChange={(e) =>
                          dispatch(
                            updateContact(
                              selectedContacts.id,
                              "notes",
                              e.target.value
                            )
                          )
                        }
                      />
                    ) : (
                      ": " + selectedContacts.notes
                    )}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      ) : (
        <div className="d-flex h-100 p-4 flex-column align-items-center justify-content-center">
          <i className="far fa-address-card display-5"></i>
          <h4 className="mt-2">Please select a contact to show details.</h4>
        </div>
      )}
    </Fragment>
  );
};

export default ContactsDetails;
