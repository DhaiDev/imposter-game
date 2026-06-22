/* Trilingual word bank for the Imposter party game.
   Languages: English (en) / Bahasa Melayu (ms) / 中文 Mandarin (zh).
   Every entry is a NOUN (kata nama) only — no verbs (kata kerja).
   Each word is [english, malay, chinese]. 530 words total. */
window.LANGS = ["en", "ms", "zh"];
window.LANG_LABEL = { en: "EN", ms: "BM", zh: "中文" };
window.LANG_INDEX = { en: 0, ms: 1, zh: 2 };

window.WORD_BANK = {
  animals: {
    label: ["Animals", "Haiwan", "动物"],
    emoji: "🐾",
    words: [
      ["Elephant","Gajah","大象"],["Tiger","Harimau","老虎"],["Lion","Singa","狮子"],
      ["Cat","Kucing","猫"],["Dog","Anjing","狗"],["Cow","Lembu","牛"],
      ["Goat","Kambing","山羊"],["Horse","Kuda","马"],["Chicken","Ayam","鸡"],
      ["Duck","Itik","鸭"],["Fish","Ikan","鱼"],["Snake","Ular","蛇"],
      ["Monkey","Monyet","猴子"],["Bird","Burung","鸟"],["Rabbit","Arnab","兔子"],
      ["Bear","Beruang","熊"],["Pig","Babi","猪"],["Frog","Katak","青蛙"],
      ["Crocodile","Buaya","鳄鱼"],["Turtle","Penyu","海龟"],["Butterfly","Rama-rama","蝴蝶"],
      ["Bee","Lebah","蜜蜂"],["Ant","Semut","蚂蚁"],["Spider","Labah-labah","蜘蛛"],
      ["Shark","Jerung","鲨鱼"],["Whale","Paus","鲸鱼"],["Dolphin","Lumba-lumba","海豚"],
      ["Crab","Ketam","螃蟹"],["Shrimp","Udang","虾"],["Octopus","Sotong kurita","章鱼"],
      ["Eagle","Helang","老鹰"],["Owl","Burung hantu","猫头鹰"],["Peacock","Merak","孔雀"],
      ["Deer","Rusa","鹿"],["Buffalo","Kerbau","水牛"],["Camel","Unta","骆驼"],
      ["Giraffe","Zirafah","长颈鹿"],["Zebra","Zebra","斑马"],["Kangaroo","Kanggaru","袋鼠"],
      ["Panda","Panda","熊猫"],["Wolf","Serigala","狼"],["Fox","Rubah","狐狸"],
      ["Mouse","Tikus","老鼠"],["Squirrel","Tupai","松鼠"],["Bat","Kelawar","蝙蝠"],
      ["Snail","Siput","蜗牛"],["Lizard","Cicak","壁虎"],["Dove","Merpati","鸽子"],
      ["Parrot","Burung kakak tua","鹦鹉"],["Penguin","Penguin","企鹅"],["Goose","Angsa","鹅"],
      ["Sheep","Biri-biri","绵羊"],["Dragonfly","Pepatung","蜻蜓"],["Cockroach","Lipas","蟑螂"],
      ["Mosquito","Nyamuk","蚊子"],["Scorpion","Kala jengking","蝎子"],["Seahorse","Kuda laut","海马"],
      ["Jellyfish","Obor-obor","水母"],["Starfish","Tapak sulaiman","海星"],["Earthworm","Cacing","蚯蚓"]
    ]
  },
  food: {
    label: ["Food", "Makanan", "食物"],
    emoji: "🍜",
    words: [
      ["Rice","Nasi","米饭"],["Bread","Roti","面包"],["Noodle","Mi","面"],
      ["Egg","Telur","鸡蛋"],["Cheese","Keju","奶酪"],["Pizza","Piza","披萨"],
      ["Soup","Sup","汤"],["Cake","Kek","蛋糕"],["Biscuit","Biskut","饼干"],
      ["Chocolate","Coklat","巧克力"],["Sugar","Gula","糖"],["Salt","Garam","盐"],
      ["Honey","Madu","蜂蜜"],["Butter","Mentega","黄油"],["Milk","Susu","牛奶"],
      ["Coffee","Kopi","咖啡"],["Tea","Teh","茶"],["Juice","Jus","果汁"],
      ["Ice cream","Aiskrim","冰淇淋"],["Sandwich","Sandwic","三明治"],["Burger","Burger","汉堡"],
      ["Curry","Kari","咖喱"],["Porridge","Bubur","粥"],["Satay","Sate","沙爹"],
      ["Dumpling","Ladu","饺子"],["Tofu","Tauhu","豆腐"],["Sausage","Sosej","香肠"],
      ["Fried rice","Nasi goreng","炒饭"],["Salad","Salad","沙拉"],["Pancake","Lempeng","煎饼"],
      ["Donut","Donat","甜甜圈"],["Candy","Gula-gula","糖果"],["Jam","Jem","果酱"],
      ["Yogurt","Yogurt","酸奶"],["Popcorn","Bertih jagung","爆米花"],["Pepper","Lada","胡椒"],
      ["Chili","Cili","辣椒"],["Garlic","Bawang putih","大蒜"],["Onion","Bawang","洋葱"],
      ["Flour","Tepung","面粉"],["Oil","Minyak","油"],["Sauce","Sos","酱"],
      ["Vinegar","Cuka","醋"],["Peanut","Kacang tanah","花生"],["Bean","Kacang","豆子"],
      ["Mushroom","Cendawan","蘑菇"],["Seaweed","Rumpai laut","海带"],["Cracker","Keropok","脆饼"],
      ["Spring roll","Popia","春卷"],["Wonton","Wantan","云吞"]
    ]
  },
  fruitveg: {
    label: ["Fruit & Veg", "Buah & Sayur", "水果蔬菜"],
    emoji: "🍎",
    words: [
      ["Apple","Epal","苹果"],["Banana","Pisang","香蕉"],["Orange","Oren","橙"],
      ["Mango","Mangga","芒果"],["Grape","Anggur","葡萄"],["Watermelon","Tembikai","西瓜"],
      ["Pineapple","Nanas","菠萝"],["Papaya","Betik","木瓜"],["Durian","Durian","榴莲"],
      ["Rambutan","Rambutan","红毛丹"],["Guava","Jambu","番石榴"],["Coconut","Kelapa","椰子"],
      ["Strawberry","Strawberi","草莓"],["Lemon","Lemon","柠檬"],["Lime","Limau","青柠"],
      ["Cherry","Ceri","樱桃"],["Peach","Pic","桃子"],["Pear","Pear","梨"],
      ["Starfruit","Belimbing","杨桃"],["Jackfruit","Nangka","菠萝蜜"],["Avocado","Avokado","牛油果"],
      ["Kiwi","Kiwi","猕猴桃"],["Longan","Mata kucing","龙眼"],["Lychee","Laici","荔枝"],
      ["Tomato","Tomato","番茄"],["Carrot","Lobak merah","胡萝卜"],["Potato","Kentang","土豆"],
      ["Cabbage","Kubis","卷心菜"],["Spinach","Bayam","菠菜"],["Cucumber","Timun","黄瓜"],
      ["Eggplant","Terung","茄子"],["Pumpkin","Labu","南瓜"],["Corn","Jagung","玉米"],
      ["Broccoli","Brokoli","西兰花"],["Lettuce","Salad","生菜"],["Celery","Saderi","芹菜"],
      ["Radish","Lobak putih","白萝卜"],["Ginger","Halia","姜"],["Bean sprout","Tauge","豆芽"],
      ["Sweet potato","Ubi keledek","红薯"],["Cauliflower","Kubis bunga","花椰菜"],["Pea","Kacang pis","豌豆"],
      ["Okra","Bendi","秋葵"],["Bitter gourd","Peria","苦瓜"],["Long bean","Kacang panjang","长豆"],
      ["Mangosteen","Manggis","山竹"],["Dragon fruit","Buah naga","火龙果"],["Pomelo","Limau bali","柚子"],
      ["Grapefruit","Limau gedang","葡萄柚"],["Pomegranate","Delima","石榴"]
    ]
  },
  objects: {
    label: ["Objects", "Objek", "物品"],
    emoji: "🔧",
    words: [
      ["Chair","Kerusi","椅子"],["Table","Meja","桌子"],["Book","Buku","书"],
      ["Pen","Pen","笔"],["Pencil","Pensel","铅笔"],["Bag","Beg","包"],
      ["Bottle","Botol","瓶子"],["Cup","Cawan","杯子"],["Plate","Pinggan","盘子"],
      ["Spoon","Sudu","勺子"],["Fork","Garfu","叉子"],["Knife","Pisau","刀"],
      ["Clock","Jam","钟"],["Watch","Jam tangan","手表"],["Key","Kunci","钥匙"],
      ["Lamp","Lampu","灯"],["Umbrella","Payung","雨伞"],["Mirror","Cermin","镜子"],
      ["Comb","Sikat","梳子"],["Towel","Tuala","毛巾"],["Soap","Sabun","肥皂"],
      ["Brush","Berus","刷子"],["Scissors","Gunting","剪刀"],["Hammer","Tukul","锤子"],
      ["Nail","Paku","钉子"],["Rope","Tali","绳子"],["Box","Kotak","盒子"],
      ["Basket","Bakul","篮子"],["Candle","Lilin","蜡烛"],["Battery","Bateri","电池"],
      ["Phone","Telefon","手机"],["Camera","Kamera","相机"],["Television","Televisyen","电视"],
      ["Radio","Radio","收音机"],["Fan","Kipas","风扇"],["Wallet","Dompet","钱包"],
      ["Glasses","Cermin mata","眼镜"],["Ring","Cincin","戒指"],["Necklace","Rantai","项链"],
      ["Newspaper","Surat khabar","报纸"],["Map","Peta","地图"],["Ladder","Tangga","梯子"],
      ["Magnet","Magnet","磁铁"],["Whistle","Wisel","哨子"],["Balloon","Belon","气球"],
      ["Toy","Mainan","玩具"],["Clock tower","Menara jam","钟楼"],["Screw","Skru","螺丝"],
      ["Stapler","Pengokot","订书机"],["Ruler","Pembaris","尺子"]
    ]
  },
  places: {
    label: ["Places", "Tempat", "地方"],
    emoji: "🗺️",
    words: [
      ["School","Sekolah","学校"],["Hospital","Hospital","医院"],["Market","Pasar","市场"],
      ["Shop","Kedai","商店"],["Bank","Bank","银行"],["Library","Perpustakaan","图书馆"],
      ["Park","Taman","公园"],["Beach","Pantai","海滩"],["Mountain","Gunung","山"],
      ["River","Sungai","河"],["Lake","Tasik","湖"],["Forest","Hutan","森林"],
      ["Island","Pulau","岛"],["Bridge","Jambatan","桥"],["Airport","Lapangan terbang","机场"],
      ["Station","Stesen","车站"],["Hotel","Hotel","酒店"],["Restaurant","Restoran","餐厅"],
      ["Mosque","Masjid","清真寺"],["Temple","Tokong","庙"],["Church","Gereja","教堂"],
      ["Museum","Muzium","博物馆"],["Zoo","Zoo","动物园"],["Cinema","Pawagam","电影院"],
      ["Office","Pejabat","办公室"],["Factory","Kilang","工厂"],["Farm","Ladang","农场"],
      ["Garden","Kebun","花园"],["Kitchen","Dapur","厨房"],["Bedroom","Bilik tidur","卧室"],
      ["Bathroom","Bilik mandi","浴室"],["Classroom","Bilik darjah","教室"],["Stadium","Stadium","体育场"],
      ["Prison","Penjara","监狱"],["Police station","Balai polis","警察局"],["Post office","Pejabat pos","邮局"],
      ["Pharmacy","Farmasi","药房"],["Bakery","Kedai roti","面包店"],["Cafe","Kafe","咖啡馆"],
      ["Harbour","Pelabuhan","港口"],["Village","Kampung","村庄"],["City","Bandar","城市"],
      ["Desert","Padang pasir","沙漠"],["Cave","Gua","洞穴"],["Waterfall","Air terjun","瀑布"],
      ["Valley","Lembah","山谷"],["Volcano","Gunung berapi","火山"],["Playground","Taman permainan","游乐场"],
      ["Swimming pool","Kolam renang","游泳池"],["Bus stop","Perhentian bas","巴士站"]
    ]
  },
  nature: {
    label: ["Nature", "Alam", "大自然"],
    emoji: "🌿",
    words: [
      ["Sun","Matahari","太阳"],["Moon","Bulan","月亮"],["Star","Bintang","星星"],
      ["Sky","Langit","天空"],["Cloud","Awan","云"],["Rain","Hujan","雨"],
      ["Wind","Angin","风"],["Snow","Salji","雪"],["Fire","Api","火"],
      ["Water","Air","水"],["Earth","Bumi","地球"],["Sea","Laut","海"],
      ["Sand","Pasir","沙"],["Stone","Batu","石头"],["Tree","Pokok","树"],
      ["Flower","Bunga","花"],["Leaf","Daun","叶子"],["Grass","Rumput","草"],
      ["Root","Akar","根"],["Seed","Biji","种子"],["Rainbow","Pelangi","彩虹"],
      ["Thunder","Guruh","雷"],["Lightning","Kilat","闪电"],["Fog","Kabus","雾"],
      ["Dew","Embun","露水"],["Ice","Ais","冰"],["Wave","Ombak","波浪"],
      ["Mud","Lumpur","泥"],["Soil","Tanah","土壤"],["Hill","Bukit","山丘"],
      ["Sunrise","Matahari terbit","日出"],["Sunset","Matahari terbenam","日落"],["Coral","Batu karang","珊瑚"],
      ["Shell","Cangkerang","贝壳"],["Pearl","Mutiara","珍珠"],["Gold","Emas","黄金"],
      ["Silver","Perak","银"],["Diamond","Berlian","钻石"],["Crystal","Kristal","水晶"],
      ["Coal","Arang batu","煤"],["Smoke","Asap","烟"],["Wood","Kayu","木头"],
      ["Bamboo","Buluh","竹子"],["Vine","Akar menjalar","藤"],["Cactus","Kaktus","仙人掌"],
      ["Moss","Lumut","苔藓"],["Branch","Dahan","树枝"],["Thorn","Duri","刺"],
      ["Petal","Kelopak","花瓣"],["Meteor","Meteor","流星"]
    ]
  },
  transport: {
    label: ["Transport", "Pengangkutan", "交通"],
    emoji: "🚗",
    words: [
      ["Car","Kereta","汽车"],["Bus","Bas","巴士"],["Train","Kereta api","火车"],
      ["Bicycle","Basikal","自行车"],["Motorcycle","Motosikal","摩托车"],["Airplane","Kapal terbang","飞机"],
      ["Ship","Kapal","船"],["Boat","Bot","小船"],["Lorry","Lori","卡车"],
      ["Taxi","Teksi","出租车"],["Helicopter","Helikopter","直升机"],["Rocket","Roket","火箭"],
      ["Submarine","Kapal selam","潜水艇"],["Ambulance","Ambulans","救护车"],["Fire engine","Jentera bomba","消防车"],
      ["Tractor","Traktor","拖拉机"],["Van","Van","货车"],["Scooter","Skuter","踏板车"],
      ["Ferry","Feri","渡轮"],["Yacht","Kapal layar","游艇"],["Canoe","Kanu","独木舟"],
      ["Sailboat","Perahu layar","帆船"],["Wheel","Roda","车轮"],["Engine","Enjin","发动机"],
      ["Tyre","Tayar","轮胎"],["Cable car","Kereta kabel","缆车"],["Trolley","Troli","手推车"],
      ["Wheelbarrow","Kereta sorong","独轮车"],["Skateboard","Papan selaju","滑板"],["Sled","Giring","雪橇"],
      ["Carriage","Pedati","马车"],["Jet","Jet","喷气机"],["Glider","Peluncur","滑翔机"],
      ["Hot air balloon","Belon udara","热气球"],["Parachute","Payung terjun","降落伞"],["Anchor","Sauh","锚"],
      ["Paddle","Pendayung","桨"],["Compass","Kompas","指南针"],["Seatbelt","Tali keledar","安全带"],
      ["Propeller","Kipas baling","螺旋桨"]
    ]
  },
  clothing: {
    label: ["Clothing", "Pakaian", "服装"],
    emoji: "👕",
    words: [
      ["Shirt","Baju","衬衫"],["Pants","Seluar","裤子"],["Dress","Gaun","连衣裙"],
      ["Skirt","Skirt","裙子"],["Shoe","Kasut","鞋"],["Sock","Stokin","袜子"],
      ["Hat","Topi","帽子"],["Jacket","Jaket","夹克"],["Sweater","Baju sejuk","毛衣"],
      ["Glove","Sarung tangan","手套"],["Scarf","Selendang","围巾"],["Belt","Tali pinggang","腰带"],
      ["Tie","Tali leher","领带"],["Shorts","Seluar pendek","短裤"],["Sandal","Selipar","凉鞋"],
      ["Boot","But","靴子"],["Raincoat","Baju hujan","雨衣"],["Uniform","Pakaian seragam","制服"],
      ["Pyjamas","Baju tidur","睡衣"],["Underwear","Seluar dalam","内衣"],["Apron","Apron","围裙"],
      ["Veil","Tudung","头巾"],["Robe","Jubah","长袍"],["Vest","Ves","背心"],
      ["Sunglasses","Cermin mata hitam","太阳镜"],["Bracelet","Gelang","手镯"],["Earring","Subang","耳环"],
      ["Button","Butang","纽扣"],["Zipper","Zip","拉链"],["Pocket","Poket","口袋"],
      ["Collar","Kolar","衣领"],["Sleeve","Lengan baju","袖子"],["Handkerchief","Sapu tangan","手帕"],
      ["Helmet","Topi keledar","头盔"],["Mask","Topeng","面具"],["Ribbon","Reben","丝带"],
      ["Wig","Rambut palsu","假发"],["Crown","Mahkota","皇冠"],["Sarong","Sarung","纱笼"],
      ["Slipper","Selipar","拖鞋"]
    ]
  },
  body: {
    label: ["Body", "Badan", "身体"],
    emoji: "🦶",
    words: [
      ["Head","Kepala","头"],["Hair","Rambut","头发"],["Eye","Mata","眼睛"],
      ["Ear","Telinga","耳朵"],["Nose","Hidung","鼻子"],["Mouth","Mulut","嘴"],
      ["Tooth","Gigi","牙齿"],["Tongue","Lidah","舌头"],["Lip","Bibir","嘴唇"],
      ["Face","Muka","脸"],["Neck","Leher","脖子"],["Shoulder","Bahu","肩膀"],
      ["Hand","Tangan","手"],["Finger","Jari","手指"],["Arm","Lengan","手臂"],
      ["Leg","Kaki","腿"],["Foot","Tapak kaki","脚"],["Knee","Lutut","膝盖"],
      ["Elbow","Siku","手肘"],["Stomach","Perut","肚子"],["Back","Belakang","背"],
      ["Chest","Dada","胸"],["Heart","Jantung","心脏"],["Brain","Otak","大脑"],
      ["Bone","Tulang","骨头"],["Skin","Kulit","皮肤"],["Blood","Darah","血"],
      ["Lung","Paru-paru","肺"],["Liver","Hati","肝"],["Nail","Kuku","指甲"],
      ["Eyebrow","Kening","眉毛"],["Cheek","Pipi","脸颊"],["Chin","Dagu","下巴"],
      ["Forehead","Dahi","额头"],["Throat","Tekak","喉咙"],["Wrist","Pergelangan tangan","手腕"],
      ["Ankle","Buku lali","脚踝"],["Heel","Tumit","脚跟"],["Thumb","Ibu jari","拇指"],
      ["Waist","Pinggang","腰"]
    ]
  },
  home: {
    label: ["Household", "Rumah", "家居"],
    emoji: "🏠",
    words: [
      ["Door","Pintu","门"],["Window","Tingkap","窗"],["Wall","Dinding","墙"],
      ["Floor","Lantai","地板"],["Roof","Bumbung","屋顶"],["Stairs","Tangga","楼梯"],
      ["Bed","Katil","床"],["Sofa","Sofa","沙发"],["Cupboard","Almari","橱柜"],
      ["Drawer","Laci","抽屉"],["Shelf","Rak","架子"],["Curtain","Langsir","窗帘"],
      ["Carpet","Permaidani","地毯"],["Fridge","Peti sejuk","冰箱"],["Stove","Dapur","炉子"],
      ["Oven","Ketuhar","烤箱"],["Sink","Sinki","水槽"],["Tap","Paip","水龙头"],
      ["Toilet","Tandas","厕所"],["Shower","Pancuran","淋浴"],["Mat","Tikar","垫子"],
      ["Picture","Gambar","画"],["Vase","Pasu","花瓶"],["Switch","Suis","开关"],
      ["Plug","Palam","插头"],["Wire","Wayar","电线"],["Dustbin","Tong sampah","垃圾桶"],
      ["Mop","Mop","拖把"],["Iron","Seterika","熨斗"],["Kettle","Cerek","水壶"],
      ["Pot","Periuk","锅"],["Pan","Kuali","平底锅"],["Tray","Dulang","托盘"],
      ["Glass","Gelas","玻璃杯"],["Bowl","Mangkuk","碗"],["Chopsticks","Penyepit","筷子"],
      ["Napkin","Tisu","餐巾"],["Calendar","Kalendar","日历"],["Blanket","Selimut","毯子"],
      ["Pillow","Bantal","枕头"]
    ]
  },
  jobs: {
    label: ["People & Jobs", "Orang & Kerjaya", "人物职业"],
    emoji: "👮",
    words: [
      ["Teacher","Guru","老师"],["Doctor","Doktor","医生"],["Nurse","Jururawat","护士"],
      ["Police","Polis","警察"],["Farmer","Petani","农民"],["Fisherman","Nelayan","渔夫"],
      ["Chef","Cef","厨师"],["Driver","Pemandu","司机"],["Pilot","Juruterbang","飞行员"],
      ["Soldier","Askar","士兵"],["Firefighter","Bomba","消防员"],["Dentist","Doktor gigi","牙医"],
      ["Lawyer","Peguam","律师"],["Engineer","Jurutera","工程师"],["Artist","Pelukis","艺术家"],
      ["Singer","Penyanyi","歌手"],["Dancer","Penari","舞者"],["Tailor","Tukang jahit","裁缝"],
      ["Barber","Tukang gunting","理发师"],["Baker","Pembuat roti","面包师"],["Mechanic","Mekanik","机械师"],
      ["Carpenter","Tukang kayu","木匠"],["Postman","Posmen","邮差"],["Scientist","Saintis","科学家"],
      ["Waiter","Pelayan","服务员"],["Cashier","Juruwang","收银员"],["Gardener","Tukang kebun","园丁"],
      ["Clown","Badut","小丑"],["King","Raja","国王"],["Queen","Permaisuri","王后"]
    ]
  },
  sports: {
    label: ["Sports & Games", "Sukan & Permainan", "运动游戏"],
    emoji: "⚽",
    words: [
      ["Football","Bola sepak","足球"],["Basketball","Bola keranjang","篮球"],["Badminton","Badminton","羽毛球"],
      ["Tennis","Tenis","网球"],["Table tennis","Ping pong","乒乓球"],["Volleyball","Bola tampar","排球"],
      ["Golf","Golf","高尔夫"],["Boxing","Tinju","拳击"],["Chess","Catur","国际象棋"],
      ["Marble","Guli","弹珠"],["Kite","Layang-layang","风筝"],["Racket","Raket","球拍"],
      ["Goal","Gol","球门"],["Net","Jaring","网"],["Bat","Pemukul","球棒"],
      ["Boxing glove","Sarung tinju","拳套"],["Trophy","Piala","奖杯"],["Medal","Pingat","奖牌"],
      ["Dice","Dadu","骰子"],["Card","Kad","卡片"],["Puzzle","Teka-teki","拼图"],
      ["Dart","Dart","飞镖"],["Bowling","Boling","保龄球"],["Skipping rope","Tali skip","跳绳"],
      ["Hula hoop","Gelung hula","呼啦圈"],["Frisbee","Frisbee","飞盘"],["Yoyo","Yoyo","悠悠球"],
      ["Surfboard","Papan luncur","冲浪板"],["Stopwatch","Jam randik","秒表"],["Flag","Bendera","旗"]
    ]
  },
  drinks: {
    label: ["Drinks", "Minuman", "饮料"],
    emoji: "🥤",
    words: [
      ["Milkshake","Susu kocak","奶昔"],["Soda","Soda","汽水"],["Cola","Kola","可乐"],
      ["Lemonade","Air limau","柠檬水"],["Smoothie","Smuti","冰沙"],["Beer","Bir","啤酒"],
      ["Wine","Wain","葡萄酒"],["Champagne","Sampanye","香槟"],["Whisky","Wiski","威士忌"],
      ["Cocktail","Koktel","鸡尾酒"],["Coconut water","Air kelapa","椰子水"],["Soy milk","Susu soya","豆浆"],
      ["Green tea","Teh hijau","绿茶"],["Milk tea","Teh susu","奶茶"],["Hot chocolate","Coklat panas","热巧克力"],
      ["Iced tea","Teh ais","冰茶"],["Sugarcane juice","Air tebu","甘蔗汁"],["Coconut milk","Santan","椰奶"],
      ["Mineral water","Air mineral","矿泉水"],["Orange juice","Jus oren","橙汁"],["Apple juice","Jus epal","苹果汁"],
      ["Mango juice","Jus mangga","芒果汁"],["Energy drink","Minuman tenaga","能量饮料"],["Sports drink","Minuman sukan","运动饮料"],
      ["Herbal tea","Teh herba","凉茶"],["Espresso","Espreso","浓缩咖啡"],["Latte","Late","拿铁"],
      ["Cappuccino","Kapucino","卡布奇诺"],["Bubble tea","Teh boba","珍珠奶茶"],["Yakult","Yakult","养乐多"]
    ]
  },
  dessert: {
    label: ["Desserts", "Pencuci Mulut", "甜点"],
    emoji: "🍰",
    words: [
      ["Pudding","Puding","布丁"],["Jelly","Jeli","果冻"],["Cookie","Kuki","曲奇"],
      ["Muffin","Mafin","玛芬"],["Brownie","Brownie","布朗尼"],["Cupcake","Kek cawan","纸杯蛋糕"],
      ["Cheesecake","Kek keju","芝士蛋糕"],["Fruit tart","Tart buah","水果挞"],["Pie","Pai","派"],
      ["Waffle","Wafel","华夫饼"],["Marshmallow","Marshmallow","棉花软糖"],["Lollipop","Lolipop","棒棒糖"],
      ["Toffee","Tofi","太妃糖"],["Macaron","Makaron","马卡龙"],["Gummy","Gula getah","软糖"],
      ["Chips","Kerepek","薯片"],["Cotton candy","Gula kapas","棉花糖"],["Ice lolly","Aiskrim batang","冰棒"],
      ["Sundae","Sundae","圣代"],["Custard","Kastard","蛋奶冻"],["Mochi","Moci","麻糬"],
      ["Cendol","Cendol","煎蕊"],["Ais kacang","Ais kacang","红豆冰"],["Kuih","Kuih","娘惹糕"],
      ["Tang yuan","Tangyuan","汤圆"],["Mooncake","Kuih bulan","月饼"],["Egg tart","Tart telur","蛋挞"],
      ["Sorbet","Sorbet","雪葩"],["Trifle","Trifle","屈莱弗"],["Nougat","Nougat","牛轧糖"]
    ]
  },
  kitchen: {
    label: ["Kitchen", "Dapur", "厨房用品"],
    emoji: "🍳",
    words: [
      ["Spatula","Senduk","锅铲"],["Ladle","Senduk sup","汤勺"],["Whisk","Pemukul telur","打蛋器"],
      ["Grater","Pemarut","刨丝器"],["Peeler","Pengupas","削皮器"],["Cutting board","Papan pemotong","砧板"],
      ["Rolling pin","Penggelek","擀面杖"],["Colander","Bekas penapis","滤盆"],["Sieve","Ayak","筛子"],
      ["Mixer","Pengadun","搅拌机"],["Blender","Pengisar","搅拌器"],["Toaster","Pembakar roti","烤面包机"],
      ["Microwave","Ketuhar mikro","微波炉"],["Rice cooker","Periuk nasi","电饭煲"],["Frying pan","Kuali leper","煎锅"],
      ["Steamer","Pengukus","蒸笼"],["Teapot","Teko","茶壶"],["Mug","Mug","马克杯"],
      ["Jug","Jag","水罐"],["Funnel","Corong","漏斗"],["Tongs","Penyepit makanan","食物夹"],
      ["Oven mitt","Sarung tangan ketuhar","隔热手套"],["Dish rack","Rak pinggan","碗架"],["Knife block","Blok pisau","刀架"],
      ["Measuring cup","Cawan penyukat","量杯"],["Salt shaker","Bekas garam","盐罐"],["Pepper grinder","Pengisar lada","胡椒研磨器"],
      ["Can opener","Pembuka tin","开罐器"],["Bottle opener","Pembuka botol","开瓶器"],["Thermos","Termos","保温瓶"]
    ]
  },
  tools: {
    label: ["Tools", "Perkakas", "工具"],
    emoji: "🛠️",
    words: [
      ["Screwdriver","Pemutar skru","螺丝刀"],["Wrench","Sepana","扳手"],["Pliers","Playar","钳子"],
      ["Saw","Gergaji","锯"],["Drill","Gerudi","电钻"],["Axe","Kapak","斧头"],
      ["Chisel","Pahat","凿子"],["File","Kikir","锉刀"],["Sandpaper","Kertas pasir","砂纸"],
      ["Tape measure","Pita ukur","卷尺"],["Spirit level","Aras air","水平仪"],["Crowbar","Tuil","撬棍"],
      ["Shovel","Penyodok","铲子"],["Spade","Sekop","锹"],["Hoe","Cangkul","锄头"],
      ["Rake","Penggaru","耙子"],["Pickaxe","Beliung","镐"],["Sickle","Sabit","镰刀"],
      ["Clamp","Pengapit","夹钳"],["Vice","Ragum","台钳"],["Toolbox","Kotak alat","工具箱"],
      ["Nut","Nat","螺母"],["Bolt","Bolt","螺栓"],["Washer","Sesendal","垫圈"],
      ["Wire cutter","Pemotong wayar","钢丝钳"],["Mallet","Tukul kayu","木槌"],["Tape","Pita pelekat","胶带"],
      ["Glue","Gam","胶水"],["Paintbrush","Berus cat","油漆刷"],["Paint roller","Pengguling cat","油漆滚筒"]
    ]
  },
  tech: {
    label: ["Technology", "Teknologi", "科技"],
    emoji: "💻",
    words: [
      ["Computer","Komputer","电脑"],["Laptop","Komputer riba","笔记本电脑"],["Keyboard","Papan kekunci","键盘"],
      ["Mouse","Tetikus","鼠标"],["Monitor","Monitor","显示器"],["Printer","Pencetak","打印机"],
      ["Scanner","Pengimbas","扫描仪"],["Tablet","Tablet","平板电脑"],["Smartphone","Telefon pintar","智能手机"],
      ["Charger","Pengecas","充电器"],["Headphone","Fon kepala","耳机"],["Earphone","Fon telinga","耳塞"],
      ["Speaker","Pembesar suara","音箱"],["Microphone","Mikrofon","麦克风"],["Webcam","Kamera web","网络摄像头"],
      ["Router","Penghala","路由器"],["Modem","Modem","调制解调器"],["Hard disk","Cakera keras","硬盘"],
      ["USB drive","Pemacu USB","U盘"],["Memory card","Kad memori","存储卡"],["Power bank","Bank kuasa","充电宝"],
      ["Remote control","Alat kawalan jauh","遥控器"],["Smartwatch","Jam pintar","智能手表"],["Drone","Dron","无人机"],
      ["Robot","Robot","机器人"],["Projector","Projektor","投影仪"],["Cable","Kabel","数据线"],
      ["Adapter","Penyesuai","适配器"],["Game console","Konsol permainan","游戏机"],["Joystick","Kayu bedik","操纵杆"],
      ["Calculator","Kalkulator","计算器"],["Antenna","Antena","天线"],["Satellite","Satelit","卫星"],
      ["Microchip","Cip mikro","微芯片"],["Touchscreen","Skrin sentuh","触摸屏"]
    ]
  },
  music: {
    label: ["Music", "Muzik", "音乐乐器"],
    emoji: "🎸",
    words: [
      ["Guitar","Gitar","吉他"],["Piano","Piano","钢琴"],["Violin","Biola","小提琴"],
      ["Drum","Dram","鼓"],["Flute","Seruling","长笛"],["Trumpet","Trompet","小号"],
      ["Saxophone","Saksofon","萨克斯"],["Harp","Harpa","竖琴"],["Cello","Selo","大提琴"],
      ["Clarinet","Klarinet","单簧管"],["Trombone","Trombon","长号"],["Accordion","Akordion","手风琴"],
      ["Harmonica","Harmonika","口琴"],["Tambourine","Rebana","铃鼓"],["Xylophone","Xilofon","木琴"],
      ["Electric keyboard","Papan kekunci","电子琴"],["Organ","Organ","风琴"],["Banjo","Banjo","班卓琴"],
      ["Ukulele","Ukulele","尤克里里"],["Gong","Gong","锣"],["Cymbal","Simbal","钹"],
      ["Maracas","Marakas","沙锤"],["Bagpipe","Bagpaip","风笛"],["Triangle","Segi tiga muzik","三角铁"],
      ["Bongo","Bongo","邦戈鼓"],["Sitar","Sitar","西塔琴"],["Mandolin","Mandolin","曼陀林"],
      ["Recorder","Rekoder","竖笛"],["Bass","Bes","贝斯"],["Bell","Loceng","铃铛"]
    ]
  },
  weather: {
    label: ["Weather", "Cuaca", "天气"],
    emoji: "⛈️",
    words: [
      ["Storm","Ribut","暴风雨"],["Hurricane","Badai","飓风"],["Tornado","Puting beliung","龙卷风"],
      ["Typhoon","Taufan","台风"],["Hail","Hujan batu","冰雹"],["Drizzle","Renyai","毛毛雨"],
      ["Thunderstorm","Ribut petir","雷暴"],["Blizzard","Ribut salji","暴风雪"],["Frost","Fros","霜"],
      ["Mist","Kabus nipis","薄雾"],["Humidity","Kelembapan","湿度"],["Drought","Kemarau","干旱"],
      ["Flood","Banjir","洪水"],["Heatwave","Gelombang haba","热浪"],["Monsoon","Monsun","季风"],
      ["Breeze","Bayu","微风"],["Cyclone","Siklon","气旋"],["Sunshine","Cahaya matahari","阳光"],
      ["Shadow","Bayang","影子"],["Temperature","Suhu","温度"],["Climate","Iklim","气候"],
      ["Thermometer","Termometer","温度计"],["Barometer","Barometer","气压计"],["Raindrop","Titisan hujan","雨滴"],
      ["Puddle","Lopak","水洼"]
    ]
  },
  colorshape: {
    label: ["Colours & Shapes", "Warna & Bentuk", "颜色形状"],
    emoji: "🎨",
    words: [
      ["Red","Merah","红色"],["Blue","Biru","蓝色"],["Yellow","Kuning","黄色"],
      ["Green","Hijau","绿色"],["Orange","Jingga","橙色"],["Purple","Ungu","紫色"],
      ["Pink","Merah jambu","粉红色"],["Black","Hitam","黑色"],["White","Putih","白色"],
      ["Brown","Coklat","棕色"],["Grey","Kelabu","灰色"],["Gold","Warna emas","金色"],
      ["Silver","Warna perak","银色"],["Turquoise","Biru kehijauan","青绿色"],["Maroon","Merah marun","栗色"],
      ["Beige","Krim","米色"],["Circle","Bulatan","圆形"],["Square","Segi empat","正方形"],
      ["Triangle","Segi tiga","三角形"],["Rectangle","Segi empat tepat","长方形"],["Oval","Bujur","椭圆形"],
      ["Diamond shape","Wajik","菱形"],["Heart shape","Bentuk hati","心形"],["Cube","Kubus","立方体"],
      ["Sphere","Sfera","球体"],["Cone","Kon","圆锥"],["Cylinder","Silinder","圆柱"],
      ["Pentagon","Pentagon","五边形"],["Hexagon","Heksagon","六边形"],["Arrow","Anak panah","箭头"]
    ]
  },
  family: {
    label: ["Family", "Keluarga", "家庭"],
    emoji: "👨‍👩‍👧",
    words: [
      ["Mother","Ibu","妈妈"],["Father","Bapa","爸爸"],["Older brother","Abang","哥哥"],
      ["Older sister","Kakak","姐姐"],["Baby","Bayi","婴儿"],["Grandfather","Datuk","爷爷"],
      ["Grandmother","Nenek","奶奶"],["Uncle","Pakcik","叔叔"],["Aunt","Makcik","阿姨"],
      ["Cousin","Sepupu","表亲"],["Son","Anak lelaki","儿子"],["Daughter","Anak perempuan","女儿"],
      ["Husband","Suami","丈夫"],["Wife","Isteri","妻子"],["Nephew","Anak saudara lelaki","侄子"],
      ["Niece","Anak saudara perempuan","侄女"],["Twin","Kembar","双胞胎"],["Parent","Ibu bapa","父母"],
      ["Child","Anak","孩子"],["Family","Keluarga","家庭"],["Younger brother","Adik lelaki","弟弟"],
      ["Younger sister","Adik perempuan","妹妹"],["Grandchild","Cucu","孙子"],["Stepmother","Ibu tiri","继母"],
      ["In-law","Mertua","姻亲"]
    ]
  },
  stationery: {
    label: ["Stationery", "Alat Tulis", "文具"],
    emoji: "✏️",
    words: [
      ["Eraser","Pemadam","橡皮擦"],["Sharpener","Pengasah","卷笔刀"],["Marker","Penanda","马克笔"],
      ["Highlighter","Penyerlah","荧光笔"],["Crayon","Krayon","蜡笔"],["Glue stick","Gam batang","胶棒"],
      ["Paper clip","Klip kertas","回形针"],["Notebook","Buku nota","笔记本"],["Folder","Fail","文件夹"],
      ["Envelope","Sampul surat","信封"],["Stamp","Setem","邮票"],["Ink","Dakwat","墨水"],
      ["Chalk","Kapur","粉笔"],["Paint","Cat","颜料"],["Palette","Palet","调色板"],
      ["Compass","Jangka lukis","圆规"],["Protractor","Protraktor","量角器"],["Sticky note","Nota lekat","便利贴"],
      ["Binder","Pengikat","活页夹"],["Pencil case","Bekas pensel","笔袋"],["Whiteboard","Papan putih","白板"],
      ["Blackboard","Papan hitam","黑板"],["Pushpin","Pin tekan","图钉"],["Rubber band","Gelang getah","橡皮筋"],
      ["Bookmark","Penanda buku","书签"]
    ]
  },
  plants: {
    label: ["Plants & Flowers", "Tumbuhan & Bunga", "植物花卉"],
    emoji: "🌸",
    words: [
      ["Rose","Mawar","玫瑰"],["Tulip","Tulip","郁金香"],["Sunflower","Bunga matahari","向日葵"],
      ["Lily","Bunga lili","百合"],["Orchid","Orkid","兰花"],["Jasmine","Melati","茉莉"],
      ["Lotus","Teratai","莲花"],["Daisy","Daisi","雏菊"],["Hibiscus","Bunga raya","木槿"],
      ["Lavender","Lavender","薰衣草"],["Marigold","Bunga tahi ayam","万寿菊"],["Carnation","Bunga teluki","康乃馨"],
      ["Fern","Paku pakis","蕨类"],["Palm tree","Pokok palma","棕榈树"],["Pine tree","Pokok pain","松树"],
      ["Oak tree","Pokok oak","橡树"],["Maple tree","Pokok maple","枫树"],["Willow","Pokok willow","柳树"],
      ["Coconut tree","Pokok kelapa","椰子树"],["Banana tree","Pokok pisang","香蕉树"],["Ivy","Ivi","常春藤"],
      ["Bonsai","Bonsai","盆景"],["Seedling","Anak benih","树苗"],["Bud","Tunas","花蕾"],
      ["Pollen","Debunga","花粉"],["Nectar","Nektar","花蜜"],["Bush","Semak","灌木"],
      ["Weed","Rumpai","杂草"],["Acorn","Biji oak","橡子"],["Pinecone","Buah pain","松果"]
    ]
  },
  space: {
    label: ["Space", "Angkasa", "太空"],
    emoji: "🪐",
    words: [
      ["Planet","Planet","行星"],["Galaxy","Galaksi","银河系"],["Universe","Alam semesta","宇宙"],
      ["Comet","Komet","彗星"],["Asteroid","Asteroid","小行星"],["Astronaut","Angkasawan","宇航员"],
      ["Spaceship","Kapal angkasa","太空船"],["Telescope","Teleskop","望远镜"],["Mars","Marikh","火星"],
      ["Venus","Zuhrah","金星"],["Jupiter","Musytari","木星"],["Saturn","Zuhal","土星"],
      ["Mercury","Utarid","水星"],["Neptune","Neptun","海王星"],["Uranus","Uranus","天王星"],
      ["Pluto","Pluto","冥王星"],["Black hole","Lohong hitam","黑洞"],["Orbit","Orbit","轨道"],
      ["Crater","Kawah","陨石坑"],["Constellation","Buruj","星座"],["Nebula","Nebula","星云"],
      ["Eclipse","Gerhana","日食"],["Meteorite","Meteorit","陨石"],["Space station","Stesen angkasa","空间站"],
      ["Milky Way","Bima Sakti","银河"]
    ]
  },
  countries: {
    label: ["Countries", "Negara", "国家"],
    emoji: "🌍",
    words: [
      ["Malaysia","Malaysia","马来西亚"],["Singapore","Singapura","新加坡"],["Indonesia","Indonesia","印度尼西亚"],
      ["Thailand","Thailand","泰国"],["Vietnam","Vietnam","越南"],["Philippines","Filipina","菲律宾"],
      ["China","China","中国"],["Japan","Jepun","日本"],["Korea","Korea","韩国"],
      ["India","India","印度"],["Pakistan","Pakistan","巴基斯坦"],["Australia","Australia","澳大利亚"],
      ["England","England","英格兰"],["France","Perancis","法国"],["Germany","Jerman","德国"],
      ["Italy","Itali","意大利"],["Spain","Sepanyol","西班牙"],["Portugal","Portugal","葡萄牙"],
      ["Russia","Rusia","俄罗斯"],["America","Amerika","美国"],["Canada","Kanada","加拿大"],
      ["Brazil","Brazil","巴西"],["Mexico","Mexico","墨西哥"],["Egypt","Mesir","埃及"],
      ["Turkey","Turki","土耳其"],["Saudi Arabia","Arab Saudi","沙特阿拉伯"],["Switzerland","Switzerland","瑞士"],
      ["Netherlands","Belanda","荷兰"],["Sweden","Sweden","瑞典"],["Greece","Greece","希腊"],
      ["New Zealand","New Zealand","新西兰"],["Argentina","Argentina","阿根廷"],["South Africa","Afrika Selatan","南非"],
      ["Nigeria","Nigeria","尼日利亚"],["Cambodia","Kemboja","柬埔寨"]
    ]
  },
  materials: {
    label: ["Materials", "Bahan", "材料"],
    emoji: "🧱",
    words: [
      ["Plastic","Plastik","塑料"],["Glass","Kaca","玻璃"],["Metal","Logam","金属"],
      ["Iron","Besi","铁"],["Steel","Keluli","钢"],["Copper","Tembaga","铜"],
      ["Aluminium","Aluminium","铝"],["Rubber","Getah","橡胶"],["Leather","Kulit","皮革"],
      ["Paper","Kertas","纸"],["Cardboard","Kadbod","纸板"],["Cotton","Kapas","棉"],
      ["Wool","Bulu","羊毛"],["Silk","Sutera","丝绸"],["Cement","Simen","水泥"],
      ["Brick","Bata","砖"],["Clay","Tanah liat","黏土"],["Concrete","Konkrit","混凝土"],
      ["Marble","Marmar","大理石"],["Wax","Lilin","蜡"],["Bronze","Gangsa","青铜"],
      ["Tin","Timah","锡"],["Velvet","Baldu","天鹅绒"],["Foam","Buih","泡沫"],
      ["Ceramic","Seramik","陶瓷"]
    ]
  },
  festivals: {
    label: ["Festivals", "Perayaan", "节日"],
    emoji: "🎉",
    words: [
      ["Birthday","Hari jadi","生日"],["New Year","Tahun Baru","新年"],["Christmas","Krismas","圣诞节"],
      ["Hari Raya","Hari Raya","开斋节"],["Chinese New Year","Tahun Baru Cina","春节"],["Deepavali","Deepavali","屠妖节"],
      ["Wedding","Perkahwinan","婚礼"],["Festival","Pesta","节日"],["Carnival","Karnival","嘉年华"],
      ["Parade","Perarakan","游行"],["Fireworks","Bunga api","烟花"],["Lantern","Tanglung","灯笼"],
      ["Mid-Autumn","Pesta Kuih Bulan","中秋节"],["Halloween","Halloween","万圣节"],["Easter","Easter","复活节"],
      ["Valentine","Hari Valentine","情人节"],["Anniversary","Ulang tahun","周年纪念"],["Graduation","Konvokesyen","毕业典礼"],
      ["Ramadan","Ramadan","斋月"],["Thanksgiving","Kesyukuran","感恩节"]
    ]
  },
  buildings: {
    label: ["Buildings", "Bangunan", "建筑"],
    emoji: "🏛️",
    words: [
      ["House","Rumah","房子"],["Apartment","Apartmen","公寓"],["Skyscraper","Pencakar langit","摩天大楼"],
      ["Tower","Menara","塔"],["Castle","Istana","城堡"],["Palace","Mahligai","宫殿"],
      ["Hut","Pondok","小屋"],["Cottage","Kotej","村舍"],["Mansion","Banglo besar","豪宅"],
      ["Cabin","Kabin","木屋"],["Barn","Bangsal","谷仓"],["Garage","Garaj","车库"],
      ["Warehouse","Gudang","仓库"],["Lighthouse","Rumah api","灯塔"],["Windmill","Kincir angin","风车"],
      ["Dam","Empangan","水坝"],["Tunnel","Terowong","隧道"],["Fence","Pagar","围栏"],
      ["Gate","Pintu pagar","大门"],["Pillar","Tiang","柱子"],["Dome","Kubah","圆顶"],
      ["Balcony","Balkoni","阳台"],["Chimney","Cerobong","烟囱"],["Elevator","Lif","电梯"],
      ["Fountain","Air pancut","喷泉"]
    ]
  },
  ocean: {
    label: ["Sea Life", "Hidupan Laut", "海洋生物"],
    emoji: "🐠",
    words: [
      ["Lobster","Udang karang","龙虾"],["Squid","Sotong","鱿鱼"],["Clam","Kerang","蛤蜊"],
      ["Oyster","Tiram","牡蛎"],["Mussel","Kupang","青口"],["Seal","Anjing laut","海豹"],
      ["Walrus","Walrus","海象"],["Stingray","Ikan pari","魟鱼"],["Eel","Belut","鳗鱼"],
      ["Sea anemone","Anemon laut","海葵"],["Plankton","Plankton","浮游生物"],["Swordfish","Ikan todak","剑鱼"],
      ["Tuna","Tuna","金枪鱼"],["Salmon","Salmon","三文鱼"],["Catfish","Ikan keli","鲶鱼"],
      ["Goldfish","Ikan emas","金鱼"],["Pufferfish","Ikan buntal","河豚"],["Manta ray","Pari manta","蝠鲼"],
      ["Hermit crab","Umang-umang","寄居蟹"],["Sea urchin","Landak laut","海胆"],["Sea cucumber","Timun laut","海参"],
      ["Barnacle","Teritip","藤壶"],["Cuttlefish","Sotong katak","墨鱼"],["Sea snail","Siput laut","海螺"],
      ["Krill","Kril","磷虾"]
    ]
  },
  emotions: {
    label: ["Feelings", "Perasaan", "感受"],
    emoji: "😊",
    words: [
      ["Happiness","Kegembiraan","快乐"],["Sadness","Kesedihan","悲伤"],["Anger","Kemarahan","愤怒"],
      ["Fear","Ketakutan","恐惧"],["Love","Cinta","爱"],["Hate","Benci","恨"],
      ["Joy","Keriangan","喜悦"],["Surprise","Kejutan","惊讶"],["Worry","Kebimbangan","担忧"],
      ["Hope","Harapan","希望"],["Pride","Kebanggaan","骄傲"],["Shame","Malu","羞愧"],
      ["Jealousy","Cemburu","嫉妒"],["Courage","Keberanian","勇气"],["Loneliness","Kesunyian","孤独"],
      ["Boredom","Kebosanan","无聊"],["Excitement","Keseronokan","兴奋"],["Calm","Ketenangan","平静"],
      ["Confusion","Kekeliruan","困惑"],["Gratitude","Rasa syukur","感激"],["Curiosity","Rasa ingin tahu","好奇"],
      ["Disgust","Jijik","厌恶"],["Trust","Kepercayaan","信任"],["Patience","Kesabaran","耐心"],
      ["Stress","Tekanan","压力"]
    ]
  }
};
