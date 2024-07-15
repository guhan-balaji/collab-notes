import dynamic from "next/dynamic";

const Note = dynamic(() => import("@/app/ui/notes/Note"), { ssr: false });

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <Note />
    </>
  );
}
