export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="text-green-800 border h-5 border-red-500">
        base-app-router-layout
      </header>
      <div className="border border-purple-500 h-[calc(100%-1.25rem)]">
        content:
        <div>{children}</div>
      </div>
    </>
  );
}
