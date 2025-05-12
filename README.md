# DaliyTodoApp
このリポジトリはDailyTodoAppのフロントエンドのリポジトリです。

## 環境構築
### モック環境での実行の場合
1. `npm install`
2. `npm run mock`
3. `npm run storybook`（storybook起動の場合）

### AWS上のAPIと接続の場合
#### インフラ環境の構築
1. [DailyTodoAppInfra](https://github.com/moyamush/daily-todo-app-infra.git)をクローン
2. インフラ環境の構築（詳細は1のREADME.mdを参照）

#### フロントエンドの構築
1. `npm install`
2. `.env/.env.dev`の`NEXT_PUBLIC_API_ENDPOINT`を上記で構築したインフラ環境のAPIのエンドポイントに変更
2. `npm run dev`
3. `npm run storybook`（storybook起動の場合）

## フォルダ構成
```
daily-todo-app                   : ルートディレクトリ
├── public                       
└── src                          
    ├── api                      : APIエンドポイントの管理
    │   ├── status
    │   ├── tag
    │   ├── todo
    │   └── ...
    ├── app                      : ページを管理
    │   └── (auth)               : 認証系のページを管理
    │       └── sign-in
    │           ├── _components  : 画面特有のコンポーネントを管理
    │           ├── _hooks       : カスタムフックを管理
    │           └── _schemas     : スキーマを管理
    ├── components               : アプリ共通のコンポーネントを管理
    │   ├── Calendar
    │   ├── CreateTodo
    │   ├── EditTodo
    │   ├── HomeHeader
    │   ├── PageTitle
    │   ├── SelectField
    │   ├── TextField
    │   ├── TodoTable
    │   ├── ui
    │   └── ...
    ├── hooks                    : アプリ共通のカスタムフックを管理
    ├── lib                      : 共通ライブラリを管理
    │   ├── api
    │   └── ...
    ├── mocks                    : MSWのモックを管理
    │   └── handlers
    ├── providers                : コンテキストを管理
    └── stores                   : 状態管理を管理
```