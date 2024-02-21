import dynamic from "next/dynamic";

const Entity1Table = dynamic(
  () => import("~/features/entity1stuff/entity1-table"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);
export default function Page() {
  return (
    <div className="h-screen">
      <Entity1Table />
    </div>
  );
}
