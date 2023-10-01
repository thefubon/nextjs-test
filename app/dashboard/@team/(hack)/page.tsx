type Props = {};

export default async function Team(props: Props) {
  const data = await fetch("http://localhost:3000/api/team", {
    cache: "no-store",
  });
  return (
    <section className="w-full h-[200px] bg-indigo-500 text-white flex justify-center items-center rounded-lg">
      Team
    </section>
  );
}
