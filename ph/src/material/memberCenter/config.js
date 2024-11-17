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
    memberName: {
      show: true,
      name: '会员昵称',
      fontSize: 13,
      color: '#fff',
      resetColor: '#fff',
    },
    memberLevel: {
      show: true,
      name: '会员等级',
      fontSize: 9,
      color: '#fff',
      resetColor: '#fff',
    },
    grow: {
      show: true,
      name: '成长值',
      fontSize: 11,
      color: '#fff',
      resetColor: '#fff',
    },
    withdraw: {
      show: true,
      name: '可提现',
      fontSize: 11,
      color: '#AD7850',
      resetColor: '#AD7850',
    },
    integral: {
      show: true,
      name: '待入账绿积分',
      fontSize: 11,
      color: '#AD7850',
      resetColor: '#AD7850',
    },
    deductible: {
      show: true,
      name: '绿积分可抵',
      fontSize: 11,
      color: '#AD7850',
      resetColor: '#AD7850',
    },
    contribution: {
      show: true,
      name: '贡献值',
      fontSize: 11,
      color: '#AD7850',
      resetColor: '#AD7850',
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