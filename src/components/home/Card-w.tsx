import type { MediaItem } from '@/data/mockHome';

export default function CardW({ item, rank }: { item: MediaItem; rank?: number }) {
  return (
    <div className="group relative min-w-[260px] sm:min-w-[280px] md:min-w-[300px]
                    h-[174px] sm:h-[186px] md:h-[200px]">
      {/* 카드 그림자 & 라운드 */}
      <div className="absolute inset-0 rounded-md bg-neutral-800 shadow
                      transition-transform duration-300 group-hover:-translate-y-1">
        <img src={item.poster} alt={item.title}
             className="h-full w-full rounded-md object-cover
                        transition-transform duration-300 group-hover:scale-[1.06]" />
      </div>

      {/* Top10용 거대 숫자 */}
      {typeof rank === 'number' && (
        <div className="pointer-events-none absolute -left-3 -bottom-8 select-none
                        text-[130px] font-black leading-none tracking-[-0.04em]
                        text-black/50 drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]">
          {rank}
        </div>
      )}
    </div>
  );
}
