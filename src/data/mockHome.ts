export type MediaItem = {
  id: string;
  title: string;
  detail: string;
  poster: string; // 세로 포스터
  backdrop: string; // 가로 백드롭(히어로용)
};

export const HERO: MediaItem = {
  id: 'dont-look-up',
  title: '돈룩업',
  detail:
    '별다른 연구성과를 내지 못하던 천문학과 교수 랜들 민디와 그의 제자 케이트 디비아스키는 어느 날 상상을 초월하는 크기의 혜성이 지구를 향해 돌진하고 있다는 것을 알게 된다.',
  // 아무 웹 이미지 링크 사용 가능 (예시는 TMDB 표준 사이즈 경로)
  backdrop:
    'https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F12%2FNetflix-dont-look-up-new-character-poster-image-00.jpg?w=1440&cbr=1&q=90&fit=max',
  poster: 'https://image.tmdb.org/t/p/w342/6oC2K9P6u1U0f0h5VnqQOe1Nqv2.jpg',
};

/*
{ id:'', title:'', poster:'', backdrop:'', detail:'' },
*/
export const ROW_TOP10: MediaItem[] = [
  {
    id: '1',
    title: '폭군의 셰프',
    poster:
      'https://i.namu.wiki/i/wQILxontfE1MlO6RBfKzcH7VlTBwclvXNctbCVVGLpr204kRKmL47cAAEmP6p6lnfYP5OtSo8fwtspbw7U77_jxQBLtl_CbbjNVQ6-iFot3wU-Vt_I7i9e9_Q4DzixOgsYND-AGdCIKOgTgzYOXeYg.webp',
    backdrop: '',
    detail: '',
  },
  {
    id: '2',
    title: '에스콰이어',
    poster:
      'https://i.namu.wiki/i/RD6rKNNJ214NXbASCJgfHYpfvYcN7JsgeT_2si4W0yXimqgPFaCGSsBohXOSPWhn3E-CMB85EBvgcsFIiLPmfiP1RObCaO6_mwHKmxpBq2Cx0TFS5EqYI7t_OpYVlLO250oj22M0es8d4vQ7e3NFKQ.webp',
    backdrop: '',
    detail: '',
  },
  {
    id: '3',
    title: '애마',
    poster:
      'https://i.namu.wiki/i/6rx4I0_c7ee7YSoMC82ln9q1WJypuWicUEJGQ-jXs8pivV5Qq0DDfHJ23Yl4BVOagxMOyQe5uzbD90lgxCspdzOIckiVBApNIr77d9N4-1wBR9kekpPdhi7fCNPLB3nV9j5Bjx-gpkKrslUTDwonIA.webp',
    backdrop: '',
    detail: '',
  },
  {
    id: '4',
    title: '그해 우리는',
    poster:
      'https://i.namu.wiki/i/pOdWAeX72z9T7W1jowlQyQRFAyPk8pqt98P_Fxfo83sWmSgLlUB2YxRf175Opw0J_5tYNOKDyVbq52kLv709w1kH3L7SVhvLo27QTxdp8bC0ZY2-czkB7I6EnbzZ7Pj84wkaSspUfaDm5qJLRnqKbg.webp',
    backdrop: '',
    detail: '',
  },
  {
    id: '5',
    title: '진격의 거인',
    poster:
      'https://i.pinimg.com/736x/27/f8/d3/27f8d3f2e285eb81b44074c33082578d.jpg',
    backdrop: '',
    detail: '',
  },
  {
    id: '6',
    title: '트라이',
    poster: 'https://image.tmdb.org/t/p/w342/6.jpg',
    backdrop: '',
    detail: '',
  },
  {
    id: '7',
    title: '트리거',
    poster: 'https://image.tmdb.org/t/p/w342/7.jpg',
    backdrop: '',
    detail: '',
  },
  {
    id: '8',
    title: '괴수 8호',
    poster: 'https://image.tmdb.org/t/p/w342/8.jpg',
    backdrop: '',
    detail: '',
  },
  {
    id: '9',
    title: '귀멸의 칼날',
    poster: 'https://image.tmdb.org/t/p/w342/9.jpg',
    backdrop: '',
    detail: '',
  },
  {
    id: '10',
    title: '악의 마음을 읽는자들',
    poster: 'https://image.tmdb.org/t/p/w342/10.jpg',
    backdrop: '',
    detail: '',
  },
];

export const ROW_CONTINUE: MediaItem[] = [
  {
    id: 'a',
    title: '웬즈데이',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUAC9EWlFiqOqh7Q6KuMgzpugwCBsBZvDnfG-vm4EE8-yKUDgRnEEY4VkgHF39pwtib77ekvwQx1izTzYMAFNzSU4LMHUu05nKpOV2KrFhbsiM56MmVPFvzNkSo9Z55k5UJ64awcg4ZnoCdl_EEecpwVD99dhiz4tD0mY_0ewhuUw4vtGh09JNPDapZWT0BBtcYzaPQWp3U.jpg?r=bfa',
    backdrop: '',
    detail: '',
  },
  {
    id: 'b',
    title: '기생충',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbEMLH3v_rh8xnTLuxcSGnMaGe30Oo07oJNnGgso8rVC34hCP5-SSv8y838_aR5BMTYoFZdsleetf1XHYqlXeSgPfHlsmiz4qIU.webp?r=720',
    backdrop: '',
    detail: '',
  },
  {
    id: 'c',
    title: '미스터션샤인',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZgbsQOs2PnybPcB1tyaEpYfzBi7WKzuckCA3zBdxN7ii5z3llt-rbAIv8QYYcVfnNzJr8-K3p8KEEhUscCYpdo9F5UWRarc-qE.webp?r=050',
    backdrop: '',
    detail: '',
  },
  {
    id: 'd',
    title: '솔로지옥',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeXTGITfBq5ScPdPyFKDcOir8yIWsPp2KKBK_K83ioVCdU972YF0_3AUvT8jz8SAEzyCq5G21QjY7R-8-nbLhtvecWD91YKl5cA.webp?r=f62',
    backdrop: '',
    detail: '',
  },
];

export const ROW_BINGE: MediaItem[] = [
  {
    id: 'a',
    title: '미스터션샤인',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZgbsQOs2PnybPcB1tyaEpYfzBi7WKzuckCA3zBdxN7ii5z3llt-rbAIv8QYYcVfnNzJr8-K3p8KEEhUscCYpdo9F5UWRarc-qE.webp?r=050',
    backdrop: '',
    detail: '',
  },
  {
    id: 'b',
    title: '트리거',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeyYOu_w8Rb7a7lcbsIpETpl9ZCeUD4VtEE5pUqmHdQW45gYQtS85fZZJ25T15f_Vpy8X6lAr0LLIvsJUfzCaVR29R11KmuLVhZw8nlTVZ1LMMgFvkzG13hPmWi9xO4Ke9SsjBUr_wXSh3fBY67m86iOeb40EcakBnzHfOxZP0HNlURH3pdy9E6XZsCLEUo.jpg?r=f05',
    backdrop: '',
    detail: '',
  },
  {
    id: 'c',
    title: '귀멸의 칼날',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd72e4Q7gaKlUpFN5gxfRDifykAmS4-nEzQv93R9pxbSPT8ptrmyaGmrzo7C8r4IZ3NqIApvCCeRnLt5HHVxHZ-lY82Fa3LQTolDQyOtqxDnfR7TICy1hCi370XGP2Ur_P41lR42wDKvkFn9f-NO-qWhP6kgDC8F8e4.webp?r=6b9',
    backdrop: '',
    detail: '',
  },
  {
    id: 'd',
    title: '시그널',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbu5TBJm8yl9-0GLWTxXb-DvrI03P2tPv4ebbcGAHut1XhkYppqBnE5moC68jdWA-PlY2uNOuHt91IRy9a7Rc1o_hKWVSrQNkEM.webp?r=f9e',
    backdrop: '',
    detail: '',
  },
  {
    id: 'e',
    title: '나의 아저씨',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZVaAY55Wh3y6OpnhttRtr2yOzUOKY0vP6TDDcwfo78mQAyK2y_4IeiOxluiB5RtikiYYwby-df8t4Tg2tkFMVY9xCwFpzH9Yw0.webp?r=2ad',
    backdrop: '',
    detail: '',
  },
  {
    id: 'f',
    title: '도깨비',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ-620rn4qc0tnZRDmNL5tzdJpacOSKcdX7dgwvnYPYzp1VaJVtb_i4yhsHwcos4FAoOA9j_a35ozqKDQHooZEKAq6sCtqSJJ3U.webp?r=d9d',
    backdrop: '',
    detail: '',
  },
  {
    id: 'g',
    title: 'SKY캐슬',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbK5IhXeEiashjm6JCCPPq2t1JR9ihA3CMe0ozYAgj1tj2b4RCqcKU9hvFAzm5pPUWbMgH2LvGCcuXl3vdVZXL6A3wbW7Q-CM3U.webp?r=1e0',
    backdrop: '',
    detail: '',
  },
];

export const ROW_ONLY: MediaItem[] = [
  {
    id: 'a',
    title: '케이팝 데몬 헌터스',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABW0zGMsApBfdegqOnWStN_u1cFN4xiIEvRJHACeFwDknZZ4TmRbbIRAqTnTC88GqS8tXtrN9TIfBA1n50vYJlQANloVjEHAHI89uu3CkcbxPglSa28OxNxcik0TNb3jJPEZ-XM0xfGB9WwlCKFaTk7GyTfhaqFmve2weQB0mgiripwYncw28fhM3HqjWa_Q.jpg?r=1e1',
    backdrop: '',
    detail: '',
  },
  {
    id: 'b',
    title: '모태솔로지만 연애는 하고싶어',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQPK1gxSiZXYTi-0zzO6rv4xqtOEbEGXG6eatIVANr28-v2lAxvgSg23r1_aFAbWkG5cBov03VUc3lFeBJtlR4VA7joyxYFFMBiFoKp9X2oJXYTn9enjc1Gq4LeNNQLPXsuP-YBWN1jiJOY2x7-xtiyEEpfCi4vjF0YTcueGedjrol3cipMMcpSJ8ifrlqmK5WLcf_LTx5M9Im6Y1DH38YEkC4zP8WRzP7C_u0aLMvY6imbSolyn6_eVw4SNi_iWxVOBnztSwoIPjVYp-Ob9pbnSVeZoZocKyZzNm-3m0LRjfE-Tklbz1QQD5giAtlrzs6zA8T1wKPhP9MdGXJjtWThPKQ8ghdtc5BfxUR3AEKcvMTGemc7K.jpg?r=4b7',
    backdrop: '',
    detail: '',
  },
  {
    id: 'c',
    title: '폭싹 속았수다',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd98oKgCH9JvkO60g69tQa7G98g6iIPKJY3EeKrDoxx4fuJZJ22WuDyVEEGykc9mGgQZHFMUZeS5Jn3HdrQOD_AVxYYRCcpjBQQajXeIomJVTIkH9oUZhOAWe57dkaVZLQl1.jpg?r=c46',
    backdrop: '',
    detail: '',
  },
  {
    id: 'd',
    title: '중증외상센터',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ2jp_Xc04eyhodiAnDy2a0ESfSQsj5Fq5mXeb1BaCGCX7bxfozElyeH0Hg3YRFLTgC0G3_A46Jh_gsWRpPvVJ7iHy-sUyp_3cuvOXEUFCmVxf0IbplZLNE9gxf0oLG49_5P.jpg?r=1eb',
    backdrop: '',
    detail: '',
  },
  {
    id: 'e',
    title: '아케인',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUK4-bvabFrsBRj6TxNfalwIrcgb01wPJsPPW0aNaHvjjltfz9mBXCgEZeplzWe0aMOJiSHTSJ_2Ovu1GUHOvhb35IToI9_9OoHofSlgy6rfkpBYPs-k9zVUK7gaVv-Ine5c.jpg?r=445',
    backdrop: '',
    detail: '',
  },
  {
    id: 'f',
    title: '더 글로리',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWJOrlCI_Pdcq_dkaqA51xIirzU5tLMvKZd54zkrkjRE_UT03cwX6BCr2wwZI5rEVbwyy51bgpJ76pCYX9qLhDr1UHgqytkg-td8HjBvLNY0HvTtTa1I9PUtoVkD0iSH37au.jpg?r=396',
    backdrop: '',
    detail: '',
  },
  {
    id: 'g',
    title: '퀸스갬빗',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQjvtzn4Ex8xyTXl6trvG9SSNUMNd87VM63lAXi_FvTWsL-EMMrJ1HDv8T5scXslP-bMPEJu5QxJJ9B7fEQMRDDXw9cFMWTPppKThyw1ZCHI4o4croBMiu6dmw1JQaqtTwYx.jpg?r=6a1',
    backdrop: '',
    detail: '',
  },
];
