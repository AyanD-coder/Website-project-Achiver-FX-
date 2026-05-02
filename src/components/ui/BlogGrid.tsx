"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { BlogPost } from "@/components/ui/discover-page";

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

function BlogCard({ excerpt, href, image, title }: BlogPost) {
  return (
    <motion.article
      variants={cardVariants}
      className="group flex h-full min-h-[30rem] flex-col overflow-hidden rounded-[18px] border border-sky-300/15 bg-[#0B1F3A] shadow-[0_24px_70px_rgba(2,8,20,0.28),0_0_26px_rgba(14,165,233,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-sky-300/45 hover:shadow-[0_30px_86px_rgba(2,8,20,0.42),0_0_42px_rgba(56,189,248,0.2)] [.light_&]:border-sky-100 [.light_&]:bg-white [.light_&]:shadow-[0_18px_44px_rgba(15,23,42,0.08)] [.light_&]:hover:border-sky-200 [.light_&]:hover:shadow-[0_20px_52px_rgba(37,99,235,0.14)]"
    >
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Read ${title}`}
        className="relative block aspect-video overflow-hidden rounded-t-[18px] bg-slate-950"
      >
        <Image
          src={image}
          alt={title}
          fill
          loading="lazy"
          sizes="(min-width: 1280px) 384px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-semibold leading-snug tracking-normal text-white transition-colors duration-300 group-hover:text-sky-100 [.light_&]:text-slate-950 [.light_&]:group-hover:text-blue-700">
          {title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300/78 [.light_&]:text-slate-600">
          {excerpt}
        </p>

        <div className="mt-auto pt-6">
          <Button
            asChild
            className="min-h-11 rounded-full px-5 text-sm shadow-[0_12px_28px_rgba(14,165,233,0.22)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:from-sky-400 group-hover:to-cyan-300 group-hover:shadow-[0_18px_38px_rgba(56,189,248,0.36)]"
          >
            <Link href={href} target="_blank" rel="noreferrer">
              Read More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export function BlogGrid({
  posts = [],
  title = "Our Top Educational Sources",
}: {
  posts?: BlogPost[];
  title?: string;
}) {
  return (
    <div className="relative">
      <div className="relative mx-auto mb-10 max-w-3xl text-center sm:mb-12">
        <h2 className="text-3xl font-semibold leading-tight tracking-normal text-white drop-shadow-[0_0_18px_rgba(56,189,248,0.22)] sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
          {title}
        </h2>
      </div>

      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="relative grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8"
      >
        {posts.map((post) => (
          <BlogCard key={post.href} {...post} />
        ))}
      </motion.div>
    </div>
  );
}
