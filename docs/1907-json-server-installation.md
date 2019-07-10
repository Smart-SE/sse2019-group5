# Json-Server

## Overview
- REST APIのバックエンドを作成する。（モックサーバ）

## References
- json-server
    + https://github.com/typicode/json-server
- JSON ServerでRestAPIのモックを作成した話 
    + https://tech.yayoi-kk.co.jp/entry/2018/06/25/120611


## Environment

```
PS G:\workplace\sse2019-group5> node --version
v10.16.0
PS G:\workplace\sse2019-group5> npm --version
6.9.0
```

## Other tools
- POSTMANなどのRESTクライアントで、操作すると良いです。（なくても、良いですが）
    + https://www.getpostman.com/


## Installation

```
(base) PS G:\workplace\sse2019-group5> npm install -g json-server
```


## Initial Execution

- JSON Serverを、port 3004で起動

```
(base) PS G:\workplace\sse2019-group5> json-server --watch db.json --port 3004

  \{^_^}/ hi!

  Loading db.json
  Oops, db.json doesn't seem to exist
  Creating db.json with some default data

  Done

  Resources
  http://localhost:3004/posts
  http://localhost:3004/comments
  http://localhost:3004/profile

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

- ブラウザでアクセス
    - localhost:3004


[![Image from Gyazo](https://i.gyazo.com/ef51fb543a5c0cc7b40e76200ea843c2.png)](https://gyazo.com/ef51fb543a5c0cc7b40e76200ea843c2)

- /postsにアクセス

    ![img](https://gyazo.com/a54091ec677e97685f84130416397a4a.png)

    

- /posts/1にpost

    ![img](https://gyazo.com/3b946fb5e4bb4d4368526d078841325d.png)

## tsv to json

- Convert servie 
    - https://www.csvjson.com/csv2json

## db.jsonに追加

![img](https://gyazo.com/6664ae4db8c088d86130ec9cd02f455e.png)


## 追加したデータのget

- id指定

    - http://localhost:3004/ingredients/1

    - http://localhost:3004/ingredients/101

        ![img](https://gyazo.com/c31d2360d44c589ea7355d1e627c0c12.png)
        

- page指定

    - http://localhost:3004/ingredients?_page=5&_limit=20

        ![img](https://gyazo.com/e09346a01a86a2af110ce9075b9c9bc0.png)
        

