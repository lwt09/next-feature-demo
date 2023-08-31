export default function ServerComponent({
  children,
  str = "index 1",
}: {
  children?: React.ReactNode;
  str?: String;
}) {
  console.log(`我是服务端组件！${str}`);
  return (
    <>
      <div>
        我是服务端组件 {str}: {children}
      </div>
    </>
  );
}
