export type MediaItem = {
  id: string;
  title: string;
  detail: string;
  poster: string;   // 세로 포스터
  backdrop: string; // 가로 백드롭(히어로용)
};

export const HERO: MediaItem = {
  id: 'dont-look-up',
  title: '돈룩업',
  detail: '별다른 연구성과를 내지 못하던 천문학과 교수 랜들 민디와 그의 제자 케이트 디비아스키는 어느 날 상상을 초월하는 크기의 혜성이 지구를 향해 돌진하고 있다는 것을 알게 된다.',
  // 아무 웹 이미지 링크 사용 가능 (예시는 TMDB 표준 사이즈 경로)
  backdrop: 'https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F12%2FNetflix-dont-look-up-new-character-poster-image-00.jpg?w=1440&cbr=1&q=90&fit=max',
  poster:   'https://image.tmdb.org/t/p/w342/6oC2K9P6u1U0f0h5VnqQOe1Nqv2.jpg'
};

export const ROW_TOP10: MediaItem[] = [
  { id:'1', title:'폭군의 셰프', poster:'https://i.namu.wiki/i/wQILxontfE1MlO6RBfKzcH7VlTBwclvXNctbCVVGLpr204kRKmL47cAAEmP6p6lnfYP5OtSo8fwtspbw7U77_jxQBLtl_CbbjNVQ6-iFot3wU-Vt_I7i9e9_Q4DzixOgsYND-AGdCIKOgTgzYOXeYg.webp', backdrop:'', detail:'' },
  { id:'2', title:'에스콰이어', poster:'https://i.namu.wiki/i/RD6rKNNJ214NXbASCJgfHYpfvYcN7JsgeT_2si4W0yXimqgPFaCGSsBohXOSPWhn3E-CMB85EBvgcsFIiLPmfiP1RObCaO6_mwHKmxpBq2Cx0TFS5EqYI7t_OpYVlLO250oj22M0es8d4vQ7e3NFKQ.webp', backdrop:'', detail:'' },
  { id:'3', title:'애마', poster:'https://i.namu.wiki/i/6rx4I0_c7ee7YSoMC82ln9q1WJypuWicUEJGQ-jXs8pivV5Qq0DDfHJ23Yl4BVOagxMOyQe5uzbD90lgxCspdzOIckiVBApNIr77d9N4-1wBR9kekpPdhi7fCNPLB3nV9j5Bjx-gpkKrslUTDwonIA.webp', backdrop:'', detail:'' },
  { id:'4', title:'그해 우리는', poster:'https://i.namu.wiki/i/pOdWAeX72z9T7W1jowlQyQRFAyPk8pqt98P_Fxfo83sWmSgLlUB2YxRf175Opw0J_5tYNOKDyVbq52kLv709w1kH3L7SVhvLo27QTxdp8bC0ZY2-czkB7I6EnbzZ7Pj84wkaSspUfaDm5qJLRnqKbg.webp', backdrop:'', detail:'' },
  { id:'5', title:'진격의 거인', poster:'https://i.pinimg.com/736x/27/f8/d3/27f8d3f2e285eb81b44074c33082578d.jpg', backdrop:'', detail:'' },
  { id:'6', title:'트라이', poster:'https://image.tmdb.org/t/p/w342/6.jpg', backdrop:'', detail:'' },
  { id:'7', title:'트리거', poster:'https://image.tmdb.org/t/p/w342/7.jpg', backdrop:'', detail:'' },
  { id:'8', title:'괴수 8호', poster:'https://image.tmdb.org/t/p/w342/8.jpg', backdrop:'', detail:'' },
  { id:'9', title:'귀멸의 칼날', poster:'https://image.tmdb.org/t/p/w342/9.jpg', backdrop:'', detail:'' },
  { id:'10', title:'악의 마음을 읽는자들', poster:'https://image.tmdb.org/t/p/w342/10.jpg', backdrop:'', detail:'' },
];

export const ROW_CONTINUE: MediaItem[] = [
  { id:'a', title:'웬즈데이', poster:'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUAC9EWlFiqOqh7Q6KuMgzpugwCBsBZvDnfG-vm4EE8-yKUDgRnEEY4VkgHF39pwtib77ekvwQx1izTzYMAFNzSU4LMHUu05nKpOV2KrFhbsiM56MmVPFvzNkSo9Z55k5UJ64awcg4ZnoCdl_EEecpwVD99dhiz4tD0mY_0ewhuUw4vtGh09JNPDapZWT0BBtcYzaPQWp3U.jpg?r=bfa', backdrop:'', detail:'' },
  { id:'b', title:'기생충',   poster:'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbEMLH3v_rh8xnTLuxcSGnMaGe30Oo07oJNnGgso8rVC34hCP5-SSv8y838_aR5BMTYoFZdsleetf1XHYqlXeSgPfHlsmiz4qIU.webp?r=720', backdrop:'', detail:'' },
  { id:'c', title:'미스터션샤인', poster:'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZgbsQOs2PnybPcB1tyaEpYfzBi7WKzuckCA3zBdxN7ii5z3llt-rbAIv8QYYcVfnNzJr8-K3p8KEEhUscCYpdo9F5UWRarc-qE.webp?r=050', backdrop:'', detail:'' },
  { id:'d', title:'솔로지옥', poster:'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeXTGITfBq5ScPdPyFKDcOir8yIWsPp2KKBK_K83ioVCdU972YF0_3AUvT8jz8SAEzyCq5G21QjY7R-8-nbLhtvecWD91YKl5cA.webp?r=f62', backdrop:'', detail:'' },
];
