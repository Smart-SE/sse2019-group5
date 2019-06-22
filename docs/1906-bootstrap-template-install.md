# 1906-bootstrap-template-install

## overview
- Bootstrapのインストール手順

## reference

- bootstrap SB Admin 2
    - https://startbootstrap.com/themes/sb-admin-2/
    - github repos
      - https://github.com/BlackrockDigital/startbootstrap-sb-admin-2 

## Environment

```
G:\workplace\sse2019-group5>node --version
v10.16.0

G:\workplace\sse2019-group5>npm --version
6.9.0
```

- node
  - node.js がインストールされていない場合は、installしてください。
  - https://nodejs.org/ja/

- nodeは必ずしも必要ではない。対象ディレクトリで、httpdを起動すればOK。
  - package.jsonは後記。

## Contents

### 1. Download and Instration

- clone the repos

```
git clone https://github.com/Smart-SE/sse2019-group5.git
```

- node package install

```
G:\workplace\sse2019-group5>npm install
```

### 2. execution

- Httpdを起動
  - 下記のコマンドを利用すると、localhost:3000で起動される

```
G:\workplace\sse2019-group5>npm start
```

```
    "scripts": {
        "start": "node_modules/.bin/gulp watch"
    },
```

### 3. structure

- 別途


### Appendix

- package.json

```
{
    "title": "SB Admin 2",
    "name": "startbootstrap-sb-admin-2",
    "version": "4.0.6",
    "scripts": {
        "start": "node_modules/.bin/gulp watch"
    },
    "description": "An open source Bootstrap 4 admin theme.",
    "keywords": [
        "css",
        "sass",
        "html",
        "responsive",
        "theme",
        "template",
        "admin",
        "app"
    ],
    "homepage": "https://startbootstrap.com/template-overviews/sb-admin-2",
    "bugs": {
        "url": "https://github.com/BlackrockDigital/startbootstrap-sb-admin-2/issues",
        "email": "feedback@startbootstrap.com"
    },
    "license": "MIT",
    "author": "Start Bootstrap",
    "contributors": [
        "David Miller (http://davidmiller.io/)"
    ],
    "repository": {
        "type": "git",
        "url": "https://github.com/BlackrockDigital/startbootstrap-sb-admin-2.git"
    },
    "dependencies": {
        "@fortawesome/fontawesome-free": "5.9.0",
        "bootstrap": "4.3.1",
        "chart.js": "2.8.0",
        "datatables.net-bs4": "1.10.19",
        "jquery": "3.4.1",
        "jquery.easing": "^1.4.1"
    },
    "devDependencies": {
        "browser-sync": "2.26.7",
        "del": "4.1.1",
        "gulp": "4.0.2",
        "gulp-autoprefixer": "6.1.0",
        "gulp-clean-css": "4.2.0",
        "gulp-header": "2.0.7",
        "gulp-plumber": "^1.2.1",
        "gulp-rename": "1.4.0",
        "gulp-sass": "4.0.2",
        "gulp-uglify": "3.0.2",
        "merge-stream": "2.0.0"
    }
}
```
