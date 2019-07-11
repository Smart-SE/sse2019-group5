## 一週間の栄養履歴を取得する [/histories/{id}]
一週間の取得した栄養素の推奨量との比率を取得する

+ Parameters
    + id: 2 (number, required) - week id


### 一週間の栄養履歴取得 [GET]
Week IDを指定して、一週間の取得した栄養素の推奨量との比率を取得する

+ Response 200 (application/json)

    + Headers

            Location: /histories/2

    + Body

			{
			  "id": 2,
			  "week_id": 190714,
			  "energy": 75.6,
			  "protein": 109.5,
			  "lipid": 120.2,
			  "sugar": 105.1,
			  "sodium": 272.2,
			  "postassium": 53,
			  "rin": 69,
			  "vitamin_a": 0.4,
			  "vitamin_b1": 265.3
			}
