# 大阪モチーフと生成文字 / 2026-09-10

ユーザー指定：大阪であることを強調し、大阪的モチーフをサイバーパンク化。メニュー等を生成した文字画像へ置き換える。

内蔵imagegenで新規生成。既存の参照ポスターや旧Z界イメージは不使用。

背景：`dist/assets/osaka-neon-landmarks.png`。大阪城、道頓堀を連想する運河と橋、機械仕掛けのタコ看板、たこ焼き屋台を合成した架空の都市イラスト。実際の場所の写真ではない。

文字：`dist/assets/chrome-type-atlas.png`。上からABOUT、MEMBERS、WATCH、OSAKAの4行。画像を目視してスペルと行の配置を確認し、CSSの背景位置で各行を表示。ヘッダーナビ、主なCTA、主要見出し、大阪の強調に使用。リンクにはaria-label、画像見出しにはrole=imgとaria-labelを付与。説明本文はHTMLテキストを維持。

## 背景の最終プロンプト

Create an original 1536x1024 cinematic maximalist emerald neon cyberpunk OSAKA website background. Very recognisable Osaka Castle dramatically on upper right, futuristic Dotonbori canal and Ebisu-style bridge in foreground, tall dense neon building facades framing both sides, a giant three-dimensional glowing mechanical octopus restaurant sign on left, a subtle neon takoyaki food stall lower left. Wet reflective surfaces, saturated #53FC18 green, silver chrome, emerald lasers and volumetric light, extraordinary sparkling cyberpunk extravagance. Keep CENTRAL 50 percent DARK and relatively empty to overlay an existing logo. No people. NO TEXT, NO letters, NO logos, no readable signage. Do not copy real commercial mascots or running-man advertisements. Original Osaka architectural and food motifs only. Sharp premium realistic digital matte painting, no cartoon characters.

## 文字の最終プロンプト

Generate a TYPOGRAPHY ASSET SHEET on pure solid black #000000 background, exactly 1536x1024. Four horizontal equal-height strips stacked vertically, each strip 1536 pixels wide and 256 pixels tall. Absolutely no dividing lines, no boxes, no UI, no margins between strips. Each phrase must be centered at EXACT y centers 128,384,640,896 respectively, all typography fits inside its 256-pixel strip with at least 35px clear black top and bottom. Row 1 exact text "ABOUT". Row 2 exact text "MEMBERS". Row 3 exact text "WATCH". Row 4 exact text "OSAKA". All words use consistent very wide extended italic techno 3D CHROME typography, silver beveled edges, emerald-black metal inner face, intense electric neon green #53FC18 edge lights, fine bright green glints. Large readable letters, each word about 1000 to 1250 pixels wide and 150 pixels tall. Straight frontal orientation, no perspective tilt. Only these four words, no extra text, no imagery, no decoration outside lettering, no plasma, no background texture. Precision asset atlas for website navigation and section headings, not a screenshot.
