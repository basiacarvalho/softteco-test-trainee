import { v4 as uuidv4 } from 'uuid';

const notes = [
  {
    key: uuidv4(),
    date: "25/11/2024",
    title: "Lorem ipsum dolor.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    key: uuidv4(),
    date: "27/11/2024",
    title: "Lorem ipsum dolor.",
    content:
      "Sed tincidunt tincidunt porta. Quisque non leo odio.",
  },
  {
    key: uuidv4(),
    date: "20/12/2024",
    title: "Lorem ipsum dolor.",
    content:
      "Pellentesque at libero a est luctus viverra non eleifend quam. Aenean quis sodales justo.",
  },
  {
    key: uuidv4(),
    date: "22/12/2024",
    title: "Lorem ipsum dolor.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tincidunt porta. Quisque non leo odio. Fusce eget blandit elit.",
  },
   {
    key: uuidv4(),
    date: "26/12/2024",
    title: "Lorem ipsum dolor.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default notes;
