import Link from "next/link";

//  request-memorization cache  单次渲染缓存接口数据（layout 和 page 同时访问同一个接口）

// 测试成功
const getProduct = async () => {
  // const { signal } = new AbortController();
  const res = await fetch("https://dummyjson.com/products/1", {
    // next: {
    //   revalidate: 1,
    // },
  });
  return await res.json();
};

const OptingOut = async () => {
  console.log("optingOut");
  const res = await getProduct();
  return (
    <>
      <Link href={"/cache/router-cache"} className="font-bold">
        go router-cache
      </Link>
      <Link href={"/cache/data-cache"} className="font-bold">
        go router-cache
      </Link>
      <div>-----</div>
      <div>{JSON.stringify(res)}</div>
    </>
  );
};

export default OptingOut;
