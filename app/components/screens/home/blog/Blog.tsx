import Link from "next/link";
import { FC } from "react";
import ProductItem from "./ProductItem";

const Blog: FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl text-green-900 font-medium">Blog</h1>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default Blog;
