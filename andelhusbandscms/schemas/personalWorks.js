export default {
  name: "personalWorks",
  title: "Personal Work Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "personalWork" }],
    },
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
}
