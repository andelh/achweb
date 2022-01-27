export default {
  name: "personalWork",
  title: "Personal Work",
  type: "object",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Link to Project",
      name: "url",
      type: "url",
    },
    {
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
}
