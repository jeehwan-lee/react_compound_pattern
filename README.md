# React Compound Pattern 연습

> React Compound Pattern을 구현하고 적용해보기 위한 프로젝트입니다.

## 목차

- [들어가며](#들어가며)

  - [프로젝트 소개](#1-프로젝트-소개)

  - [요구사항](#2-요구사항)

  - [사용기술](#3-사용기술)

- [구조 및 설계](#구조-및-설계)

  - [프로젝트 구조](#1-프로젝트-구조)

  - [DB 설계](#2-db-설계)

- [추후 업데이트](#추후-업데이트)

## 들어가며

### 1. 프로젝트 소개

이 프로젝트는 12월 프리온보딩 프론트엔드 챌린지를 진행하면서 배운 Compound Component Pattern을 

요구사항을 직접 정의해서 구현하고 적용해보기 위한 프로젝트입니다.

### 2. 요구사항

프로젝트의 요구사항은 다음과 같습니다.

- 음료에 대한 정보를 카드형태로 보여줍니다.

- 카드에 들어가는 정보는 이미지, 음료명, 가격, 설명이 포함됩니다.

- 하위에는 Add To Cart 버튼을 통해 장바구니에 추가하며, 품절일 경우 Sold Out 버튼을 보여줍니다.

- 만약, 음료가 Hot과 Cold 두 가지 종류가 있다면 위 버튼이 아닌 Hot or Cold? 라는 문구를 갖는 버튼을 보여주며,

  카드에 가격을 표시하지 않고 드롭다운 형태로 Hot과 Cold의 가격을 표시합니다.

- Hot or Cold? 버튼을 클릭하면 드롭다운 형태로 Hot의 가격과 Cold의 가격을 보여줍니다.

- 해당 내용을 클릭하면 장바구니에 추가하며, Hot 또는 Cold가 품절일 경우 가격 대신 Sold Out 문구를 보여줍니다.

- 장바구니 기능은 구현하지 않고 Alert창을 통해 "장바구니에 추가되었습니다." 문구만 띄워줍니다.

### 3. 사용기술

  - HTML

  - Javascript

  - React


## 구조 및 설계

### 1. 프로젝트 구조

프로젝트의는 다음과 같이 post와 refly에 대한 router로 분리하고 각각의 controller와 service를 통해

클라이언트로부터 받은 요청을 처리하고 views 디렉토리에서 클라이언트에 필요한 페이지를 전송하는 방식으로

구조를 설계했습니다.

```bash
├── app.js
├── config
│   ├── db.js
│   └── handlebars_helpers.js
├── controllers
│   ├── post_controller.js
│   └── refly_controller.js
├── routes
│   ├── post.js
│   └── refly.js
├── services
│   ├── post_service.js
│   └── refly_service.js
├── views
│   ├── layouts
│       └── main.handlebars
│   ├── detail.handlebars
│   ├── home.handlebars
│   ├── modify.handlebars
│   └── write.handlebars
└── public
```

### 2. DB 설계

- POST 테이블

|   칼럼명    |    타 입     | Null |     Key     |  설 명   |
| :---------: | :----------: | :--: | :---------: | :------: |
|     id      |     int      |  No  | Primary Key |    id    |
|    title    | varchar(45)  | Yes  |      -      |   제목   |
|   content   | varchar(200) | Yes  |      -      |   내용   |
|   writer    | varchar(45)  | Yes  |      -      |  작성자  |
|  password   | varchar(45)  | Yes  |      -      | 비밀번호 |
|    hits     |     int      | Yes  |      -      |  조회수  |
|   hearts    |     int      | Yes  |      -      | 좋아요수 |
| create_date |   datetime   |  No  |      -      | 생성일자 |
|  fileGrId   | varchar(100) |  No  |      -      | 파일그룹 |

- REFLY 테이블

|   칼럼명    |    타 입     | Null |     Key     |  설 명   |
| :---------: | :----------: | :--: | :---------: | :------: |
|     id      |     int      |  No  | Primary Key |    id    |
|   postId    |     int      |  No  | Foreign Key |  외래키  |
|   comment   | varchar(200) | Yes  |      -      | 댓글내용 |
|   writer    | varchar(45)  | Yes  |      -      |  작성자  |
|  password   | varchar(45)  | Yes  |      -      | 비밀번호 |
| create_date |   datetime   |  No  |      -      | 생성일자 |

- FILES 테이블

|  칼럼명   |    타 입     | Null |     Key     |  설 명   |
| :-------: | :----------: | :--: | :---------: | :------: |
| fileGrId  | varchar(100) |  No  | Primary Key | 파일그룹 |
|  fileId   | varchar(100) |  No  | Primary Key |  파일ID  |
| fileName  | varchar(100) | Yes  |      -      | 파일이름 |
| savedPath | varchar(100) | Yes  |      -      | 저장경로 |
