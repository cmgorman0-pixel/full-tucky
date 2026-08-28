import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPost, posts, sortedPosts, formatPostDate } from "@/lib/dispatch";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: post.image ? [{ url: post.image }] : undefined,
    },
  };
}

export default function DispatchPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const more = sortedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <div className="max-w-[1440px] mx-auto bg-[var(--cream)]">
      <Header active="/bluegrass-dispatch" />

      <article>
        <div className="max-w-3xl mx-auto px-8 pt-14">
          <Link
            href="/bluegrass-dispatch"
            className="text-[12px] font-semibold uppercase tracking-[0.12em]"
          >
            &larr; The Bluegrass Dispatch
          </Link>
          <div className="eyebrow mt-8">{post.category}</div>
          <h1 className="text-[44px] md:text-[52px] leading-[1.02] mt-3">{post.title}</h1>
          <div className="mt-5 text-[12.5px] uppercase tracking-[0.14em] text-[var(--espresso-2)] opacity-70">
            {formatPostDate(post.date)}
          </div>
        </div>

        {post.image && (
          <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] mt-12 overflow-hidden">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        )}

        <div className="max-w-2xl mx-auto px-8 pt-14 pb-20">
          {post.body.map((para, i) => (
            <p
              key={i}
              className="text-[17px] leading-[1.8] text-[var(--espresso-2)] mb-6"
            >
              {para}
            </p>
          ))}
        </div>
      </article>

      {more.length > 0 && (
        <section className="px-8 md:px-14 py-16 border-t border-[var(--line)]">
          <div className="eyebrow mb-8">Keep Reading</div>
          <div className="grid sm:grid-cols-2 gap-10">
            {more.map((p) => (
              <Link key={p.slug} href={`/bluegrass-dispatch/${p.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--cream-2)]">
                  {p.image && (
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <h3 className="text-[22px] leading-tight mt-4 text-[var(--espresso)]">
                  {p.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[var(--espresso-2)] mt-2">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
