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

    // --- Page 2 Data (刺身/壽司 - 原 Page 3) ---
    sashimi: { title: {zh:"",en:"",jp:"",kr:""}, items: [
        { zh: "綜合刺身 小6片 $200", en: "Assorted(S)", jp: "盛り合わせ(小)", kr: "모듬(소)", price: "$200" },
        { zh: "綜合刺身 中9片 $290", en: "Assorted(M)", jp: "盛り合わせ(中)", kr: "모듬(중)", price: "$290" },
        { zh: "綜合刺身 大12片 $380", en: "Assorted(L)", jp: "盛り合わせ(大)", kr: "모듬(대)", price: "$380" },
        { zh: "綜合海景刺身 $520", en: "Deluxe", jp: "特上", kr: "특상", price: "$520" },
        { zh: "旗魚刺身 $200", en: "Swordfish", jp: "カジキマグロ", kr: "황새치", price: "$200" },
        { zh: "花枝刺身 $200", en: "Squid", jp: "イカ", kr: "오징어", price: "$200" },
        { zh: "紅甘刺身 $200", en: "Amberjack", jp: "カンパチ", kr: "잿방어", price: "$200" },
        { zh: "鮭魚刺身 $220", en: "Salmon", jp: "サーモン", kr: "연어", price: "$220" },
        { zh: "海鱺刺身 $210", en: "Cobia", jp: "スギ", kr: "날새기", price: "$210" },
        { zh: "鮪魚刺身 $220", en: "Tuna", jp: "マグロ", kr: "참치", price: "$220" },
        { zh: "鮭魚肚刺身 $300", en: "Salmon Belly", jp: "サーモンハラス", kr: "연어뱃살", price: "$300" },
        { zh: "海鱺肚刺身 $280", en: "Cobia Belly", jp: "スギハラス", kr: "날새기뱃살", price: "$280" },
        { zh: "宮城縣日本XL生蠔 $160", en: "XL Oyster", jp: "XL生牡蠣", kr: "XL생굴", price: "$160" }
    ]},
    nigiri: { title: {zh:"",en:"",jp:"",kr:""}, items: [
        { zh: "紅甘握壽司 $50", en: "Amberjack", jp: "カンパチ", kr: "잿방어", price: "$50" },
        { zh: "花枝握壽司 $50", en: "Squid", jp: "イカ", kr: "오징어", price: "$50" },
        { zh: "旗魚握壽司 $50", en: "Swordfish", jp: "カジキ", kr: "황새치", price: "$50" },
        { zh: "鮭魚握壽司 $55", en: "Salmon", jp: "サーモン", kr: "연어", price: "$55" },
        { zh: "鮪魚握壽司 $55", en: "Tuna", jp: "マグロ", kr: "참치", price: "$55" },
        { zh: "海鱺握壽司 $55", en: "Cobia", jp: "スギ", kr: "날새기", price: "$55" },
        { zh: "綜合握壽司 三貫 $150", en: "Assorted(3)", jp: "お任せ(3貫)", kr: "모듬(3p)", price: "$150" },
        { zh: "炙燒綜合握壽司 三貫 $160", en: "Seared(3)", jp: "炙り(3貫)", kr: "구운모듬(3p)", price: "$160" },
        { zh: "綜合握壽司 六貫 $300", en: "Assorted(6)", jp: "お任せ(6貫)", kr: "모듬(6p)", price: "$300" },
        { zh: "炙燒綜合握壽司 六貫 $320", en: "Seared(6)", jp: "炙り(6貫)", kr: "구운모듬(6p)", price: "$320" },
        { zh: "鮭魚肚握壽司 $70", en: "Salmon Belly", jp: "ハラス", kr: "연어뱃살", price: "$70" },
        { zh: "海鱺肚握壽司 $70", en: "Cobia Belly", jp: "スギハラス", kr: "날새기뱃살", price: "$70" },
        { zh: "天使紅蝦握壽司 $80", en: "Angel Shrimp", jp: "赤エビ", kr: "홍새우", price: "$80" },
        { zh: "炙燒鮭魚握壽司 $60", en: "Seared Salmon", jp: "炙りサーモン", kr: "구운연어", price: "$60" },
        { zh: "炙燒焦糖鮭魚 $70", en: "Caramel Salmon", jp: "キャラメル", kr: "카라멜연어", price: "$70" },
        { zh: "炙燒明太子鮭魚 $80", en: "Mentaiko Salmon", jp: "明太子", kr: "명란연어", price: "$80" },
        { zh: "炙燒星鰻握壽司 $60", en: "Eel", jp: "穴子", kr: "붕장어", price: "$60" },
        { zh: "炙燒北海道干貝 $80", en: "Scallop", jp: "ホタテ", kr: "관자", price: "$80" },
        { zh: "炙燒比目魚鰭邊 $80", en: "Flounder Fin", jp: "えんがわ", kr: "광어지느러미", price: "$80" }
    ]},
    handroll: { title: {zh:"",en:"",jp:"",kr:""}, items: [
        { zh: "豆皮壽司 $30", en: "Inari", jp: "いなり", kr: "유부초밥", price: "$30" },
        { zh: "蝦卵手卷 $45", en: "Shrimp Roe", jp: "海老子", kr: "새우알", price: "$45" },
        { zh: "鮮蝦手卷 $45", en: "Shrimp", jp: "海老", kr: "새우", price: "$45" },
        { zh: "星鰻手卷 $55", en: "Eel", jp: "穴子", kr: "붕장어", price: "$55" },
        { zh: "龍蝦蟹肉手卷 $60", en: "Lobster Salad", jp: "ロブスター", kr: "랍스터샐러드", price: "$60" },
        { zh: "鮭魚卵手卷 $80", en: "Salmon Roe", jp: "いくら", kr: "연어알", price: "$80" },
        { zh: "炙燒干貝蟹膏手卷 $100", en: "Scallop Paste", jp: "ホタテ蟹味噌", kr: "관자게내장", price: "$100" },
        { zh: "海膽手卷 $150", en: "Sea Urchin", jp: "ウニ", kr: "성게알", price: "$150" }
    ]},
    roll: { title: {zh:"",en:"",jp:"",kr:""}, items: [
        { zh: "炸蝦海苔壽司卷 $140", en: "Fried Shrimp", jp: "海老天巻き", kr: "새우튀김롤", price: "$140" },
        { zh: "炙燒鮭魚加州卷 $260", en: "Salmon Roll", jp: "サーモンロール", kr: "연어롤", price: "$260" },
        { zh: "明太子鮭魚加州卷 $320", en: "Mentaiko Roll", jp: "明太子ロール", kr: "명란롤", price: "$320" },
        { zh: "起司鮭魚加州卷 $320", en: "Cheese Roll", jp: "チーズロール", kr: "치즈롤", price: "$320" }
    ]},
    soup: { title: {zh:"",en:"",jp:"",kr:""}, items: [
        { zh: "味增湯 $30", en: "Miso Soup", jp: "味噌汁", kr: "미소장국", price: "$30" },
        { zh: "蛤蠣湯 $60", en: "Clam Soup", jp: "アサリ汁", kr: "조개탕", price: "$60" },
        { zh: "味增蛤蠣湯 $80", en: "Miso Clam", jp: "アサリ味噌", kr: "조개미소", price: "$80" },
        { zh: "泡菜炒豬肉 $120", en: "Kimchi Pork", jp: "豚キムチ", kr: "김치제육", price: "$120" },
        { zh: "酒蒸蛤蠣 $150", en: "Sake Clam", jp: "酒蒸し", kr: "술찜", price: "$150" },
        { zh: "豚骨豬肉湯烏龍 $170", en: "Pork Udon", jp: "豚骨うどん", kr: "돈코츠우동", price: "$170" },
        { zh: "日式炸蝦湯烏龍 $180", en: "Shrimp Udon", jp: "海老天うどん", kr: "새우튀김우동", price: "$180" },
        { zh: "雞白湯烏龍 $200", en: "Chicken Udon", jp: "鶏白湯うどん", kr: "토리파이탄", price: "$200" },
        { zh: "明太子炒烏龍 $260", en: "Mentaiko Udon", jp: "明太子うどん", kr: "명란우동", price: "$260" },
        { zh: "泡菜豬肉豆腐鍋 $230", en: "Kimchi Pot", jp: "キムチ鍋", kr: "김치찌개", price: "$230" }
    ]},
    hotpot: { title: {zh:"",en:"",jp:"",kr:""}, items: [
        { zh: "豚骨相撲鍋 $400", en: "Sumo Pot", jp: "ちゃんこ鍋", kr: "창코나베", price: "$400" },
        { zh: "剝皮辣椒雞湯鍋 $500", en: "Chili Chicken", jp: "唐辛子鶏鍋", kr: "고추닭나베", price: "$500" }
    ]},

    // --- Page 3 Data (烤物/炸物 - 原 Page 2) ---
    grill_beef: { title: {zh:"烤牛肉",en:"Grilled Beef",jp:"牛肉",kr:"소고기"}, items: [
        { zh: "鹽蔥牛五花串 $90", en: "Beef Belly", jp: "牛バラ", kr: "우삼겹", price: "$90" },
        { zh: "起司牛五花串 $100", en: "Cheese Beef", jp: "チーズ牛", kr: "치즈우삼겹", price: "$100" },
        { zh: "明太子牛五花串 $100", en: "Mentaiko Beef", jp: "明太子牛", kr: "명란우삼겹", price: "$100" },
        { zh: "剝皮辣椒牛五花串 $110", en: "Chili Beef", jp: "唐辛子牛", kr: "고추우삼겹", price: "$110" },
        { zh: "鹽烤牛小排串 $120", en: "Short Rib", jp: "カルビ", kr: "갈비", price: "$120" },
        { zh: "鹽烤牛肋條串 $140", en: "Rib Finger", jp: "中落ち", kr: "늑간살", price: "$140" },
        { zh: "鹽蔥牛舌 $200", en: "Tongue", jp: "牛タン", kr: "우설", price: "$200" },
        { zh: "帶骨牛小排 $240", en: "Bone-in Rib", jp: "骨付き", kr: "LA갈비", price: "$240" },
        { zh: "和牛漢堡排 $240", en: "Wagyu Burger", jp: "ハンバーグ", kr: "함박", price: "$240" },
        { zh: "和牛肋條串 $260", en: "Wagyu Rib", jp: "和牛カルビ", kr: "와규갈비", price: "$260" },
        { zh: "Prime沙朗牛排 $300", en: "Sirloin", jp: "サーロイン", kr: "등심", price: "$300" }
    ]},
    grill_seafood: { title: {zh:"烤海鮮",en:"Grilled Seafood",jp:"海鮮",kr:"해산물"}, items: [
        { zh: "鹽烤鯛魚下巴 $120", en: "Bream Chin", jp: "鯛カマ", kr: "도미머리", price: "$120" },
        { zh: "鹽烤鯖魚 $120", en: "Mackerel", jp: "サバ", kr: "고등어", price: "$120" },
        { zh: "竹筴魚一夜干 $180", en: "Horse Mackerel", jp: "アジ一夜干し", kr: "전갱이", price: "$180" },
        { zh: "福氣鱈魚卵 $200", en: "Cod Roe", jp: "タラコ", kr: "명란", price: "$200" },
        { zh: "鹽烤大草蝦 $200", en: "Prawns", jp: "大エビ", kr: "대하", price: "$200" },
        { zh: "鹽烤虱目魚肚 $200", en: "Milkfish", jp: "サバヒー", kr: "밀크피쉬", price: "$200" },
        { zh: "花魚一夜干 $280", en: "Atka Mackerel", jp: "ホッケ", kr: "임연수", price: "$280" },
        { zh: "現流午仔魚 $280", en: "Threadfin", jp: "ツバメコノシロ", kr: "날가지숭어", price: "$280" },
        { zh: "鹽烤透抽 $280", en: "Squid", jp: "イカ", kr: "오징어", price: "$280" },
        { zh: "鹽烤鮭魚肚 $320", en: "Salmon Belly", jp: "鮭ハラス", kr: "연어뱃살", price: "$320" },
        { zh: "鹽烤海鱺肚 $340", en: "Cobia Belly", jp: "スギハラス", kr: "날새기뱃살", price: "$340" },
        { zh: "鹽烤紅甘下巴 $320", en: "Amberjack Chin", jp: "カンパチカマ", kr: "잿방어머리", price: "$320" },
        { zh: "鹽烤海鱺下巴 $320", en: "Cobia Chin", jp: "スギカマ", kr: "날새기머리", price: "$320" },
        { zh: "鹽烤鮭魚下巴 $360", en: "Salmon Chin", jp: "鮭カマ", kr: "연어머리", price: "$360" }
    ]},
    grill_chicken: { title: {zh:"烤雞肉/烤羊肉",en:"Chicken/Lamb",jp:"鶏/羊",kr:"닭/양"}, items: [
        { zh: "鹽烤雞腿肉串 $110", en: "Salt Chicken", jp: "鶏塩", kr: "닭소금", price: "$110" },
        { zh: "醬烤雞腿肉串 $110", en: "Sauce Chicken", jp: "鶏タレ", kr: "닭양념", price: "$110" },
        { zh: "芥末雞腿肉串 $110", en: "Wasabi Chicken", jp: "ワサビ", kr: "와사비", price: "$110" },
        { zh: "起司雞腿肉串 $120", en: "Cheese Chicken", jp: "チーズ", kr: "치즈", price: "$120" },
        { zh: "明太子雞腿肉串 $150", en: "Mentaiko Chicken", jp: "明太子", kr: "명란", price: "$150" },
        { zh: "醬烤雞腿排 $120", en: "Chicken Steak", jp: "鶏ステーキ", kr: "닭스테이크", price: "$120" },
        { zh: "吃漢雞肉丸 $120", en: "Meatball", jp: "つくね", kr: "완자", price: "$120" },
        { zh: "明太子雞肉丸 $150", en: "Mentaiko Ball", jp: "明太子つくね", kr: "명란완자", price: "$150" },
        { zh: "鹽烤雞尾股串 $100", en: "Chicken Tail", jp: "ぼんじり", kr: "닭꼬리", price: "$100" },
        { zh: "醬烤雞尾股串 $100", en: "Sauce Tail", jp: "ぼんじりタレ", kr: "양념꼬리", price: "$100" },
        { zh: "鹽烤雞皮串 $100", en: "Chicken Skin", jp: "鶏皮", kr: "닭껍질", price: "$100" },
        { zh: "醬烤雞皮串 $100", en: "Sauce Skin", jp: "鶏皮タレ", kr: "양념껍질", price: "$100" },
        { zh: "鹽烤三節翅 $120", en: "Chicken Wings", jp: "手羽先", kr: "닭날개", price: "$120" },
        { zh: "孜然羊肉串 $100", en: "Cumin Lamb", jp: "ラム", kr: "양꼬치", price: "$100" }
    ]},
    grill_pork: { title: {zh:"烤豬肉",en:"Grilled Pork",jp:"豚肉",kr:"돼지"}, items: [
        { zh: "鹽烤豬里肌 $100", en: "Pork Loin", jp: "豚ロース", kr: "등심", price: "$100" },
        { zh: "鹽烤豬五花串 $120", en: "Pork Belly", jp: "豚バラ", kr: "삼겹살", price: "$120" },
        { zh: "鹽蔥豬五花串 $120", en: "Scallion Belly", jp: "ネギ塩バラ", kr: "파소금삼겹", price: "$120" },
        { zh: "醬烤豬五花串 $120", en: "Sauce Belly", jp: "タレバラ", kr: "양념삼겹", price: "$120" },
        { zh: "芥末豬五花串 $120", en: "Wasabi Belly", jp: "ワサビバラ", kr: "와사비삼겹", price: "$120" },
        { zh: "鹽烤松阪豬 $130", en: "Pork Jowl", jp: "トントロ", kr: "항정살", price: "$130" },
        { zh: "脆嫩肥腸 $200", en: "Intestine", jp: "ホルモン", kr: "대창", price: "$200" },
        { zh: "烤鹹豬肉 $200", en: "Salty Pork", jp: "スーチーカー", kr: "짠돼지고기", price: "$200" }
    ]},
    grill_veg: { title: {zh:"烤蔬菜",en:"Veggies",jp:"野菜",kr:"채소"}, items: [
        { zh: "鹽烤香菇 $80", en: "Shiitake", jp: "椎茸", kr: "표고", price: "$80" },
        { zh: "鹽烤節瓜 $100", en: "Zucchini", jp: "ズッキーニ", kr: "애호박", price: "$100" },
        { zh: "鹽烤山藥 $120", en: "Yam", jp: "山芋", kr: "마", price: "$120" },
        { zh: "起司地瓜 $150", en: "Cheese Yam", jp: "チーズ芋", kr: "치즈고구마", price: "$150" },
        { zh: "明太子節瓜 $150", en: "Mentaiko Zucchini", jp: "明太子ズッキーニ", kr: "명란애호박", price: "$150" },
        { zh: "明太子山藥 $170", en: "Mentaiko Yam", jp: "明太子山芋", kr: "명란마", price: "$170" }
    ]},
    fried: { title: {zh:"炸物",en:"Fried Food",jp:"揚げ物",kr:"튀김"}, items: [
        { zh: "雞肉洋蔥圈 $80", en: "Onion Rings", jp: "オニオンリング", kr: "어니언링", price: "$80" },
        { zh: "日式炸豆腐 $100", en: "Agedashi Tofu", jp: "揚げ出し豆腐", kr: "두부튀김", price: "$100" },
        { zh: "日式炸豬排 $100", en: "Pork Cutlet", jp: "とんかつ", kr: "돈까스", price: "$100" },
        { zh: "起司可樂餅 $120", en: "Croquette", jp: "コロッケ", kr: "고로케", price: "$120" },
        { zh: "香辣兩節翅 $120", en: "Spicy Wings", jp: "手羽先", kr: "닭날개", price: "$120" },
        { zh: "日式炸蝦 $120", en: "Fried Shrimp", jp: "海老フライ", kr: "새우튀김", price: "$120" },
        { zh: "酥炸竹筴魚 $120", en: "Fried Horse Mackerel", jp: "アジフライ", kr: "전갱이튀김", price: "$120" },
        { zh: "唐揚炸雞 $150", en: "Karaage", jp: "唐揚げ", kr: "가라아게", price: "$150" },
        { zh: "炸廣島牡蠣 $160", en: "Fried Oysters", jp: "カキフライ", kr: "굴튀김", price: "$160" },
        { zh: "吃漢牛肉餅 $160", en: "Menchi Katsu", jp: "メンチカツ", kr: "멘치카츠", price: "$160" },
        { zh: "蔬菜天婦羅 $180", en: "Tempura", jp: "天ぷら", kr: "튀김", price: "$180" },
        { zh: "南蠻炸雞 $200", en: "Nanban", jp: "チキン南蛮", kr: "치킨난반", price: "$200" }
    ]},
    sides: { title: {zh:"",en:"",jp:"",kr:""}, items: [
        { zh: "茶碗蒸 $30", en: "Egg Custard", jp: "茶碗蒸し", kr: "계란찜", price: "$30" },
        { zh: "柚香蘿蔔 $40", en: "Yuzu Radish", jp: "柚子大根", kr: "유자단무지", price: "$40" },
        { zh: "毛豆 $40", en: "Edamame", jp: "枝豆", kr: "에다마메", price: "$40" },
        { zh: "日式溫泉蛋 $40", en: "Onsen Egg", jp: "温泉卵", kr: "온천달걀", price: "$40" },
        { zh: "韓式泡菜 $60", en: "Kimchi", jp: "キムチ", kr: "김치", price: "$60" },
        { zh: "芥末章魚 $70", en: "Wasabi Octopus", jp: "たこわさ", kr: "타코와사비", price: "$70" },
        { zh: "海帶芽洋蔥沙拉 $80", en: "Onion Salad", jp: "玉ねぎサラダ", kr: "양파샐러드", price: "$80" },
        { zh: "胡麻柴魚豆腐 $80", en: "Sesame Tofu", jp: "ゴマダレ冷奴", kr: "참깨두부", price: "$80" },
        { zh: "涼拌胡麻秋葵 $80", en: "Sesame Okra", jp: "オクラ胡麻和え", kr: "오크라무침", price: "$80" },
        { zh: "香辣去骨鳳爪 $120", en: "Spicy Feet", jp: "骨なし鶏足", kr: "닭발", price: "$120" },
        { zh: "秋葵山藥冷豆腐 $150", en: "Yam Tofu", jp: "山芋冷奴", kr: "마두부", price: "$150" },
        { zh: "奶油起司火煥蒸蛋 $150", en: "Cheese Egg", jp: "チーズ茶碗蒸し", kr: "치즈계란찜", price: "$150" },
        { zh: "日式煎餃 $150", en: "Gyoza", jp: "餃子", kr: "교자", price: "$150" },
        { zh: "鱈魚肝佐橙醋醬 $180", en: "Cod Liver", jp: "あん肝", kr: "대구간", price: "$180" },
        { zh: "吃漢滷牛筋 $180", en: "Beef Tendon", jp: "牛すじ", kr: "소힘줄", price: "$180" },
        { zh: "炙燒干貝蟹膏堡 $200", en: "Scallop Burger", jp: "ホタテ蟹味噌", kr: "관자게내장", price: "$200" }
    ]}
};

const staticText = {
    notice: {
        zh: "注意事項<br>1. 丼飯皆附味增湯、外帶不提供套餐。<br>2. 餐點皆現做，請耐心等候。<br>3. 自帶一瓶酒水需點兩杯啤酒抵開瓶費。<br>4. 寵物如需上坐請自備毯子。<br>5. 牛、豬丼飯大部分都提供溫泉蛋，如需全熟請自行告知。",
        en: "Notice<br>1. Includes Soup<br>2. Made to order<br>3. Corkage fee deal<br>4. Pets need blankets<br>5. Soft-boiled egg inc.",
        jp: "注意事項<br>1. 味噌汁付き<br>2. 注文後調理<br>3. 持ち込み料割引<br>4. ペットは毛布持参<br>5. 温泉卵付き",
        kr: "주의사항<br>1. 국 포함<br>2. 즉시 조리<br>3. 콜키지 할인<br>4. 반려동물 담요<br>5. 온천계란 포함"
    },
    setOptions: {
        zh: "套餐+50 (小菜、茶碗蒸) | 套餐+100 (小菜、茶碗蒸、甜點)",
        en: "Set +50 (Side, Egg) | Set +100 (Side, Egg, Dessert)",
        jp: "セット+50 (小鉢, 茶碗蒸し) | セット+100 (小鉢, 茶碗蒸し, 甘味)",
        kr: "세트+50 (반찬, 계란찜) | 세트+100 (반찬, 계란찜, 디저트)"
    },
    riceNote: { zh: "#丼飯皆附味增湯", en: "#Includes Soup", jp: "#味噌汁付き", kr: "#국포함" }
};

function showMenu(lang) {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('menu-slider').style.display = 'flex';
    document.getElementById('back-btn').style.display = 'block';
    document.getElementById('btn-prev').style.display = 'flex';
    document.getElementById('btn-next').style.display = 'flex';
    document.getElementById('page-indicator').style.display = 'block';

    // 填入靜態文字
    document.getElementById('notice-box').innerHTML = staticText.notice[lang];
    document.getElementById('set-options').innerText = staticText.setOptions[lang];
    document.getElementById('rice-note').innerText = staticText.riceNote[lang];

    // --- Page 1 Rendering ---
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

    // --- Page 2 Rendering (現在是刺身/壽司) ---
    renderGroup('p2-sashimi', menuData.sashimi, lang);
    renderGroup('p2-nigiri', menuData.nigiri, lang);
    renderGroup('p2-handroll', menuData.handroll, lang);
    renderGroup('p2-roll', menuData.roll, lang);
    renderGroup('p2-soup', menuData.soup, lang);
    renderGroup('p2-hotpot', menuData.hotpot, lang);

    // --- Page 3 Rendering (現在是烤物/炸物) ---
    renderGroup('p3-beef', menuData.grill_beef, lang);
    renderGroup('p3-seafood', menuData.grill_seafood, lang);
    renderGroup('p3-chicken', menuData.grill_chicken, lang);
    renderGroup('p3-pork', menuData.grill_pork, lang);
    renderGroup('p3-veg', menuData.grill_veg, lang);
    renderGroup('p3-fried', menuData.fried, lang);
    renderGroup('p3-sides', menuData.sides, lang);

    updateIndicator();
}

// ... (renderGroup, changePage, updateIndicator, goHome 保持不變) ...
function renderGroup(targetId, data, lang) {
    const div = document.getElementById(targetId);
    if (!div) return;
    div.innerHTML = '';

    const groupDiv = document.createElement('div');
    groupDiv.className = 'menu-group';

    if (data.title && data.title[lang]) {
        const title = document.createElement('div');
        title.className = 'group-header-text';
        title.innerText = data.title[lang];
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