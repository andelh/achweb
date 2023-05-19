export default {
  name: "dailyUIItem",
  title: "Daily UI Item",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      title: "Project URL",
      name: "url",
      type: "url",
    },
    {
      title: "Video URL",
      name: "videoUrl",
      type: "url",
    },
    {
      title: "Poster",
      name: "poster",
      type: "image",
    },
  ],
}
