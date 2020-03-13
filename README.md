# Create Subtitle From CSV
After Effect向け自動字幕作成拡張

## 対応するCSVの書式
ヘッダー行なしのCSVを用意する
```csv
"This is the 1st subtitle", 00:00:00:00, 00:00:02:00
"This is the 2nd subtitle", 00:00:02:00, 00:00:04:25
"This is the 3rd subtitle", 00:05:05:05, 00:06:06:06
```
各行はそれぞれ字幕、開始位置, 終了位置（hh:mm:ss:ff）。

## セットアップ

1. Node 10.13.0 と NPM をインストール（[Windows版はここからダウンロードできます](https://nodejs.org/download/release/v10.13.0/node-v10.13.0-x64.msi)）する。
2. GitHubから[CSVから字幕くん](https://github.com/makiro152/create-subtitle-from-csv)のリポジトリをダウンロード（クローンでも可）、 After Effects の `extension` ディレクトリに直下に配置する。
3. リポジトリルート（ `extension/create-subtitle-from-csv` ) `$ npm install` を実行する。
4. After Effectsを再起動する。
