# React Compound Pattern 연습

> React Compound Pattern을 구현하고 적용해보기 위한 프로젝트입니다.

## 목차

- [들어가며](#들어가며)

  - [프로젝트 소개](#1-프로젝트-소개)

  - [요구사항](#2-요구사항)

  - [사용기술](#3-사용기술)

- [구조 및 설계](#구조-및-설계)

  - [프로젝트 구조](#1-프로젝트-구조)

  - [데이터](#2-데이터)

- [구현방법](#구현방법)

## 들어가며

### 1. 프로젝트 소개

이 프로젝트는 원티드에서 진행한 12월 프리온보딩 프론트엔드 챌린지를 통해 배운 리액트 디자인 패턴 중에

Compound Component Pattern을 직접 구현하고 적용해보기 위해 요구사항을 직접 정의하고 개발한 프로젝트입니다.

### 2. 요구사항

프로젝트의 요구사항은 다음과 같습니다.

- 음료에 대한 정보를 카드형태로 보여줍니다.

- 카드에 들어가는 정보는 이미지, 음료명, 가격, 설명이 포함됩니다.

- 하위에는 Add To Cart 버튼을 통해 장바구니에 추가하며, 품절일 경우 Sold Out 버튼을 보여줍니다.

  ![image](https://github.com/jeehwan-lee/react_compound_pattern/assets/26796099/f918c3ea-62eb-492e-a8e8-d454ce7afebe)

- 장바구니는 구현하지 않고 Alert창을 통해 "장바구니에 추가되었습니다" 또는 "품절되었습니다" 문구만 띄워줍니다.

- 만약, 음료가 Hot과 Cold 두 가지 종류가 있다면 위 버튼이 아닌 Hot or Cold? 라는 문구를 갖는 버튼을 보여주며,

  카드에 가격을 표시하지 않고 드롭다운 형태로 Hot과 Cold의 가격을 표시합니다.

- Hot or Cold? 버튼을 클릭하면 드롭다운 형태로 Hot의 가격과 Cold의 가격을 보여줍니다.

- Hot 또는 Cold가 품절일 경우 가격 대신 Sold Out 문구를 보여주며, 해당 드롭다운 내용을 클릭할 수 있습니다.

  ![image](https://github.com/jeehwan-lee/react_compound_pattern/assets/26796099/6a42c779-c143-49be-90ff-8f74c28366c8)

- 해당 내용을 클릭하면 Alert창을 통해 "장바구니에 추가되었습니다" 또는 "품절되었습니다" 문구를 띄워줍니다.

### 3. 사용기술

  - HTML

  - Javascript

  - React

## 구조 및 설계

### 1. 프로젝트 구조

```bash
├── node_modules
├── public
└── src
    ├── api
    ├── components
        ├── card
        └── container
    ├── db
    ├── hook
    ├── index.js
    └── App.js
```

### 2. 데이터

- 데이터는 아래와 같습니다.

- subContent는 Hot 과 Cold 종류를 갖는 음료만 갖고 있습니다.

- subContent를 갖는 경우, 해당 음료의 price와 soldOut은 null이며, subContent에서 데이터를 갖습니다.

```bash
[
  {
    "id": 1,
    "name": "Espresso",
    "content": "볶은 커피를 곱게 분쇄하여 고압의 물을 사용하여 짧은 시간 동안 추출한 음료입니다.",
    "price": "3000",
    "img": "/img/espresso.png",
    "soldOut": "N"
  },
  {
    "id": 2,
    "name": "Americano",
    "content": "에스프레소 샷 두 개를 추출해 뜨거운 물을 재빠르게 부어 만든 음료입니다.",
    "price": null,
    "img": "/img/americano.png",
    "soldOut": null,
    "subContent": [
      { "id": 1, "name": "HOT", "price": "3500", "soldOut": "N" },
      { "id": 2, "name": "COLD", "price": "4000", "soldOut": "N" }
    ]
  },
  ...
]
```

## 구현방법
