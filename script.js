// === 完整菜單資料庫 (已包含英文、日文、韓文、中文) ===
const menuData = [
    // --- 第一頁：烤物 (Page 1: Grills) ---
    {
        category: { zh: "烤牛肉", en: "Grilled Beef", jp: "牛肉焼き", kr: "소고기 구이" },
        items: [
            { zh: "鹽蔥牛五花串", en: "Salt-Grilled Beef Belly w/ Scallion", jp: "牛バラ肉のネギ塩焼き", kr: "소고기 뱃살 파소금구이", price: "$90/2串" },
            { zh: "起司牛五花串", en: "Beef Belly Skewer w/ Cheese", jp: "牛バラ肉のチーズ焼き", kr: "소고기 뱃살 치즈구이", price: "$100/2串" },
            { zh: "明太子牛五花串", en: "Beef Belly w/ Mentaiko", jp: "牛バラ肉の明太子焼き", kr: "소고기 뱃살 명란구이", price: "$100/2串" },
            { zh: "剝皮辣椒牛五花串", en: "Beef Belly w/ Peeled Chili", jp: "牛バラ肉の唐辛子巻き", kr: "소고기 뱃살 고추말이", price: "$110/2串" },
            { zh: "鹽烤牛小排串", en: "Salt-Grilled Short Rib Skewer", jp: "骨付きカルビ串", kr: "LA갈비 꼬치구이", price: "$120/2串" },
            { zh: "鹽烤牛肋條串", en: "Salt-Grilled Beef Rib Finger", jp: "中落ちカルビ串", kr: "갈비 늑간살 구이", price: "$140/2串" },
            { zh: "鹽蔥牛舌", en: "Grilled Beef Tongue w/ Scallion", jp: "ネギ塩牛タン", kr: "파소금 우설구이", price: "$200/1份" },
            { zh: "帶骨牛小排", en: "Bone-in Short Ribs", jp: "骨付きカルビ", kr: "LA갈비 구이", price: "$240/1份" },
            { zh: "和牛漢堡排", en: "Wagyu Hamburger Steak", jp: "和牛ハンバーグ", kr: "와규 함박스테이크", price: "$240/1份" },
            { zh: "和牛肋條串", en: "Wagyu Rib Finger Skewer", jp: "和牛中落ちカルビ串", kr: "와규 늑간살 꼬치", price: "$260/2串" },
            { zh: "Prime沙朗牛排", en: "Prime Sirloin Steak", jp: "プライムサーロイン", kr: "프라임 등심 스테이크", price: "$300/1份" }
        ]
    },
    {
        category: { zh: "烤雞肉 / 烤羊肉", en: "Grilled Chicken / Lamb", jp: "焼き鳥 / 羊肉", kr: "닭고기 / 양고기 구이" },
        items: [
            { zh: "鹽烤雞腿肉串", en: "Salt-Grilled Chicken Thigh", jp: "鶏もも肉の塩焼き", kr: "닭다리살 소금구이", price: "$110/2串" },
            { zh: "醬烤雞腿肉串", en: "Sauce-Grilled Chicken Thigh", jp: "鶏もも肉のタレ焼き", kr: "닭다리살 양념구이", price: "$110/2串" },
            { zh: "芥末雞腿肉串", en: "Chicken Thigh w/ Wasabi", jp: "鶏もも肉わさび焼き", kr: "닭다리살 와사비구이", price: "$110/2串" },
            { zh: "起司雞腿肉串", en: "Chicken Thigh w/ Cheese", jp: "鶏もも肉チーズ焼き", kr: "닭다리살 치즈구이", price: "$120/2串" },
            { zh: "明太子雞腿肉串", en: "Chicken Thigh w/ Mentaiko", jp: "鶏もも肉明太子焼き", kr: "닭다리살 명란구이", price: "$150/2串" },
            { zh: "醬烤雞腿排", en: "Sauce-Grilled Chicken Steak", jp: "鶏もも肉のステーキ", kr: "닭다리살 스테이크", price: "$120/1份" },
            { zh: "吃漢雞肉丸", en: "Signature Chicken Meatball", jp: "特製つくね", kr: "특제 츠쿠네", price: "$120/2串" },
            { zh: "明太子雞肉丸", en: "Chicken Meatball w/ Mentaiko", jp: "明太子つくね", kr: "명란 츠쿠네", price: "$150/2串" },
            { zh: "鹽烤雞尾股串", en: "Salt-Grilled Chicken Tail", jp: "ぼんじり塩焼き", kr: "닭 꼬리 소금구이", price: "$100/2串" },
            { zh: "醬烤雞尾股串", en: "Sauce-Grilled Chicken Tail", jp: "ぼんじりタレ焼き", kr: "닭 꼬리 양념구이", price: "$100/2串" },
            { zh: "鹽烤雞皮串", en: "Salt-Grilled Chicken Skin", jp: "鶏皮塩焼き", kr: "닭 껍질 소금구이", price: "$100/2串" },
            { zh: "醬烤雞皮串", en: "Sauce-Grilled Chicken Skin", jp: "鶏皮タレ焼き", kr: "닭 껍질 양념구이", price: "$100/2串" },
            { zh: "鹽烤三節翅", en: "Salt-Grilled Chicken Wings", jp: "手羽先塩焼き", kr: "닭날개 소금구이", price: "$120/2串" },
            { zh: "孜然羊肉串", en: "Cumin Lamb Skewer", jp: "ラム肉のクミン焼き", kr: "쯔란 양꼬치", price: "$100/2串" }
        ]
    },
    {
        category: { zh: "烤豬肉", en: "Grilled Pork", jp: "豚肉焼き", kr: "돼지고기 구이" },
        items: [
            { zh: "鹽烤豬里肌", en: "Salt-Grilled Pork Loin", jp: "豚ロース塩焼き", kr: "돼지 등심 소금구이", price: "$100/1份" },
            { zh: "鹽烤豬五花串", en: "Salt-Grilled Pork Belly", jp: "豚バラ塩焼き", kr: "삼겹살 소금구이", price: "$120/2串" },
            { zh: "醬烤豬五花串", en: "Sauce-Grilled Pork Belly", jp: "豚バラタレ焼き", kr: "삼겹살 양념구이", price: "$120/2串" },
            { zh: "芥末豬五花串", en: "Pork Belly w/ Wasabi", jp: "豚バラわさび焼き", kr: "삼겹살 와사비구이", price: "$120/2串" },
            { zh: "鹽烤松阪豬", en: "Salt-Grilled Pork Jowl", jp: "トントロ塩焼き", kr: "항정살 소금구이", price: "$130/1份" },
            { zh: "脆嫩肥腸", en: "Crispy Pork Intestine", jp: "ホルモン焼き", kr: "대창 구이", price: "$200/1份" },
            { zh: "烤鹹豬肉", en: "Grilled Salty Pork", jp: "スーチーカー(塩漬け豚)", kr: "소금절임 돼지고기 구이", price: "$200/1份" }
        ]
    },
    {
        category: { zh: "烤蔬菜", en: "Grilled Vegetables", jp: "野菜焼き", kr: "채소 구이" },
        items: [
            { zh: "鹽烤香菇", en: "Salt-Grilled Shiitake", jp: "しいたけ塩焼き", kr: "표고버섯 구이", price: "$80/2串" },
            { zh: "鹽烤節瓜", en: "Salt-Grilled Zucchini", jp: "ズッキーニ塩焼き", kr: "애호박 구이", price: "$100/2串" },
            { zh: "鹽烤山藥", en: "Salt-Grilled Yam", jp: "山芋塩焼き", kr: "마 구이", price: "$120/1份" },
            { zh: "起司地瓜", en: "Sweet Potato w/ Cheese", jp: "サツマイモチーズ", kr: "치즈 고구마", price: "$150/1份" },
            { zh: "明太子節瓜", en: "Zucchini w/ Mentaiko", jp: "ズッキーニ明太子", kr: "명란 애호박", price: "$150/1份" },
            { zh: "明太子山藥", en: "Yam w/ Mentaiko", jp: "山芋明太子", kr: "명란 마 구이", price: "$170/1份" }
        ]
    },
    {
        category: { zh: "烤海鮮", en: "Grilled Seafood", jp: "海鮮焼き", kr: "해산물 구이" },
        items: [
            { zh: "鹽烤鯛魚下巴", en: "Salt-Grilled Sea Bream Chin", jp: "鯛のカマ焼き", kr: "도미 머리 구이", price: "$120/2片" },
            { zh: "鹽烤鯖魚", en: "Salt-Grilled Mackerel", jp: "サバの塩焼き", kr: "고등어 소금구이", price: "$120/1份" },
            { zh: "竹筴魚一夜干", en: "Horse Mackerel Ichiyaboshi", jp: "アジの一夜干し", kr: "전갱이 반건조 구이", price: "$180/1尾" },
            { zh: "福氣鱈魚卵", en: "Grilled Cod Roe", jp: "タラコ焼き", kr: "명란 구이", price: "$200/1份" },
            { zh: "鹽烤大草蝦", en: "Salt-Grilled Giant Prawns", jp: "大エビの塩焼き", kr: "대하 소금구이", price: "$200/2尾" },
            { zh: "鹽烤虱目魚肚", en: "Salt-Grilled Milkfish Belly", jp: "サバヒーの腹身焼き", kr: "밀크피쉬 뱃살 구이", price: "$200/1份" },
            { zh: "花魚一夜干", en: "Atka Mackerel Ichiyaboshi", jp: "ホッケの一夜干し", kr: "임연수어 반건조 구이", price: "$280/1尾" },
            { zh: "現流午仔魚", en: "Fresh Threadfin", jp: "ツバメコノシロ焼き", kr: "날가지숭어 구이", price: "$280/1尾" },
            { zh: "鹽烤透抽", en: "Salt-Grilled Squid", jp: "イカの丸焼き", kr: "오징어 통구이", price: "$280/1份" },
            { zh: "鹽烤鮭魚肚 (限量)", en: "Salt-Grilled Salmon Belly", jp: "鮭ハラス焼き (限定)", kr: "연어 뱃살 구이 (한정)", price: "$320/1份" },
            { zh: "鹽烤海鱺肚 (限量)", en: "Salt-Grilled Cobia Belly", jp: "スギのハラス焼き (限定)", kr: "날새기 뱃살 구이 (한정)", price: "$340/1份" },
            { zh: "鹽烤紅甘下巴 (限量)", en: "Salt-Grilled Amberjack Chin", jp: "カンパチのカマ焼き (限定)", kr: "잿방어 머리 구이 (한정)", price: "$320/1份" },
            { zh: "鹽烤海鱺下巴 (限量)", en: "Salt-Grilled Cobia Chin", jp: "スギのカマ焼き (限定)", kr: "날새기 머리 구이 (한정)", price: "$320/1份" },
            { zh: "鹽烤鮭魚下巴 (限量)", en: "Salt-Grilled Salmon Chin", jp: "鮭のカマ焼き (限定)", kr: "연어 머리 구이 (한정)", price: "$360/1份" }
        ]
    },

    // --- 第一頁：飲料 (Page 1: Drinks) ---
    {
        category: { zh: "無酒精飲料", en: "Non-Alcoholic Drinks", jp: "ソフトドリンク", kr: "음료수" },
        items: [
            { zh: "可樂 / 雪碧", en: "Coke / Sprite", jp: "コーラ / スプライト", kr: "콜라 / 스프라이트", price: "$30" },
            { zh: "烏龍茶", en: "Oolong Tea", jp: "ウーロン茶", kr: "우롱차", price: "$30" },
            { zh: "荔枝烏龍茶", en: "Lychee Oolong Tea", jp: "ライチウーロン茶", kr: "리치 우롱차", price: "$60" },
            { zh: "可爾必思", en: "Calpis", jp: "カルピス", kr: "칼피스", price: "$50" },
            { zh: "蜜桃可爾必思", en: "Peach Calpis", jp: "ピーチカルピス", kr: "복숭아 칼피스", price: "$50" }
        ]
    },
    {
        category: { zh: "啤酒 / 日本酒", en: "Beer / Sake", jp: "ビール / 日本酒", kr: "맥주 / 사케" },
        items: [
            { zh: "Asahi生啤酒", en: "Asahi Draft Beer", jp: "アサヒ生ビール", kr: "아사히 생맥주", price: "$120/杯" },
            { zh: "白鹿清酒", en: "Hakushika Sake", jp: "白鹿清酒", kr: "하쿠시카 사케", price: "$120/壺" },
            { zh: "本格梅酒", en: "Plum Wine", jp: "本格梅酒", kr: "매실주", price: "$130/杯" },
            { zh: "柚子酒", en: "Yuzu Wine", jp: "ゆず酒", kr: "유자술", price: "$130/杯" }
        ]
    },
    {
        category: { zh: "氣泡飲 (無酒精)", en: "Sparkling Drinks", jp: "ソーダ (ノンアル)", kr: "에이드 (무알콜)" },
        items: [
            { zh: "海鹽檸檬氣泡飲", en: "Sea Salt Lemon Sparkling", jp: "塩レモンソーダ", kr: "소금 레몬 에이드", price: "$90" },
            { zh: "岩鹽荔枝氣泡飲", en: "Rock Salt Lychee Sparkling", jp: "岩塩ライチソーダ", kr: "암염 리치 에이드", price: "$90" },
            { zh: "巨峰葡萄氣泡飲", en: "Kyoho Grape Sparkling", jp: "巨峰ソーダ", kr: "거봉 에이드", price: "$90" },
            { zh: "白葡萄氣泡飲", en: "White Grape Sparkling", jp: "白ブドウソーダ", kr: "청포도 에이드", price: "$90" },
            { zh: "可爾必思氣泡飲", en: "Calpis Sparkling", jp: "カルピスソーダ", kr: "칼피스 에이드", price: "$90" },
            { zh: "蜜桃可爾必思氣泡飲", en: "Peach Calpis Sparkling", jp: "ピーチカルピスソーダ", kr: "복숭아 칼피스 에이드", price: "$90" }
        ]
    },
    {
        category: { zh: "沙瓦調酒", en: "Sour (Alcoholic)", jp: "サワー (お酒)", kr: "사와 (주류)" },
        items: [
            { zh: "海鹽檸檬沙瓦", en: "Sea Salt Lemon Sour", jp: "塩レモンサワー", kr: "소금 레몬 사와", price: "$110" },
            { zh: "岩鹽荔枝沙瓦", en: "Rock Salt Lychee Sour", jp: "岩塩ライチサワー", kr: "암염 리치 사와", price: "$110" },
            { zh: "巨峰葡萄沙瓦", en: "Kyoho Grape Sour", jp: "巨峰サワー", kr: "거봉 사와", price: "$110" },
            { zh: "白葡萄沙瓦", en: "White Grape Sour", jp: "白ブドウサワー", kr: "청포도 사와", price: "$110" },
            { zh: "可爾必思沙瓦", en: "Calpis Sour", jp: "カルピスサワー", kr: "칼피스 사와", price: "$110" },
            { zh: "蜜桃可爾必思沙瓦", en: "Peach Calpis Sour", jp: "ピーチカルピスサワー", kr: "복숭아 칼피스 사와", price: "$110" },
            { zh: "加濃 Double", en: "Extra Shot", jp: "濃いめ", kr: "샷 추가", price: "+$20" }
        ]
    },
    {
        category: { zh: "HIGH BALL調酒", en: "Highball", jp: "ハイボール", kr: "하이볼" },
        items: [
            { zh: "烏龍角High", en: "Oolong Highball", jp: "ウーロンハイ", kr: "우롱 하이볼", price: "$110" },
            { zh: "海鹽檸檬角High", en: "Salt Lemon Highball", jp: "塩レモンハイボール", kr: "소금 레몬 하이볼", price: "$110" },
            { zh: "巨峰葡萄角High", en: "Grape Highball", jp: "巨峰ハイボール", kr: "거봉 하이볼", price: "$110" },
            { zh: "白葡萄角High", en: "White Grape Highball", jp: "白ブドウハイボール", kr: "청포도 하이볼", price: "$110" },
            { zh: "可爾必思角High", en: "Calpis Highball", jp: "カルピスハイボール", kr: "칼피스 하이볼", price: "$110" },
            { zh: "蜜桃可爾必思角High", en: "Peach Calpis Highball", jp: "ピーチハイボール", kr: "복숭아 하이볼", price: "$110" },
            { zh: "加濃 Double", en: "Extra Shot", jp: "濃いめ", kr: "샷 추가", price: "+$20" }
        ]
    },

    // --- 第二頁：主食與套餐 (Page 2: Main Dishes & Sets) ---
    {
        // 新增的套餐升級選項
        category: { zh: "丼飯套餐升級", en: "Rice Bowl Set Upgrade", jp: "丼ものセット", kr: "덮밥 세트 업그레이드" },
        items: [
            { zh: "套餐+50 (小菜、茶碗蒸)", en: "Set +$50 (Side Dish, Chawanmushi)", jp: "セット +$50 (小鉢、茶碗蒸し)", kr: "세트 +$50 (반찬, 계란찜)", price: "+$50" },
            { zh: "套餐+100 (小菜、茶碗蒸、甜點)", en: "Set +$100 (Side Dish, Chawanmushi, Dessert)", jp: "セット +$100 (小鉢、茶碗蒸し、デザート)", kr: "세트 +$100 (반찬, 계란찜, 디저트)", price: "+$100" }
        ]
    },
    {
        category: { zh: "牛肉丼 (附湯)", en: "Beef Rice Bowl", jp: "牛丼 (味噌汁付)", kr: "소고기 덮밥 (국 포함)" },
        items: [
            { zh: "月見牛肉丼", en: "Beef Bowl w/ Raw Egg", jp: "月見牛丼", kr: "달걀노른자 소고기 덮밥", price: "$129" },
            { zh: "月見泡菜牛肉丼", en: "Beef Bowl w/ Kimchi & Egg", jp: "キムチ月見牛丼", kr: "김치 달걀노른자 소고기 덮밥", price: "$159" },
            { zh: "鹽烤肋條丼", en: "Grilled Rib Finger Bowl", jp: "中落ちカルビ丼", kr: "갈비 늑간살 덮밥", price: "$200" },
            { zh: "鹽蔥牛舌丼", en: "Beef Tongue Bowl", jp: "ネギ塩牛タン丼", kr: "파소금 우설 덮밥", price: "$260" },
            { zh: "和牛漢堡丼", en: "Wagyu Hamburger Bowl", jp: "和牛ハンバーグ丼", kr: "와규 함박 덮밥", price: "$300" },
            { zh: "PRIME沙朗牛排丼", en: "Prime Sirloin Bowl", jp: "サーロインステーキ丼", kr: "프라임 등심 스테이크 덮밥", price: "$360" }
        ]
    },
    {
        category: { zh: "雞肉丼 (附湯)", en: "Chicken Rice Bowl", jp: "鶏丼 (味噌汁付)", kr: "닭고기 덮밥 (국 포함)" },
        items: [
            { zh: "鹽烤雞腿丼", en: "Salt-Grilled Chicken Bowl", jp: "鶏もも塩焼き丼", kr: "닭다리살 소금구이 덮밥", price: "$170" },
            { zh: "醬烤雞腿丼", en: "Sauce-Grilled Chicken Bowl", jp: "鶏ももタレ焼き丼", kr: "닭다리살 양념구이 덮밥", price: "$170" },
            { zh: "南蠻炸雞丼", en: "Chicken Nanban Bowl", jp: "チキン南蛮丼", kr: "치킨난반 덮밥", price: "$250" }
        ]
    },
    {
        category: { zh: "豬肉丼 (附湯)", en: "Pork Rice Bowl", jp: "豚丼 (味噌汁付)", kr: "돼지고기 덮밥 (국 포함)" },
        items: [
            { zh: "月見豬肉丼", en: "Pork Bowl w/ Raw Egg", jp: "月見豚丼", kr: "달걀노른자 돼지고기 덮밥", price: "$129" },
            { zh: "月見泡菜豬肉丼", en: "Pork Bowl w/ Kimchi & Egg", jp: "キムチ月見豚丼", kr: "김치 달걀노른자 돼지고기 덮밥", price: "$159" },
            { zh: "酥炸豬排丼", en: "Fried Pork Cutlet Bowl", jp: "カツ丼", kr: "돈까스 덮밥", price: "$150" },
            { zh: "鹽烤里肌丼", en: "Grilled Pork Loin Bowl", jp: "豚ロース塩焼き丼", kr: "돼지 등심 소금구이 덮밥", price: "$150" },
            { zh: "鹽烤松阪豬丼", en: "Grilled Pork Jowl Bowl", jp: "トントロ丼", kr: "항정살 덮밥", price: "$180" },
            { zh: "日式鹹豬肉丼", en: "Salty Pork Bowl", jp: "スーチーカー丼", kr: "소금절임 돼지고기 덮밥", price: "$250" }
        ]
    },
    {
        category: { zh: "生食丼 (附湯)", en: "Sashimi Rice Bowl", jp: "海鮮丼 (味噌汁付)", kr: "카이센동 (국 포함)" },
        items: [
            { zh: "紅甘丼", en: "Amberjack Bowl", jp: "カンパチ丼", kr: "잿방어 덮밥", price: "$240" },
            { zh: "旗魚丼", en: "Swordfish Bowl", jp: "カジキマグロ丼", kr: "황새치 덮밥", price: "$240" },
            { zh: "海鱺丼", en: "Cobia Bowl", jp: "スギ丼", kr: "날새기 덮밥", price: "$250" },
            { zh: "鮭魚丼", en: "Salmon Bowl", jp: "サーモン丼", kr: "연어 덮밥", price: "$260" },
            { zh: "鮪魚丼", en: "Tuna Bowl", jp: "マグロ丼", kr: "참치 덮밥", price: "$260" },
            { zh: "綜合海鮮丼", en: "Assorted Seafood Bowl", jp: "海鮮丼", kr: "모듬 해산물 덮밥", price: "$270" },
            { zh: "鮭魚親子丼", en: "Salmon & Roe Bowl", jp: "サーモン親子丼", kr: "연어알 덮밥", price: "$300" },
            { zh: "鮭魚肚丼", en: "Salmon Belly Bowl", jp: "サーモンハラス丼", kr: "연어 뱃살 덮밥", price: "$360" },
            { zh: "炙燒干貝鮭魚卵丼", en: "Seared Scallop & Roe Bowl", jp: "炙りホタテいくら丼", kr: "구운 관자 연어알 덮밥", price: "$380" },
            { zh: "綜合海景丼", en: "Deluxe Seafood Bowl", jp: "特上海鮮丼", kr: "특상 모듬 해산물 덮밥", price: "$420" },
            { zh: "吃漢海景丼", en: "Supreme Seafood Bowl", jp: "究極海鮮丼", kr: "스페셜 해산물 덮밥", price: "$560" }
        ]
    },
    {
        category: { zh: "海鮮熟食丼 (附湯)", en: "Cooked Seafood Bowl", jp: "焼き魚丼 (味噌汁付)", kr: "생선구이 덮밥 (국 포함)" },
        items: [
            { zh: "鹽烤鯖魚丼", en: "Grilled Mackerel Bowl", jp: "サバ塩焼き丼", kr: "고등어 구이 덮밥", price: "$170" },
            { zh: "日式炸蝦丼", en: "Fried Shrimp Bowl", jp: "海老天丼", kr: "새우 튀김 덮밥", price: "$180" },
            { zh: "炸竹筴魚丼", en: "Fried Horse Mackerel Bowl", jp: "アジフライ丼", kr: "전갱이 튀김 덮밥", price: "$180" },
            { zh: "鹽烤鮭魚丼", en: "Grilled Salmon Bowl", jp: "焼き鮭丼", kr: "연어 구이 덮밥", price: "$320" }
        ]
    },

    // --- 第二頁：其他料理 (Page 2: Other Dishes) ---
    {
        category: { zh: "火鍋 / 湯品", en: "Hot Pot / Soup", jp: "鍋物 / スープ", kr: "나베 / 국물 요리" },
        items: [
            { zh: "豚骨相撲鍋", en: "Tonkotsu Sumo Pot", jp: "ちゃんこ鍋", kr: "돈코츠 창코나베", price: "$400" },
            { zh: "剝皮辣椒雞湯鍋", en: "Chili Chicken Soup", jp: "唐辛子鶏鍋", kr: "고추 닭고기 나베", price: "$500" },
            { zh: "味噌湯 (小/大)", en: "Miso Soup (S/L)", jp: "味噌汁 (小/大)", kr: "미소장국 (소/대)", price: "$30/$60" },
            { zh: "蛤蠣湯", en: "Clam Soup", jp: "アサリの吸い物", kr: "조개탕", price: "$60" },
            { zh: "味噌蛤蠣湯", en: "Miso Clam Soup", jp: "アサリ味噌汁", kr: "조개 미소장국", price: "$80" }
        ]
    },
    {
        category: { zh: "壽司卷", en: "Sushi Rolls", jp: "巻き寿司", kr: "롤 스시" },
        items: [
            { zh: "炸蝦海苔壽司卷", en: "Fried Shrimp Roll", jp: "海老天巻き", kr: "새우튀김 롤", price: "$140/4顆" },
            { zh: "炙燒鮭魚加州卷", en: "Seared Salmon Roll", jp: "炙りサーモンロール", kr: "구운 연어 롤", price: "$260/7顆" },
            { zh: "明太子鮭魚加州卷", en: "Mentaiko Salmon Roll", jp: "明太子サーモンロール", kr: "명란 연어 롤", price: "$320/7顆" },
            { zh: "起司鮭魚加州卷", en: "Cheese Salmon Roll", jp: "チーズサーモンロール", kr: "치즈 연어 롤", price: "$320/7顆" }
        ]
    },
    {
        category: { zh: "刺身 (生魚片)", en: "Sashimi", jp: "刺身", kr: "사시미" },
        items: [
            { zh: "綜合刺身 (小)", en: "Assorted Sashimi (S)", jp: "刺身盛り合わせ (小)", kr: "모듬 사시미 (소)", price: "$200" },
            { zh: "綜合刺身 (中)", en: "Assorted Sashimi (M)", jp: "刺身盛り合わせ (中)", kr: "모듬 사시미 (중)", price: "$290" },
            { zh: "綜合刺身 (大)", en: "Assorted Sashimi (L)", jp: "刺身盛り合わせ (大)", kr: "모듬 사시미 (대)", price: "$380" },
            { zh: "綜合海景刺身", en: "Deluxe Sashimi", jp: "特上刺身盛り合わせ", kr: "특상 모듬 사시미", price: "$520" },
            { zh: "鮭魚刺身", en: "Salmon Sashimi", jp: "サーモン刺身", kr: "연어 사시미", price: "$220" },
            { zh: "宮城縣日本XL生蠔", en: "Miyagi XL Oyster", jp: "宮城産生牡蠣", kr: "미야기현 XL 생굴", price: "$160/顆" }
        ]
    },
    {
        category: { zh: "麵 / 炒物", en: "Noodles / Stir-fry", jp: "麺類 / 炒め物", kr: "면류 / 볶음 요리" },
        items: [
            { zh: "泡菜炒豬肉", en: "Kimchi Stir-fried Pork", jp: "豚キムチ", kr: "돼지고기 김치볶음", price: "$120" },
            { zh: "酒蒸蛤蠣", en: "Sake Steamed Clams", jp: "アサリの酒蒸し", kr: "바지락 술찜", price: "$150" },
            { zh: "豚骨豬肉湯烏龍", en: "Pork Udon", jp: "豚骨うどん", kr: "돈코츠 우동", price: "$170" },
            { zh: "日式炸蝦湯烏龍", en: "Fried Shrimp Udon", jp: "海老天うどん", kr: "새우튀김 우동", price: "$180" },
            { zh: "雞白湯烏龍", en: "Chicken Soup Udon", jp: "鶏白湯うどん", kr: "토리파이탄 우동", price: "$200" },
            { zh: "明太子炒烏龍", en: "Mentaiko Stir-fried Udon", jp: "明太子焼きうどん", kr: "명란 볶음 우동", price: "$260" },
            { zh: "泡菜豬肉豆腐鍋", en: "Kimchi Pork Tofu Pot", jp: "キムチ鍋", kr: "돼지고기 김치찌개", price: "$230" }
        ]
    },
    {
        category: { zh: "握壽司", en: "Nigiri Sushi", jp: "握り寿司", kr: "초밥" },
        items: [
            { zh: "綜合握壽司 3貫", en: "Assorted Nigiri (3pcs)", jp: "お任せ握り 3貫", kr: "모듬 초밥 3p", price: "$150" },
            { zh: "綜合握壽司 6貫", en: "Assorted Nigiri (6pcs)", jp: "お任せ握り 6貫", kr: "모듬 초밥 6p", price: "$300" },
            { zh: "炙燒綜合握壽司 3貫", en: "Seared Nigiri (3pcs)", jp: "炙り握り 3貫", kr: "구운 모듬 초밥 3p", price: "$160" },
            { zh: "炙燒綜合握壽司 6貫", en: "Seared Nigiri (6pcs)", jp: "炙り握り 6貫", kr: "구운 모듬 초밥 6p", price: "$320" },
            { zh: "鮭魚握壽司", en: "Salmon Nigiri", jp: "サーモン握り", kr: "연어 초밥", price: "$55" },
            { zh: "炙燒鮭魚握壽司", en: "Seared Salmon Nigiri", jp: "炙りサーモン", kr: "구운 연어 초밥", price: "$60" },
            { zh: "炙燒焦糖鮭魚", en: "Caramel Salmon Nigiri", jp: "炙りキャラメルサーモン", kr: "구운 카라멜 연어 초밥", price: "$70" },
            { zh: "炙燒比目魚鰭邊肉", en: "Flounder Fin Nigiri", jp: "炙りえんがわ", kr: "광어 지느러미 초밥", price: "$80" }
        ]
    },
    {
        category: { zh: "炸物", en: "Fried Food", jp: "揚げ物", kr: "튀김" },
        items: [
            { zh: "雞肉洋蔥圈", en: "Chicken Onion Rings", jp: "オニオンリング", kr: "어니언링", price: "$80" },
            { zh: "日式炸豆腐", en: "Agedashi Tofu", jp: "揚げ出し豆腐", kr: "아게다시 두부", price: "$100" },
            { zh: "日式炸豬排", en: "Fried Pork Cutlet", jp: "とんかつ", kr: "돈까스", price: "$100" },
            { zh: "起司可樂餅", en: "Cheese Croquette", jp: "チーズコロッケ", kr: "치즈 고로케", price: "$120" },
            { zh: "香辣兩節翅", en: "Spicy Chicken Wings", jp: "スパイシー手羽先", kr: "매운 닭날개 튀김", price: "$120" },
            { zh: "日式炸蝦", en: "Fried Shrimp", jp: "海老フライ", kr: "새우 튀김", price: "$120" },
            { zh: "酥炸竹筴魚", en: "Fried Horse Mackerel", jp: "アジフライ", kr: "전갱이 튀김", price: "$120" },
            { zh: "唐揚炸雞", en: "Chicken Karaage", jp: "若鶏の唐揚げ", kr: "치킨 가라아게", price: "$150" },
            { zh: "炸廣島牡蠣", en: "Fried Hiroshima Oysters", jp: "カキフライ", kr: "히로시마 굴튀김", price: "$160" },
            { zh: "吃漢牛肉餅", en: "Menchi Katsu", jp: "メンチカツ", kr: "멘치카츠", price: "$160" },
            { zh: "蔬菜天婦羅", en: "Vegetable Tempura", jp: "野菜天ぷら", kr: "야채 튀김", price: "$180" },
            { zh: "南蠻炸雞", en: "Chicken Nanban", jp: "チキン南蛮", kr: "치킨난반", price: "$200" }
        ]
    },
    {
        category: { zh: "小菜 / 沙拉", en: "Appetizers / Salad", jp: "前菜 / サラダ", kr: "전채 / 샐러드" },
        items: [
            { zh: "茶碗蒸", en: "Chawanmushi", jp: "茶碗蒸し", kr: "계란찜", price: "$30" },
            { zh: "柚香蘿蔔", en: "Yuzu Pickled Radish", jp: "柚子大根", kr: "유자 단무지", price: "$40" },
            { zh: "毛豆", en: "Edamame", jp: "枝豆", kr: "에다마메", price: "$40" },
            { zh: "日式溫泉蛋", en: "Onsen Egg", jp: "温泉卵", kr: "온천 달걀", price: "$40" },
            { zh: "韓式泡菜", en: "Kimchi", jp: "キムチ", kr: "김치", price: "$60" },
            { zh: "芥末章魚", en: "Wasabi Octopus", jp: "たこわさ", kr: "타코 와사비", price: "$70" },
            { zh: "海帶芽洋蔥沙拉", en: "Seaweed Onion Salad", jp: "ワカメと玉ねぎサラダ", kr: "미역 양파 샐러드", price: "$80" },
            { zh: "胡麻柴魚豆腐", en: "Sesame Tofu", jp: "ゴマダレ冷奴", kr: "참깨소스 두부", price: "$80" },
            { zh: "涼拌胡麻秋葵", en: "Sesame Okra", jp: "オクラの胡麻和え", kr: "오크라 무침", price: "$80" },
            { zh: "香辣去骨鳳爪", en: "Spicy Chicken Feet", jp: "骨なし鶏足", kr: "매운 무뼈 닭발", price: "$120" },
            { zh: "秋葵山藥冷豆腐", en: "Okra Yam Tofu", jp: "山芋オクラ冷奴", kr: "마 오크라 두부", price: "$150" },
            { zh: "奶油起司火煥蒸蛋", en: "Cream Cheese Steamed Egg", jp: "クリームチーズ茶碗蒸し", kr: "크림치즈 계란찜", price: "$150" },
            { zh: "日式煎餃", en: "Gyoza", jp: "焼き餃子", kr: "교자 (군만두)", price: "$150" },
            { zh: "鱈魚肝佐橙醋醬", en: "Cod Liver w/ Ponzu", jp: "あん肝ポン酢", kr: "대구 간 폰즈소스", price: "$180" },
            { zh: "吃漢滷牛筋", en: "Braised Beef Tendon", jp: "牛すじ煮込み", kr: "소힘줄 조림", price: "$180" },
            { zh: "炙燒干貝蟹膏堡", en: "Scallop & Crab Paste", jp: "炙りホタテ蟹味噌", kr: "구운 관자 게내장", price: "$200" }
        ]
    },
    {
        category: { zh: "手卷", en: "Hand Rolls", jp: "手巻き寿司", kr: "데마끼" },
        items: [
            { zh: "豆皮壽司", en: "Inari Sushi", jp: "いなり寿司", kr: "유부초밥", price: "$30/2個" },
            { zh: "蝦卵手卷", en: "Shrimp Roe Hand Roll", jp: "海老子手巻き", kr: "새우알 데마끼", price: "$45" },
            { zh: "鮮蝦手卷", en: "Shrimp Hand Roll", jp: "海老手巻き", kr: "새우 데마끼", price: "$45" },
            { zh: "星鰻手卷", en: "Eel Hand Roll", jp: "穴子手巻き", kr: "붕장어 데마끼", price: "$55" },
            { zh: "龍蝦蟹肉手卷", en: "Lobster Salad Hand Roll", jp: "ロブスターサラダ手巻き", kr: "랍스터 샐러드 데마끼", price: "$60" },
            { zh: "鮭魚卵手卷", en: "Salmon Roe Hand Roll", jp: "いくら手巻き", kr: "연어알 데마끼", price: "$80" },
            { zh: "炙燒干貝蟹膏手卷", en: "Scallop & Crab Paste Roll", jp: "ホタテ蟹味噌手巻き", kr: "관자 게내장 데마끼", price: "$100" },
            { zh: "海膽手卷", en: "Sea Urchin Hand Roll", jp: "ウニ手巻き", kr: "성게알 데마끼", price: "$150" }
        ]
    }
];

const notesData = {
    // 依據新圖片詳細翻譯
    en: "⚠️ Notes:<br>1. Rice bowls come with miso soup. Sets not for takeout.<br>2. Meals are made to order, please wait.<br>3. Corkage fee waiver: Order 2 beers per brought-in bottle.<br>4. Pets need a blanket to sit on seats.<br>5. Beef/Pork bowls come with soft-boiled egg. Ask if you want it fully cooked.",
    
    jp: "⚠️ 注意事項：<br>1. 丼物は味噌汁付き。テイクアウトはセット対象外。<br>2. 注文を受けてから調理します。<br>3. 持ち込み料：ボトル1本につきビール2杯注文で無料。<br>4. ペットを席に座らせる際は毛布をご持参ください。<br>5. 牛・豚丼は温泉卵付き。完熟希望の方はお知らせください。",
    
    kr: "⚠️ 주의사항:<br>1. 덮밥엔 미소장국 포함. 세트는 포장 불가.<br>2. 주문 즉시 조리합니다.<br>3. 콜키지 프리: 술 1병당 맥주 2잔 주문 시 무료.<br>4. 반려동물 동반 시 담요 지참 필수.<br>5. 소/돼지 덮밥엔 온천 달걀 제공. 완숙 원하시면 말씀해주세요.",
    
    zh: "⚠️ 注意事項：<br>1. 丼飯皆附味噌湯、外帶不提供套餐。<br>2. 餐點皆現做，請耐心等候。<br>3. 自帶一瓶酒水需點兩杯啤酒抵開瓶費。<br>4. 寵物如需上坐請自備毯子。<br>5. 牛、豬丼飯大部分都提供溫泉蛋，如需全熟請自行告知。"
};

// === 核心功能 ===

function showMenu(lang) {
    // 隱藏首頁，顯示菜單
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('menu-page').style.display = 'block';
    document.getElementById('back-btn').style.display = 'block';

    const container = document.getElementById('menu-container');
    container.innerHTML = ''; // 清空內容

    // 生成菜單卡片
    menuData.forEach(section => {
        // 1. 建立分類卡片
        const card = document.createElement('div');
        card.className = 'category-card';

        // 2. 建立標題
        const title = document.createElement('div');
        title.className = 'category-title';
        // 顯示：外文標題 <br> (中文標題)
        title.innerHTML = `${section.category[lang]} <span style="font-size:0.8rem; color:#666;">(${section.category.zh})</span>`;
        card.appendChild(title);

        // 3. 建立各個品項
        section.items.forEach(item => {
            const itemRow = document.createElement('div');
            itemRow.className = 'menu-item';

            const info = document.createElement('div');
            info.className = 'item-info';
            
            const nameForeign = document.createElement('span');
            nameForeign.className = 'item-name-foreign';
            nameForeign.textContent = item[lang]; // 顯示選定語言

            const nameZh = document.createElement('span');
            nameZh.className = 'item-name-zh';
            nameZh.textContent = item.zh; // 顯示中文對照

            info.appendChild(nameForeign);
            info.appendChild(nameZh);

            const price = document.createElement('div');
            price.className = 'item-price';
            price.textContent = item.price;

            itemRow.appendChild(info);
            itemRow.appendChild(price);
            card.appendChild(itemRow);
        });

        container.appendChild(card);
    });

    // 顯示注意事項
    const noteContainer = document.getElementById('note-container');
    // 如果是中文模式，只顯示中文；外文模式則顯示「外文+中文」
    if (lang === 'zh') {
        noteContainer.innerHTML = notesData.zh;
    } else {
        noteContainer.innerHTML = notesData[lang] + "<br><hr style='border:0; border-top:1px dashed rgba(255,255,255,0.5); margin:10px 0;'>" + notesData.zh;
    }
    
    // 滾動到頂部
    window.scrollTo(0, 0);
}

function goHome() {
    document.getElementById('landing-page').style.display = 'flex';
    document.getElementById('menu-page').style.display = 'none';
    document.getElementById('back-btn').style.display = 'none';
}