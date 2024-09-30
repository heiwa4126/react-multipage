# react-multipage

React(+Vite) だけで本当のマルチページのサイトを作る例。

<https://heiwa4126.github.io/react-multipage/> として GitHub Pages に発行してあります。

## 想定される用途

- react-router-dom でない。
- 各ページをブックマーク可能にしたい (react-router-dom の HashRouter は RFC 3986 的に微妙だし、アンカーが使えなくなるし)
- Next.js や Remix はめんどい (覚えるのも配置も)
- SSR,SSG いらない。CSR と本当に静的なページだけあればいい
- 「ページ」数もあまり多くない。

というようなケースで使える手法。

「複数 SPA を配置する」ような状態なので

- state は何かステートライブラリなり cookie なりで共有する (2 個目のボタンとして実装してみた)
- コードや chunks は共有できるよう考える

べき。

## 開発

Vite の普通。pnpm でなくても npm でも Bun でも OK。

```bash
pnpm i
pnpm dev
pnpm run build & pnpm preview
```

## 404 ページのメモ

404 ページなどは、配置する環境に左右される。それはしょうがない。

`pnpm dev` または `pnpm build && pnpm preview` だと、存在しないページは index.html になる。

実際に配置した場合に近い
`pnpm build && http-server dev/` だと 存在しないページは 404.html になる。

あといま 404.html が CSS やコードの共有用に JSX になってるけど、
これ純粋に public/404.html でもいいのでは。
状況によって変えてください。

## TODO

いまのままだと HTML がプロジェクトルートに散らばる。
例えば ./html/index.html にすると./dist/html/index.html にビルドされてしまう。
Rollup の設定でどうにかならないか考える。

## 参考

- [マルチページアプリ - 本番環境用のビルド | Vite](https://ja.vitejs.dev/guide/build.html#multi-page-app)
- [シングルページアプリケーションのライブラリでマルチページしたい！ #React - Qiita](https://qiita.com/umiushi_1/items/1c6affdef13d405e1248)
