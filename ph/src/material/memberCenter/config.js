export default {
  title: '用户信息组',

  style: {
    padding: '5px 5px 0 5px',
    margin: '0 0 0 0',
  },
  base: {
    avatar: 'circle',
    color: '#fff',
    lightColor: 'red'
  },

  detail: {
    memberLevel: {
      show: true,
      name: '会员等级',
    },
    grow: {
      show: true,
      name: '成长值',
    },
    withdraw: {
      show: true,
      name: '可提现',
    },
    integral: {
      show: true,
      name: '待入账绿积分',
    },
    deductible: {
      show: true,
      name: '绿积分可抵',
    },
    contribution: {
      show: true,
      name: '贡献值',
    },
  },

  clickItem: {
    setting: {
      show: true,
      icon: 'icon-setting',
      iconColor: '#fff',
      link: {
        name: '',
        code: ''
      }
    },
    signin: {
      show: true,
      icon: 'icon-setting',
      iconColor: '#fff',
      link: {
        name: '',
        code: ''
      }
    },
    look: {
      show: true,
      text: '查看明细',
      color: '#fff',
      link: {
        name: '',
        code: ''
      }
    }
  }
}