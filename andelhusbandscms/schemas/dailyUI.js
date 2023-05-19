import { MdLocalMovies as icon } from "react-icons/md"

export default {
  name: "dailyUI",
  title: "Daily UI Challenge",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "text",
    },
    {
      name: "challenges",
      title: "Challenges",
      type: "array",
      of: [{ type: "dailyUIItem" }],
    },
  ],
}
