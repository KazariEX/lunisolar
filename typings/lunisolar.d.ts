declare function lunisolar(date?: lunisolar.DateConfigType): lunisolar.Lunisolar

declare namespace lunisolar {
  export type DateConfigType = string | number | Date | null | undefined
  export type ConfigType = { [P in keyof GlobalConfig]?: GlobalConfig[P] }

  /**
   * 陰歷對象
   */
  export class Lunar {
    constructor(date: Date)
    /**
     * Return string like '二〇二一年冬月廿九子時'
     */
    toString(): string
    /**
     * Return the Date.valueOf()
     */
    valueOf(): number
    /**
     * 取得該年陰歷的所在公歷年
     */
    get year(): number
    /**
     * 取得陰歷月
     */
    get month(): number
    /**
     * 取得陰歷日
     */
    get day(): number

    /**
     * 取得陰歷時辰下標 0 ~ 11
     */
    get hour(): number
    /**
     * 取得該年陰歷的所在公歷年(中文)
     */
    getYearName(): string
    /**
     * 取得陰歷月(中文)
     */
    getMonthName(): string
    /**
     * 取得陰歷日(中文)
     */
    getDayName(): string
    /**
     * 取得陰歷時辰(中文)
     */
    getHourName(): string
    /**
     * 是否為閏月
     */
    isLeapMonth(): boolean
    /**
     * 是否為大月
     */
    isBigMonth(): boolean

    /**
      取得當年陰歷年的日期
     */
    lunarNewYearDate(year?: number): Date
  }

  /**
    class 五行
  */
  export class Element5 extends EleBase<Element5> {
    constructor(value: number | string | Element5)
    toString(): string
    valueOf(): number
    /**
    the Element5.value is the index of ['木', '火', '土', '金', '水']
    */
    get value(): number
  }

  /**
   * class 天干
   * @param value 天干索引 | 天干名稱 | 天干實例
   */
  export class Stem {
    constructor(value: number | string | Stem)
    toString(): string
    valueOf(): number
    /**
     * 天干的索引 0 ~ 9
     * ```
     *    0     1    2     3     4     5     6     7     8     9
     *  ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
     * ```
     */
    get value(): number

    /**
     * 可与天干组合的地支
     */
    branchs: Branch[]
    /**
     * 天干的五行属性
     */
    e5: Element5
  }

  /**
   * class 地支
   * @param value 地支索引 | 地支名稱 | 地支實例
   */
  export class Branch {
    constructor(value: number | string | Branch)
    toString(): string
    valueOf(): number
    /**
     * 地支索引 0 ~ 11
     * ```
     *    0     1    2     3     4     5     6     7     8     9    10    11
     *  ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
     * ```
     */
    get value(): number
    /**
     * 地支藏干
     * ```
     * 返回地支數組，數組長度1~3個，
     * [本氣，中氣，余氣]
     * ```
     */
    hiddenStems: Stem[]
    e5: Element5
  }

  /**
   * class 天干地支组合(八字單柱)
   *
   * SB為 StemBranch 的簡寫
   */
  export class SB {
    /**
     * @param value 60位的天干地支組合的索引值
     */
    constructor(value: number)
    /**
     * @param stem 天干索引 | 天干名稱 | 天干實例
     * @param branch 地支索引 | 地支名稱 | 地支實例
     */
    constructor(stem: number | string | Stem, branch: number | string | Branch)
    toString(): string
    valueOf(): number
    /**
     * @returns 60位的天干地支組合的索引值 0 ~ 59
     */
    get value(): number
    /**
     * @returns 天干實例
     */
    get stem(): Stem
    /**
     * @returns 地支實例
     */
    get branch(): Branch
  }

  /**
   * class 節氣
   * @param value 節氣索引 | 節氣名稱 | 節氣實例
   */
  export class Term {
    constructor(value: number | string | Term)
    toString(): string
    valueOf(): number
    /**
     * @returns 節氣索引 0 ~ 23
     */
    get value(): number
    /**
     * @returns 節氣名稱列表
     */
    static getNames: () => string[]
    /**
     * Get the date list of solar terms for a year
     *
     * 取得某年節氣的日期列表
     * @param year 年份
     * @returns {number[]} [d, d, d, d...]
     */
    static getYearTermDayList: (year: number) => number[]
    /**
     * 查出指定節氣的日期
     * @param year 年份
     * @param term 節氣索引 | 節氣名稱 | 節氣實例
     * @returns [year, month, day]
     */
    static findDate(year: number, termValue: number | string | Term): [number, number, number]
    /**
     * 查出指定日期属于哪个節之后（不包含氣），并返回该節及该節日期
     * @param date 日期
     * @param returnValue 返回的節是否只返回该節氣的value,  還是返回節氣實例
     * @returns {[Term | number, number]} [節氣, 節氣日期]
     */
    static findNode(date: Date, returnValue: true): [number, number]
    static findNode(date: Date, returnValue: false): [Term, number]
  }

  /**
   * class 八字
   */
  export class Char8 {
    /**
     * @param dateOrSbList 八字四柱的天干地支組合
     */
    constructor(dateOrSbList: [SB, SB, SB, SB])
    /**
     * @param dateOrSbList 日期
     * @param changeEgeTrem 用于換歲的節氣
     */
    constructor(dateOrSbList: Date, changeEgeTrem?: number)
    get value(): number
    toString(): string
    valueOf(): number
    /**
     * @returns 八字四柱的天干地支組合列表
     */
    get list(): [SB, SB, SB, SB]
    /**
     * @returns 年柱
     */
    get year(): SB
    /**
     * @returns 月柱
     */
    get month(): SB
    /**
     * @returns 日柱
     */
    get day(): SB
    /**
     * @returns 時柱
     */
    get hour(): SB
    /**
     * @returns 日主
     */
    get me(): Stem
    /**
      計算年柱
      @param yearOrDate 年份或日期對象
      @param changeEgeTrem 用于換歲的節氣
     */
    static computeSBYear(yearOrDate: Date | number, changeEgeTrem?: number): SB
    /**
      計算月柱
      @param date 日期對象
     */
    static computeSBMonth(date: Date): SB
    /**
      計算日柱
      @param date 日期對象
     */
    static computeSBDay(date: Date): SB
    /**
      計算時柱
      @param date 日期對象
      @param sbDay 日柱 (時柱天干由日柱推算，可以不填)
     */
    static computeSBHour(date: Date, sbDay?: SB)
  }

  /**
   * class Lunisolar
   */
  export class Lunisolar implements ILunisolar {
    _config: GlobalConfig
    _date: Date
    _term?: Term | null
    _lunar?: Lunar
    _char8?: Char8
    constructor(date?: lunisolar.DateConfigType, config?: ConfigType)
    /**
      返回Date對象的valueOf
     */
    valueOf(): number
    /**
     * 陰歷對象
     */
    get lunar(): Lunar
    /**
     * Date對象
     */
    get date(): Date
    /**
     * 當前時氣對象
     */
    get term(): Term | null
    /**
     * 八字
     */
    get char8(): Char8
    /**
     * 克隆Lunisolar對象
     */
    clone(): Lunisolar
    /**
     計算日期差
     */
    diff(date: DateConfigType | Lunisolar, unit?: Unit, config?: any): number
    // add(value: number, unit?: Unit, config?: any): Lunisolar
  }

  /**
   * The type for Lunisolar Plugin Function
   */
  export type PluginFunc<T = any> = (
    option: T,
    lsClass: typeof lunisolar.Lunisolar,
    lsFactory: typeof lunisolar
  ) => void

  /**
   * lunisolar 加載插件方法
   *
   * This method is used for luisolar to load plugins
   */
  export function extend<T = any>(plugin: PluginFunc<T>, options?: T): typeof lunisolar
}
