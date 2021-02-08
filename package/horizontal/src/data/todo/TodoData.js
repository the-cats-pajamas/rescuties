import mock from "../mock";

const tasks = [
  {
    id: 1,
    title: "Design the solution",
    desc: "Define the relationship between resources and business systems.",
    starred: false,
    isCompleted: false,
    deleted: false,
  },
  {
    id: 2,
    title: "Schedule jobs",
    desc:
      "Test the Automated Business Systems file and XML definitions to verify resource inclusion and placement.",
    starred: true,
    isCompleted: false,
    deleted: false,
  },
  {
    id: 3,
    title: "Purchase a gift for Friend 🎁",
    desc:
      "Create the Automated Business Systems configuration file and XML definitions for the business system.",
    starred: true,
    isCompleted: false,
    deleted: false,
  },
  {
    id: 4,
    title: "Install the history server.",
    desc:
      "Set up and test jobs on the database server to produce the database backup.",
    starred: false,
    isCompleted: true,
    deleted: false,
  },
  {
    id: 5,
    title: "Make Birthday Party plan 😁",
    desc:
      "Establish a relationship between Tivoli Business Systems Manager and change management so that as the environment changes, business systems can change with it.",
    starred: true,
    isCompleted: false,
    deleted: false,
  },
  {
    id: 6,
    title: "Meeting with Ms.Severy ❤️",
    desc: "Monitor system performance and adjust hardware as required. ",
    starred: true,
    isCompleted: false,
    deleted: false,
  },
  {
    id: 7,
    title: "Schedule jobs",
    desc: "Tivoli Business Systems Manager SQL server jobs ",
    starred: false,
    isCompleted: false,
    deleted: true,
  },
  {
    id: 8,
    title: "Fix Maintainance Plan",
    desc:
      "Establish a relationship between Tivoli Business Systems Manager and change management so that as the environment changes, business systems can change with it.",
    starred: false,
    isCompleted: false,
    deleted: true,
  },
  {
    id: 9,
    title: "Install the Health Monitor.",
    desc: "Customize the health monitor to match your environment.",
    starred: false,
    isCompleted: true,
    deleted: true,
  },
  {
    id: 10,
    title: "Implement Source feeds. 💻",
    desc:
      "Configure filtering, if appropriate.Perform discovery, if required. Configure the event source.Verify the event flow.",
    starred: false,

    isCompleted: false,
    deleted: false,
  },
];

// GET: Fetch Todos
mock.onGet("api/data/todo/todoData").reply(() => {
  const mtodos = tasks;
  return [200, JSON.parse(JSON.stringify(mtodos))];
});

export default tasks;
