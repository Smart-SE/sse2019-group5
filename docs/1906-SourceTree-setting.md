# 1906-SourceTree-setting

## overview

- sourcetreeで、GitHub reposとのclone設定

## Contents

### １. GitHubの対象repositoryのaddressをコピー

- url
    - https://github.com/Smart-SE/sse2019-group5/

- ① 「Clone or download」buttonをclick

- ② 対象のURLをコピー

    [![Image from Gyazo](https://i.gyazo.com/fccf7f13e85ed08ada45b11e175a68a1.png)](https://gyazo.com/fccf7f13e85ed08ada45b11e175a68a1)



### ２．SourceTreeでGitHubのrepositoryを指定して、Localのrepositoryを作成

[![Image from Gyazo](https://i.gyazo.com/75595070c3e769a945d937f5643be891.png)](https://gyazo.com/75595070c3e769a945d937f5643be891)

- Local側のフォルダ（例）
    - `G:\workplace\sse2019-group5`

### ３．GitHub Repositoryとローカル Repositoryを同期

- pull ：GitHubから最新のコードを、ローカルのレポジトリに、同期する
- push : ローカルのレポジトリの最新コードを、GitHubのレポジトリに、同期する

### その他

- ローカル側のドキュメント、ソースを、Explorerから開いて修正ください。
    - Visual Source Code, Atom, Eclipseなどは、ローカルのGit Repositoryと連携して、Diff（差分表示）できる等も可能です。使い慣れたツール、Editor環境でご利用ください。



#### sreen samples

- setting

[![Image from Gyazo](https://i.gyazo.com/886449c2bcb5559607eb62356e559eb0.png)](https://gyazo.com/886449c2bcb5559607eb62356e559eb0)

- main

[![Image from Gyazo](https://i.gyazo.com/a420559080e7b9f178523b8f1a7b616e.png)](https://gyazo.com/a420559080e7b9f178523b8f1a7b616e)

- 操作ボタン

![img](https://gyazo.com/f860139894e28d927e100b53eddff9e1.png)
https://gyazo.com/f860139894e28d927e100b53eddff9e1

    - pull : git pull
    - push : git push
    - Explorer : explorer  でレポジトリを開く

以上です。