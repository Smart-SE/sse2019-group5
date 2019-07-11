## 推奨リストを取得する [/recommends{?_page,_limit}]
推奨リストを取得する

+ Parameters
    + _page: 2 (number, required) - page number
    + _limit: 21 (number, required) - retrieved line


### 推奨リスト取得 [GET]
ページを指定して、推奨対象のリストを取得する

+ Response 200 (application/json)

    + Headers

            Location: /recommends?_page=2&_limit=21

    + Body

			[
			  {
			    "id": 22,
			    "purchase_id": 8,
			    "date": "14/07/2019",
			    "course_id": 3,
			    "course_name": "コース03",
			    "time_segment": "breakfast",
			    "course_seg_code": "3_breakfast",
			    "menu_code": 1,
			    "display_name": "から揚弁当(4コ入り) ライス普通盛 野菜増 	765kcal",
			    "price": 500
			  },
			  {
			    "id": 23,
			    "purchase_id": 8,
			    "date": "14/07/2019",
			    "course_id": 3,
			    "course_name": "コース03",
			    "time_segment": "lunch",
			    "course_seg_code": "3_lunch",
			    "menu_code": 198,
			    "display_name": "烏龍茶500ml 飲み物 0kcal",
			    "price": 500
			  },
			  {
			    "id": 24,
			    "purchase_id": 8,
			    "date": "14/07/2019",
			    "course_id": 3,
			    "course_name": "コース03",
			    "time_segment": "dinner",
			    "course_seg_code": "3_dinner",
			    "menu_code": 79,
			    "display_name": "デミグラスハンバーグステーキ弁当 ライス大	盛 弁当 915kcal",
			    "price": 1000
			  },
			  {
			    "id": 25,
			    "purchase_id": 9,
			    "date": "15/07/2019",
			    "course_id": 1,
			    "course_name": "コース01",
			    "time_segment": "breakfast",
			    "course_seg_code": "1_breakfast",
			    "menu_code": 63,
			    "display_name": "から揚弁当(4コ入り) ライス普通盛 弁当 	750kcal",
			    "price": 700
			  },
			  {
			    "id": 26,
			    "purchase_id": 9,
			    "date": "15/07/2019",
			    "course_id": 1,
			    "course_name": "コース01",
			    "time_segment": "lunch",
			    "course_seg_code": "1_lunch",
			    "menu_code": 196,
			    "display_name": "豚汁 単品 81kcal",
			    "price": 600
			  },
			  {
			    "id": 27,
			    "purchase_id": 9,
			    "date": "15/07/2019",
			    "course_id": 1,
			    "course_name": "コース01",
			    "time_segment": "dinner",
			    "course_seg_code": "1_dinner",
			    "menu_code": 31,
			    "display_name": "ロースとんかつ弁当 ライス普通盛 野菜増 	890kcal",
			    "price": 900
			  },
			  {
			    "id": 28,
			    "purchase_id": 10,
			    "date": "16/07/2019",
			    "course_id": 1,
			    "course_name": "コース01",
			    "time_segment": "breakfast",
			    "course_seg_code": "1_breakfast",
			    "menu_code": 63,
			    "display_name": "から揚弁当(4コ入り) ライス普通盛 弁当 	750kcal",
			    "price": 700
			  },
			  {
			    "id": 29,
			    "purchase_id": 10,
			    "date": "16/07/2019",
			    "course_id": 1,
			    "course_name": "コース01",
			    "time_segment": "lunch",
			    "course_seg_code": "1_lunch",
			    "menu_code": 196,
			    "display_name": "豚汁 単品 81kcal",
			    "price": 600
			  },
			  {
			    "id": 30,
			    "purchase_id": 10,
			    "date": "16/07/2019",
			    "course_id": 1,
			    "course_name": "コース01",
			    "time_segment": "dinner",
			    "course_seg_code": "1_dinner",
			    "menu_code": 31,
			    "display_name": "ロースとんかつ弁当 ライス普通盛 野菜増 	890kcal",
			    "price": 900
			  },
			  {
			    "id": 31,
			    "purchase_id": 11,
			    "date": "17/07/2019",
			    "course_id": 5,
			    "course_name": "コース05",
			    "time_segment": "breakfast",
			    "course_seg_code": "5_breakfast",
			    "menu_code": 100,
			    "display_name": "おろしチキン竜田弁当(香味醤油) ライス大盛	 弁当 1015kcal",
			    "price": 900
			  },
			  {
			    "id": 32,
			    "purchase_id": 11,
			    "date": "17/07/2019",
			    "course_id": 5,
			    "course_name": "コース05",
			    "time_segment": "lunch",
			    "course_seg_code": "5_lunch",
			    "menu_code": 62,
			    "display_name": "ロースかつ丼 ライス大盛 弁当 1036kcal",
			    "price": 1200
			  },
			  {
			    "id": 33,
			    "purchase_id": 11,
			    "date": "17/07/2019",
			    "course_id": 5,
			    "course_name": "コース05",
			    "time_segment": "dinner",
			    "course_seg_code": "5_dinner",
			    "menu_code": 117,
			    "display_name": "親子丼 ライス大盛 丼ぶり 823kcal",
			    "price": 800
			  },
			  {
			    "id": 34,
			    "purchase_id": 12,
			    "date": "18/07/2019",
			    "course_id": 6,
			    "course_name": "コース06",
			    "time_segment": "breakfast",
			    "course_seg_code": "6_breakfast",
			    "menu_code": 133,
			    "display_name": "ドラえもんランチ/ドラミちゃんランチ（カレ	ー）　　　　　 ライス普通盛 お子様向け 441kcal",
			    "price": 900
			  },
			  {
			    "id": 35,
			    "purchase_id": 12,
			    "date": "18/07/2019",
			    "course_id": 6,
			    "course_name": "コース06",
			    "time_segment": "lunch",
			    "course_seg_code": "6_lunch",
			    "menu_code": 195,
			    "display_name": "玉子スープ 単品 31kcal",
			    "price": 500
			  },
			  {
			    "id": 36,
			    "purchase_id": 12,
			    "date": "18/07/2019",
			    "course_id": 6,
			    "course_name": "コース06",
			    "time_segment": "dinner",
			    "course_seg_code": "6_dinner",
			    "menu_code": 96,
			    "display_name": "Wカルビ焼肉弁当(肉2倍) ライス普通盛 弁当 	1255kcal",
			    "price": 500
			  },
			  {
			    "id": 37,
			    "purchase_id": 13,
			    "date": "19/07/2019",
			    "course_id": 22,
			    "course_name": "コース22",
			    "time_segment": "breakfast",
			    "course_seg_code": "22_breakfast",
			    "menu_code": 81,
			    "display_name": "4種のこぼれチーズハンバーグステーキ弁当 	ライス普通盛 弁当 881kcal",
			    "price": 700
			  },
			  {
			    "id": 38,
			    "purchase_id": 13,
			    "date": "19/07/2019",
			    "course_id": 22,
			    "course_name": "コース22",
			    "time_segment": "lunch",
			    "course_seg_code": "22_lunch",
			    "menu_code": 131,
			    "display_name": "ＢＩＧのり弁（白身フライ） ライス大盛 弁	当 1231kcal",
			    "price": 600
			  },
			  {
			    "id": 39,
			    "purchase_id": 13,
			    "date": "19/07/2019",
			    "course_id": 22,
			    "course_name": "コース22",
			    "time_segment": "dinner",
			    "course_seg_code": "22_dinner",
			    "menu_code": 136,
			    "display_name": "カルビ焼肉おかずのみ 小物 506kcal",
			    "price": 500
			  },
			  {
			    "id": 40,
			    "purchase_id": 14,
			    "date": "20/07/2019",
			    "course_id": 26,
			    "course_name": "コース26",
			    "time_segment": "breakfast",
			    "course_seg_code": "26_breakfast",
			    "menu_code": 95,
			    "display_name": "カルビ焼肉弁当 ライス小盛 弁当 763kcal",
			    "price": 800
			  },
			  {
			    "id": 41,
			    "purchase_id": 14,
			    "date": "20/07/2019",
			    "course_id": 26,
			    "course_name": "コース26",
			    "time_segment": "lunch",
			    "course_seg_code": "26_lunch",
			    "menu_code": 133,
			    "display_name": "ドラえもんランチ/ドラミちゃんランチ（カレ	ー）　　　　　 ライス普通盛 お子様向け 441kcal",
			    "price": 900
			  },
			  {
			    "id": 42,
			    "purchase_id": 14,
			    "date": "20/07/2019",
			    "course_id": 26,
			    "course_name": "コース26",
			    "time_segment": "dinner",
			    "course_seg_code": "26_dinner",
			    "menu_code": 153,
			    "display_name": "チキン南蛮　おかずのみ 小物 474kcal",
			    "price": 700
			  }
			]
