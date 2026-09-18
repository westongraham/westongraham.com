import { getEngineeringNotes } from "@/data/notes";
export function getWriting() {
  return [
    {
      slug: "when-a-spreadsheet-stops-being-enough",
      title: "When a spreadsheet stops being enough",
      description:
        "A practical way to recognize when a repeated business process needs a better tool.",
      category: "Engineering",
      published: "",
    },
    ...getEngineeringNotes().map((note) => ({
      ...note,
      category: "Engineering note",
    })),
  ].sort((a, b) => b.published.localeCompare(a.published));
}
