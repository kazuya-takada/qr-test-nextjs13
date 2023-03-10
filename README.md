# 趣旨

- react-qr-reader（ https://www.npmjs.com/package/react-qr-reader?activeTab=versions ）を Nextjs(react)で使用しようとすると、Nextjs12（最新 13）と React17（最新 18）にする必要がある。
- さらにその際は react-qr-reader のベータ版っぽいやつ（3.0.0-beta-1）の使用が前提で、バージョン 2.2.1 を使用するとなると React16 にする必要がある。
- そのため、3.0.0-beta-1 をインストールせず、3.0.0-beta-1 の中身のコード（コンポーネント部分）をコピーして移植したら、Nextjs13 と React18 でも問題なく動くか？を検証

# デプロイ先・検証結果

- デプロイ先：https://yellow-glacier-049f5c600.2.azurestaticapps.net/
- 検証端末：IPhone8, ios15.2
- 結果：safari, chrome 共に OK
- ただし、閉じるボタン押しても画面表示消えるが、カメラ起動がそのままな現象は要修正 ← Web だけだった。スマホだと起動停止する。

# インストールしたライブラリ

- 以下、react-qr-reader 自体の実装で使用されているライブラリ
- https://www.npmjs.com/package/@zxing/browser?ref=pkgstats.com
- https://www.npmjs.com/package/@zxing/library

# 開発メモ

- QRReader コンポーネントとして、components ディレクトリに作成。基本的に実装は`react-qr-reader`の中身をコピペ。（ただし、ファイル構成は少し修正）
- スタイリングには Tailwind を使用
  - `tailwind.config.js`に`mode: 'jit'`を設定すること
