'use client';

import { useEffect } from 'react';
import type { MediaItem } from '@/data/mockHome';
import { X, Play, Plus, ThumbsUp, Volume2 } from 'lucide-react';

type Props = {
  item: MediaItem | null;
  onClose: () => void;
};

export default function MediaModal({ item, onClose }: Props) {
  // 열렸을 때 ESC로 닫기 + 스크롤 잠금
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog" aria-modal="true"
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto"
    >
      {/* 뒤 배경: 어둡게 + 흐림 */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* 패널 */}
      <div className="relative z-[61] mx-4 my-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-[#111111] shadow-2xl">
        {/* 상단 비주얼 */}
        <div className="relative h-[60vh] min-h-[300px]">
          <img
            src={item.backdrop || item.poster}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* 그라디언트 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/70 via-transparent to-transparent" />

          {/* 닫기 버튼 */}
          <button
            onClick={onClose}
            aria-label="닫기"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80"
          >
            ✕
          </button>

          {/* 타이틀 + CTA */}
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="mb-4 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
              {item.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded bg-white px-5 py-2.5 font-bold text-black hover:bg-white/90">
                <Play size={20} fill="black" /> 재생
              </button>
              <button className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30">
                <Plus size={22} />
              </button>
              <button className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30">
                <ThumbsUp size={20} />
              </button>
              <button className="ml-auto grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30">
                <Volume2 size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* 본문 */}
        <div className="grid gap-6 p-6 md:grid-cols-[1fr,0.9fr]">
          {/* 왼쪽: 설명 */}
          <div>
            <div className="mb-2 flex items-center gap-3 text-sm text-neutral-300">
              <span>2018</span>
              <span className="rounded border border-white/30 px-1.5 py-0.5 text-xs">15+</span>
              <span>에피소드 24개</span>
              <span className="rounded border border-white/30 px-1.5 py-0.5 text-xs">HD</span>
            </div>
            <p className="text-neutral-200">
              {item.detail ??
                '데이터가 없어 임시 설명을 표시합니다. 옛 시대를 배경으로 한 서사와 웅장한 스케일, 섬세한 감정선을 담은 작품입니다.'}
            </p>
          </div>

          {/* 오른쪽: 메타(가짜 데이터) */}
          <div className="space-y-2 text-sm text-neutral-300">
            <div><span className="text-neutral-400">출연:</span> 이병헌, 김태리, 유연석, 더 보기</div>
            <div><span className="text-neutral-400">장르:</span> 로맨틱한 드라마, 정치 시리즈, 시대극</div>
            <div><span className="text-neutral-400">시리즈 특징:</span> 감성을 파고드는 음악, 서스펜스</div>
          </div>
        </div>
      </div>
    </div>
  );
}
