export default async function Team() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const value = Math.random();
  return (
    <section className="w-full h-[200px] bg-indigo-500 text-white flex justify-center items-center rounded-lg">
      Team {value}
    </section>
  );
}
