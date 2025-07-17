import { Suspense } from "react";
import BlogGrid from "./BlogGrid";
import Loader from "../../components/Loader";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function BlogPage() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Blog</h1>
      <p className="text-gray-400 mb-8 text-center max-w-2xl mx-auto">
        I try to write about my experiences, and things I think about. I also write about things I don&apos;t know, but want to learn about.
      </p>
      <Suspense fallback={<Loader />}>
        <BlogGrid />
      </Suspense>
    </section>
  );
} 