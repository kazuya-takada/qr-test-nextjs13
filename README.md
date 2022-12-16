# 趣旨
- react-qr-reader（ https://www.npmjs.com/package/react-qr-reader?activeTab=versions ）をNextjs(react)で使用しようとすると、Nextjs12（最新13）とReact17（最新18）にする必要がある。
- さらにその際はreact-qr-readerのベータ版っぽいやつ（3.0.0-beta-1）の使用が前提で、バージョン2.2.1を使用するとなるとReact16にする必要がある。
- そのため、3.0.0-beta-1の実装部分をインストールせず、コードをコピーして移植したら、Nextjs13とReact18でも問題なく動くか？を検証

# インストールしたライブラリ
- 以下、react-qr-reader自体の実装で使用されているライブラリ
- https://www.npmjs.com/package/@zxing/browser?ref=pkgstats.com
- https://www.npmjs.com/package/@zxing/library

# 開発メモ
- とりあえず、utilsというフォルダ作って、そこにぶち込んだ