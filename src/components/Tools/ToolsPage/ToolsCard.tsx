'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Tool {
  id: number;
  name: string;
  image: string;
  link: string;
}

interface ToolsCardProps {
  tool: Tool;
}

const ToolsCard = ({ tool }: ToolsCardProps) => {
  return (
    <Link
      href={tool.link}
      className="group relative block overflow-hidden rounded-xl border border-white/8 bg-white/4 backdrop-blur-sm transition hover:border-white/15"
    >
      {/* Image */}
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={tool.image}
          alt={tool.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Premium dark overlay at the bottom of the image */}
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/95 via-black/70 to-transparent px-5 pb-5 pt-12">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-white/90">
              {tool.name}
            </h3>
            <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/70 transition group-hover:border-white/40 group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          
        </div>
      </div>
    </Link>
  );
};

export default ToolsCard;
