import {defineType} from 'sanity'
//import CodeInput from "../components/CodeInput";

export default defineType({
  name: "code",
  title: "Code",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "language",
      title: "Language",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "code",
      title: "Code",
      type: "string",
      validation: (Rule) => Rule.required(),
      //inputComponent: CodeInput,
    },
  ],
})