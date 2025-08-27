'use client';

import { useRef, useState } from 'react';
import Card from './Card';
import CardW from './Card-w';
import type { MediaItem } from '@/data/mockHome';
import MediaModal from '@/components/media/MediaModal';

type Props = {
  title: string;
  items: MediaItem[];
  ranked?: boolean;
  wide?: boolean; // 기존 prop 유지
};

export default function Row({ title, items, ranked = false, wide }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [openItem, setOpenItem] = useState<MediaItem | null>(null);

  const move = (dir: 'L'|'R') => () => {
    const el = ref.current; if (!el) return;
    const amt = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir === 'L' ? -amt : amt, behavior: 'smooth' });
  };

  return (
    <section className="px-6 py-6">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
        <div className="hidden md:flex gap-2">
          <button onClick={move('L')} className="rounded bg-white/10 px-2 py-1 hover:bg-white/20">◀</button>
          <button onClick={move('R')} className="rounded bg-white/10 px-2 py-1 hover:bg-white/20">▶</button>
        </div>
      </div>

      <div ref={ref} className="mask-x scrollbar-hide flex gap-3 overflow-x-auto scroll-smooth">
        {items.map((it, i) => 
          wide ? (<CardW key={it.id} item={it} onClick={setOpenItem}/>) : (<Card key={it.id} item={it} rank={ranked ? i + 1 : undefined} onClick={setOpenItem} />))}
      </div>

      {/* 모달 */}
      <MediaModal item={openItem} onClose={() => setOpenItem(null)} />
    </section>
  );
}
