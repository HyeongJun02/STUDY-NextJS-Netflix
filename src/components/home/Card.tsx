import type { MediaItem } from '@/data/mockHome';

export default function Card({ item, rank, onClick }: { item: MediaItem; rank?: number; onClick?: (it: MediaItem) => void }) {
  return (
    <div
      role="button"
      onClick={() => onClick?.(item)}
      className="
        group relative cursor-pointer
        min-w-[148px] sm:min-w-[160px] md:min-w-[172px]
        h-[214px] sm:h-[232px] md:h-[248px]
        mt-4 mb-4
      "
    >
      <div className="absolute inset-0 z-10 rounded-lg bg-neutral-800/60 shadow ring-1 ring-black/30 transition-transform duration-300 group-hover:-translate-y-[2px]">
          <img
            src={item.poster}
            alt={item.title}
            className="h-full w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
    </div>
  );
}
