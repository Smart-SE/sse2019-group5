## 栄養素を取得する [/ingredients/{id}]
メニューの品目の栄養素一覧を取得する

+ Parameters
    + id: 2 (number, required) - menu id


### 栄養素取得 [GET]
メニューIDを指定して、含有する栄養素を取得する

+ Response 200 (application/json)

    + Headers

            Location: /ingredients/2

    + Body

			{
			  "id": 2,
			  "code": "PLU-0002",
			  "name": "から揚弁当(4コ入り) ライス大盛",
			  "category": "野菜増",
			  "size": "ライス大盛",
			  "energy": 916,
			  "water": "",
			  "protein": 33.8,
			  "lipid": 21.4,
			  "sugar": 147,
			  "dietary_fiber": 21,
			  "sodium": 2.7,
			  "potassium": 651,
			  "calcium": 1,
			  "iron": 1,
			  "magnesium": 2,
			  "rin": 296,
			  "vitamin_a": 1,
			  "vitamin_b1": 1,
			  "vitamin_b2": 1,
			  "vitamin_b6": 1,
			  "vitamin_b12": 1,
			  "niacin": 1,
			  "pantothenic_acid": 1,
			  "folic_acid": 1,
			  "vitamin_c": 1,
			  "vitamin_d": 1,
			  "vitamin_e": 1,
			  "display_name": "から揚弁当(4コ入り) ライス大盛 野菜増 916kcal"
			}

