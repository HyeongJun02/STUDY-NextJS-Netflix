'use client';
import { useEffect, useState } from 'react';
import { Search, Bell } from 'lucide-react'; // 아이콘 import

export default function AppHeader() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300
      ${
        solid ? 'bg-black/90' : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-3">
        <img
          src="/images/Netflix-logo.png"
          alt="Netflix Logo"
          className="h-12 w-auto"
        />

        <nav className="hidden md:flex items-center gap-5 text-sm text-neutral-300">
          {[
            '홈',
            '시리즈',
            '영화',
            'NEW! 요즘 대세 콘텐츠',
            '내가 찜한 리스트',
          ].map((t) => (
            <a key={t} className="hover:text-white" href="#">
              {t}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <button aria-label="검색" className="hover:text-white">
            <Search size={24} />
          </button>
          <button aria-label="알림" className="hover:text-white">
            <Bell size={24} />
          </button>
          <img
            src="https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABb7LgNLpzHz7xkzXVKN-qBXHtZn1FrKztYDok55Dd-KHfjnDvrOyX8odQSgIQIWk9nuxhl-sTdZeR6ytS58CLe6xhmGcBtiHfA.png?r=469"
            alt="Profile"
            className="h-8 w-8 object-cover rounded"
          />
        </div>
      </div>
    </header>
  );
}
