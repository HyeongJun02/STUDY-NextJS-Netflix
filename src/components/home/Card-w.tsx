import type { MediaItem } from '@/data/mockHome';

export default function CardW({
  item,
  rank,
  onClick,
}: {
  item: MediaItem;
  rank?: number;
  onClick?: (it: MediaItem) => void;
}) {
  return (
    <div
      role="button"
      onClick={() => onClick?.(item)}
      className="
        group relative cursor-pointer
        min-w-[203] sm:min-w-[223] md:min-w-[243px]
        h-[102px] sm:h-[114px] md:h-[136px]
        mt-2 mb-2
      "
    >
      <div
        className="absolute inset-0 rounded-md bg-neutral-800 shadow
                      transition-transform duration-300 group-hover:-translate-y-1"
      >
        <img
          src={item.poster}
          alt={item.title}
          className="h-full w-full rounded-md object-cover
                        transition-transform duration-300 group-hover:scale-[1.06]"
        />
      </div>
    </div>
  );
}
