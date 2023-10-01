export default async function Team() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const value = Math.random();
  return (
    <section className="w-full h-[200px] bg-fuchsia-500 text-white flex justify-center items-center rounded-lg">
      Work {value}
    </section>
  );
}
