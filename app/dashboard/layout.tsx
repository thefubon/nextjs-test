export default function RootLayout(props: {
  children: React.ReactNode;
  team: React.ReactNode;
  work: React.ReactNode;
}) {
  return (
    <>
      {props.children}

      <div className="grid grid-cols-2 gap-4 mt-5">
        {props.team}
        {props.work}
      </div>
    </>
  );
}
