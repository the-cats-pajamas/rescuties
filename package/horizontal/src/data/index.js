import mock from "./mock";
import "./chat/ChatData";  
import "./todo/TodoData";
import "./notes/NotesData";
import "./contacts/ContactsData";
mock.onAny().passThrough();
