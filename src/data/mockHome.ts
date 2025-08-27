export type MediaItem = {
  id: string;
  title: string;
  detail: string;
  poster: string; // 세로 포스터
  backdrop: string; // 가로 백드롭(히어로용)
};

export const HERO: MediaItem = {
  id: 'INCEPTION',
  title: '인셉션',
  detail:
    '타인의 꿈에 들어가 생각을 훔치는 특수 보안요원 코브. 그를 이용해 라이벌 기업의 정보를 빼내고자 하는 사이토는 코브에게 생각을 훔치는 것이 아닌, 생각을 심는 ‘인셉션’ 작전을 제안한다.',
  // 아무 웹 이미지 링크 사용 가능 (예시는 TMDB 표준 사이즈 경로)
  backdrop:
    'https://i.namu.wiki/i/UNZI0xW1ccszUZm8k9JWWcCCVA_3FoBXKbklCmlpor4QKPFerxAZO9Kwpb1JlNXpFeqgvM7BXB9KSnvGC5qJnt6OxeMZZBSewIrR0HFS_qLb-JArpP-TmDYG9w34ZrD_TdF7bdtKhtHiYAUdjE7ZRQ.webp',
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
    detail:
      '최고의 순간 과거로 타임슬립한 셰프가 최악의 폭군이자 절대 미각 소유자인 왕을 만나며 벌어지는 서바이벌 판타지 로코',
  },
  {
    id: '2',
    title: '에스콰이어',
    poster:
      'https://i.namu.wiki/i/RD6rKNNJ214NXbASCJgfHYpfvYcN7JsgeT_2si4W0yXimqgPFaCGSsBohXOSPWhn3E-CMB85EBvgcsFIiLPmfiP1RObCaO6_mwHKmxpBq2Cx0TFS5EqYI7t_OpYVlLO250oj22M0es8d4vQ7e3NFKQ.webp',
    backdrop: '',
    detail:
      '정의롭고 당차지만 사회생활에 서툰 신입 변호사 효민이 온 세상에 냉기를 뿜어대지만 실력만큼은 최고인 파트너 변호사 석훈을 통해 완전한 변호사로 성장해 나가는 이야기',
  },
  {
    id: '3',
    title: '애마',
    poster:
      'https://i.namu.wiki/i/6rx4I0_c7ee7YSoMC82ln9q1WJypuWicUEJGQ-jXs8pivV5Qq0DDfHJ23Yl4BVOagxMOyQe5uzbD90lgxCspdzOIckiVBApNIr77d9N4-1wBR9kekpPdhi7fCNPLB3nV9j5Bjx-gpkKrslUTDwonIA.webp',
    backdrop: '',
    detail:
      '1980년대 한국을 강타한 에로영화의 탄생 과정 속, 화려한 스포트라이트에 가려진 어두운 현실에 용감하게 맞짱 뜨는 톱스타 ‘희란’과 신인 배우 ‘주애’의 이야기를 그린 넷플릭스 시리즈',
  },
  {
    id: '4',
    title: '그해 우리는',
    poster:
      'https://i.namu.wiki/i/pOdWAeX72z9T7W1jowlQyQRFAyPk8pqt98P_Fxfo83sWmSgLlUB2YxRf175Opw0J_5tYNOKDyVbq52kLv709w1kH3L7SVhvLo27QTxdp8bC0ZY2-czkB7I6EnbzZ7Pj84wkaSspUfaDm5qJLRnqKbg.webp',
    backdrop: '',
    detail:
      '함께해서 더러웠고 다신 보지 말자!로 끝났어야 할 인연이 10년이 흘러 카메라 앞에 강제 소환 되어 펼쳐지는 청춘 다큐를 가장한 아찔한 로맨스 드라마',
  },
  {
    id: '5',
    title: '진격의 거인',
    poster:
      'https://i.namu.wiki/i/eK3qBzqU6V_oh3Bn9OUjOCcmeTCYd-V2YMNTSt_nSf_tX9rCKh8loVkK46j8PhrYn8PNtlVJbYcNzC5j3g6jEjBecWoqd0Ht1OmVzegRyNEj5cXezP2cpEu9U-_YVzuKkC40LgvhabbZpvH8KpOSFQ.webp',
    backdrop: '',
    detail:
      "'그 거인은 언제 어떤 시대에도 자유를 갈망하며 나아갔다. 자유를 위해 싸웠다. 그 이름은 진격의 거인'. 드디어 밝혀진 벽 밖의 진실과 거인의 정체",
  },
  {
    id: '6',
    title: '트라이',
    poster:
      'https://i.namu.wiki/i/z8veKhUgyEO2N04-rKAxnmsfWuVgTzbZC50LKtCMdfgilfXEpDC_Q_fvPfFWr1YPk2ZBPqOMdqJE2i3PB4C61g.webp',
    backdrop: '',
    detail:
      '예측불허 괴짜감독 주가람과 만년 꼴찌 한양체고 럭비부가 전국체전 우승을 향해 질주하는 코믹 성장 스포츠 드라마',
  },
  {
    id: '7',
    title: '트리거',
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpQTgSUM1z7tFDBYUl6CHjjeYG1r176q69Q&s',
    backdrop: '',
    detail:
      '대한민국에서 출처를 알 수 없는 불법 총기가 배달되고 총기 사건이 끊임없이 발생하는 가운데 각자의 이유로 총을 든 두 남자의 이야기를 그린 총기 액션 재난 스릴러',
  },
  {
    id: '8',
    title: '괴수 8호',
    poster:
      'https://i.namu.wiki/i/hAyIWH5Dli1UHoNnYkgG_I7MfmsBu-Qap-dVm0-yDx9LvtQZ3NQytYeUdP9q7TaCY1t4Mho_Lq4uvE-pFQs8Yw.webp',
    backdrop: '',
    detail: '',
  },
  {
    id: '9',
    title: '귀멸의 칼날',
    poster:
      'https://i.namu.wiki/i/9bBtkQp6BA81SHCstH69Ne6lxlgWUNzEZbTuKLC-DmgkKvEMQQE_WGR6lKS0za_0vJXR81w96WzmMyGpOoHjCA.webp',
    backdrop: '',
    detail:
      '다가오는 결전을 향한 탄지로와 귀살대원들의 합동 강화 훈련을 그린 애니메이션',
  },
  {
    id: '10',
    title: '악의 마음을 읽는자들',
    poster:
      'https://i.namu.wiki/i/G1Mh3xaKHpTue5tpa2JV3udRP1yVbNeSp-TqeryNWYCL52FwuSwtpE9uKRYIDUwrJBjNR5Kg8bPuOPnepIsuyQ.webp',
    backdrop: '',
    detail:
      '대한민국을 공포에 빠뜨린 동기없는 살인이 급증하던 시절, 최초의 프로파일러가 연쇄살인범들과 위험한 대화를 시작한다. 악의 정점에 선 이들의 마음 속을 치열하게 들여봐야만 했던 프로파일러의 이야기.',
  },
];

export const ROW_CONTINUE: MediaItem[] = [
  {
    id: 'a',
    title: '웬즈데이',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUAC9EWlFiqOqh7Q6KuMgzpugwCBsBZvDnfG-vm4EE8-yKUDgRnEEY4VkgHF39pwtib77ekvwQx1izTzYMAFNzSU4LMHUu05nKpOV2KrFhbsiM56MmVPFvzNkSo9Z55k5UJ64awcg4ZnoCdl_EEecpwVD99dhiz4tD0mY_0ewhuUw4vtGh09JNPDapZWT0BBtcYzaPQWp3U.jpg?r=bfa',
    backdrop: '',
    detail:
      '새 학기를 맞아 네버모어 아카데미에 돌아온 웬즈데이 아담스가 자신을 둘러싼 더 오싹하고 기이해진 미스터리를 마주한 가운데, 그 뒤에 숨겨진 진실을 찾아가는 이야기를 담은 넷플릭스 시리즈',
  },
  {
    id: 'b',
    title: '기생충',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbEMLH3v_rh8xnTLuxcSGnMaGe30Oo07oJNnGgso8rVC34hCP5-SSv8y838_aR5BMTYoFZdsleetf1XHYqlXeSgPfHlsmiz4qIU.webp?r=720',
    backdrop: '',
    detail:
      '전원백수로 살 길 막막하지만 사이는 좋은 기택(송강호) 가족. 장남 기우(최우식)에게 명문대생 친구가 연결시켜 준 고액 과외 자리는 모처럼 싹튼 고정수입의 희망이다. 온 가족의 도움과 기대 속에 박사장(이선균) 집으로 향하는 기우. 글로벌 IT기업 CEO인 박사장의 저택에 도착하자 젊고 아름다운 사모님 연교(조여정)가 기우를 맞이한다. 그러나 이렇게 시작된 두 가족의 만남 뒤로, 걷잡을 수 없는 사건이 기다리고 있었으니…',
  },
  {
    id: 'c',
    title: '미스터션샤인',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZgbsQOs2PnybPcB1tyaEpYfzBi7WKzuckCA3zBdxN7ii5z3llt-rbAIv8QYYcVfnNzJr8-K3p8KEEhUscCYpdo9F5UWRarc-qE.webp?r=050',
    backdrop: '',
    detail:
      '신미양요(1871년) 때 군함에 승선해 미국에 떨어진 한 소년이 미국 군인 신분으로 자신을 버린 조국인 조선으로 돌아와 주둔하며 벌어지는 일을 그린 드라마',
  },
  {
    id: 'd',
    title: '솔로지옥',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeXTGITfBq5ScPdPyFKDcOir8yIWsPp2KKBK_K83ioVCdU972YF0_3AUvT8jz8SAEzyCq5G21QjY7R-8-nbLhtvecWD91YKl5cA.webp?r=f62',
    backdrop: '',
    detail:
      '커플이 되어야만 나갈 수 있는 외딴 섬, ‘지옥도’에서 펼쳐질 솔로들의 솔직하고 화끈한 데이팅 리얼리티쇼.',
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
    detail:
      '전 세계를 열광케 하는 K‑POP 걸그룹 헌트릭스의 멤버 루미, 미라, 조이는 화려한 무대 뒤에서 악령을 사냥하는 비밀 임무를 이어가다가, 새로운 라이벌 보이밴드 사자 보이즈의 정체가 사실은 악마라는 충격적 진실을 알게 된다.',
  },
  {
    id: 'b',
    title: '모태솔로지만 연애는 하고싶어',
    poster:
      'https://occ-0-8133-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQPK1gxSiZXYTi-0zzO6rv4xqtOEbEGXG6eatIVANr28-v2lAxvgSg23r1_aFAbWkG5cBov03VUc3lFeBJtlR4VA7joyxYFFMBiFoKp9X2oJXYTn9enjc1Gq4LeNNQLPXsuP-YBWN1jiJOY2x7-xtiyEEpfCi4vjF0YTcueGedjrol3cipMMcpSJ8ifrlqmK5WLcf_LTx5M9Im6Y1DH38YEkC4zP8WRzP7C_u0aLMvY6imbSolyn6_eVw4SNi_iWxVOBnztSwoIPjVYp-Ob9pbnSVeZoZocKyZzNm-3m0LRjfE-Tklbz1QQD5giAtlrzs6zA8T1wKPhP9MdGXJjtWThPKQ8ghdtc5BfxUR3AEKcvMTGemc7K.jpg?r=4b7',
    backdrop: '',
    detail:
      '연애 경험 제로 청년들이 6주간의 코칭과 9일의 합숙 프로그램 속에서 감정의 파도와 자기 성장을 경험하며 ‘진짜 첫사랑’을 찾아 나서는 리얼 연애 도전기다.',
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
    detail:
      '하루하루 위태롭기만 하던 붕괴 직전의 병원에서, 전설 속 골든아워를 사수하던 외상센터가 전직 군의사의 리더십 아래 다시 일어나 외상 환자의 생명을 되살리는 극한의 응급 구조 드라마로 재건된다.',
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
