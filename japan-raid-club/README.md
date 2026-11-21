# JAPAN RAID CLUB

元の `japan-raid-club.html` を基にした独立サイトです。デザインと本文は維持し、参加フォームとその説明だけ変更しています。

## Netlify 設定

既存の無法地帯とは別のNetlifyサイトとして同じGitHubリポジトリを接続します。

- Base directory: `japan-raid-club`
- Build command: 空欄
- Publish directory: `dist`

Formsで **Enable form detection** を有効にしてからデプロイしてください。既にデプロイした場合は再デプロイします。
申請はFormsの `raid-club-join` に保存されます。メール通知が必要な場合はNetlify側で通知先を設定してください。
公開後、テスト申請を1件送信し、Formsへの保存を確認してください。ローカルプレビューでは送信を抑止します。

## フォーム

KICK IDまたはチャンネルURL（必須、送信時にIDへ統一）、配信者名（任意）、ルール同意（必須）。ボット対策用の非表示項目を設定。
送信中の重複操作を防ぎ、通信エラー時は入力を保持して再送できるようにしています。

https://docs.netlify.com/manage/forms/setup/

## 参加メンバー

- あんのん: https://kick.com/annonkun
- 449: https://kick.com/sisiku
- ぜんか: https://kick.com/znk2525

メンバー欄は `dist/index.html` の `members` セクションで管理しています。
