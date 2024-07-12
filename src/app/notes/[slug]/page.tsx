import Note from "@/app/lib/ui/Note";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
        <h1>Slug: {params.slug}</h1>
        <Note />
    </>
  );
}
