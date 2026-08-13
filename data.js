/*
 * TMI Wordle 料理题库
 * 数据由 Recipe.txt 转换而来。替换或更新题库时，请保留 window.TMI_RECIPES 数组名称，
 * 并确保每条记录包含：id、name、cookware、price、level、ingredients、time、time60、
 * positiveTags、negativeTags、acquisition、dlc。游戏逻辑不依赖任何料理名称写死。
 */

window.TMI_RECIPES = [
    {
        "id":  "recipe-001",
        "name":  "海鲜味噌汤",
        "cookware":  "煮锅",
        "price":  8,
        "level":  1,
        "ingredients":  [
                            "海苔"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "素",
                             "家常",
                             "汤羹"
                         ],
        "negativeTags":  [
                             "重油"
                         ],
        "acquisition":  "初始拥有",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-002",
        "name":  "烤八目鳗",
        "cookware":  "烤架",
        "price":  22,
        "level":  2,
        "ingredients":  [
                            "八目鳗"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "水产",
                             "招牌",
                             "烧烤"
                         ],
        "negativeTags":  [
                             "肉",
                             "素"
                         ],
        "acquisition":  "初始拥有",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-003",
        "name":  "冷豆腐",
        "cookware":  "料理台",
        "price":  21,
        "level":  2,
        "ingredients":  [
                            "豆腐",
                            "萝卜"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "素",
                             "家常",
                             "清淡",
                             "下酒",
                             "小巧"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "初始拥有",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-004",
        "name":  "饭团",
        "cookware":  "料理台",
        "price":  6,
        "level":  1,
        "ingredients":  [
                            "海苔"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "素",
                             "家常",
                             "饱腹",
                             "和风"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "等级2解锁",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-005",
        "name":  "煮豆腐",
        "cookware":  "煮锅",
        "price":  22,
        "level":  1,
        "ingredients":  [
                            "豆腐"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "素",
                             "家常",
                             "清淡"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "等级4解锁",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-006",
        "name":  "猪肉盖浇饭",
        "cookware":  "煮锅",
        "price":  20,
        "level":  2,
        "ingredients":  [
                            "猪肉"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "肉",
                             "家常",
                             "饱腹"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "等级8解锁",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-007",
        "name":  "土豆可乐饼",
        "cookware":  "油锅",
        "price":  22,
        "level":  1,
        "ingredients":  [
                            "土豆"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "素",
                             "家常",
                             "重油"
                         ],
        "negativeTags":  [
                             "凉爽"
                         ],
        "acquisition":  "等级11解锁",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-008",
        "name":  "豚骨拉面",
        "cookware":  "煮锅",
        "price":  60,
        "level":  3,
        "ingredients":  [
                            "鸡蛋",
                            "猪肉",
                            "海苔"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "肉",
                             "素",
                             "家常",
                             "饱腹",
                             "咸"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "等级14解锁",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-009",
        "name":  "司康饼",
        "cookware":  "蒸锅",
        "price":  8,
        "level":  1,
        "ingredients":  [
                            "黄油",
                            "面粉"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "饱腹",
                             "西式"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "等级18且红魔馆开启后获取",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-010",
        "name":  "香煎三文鱼",
        "cookware":  "油锅",
        "price":  58,
        "level":  3,
        "ingredients":  [
                            "三文鱼",
                            "竹笋"
                        ],
        "time":  10,
        "time60":  6,
        "positiveTags":  [
                             "肉",
                             "西式",
                             "鲜"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "等级21且红魔馆开启后获取",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-011",
        "name":  "奶油炖菜",
        "cookware":  "蒸锅",
        "price":  20,
        "level":  2,
        "ingredients":  [
                            "洋葱",
                            "蘑菇",
                            "黄油"
                        ],
        "time":  9,
        "time60":  5.4,
        "positiveTags":  [
                             "素",
                             "西式",
                             "菌类",
                             "汤羹"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "等级24且竹林开启后获取",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-012",
        "name":  "热松饼",
        "cookware":  "油锅",
        "price":  22,
        "level":  2,
        "ingredients":  [
                            "鸡蛋",
                            "蜂蜜",
                            "面粉"
                        ],
        "time":  9,
        "time60":  5.4,
        "positiveTags":  [
                             "饱腹",
                             "西式",
                             "甜"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "等级27且红魔馆开启后获取",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-013",
        "name":  "竹笋炒肉",
        "cookware":  "油锅",
        "price":  25,
        "level":  2,
        "ingredients":  [
                            "猪肉",
                            "竹笋"
                        ],
        "time":  10,
        "time60":  6,
        "positiveTags":  [
                             "肉",
                             "家常",
                             "下酒"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "等级33且竹林开启后获取",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-014",
        "name":  "黄油牛排",
        "cookware":  "油锅",
        "price":  60,
        "level":  2,
        "ingredients":  [
                            "和牛",
                            "黄油"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "肉",
                             "重油",
                             "饱腹",
                             "西式"
                         ],
        "negativeTags":  [
                             "甜",
                             "凉爽"
                         ],
        "acquisition":  "红魔馆主线获取",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-015",
        "name":  "竹取姬",
        "cookware":  "蒸锅",
        "price":  65,
        "level":  4,
        "ingredients":  [
                            "黑毛猪肉",
                            "松露",
                            "白果",
                            "竹笋",
                            "竹子"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "肉",
                             "高级",
                             "传说",
                             "和风",
                             "适合拍照",
                             "文化底蕴",
                             "特产"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "竹林主线【不死人的对决】获取",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-016",
        "name":  "不死鸟",
        "cookware":  "烤架",
        "price":  65,
        "level":  4,
        "ingredients":  [
                            "土豆",
                            "洋葱",
                            "萝卜",
                            "蜂蜜",
                            "面粉"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "高级",
                             "传说",
                             "西式",
                             "适合拍照",
                             "烧烤",
                             "燃起来了"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "竹林主线【不死人的对决】获取",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-017",
        "name":  "烤蘑菇",
        "cookware":  "烤架",
        "price":  18,
        "level":  1,
        "ingredients":  [
                            "蘑菇"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "素",
                             "咸",
                             "灼热",
                             "菌类",
                             "烧烤"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "兽道支线任务【年纪大了，眼睛不好使啦……】获取",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-018",
        "name":  "炙猪肉饭团",
        "cookware":  "料理台",
        "price":  14,
        "level":  2,
        "ingredients":  [
                            "猪肉"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "肉",
                             "家常",
                             "饱腹",
                             "和风"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "人里支线任务【悬赏：私塾盒饭供应】获取",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-019",
        "name":  "炒肉丝",
        "cookware":  "油锅",
        "price":  15,
        "level":  1,
        "ingredients":  [
                            "猪肉"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "肉",
                             "家常",
                             "重油",
                             "下酒",
                             "中华"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "神社支线任务【寻找能让人力量涌现的食物】获取",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-020",
        "name":  "蜜汁叉烧",
        "cookware":  "烤架",
        "price":  70,
        "level":  3,
        "ingredients":  [
                            "猪肉",
                            "蜂蜜"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "肉",
                             "重油",
                             "中华",
                             "甜",
                             "不可思议"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "红魔馆支线【想要知道红美铃大人的家乡菜！】获取",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-021",
        "name":  "流水素面",
        "cookware":  "料理台",
        "price":  40,
        "level":  3,
        "ingredients":  [
                            "面粉",
                            "竹子"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "素",
                             "清淡",
                             "凉爽",
                             "不可思议"
                         ],
        "negativeTags":  [
                             "重油"
                         ],
        "acquisition":  "竹林支线【料理上的一些迷惑，有人可以解答吗？】获取",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-022",
        "name":  "毛玉三色冰激凌",
        "cookware":  "料理台",
        "price":  75,
        "level":  3,
        "ingredients":  [
                            "鸡蛋",
                            "豆腐",
                            "蜂蜜",
                            "露水"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "西式",
                             "甜",
                             "适合拍照",
                             "凉爽",
                             "梦幻"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【MC幻想乡联动】萌澄果处购买（PC)/兽道商人处购买（Switch）",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-023",
        "name":  "毛玉熔岩豆腐",
        "cookware":  "料理台",
        "price":  85,
        "level":  3,
        "ingredients":  [
                            "牛肉",
                            "豆腐",
                            "洋葱",
                            "辣椒"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "素",
                             "中华",
                             "鲜",
                             "适合拍照",
                             "不可思议"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【MC幻想乡联动】萌澄果处购买（PC)/兽道商人处购买（Switch）",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-024",
        "name":  "猩红恶魔蛋糕",
        "cookware":  "料理台",
        "price":  60,
        "level":  3,
        "ingredients":  [
                            "土豆",
                            "南瓜",
                            "蜂蜜",
                            "露水"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "西式",
                             "甜",
                             "适合拍照",
                             "猎奇",
                             "梦幻"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【三妖精的蹦蹦跳跳讨伐大作战联动】三妖精处购买（PC)/香霖堂购买(Switch）",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-025",
        "name":  "无意识妖怪慕斯",
        "cookware":  "料理台",
        "price":  60,
        "level":  3,
        "ingredients":  [
                            "豆腐",
                            "洋葱",
                            "蜂蜜",
                            "黄油"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "高级",
                             "西式",
                             "甜",
                             "适合拍照",
                             "梦幻"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【三妖精的蹦蹦跳跳讨伐大作战联动】三妖精处购买（PC)/香霖堂购买(Switch）",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-026",
        "name":  "水饺",
        "cookware":  "煮锅",
        "price":  35,
        "level":  2,
        "ingredients":  [
                            "面粉"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "素",
                             "家常",
                             "中华",
                             "文化底蕴"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "香霖堂兑换（银色的青蛙硬币*5）",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-027",
        "name":  "汤圆",
        "cookware":  "煮锅",
        "price":  35,
        "level":  2,
        "ingredients":  [
                            "糯米"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "素",
                             "家常",
                             "中华",
                             "文化底蕴"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "香霖堂兑换（银色的青蛙硬币*5）",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-028",
        "name":  "月饼",
        "cookware":  "蒸锅",
        "price":  20,
        "level":  5,
        "ingredients":  [
                            "蜂蜜",
                            "面粉",
                            "糯米",
                            "月光草"
                        ],
        "time":  10,
        "time60":  6,
        "positiveTags":  [
                             "饱腹",
                             "中华",
                             "甜",
                             "文化底蕴",
                             "不可思议",
                             "小巧"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "彩蛋料理，无获取途径",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-029",
        "name":  "露水煮蛋",
        "cookware":  "蒸锅",
        "price":  18,
        "level":  2,
        "ingredients":  [
                            "鸡蛋",
                            "露水"
                        ],
        "time":  3,
        "time60":  1.8,
        "positiveTags":  [
                             "清淡",
                             "生"
                         ],
        "negativeTags":  [
                             "肉",
                             "水产",
                             "重油"
                         ],
        "acquisition":  "莉格露Lv1-\u003eLv2",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-030",
        "name":  "香炸蝉蜕",
        "cookware":  "油锅",
        "price":  19,
        "level":  1,
        "ingredients":  [
                            "蝉蜕"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "重油",
                             "猎奇"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "莉格露Lv2-\u003eLv3",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-031",
        "name":  "幻昙花糕",
        "cookware":  "蒸锅",
        "price":  78,
        "level":  3,
        "ingredients":  [
                            "幻昙华",
                            "露水"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "高级",
                             "传说",
                             "甜",
                             "适合拍照",
                             "不可思议",
                             "梦幻"
                         ],
        "negativeTags":  [
                             "肉",
                             "水产"
                         ],
        "acquisition":  "莉格露Lv3-\u003eLv4",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-032",
        "name":  "臭豆腐",
        "cookware":  "油锅",
        "price":  24,
        "level":  1,
        "ingredients":  [
                            "豆腐",
                            "辣椒"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "素",
                             "中华",
                             "猎奇",
                             "辣"
                         ],
        "negativeTags":  [
                             "甜",
                             "果味"
                         ],
        "acquisition":  "露米娅Lv1-\u003eLv2",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-033",
        "name":  "炸八目鳗",
        "cookware":  "油锅",
        "price":  27,
        "level":  2,
        "ingredients":  [
                            "八目鳗"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "水产",
                             "重油",
                             "招牌"
                         ],
        "negativeTags":  [
                             "凉爽"
                         ],
        "acquisition":  "露米娅Lv2-\u003eLv3",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-034",
        "name":  "赛熊掌",
        "cookware":  "蒸锅",
        "price":  70,
        "level":  3,
        "ingredients":  [
                            "黑毛猪肉",
                            "河豚",
                            "竹笋"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "肉",
                             "水产",
                             "高级",
                             "山珍",
                             "鲜",
                             "力量涌现",
                             "不可思议"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "露米娅Lv3-\u003eLv4",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-035",
        "name":  "秘制小鱼干",
        "cookware":  "料理台",
        "price":  30,
        "level":  2,
        "ingredients":  [
                            "鳟鱼"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "水产",
                             "咸",
                             "鲜",
                             "小巧"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "橙Lv1-\u003eLv2",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-036",
        "name":  "猪肉鳟鱼熏",
        "cookware":  "烤架",
        "price":  26,
        "level":  2,
        "ingredients":  [
                            "猪肉",
                            "鳟鱼"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "肉",
                             "水产",
                             "家常",
                             "烧烤"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "橙Lv2-\u003eLv3",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-037",
        "name":  "力量汤",
        "cookware":  "煮锅",
        "price":  34,
        "level":  3,
        "ingredients":  [
                            "野猪肉",
                            "海苔"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "肉",
                             "素",
                             "山珍",
                             "灼热",
                             "力量涌现",
                             "汤羹"
                         ],
        "negativeTags":  [
                             "凉爽",
                             "小巧"
                         ],
        "acquisition":  "橙Lv3-\u003eLv4",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-038",
        "name":  "豆腐味噌",
        "cookware":  "煮锅",
        "price":  21,
        "level":  2,
        "ingredients":  [
                            "豆腐"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "素",
                             "家常",
                             "清淡",
                             "和风",
                             "汤羹"
                         ],
        "negativeTags":  [
                             "重油"
                         ],
        "acquisition":  "稗田阿求Lv1-\u003eLv2",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-039",
        "name":  "蔬菜专辑",
        "cookware":  "料理台",
        "price":  56,
        "level":  3,
        "ingredients":  [
                            "土豆",
                            "洋葱",
                            "南瓜"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "素",
                             "清淡",
                             "生",
                             "凉爽"
                         ],
        "negativeTags":  [
                             "肉",
                             "水产",
                             "灼热"
                         ],
        "acquisition":  "稗田阿求Lv2-\u003eLv3",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-040",
        "name":  "樱落雪",
        "cookware":  "料理台",
        "price":  50,
        "level":  4,
        "ingredients":  [
                            "极上金枪鱼"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "水产",
                             "高级",
                             "海味",
                             "和风",
                             "生",
                             "适合拍照",
                             "小巧"
                         ],
        "negativeTags":  [
                             "重油"
                         ],
        "acquisition":  "稗田阿求Lv3-\u003eLv4",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-041",
        "name":  "油豆腐",
        "cookware":  "油锅",
        "price":  16,
        "level":  1,
        "ingredients":  [
                            "豆腐"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "素",
                             "家常",
                             "重油",
                             "和风"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "上白泽慧音Lv1-\u003eLv2",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-042",
        "name":  "诗礼银杏",
        "cookware":  "蒸锅",
        "price":  60,
        "level":  3,
        "ingredients":  [
                            "白果",
                            "蜂蜜"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "素",
                             "中华",
                             "甜",
                             "文化底蕴"
                         ],
        "negativeTags":  [
                             "咸"
                         ],
        "acquisition":  "上白泽慧音Lv2-\u003eLv3",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-043",
        "name":  "白雪",
        "cookware":  "煮锅",
        "price":  98,
        "level":  4,
        "ingredients":  [
                            "海苔",
                            "八目鳗",
                            "河豚"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "肉",
                             "水产",
                             "素",
                             "高级",
                             "和风",
                             "文化底蕴"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "上白泽慧音Lv3-\u003eLv4",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-044",
        "name":  "豆腐锅",
        "cookware":  "煮锅",
        "price":  19,
        "level":  1,
        "ingredients":  [
                            "豆腐"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "素",
                             "清淡",
                             "和风",
                             "灼热"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "茨木华扇Lv1-\u003eLv2",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-045",
        "name":  "牛肉盖浇饭",
        "cookware":  "煮锅",
        "price":  20,
        "level":  2,
        "ingredients":  [
                            "牛肉"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "肉",
                             "家常",
                             "饱腹"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "茨木华扇Lv2-\u003eLv3",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-046",
        "name":  "野味加农",
        "cookware":  "煮锅",
        "price":  66,
        "level":  4,
        "ingredients":  [
                            "土豆",
                            "南瓜",
                            "黑毛猪肉"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "肉",
                             "重油",
                             "饱腹",
                             "山珍",
                             "灼热"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "茨木华扇Lv3-\u003eLv4",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-047",
        "name":  "温暖饭团",
        "cookware":  "料理台",
        "price":  30,
        "level":  3,
        "ingredients":  [
                            "洋葱",
                            "鳟鱼"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "水产",
                             "素",
                             "家常",
                             "饱腹",
                             "和风",
                             "灼热"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "博丽灵梦Lv1-\u003eLv2",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-048",
        "name":  "杂炊",
        "cookware":  "煮锅",
        "price":  40,
        "level":  2,
        "ingredients":  [
                            "豆腐",
                            "海苔",
                            "鳟鱼"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "肉",
                             "素",
                             "家常",
                             "鲜",
                             "灼热"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "博丽灵梦Lv2-\u003eLv3",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-049",
        "name":  "大奢宴",
        "cookware":  "煮锅",
        "price":  105,
        "level":  3,
        "ingredients":  [
                            "黑毛猪肉",
                            "和牛",
                            "河豚"
                        ],
        "time":  10,
        "time60":  6,
        "positiveTags":  [
                             "肉",
                             "水产",
                             "高级",
                             "饱腹",
                             "山珍"
                         ],
        "negativeTags":  [
                             "实惠",
                             "家常"
                         ],
        "acquisition":  "博丽灵梦Lv3-\u003eLv4",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-050",
        "name":  "炸猪肉排",
        "cookware":  "油锅",
        "price":  25,
        "level":  2,
        "ingredients":  [
                            "猪肉"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "肉",
                             "家常",
                             "重油",
                             "饱腹"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "伊吹萃香Lv1-\u003eLv2",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-051",
        "name":  "能量串",
        "cookware":  "烤架",
        "price":  50,
        "level":  3,
        "ingredients":  [
                            "牛肉",
                            "洋葱",
                            "南瓜"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "肉",
                             "素",
                             "饱腹",
                             "烧烤"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "伊吹萃香Lv2-\u003eLv3",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-052",
        "name":  "二天一流",
        "cookware":  "烤架",
        "price":  90,
        "level":  4,
        "ingredients":  [
                            "野猪肉",
                            "黑毛猪肉"
                        ],
        "time":  18,
        "time60":  10.8,
        "positiveTags":  [
                             "肉",
                             "高级",
                             "山珍",
                             "文化底蕴",
                             "烧烤",
                             "燃起来了"
                         ],
        "negativeTags":  [
                             "家常"
                         ],
        "acquisition":  "伊吹萃香Lv3-\u003eLv4",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-053",
        "name":  "凉菜雕花",
        "cookware":  "料理台",
        "price":  20,
        "level":  1,
        "ingredients":  [
                            "萝卜"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "素",
                             "清淡",
                             "适合拍照",
                             "凉爽"
                         ],
        "negativeTags":  [
                             "肉",
                             "灼热"
                         ],
        "acquisition":  "比那名居天子Lv1-\u003eLv2",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-054",
        "name":  "桃花羹",
        "cookware":  "煮锅",
        "price":  55,
        "level":  2,
        "ingredients":  [
                            "桃子",
                            "露水",
                            "冰块"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "素",
                             "甜",
                             "适合拍照",
                             "凉爽",
                             "果味",
                             "汤羹"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "比那名居天子Lv2-\u003eLv3",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-055",
        "name":  "北极甜虾蜜桃色拉",
        "cookware":  "料理台",
        "price":  25,
        "level":  2,
        "ingredients":  [
                            "桃子",
                            "虾",
                            "冰块"
                        ],
        "time":  10,
        "time60":  6,
        "positiveTags":  [
                             "水产",
                             "素",
                             "清淡",
                             "甜",
                             "适合拍照",
                             "不可思议",
                             "果味"
                         ],
        "negativeTags":  [
                             "肉",
                             "咸"
                         ],
        "acquisition":  "比那名居天子Lv3-\u003eLv4",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-056",
        "name":  "红烧鳗鱼",
        "cookware":  "油锅",
        "price":  42,
        "level":  3,
        "ingredients":  [
                            "洋葱",
                            "八目鳗"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "水产",
                             "素",
                             "重油",
                             "鲜",
                             "招牌"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "红美铃Lv1-\u003eLv2",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-057",
        "name":  "白果萝卜排骨汤",
        "cookware":  "煮锅",
        "price":  65,
        "level":  2,
        "ingredients":  [
                            "猪肉",
                            "萝卜",
                            "白果"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "肉",
                             "素",
                             "中华",
                             "灼热",
                             "汤羹"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "红美铃Lv2-\u003eLv3",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-058",
        "name":  "华光玉煎包",
        "cookware":  "油锅",
        "price":  128,
        "level":  4,
        "ingredients":  [
                            "黑毛猪肉",
                            "蘑菇"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "肉",
                             "高级",
                             "传说",
                             "中华",
                             "菌类",
                             "梦幻"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "红美铃Lv3-\u003eLv4",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-059",
        "name":  "真·海鲜味噌汤",
        "cookware":  "煮锅",
        "price":  55,
        "level":  2,
        "ingredients":  [
                            "鳟鱼",
                            "三文鱼"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "水产",
                             "家常",
                             "清淡",
                             "汤羹"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "琪露诺Lv1-\u003eLv2",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-060",
        "name":  "刺身拼盘",
        "cookware":  "料理台",
        "price":  88,
        "level":  3,
        "ingredients":  [
                            "三文鱼",
                            "金枪鱼"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "水产",
                             "高级",
                             "和风",
                             "生",
                             "适合拍照"
                         ],
        "negativeTags":  [
                             "灼热"
                         ],
        "acquisition":  "琪露诺Lv2-\u003eLv3",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-061",
        "name":  "猪鹿蝶",
        "cookware":  "蒸锅",
        "price":  78,
        "level":  3,
        "ingredients":  [
                            "鹿肉",
                            "野猪肉",
                            "月光草"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "肉",
                             "高级",
                             "适合拍照",
                             "文化底蕴"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "琪露诺Lv3-\u003eLv4",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-062",
        "name":  "班尼迪克蛋",
        "cookware":  "油锅",
        "price":  35,
        "level":  2,
        "ingredients":  [
                            "鸡蛋",
                            "竹笋",
                            "黄油",
                            "面粉"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "饱腹",
                             "西式",
                             "生",
                             "小巧"
                         ],
        "negativeTags":  [
                             "甜",
                             "果味"
                         ],
        "acquisition":  "帕秋莉Lv1-\u003eLv2",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-063",
        "name":  "意式烩饭",
        "cookware":  "蒸锅",
        "price":  70,
        "level":  2,
        "ingredients":  [
                            "洋葱",
                            "蘑菇",
                            "竹笋",
                            "黄油"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "饱腹",
                             "西式",
                             "鲜",
                             "菌类"
                         ],
        "negativeTags":  [
                             "甜"
                         ],
        "acquisition":  "帕秋莉Lv2-\u003eLv3",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-064",
        "name":  "惠灵顿牛排",
        "cookware":  "油锅",
        "price":  150,
        "level":  4,
        "ingredients":  [
                            "鸡蛋",
                            "和牛",
                            "松露",
                            "黄油",
                            "面粉"
                        ],
        "time":  14,
        "time60":  8.4,
        "positiveTags":  [
                             "肉",
                             "高级",
                             "传说",
                             "山珍",
                             "西式"
                         ],
        "negativeTags":  [
                             "甜",
                             "凉爽"
                         ],
        "acquisition":  "帕秋莉Lv3-\u003eLv4",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-065",
        "name":  "麻婆豆腐",
        "cookware":  "油锅",
        "price":  32,
        "level":  2,
        "ingredients":  [
                            "猪肉",
                            "豆腐",
                            "辣椒"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "素",
                             "中华",
                             "灼热",
                             "辣"
                         ],
        "negativeTags":  [
                             "甜",
                             "凉爽",
                             "果味"
                         ],
        "acquisition":  "藤原妹红Lv1-\u003eLv2",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-066",
        "name":  "水煮鱼",
        "cookware":  "煮锅",
        "price":  68,
        "level":  3,
        "ingredients":  [
                            "鳟鱼",
                            "辣椒"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "水产",
                             "中华",
                             "灼热",
                             "辣",
                             "燃起来了"
                         ],
        "negativeTags":  [
                             "肉",
                             "甜",
                             "凉爽",
                             "果味"
                         ],
        "acquisition":  "藤原妹红Lv2-\u003eLv3",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-067",
        "name":  "岩浆",
        "cookware":  "煮锅",
        "price":  125,
        "level":  3,
        "ingredients":  [
                            "牛肉",
                            "和牛",
                            "松露",
                            "河豚"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "肉",
                             "水产",
                             "高级",
                             "饱腹",
                             "灼热",
                             "力量涌现",
                             "菌类"
                         ],
        "negativeTags":  [
                             "凉爽"
                         ],
        "acquisition":  "藤原妹红Lv3-\u003eLv4",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-068",
        "name":  "竹筒蒸蛋",
        "cookware":  "蒸锅",
        "price":  40,
        "level":  2,
        "ingredients":  [
                            "鸡蛋",
                            "海苔",
                            "蘑菇",
                            "竹子"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "家常",
                             "清淡",
                             "菌类"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "蓬莱山辉夜Lv1-\u003eLv2",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-069",
        "name":  "月之恋人",
        "cookware":  "料理台",
        "price":  66,
        "level":  3,
        "ingredients":  [
                            "鸡蛋",
                            "黄油",
                            "面粉",
                            "月光草"
                        ],
        "time":  10,
        "time60":  6,
        "positiveTags":  [
                             "甜",
                             "适合拍照",
                             "小巧",
                             "特产"
                         ],
        "negativeTags":  [
                             "肉",
                             "水产",
                             "素"
                         ],
        "acquisition":  "蓬莱山辉夜Lv2-\u003eLv3",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-070",
        "name":  "蓬莱玉枝",
        "cookware":  "烤架",
        "price":  125,
        "level":  5,
        "ingredients":  [
                            "猪肉",
                            "鹿肉",
                            "三文鱼",
                            "和牛",
                            "竹子"
                        ],
        "time":  13,
        "time60":  7.8,
        "positiveTags":  [
                             "肉",
                             "高级",
                             "传说",
                             "文化底蕴",
                             "烧烤"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "蓬莱山辉夜Lv3-\u003eLv4",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-071",
        "name":  "麻薯",
        "cookware":  "料理台",
        "price":  30,
        "level":  2,
        "ingredients":  [
                            "糯米"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "和风",
                             "甜",
                             "小巧"
                         ],
        "negativeTags":  [
                             "肉",
                             "水产",
                             "咸",
                             "鲜"
                         ],
        "acquisition":  "因幡帝Lv1-\u003eLv2",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-072",
        "name":  "白桃生八桥",
        "cookware":  "料理台",
        "price":  55,
        "level":  2,
        "ingredients":  [
                            "桃子",
                            "糯米"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "和风",
                             "甜",
                             "果味"
                         ],
        "negativeTags":  [
                             "肉",
                             "水产",
                             "咸",
                             "鲜"
                         ],
        "acquisition":  "因幡帝Lv2-\u003eLv3",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-073",
        "name":  "月光团子",
        "cookware":  "料理台",
        "price":  80,
        "level":  3,
        "ingredients":  [
                            "糯米",
                            "月光草"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "和风",
                             "甜",
                             "不可思议",
                             "特产"
                         ],
        "negativeTags":  [
                             "肉",
                             "水产",
                             "咸",
                             "鲜"
                         ],
        "acquisition":  "因幡帝Lv3-\u003eLv4",
        "dlc":  "本体"
    },
    {
        "id":  "recipe-074",
        "name":  "蘑菇肉片",
        "cookware":  "油锅",
        "price":  20,
        "level":  1,
        "ingredients":  [
                            "猪肉",
                            "蘑菇"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "肉",
                             "家常",
                             "重油",
                             "菌类"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC1】雾雨魔理沙Lv1-\u003eLv2",
        "dlc":  "DLC1"
    },
    {
        "id":  "recipe-075",
        "name":  "秘制鲜菌煲",
        "cookware":  "煮锅",
        "price":  62,
        "level":  3,
        "ingredients":  [
                            "蘑菇",
                            "松露",
                            "露水"
                        ],
        "time":  9,
        "time60":  5.4,
        "positiveTags":  [
                             "和风",
                             "鲜",
                             "菌类",
                             "特产"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC1】雾雨魔理沙Lv2-\u003eLv3",
        "dlc":  "DLC1"
    },
    {
        "id":  "recipe-076",
        "name":  "蘑女的舞踏烩",
        "cookware":  "煮锅",
        "price":  112,
        "level":  4,
        "ingredients":  [
                            "蘑菇",
                            "虾",
                            "辣椒",
                            "章鱼"
                        ],
        "time":  14,
        "time60":  8.4,
        "positiveTags":  [
                             "水产",
                             "重油",
                             "咸",
                             "鲜",
                             "适合拍照",
                             "灼热",
                             "菌类",
                             "辣"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC1】雾雨魔理沙Lv3-\u003eLv4",
        "dlc":  "DLC1"
    },
    {
        "id":  "recipe-077",
        "name":  "腌黄瓜",
        "cookware":  "料理台",
        "price":  16,
        "level":  1,
        "ingredients":  [
                            "黄瓜",
                            "黑盐"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "素",
                             "下酒",
                             "咸",
                             "小巧"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC1】河城荷取Lv1-\u003eLv2",
        "dlc":  "DLC1"
    },
    {
        "id":  "recipe-078",
        "name":  "奶油焗蟹",
        "cookware":  "油锅",
        "price":  88,
        "level":  3,
        "ingredients":  [
                            "奶油",
                            "螃蟹"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "高级",
                             "下酒",
                             "海味",
                             "鲜",
                             "招牌",
                             "适合拍照"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC1】河城荷取Lv2-\u003eLv3",
        "dlc":  "DLC1"
    },
    {
        "id":  "recipe-079",
        "name":  "拟尻子玉",
        "cookware":  "煮锅",
        "price":  120,
        "level":  4,
        "ingredients":  [
                            "鹿肉",
                            "松露",
                            "蝉蜕"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "传说",
                             "下酒",
                             "灼热",
                             "猎奇",
                             "小巧",
                             "梦幻"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC1】河城荷取Lv3-\u003eLv4",
        "dlc":  "DLC1"
    },
    {
        "id":  "recipe-080",
        "name":  "炸虾天妇罗",
        "cookware":  "油锅",
        "price":  22,
        "level":  1,
        "ingredients":  [
                            "虾",
                            "面粉"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "重油",
                             "下酒"
                         ],
        "negativeTags":  [
                             "清淡"
                         ],
        "acquisition":  "【DLC1】犬走椛Lv1-\u003eLv2",
        "dlc":  "DLC1"
    },
    {
        "id":  "recipe-081",
        "name":  "黄金酥鱼饼",
        "cookware":  "油锅",
        "price":  40,
        "level":  2,
        "ingredients":  [
                            "鳟鱼",
                            "蜂蜜",
                            "面粉"
                        ],
        "time":  9,
        "time60":  5.4,
        "positiveTags":  [
                             "水产",
                             "重油",
                             "下酒",
                             "力量涌现"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC1】犬走椛Lv2-\u003eLv3",
        "dlc":  "DLC1"
    },
    {
        "id":  "recipe-082",
        "name":  "全肉盛宴",
        "cookware":  "烤架",
        "price":  115,
        "level":  4,
        "ingredients":  [
                            "鹿肉",
                            "野猪肉",
                            "黑毛猪肉",
                            "和牛"
                        ],
        "time":  14,
        "time60":  8.4,
        "positiveTags":  [
                             "大份",
                             "肉",
                             "高级",
                             "下酒",
                             "山珍",
                             "咸",
                             "适合拍照",
                             "灼热"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC1】犬走椛Lv3-\u003eLv4",
        "dlc":  "DLC1"
    },
    {
        "id":  "recipe-083",
        "name":  "大阪烧",
        "cookware":  "油锅",
        "price":  24,
        "level":  2,
        "ingredients":  [
                            "鸡蛋",
                            "萝卜",
                            "面粉"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "和风",
                             "招牌",
                             "适合拍照",
                             "小巧"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC1】东风谷早苗Lv1-\u003eLv2",
        "dlc":  "DLC1"
    },
    {
        "id":  "recipe-084",
        "name":  "章鱼烧",
        "cookware":  "油锅",
        "price":  36,
        "level":  2,
        "ingredients":  [
                            "海苔",
                            "面粉",
                            "章鱼"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "水产",
                             "下酒",
                             "饱腹",
                             "招牌",
                             "适合拍照",
                             "小巧"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC1】东风谷早苗Lv2-\u003eLv3",
        "dlc":  "DLC1"
    },
    {
        "id":  "recipe-085",
        "name":  "海胆刺身",
        "cookware":  "料理台",
        "price":  108,
        "level":  4,
        "ingredients":  [
                            "露水",
                            "海胆"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "高级",
                             "海味",
                             "甜",
                             "适合拍照",
                             "不可思议",
                             "小巧",
                             "特产"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC1】东风谷早苗Lv3-\u003eLv4",
        "dlc":  "DLC1"
    },
    {
        "id":  "recipe-086",
        "name":  "奶香蘑菇汤",
        "cookware":  "煮锅",
        "price":  28,
        "level":  1,
        "ingredients":  [
                            "土豆",
                            "蘑菇",
                            "奶油"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "家常",
                             "适合拍照",
                             "菌类"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC1】爱丽丝Lv1-\u003eLv2",
        "dlc":  "DLC1"
    },
    {
        "id":  "recipe-087",
        "name":  "普通小蛋糕",
        "cookware":  "蒸锅",
        "price":  56,
        "level":  2,
        "ingredients":  [
                            "鸡蛋",
                            "葡萄",
                            "奶油"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "高级",
                             "甜",
                             "适合拍照",
                             "文化底蕴",
                             "果味"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC1】爱丽丝Lv2-\u003eLv3",
        "dlc":  "DLC1"
    },
    {
        "id":  "recipe-088",
        "name":  "七色羊羹",
        "cookware":  "蒸锅",
        "price":  92,
        "level":  4,
        "ingredients":  [
                            "海苔",
                            "幻昙华",
                            "露水",
                            "葡萄"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "高级",
                             "甜",
                             "适合拍照",
                             "文化底蕴",
                             "不可思议",
                             "梦幻",
                             "果味"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC1】爱丽丝Lv3-\u003eLv4",
        "dlc":  "DLC1"
    },
    {
        "id":  "recipe-089",
        "name":  "手握寿司",
        "cookware":  "料理台",
        "price":  28,
        "level":  1,
        "ingredients":  [
                            "三文鱼",
                            "金枪鱼"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "水产",
                             "清淡",
                             "和风",
                             "鲜",
                             "生",
                             "文化底蕴"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC1】矢田寺成美Lv1-\u003eLv2",
        "dlc":  "DLC1"
    },
    {
        "id":  "recipe-090",
        "name":  "南瓜虾盅",
        "cookware":  "蒸锅",
        "price":  55,
        "level":  2,
        "ingredients":  [
                            "豆腐",
                            "南瓜",
                            "虾"
                        ],
        "time":  9,
        "time60":  5.4,
        "positiveTags":  [
                             "水产",
                             "清淡",
                             "饱腹",
                             "鲜",
                             "甜",
                             "适合拍照",
                             "特产"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC1】矢田寺成美Lv2-\u003eLv3",
        "dlc":  "DLC1"
    },
    {
        "id":  "recipe-091",
        "name":  "幻想佛跳墙",
        "cookware":  "煮锅",
        "price":  160,
        "level":  4,
        "ingredients":  [
                            "黑毛猪肉",
                            "和牛",
                            "松露",
                            "极上金枪鱼",
                            "河豚"
                        ],
        "time":  18,
        "time60":  10.8,
        "positiveTags":  [
                             "肉",
                             "水产",
                             "高级",
                             "传说",
                             "山珍",
                             "中华",
                             "适合拍照",
                             "力量涌现",
                             "文化底蕴",
                             "菌类",
                             "特产"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC1】矢田寺成美Lv3-\u003eLv4",
        "dlc":  "DLC1"
    },
    {
        "id":  "recipe-092",
        "name":  "脆旋风",
        "cookware":  "料理台",
        "price":  42,
        "level":  1,
        "ingredients":  [
                            "蜂蜜",
                            "蝉蜕",
                            "面粉"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "饱腹",
                             "生",
                             "猎奇",
                             "特产"
                         ],
        "negativeTags":  [
                             "重油"
                         ],
        "acquisition":  "【DLC2】黑谷山女Lv1-\u003eLv2",
        "dlc":  "DLC2"
    },
    {
        "id":  "recipe-093",
        "name":  "仰望天花板派",
        "cookware":  "蒸锅",
        "price":  66,
        "level":  2,
        "ingredients":  [
                            "鳟鱼",
                            "桃子",
                            "面粉"
                        ],
        "time":  9,
        "time60":  5.4,
        "positiveTags":  [
                             "下酒",
                             "海味",
                             "招牌",
                             "适合拍照",
                             "猎奇",
                             "特产"
                         ],
        "negativeTags":  [
                             "肉"
                         ],
        "acquisition":  "【DLC2】黑谷山女Lv2-\u003eLv3",
        "dlc":  "DLC2"
    },
    {
        "id":  "recipe-094",
        "name":  "兜甲蒸糕",
        "cookware":  "蒸锅",
        "price":  105,
        "level":  3,
        "ingredients":  [
                            "黑毛猪肉",
                            "蜂蜜",
                            "蝉蜕",
                            "面粉"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "高级",
                             "饱腹",
                             "鲜",
                             "生",
                             "招牌",
                             "适合拍照",
                             "力量涌现",
                             "猎奇",
                             "特产"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC2】黑谷山女Lv3-\u003eLv4",
        "dlc":  "DLC2"
    },
    {
        "id":  "recipe-095",
        "name":  "丧气芝士条",
        "cookware":  "蒸锅",
        "price":  25,
        "level":  1,
        "ingredients":  [
                            "白果",
                            "白果",
                            "芝士"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "下酒",
                             "咸",
                             "鲜",
                             "特产"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC2】水桥帕露西Lv1-\u003eLv2",
        "dlc":  "DLC2"
    },
    {
        "id":  "recipe-096",
        "name":  "阴郁水果派",
        "cookware":  "料理台",
        "price":  36,
        "level":  2,
        "ingredients":  [
                            "葡萄",
                            "柠檬",
                            "芝士"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "咸",
                             "鲜",
                             "特产",
                             "果味",
                             "酸"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC2】水桥帕露西Lv2-\u003eLv3",
        "dlc":  "DLC2"
    },
    {
        "id":  "recipe-097",
        "name":  "绝叫关东煮",
        "cookware":  "煮锅",
        "price":  92,
        "level":  4,
        "ingredients":  [
                            "牛肉",
                            "豆腐",
                            "萝卜",
                            "辣椒",
                            "辣椒"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "大份",
                             "肉",
                             "高级",
                             "饱腹",
                             "鲜",
                             "灼热",
                             "力量涌现",
                             "特产",
                             "辣"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC2】水桥帕露西Lv3-\u003eLv4",
        "dlc":  "DLC2"
    },
    {
        "id":  "recipe-098",
        "name":  "狮子头",
        "cookware":  "煮锅",
        "price":  28,
        "level":  1,
        "ingredients":  [
                            "牛肉"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "肉",
                             "下酒",
                             "鲜",
                             "招牌",
                             "特产"
                         ],
        "negativeTags":  [
                             "水产",
                             "饱腹"
                         ],
        "acquisition":  "【DLC2】星熊勇仪Lv1-\u003eLv2",
        "dlc":  "DLC2"
    },
    {
        "id":  "recipe-099",
        "name":  "巨人玉子烧",
        "cookware":  "油锅",
        "price":  60,
        "level":  2,
        "ingredients":  [
                            "鸡蛋",
                            "鸡蛋",
                            "面粉",
                            "面粉"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "高级",
                             "饱腹",
                             "和风",
                             "甜",
                             "力量涌现"
                         ],
        "negativeTags":  [
                             "下酒"
                         ],
        "acquisition":  "【DLC2】星熊勇仪Lv2-\u003eLv3",
        "dlc":  "DLC2"
    },
    {
        "id":  "recipe-100",
        "name":  "大江户船祭",
        "cookware":  "料理台",
        "price":  206,
        "level":  4,
        "ingredients":  [
                            "鳟鱼",
                            "三文鱼",
                            "金枪鱼",
                            "极上金枪鱼",
                            "冰块"
                        ],
        "time":  24,
        "time60":  14.4,
        "positiveTags":  [
                             "水产",
                             "高级",
                             "传说",
                             "下酒",
                             "海味",
                             "和风",
                             "鲜",
                             "生",
                             "招牌",
                             "适合拍照",
                             "文化底蕴"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC2】星熊勇仪Lv3-\u003eLv4",
        "dlc":  "DLC2"
    },
    {
        "id":  "recipe-101",
        "name":  "樱花布丁",
        "cookware":  "蒸锅",
        "price":  32,
        "level":  2,
        "ingredients":  [
                            "桃子",
                            "蜂蜜"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "甜",
                             "适合拍照",
                             "凉爽",
                             "小巧",
                             "特产",
                             "果味"
                         ],
        "negativeTags":  [
                             "重油",
                             "咸"
                         ],
        "acquisition":  "【DLC2】古明地觉Lv1-\u003eLv2",
        "dlc":  "DLC2"
    },
    {
        "id":  "recipe-102",
        "name":  "提神布丁",
        "cookware":  "蒸锅",
        "price":  42,
        "level":  2,
        "ingredients":  [
                            "葡萄",
                            "葡萄",
                            "柠檬"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "甜",
                             "凉爽",
                             "力量涌现",
                             "小巧",
                             "果味",
                             "酸"
                         ],
        "negativeTags":  [
                             "重油",
                             "咸"
                         ],
        "acquisition":  "【DLC2】古明地觉Lv2-\u003eLv3",
        "dlc":  "DLC2"
    },
    {
        "id":  "recipe-103",
        "name":  "燃尽布丁",
        "cookware":  "蒸锅",
        "price":  73,
        "level":  4,
        "ingredients":  [
                            "蜂蜜",
                            "葡萄",
                            "柠檬",
                            "柠檬"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "甜",
                             "招牌",
                             "凉爽",
                             "力量涌现",
                             "小巧",
                             "梦幻",
                             "果味",
                             "酸"
                         ],
        "negativeTags":  [
                             "重油",
                             "咸"
                         ],
        "acquisition":  "【DLC2】古明地觉Lv3-\u003eLv4",
        "dlc":  "DLC2"
    },
    {
        "id":  "recipe-104",
        "name":  "猫饭",
        "cookware":  "料理台",
        "price":  26,
        "level":  1,
        "ingredients":  [
                            "鳟鱼",
                            "露水",
                            "面粉"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "水产",
                             "鲜",
                             "小巧"
                         ],
        "negativeTags":  [
                             "重油"
                         ],
        "acquisition":  "【DLC2】火焰猫燐Lv1-\u003eLv2",
        "dlc":  "DLC2"
    },
    {
        "id":  "recipe-105",
        "name":  "三文鱼天妇罗",
        "cookware":  "油锅",
        "price":  44,
        "level":  2,
        "ingredients":  [
                            "鸡蛋",
                            "三文鱼",
                            "黄油",
                            "面粉"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "水产",
                             "高级",
                             "重油",
                             "鲜",
                             "小巧"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC2】火焰猫燐Lv2-\u003eLv3",
        "dlc":  "DLC2"
    },
    {
        "id":  "recipe-106",
        "name":  "鱼跃龙门",
        "cookware":  "蒸锅",
        "price":  142,
        "level":  4,
        "ingredients":  [
                            "鹿肉",
                            "松露",
                            "极上金枪鱼",
                            "蜂蜜",
                            "月光草"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "大份",
                             "肉",
                             "水产",
                             "高级",
                             "海味",
                             "中华",
                             "鲜",
                             "甜",
                             "文化底蕴",
                             "菌类",
                             "梦幻"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC2】火焰猫燐Lv3-\u003eLv4",
        "dlc":  "DLC2"
    },
    {
        "id":  "recipe-107",
        "name":  "芝士蛋",
        "cookware":  "油锅",
        "price":  26,
        "level":  1,
        "ingredients":  [
                            "鸡蛋",
                            "芝士"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "重油",
                             "咸",
                             "鲜",
                             "生"
                         ],
        "negativeTags":  [
                             "肉"
                         ],
        "acquisition":  "【DLC2】灵乌路空Lv1-\u003eLv2",
        "dlc":  "DLC2"
    },
    {
        "id":  "recipe-108",
        "name":  "一击☆必杀",
        "cookware":  "烤架",
        "price":  62,
        "level":  3,
        "ingredients":  [
                            "鹿肉",
                            "野猪肉",
                            "洋葱"
                        ],
        "time":  9,
        "time60":  5.4,
        "positiveTags":  [
                             "肉",
                             "重油",
                             "饱腹",
                             "山珍",
                             "力量涌现",
                             "烧烤"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC2】灵乌路空Lv2-\u003eLv3",
        "dlc":  "DLC2"
    },
    {
        "id":  "recipe-109",
        "name":  "地狱激辛警告！",
        "cookware":  "油锅",
        "price":  108,
        "level":  4,
        "ingredients":  [
                            "牛肉",
                            "辣椒",
                            "辣椒",
                            "辣椒",
                            "芝士"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "肉",
                             "重油",
                             "咸",
                             "适合拍照",
                             "灼热",
                             "力量涌现",
                             "猎奇",
                             "辣"
                         ],
        "negativeTags":  [
                             "素",
                             "清淡"
                         ],
        "acquisition":  "【DLC2】灵乌路空Lv3-\u003eLv4",
        "dlc":  "DLC2"
    },
    {
        "id":  "recipe-110",
        "name":  "烤地瓜",
        "cookware":  "烤架",
        "price":  25,
        "level":  1,
        "ingredients":  [
                            "地瓜"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "实惠",
                             "家常",
                             "饱腹",
                             "甜"
                         ],
        "negativeTags":  [
                             "下酒"
                         ],
        "acquisition":  "【DLC3】多多良小伞Lv1-\u003eLv2",
        "dlc":  "DLC3"
    },
    {
        "id":  "recipe-111",
        "name":  "瘦马团子",
        "cookware":  "料理台",
        "price":  45,
        "level":  2,
        "ingredients":  [
                            "糯米",
                            "糯米"
                        ],
        "time":  9,
        "time60":  5.4,
        "positiveTags":  [
                             "饱腹",
                             "适合拍照",
                             "猎奇",
                             "文化底蕴"
                         ],
        "negativeTags":  [
                             "肉"
                         ],
        "acquisition":  "【DLC3】多多良小伞Lv2-\u003eLv3",
        "dlc":  "DLC3"
    },
    {
        "id":  "recipe-112",
        "name":  "惊吓！大冒险",
        "cookware":  "蒸锅",
        "price":  90,
        "level":  4,
        "ingredients":  [
                            "蘑菇",
                            "蜂蜜",
                            "幻昙华",
                            "奶油"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "适合拍照",
                             "力量涌现",
                             "猎奇",
                             "不可思议",
                             "梦幻",
                             "特产"
                         ],
        "negativeTags":  [
                             "家常"
                         ],
        "acquisition":  "【DLC3】多多良小伞Lv3-\u003eLv4",
        "dlc":  "DLC3"
    },
    {
        "id":  "recipe-113",
        "name":  "比斯开湾饼干",
        "cookware":  "烤架",
        "price":  26,
        "level":  1,
        "ingredients":  [
                            "面粉",
                            "芝士"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "饱腹",
                             "咸",
                             "灼热"
                         ],
        "negativeTags":  [
                             "酸"
                         ],
        "acquisition":  "【DLC3】村纱水蜜Lv1-\u003eLv2",
        "dlc":  "DLC3"
    },
    {
        "id":  "recipe-114",
        "name":  "海盗熏肉",
        "cookware":  "烤架",
        "price":  58,
        "level":  2,
        "ingredients":  [
                            "牛肉",
                            "蜂蜜",
                            "辣椒",
                            "黑盐"
                        ],
        "time":  9,
        "time60":  5.4,
        "positiveTags":  [
                             "大份",
                             "肉",
                             "传说",
                             "力量涌现",
                             "特产"
                         ],
        "negativeTags":  [
                             "酸"
                         ],
        "acquisition":  "【DLC3】村纱水蜜Lv2-\u003eLv3",
        "dlc":  "DLC3"
    },
    {
        "id":  "recipe-115",
        "name":  "罗汉上素",
        "cookware":  "煮锅",
        "price":  97,
        "level":  4,
        "ingredients":  [
                            "松露",
                            "幻昙华",
                            "竹笋",
                            "莲子",
                            "松子"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "素",
                             "高级",
                             "清淡",
                             "鲜",
                             "凉爽",
                             "文化底蕴",
                             "梦幻",
                             "特产"
                         ],
        "negativeTags":  [
                             "肉",
                             "辣"
                         ],
        "acquisition":  "【DLC3】村纱水蜜Lv3-\u003eLv4",
        "dlc":  "DLC3"
    },
    {
        "id":  "recipe-116",
        "name":  "云山棉花糖",
        "cookware":  "油锅",
        "price":  20,
        "level":  1,
        "ingredients":  [
                            "桃子",
                            "蜂蜜"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "甜",
                             "不可思议",
                             "特产",
                             "果味"
                         ],
        "negativeTags":  [
                             "肉",
                             "咸"
                         ],
        "acquisition":  "【DLC3】封兽鵺Lv1-\u003eLv2",
        "dlc":  "DLC3"
    },
    {
        "id":  "recipe-117",
        "name":  "圣白莲子糕",
        "cookware":  "蒸锅",
        "price":  56,
        "level":  2,
        "ingredients":  [
                            "白果",
                            "黄油",
                            "面粉",
                            "莲子"
                        ],
        "time":  10,
        "time60":  6,
        "positiveTags":  [
                             "素",
                             "清淡",
                             "适合拍照",
                             "小巧",
                             "特产"
                         ],
        "negativeTags":  [
                             "辣"
                         ],
        "acquisition":  "【DLC3】封兽鵺Lv2-\u003eLv3",
        "dlc":  "DLC3"
    },
    {
        "id":  "recipe-118",
        "name":  "幻想星莲船",
        "cookware":  "料理台",
        "price":  132,
        "level":  4,
        "ingredients":  [
                            "南瓜",
                            "金枪鱼",
                            "月光草",
                            "并蒂莲",
                            "莲子"
                        ],
        "time":  13,
        "time60":  7.8,
        "positiveTags":  [
                             "高级",
                             "鲜",
                             "生",
                             "招牌",
                             "适合拍照",
                             "凉爽",
                             "不可思议",
                             "梦幻",
                             "特产"
                         ],
        "negativeTags":  [
                             "猎奇"
                         ],
        "acquisition":  "【DLC3】封兽鵺Lv3-\u003eLv4",
        "dlc":  "DLC3"
    },
    {
        "id":  "recipe-119",
        "name":  "松子糕",
        "cookware":  "蒸锅",
        "price":  46,
        "level":  2,
        "ingredients":  [
                            "糯米",
                            "松子"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "清淡",
                             "特产"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC3】物部布都Lv1-\u003eLv2",
        "dlc":  "DLC3"
    },
    {
        "id":  "recipe-120",
        "name":  "白鹿贞松",
        "cookware":  "蒸锅",
        "price":  72,
        "level":  3,
        "ingredients":  [
                            "鹿肉",
                            "白果",
                            "松子"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "肉",
                             "高级",
                             "山珍",
                             "文化底蕴",
                             "特产"
                         ],
        "negativeTags":  [
                             "酸"
                         ],
        "acquisition":  "【DLC3】物部布都Lv2-\u003eLv3",
        "dlc":  "DLC3"
    },
    {
        "id":  "recipe-121",
        "name":  "太极八卦鱼肚",
        "cookware":  "煮锅",
        "price":  136,
        "level":  4,
        "ingredients":  [
                            "鸡蛋",
                            "萝卜",
                            "蘑菇",
                            "极上金枪鱼",
                            "白果"
                        ],
        "time":  14,
        "time60":  8.4,
        "positiveTags":  [
                             "水产",
                             "高级",
                             "清淡",
                             "鲜",
                             "凉爽",
                             "文化底蕴"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC3】物部布都Lv3-\u003eLv4",
        "dlc":  "DLC3"
    },
    {
        "id":  "recipe-122",
        "name":  "蜜饯栗子",
        "cookware":  "料理台",
        "price":  30,
        "level":  1,
        "ingredients":  [
                            "蜂蜜",
                            "板栗"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "甜",
                             "小巧",
                             "特产"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC3】霍青娥Lv1-\u003eLv2",
        "dlc":  "DLC3"
    },
    {
        "id":  "recipe-123",
        "name":  "天师板栗焖菇",
        "cookware":  "煮锅",
        "price":  55,
        "level":  2,
        "ingredients":  [
                            "蘑菇",
                            "松露",
                            "板栗"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "素",
                             "家常",
                             "中华",
                             "菌类",
                             "特产"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC3】霍青娥Lv2-\u003eLv3",
        "dlc":  "DLC3"
    },
    {
        "id":  "recipe-124",
        "name":  "荷花鱼米盏",
        "cookware":  "蒸锅",
        "price":  94,
        "level":  4,
        "ingredients":  [
                            "极上金枪鱼",
                            "露水",
                            "并蒂莲",
                            "莲子"
                        ],
        "time":  11,
        "time60":  6.6,
        "positiveTags":  [
                             "水产",
                             "传说",
                             "清淡",
                             "中华",
                             "文化底蕴",
                             "不可思议",
                             "梦幻"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC3】霍青娥Lv3-\u003eLv4",
        "dlc":  "DLC3"
    },
    {
        "id":  "recipe-125",
        "name":  "拔丝地瓜",
        "cookware":  "油锅",
        "price":  30,
        "level":  1,
        "ingredients":  [
                            "蜂蜜",
                            "地瓜"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "素",
                             "家常",
                             "饱腹",
                             "甜"
                         ],
        "negativeTags":  [
                             "生"
                         ],
        "acquisition":  "【DLC3】苏我屠自古Lv1-\u003eLv2",
        "dlc":  "DLC3"
    },
    {
        "id":  "recipe-126",
        "name":  "香煎双菇肉卷",
        "cookware":  "油锅",
        "price":  63,
        "level":  3,
        "ingredients":  [
                            "猪肉",
                            "蘑菇",
                            "松露"
                        ],
        "time":  9,
        "time60":  5.4,
        "positiveTags":  [
                             "肉",
                             "家常",
                             "重油",
                             "下酒",
                             "招牌",
                             "灼热",
                             "菌类"
                         ],
        "negativeTags":  [
                             "凉爽"
                         ],
        "acquisition":  "【DLC3】苏我屠自古Lv2-\u003eLv3",
        "dlc":  "DLC3"
    },
    {
        "id":  "recipe-127",
        "name":  "什锦天妇罗",
        "cookware":  "油锅",
        "price":  72,
        "level":  3,
        "ingredients":  [
                            "八目鳗",
                            "黑毛猪肉",
                            "松露",
                            "月光草"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "肉",
                             "家常",
                             "重油",
                             "下酒",
                             "和风",
                             "招牌",
                             "力量涌现",
                             "菌类"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC3】苏我屠自古Lv3-\u003eLv4",
        "dlc":  "DLC3"
    },
    {
        "id":  "recipe-128",
        "name":  "香椿煎饼",
        "cookware":  "油锅",
        "price":  30,
        "level":  1,
        "ingredients":  [
                            "鸡蛋",
                            "香椿"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "招牌",
                             "特产"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC4】米斯蒂娅Lv1-\u003eLv2",
        "dlc":  "DLC4"
    },
    {
        "id":  "recipe-129",
        "name":  "花鸟风月",
        "cookware":  "蒸锅",
        "price":  78,
        "level":  3,
        "ingredients":  [
                            "月光草",
                            "奶油",
                            "鲜花"
                        ],
        "time":  9,
        "time60":  5.4,
        "positiveTags":  [
                             "高级",
                             "不可思议",
                             "梦幻",
                             "特产"
                         ],
        "negativeTags":  [
                             "重油",
                             "灼热"
                         ],
        "acquisition":  "【DLC4】米斯蒂娅Lv2-\u003eLv3",
        "dlc":  "DLC4"
    },
    {
        "id":  "recipe-130",
        "name":  "幽梦",
        "cookware":  "蒸锅",
        "price":  133,
        "level":  4,
        "ingredients":  [
                            "幻昙华",
                            "露水",
                            "月光草",
                            "奶油",
                            "鲜花"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "高级",
                             "清淡",
                             "西式",
                             "甜",
                             "适合拍照",
                             "凉爽",
                             "梦幻"
                         ],
        "negativeTags":  [
                             "肉",
                             "水产",
                             "下酒"
                         ],
        "acquisition":  "【DLC4】米斯蒂娅Lv3-\u003eLv4",
        "dlc":  "DLC4"
    },
    {
        "id":  "recipe-131",
        "name":  "梅子茶泡饭",
        "cookware":  "煮锅",
        "price":  32,
        "level":  1,
        "ingredients":  [
                            "海苔",
                            "梅子"
                        ],
        "time":  4,
        "time60":  2.4,
        "positiveTags":  [
                             "家常",
                             "和风"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC4】射命丸文Lv1-\u003eLv2",
        "dlc":  "DLC4"
    },
    {
        "id":  "recipe-132",
        "name":  "海胆蒸蛋",
        "cookware":  "蒸锅",
        "price":  112,
        "level":  3,
        "ingredients":  [
                            "鸡蛋",
                            "海胆"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "海味",
                             "鲜",
                             "适合拍照"
                         ],
        "negativeTags":  [
                             "山珍"
                         ],
        "acquisition":  "【DLC4】射命丸文Lv2-\u003eLv3",
        "dlc":  "DLC4"
    },
    {
        "id":  "recipe-133",
        "name":  "幻想风靡",
        "cookware":  "烤架",
        "price":  185,
        "level":  5,
        "ingredients":  [
                            "牛肉",
                            "野猪肉",
                            "洋葱",
                            "松露",
                            "西红柿"
                        ],
        "time":  18,
        "time60":  10.8,
        "positiveTags":  [
                             "肉",
                             "重油",
                             "饱腹",
                             "生",
                             "招牌",
                             "适合拍照",
                             "力量涌现"
                         ],
        "negativeTags":  [
                             "清淡",
                             "凉爽"
                         ],
        "acquisition":  "【DLC4】射命丸文Lv3-\u003eLv4",
        "dlc":  "DLC4"
    },
    {
        "id":  "recipe-134",
        "name":  "毒瘴花园",
        "cookware":  "煮锅",
        "price":  58,
        "level":  3,
        "ingredients":  [
                            "八目鳗",
                            "河豚",
                            "白果",
                            "梅子"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "水产",
                             "招牌",
                             "猎奇",
                             "毒"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC4】梅蒂欣Lv2-\u003eLv3",
        "dlc":  "DLC4"
    },
    {
        "id":  "recipe-135",
        "name":  "小小的甜蜜「毒药」",
        "cookware":  "蒸锅",
        "price":  87,
        "level":  3,
        "ingredients":  [
                            "白果",
                            "幻昙华",
                            "葡萄",
                            "奶油"
                        ],
        "time":  10,
        "time60":  6,
        "positiveTags":  [
                             "高级",
                             "甜",
                             "适合拍照",
                             "小巧",
                             "梦幻"
                         ],
        "negativeTags":  [
                             "肉"
                         ],
        "acquisition":  "【DLC4】梅蒂欣Lv3-\u003eLv4",
        "dlc":  "DLC4"
    },
    {
        "id":  "recipe-136",
        "name":  "绿野仙菇",
        "cookware":  "煮锅",
        "price":  24,
        "level":  1,
        "ingredients":  [
                            "蘑菇",
                            "香椿"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "清淡",
                             "文化底蕴",
                             "菌类",
                             "特产"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC4】风见幽香Lv1-\u003eLv2",
        "dlc":  "DLC4"
    },
    {
        "id":  "recipe-137",
        "name":  "炸番茄条",
        "cookware":  "油锅",
        "price":  26,
        "level":  1,
        "ingredients":  [
                            "土豆",
                            "西红柿"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "猎奇",
                             "不可思议",
                             "小巧"
                         ],
        "negativeTags":  [
                             "水产"
                         ],
        "acquisition":  "【DLC4】鬼人正邪Lv1-\u003eLv2",
        "dlc":  "DLC4"
    },
    {
        "id":  "recipe-138",
        "name":  "蜜桃红烧肉",
        "cookware":  "油锅",
        "price":  42,
        "level":  2,
        "ingredients":  [
                            "猪肉",
                            "桃子",
                            "蜂蜜"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "肉",
                             "下酒",
                             "不可思议",
                             "果味"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC4】鬼人正邪Lv2-\u003eLv3",
        "dlc":  "DLC4"
    },
    {
        "id":  "recipe-139",
        "name":  "逆转天地！",
        "cookware":  "料理台",
        "price":  124,
        "level":  4,
        "ingredients":  [
                            "黑毛猪肉",
                            "松露",
                            "竹子",
                            "梅子",
                            "鲜花"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "山珍",
                             "凉爽",
                             "猎奇",
                             "菌类",
                             "不可思议",
                             "梦幻",
                             "燃起来了"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC4】鬼人正邪Lv3-\u003eLv4",
        "dlc":  "DLC4"
    },
    {
        "id":  "recipe-140",
        "name":  "红豆大福",
        "cookware":  "料理台",
        "price":  28,
        "level":  2,
        "ingredients":  [
                            "糯米",
                            "红豆"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "和风",
                             "甜",
                             "小巧"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC4】少名针妙丸Lv1-\u003eLv2",
        "dlc":  "DLC4"
    },
    {
        "id":  "recipe-141",
        "name":  "铜锣烧",
        "cookware":  "油锅",
        "price":  40,
        "level":  2,
        "ingredients":  [
                            "鸡蛋",
                            "面粉",
                            "红豆"
                        ],
        "time":  6,
        "time60":  3.6,
        "positiveTags":  [
                             "素",
                             "和风",
                             "甜",
                             "特产"
                         ],
        "negativeTags":  [
                             "肉"
                         ],
        "acquisition":  "【DLC4】少名针妙丸Lv2-\u003eLv3",
        "dlc":  "DLC4"
    },
    {
        "id":  "recipe-142",
        "name":  "汉宫藏娇",
        "cookware":  "煮锅",
        "price":  115,
        "level":  4,
        "ingredients":  [
                            "豆腐",
                            "八目鳗",
                            "露水",
                            "竹子",
                            "螃蟹"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "水产",
                             "高级",
                             "传说",
                             "中华",
                             "猎奇",
                             "文化底蕴",
                             "汤羹"
                         ],
        "negativeTags":  [
                             "重油"
                         ],
        "acquisition":  "【DLC4】少名针妙丸Lv3-\u003eLv4",
        "dlc":  "DLC4"
    },
    {
        "id":  "recipe-143",
        "name":  "石锅竹笋炖肉",
        "cookware":  "煮锅",
        "price":  42,
        "level":  3,
        "ingredients":  [
                            "牛肉",
                            "竹笋",
                            "竹子"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "肉",
                             "家常",
                             "饱腹"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC4】今泉影狼Lv1-\u003eLv2",
        "dlc":  "DLC4"
    },
    {
        "id":  "recipe-144",
        "name":  "竹筒粉蒸肉",
        "cookware":  "蒸锅",
        "price":  72,
        "level":  3,
        "ingredients":  [
                            "黑毛猪肉",
                            "露水",
                            "竹子"
                        ],
        "time":  9,
        "time60":  5.4,
        "positiveTags":  [
                             "肉",
                             "家常",
                             "山珍"
                         ],
        "negativeTags":  [
                             "生"
                         ],
        "acquisition":  "【DLC4】今泉影狼Lv2-\u003eLv3",
        "dlc":  "DLC4"
    },
    {
        "id":  "recipe-145",
        "name":  "翠竹迎春",
        "cookware":  "蒸锅",
        "price":  99,
        "level":  4,
        "ingredients":  [
                            "鸡蛋",
                            "鹿肉",
                            "萝卜",
                            "月光草",
                            "黄瓜"
                        ],
        "time":  14,
        "time60":  8.4,
        "positiveTags":  [
                             "高级",
                             "山珍",
                             "招牌",
                             "适合拍照",
                             "文化底蕴"
                         ],
        "negativeTags":  [
                             "猎奇",
                             "菌类"
                         ],
        "acquisition":  "【DLC4】今泉影狼Lv3-\u003eLv4",
        "dlc":  "DLC4"
    },
    {
        "id":  "recipe-146",
        "name":  "养心粥",
        "cookware":  "煮锅",
        "price":  35,
        "level":  1,
        "ingredients":  [
                            "莲子",
                            "银耳"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "清淡",
                             "甜",
                             "特产"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC5】铃仙Lv1-\u003eLv2",
        "dlc":  "DLC5"
    },
    {
        "id":  "recipe-147",
        "name":  "胡辣汤",
        "cookware":  "油锅",
        "price":  60,
        "level":  2,
        "ingredients":  [
                            "牛肉",
                            "豆腐",
                            "辣椒"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "家常",
                             "中华",
                             "灼热",
                             "汤羹",
                             "辣",
                             "燃起来了"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC5】铃仙Lv2-\u003eLv3",
        "dlc":  "DLC5"
    },
    {
        "id":  "recipe-148",
        "name":  "至尊海鲜面",
        "cookware":  "煮锅",
        "price":  135,
        "level":  4,
        "ingredients":  [
                            "海苔",
                            "极上金枪鱼",
                            "虾",
                            "章鱼",
                            "螃蟹"
                        ],
        "time":  10,
        "time60":  6,
        "positiveTags":  [
                             "水产",
                             "家常",
                             "高级",
                             "饱腹",
                             "海味",
                             "鲜"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC5】铃仙Lv3-\u003eLv4",
        "dlc":  "DLC5"
    },
    {
        "id":  "recipe-149",
        "name":  "桃花琉璃卷",
        "cookware":  "蒸锅",
        "price":  60,
        "level":  3,
        "ingredients":  [
                            "桃子",
                            "红豆",
                            "薜荔"
                        ],
        "time":  8,
        "time60":  4.8,
        "positiveTags":  [
                             "高级",
                             "和风",
                             "甜",
                             "适合拍照",
                             "小巧",
                             "梦幻",
                             "特产"
                         ],
        "negativeTags":  [
                             "肉",
                             "饱腹",
                             "猎奇",
                             "菌类"
                         ],
        "acquisition":  "【DLC5】绵月丰姬Lv1-\u003eLv2",
        "dlc":  "DLC5"
    },
    {
        "id":  "recipe-150",
        "name":  "荷塘月色",
        "cookware":  "料理台",
        "price":  128,
        "level":  4,
        "ingredients":  [
                            "葡萄",
                            "奶油",
                            "薜荔",
                            "银耳"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "高级",
                             "清淡",
                             "中华",
                             "甜",
                             "适合拍照",
                             "凉爽",
                             "文化底蕴"
                         ],
        "negativeTags":  [
                             "肉",
                             "下酒",
                             "灼热",
                             "猎奇"
                         ],
        "acquisition":  "【DLC5】绵月丰姬Lv2-\u003eLv3",
        "dlc":  "DLC5"
    },
    {
        "id":  "recipe-151",
        "name":  "龙吟桃子",
        "cookware":  "料理台",
        "price":  199,
        "level":  5,
        "ingredients":  [
                            "桃子",
                            "桃子",
                            "桃子",
                            "桃子",
                            "可可豆"
                        ],
        "time":  18,
        "time60":  10.8,
        "positiveTags":  [
                             "高级",
                             "传说",
                             "清淡",
                             "甜",
                             "凉爽",
                             "不可思议",
                             "特产",
                             "果味"
                         ],
        "negativeTags":  [
                             "肉",
                             "海味",
                             "生",
                             "猎奇",
                             "菌类"
                         ],
        "acquisition":  "【DLC5】绵月丰姬Lv3-\u003eLv4",
        "dlc":  "DLC5"
    },
    {
        "id":  "recipe-152",
        "name":  "分子蛋",
        "cookware":  "料理台",
        "price":  80,
        "level":  3,
        "ingredients":  [
                            "南瓜",
                            "奶油",
                            "可可豆"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "素",
                             "高级",
                             "清淡",
                             "甜",
                             "不可思议",
                             "小巧"
                         ],
        "negativeTags":  [
                             "山珍"
                         ],
        "acquisition":  "【DLC5】绵月依姬Lv1-\u003eLv2",
        "dlc":  "DLC5"
    },
    {
        "id":  "recipe-153",
        "name":  "生命之源",
        "cookware":  "蒸锅",
        "price":  124,
        "level":  4,
        "ingredients":  [
                            "南瓜",
                            "露水",
                            "可可豆",
                            "银耳"
                        ],
        "time":  13,
        "time60":  7.8,
        "positiveTags":  [
                             "高级",
                             "传说",
                             "清淡",
                             "生",
                             "菌类",
                             "不可思议",
                             "汤羹"
                         ],
        "negativeTags":  [
                             "山珍"
                         ],
        "acquisition":  "【DLC5】绵月依姬Lv2-\u003eLv3",
        "dlc":  "DLC5"
    },
    {
        "id":  "recipe-154",
        "name":  "火星",
        "cookware":  "蒸锅",
        "price":  198,
        "level":  5,
        "ingredients":  [
                            "露水",
                            "葡萄",
                            "螃蟹",
                            "薜荔"
                        ],
        "time":  24,
        "time60":  14.4,
        "positiveTags":  [
                             "水产",
                             "高级",
                             "传说",
                             "海味",
                             "适合拍照",
                             "文化底蕴",
                             "不可思议",
                             "果味"
                         ],
        "negativeTags":  [
                             "山珍"
                         ],
        "acquisition":  "【DLC5】绵月依姬Lv3-\u003eLv4",
        "dlc":  "DLC5"
    },
    {
        "id":  "recipe-155",
        "name":  "猫咪可露丽",
        "cookware":  "烤架",
        "price":  45,
        "level":  2,
        "ingredients":  [
                            "鸡蛋",
                            "面粉",
                            "可可豆"
                        ],
        "time":  7,
        "time60":  4.2,
        "positiveTags":  [
                             "饱腹",
                             "甜",
                             "适合拍照"
                         ],
        "negativeTags":  [
                             "猎奇"
                         ],
        "acquisition":  "【DLC5】爱莲Lv1-\u003eLv2",
        "dlc":  "DLC5"
    },
    {
        "id":  "recipe-156",
        "name":  "猫咪披萨",
        "cookware":  "烤架",
        "price":  75,
        "level":  3,
        "ingredients":  [
                            "野猪肉",
                            "洋葱",
                            "蘑菇",
                            "西蓝花"
                        ],
        "time":  10,
        "time60":  6,
        "positiveTags":  [
                             "饱腹",
                             "西式",
                             "适合拍照",
                             "菌类"
                         ],
        "negativeTags":  [
                             "凉爽"
                         ],
        "acquisition":  "【DLC5】爱莲Lv2-\u003eLv3",
        "dlc":  "DLC5"
    },
    {
        "id":  "recipe-157",
        "name":  "猫咪戏水",
        "cookware":  "料理台",
        "price":  120,
        "level":  4,
        "ingredients":  [
                            "桃子",
                            "面粉",
                            "奶油",
                            "可可豆",
                            "薜荔"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "素",
                             "甜",
                             "适合拍照",
                             "凉爽",
                             "不可思议",
                             "梦幻"
                         ],
        "negativeTags":  [
                             "下酒",
                             "灼热"
                         ],
        "acquisition":  "【DLC5】爱莲Lv3-\u003eLv4",
        "dlc":  "DLC5"
    },
    {
        "id":  "recipe-158",
        "name":  "鳗鱼嫩蛋丼",
        "cookware":  "油锅",
        "price":  45,
        "level":  2,
        "ingredients":  [
                            "鸡蛋",
                            "八目鳗"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "水产",
                             "生",
                             "招牌"
                         ],
        "negativeTags":  [

                         ],
        "acquisition":  "【DLC5】魅魔Lv1-\u003eLv2",
        "dlc":  "DLC5"
    },
    {
        "id":  "recipe-159",
        "name":  "竹筒烧醉虾",
        "cookware":  "料理台",
        "price":  60,
        "level":  3,
        "ingredients":  [
                            "虾",
                            "竹子",
                            "西蓝花"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "水产",
                             "鲜",
                             "生",
                             "猎奇"
                         ],
        "negativeTags":  [
                             "饱腹"
                         ],
        "acquisition":  "【DLC5】魅魔Lv2-\u003eLv3",
        "dlc":  "DLC5"
    },
    {
        "id":  "recipe-160",
        "name":  "牛肉鸳鸯火锅",
        "cookware":  "煮锅",
        "price":  188,
        "level":  4,
        "ingredients":  [
                            "牛肉",
                            "萝卜",
                            "和牛",
                            "松露",
                            "辣椒"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "肉",
                             "家常",
                             "山珍",
                             "中华",
                             "灼热",
                             "力量涌现",
                             "菌类",
                             "辣"
                         ],
        "negativeTags":  [
                             "凉爽",
                             "梦幻"
                         ],
        "acquisition":  "【DLC5】魅魔Lv3-\u003eLv4",
        "dlc":  "DLC5"
    },
    {
        "id":  "recipe-161",
        "name":  "长发公主",
        "cookware":  "蒸锅",
        "price":  36,
        "level":  2,
        "ingredients":  [
                            "南瓜",
                            "虾"
                        ],
        "time":  5,
        "time60":  3,
        "positiveTags":  [
                             "水产",
                             "饱腹",
                             "适合拍照"
                         ],
        "negativeTags":  [
                             "猎奇"
                         ],
        "acquisition":  "【DLC5】露易兹Lv1-\u003eLv2",
        "dlc":  "DLC5"
    },
    {
        "id":  "recipe-162",
        "name":  "海胆信玄饼",
        "cookware":  "煮锅",
        "price":  128,
        "level":  4,
        "ingredients":  [
                            "金枪鱼",
                            "露水",
                            "海胆",
                            "银耳"
                        ],
        "time":  12,
        "time60":  7.2,
        "positiveTags":  [
                             "水产",
                             "高级",
                             "凉爽",
                             "小巧",
                             "梦幻"
                         ],
        "negativeTags":  [
                             "饱腹"
                         ],
        "acquisition":  "【DLC5】露易兹Lv2-\u003eLv3",
        "dlc":  "DLC5"
    },
    {
        "id":  "recipe-163",
        "name":  "疯帽子茶会",
        "cookware":  "蒸锅",
        "price":  188,
        "level":  5,
        "ingredients":  [
                            "蘑菇",
                            "面粉",
                            "奶油",
                            "可可豆",
                            "西蓝花"
                        ],
        "time":  15,
        "time60":  9,
        "positiveTags":  [
                             "西式",
                             "甜",
                             "适合拍照",
                             "菌类",
                             "不可思议",
                             "梦幻",
                             "特产"
                         ],
        "negativeTags":  [
                             "重油"
                         ],
        "acquisition":  "【DLC5】露易兹Lv3-\u003eLv4",
        "dlc":  "DLC5"
    }
];
