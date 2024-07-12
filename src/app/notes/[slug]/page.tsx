import Note from "@/app/ui/notes/Note";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <Note />
    </>
  );
}
