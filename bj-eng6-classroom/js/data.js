/* ============================================================
 * 北京版（2024新课标·一年级起点）六年级英语 课堂游戏站
 * 教材数据文件 —— 老师可自由增删改
 *
 * 【单元结构】已按 2024 新版教材目录核对：
 *   六年级上册：U1 A Wonderful Summer Holiday / U2 Stay Safe and Healthy /
 *               U3 Technology and Our Lives / U4 Revision Ⅰ /
 *               U5 Famous People / U6 Our Clothes / U7 The Chinese Zodiac /
 *               U8 Revision Ⅱ
 *   六年级下册：U1 What are you looking for? / U2 Can you tell me more about her? /
 *               U3 Let's live a low-carbon life / U4 What's the weather like? /
 *               U5 We're going to high school / U6 Revision
 *
 * 【字段说明】
 *   en     : 英文
 *   ph     : 音标
 *   cn     : 中文释义
 *   emoji  : 用于"看图选词/记忆翻牌/大转盘/Bingo"的图形（没有可留 ""）
 *   words  : 本单元单词（供单词卡、看图选词、听音选词、听音拼写、Bingo、转盘）
 *   sentences : 本单元核心句型（供句子拼装游戏）
 * ============================================================ */
const BOOKS = {
  up: {
    title: "六年级上册（2024新版）",
    units: [
      {
        name: "Unit 1 A Wonderful Summer Holiday",
        icon: "🏖️",
        words: [
          { en: "wonderful", ph: "/ˈwʌndəfl/", cn: "精彩的", emoji: "✨" },
          { en: "vacation", ph: "/vəˈkeɪʃn/", cn: "假期", emoji: "🏝️" },
          { en: "baby", ph: "/ˈbeɪbi/", cn: "宝宝；幼崽", emoji: "👶" },
          { en: "chick", ph: "/tʃɪk/", cn: "小鸡", emoji: "🐤" },
          { en: "garden", ph: "/ˈɡɑːdn/", cn: "花园", emoji: "🌷" },
          { en: "flowers", ph: "/ˈflaʊəz/", cn: "花", emoji: "🌸" },
          { en: "fishing", ph: "/ˈfɪʃɪŋ/", cn: "钓鱼", emoji: "🎣" },
          { en: "cousin", ph: "/ˈkʌzn/", cn: "堂（表）兄弟姐妹", emoji: "🧒" },
          { en: "grandparents", ph: "/ˈɡrænpeərənts/", cn: "祖父母", emoji: "👴" },
          { en: "train", ph: "/treɪn/", cn: "火车", emoji: "🚂" },
          { en: "feed", ph: "/fiːd/", cn: "喂养", emoji: "🍚" },
          { en: "walk", ph: "/wɔːk/", cn: "遛；走", emoji: "🚶" },
          { en: "tell", ph: "/tel/", cn: "讲述", emoji: "📖" },
          { en: "story", ph: "/ˈstɔːri/", cn: "故事", emoji: "📚" },
          { en: "funny", ph: "/ˈfʌni/", cn: "有趣的", emoji: "😄" },
          { en: "summer", ph: "/ˈsʌmə(r)/", cn: "夏天", emoji: "☀️" }
        ],
        sentences: [
          { en: "I had a wonderful summer holiday.", cn: "我度过了一个精彩的暑假。" },
          { en: "We went to see our grandparents.", cn: "我们去看望了祖父母。" },
          { en: "We took the train to get there.", cn: "我们坐火车去的。" },
          { en: "In the early morning, we fed the chickens.", cn: "清晨我们喂了小鸡。" },
          { en: "Sometimes we went fishing with Grandpa.", cn: "有时我们和爷爷去钓鱼。" },
          { en: "In the evening, we told stories together.", cn: "晚上我们一起讲故事。" }
        ]
      },
      {
        name: "Unit 2 Stay Safe and Healthy",
        icon: "🚲",
        words: [
          { en: "safety", ph: "/ˈseɪfti/", cn: "安全", emoji: "🛡️" },
          { en: "rule", ph: "/ruːl/", cn: "规则", emoji: "📏" },
          { en: "helmet", ph: "/ˈhelmɪt/", cn: "头盔", emoji: "⛑️" },
          { en: "ride", ph: "/raɪd/", cn: "骑", emoji: "🚴" },
          { en: "bike", ph: "/baɪk/", cn: "自行车", emoji: "🚲" },
          { en: "safely", ph: "/ˈseɪfli/", cn: "安全地", emoji: "✅" },
          { en: "hospital", ph: "/ˈhɒspɪtl/", cn: "医院", emoji: "🏥" },
          { en: "healthy", ph: "/ˈhelθi/", cn: "健康的", emoji: "💪" },
          { en: "exercise", ph: "/ˈeksəsaɪz/", cn: "锻炼", emoji: "🏃" },
          { en: "stranger", ph: "/ˈstreɪndʒə(r)/", cn: "陌生人", emoji: "🚫" },
          { en: "fire", ph: "/ˈfaɪə(r)/", cn: "火", emoji: "🔥" },
          { en: "smoke", ph: "/sməʊk/", cn: "烟雾", emoji: "💨" },
          { en: "exit", ph: "/ˈeksɪt/", cn: "出口", emoji: "🚪" },
          { en: "alarm", ph: "/əˈlɑːm/", cn: "警报", emoji: "🚨" },
          { en: "food", ph: "/fuːd/", cn: "食物", emoji: "🍎" },
          { en: "candy", ph: "/ˈkændi/", cn: "糖果", emoji: "🍬" }
        ],
        sentences: [
          { en: "We should ride bikes safely.", cn: "我们应该安全骑车。" },
          { en: "You should wear a helmet.", cn: "你应该戴头盔。" },
          { en: "Don't play with fire.", cn: "不要玩火。" },
          { en: "We shouldn't eat too much candy.", cn: "我们不应该吃太多糖果。" },
          { en: "Stay safe and healthy!", cn: "保持安全与健康！" }
        ]
      },
      {
        name: "Unit 3 Technology and Our Lives",
        icon: "💻",
        words: [
          { en: "technology", ph: "/tekˈnɒlədʒi/", cn: "科技", emoji: "📡" },
          { en: "communication", ph: "/kəˌmjuːnɪˈkeɪʃn/", cn: "交流；通讯", emoji: "📱" },
          { en: "computer", ph: "/kəmˈpjuːtə(r)/", cn: "电脑", emoji: "💻" },
          { en: "phone", ph: "/fəʊn/", cn: "手机", emoji: "☎️" },
          { en: "internet", ph: "/ˈɪntənet/", cn: "互联网", emoji: "🌐" },
          { en: "message", ph: "/ˈmesɪdʒ/", cn: "消息", emoji: "💬" },
          { en: "video", ph: "/ˈvɪdiəʊ/", cn: "视频", emoji: "📹" },
          { en: "online", ph: "/ˌɒnˈlaɪn/", cn: "在线的", emoji: "🖥️" },
          { en: "learn", ph: "/lɜːn/", cn: "学习", emoji: "📚" },
          { en: "railway", ph: "/ˈreɪlweɪ/", cn: "铁路", emoji: "🛤️" },
          { en: "train", ph: "/treɪn/", cn: "火车", emoji: "🚄" },
          { en: "satellite", ph: "/ˈsætəlaɪt/", cn: "卫星", emoji: "🛰️" },
          { en: "map", ph: "/mæp/", cn: "地图", emoji: "🗺️" },
          { en: "guide", ph: "/ɡaɪd/", cn: "导航；向导", emoji: "🧭" },
          { en: "life", ph: "/laɪf/", cn: "生活", emoji: "🌟" },
          { en: "change", ph: "/tʃeɪndʒ/", cn: "改变", emoji: "🔄" }
        ],
        sentences: [
          { en: "Technology is changing our communication.", cn: "科技正在改变我们的交流方式。" },
          { en: "We can learn online.", cn: "我们可以在线学习。" },
          { en: "The railway connects Xizang to the world.", cn: "这条铁路把西藏与世界连接起来。" },
          { en: "BDS makes people's lives better.", cn: "北斗让人民生活更美好。" },
          { en: "Phones help us talk to friends far away.", cn: "手机帮助我们和远方的朋友通话。" }
        ]
      },
      {
        name: "Unit 4 Revision Ⅰ",
        icon: "📝",
        words: [
          { en: "interesting", ph: "/ˈɪntrəstɪŋ/", cn: "有趣的", emoji: "🤩" },
          { en: "exciting", ph: "/ɪkˈsaɪtɪŋ/", cn: "令人激动的", emoji: "🎉" },
          { en: "important", ph: "/ɪmˈpɔːtnt/", cn: "重要的", emoji: "⭐" },
          { en: "choose", ph: "/tʃuːz/", cn: "选择", emoji: "✅" },
          { en: "remember", ph: "/rɪˈmembə(r)/", cn: "记住", emoji: "🧠" },
          { en: "enjoy", ph: "/ɪnˈdʒɔɪ/", cn: "享受", emoji: "😊" }
        ],
        sentences: [
          { en: "Tell me about your summer holiday.", cn: "跟我讲讲你的暑假。" },
          { en: "Stay safe and healthy!", cn: "保持安全与健康！" },
          { en: "Technology makes our lives better.", cn: "科技让我们的生活更好。" }
        ]
      },
      {
        name: "Unit 5 Famous People",
        icon: "🏅",
        words: [
          { en: "role model", ph: "/rəʊl ˈmɒdl/", cn: "榜样", emoji: "🌟" },
          { en: "famous", ph: "/ˈfeɪməs/", cn: "著名的", emoji: "🏆" },
          { en: "inventor", ph: "/ɪnˈventə(r)/", cn: "发明家", emoji: "💡" },
          { en: "invent", ph: "/ɪnˈvent/", cn: "发明", emoji: "🛠️" },
          { en: "invention", ph: "/ɪnˈvenʃn/", cn: "发明物", emoji: "🔧" },
          { en: "scientist", ph: "/ˈsaɪəntɪst/", cn: "科学家", emoji: "🔬" },
          { en: "writer", ph: "/ˈraɪtə(r)/", cn: "作家", emoji: "✍️" },
          { en: "poet", ph: "/ˈpəʊɪt/", cn: "诗人", emoji: "🖋️" },
          { en: "artist", ph: "/ˈɑːtɪst/", cn: "画家", emoji: "🎨" },
          { en: "musician", ph: "/mjuˈzɪʃn/", cn: "音乐家", emoji: "🎵" },
          { en: "astronaut", ph: "/ˈæstrənɔːt/", cn: "宇航员", emoji: "🧑‍🚀" },
          { en: "poem", ph: "/ˈpəʊɪm/", cn: "诗", emoji: "📜" },
          { en: "book", ph: "/bʊk/", cn: "书", emoji: "📖" },
          { en: "university", ph: "/ˌjuːnɪˈvɜːsəti/", cn: "大学", emoji: "🎓" },
          { en: "history", ph: "/ˈhɪstri/", cn: "历史", emoji: "🏛️" },
          { en: "study", ph: "/ˈstʌdi/", cn: "学习；研究", emoji: "📖" }
        ],
        sentences: [
          { en: "They are all our role models.", cn: "他们都是我们的榜样。" },
          { en: "He wrote good books for children.", cn: "他为孩子们写了好书。" },
          { en: "She is a famous scientist.", cn: "她是一位著名的科学家。" },
          { en: "We should learn from them.", cn: "我们应该向他们学习。" }
        ]
      },
      {
        name: "Unit 6 Our Clothes",
        icon: "👔",
        words: [
          { en: "clothes", ph: "/kləʊðz/", cn: "衣服", emoji: "👕" },
          { en: "dress", ph: "/dres/", cn: "连衣裙；穿着", emoji: "👗" },
          { en: "suit", ph: "/suːt/", cn: "西装", emoji: "🤵" },
          { en: "tie", ph: "/taɪ/", cn: "领带", emoji: "👔" },
          { en: "uniform", ph: "/ˈjuːnɪfɔːm/", cn: "制服", emoji: "🎽" },
          { en: "shirt", ph: "/ʃɜːt/", cn: "衬衫", emoji: "👔" },
          { en: "T-shirt", ph: "/ˈtiːʃɜːt/", cn: "T恤", emoji: "👕" },
          { en: "sweater", ph: "/ˈswetə(r)/", cn: "毛衣", emoji: "🧶" },
          { en: "jacket", ph: "/ˈdʒækɪt/", cn: "夹克", emoji: "🧥" },
          { en: "coat", ph: "/kəʊt/", cn: "外套；大衣", emoji: "🧥" },
          { en: "scarf", ph: "/skɑːf/", cn: "围巾", emoji: "🧣" },
          { en: "trousers", ph: "/ˈtraʊzəz/", cn: "裤子", emoji: "👖" },
          { en: "shoes", ph: "/ʃuːz/", cn: "鞋子", emoji: "👟" },
          { en: "spacesuit", ph: "/ˈspeɪssuːt/", cn: "宇航服", emoji: "🧑‍🚀" },
          { en: "choose", ph: "/tʃuːz/", cn: "选择", emoji: "✅" },
          { en: "try on", ph: "/traɪ ɒn/", cn: "试穿", emoji: "🪞" },
          { en: "beautiful", ph: "/ˈbjuːtɪfl/", cn: "美丽的", emoji: "🌺" },
          { en: "comfortable", ph: "/ˈkʌmftəbl/", cn: "舒适的", emoji: "😌" },
          { en: "cool", ph: "/kuːl/", cn: "酷的", emoji: "😎" },
          { en: "safe", ph: "/seɪf/", cn: "安全的", emoji: "🛡️" }
        ],
        sentences: [
          { en: "Dress nicely for the English speech.", cn: "英语演讲要穿得体。" },
          { en: "A suit goes well with a tie.", cn: "西装配领带很搭。" },
          { en: "We can give old clothes a new life.", cn: "我们可以让旧衣服获得新生。" },
          { en: "Smart clothes keep us healthy and safe.", cn: "智能服装让我们健康又安全。" },
          { en: "Special clothing keeps people safe and healthy.", cn: "特殊服装保护人们的安全健康。" },
          { en: "Astronauts wear spacesuits in space.", cn: "宇航员在太空中穿宇航服。" }
        ]
      },
      {
        name: "Unit 7 The Chinese Zodiac",
        icon: "🐉",
        words: [
          { en: "zodiac", ph: "/ˈzəʊdiæk/", cn: "生肖", emoji: "🏮" },
          { en: "rat", ph: "/ræt/", cn: "鼠", emoji: "🐀" },
          { en: "ox", ph: "/ɒks/", cn: "牛", emoji: "🐂" },
          { en: "tiger", ph: "/ˈtaɪɡə(r)/", cn: "虎", emoji: "🐅" },
          { en: "rabbit", ph: "/ˈræbɪt/", cn: "兔", emoji: "🐇" },
          { en: "dragon", ph: "/ˈdræɡən/", cn: "龙", emoji: "🐉" },
          { en: "snake", ph: "/sneɪk/", cn: "蛇", emoji: "🐍" },
          { en: "horse", ph: "/hɔːs/", cn: "马", emoji: "🐴" },
          { en: "goat", ph: "/ɡəʊt/", cn: "羊", emoji: "🐐" },
          { en: "monkey", ph: "/ˈmʌŋki/", cn: "猴", emoji: "🐒" },
          { en: "rooster", ph: "/ˈruːstə(r)/", cn: "鸡", emoji: "🐓" },
          { en: "dog", ph: "/dɒɡ/", cn: "狗", emoji: "🐕" },
          { en: "pig", ph: "/pɪɡ/", cn: "猪", emoji: "🐖" },
          { en: "stamp", ph: "/stæmp/", cn: "邮票", emoji: "✉️" },
          { en: "year", ph: "/jɪə(r)/", cn: "年", emoji: "📅" },
          { en: "animal", ph: "/ˈænɪml/", cn: "动物", emoji: "🐾" }
        ],
        sentences: [
          { en: "What's your zodiac animal?", cn: "你的生肖是什么？" },
          { en: "I'm a big fan of the Chinese zodiac.", cn: "我非常喜欢中国生肖。" },
          { en: "This year is my zodiac year.", cn: "今年是我的本命年。" },
          { en: "The rat was the first in the race.", cn: "老鼠在比赛中是第一名。" },
          { en: "We collect Chinese zodiac stamps.", cn: "我们收集生肖邮票。" }
        ]
      },
      {
        name: "Unit 8 Revision Ⅱ",
        icon: "🏮",
        words: [
          { en: "culture", ph: "/ˈkʌltʃə(r)/", cn: "文化", emoji: "🏮" },
          { en: "tradition", ph: "/trəˈdɪʃn/", cn: "传统", emoji: "📿" },
          { en: "remember", ph: "/rɪˈmembə(r)/", cn: "记住", emoji: "🧠" },
          { en: "learn", ph: "/lɜːn/", cn: "学习", emoji: "📚" },
          { en: "hope", ph: "/həʊp/", cn: "希望", emoji: "🌠" },
          { en: "dream", ph: "/driːm/", cn: "梦想", emoji: "🌙" }
        ],
        sentences: [
          { en: "I learn about Chinese culture.", cn: "我学习中国文化。" },
          { en: "We should remember our traditions.", cn: "我们应该记住我们的传统。" },
          { en: "I hope my dream comes true.", cn: "我希望梦想成真。" }
        ]
      }
    ]
  },
  down: {
    title: "六年级下册（2024新版）",
    units: [
      {
        name: "Unit 1 What are you looking for?",
        icon: "🔍",
        words: [
          { en: "look for", ph: "/lʊk fɔː/", cn: "寻找", emoji: "🔍" },
          { en: "wallet", ph: "/ˈwɒlɪt/", cn: "钱包", emoji: "👛" },
          { en: "purse", ph: "/pɜːs/", cn: "女式钱包", emoji: "👜" },
          { en: "umbrella", ph: "/ʌmˈbrelə/", cn: "雨伞", emoji: "☂️" },
          { en: "crayon", ph: "/ˈkreɪən/", cn: "蜡笔", emoji: "🖍️" },
          { en: "key", ph: "/kiː/", cn: "钥匙", emoji: "🔑" },
          { en: "glasses", ph: "/ˈɡlɑːsɪz/", cn: "眼镜", emoji: "👓" },
          { en: "watch", ph: "/wɒtʃ/", cn: "手表", emoji: "⌚" },
          { en: "eraser", ph: "/ɪˈreɪzə(r)/", cn: "橡皮", emoji: "🧽" },
          { en: "pencil", ph: "/ˈpensl/", cn: "铅笔", emoji: "✏️" },
          { en: "textbook", ph: "/ˈtekstbʊk/", cn: "课本", emoji: "📘" },
          { en: "mine", ph: "/maɪn/", cn: "我的", emoji: "💝" },
          { en: "yours", ph: "/jɔːz/", cn: "你的", emoji: "💫" },
          { en: "lost", ph: "/lɒst/", cn: "丢失的", emoji: "😟" },
          { en: "wait for", ph: "/weɪt fɔː/", cn: "等待", emoji: "⏳" },
          { en: "pick up", ph: "/pɪk ʌp/", cn: "捡起", emoji: "🤲" }
        ],
        sentences: [
          { en: "What are you looking for?", cn: "你在找什么？" },
          { en: "I'm looking for my keys.", cn: "我在找我的钥匙。" },
          { en: "Is this wallet yours?", cn: "这个钱包是你的吗？" },
          { en: "Yes, it's mine.", cn: "是的，是我的。" },
          { en: "Don't forget your umbrella.", cn: "别忘了你的雨伞。" }
        ]
      },
      {
        name: "Unit 2 Can you tell me more about her?",
        icon: "👧",
        words: [
          { en: "pretty", ph: "/ˈprɪti/", cn: "漂亮的", emoji: "🌸" },
          { en: "handsome", ph: "/ˈhænsəm/", cn: "英俊的", emoji: "😎" },
          { en: "friendly", ph: "/ˈfrendli/", cn: "友好的", emoji: "🤗" },
          { en: "kind", ph: "/kaɪnd/", cn: "善良的", emoji: "💗" },
          { en: "aunt", ph: "/ɑːnt/", cn: "姑妈；姨妈", emoji: "👩" },
          { en: "uncle", ph: "/ˈʌŋkl/", cn: "叔叔；舅舅", emoji: "👨" },
          { en: "cousin", ph: "/ˈkʌzn/", cn: "堂（表）亲", emoji: "🧒" },
          { en: "tall", ph: "/tɔːl/", cn: "高的", emoji: "🦒" },
          { en: "thin", ph: "/θɪn/", cn: "瘦的", emoji: "🪶" },
          { en: "short", ph: "/ʃɔːt/", cn: "矮的", emoji: "🐻" },
          { en: "long hair", ph: "/lɒŋ heə/", cn: "长发", emoji: "💇‍♀️" },
          { en: "glasses", ph: "/ˈɡlɑːsɪz/", cn: "眼镜", emoji: "👓" },
          { en: "look like", ph: "/lʊk laɪk/", cn: "看起来像", emoji: "🤔" },
          { en: "dancer", ph: "/ˈdɑːnsə(r)/", cn: "舞者", emoji: "💃" },
          { en: "teacher", ph: "/ˈtiːtʃə(r)/", cn: "老师", emoji: "👩‍🏫" }
        ],
        sentences: [
          { en: "Can you tell me more about her?", cn: "你能多告诉我一些关于她的事吗？" },
          { en: "What does she look like?", cn: "她长什么样？" },
          { en: "She is tall and thin.", cn: "她又高又瘦。" },
          { en: "She is pretty and friendly.", cn: "她又漂亮又友好。" },
          { en: "She likes dancing.", cn: "她喜欢跳舞。" }
        ]
      },
      {
        name: "Unit 3 Let's live a low-carbon life",
        icon: "🌱",
        words: [
          { en: "environment", ph: "/ɪnˈvaɪrənmənt/", cn: "环境", emoji: "🌍" },
          { en: "recycling", ph: "/ˌriːˈsaɪklɪŋ/", cn: "回收利用", emoji: "♻️" },
          { en: "energy", ph: "/ˈenədʒi/", cn: "能源", emoji: "⚡" },
          { en: "plastic", ph: "/ˈplæstɪk/", cn: "塑料", emoji: "🧴" },
          { en: "save", ph: "/seɪv/", cn: "节约；拯救", emoji: "💧" },
          { en: "water", ph: "/ˈwɔːtə(r)/", cn: "水", emoji: "💦" },
          { en: "electricity", ph: "/ɪˌlekˈtrɪsəti/", cn: "电", emoji: "💡" },
          { en: "green", ph: "/ɡriːn/", cn: "绿色的；环保的", emoji: "🌿" },
          { en: "plant", ph: "/plɑːnt/", cn: "种植", emoji: "🌳" },
          { en: "tree", ph: "/triː/", cn: "树", emoji: "🌲" },
          { en: "rubbish", ph: "/ˈrʌbɪʃ/", cn: "垃圾", emoji: "🗑️" },
          { en: "waste", ph: "/weɪst/", cn: "浪费", emoji: "🚯" },
          { en: "reuse", ph: "/ˌriːˈjuːz/", cn: "再利用", emoji: "🔁" },
          { en: "reduce", ph: "/rɪˈdjuːs/", cn: "减少", emoji: "📉" },
          { en: "turn off", ph: "/tɜːn ɒf/", cn: "关掉", emoji: "🔌" },
          { en: "bike", ph: "/baɪk/", cn: "自行车", emoji: "🚲" }
        ],
        sentences: [
          { en: "Let's live a low-carbon life.", cn: "让我们过低碳生活吧。" },
          { en: "We should protect the environment.", cn: "我们应该保护环境。" },
          { en: "Don't waste water.", cn: "不要浪费水。" },
          { en: "Turn off the lights to save electricity.", cn: "关灯节约用电。" },
          { en: "Let's plant more trees.", cn: "让我们多种树。" }
        ]
      },
      {
        name: "Unit 4 What's the weather like?",
        icon: "☀️",
        words: [
          { en: "sunny", ph: "/ˈsʌni/", cn: "晴朗的", emoji: "☀️" },
          { en: "cloudy", ph: "/ˈklaʊdi/", cn: "多云的", emoji: "☁️" },
          { en: "rainy", ph: "/ˈreɪni/", cn: "下雨的", emoji: "🌧️" },
          { en: "snowy", ph: "/ˈsnəʊi/", cn: "下雪的", emoji: "❄️" },
          { en: "windy", ph: "/ˈwɪndi/", cn: "有风的", emoji: "🌬️" },
          { en: "warm", ph: "/wɔːm/", cn: "温暖的", emoji: "🌤️" },
          { en: "cold", ph: "/kəʊld/", cn: "寒冷的", emoji: "🥶" },
          { en: "hot", ph: "/hɒt/", cn: "炎热的", emoji: "🥵" },
          { en: "cool", ph: "/kuːl/", cn: "凉爽的", emoji: "🍃" },
          { en: "weather", ph: "/ˈweðə(r)/", cn: "天气", emoji: "🌦️" },
          { en: "snowman", ph: "/ˈsnəʊmæn/", cn: "雪人", emoji: "⛄" },
          { en: "kite", ph: "/kaɪt/", cn: "风筝", emoji: "🪁" },
          { en: "swim", ph: "/swɪm/", cn: "游泳", emoji: "🏊" },
          { en: "umbrella", ph: "/ʌmˈbrelə/", cn: "雨伞", emoji: "☂️" },
          { en: "temperature", ph: "/ˈtemprətʃə(r)/", cn: "温度", emoji: "🌡️" }
        ],
        sentences: [
          { en: "What's the weather like today?", cn: "今天天气怎么样？" },
          { en: "It's sunny and warm.", cn: "今天晴朗又温暖。" },
          { en: "It will be rainy tomorrow.", cn: "明天会下雨。" },
          { en: "We can fly a kite on a windy day.", cn: "有风的日子我们可以放风筝。" },
          { en: "We make a snowman on a snowy day.", cn: "下雪天我们堆雪人。" }
        ]
      },
      {
        name: "Unit 5 We're going to high school",
        icon: "🎓",
        words: [
          { en: "high school", ph: "/haɪ skuːl/", cn: "高中", emoji: "🏫" },
          { en: "classmate", ph: "/ˈklɑːsmeɪt/", cn: "同学", emoji: "👬" },
          { en: "teacher", ph: "/ˈtiːtʃə(r)/", cn: "老师", emoji: "👩‍🏫" },
          { en: "subject", ph: "/ˈsʌbdʒɪkt/", cn: "科目", emoji: "📚" },
          { en: "science", ph: "/ˈsaɪəns/", cn: "科学", emoji: "🔬" },
          { en: "math", ph: "/mæθ/", cn: "数学", emoji: "➗" },
          { en: "English", ph: "/ˈɪŋɡlɪʃ/", cn: "英语", emoji: "🔤" },
          { en: "future", ph: "/ˈfjuːtʃə(r)/", cn: "未来", emoji: "🔮" },
          { en: "plan", ph: "/plæn/", cn: "计划", emoji: "📝" },
          { en: "library", ph: "/ˈlaɪbrəri/", cn: "图书馆", emoji: "📚" },
          { en: "graduation", ph: "/ˌɡrædʒuˈeɪʃn/", cn: "毕业", emoji: "🎓" },
          { en: "hope", ph: "/həʊp/", cn: "希望", emoji: "💭" },
          { en: "dream", ph: "/driːm/", cn: "梦想", emoji: "🌠" }
        ],
        sentences: [
          { en: "I'm going to high school next year.", cn: "明年我要上高中了。" },
          { en: "I'm looking forward to making new friends.", cn: "我期待交新朋友。" },
          { en: "We should keep in touch.", cn: "我们应该保持联系。" },
          { en: "My favourite subject is science.", cn: "我最喜欢的科目是科学。" },
          { en: "Wish you a good future.", cn: "祝你前程似锦。" }
        ]
      },
      {
        name: "Unit 6 Revision",
        icon: "🌟",
        words: [
          { en: "remember", ph: "/rɪˈmembə(r)/", cn: "记住", emoji: "🧠" },
          { en: "learn", ph: "/lɜːn/", cn: "学习", emoji: "📚" },
          { en: "hope", ph: "/həʊp/", cn: "希望", emoji: "🌠" },
          { en: "dream", ph: "/driːm/", cn: "梦想", emoji: "🌙" },
          { en: "choose", ph: "/tʃuːz/", cn: "选择", emoji: "✅" },
          { en: "friendly", ph: "/ˈfrendli/", cn: "友好的", emoji: "🤗" }
        ],
        sentences: [
          { en: "We should protect our environment.", cn: "我们应该保护环境。" },
          { en: "Keep in touch and be happy!", cn: "保持联系，天天开心！" },
          { en: "I hope my dream comes true.", cn: "我希望梦想成真。" }
        ]
      }
    ]
  }
};

/* ------------------------------------------------------------
 * 职业工装连线（对应六上 Unit 6 Our Clothes：通过衣服分辨职业）
 * outfit: 服装/装备英文描述（左边显示的"衣服"）
 * outfitEmoji: 服装图形
 * job: 职业英文（右边答案）
 * person: 职业人物图形（匹配成功后展示）
 * cn: 职业中文
 * ------------------------------------------------------------ */
const PROFESSIONS = [
  { outfit: "a white coat", outfitEmoji: "🥼", job: "doctor", person: "🧑‍⚕️", cn: "医生" },
  { outfit: "a white uniform", outfitEmoji: "🩺", job: "nurse", person: "👩‍⚕️", cn: "护士" },
  { outfit: "a fireproof suit", outfitEmoji: "🧯", job: "firefighter", person: "🧑‍🚒", cn: "消防员" },
  { outfit: "a police uniform", outfitEmoji: "👮", job: "police officer", person: "👮‍♂️", cn: "警察" },
  { outfit: "a chef's hat", outfitEmoji: "👨‍🍳", job: "cook", person: "👨‍🍳", cn: "厨师" },
  { outfit: "a pilot uniform", outfitEmoji: "🧑‍✈️", job: "pilot", person: "🧑‍✈️", cn: "飞行员" },
  { outfit: "a spacesuit", outfitEmoji: "🧑‍🚀", job: "astronaut", person: "🧑‍🚀", cn: "宇航员" },
  { outfit: "a hard hat and a vest", outfitEmoji: "👷", job: "construction worker", person: "👷‍♂️", cn: "建筑工人" }
];

/* 听写/拼写时需要排除的带空格词（拼写游戏只支持单字母词） */
function getSpellableWords(words) {
  return words.filter(w => !/\s/.test(w.en));
}
