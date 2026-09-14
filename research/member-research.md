# Z界 OSG：掲載情報の調査

調査日：2026年9月10日。サイト制作に必要な本人の活動名・配信先・プロフィール画像を中心に確認した。

## SEIZ / SEIZ

- 現在案内されているKICK：https://kick.com/seiz
- 本人チャンネルHTMLのusernameは `seiz`、twitterは `seiz1234`。
- X：https://x.com/seiz1234
- ふわっち：https://whowatch.tv/profile/w:seiz1234
- ツイキャス：https://twitcasting.tv/seiz1234 — 表示名「SEIZ」。プロフィールでは地道に配信を続ける姿勢を表明。
- ふわっち大賞2025の公式ページに「SEIZ🦛🦋」の掲載あり：https://whowatch.tv/s/202512-award/
- 検索には旧表記と思われる `seiz1234` のKICKクリップも出るため、サイトのリンクは現在の `seiz` を採用。

## トーマス

- KICK：https://kick.com/thomas1022
- 本人チャンネルの表示名は `Thomas1022`。雑談カテゴリの配信を確認。
- KICKが案内するX：https://x.com/thomas19981022
- KICKが案内するInstagram：https://www.instagram.com/t.t1022/
- ふわっち：https://whowatch.tv/profile/w:Thomas19981022
- Xプロフィールの転載から見つけた短縮URL https://t.co/tZa6Xg8j7M の転送先をHTTPで確認。同じプロフィールの https://t.co/S4BD2p5DYo は上記KICKへ転送。
- ふわっち大賞2025公式ページにも「トーマス」の掲載あり。画像に依存する順位の解釈はサイトに使用していない。

## うどん / うどんちゃんねる

- KICK：https://kick.com/udonchannel
- 本人チャンネルの表示名は `UDONCHANNEL`。Aboutページの「雑談」とXリンクを確認：https://kick.com/udonchannel/about
- KICKが案内するX：https://x.com/udon_is_here
- Xプロフィール転載では現在の表示名「うどんちゃんねる」。本人名義のふわっち配信告知や、大阪Z界での活動に言及する投稿が見つかる：https://www6.twstalker.com/udon_is_here
- ただしX原文の直接取得は失敗。転載の相対日時を結成日・活動開始日には変換していない。
- 2026年9月10日、ユーザーよりふわっちでは `udonchannel` と `king_of_udon` の2アカウントで活動中との確認あり。ユーザー提供情報に基づき両方を掲載。
- ふわっち：https://whowatch.tv/profile/w:udonchannel
- ふわっち：https://whowatch.tv/profile/w:king_of_udon
- Web取得はプロフィール本文を取得できていないため、本人性の根拠はユーザーの確認。

## グループとして確認が必要な事項

- 「Z界 OSG」、SEIZ・トーマス・うどんによる結成という構成は、ユーザー提供情報に基づく。
- 2026年9月10日、ユーザーよりOSGは「大阪SEIZグループ」の略と確認され、サイトに反映。結成日・役職・理念は引き続き未確認。
- 年齢、本名、収益、職歴、私生活などはまとめ記事の記述だけでは採用しない。
- フォロワー数・LIVE状態は変動し、検索キャッシュとも不一致があるため固定表示しない。
- 検索ツールでKICKが「Channel Not Found」と返る場合があったが、直接HTTP取得では3チャンネルのプロフィールデータ・画像・SNSを取得できた。検索キャッシュだけで閉鎖と判断しない。

## 画像

`channels.json` に3人のKICKチャンネルと取得したプロフィール画像URLを記録。サイトではKICKプロフィール画像としてaltを付けて使用。3枚とも元画像を変更せず掲載。

これは利用許諾の確認を意味しない。本人の宣材写真やグループ公式ロゴが用意できれば置き換える。現在は所有者向けの非公開デザイン案。

## 制作中に追加されたグループ画像

作業フォルダの `S__19554353.jpg`（大阪Z界!! の3人入り画像）をトップのメインビジュアルとして採用。元ファイルは変更せず、`dist/assets/osaka-zkai.jpg` にコピー。画像内の表記は「大阪Z界!!」。OSGの意味や結成日の裏付けには使用していない。

## 画像修正（2026年9月10日）

ユーザー指示により元画像の「大阪」の2文字だけを内蔵imagegenで削除。Z界!!、3人のキャラクター、王冠、KICK表記を維持。編集版は `dist/assets/zkai-v2.png`。元画像も保存。最終編集指示は `research/image-edit-prompt.md`。
