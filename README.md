# Z界 OSG

せいｚ・トーマス・うどんの配信者グループのサイトデザイン案。

管理リポジトリ：https://github.com/mikioxxx/zkai

現行デザインは黒とネオングリーンのサイバーパンク版です。`S__19562525.jpg` は方向性の参照専用で、公開フォルダには含めません。旧Z界イメージ画像は使用を終了し、`research/retired-assets` に保存しています。

`dist` に公開用の静的ファイルがあります。文章は `dist/index.html`、スタイルは `dist/style.css` で編集できます。

## Netlifyへの公開

### フォルダをアップロードする場合

`netlify-deploy` フォルダをNetlifyの手動デプロイ画面へドラッグ＆ドロップしてください。フォルダ直下に `index.html` が入っています。リポジトリ全体をアップロードする必要はありません。

ローカルの `netlify-deploy.zip` にも同じ公開ファイルをまとめています。ZIPはGit管理対象外です。

### GitHubと連携する場合

Netlifyで既存のGitリポジトリからサイトを作成し、`mikioxxx/zkai` の `main` ブランチを選択してください。設定は `netlify.toml` に記載済みです。

- ベースディレクトリ：リポジトリのルート（空欄）
- ビルドコマンド：`node scripts/prepare-netlify.mjs`
- 公開ディレクトリ：`netlify-deploy`
- 外部ライブラリ・環境変数：不要

### 更新手順

1. `dist` 内のHTML・CSS・画像を編集します。
2. `npm run build` で `netlify-deploy` を更新します。
3. 更新した `dist` と `netlify-deploy` をコミットしてGitHubへpushします。
4. Git連携済みのNetlifyはpushを受けてビルドします。手動公開の場合は更新後のフォルダをアップロードします。

ZIPを更新する場合はPowerShellで `Compress-Archive -Path netlify-deploy/* -DestinationPath netlify-deploy.zip -Force` を実行します。

`research` は制作メモ、`.openai/hosting.json` は既存のSites確認用サイトの設定です。どちらもNetlify用フォルダには含みません。

## 掲載情報

- メンバー名、グループ名、活動プラットフォームは依頼内容に基づいています。
- キャッチコピーは本サイト向けの提案です。本人の発言ではありません。
- 検索と本人のKICKチャンネルを確認し、プロフィール画像と個別配信リンクを掲載。画像はKICKのプロフィール画像で、宣材写真ではありません。
- 調査結果、出典、未確認事項は `research/member-research.md` に記録。うどんのふわっち2アカウントとOSGの正式名称はユーザー提供情報を反映しています。
- 公開前に正式表記、コピー、個別アカウントURL、使用可能な写真とロゴを確認してください。
- 配信中ステータスやスケジュールの自動取得は行っていません。

Google Fonts が読み込めない場合はシステムフォントで表示します。
