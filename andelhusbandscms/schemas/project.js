import { MdLocalMovies as icon } from "react-icons/md"
import schemaTypes from "all:part:@sanity/base/schema-type"

export default {
  name: "project",
  title: "Project",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "url",
      title: "Project URL",
      type: "url",
    },
    {
      name: "backgroundHex",
      title: "Background HEX",
      type: "colorPicker",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "overview",
      title: "Overview",
      type: "blockContent",
    },
    {
      name: "releaseDate",
      title: "Release date",
      type: "datetime",
    },
    {
      name: "poster",
      title: "Poster Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "releaseDate",
      media: "poster",
    },
    prepare(selection) {
      return {
        title: `${selection.title}`,
        date: selection.date,
        media: selection.media,
      }
    },
  },
}
