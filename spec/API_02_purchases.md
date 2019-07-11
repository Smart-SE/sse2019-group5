## 購入対象を取得する [/purchases{?_page,_limit}]
購入対象のリストを取得する

+ Parameters
    + _page: 2 (number, required) - page number
    + _limit: 7 (number, required) - retrieved line


### 購入対象取得 [GET]
ページを指定して、購入対象のリストを取得する

+ Response 200 (application/json)

    + Headers

            Location: /purchases?_page=2&_limit=7

    + Body

			[
			  {
			    "id": 8,
			    "date": "14/07/2019",
			    "course_code": 4,
			    "course_name": "コース04",
			    "total_price": 2700
			  },
			  {
			    "id": 9,
			    "date": "15/07/2019",
			    "course_code": 18,
			    "course_name": "コース18",
			    "total_price": 2700
			  },
			  {
			    "id": 10,
			    "date": "16/07/2019",
			    "course_code": 25,
			    "course_name": "コース25",
			    "total_price": 2100
			  },
			  {
			    "id": 11,
			    "date": "17/07/2019",
			    "course_code": 20,
			    "course_name": "コース20",
			    "total_price": 3400
			  },
			  {
			    "id": 12,
			    "date": "18/07/2019",
			    "course_code": 13,
			    "course_name": "コース13",
			    "total_price": 1900
			  },
			  {
			    "id": 13,
			    "date": "19/07/2019",
			    "course_code": 21,
			    "course_name": "コース21",
			    "total_price": 2000
			  },
			  {
			    "id": 14,
			    "date": "20/07/2019",
			    "course_code": 28,
			    "course_name": "コース28",
			    "total_price": 2100
			  }
			]

