/* eslint-disable prettier/prettier */


// 二十八星宿
export const wentyEightStars = [
  // 四       五      六       日       一       二      三
  '角木蛟','亢金龍','女土蝠','房日兔','心月狐','尾火虎','箕水豹',
  '斗木獬','牛金牛','氐土貉','虚日鼠','危月燕','室火猪','壁水獝',
  '奎木狼','娄金狗','胃土彘','昴日雞','毕月烏','觜火猴','參水猿',
  '井木犴','鬼金羊','柳土獐','星日馬','张月鹿','翼火蛇','軫水蚓'
]

/**
  --- 地支藏干表 ---
  寅藏戊土及丙甲，卯中同居甲和乙，辰藏乙木癸水戊，
  巳宫戊土同庚丙。午中丙火并己丁，未宫再居丁乙己，
  申中戊土壬庚逢，酉宫同见庚辛隆。戍藏辛金和丁戊，
  亥宫戊甲壬同户，子宫壬癸在其中，丑中癸辛己土同。
 */
export const HIDDEN_STEMS = [
  [9], [5, 9, 7],  // 子丑
  [0, 2, 4], [1], [4, 1, 9], // 寅卯辰
  [2, 6, 4], [3, 5], [5, 3, 1],  // 巳午未
  [6, 8, 4], [7], [4, 7, 3], // 申酉戌
  [8, 0] // 亥
]

// 五行得分
export const FIVE_ELEMENTS_SCORE = [60, 30, 10]

// 甲子月标识
export const SB0_MONTH = [2018, 12, 7]

// 甲子日标识
export const SB0_DATE = [2022, 3, 12]
