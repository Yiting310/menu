// === 菜單資料庫 ===
const menuData = {
    // --- Page 1 (丼飯) ---
    p1_beef: { title: {zh:"牛肉丼",en:"Beef",jp:"牛丼",kr:"소고기"}, items: [
        { zh: "月見牛肉丼 $129", en: "Beef w/ Egg", jp: "月見牛丼", kr: "소고기 덮밥", price: "$129" },
        { zh: "月見泡菜牛肉丼 $159", en: "Kimchi Beef", jp: "キムチ牛丼", kr: "김치 소고기", price: "$159" },
        { zh: "鹽烤肋條丼 $200", en: "Rib Finger", jp: "中落ちカルビ", kr: "갈비 늑간살", price: "$200" },
        { zh: "鹽蔥牛舌丼 $260", en: "Tongue", jp: "ネギ塩牛タン", kr: "우설", price: "$260" },
        { zh: "和牛漢堡丼 $300", en: "Wagyu Burger", jp: "和牛ハンバーグ", kr: "와규 함박", price: "$300" },
        { zh: "PRIME沙朗牛排丼 $360", en: "Sirloin Steak", jp: "サーロイン", kr: "등심 스테이크", price: "$360" }
    ]},
    p1_chicken: { title: {zh:"雞肉丼",en:"Chicken",jp:"鶏丼",kr:"닭고기"}, items: [
        { zh: "鹽烤雞腿丼 $170", en: "Salt Chicken", jp: "鶏塩焼き", kr: "닭 소금구이", price: "$170" },
        { zh: "醬烤雞腿丼 $170", en: "Sauce Chicken", jp: "鶏タレ焼き", kr: "닭 양념구이", price: "$170" },
        { zh: "南蠻炸雞丼 $250", en: "Nanban Chicken", jp: "チキン南蛮", kr: "치킨난반", price: "$250" }
    ]},
    p1_pork: { title: {zh:"豬肉丼",en:"Pork",jp:"豚丼",kr:"돼지고기"}, items: [
        { zh: "月見豬肉丼 $129", en: "Pork w/ Egg", jp: "月見豚丼", kr: "돼지 덮밥", price: "$129" },
        { zh: "月見泡菜豬肉丼 $159", en: "Kimchi Pork", jp: "キムチ豚丼", kr: "김치 돼지", price: "$159" },
        { zh: "酥炸豬排丼 $150", en: "Pork Cutlet", jp: "カツ丼", kr: "돈까스", price: "$150" },
        { zh: "鹽烤里肌丼 $150", en: "Pork Loin", jp: "豚ロース", kr: "돼지 등심", price: "$150" },
        { zh: "鹽烤松阪豬丼 $180", en: "Pork Jowl", jp: "トントロ", kr: "항정살", price: "$180" },
        { zh: "日式鹹豬肉丼 $250", en: "Salty Pork", jp: "スーチーカー", kr: "짠 돼지고기", price: "$250" }
    ]},
    p1_seafood_cooked: { title: {zh:"海鮮丼(熟)",en:"Cooked Seafood",jp:"海鮮丼(焼)",kr:"생선구이"}, items: [
        { zh: "鹽烤鯖魚丼 $170", en: "Mackerel", jp: "サバ塩焼き", kr: "고등어", price: "$170" },
        { zh: "日式炸蝦丼 $180", en: "Fried Shrimp", jp: "海老天丼", kr: "새우튀김", price: "$180" },
        { zh: "炸竹筴魚丼 $180", en: "Fried Horse Mackerel", jp: "アジフライ", kr: "전갱이 튀김", price: "$180" },
        { zh: "鹽烤鮭魚丼 $320", en: "Salmon", jp: "焼き鮭", kr: "연어 구이", price: "$320" }
    ]},
    p1_raw: { title: {zh:"生食丼",en:"Sashimi Bowl",jp:"海鮮丼(生)",kr:"카이센동"}, items: [
        { zh: "紅甘丼 $240", en: "Amberjack", jp: "カンパチ", kr: "잿방어", price: "$240" },
        { zh: "旗魚丼 $240", en: "Swordfish", jp: "カジキ", kr: "황새치", price: "$240" },
        { zh: "海鱺丼 $250", en: "Cobia", jp: "スギ", kr: "날새기", price: "$250" },
        { zh: "鮭魚丼 $260", en: "Salmon", jp: "サーモン", kr: "연어", price: "$260" },
        { zh: "鮪魚丼 $260", en: "Tuna", jp: "マグロ", kr: "참치", price: "$260" },
        { zh: "綜合海鮮丼 $270", en: "Seafood", jp: "海鮮丼", kr: "모듬해산물", price: "$270" },
        { zh: "鮭魚親子丼 $300", en: "Salmon&Roe", jp: "親子丼", kr: "연어알", price: "$300" },
        { zh: "鮭魚肚丼 $360", en: "Salmon Belly", jp: "ハラス丼", kr: "연어뱃살", price: "$360" },
        { zh: "炙燒干貝鮭魚卵丼 $380", en: "Scallop&Roe", jp: "ホタテいくら", kr: "관자연어알", price: "$380" },
        { zh: "綜合海景丼 $420", en: "Deluxe", jp: "特上", kr: "특상", price: "$420" },
        { zh: "吃漢海景丼 $560", en: "Supreme", jp: "究極", kr: "스페셜", price: "$560" }
    ]},
    
    // Page 1 Drinks
    p1_drink_soft: { title: {zh:"無酒精性飲料",en:"Non-Alcoholic",jp:"ソフトドリンク",kr:"음료"}, items: [
        { zh: "可樂 $30", en: "Coke", jp: "コーラ", kr: "콜라", price: "$30" },
        { zh: "雪碧 $30", en: "Sprite", jp: "スプライト", kr: "스프라이트", price: "$30" },
        { zh: "烏龍茶 $30", en: "Oolong Tea", jp: "ウーロン茶", kr: "우롱차", price: "$30" },
        { zh: "荔枝烏龍茶 $60", en: "Lychee Oolong", jp: "ライチウーロン", kr: "리치 우롱차", price: "$60" },
        { zh: "可爾必思 $50", en: "Calpis", jp: "カルピス", kr: "칼피스", price: "$50" },
        { zh: "蜜桃可爾必思 $50", en: "Peach Calpis", jp: "ピーチカルピス", kr: "복숭아 칼피스", price: "$50" }
    ]},
    p1_drink_soda: { title: {zh:"氣泡飲",en:"Sparkling",jp:"ソーダ",kr:"에이드"}, items: [
        { zh: "海鹽檸檬氣泡飲 $90", en: "Salt Lemon", jp: "塩レモン", kr: "소금 레몬", price: "$90" },
        { zh: "岩鹽荔枝氣泡飲 $90", en: "Salt Lychee", jp: "岩塩ライチ", kr: "암염 리치", price: "$90" },
        { zh: "巨峰葡萄氣泡飲 $90", en: "Grape", jp: "巨峰", kr: "거봉", price: "$90" },
        { zh: "白葡萄氣泡飲 $90", en: "White Grape", jp: "白ブドウ", kr: "청포도", price: "$90" },
        { zh: "可爾必思氣泡飲 $90", en: "Calpis Soda", jp: "カルピスソーダ", kr: "칼피스", price: "$90" },
        { zh: "蜜桃可爾必思氣泡飲 $90", en: "Peach Calpis", jp: "ピーチソーダ", kr: "복숭아", price: "$90" }
    ]},
    p1_drink_beer: { title: {zh:"啤酒/日本酒",en:"Beer/Sake",jp:"酒類",kr:"주류"}, items: [
        { zh: "Asahi生啤酒 $120/杯", en: "Draft Beer", jp: "生ビール", kr: "생맥주", price: "$120" },
        { zh: "白鹿清酒 $120/壺", en: "Sake", jp: "白鹿清酒", kr: "사케", price: "$120" },
        { zh: "本格梅酒 $130/杯", en: "Plum Wine", jp: "梅酒", kr: "매실주", price: "$130" },
        { zh: "柚子酒 $130/杯", en: "Yuzu Wine", jp: "ゆず酒", kr: "유자술", price: "$130" }
    ]},
    p1_drink_sour: { title: {zh:"沙瓦調酒 (濃+$20)",en:"Sour (Dbl+$20)",jp:"サワー",kr:"사와"}, items: [
        { zh: "海鹽檸檬沙瓦 $110", en: "Salt Lemon", jp: "塩レモン", kr: "소금 레몬", price: "$110" },
        { zh: "岩鹽荔枝沙瓦 $110", en: "Salt Lychee", jp: "岩塩ライチ", kr: "암염 리치", price: "$110" },
        { zh: "巨峰葡萄沙瓦 $110", en: "Grape", jp: "巨峰", kr: "거봉", price: "$110" },
        { zh: "白葡萄沙瓦 $110", en: "White Grape", jp: "白ブドウ", kr: "청포도", price: "$110" },
        { zh: "可爾必思沙瓦 $110", en: "Calpis", jp: "カルピス", kr: "칼피스", price: "$110" },
        { zh: "蜜桃可爾必思沙瓦 $110", en: "Peach Calpis", jp: "ピーチ", kr: "복숭아", price: "$110" }
    ]},
    p1_drink_highball: { title: {zh:"High Ball (濃+$20)",en:"Highball (Dbl+$20)",jp:"ハイボール",kr:"하이볼"}, items: [
        { zh: "烏龍角High $110", en: "Oolong", jp: "ウーロン", kr: "우롱", price: "$110" },
        { zh: "海鹽檸檬角High $110", en: "Salt Lemon", jp: "塩レモン", kr: "소금 레몬", price: "$110" },
        { zh: "巨峰葡萄角High $110", en: "Grape", jp: "巨峰", kr: "거봉", price: "$110" },
        { zh: "白葡萄角High $110", en: "White Grape", jp: "白ブドウ", kr: "청포도", price: "$110" },
        { zh: "可爾必思角High $110", en: "Calpis", jp: "カルピス", kr: "칼피스", price: "$110" },
        { zh: "蜜桃可爾必思角High $110", en: "Peach", jp: "ピーチ", kr: "복숭아", price: "$110" }
    ]},

    // --- Page 2 Data (刺身/壽司 - Cold Dishes) ---
    p2_sashimi: { title: {zh:"刺身",en:"Sashimi",jp:"刺身",kr:"사시미"}, items: [
        { zh: "綜合刺身 小6片 $200", en: "Assorted Sashimi (S)", jp: "刺身盛り合わせ (小)", kr: "모듬 사시미 (소)", price: "$200" },
        { zh: "綜合刺身 中9片 $290", en: "Assorted Sashimi (M)", jp: "刺身盛り合わせ (中)", kr: "모듬 사시미 (중)", price: "$290" },
        { zh: "綜合刺身 大12片 $380", en: "Assorted Sashimi (L)", jp: "刺身盛り合わせ (大)", kr: "모듬 사시미 (대)", price: "$380" },
        { zh: "綜合海景刺身 $520", en: "Deluxe Sashimi", jp: "特上刺身盛り合わせ", kr: "특상 모듬 사시미", price: "$520" },
        { zh: "旗魚刺身 $200", en: "Swordfish Sashimi", jp: "カジキマグロ刺身", kr: "황새치 사시미", price: "$200" },
        { zh: "花枝刺身 $200", en: "Squid Sashimi", jp: "イカ刺身", kr: "오징어 사시미", price: "$200" },
        { zh: "紅甘刺身 $200", en: "Amberjack Sashimi", jp: "カンパチ刺身", kr: "잿방어 사시미", price: "$200" },
        { zh: "鮭魚刺身 $220", en: "Salmon Sashimi", jp: "サーモン刺身", kr: "연어 사시미", price: "$220" },
        { zh: "海鱺刺身 $210", en: "Cobia Sashimi", jp: "スギ刺身", kr: "날새기 사시미", price: "$210" },
        { zh: "鮪魚刺身 $220", en: "Tuna Sashimi", jp: "マグロ刺身", kr: "참치 사시미", price: "$220" },
        { zh: "鮭魚肚刺身 $300", en: "Salmon Belly Sashimi", jp: "サーモンハラス刺身", kr: "연어 뱃살 사시미", price: "$300" },
        { zh: "海鱺肚刺身 $280", en: "Cobia Belly Sashimi", jp: "スギハラス刺身", kr: "날새기 뱃살 사시미", price: "$280" },
        { zh: "宮城縣日本XL生蠔 $160", en: "Japan Miyagi XL Oyster", jp: "宮城産XL生牡蠣", kr: "미야기현 XL 생굴", price: "$160" }
    ]},
    p2_nigiri: { title: {zh:"握壽司",en:"Nigiri Sushi",jp:"握り寿司",kr:"초밥"}, items: [
        { zh: "紅甘握壽司 $50", en: "Amberjack Nigiri", jp: "カンパチ握り", kr: "잿방어 초밥", price: "$50" },
        { zh: "花枝握壽司 $50", en: "Squid Nigiri", jp: "イカ握り", kr: "오징어 초밥", price: "$50" },
        { zh: "旗魚握壽司 $50", en: "Swordfish Nigiri", jp: "カジキマグロ握り", kr: "황새치 초밥", price: "$50" },
        { zh: "鮭魚握壽司 $55", en: "Salmon Nigiri", jp: "サーモン握り", kr: "연어 초밥", price: "$55" },
        { zh: "鮪魚握壽司 $55", en: "Tuna Nigiri", jp: "マグロ握り", kr: "참치 초밥", price: "$55" },
        { zh: "海鱺握壽司 $55", en: "Cobia Nigiri", jp: "スギ握り", kr: "날새기 초밥", price: "$55" },
        { zh: "綜合握壽司 三貫 $150", en: "Assorted Nigiri (3 pcs)", jp: "お任せ握り (3貫)", kr: "모듬 초밥 (3p)", price: "$150" },
        { zh: "炙燒綜合握壽司 三貫 $160", en: "Seared Assorted Nigiri (3 pcs)", jp: "炙り握り (3貫)", kr: "구운 모듬 초밥 (3p)", price: "$160" },
        { zh: "綜合握壽司 六貫 $300", en: "Assorted Nigiri (6 pcs)", jp: "お任せ握り (6貫)", kr: "모듬 초밥 (6p)", price: "$300" },
        { zh: "炙燒綜合握壽司 六貫 $320", en: "Seared Assorted Nigiri (6 pcs)", jp: "炙り握り (6貫)", kr: "구운 모듬 초밥 (6p)", price: "$320" },
        { zh: "鮭魚肚握壽司 $70", en: "Salmon Belly Nigiri", jp: "サーモンハラス握り", kr: "연어 뱃살 초밥", price: "$70" },
        { zh: "海鱺肚握壽司 $70", en: "Cobia Belly Nigiri", jp: "スギハラス握り", kr: "날새기 뱃살 초밥", price: "$70" },
        { zh: "天使紅蝦握壽司 $80", en: "Angel Red Shrimp Nigiri", jp: "赤エビ握り", kr: "홍새우 초밥", price: "$80" },
        { zh: "炙燒鮭魚握壽司 $60", en: "Seared Salmon Nigiri", jp: "炙りサーモン握り", kr: "구운 연어 초밥", price: "$60" },
        { zh: "炙燒焦糖鮭魚 $70", en: "Seared Caramel Salmon", jp: "炙りキャラメルサーモン", kr: "구운 카라멜 연어 초밥", price: "$70" },
        { zh: "炙燒明太子鮭魚 $80", en: "Seared Mentaiko Salmon", jp: "炙り明太子サーモン", kr: "구운 명란 연어 초밥", price: "$80" },
        { zh: "炙燒星鰻握壽司 $60", en: "Seared Eel Nigiri", jp: "穴子握り", kr: "구운 붕장어 초밥", price: "$60" },
        { zh: "炙燒北海道干貝 $80", en: "Seared Hokkaido Scallop", jp: "ホタテ握り", kr: "구운 가리비 관자 초밥", price: "$80" },
        { zh: "炙燒比目魚鰭邊 $80", en: "Seared Flounder Fin", jp: "炙りえんがわ", kr: "구운 광어 지느러미 초밥", price: "$80" }
    ]},
    p2_handroll: { title: {zh:"手卷",en:"Hand Roll",jp:"手巻き寿司",kr:"데마끼"}, items: [
        { zh: "豆皮壽司 $30", en: "Inari Sushi", jp: "いなり寿司", kr: "유부초밥", price: "$30" },
        { zh: "蝦卵手卷 $45", en: "Shrimp Roe Hand Roll", jp: "海老子手巻き", kr: "새우알 데마끼", price: "$45" },
        { zh: "鮮蝦手卷 $45", en: "Shrimp Hand Roll", jp: "海老手巻き", kr: "새우 데마끼", price: "$45" },
        { zh: "星鰻手卷 $55", en: "Eel Hand Roll", jp: "穴子手巻き", kr: "붕장어 데마끼", price: "$55" },
        { zh: "龍蝦蟹肉手卷 $60", en: "Lobster Salad Hand Roll", jp: "ロブスターサラダ手巻き", kr: "랍스터 샐러드 데마끼", price: "$60" },
        { zh: "鮭魚卵手卷 $80", en: "Salmon Roe Hand Roll", jp: "いくら手巻き", kr: "연어알 데마끼", price: "$80" },
        { zh: "炙燒干貝蟹膏手卷 $100", en: "Scallop & Crab Paste Roll", jp: "ホタテ蟹味噌手巻き", kr: "관자 게내장 데마끼", price: "$100" },
        { zh: "海膽手卷 $150", en: "Sea Urchin Hand Roll", jp: "ウニ手巻き", kr: "성게알 데마끼", price: "$150" }
    ]},
    p2_roll: { title: {zh:"壽司卷",en:"Sushi Roll",jp:"巻き寿司",kr:"롤 스시"}, items: [
        { zh: "炸蝦海苔壽司卷 $140", en: "Fried Shrimp Roll", jp: "海老天巻き", kr: "새우튀김 롤", price: "$140" },
        { zh: "炙燒鮭魚加州卷 $260", en: "Seared Salmon Roll", jp: "炙りサーモンロール", kr: "구운 연어 롤", price: "$260" },
        { zh: "明太子鮭魚加州卷 $320", en: "Mentaiko Salmon Roll", jp: "明太子サーモンロール", kr: "명란 연어 롤", price: "$320" },
        { zh: "起司鮭魚加州卷 $320", en: "Cheese Salmon Roll", jp: "チーズサーモンロール", kr: "치즈 연어 롤", price: "$320" }
    ]},
    p2_soup: { title: {zh:"鍋物、湯、麵、炒物",en:"Hot Pot / Soup / Noodles",jp:"鍋物 / スープ / 麺類",kr:"나베 / 국물 / 면류"}, items: [
        { zh: "味增湯 $30", en: "Miso Soup", jp: "味噌汁", kr: "미소장국", price: "$30" },
        { zh: "蛤蠣湯 $60", en: "Clam Soup", jp: "アサリの吸い物", kr: "조개탕", price: "$60" },
        { zh: "味增蛤蠣湯 $80", en: "Miso Clam Soup", jp: "アサリ味噌汁", kr: "조개 미소장국", price: "$80" },
        { zh: "泡菜炒豬肉 $120", en: "Kimchi Stir-fried Pork", jp: "豚キムチ", kr: "돼지고기 김치볶음", price: "$120" },
        { zh: "酒蒸蛤蠣 $150", en: "Sake Steamed Clams", jp: "アサリの酒蒸し", kr: "바지락 술찜", price: "$150" },
        { zh: "豚骨豬肉湯烏龍 $170", en: "Pork Udon", jp: "豚骨うどん", kr: "돈코츠 우동", price: "$170" },
        { zh: "日式炸蝦湯烏龍 $180", en: "Fried Shrimp Udon", jp: "海老天うどん", kr: "새우튀김 우동", price: "$180" },
        { zh: "雞白湯烏龍 $200", en: "Chicken Soup Udon", jp: "鶏白湯うどん", kr: "토리파이탄 우동", price: "$200" },
        { zh: "明太子炒烏龍 $260", en: "Mentaiko Stir-fried Udon", jp: "明太子焼きうどん", kr: "명란 볶음 우동", price: "$260" },
        { zh: "泡菜豬肉豆腐鍋 $230", en: "Kimchi Pork Tofu Pot", jp: "キムチ鍋", kr: "김치찌개", price: "$230" }
    ]},
    p2_hotpot: { title: {zh:"火鍋",en:"Hot Pot",jp:"鍋物",kr:"나베"}, items: [
        { zh: "豚骨相撲鍋 $400", en: "Tonkotsu Sumo Pot", jp: "ちゃんこ鍋", kr: "돈코츠 창코나베", price: "$400" },
        { zh: "剝皮辣椒雞湯鍋 $500", en: "Chili Chicken Soup Pot", jp: "唐辛子鶏鍋", kr: "고추 닭고기 나베", price: "$500" }
    ]},

    // --- Page 3 Data (Grills/Fried - Hot Dishes) ---
    p3_beef: { title: {zh:"烤牛肉",en:"Grilled Beef",jp:"牛肉焼き",kr:"소고기 구이"}, items: [
        { zh: "鹽蔥牛五花串 $90", en: "Beef Belly w/ Scallion", jp: "牛バラ肉のネギ塩焼き", kr: "소고기 뱃살 파소금구이", price: "$90" },
        { zh: "起司牛五花串 $100", en: "Beef Belly w/ Cheese", jp: "牛バラ肉のチーズ焼き", kr: "소고기 뱃살 치즈구이", price: "$100" },
        { zh: "明太子牛五花串 $100", en: "Beef Belly w/ Mentaiko", jp: "牛バラ肉の明太子焼き", kr: "소고기 뱃살 명란구이", price: "$100" },
        { zh: "剝皮辣椒牛五花串 $110", en: "Beef Belly w/ Chili", jp: "牛バラ肉の唐辛子巻き", kr: "소고기 뱃살 고추말이", price: "$110" },
        { zh: "鹽烤牛小排串 $120", en: "Short Rib Skewer", jp: "骨付きカルビ串", kr: "LA갈비 꼬치구이", price: "$120" },
        { zh: "鹽烤牛肋條串 $140", en: "Beef Rib Finger Skewer", jp: "中落ちカルビ串", kr: "갈비 늑간살 구이", price: "$140" },
        { zh: "鹽蔥牛舌 $200", en: "Beef Tongue w/ Scallion", jp: "ネギ塩牛タン", kr: "파소금 우설구이", price: "$200" },
        { zh: "帶骨牛小排 $240", en: "Bone-in Short Ribs", jp: "骨付きカルビ", kr: "LA갈비 구이", price: "$240" },
        { zh: "和牛漢堡排 $240", en: "Wagyu Hamburger", jp: "和牛ハンバーグ", kr: "와규 함박스테이크", price: "$240" },
        { zh: "和牛肋條串 $260", en: "Wagyu Rib Finger Skewer", jp: "和牛中落ちカルビ串", kr: "와규 늑간살 꼬치", price: "$260" },
        { zh: "Prime沙朗牛排 $300", en: "Prime Sirloin Steak", jp: "プライムサーロイン", kr: "프라임 등심 스테이크", price: "$300" }
    ]},
    p3_seafood: { title: {zh:"烤海鮮",en:"Grilled Seafood",jp:"海鮮焼き",kr:"해산물 구이"}, items: [
        { zh: "鹽烤鯛魚下巴 $120", en: "Sea Bream Chin", jp: "鯛のカマ焼き", kr: "도미 머리 구이", price: "$120" },
        { zh: "鹽烤鯖魚 $120", en: "Grilled Mackerel", jp: "サバの塩焼き", kr: "고등어 소금구이", price: "$120" },
        { zh: "竹筴魚一夜干 $180", en: "Horse Mackerel Ichiyaboshi", jp: "アジの一夜干し", kr: "전갱이 반건조 구이", price: "$180" },
        { zh: "福氣鱈魚卵 $200", en: "Grilled Cod Roe", jp: "タラコ焼き", kr: "명란 구이", price: "$200" },
        { zh: "鹽烤大草蝦 $200", en: "Grilled Giant Prawns", jp: "大エビの塩焼き", kr: "대하 소금구이", price: "$200" },
        { zh: "鹽烤虱目魚肚 $200", en: "Grilled Milkfish Belly", jp: "サバヒーの腹身焼き", kr: "밀크피쉬 뱃살 구이", price: "$200" },
        { zh: "花魚一夜干 $280", en: "Atka Mackerel Ichiyaboshi", jp: "ホッケの一夜干し", kr: "임연수어 반건조 구이", price: "$280" },
        { zh: "現流午仔魚 $280", en: "Grilled Threadfin", jp: "ツバメコノシロ焼き", kr: "날가지숭어 구이", price: "$280" },
        { zh: "鹽烤透抽 $280", en: "Grilled Squid", jp: "イカの丸焼き", kr: "오징어 통구이", price: "$280" },
        { zh: "鹽烤鮭魚肚 $320", en: "Salmon Belly", jp: "鮭ハラス焼き", kr: "연어 뱃살 구이", price: "$320" },
        { zh: "鹽烤海鱺肚 $340", en: "Cobia Belly", jp: "スギのハラス焼き", kr: "날새기 뱃살 구이", price: "$340" },
        { zh: "鹽烤紅甘下巴 $320", en: "Amberjack Chin", jp: "カンパチのカマ焼き", kr: "잿방어 머리 구이", price: "$320" },
        { zh: "鹽烤海鱺下巴 $320", en: "Cobia Chin", jp: "スギのカマ焼き", kr: "날새기 머리 구이", price: "$320" },
        { zh: "鹽烤鮭魚下巴 $360", en: "Salmon Chin", jp: "鮭のカマ焼き", kr: "연어 머리 구이", price: "$360" }
    ]},
    p3_chicken: { title: {zh:"烤雞肉/烤羊肉",en:"Chicken/Lamb",jp:"焼き鳥/羊肉",kr:"닭고기/양고기"}, items: [
        { zh: "鹽烤雞腿肉串 $110", en: "Salt-Grilled Chicken Thigh", jp: "鶏もも肉の塩焼き", kr: "닭다리살 소금구이", price: "$110" },
        { zh: "醬烤雞腿肉串 $110", en: "Sauce-Grilled Chicken Thigh", jp: "鶏もも肉のタレ焼き", kr: "닭다리살 양념구이", price: "$110" },
        { zh: "芥末雞腿肉串 $110", en: "Chicken Thigh w/ Wasabi", jp: "鶏もも肉わさび焼き", kr: "닭다리살 와사비구이", price: "$110" },
        { zh: "起司雞腿肉串 $120", en: "Chicken Thigh w/ Cheese", jp: "鶏もも肉チーズ焼き", kr: "닭다리살 치즈구이", price: "$120" },
        { zh: "明太子雞腿肉串 $150", en: "Chicken Thigh w/ Mentaiko", jp: "鶏もも肉明太子焼き", kr: "닭다리살 명란구이", price: "$150" },
        { zh: "醬烤雞腿排 $120", en: "Chicken Thigh Steak", jp: "鶏もも肉のステーキ", kr: "닭다리살 스테이크", price: "$120" },
        { zh: "吃漢雞肉丸 $120", en: "Chicken Meatball", jp: "特製つくね", kr: "특제 츠쿠네", price: "$120" },
        { zh: "明太子雞肉丸 $150", en: "Mentaiko Meatball", jp: "明太子つくね", kr: "명란 츠쿠네", price: "$150" },
        { zh: "鹽烤雞尾股串 $100", en: "Salt-Grilled Chicken Tail", jp: "ぼんじり塩焼き", kr: "닭 꼬리 소금구이", price: "$100" },
        { zh: "醬烤雞尾股串 $100", en: "Sauce-Grilled Chicken Tail", jp: "ぼんじりタレ焼き", kr: "닭 꼬리 양념구이", price: "$100" },
        { zh: "鹽烤雞皮串 $100", en: "Salt-Grilled Chicken Skin", jp: "鶏皮塩焼き", kr: "닭 껍질 소금구이", price: "$100" },
        { zh: "醬烤雞皮串 $100", en: "Sauce-Grilled Chicken Skin", jp: "鶏皮タレ焼き", kr: "닭 껍질 양념구이", price: "$100" },
        { zh: "鹽烤三節翅 $120", en: "Salt-Grilled Chicken Wings", jp: "手羽先塩焼き", kr: "닭날개 소금구이", price: "$120" },
        { zh: "孜然羊肉串 $100", en: "Cumin Lamb Skewer", jp: "ラム肉のクミン焼き", kr: "쯔란 양꼬치", price: "$100" }
    ]},
    p3_pork: { title: {zh:"烤豬肉",en:"Grilled Pork",jp:"豚肉焼き",kr:"돼지고기 구이"}, items: [
        { zh: "鹽烤豬里肌 $100", en: "Salt-Grilled Pork Loin", jp: "豚ロース塩焼き", kr: "돼지 등심 소금구이", price: "$100" },
        { zh: "鹽烤豬五花串 $120", en: "Salt-Grilled Pork Belly", jp: "豚バラ塩焼き", kr: "삼겹살 소금구이", price: "$120" },
        { zh: "鹽蔥豬五花串 $120", en: "Pork Belly w/ Scallion", jp: "豚バラネギ塩焼き", kr: "삼겹살 파소금구이", price: "$120" },
        { zh: "醬烤豬五花串 $120", en: "Sauce-Grilled Pork Belly", jp: "豚バラタレ焼き", kr: "삼겹살 양념구이", price: "$120" },
        { zh: "芥末豬五花串 $120", en: "Pork Belly w/ Wasabi", jp: "豚バラわさび焼き", kr: "삼겹살 와사비구이", price: "$120" },
        { zh: "鹽烤松阪豬 $130", en: "Salt-Grilled Pork Jowl", jp: "トントロ塩焼き", kr: "항정살 소금구이", price: "$130" },
        { zh: "脆嫩肥腸 $200", en: "Crispy Pork Intestine", jp: "ホルモン焼き", kr: "대창 구이", price: "$200" },
        { zh: "烤鹹豬肉 $200", en: "Grilled Salty Pork", jp: "スーチーカー(塩漬け豚)", kr: "소금절임 돼지고기", price: "$200" }
    ]},
    p3_veg: { title: {zh:"烤蔬菜",en:"Grilled Veggies",jp:"野菜焼き",kr:"채소 구이"}, items: [
        { zh: "鹽烤香菇 $80", en: "Salt-Grilled Shiitake", jp: "しいたけ塩焼き", kr: "표고버섯 구이", price: "$80" },
        { zh: "鹽烤節瓜 $100", en: "Salt-Grilled Zucchini", jp: "ズッキーニ塩焼き", kr: "애호박 구이", price: "$100" },
        { zh: "鹽烤山藥 $120", en: "Salt-Grilled Yam", jp: "山芋塩焼き", kr: "마 구이", price: "$120" },
        { zh: "起司地瓜 $150", en: "Sweet Potato w/ Cheese", jp: "サツマイモチーズ", kr: "치즈 고구마", price: "$150" },
        { zh: "明太子節瓜 $150", en: "Zucchini w/ Mentaiko", jp: "ズッキーニ明太子", kr: "명란 애호박", price: "$150" },
        { zh: "明太子山藥 $170", en: "Yam w/ Mentaiko", jp: "山芋明太子", kr: "명란 마 구이", price: "$170" }
    ]},
    p3_fried: { title: {zh:"炸物",en:"Fried Food",jp:"揚げ物",kr:"튀김"}, items: [
        { zh: "雞肉洋蔥圈 $80", en: "Chicken Onion Rings", jp: "オニオンリング", kr: "어니언링", price: "$80" },
        { zh: "日式炸豆腐 $100", en: "Agedashi Tofu", jp: "揚げ出し豆腐", kr: "아게다시 두부", price: "$100" },
        { zh: "日式炸豬排 $100", en: "Fried Pork Cutlet", jp: "とんかつ", kr: "돈까스", price: "$100" },
        { zh: "起司可樂餅 $120", en: "Cheese Croquette", jp: "チーズコロッケ", kr: "치즈 고로케", price: "$120" },
        { zh: "香辣兩節翅 $120", en: "Spicy Chicken Wings", jp: "スパイシー手羽先", kr: "매운 닭날개", price: "$120" },
        { zh: "日式炸蝦 $120", en: "Fried Shrimp", jp: "海老フライ", kr: "새우튀김", price: "$120" },
        { zh: "酥炸竹筴魚 $120", en: "Fried Horse Mackerel", jp: "アジフライ", kr: "전갱이튀김", price: "$120" },
        { zh: "唐揚炸雞 $150", en: "Chicken Karaage", jp: "若鶏の唐揚げ", kr: "치킨 가라아게", price: "$150" },
        { zh: "炸廣島牡蠣 $160", en: "Fried Oysters", jp: "カキフライ", kr: "굴튀김", price: "$160" },
        { zh: "吃漢牛肉餅 $160", en: "Menchi Katsu", jp: "メンチカツ", kr: "멘치카츠", price: "$160" },
        { zh: "蔬菜天婦羅 $180", en: "Vegetable Tempura", jp: "野菜天ぷら", kr: "야채 튀김", price: "$180" },
        { zh: "南蠻炸雞 $200", en: "Chicken Nanban", jp: "チキン南蛮", kr: "치킨난반", price: "$200" }
    ]},
    p3_sides: { title: {zh:"小菜 / 沙拉",en:"Sides / Salad",jp:"前菜 / サラダ",kr:"전채 / 샐러드"}, items: [
        { zh: "茶碗蒸 $30", en: "Chawanmushi (Steamed Egg)", jp: "茶碗蒸し", kr: "계란찜", price: "$30" },
        { zh: "柚香蘿蔔 $40", en: "Yuzu Pickled Radish", jp: "柚子大根", kr: "유자 단무지", price: "$40" },
        { zh: "毛豆 $40", en: "Edamame", jp: "枝豆", kr: "에다마메", price: "$40" },
        { zh: "日式溫泉蛋 $40", en: "Onsen Egg", jp: "温泉卵", kr: "온천 달걀", price: "$40" },
        { zh: "韓式泡菜 $60", en: "Kimchi", jp: "キムチ", kr: "김치", price: "$60" },
        { zh: "芥末章魚 $70", en: "Wasabi Octopus", jp: "たこわさ", kr: "타코와사비", price: "$70" },
        { zh: "海帶芽洋蔥沙拉 $80", en: "Seaweed Onion Salad", jp: "ワカメと玉ねぎサラダ", kr: "미역 양파 샐러드", price: "$80" },
        { zh: "胡麻柴魚豆腐 $80", en: "Sesame Tofu", jp: "ゴマダレ冷奴", kr: "참깨소스 두부", price: "$80" },
        { zh: "涼拌胡麻秋葵 $80", en: "Sesame Okra", jp: "オクラの胡麻和え", kr: "오크라 무침", price: "$80" },
        { zh: "香辣去骨鳳爪 $120", en: "Spicy Boneless Chicken Feet", jp: "骨なし鶏足", kr: "매운 무뼈 닭발", price: "$120" },
        { zh: "秋葵山藥冷豆腐 $150", en: "Okra Yam Tofu", jp: "山芋オクラ冷奴", kr: "마 오크라 두부", price: "$150" },
        { zh: "奶油起司火煥蒸蛋 $150", en: "Cream Cheese Steamed Egg", jp: "チーズ茶碗蒸し", kr: "치즈 계란찜", price: "$150" },
        { zh: "日式煎餃 $150", en: "Gyoza", jp: "焼き餃子", kr: "교자", price: "$150" },
        { zh: "鱈魚肝佐橙醋醬 $180", en: "Cod Liver w/ Ponzu", jp: "あん肝ポン酢", kr: "대구 간 폰즈소스", price: "$180" },
        { zh: "吃漢滷牛筋 $180", en: "Braised Beef Tendon", jp: "牛すじ煮込み", kr: "소힘줄 조림", price: "$180" },
        { zh: "炙燒干貝蟹膏堡 $200", en: "Seared Scallop & Crab Paste", jp: "炙りホタテ蟹味噌", kr: "구운 관자 게내장", price: "$200" }
    ]}
};

// === 靜態文字與翻譯庫 ===
const staticText = {
    notice: {
        zh: "<b>注意事項</b><br>1. 丼飯皆附味增湯、外帶不提供套餐。<br>2. 餐點皆現做，請耐心等候。<br>3. 自帶一瓶酒水需點兩杯啤酒抵開瓶費。<br>4. 寵物如需上坐請自備毯子。<br>5. 牛、豬丼飯大部分都提供溫泉蛋，如需全熟請自行告知。",
        en: "<b>Notice</b><br>1. Includes Miso Soup. Sets not for takeout.<br>2. Made to order, please wait.<br>3. Corkage fee waived if ordering 2 beers/bottle.<br>4. Pets need blankets.<br>5. Soft-boiled egg inc. Ask for fully cooked.",
        jp: "<b>注意事項</b><br>1. 味噌汁付き。セットのテイクアウト不可。<br>2. 注文後調理のためお待ちください。<br>3. 持ち込み料：ボトル1本につきビール2杯で無料。<br>4. ペットは毛布をご持参ください。<br>5. 温泉卵付き。完熟希望はお知らせください。",
        kr: "<b>주의사항</b><br>1. 국 포함. 세트 포장 불가.<br>2. 즉시 조리합니다.<br>3. 콜키지 프리: 병당 맥주 2잔 주문 시.<br>4. 반려동물 담요 지참.<br>5. 온천계란 포함."
    },
    setOptions: {
        zh: "套餐+50 (小菜、茶碗蒸) | 套餐+100 (小菜、茶碗蒸、甜點)",
        en: "Set +$50 (Side, Steamed Egg) | Set +$100 (Side, Steamed Egg, Dessert)",
        jp: "セット +$50 (小鉢、茶碗蒸し) | セット +$100 (小鉢、茶碗蒸し、デザート)",
        kr: "세트 +$50 (반찬, 계란찜) | 세트 +$100 (반찬, 계란찜, 디저트)"
    },
    riceNote: { zh: "#丼飯皆附味增湯", en: "#Includes Miso Soup", jp: "#味噌汁付き", kr: "#미소장국 포함" },
    
    // === 新增：標題翻譯庫 ===
    titles: {
        ricebowl: { zh: "丼飯", en: "Rice Bowl", jp: "丼もの", kr: "덮밥" },
        drinks: { zh: "飲料 / 酒類", en: "Drinks / Alcohol", jp: "ドリンク / お酒", kr: "음료 / 주류" },
        
        // Page 2 (Sashimi/Sushi)
        sashimi: { zh: "刺身", en: "Sashimi", jp: "刺身", kr: "사시미" },
        sashimiNote: { zh: "(綜合刺身無法指定品項)", en: "(Assorted selection cannot be specified)", jp: "(盛り合わせの内容は指定できません)", kr: "(모듬 구성 변경 불가)" },
        nigiri: { zh: "握壽司", en: "Nigiri Sushi", jp: "握り寿司", kr: "초밥" },
        handroll: { zh: "手卷", en: "Hand Roll", jp: "手巻き寿司", kr: "데마끼" },
        roll: { zh: "壽司卷", en: "Sushi Roll", jp: "巻き寿司", kr: "롤 스시" },
        soupNoodle: { zh: "鍋物、湯、麵、炒物", en: "Hot Pot / Soup / Noodles", jp: "鍋物 / スープ / 麺類", kr: "나베 / 국물 / 면류" },
        hotpot: { zh: "火鍋", en: "Hot Pot", jp: "鍋物", kr: "나베" },

        // Page 3 (Grill/Fried)
        grill: { zh: "烤物", en: "Grilled Dish", jp: "焼き物", kr: "구이류" },
        grillWarn: { 
            zh: "烤物皆現烤 請耐心等候", 
            en: "Grilled items are made to order, please wait.", 
            jp: "焼き物は注文後調理します。少々お待ちください。", 
            kr: "구이류는 주문 즉시 조리하므로 시간이 소요됩니다." 
        },
        fried: { zh: "炸物", en: "Fried Dish", jp: "揚げ物", kr: "튀김류" },
        sides: { zh: "小菜 / 沙拉", en: "Sides / Salad", jp: "前菜 / サラダ", kr: "전채 / 샐러드" }
    }
};

function showMenu(lang) {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('menu-slider').style.display = 'flex';
    document.getElementById('back-btn').style.display = 'block';
    document.getElementById('btn-prev').style.display = 'flex';
    document.getElementById('btn-next').style.display = 'flex';
    document.getElementById('page-indicator').style.display = 'block';

    // 填入基礎文字
    document.getElementById('notice-box').innerHTML = staticText.notice[lang];
    document.getElementById('set-options').innerText = staticText.setOptions[lang];
    document.getElementById('rice-note').innerText = staticText.riceNote[lang];

    // === 更新所有標題 (翻譯邏輯) ===
    const t = staticText.titles;
    updateTitle('t-ricebowl', t.ricebowl, lang);
    updateTitle('t-drinks', t.drinks, lang);
    
    // Page 2 Titles
    document.getElementById('t-sashimi-block').innerHTML = `${t.sashimi[lang]}<br><span class="small-text">${t.sashimiNote[lang]} <br> ${t.sashimi.zh} ${t.sashimiNote.zh}</span>`;
    
    updateTitle('t-nigiri', t.nigiri, lang);
    updateTitle('t-handroll', t.handroll, lang);
    updateTitle('t-roll', t.roll, lang);
    updateTitle('t-soup-noodle', t.soupNoodle, lang);
    updateTitle('t-hotpot', t.hotpot, lang);

    // Page 3 Titles
    updateTitle('t-grill', t.grill, lang);
    updateTitle('t-fried', t.fried, lang);
    updateTitle('t-sides', t.sides, lang);
    
    // 警語翻譯 (紅色框框)
    document.getElementById('t-grill-warn').innerHTML = `${t.grillWarn[lang]}<br><span>${t.grillWarn.zh}</span>`;

    // --- 渲染內容 ---
    // Page 1
    renderGroup('p1-beef', menuData.p1_beef, lang);
    renderGroup('p1-chicken', menuData.p1_chicken, lang);
    renderGroup('p1-pork', menuData.p1_pork, lang);
    renderGroup('p1-seafood-cooked', menuData.p1_seafood_cooked, lang);
    renderGroup('p1-raw', menuData.p1_raw, lang);
    renderGroup('p1-drink-soft', menuData.p1_drink_soft, lang);
    renderGroup('p1-drink-soda', menuData.p1_drink_soda, lang);
    renderGroup('p1-drink-beer', menuData.p1_drink_beer, lang);
    renderGroup('p1-drink-sour', menuData.p1_drink_sour, lang);
    renderGroup('p1-drink-highball', menuData.p1_drink_highball, lang);

    // Page 2 (Sashimi/Sushi) - Changed target IDs to match data
    renderGroup('p2-sashimi', menuData.p2_sashimi, lang);
    renderGroup('p2-nigiri', menuData.p2_nigiri, lang);
    renderGroup('p2-handroll', menuData.p2_handroll, lang);
    renderGroup('p2-roll', menuData.p2_roll, lang);
    renderGroup('p2-soup', menuData.p2_soup, lang);
    renderGroup('p2-hotpot', menuData.p2_hotpot, lang);

    // Page 3 (Grill/Fried) - Changed target IDs to match data
    renderGroup('p3-beef', menuData.p3_beef, lang);
    renderGroup('p3-seafood', menuData.p3_seafood, lang);
    renderGroup('p3-chicken', menuData.p3_chicken, lang);
    renderGroup('p3-pork', menuData.p3_pork, lang);
    renderGroup('p3-veg', menuData.p3_veg, lang);
    renderGroup('p3-fried', menuData.p3_fried, lang);
    renderGroup('p3-sides', menuData.p3_sides, lang);

    updateIndicator();
}

// 輔助函數：更新標題 (外文 + 中文)
function updateTitle(id, data, lang) {
    const el = document.getElementById(id);
    if(el) {
        if (lang === 'zh') {
            el.innerHTML = data.zh;
        } else {
            el.innerHTML = `${data[lang]} <br><span>${data.zh}</span>`;
        }
    }
}

// 渲染群組
function renderGroup(targetId, data, lang) {
    const div = document.getElementById(targetId);
    if (!div) return;
    div.innerHTML = '';

    const groupDiv = document.createElement('div');
    groupDiv.className = 'menu-group';

    // 標題
    if (data.title && data.title[lang]) {
        const title = document.createElement('div');
        title.className = 'group-header-text';
        if(lang === 'zh') {
            title.innerText = data.title.zh;
        } else {
            title.innerHTML = `${data.title[lang]} <span>${data.title.zh}</span>`;
        }
        groupDiv.appendChild(title);
    }

    data.items.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.className = 'menu-item';

        const check = document.createElement('div');
        check.className = 'checkbox-square';

        const info = document.createElement('div');
        info.className = 'item-info';

        const nameRow = document.createElement('div');
        nameRow.className = 'name-row';

        const mainName = document.createElement('span');
        mainName.className = 'name-main';
        
        let displayName = item[lang];
        let priceText = item.price;
        if (item[lang].includes('$')) {
            let parts = item[lang].split('$');
            displayName = parts[0].trim();
        }

        mainName.innerText = displayName;

        const priceTag = document.createElement('span');
        priceTag.className = 'price-tag';
        priceTag.innerText = priceText;

        nameRow.appendChild(mainName);
        nameRow.appendChild(priceTag);

        const subName = document.createElement('span');
        subName.className = 'name-sub';
        let zhName = item.zh.split('$')[0].trim();
        subName.innerText = zhName;

        info.appendChild(nameRow);
        info.appendChild(subName);

        itemRow.appendChild(check);
        itemRow.appendChild(info);
        groupDiv.appendChild(itemRow);
    });

    div.appendChild(groupDiv);
}

function changePage(dir) {
    const slider = document.getElementById('menu-slider');
    const width = window.innerWidth;
    slider.scrollBy({ left: dir * width, behavior: 'smooth' });
}

function updateIndicator() {
    const slider = document.getElementById('menu-slider');
    const pageIndex = Math.round(slider.scrollLeft / window.innerWidth) + 1;
    document.getElementById('page-indicator').innerText = `Page ${pageIndex} / 3`;
}

function goHome() {
    document.getElementById('landing-page').style.display = 'flex';
    document.getElementById('menu-slider').style.display = 'none';
    document.getElementById('back-btn').style.display = 'none';
    document.getElementById('btn-prev').style.display = 'none';
    document.getElementById('btn-next').style.display = 'none';
    document.getElementById('page-indicator').style.display = 'none';
}