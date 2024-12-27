# webpro_06
2024/10/29
## このプログラムに関して

##　ファイル一覧
ファイル名|説明
-|-
app5.js | プログラム本体
public/janken.html | じゃんけんの開始画面
public/atti.html | あっち向いてホイの開始画面
public/coin.html | コイントスの開始画面
views/janken.html | じゃんけんの開始表示，入力
views/atti.html | あっち向いてホイの表示，入力
views/coin.html | コイントスの表示，入力


## じゃんけんについて
###　実行手順
1:app5.jsを起動する。
2:次に，webブラウザでhttp://localhost:8080/jankenにアクセスする
3:出したい手を入力する
### フローチャート
```mermaid
flowchart TD;

start["janken"];
end1["終了"]
te[手を決定]
if{"あいこか"}
judge{"勝ちか"}
win["勝ち"]
aiko["あいこ"]
loose["負け"]

start --> te
te --> if
if -->|yes| aiko
aiko --> end1
if -->|no| judge
judge -->|yes| win --> end1
judge -->|no| loose
loose --> end1
```

## あっち向いてホイについて
###　実行手順
1:app5.jsを起動する。
2:次に，webブラウザでhttp://localhost:8080/attiにアクセスする
3:出したい手を入力する
### フローチャート
```mermaid
flowchart TD;

start["atti"];
end1["終了"]
atti[方向を決定]
if{"同じ方向か"}
win["勝ち"]
loose["負け"]

start --> atti
atti -->if
if -->|yes| win
if -->|no| loose
win --> end1
loose --> end1
```

## コイントスについて
###　実行手順
1:app5.jsを起動する。
2:次に，webブラウザでhttp://localhost:8080/coin
3:出したい手を入力する
### フローチャート
```mermaid
flowchart TD;

start["coin"];
end1["終了"]
atti[方向を決定]
if{"同じ面か"}
win["勝ち"]
loose["負け"]

start --> atti
atti -->if
if -->|yes| win
if -->|no| loose
win --> end1
loose --> end1
```