import type { Lunisolar } from '../class/lunisolar'
const festivals: MarkersSetting = [
  {
    format: 'MMDD',
    markers: {
      '0101': {
        tag: ['cn', 'traditional'],
        name: '元旦'
      },
      '0110': {
        tag: ['cn', 'occupation'],
        name: '中国人民警察节'
      },
      '0121': {
        tag: 'international',
        name: '国际拥抱日'
      },
      '0202': {
        tag: ['international', 'environment'],
        name: '世界湿地日'
      },
      '0204': {
        tag: ['international', 'health'],
        name: '世界抗癌日'
      },
      '0210': {
        tag: 'international',
        name: '国际气象节'
      },
      '0214': {
        tag: 'western',
        name: '情人节'
      },
      '0220': {
        tag: 'international',
        name: '世界社会公正日'
      },
      '0301': {
        tag: ['international', 'environment'],
        name: '国际海豹日'
      },
      '0303': [
        {
          tag: ['international', 'environment'],
          name: '世界野生动植物日'
        },
        {
          tag: ['cn', 'health'],
          name: '全国爱耳日'
        },
        {
          tag: ['international', 'health'],
          name: '国际爱耳日'
        }
      ],
      '0305': {
        tag: ['cn', 'commemoration'],
        name: '学雷锋记念日'
      },
      '0306': {
        tag: ['international', 'health'],
        name: '世界青光眼日'
      },
      '0308': {
        tag: 'international',
        name: '妇女节'
      },
      '0312': {
        tag: ['cn', 'environment'],
        name: '植树节'
      },
      '0315': {
        tag: 'international',
        name: '国际消费日'
      },
      '0320': [
        {
          tag: 'international',
          name: '世界无肉日'
        },
        {
          tag: 'international',
          name: '国际幸福日'
        }
      ],
      '0321': [
        {
          tag: ['international', 'environment'],
          name: '世界森林日'
        },
        {
          tag: 'international',
          name: '世界睡眠日'
        },
        {
          tag: 'international',
          name: '世界儿歌日'
        },
        {
          tag: 'international',
          name: '国际消除种族歧视日'
        }
      ],
      '0322': {
        tag: ['international', 'environment'],
        name: '世界水日'
      },
      '0323': {
        tag: 'international',
        name: '世界气象日'
      },
      '0324': {
        tag: ['international', 'health'],
        name: '世界防治结核病日'
      },
      '0327': {
        tag: 'international',
        name: '世界戏剧日'
      },
      '0401': [
        {
          tag: ['international', 'health'],
          name: '国际爱鸟日'
        },
        {
          tag: 'western',
          name: '愚人节'
        }
      ],
      '0407': {
        tag: 'international',
        name: '世界卫生日'
      },
      '0408': {
        tag: ['international', 'environment'],
        name: '国际珍稀动物保护日'
      },
      '0415': {
        tag: 'cn',
        name: '国家安全教育日'
      },
      '0422': {
        tag: ['international', 'environment'],
        name: '世界地球日'
      },
      '0423': {
        tag: 'international',
        name: '世界读书日'
      },
      '0501': {
        tag: 'international',
        name: '国际劳动节'
      },
      '0504': {
        tag: 'cn',
        name: '中国青年节'
      },
      '0508': {
        tag: ['international', 'health'],
        name: '世界红十字日'
      },
      '0511': {
        tag: ['international', 'health'],
        name: '防治肥胖日'
      },
      '0512': [
        {
          tag: ['international', 'occupation'],
          name: '国际护士节'
        },
        {
          tag: 'cn',
          name: '全国防灾减灾日'
        }
      ],
      '0515': {
        tag: ['international', 'health'],
        name: '全国碘缺乏病日'
      },
      '0517': {
        tag: 'international',
        name: '世界电信日'
      },
      '0518': {
        tag: 'international',
        name: '国际博物馆日'
      },
      '0520': [
        {
          tag: 'cn',
          name: '全国母乳喂养宣传日'
        },
        {
          tag: 'cn',
          name: '中国学生营养日'
        }
      ],
      '0525': {
        tag: ['international', 'health'],
        name: '国际爱肤日'
      },
      '0531': {
        tag: ['international', 'health'],
        name: '世界无烟日'
      },
      '0601': {
        tag: 'cn',
        name: '儿童节'
      },
      '0605': {
        tag: ['international', 'environment'],
        name: '世界环境日'
      },
      '0606': {
        tag: ['cn', 'health'],
        name: '全国爱眼日'
      },
      '0609': {
        tag: 'international',
        name: '世界认可日'
      },
      '0623': {
        tag: ['international', 'sport'],
        name: '国际奥林匹克日'
      },
      '0625': {
        tag: 'cn',
        name: '全国土地日'
      },
      '0626': {
        tag: 'international',
        name: '国际反毒品日'
      },
      '0701': [
        {
          tag: ['cn', 'commemoration'],
          name: '香港回归日'
        },
        {
          tag: ['cn', 'commemoration'],
          name: '建党节'
        }
      ],
      '0711': [
        {
          tag: 'international',
          name: '世界人口日'
        },
        {
          tag: 'cn',
          name: '中国航海日'
        }
      ],
      '0801': {
        tag: ['cn', 'commemoration'],
        name: '建军节'
      },
      '0812': {
        tag: 'international',
        name: '国际青年节'
      },
      '0819': {
        tag: ['cn', 'occupation'],
        name: '中国医师节'
      },
      '0903': {
        tag: ['cn', 'commemoration'],
        name: '中国人民抗日战争胜利纪念日'
      },
      '0910': {
        tag: ['cn', 'occupation'],
        name: '教师节'
      },
      '0912': {
        tag: ['cn', 'health'],
        name: '预防出生缺陷日'
      },
      '0920': {
        tag: ['cn', 'health'],
        name: '全国爱牙日'
      },
      '0921': {
        tag: 'international',
        name: '国际和平日'
      },
      '0927': {
        tag: 'international',
        name: '世界旅游日'
      },
      '0930': {
        tag: ['cn', 'commemoration'],
        name: '列士纪念日'
      },
      '1001': [
        {
          tag: 'international',
          name: '国际音乐节'
        },
        {
          tag: 'cn',
          name: '国庆节'
        }
      ],
      '1004': {
        tag: ['international', 'environment'],
        name: '世界动物日'
      },
      '1007': {
        tag: 'international',
        name: '国际住房日'
      },
      '1009': {
        tag: 'international',
        name: '世界邮政日'
      },
      '1010': {
        tag: ['international', 'health'],
        name: '世界精神卫生日'
      },
      '1013': {
        tag: ['international', 'health'],
        name: '世界保健日'
      },
      '1015': {
        tag: 'international',
        name: '国际盲人节'
      },
      '1016': {
        tag: 'international',
        name: '世界粮食日'
      },
      '1017': {
        tag: 'international',
        name: '世界消除贫困日'
      },
      '1024': [
        {
          tag: 'international',
          name: '联合国日'
        },
        {
          tag: ['international', 'occupation'],
          name: '程序员节'
        }
      ],
      '1101': {
        tag: 'western',
        name: '万圣节'
      },
      '1108': {
        tag: ['cn', 'occupation'],
        name: '中国记者日'
      },
      '1109': {
        tag: ['cn'],
        name: '消防宣传日'
      },
      '1114': {
        tag: ['international', 'health'],
        name: '世界糖尿病日'
      },
      '1117': {
        tag: ['international', 'occupation'],
        name: '国际大学生节'
      },
      '1201': {
        tag: ['international', 'health'],
        name: '世界爱滋病日'
      },
      '1203': {
        tag: ['international', 'health'],
        name: '世界残疾人日'
      },
      '1204': [
        {
          tag: ['cn'],
          name: '国家宪法日'
        },
        {
          tag: ['cn'],
          name: '全国法制宣传日'
        }
      ],
      '1209': {
        tag: ['international', 'sport'],
        name: '世界足球日'
      },
      '1213': {
        tag: ['cn', 'commemoration'],
        name: '南京大屠杀死难者国家公镇祭日'
      },
      '1220': {
        tag: ['cn', 'commemoration'],
        name: '澳门回归纪念日'
      },
      '1221': {
        tag: ['international', 'sport'],
        name: '国际篮球日'
      },
      '1224': {
        tag: ['western'],
        name: '平安夜'
      },
      '1225': {
        tag: ['western'],
        name: '圣诞节'
      }
    }
  },
  {
    format: 'M,d,dR',
    markers: {
      '3,4,2': {
        tag: ['international', 'health'],
        name: '世界肾脏日'
      },
      '3,2,3': {
        tag: 'international',
        name: '世界社会工作日'
      },
      '5,2,1': {
        tag: ['international', 'health'],
        name: '世界防治哮喘日'
      },
      '5,0,2': {
        tag: 'western',
        name: '母亲节'
      },
      '5,0,3': {
        tag: ['cn', 'health'],
        name: '全国助残日'
      },
      '6,0,3': {
        tag: 'western',
        name: '父亲节'
      },
      '9,0,4': {
        tag: ['international', 'health'],
        name: '国际聋人节'
      },
      '10,4,2': {
        tag: ['international', 'health'],
        name: '世界视力日'
      },
      '11,4,4': {
        tag: 'western',
        name: '感恩节'
      }
    }
  },
  {
    format: 'M,d,dRr',
    markers: {
      '1,0,1': {
        tag: ['international', 'health'],
        name: '国际麻风节'
      },
      '3,1,1': {
        tag: 'cn',
        name: '中小学安全教育日'
      }
    }
  },
  {
    format: 'lMn,lDn',
    markers: {
      '1,1': {
        tag: ['cn', 'traditional'],
        name: '春节'
      },
      '2,2': {
        tag: ['cn', 'traditional'],
        name: '龙抬头'
      },
      '5,5': {
        tag: ['cn', 'traditional'],
        name: '端午节'
      },
      '7,7': {
        tag: ['cn', 'traditional'],
        name: '七夕节'
      },
      '7,15': {
        tag: ['cn', 'traditional'],
        name: '中元节'
      },
      '8,15': {
        tag: ['cn', 'traditional'],
        name: '中秋节'
      },
      '9,9': {
        tag: ['cn', 'traditional'],
        name: '重阳节'
      },
      '12,8': {
        tag: ['cn', 'traditional'],
        name: '腊八节'
      }
    }
  },
  {
    format: function (lsr: Lunisolar) {
      // 检查是否2月的最后一天
      return lsr.add(1, 'day').day === 1 && lsr.month === 2 ? 't' : 'f'
    },
    markers: {
      t: {
        tag: ['international', 'health'],
        name: '国际罕见病日'
      }
    }
  }
]

export default festivals
