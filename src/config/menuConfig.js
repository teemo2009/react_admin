

const menuList = [
    {
        title: '首页',
        key: '/admin/home',
        pages:"./pages/Home"
    },
    {
        title: 'UI',
        key: '/admin/ui',
        children: [
            {
                title: '按钮',
                key: '/admin/ui/buttons',
                pages:'./pages/Ui/Button'
            },
            {
                title: '弹框',
                key: '/admin/ui/modals',
                pages:'./pages/Ui/Modals'
            },
            {
                title: 'Loading',
                key: '/admin/ui/loadings',
                pages:'./pages/Ui/Loadings'
            },
            {
                title: '通知提醒',
                key: '/admin/ui/notification',
                pages:'./pages/Ui/Notice'
            },
            {
                title: '全局Message',
                key: '/admin/ui/messages',
                pages:'./pages/Ui/Messages'
            },
            {
                title: 'Tab页签',
                key: '/admin/ui/tabs',
                pages:'./pages/Ui/Tabs'
            },
            {
                title: '图片画廊',
                key: '/admin/ui/gallery',
                pages:'./pages/Ui/Gallery'
            },
            {
                title: '轮播图',
                key: '/admin/ui/carousel',
                pages:'./pages/Ui/Carousel'
            }
        ]
    },
    {
        title: '表单',
        key: '/admin/form',
        children: [
            {
                title: '登录',
                key: '/admin/form/login',
                pages:'./pages/Form/FormLogin'
            },
            {
                title: '登录Hook',
                key: '/admin/form/loginHook',
                pages:'./pages/Form/LoginHooks'
            },
            {
                title: '注册',
                key: '/admin/form/reg',
            }
        ]
    },
    {
        title: '表格',
        key: '/admin/table',
        children: [
            {
                title: '基础表格',
                key: '/admin/table/basic',
            },
            {
                title: '高级表格',
                key: '/admin/table/high',
            }
        ]
    },
    {
        title: '富文本',
        key: '/admin/rich'
    },
    {
        title: '城市管理',
        key: '/admin/city'
    },
    {
        title: '订单管理',
        key: '/admin/order',
        btnList: [
            {
                title: '订单详情',
                key: 'detail'
            },
            {
                title: '结束订单',
                key: 'finish'
            }
        ]
    },
    {
        title: '员工管理',
        key: '/admin/user'
    },
    {
        title: '车辆地图',
        key: '/admin/bikeMap'
    },
    {
        title: '图标',
        key: '/admin/charts',
        children: [
            {
                title: '柱形图',
                key: '/admin/charts/bar'
            },
            {
                title: '饼图',
                key: '/admin/charts/pie'
            },
            {
                title: '折线图',
                key: '/admin/charts/line'
            },
        ]
    },
    {
        title: '权限设置',
        key: '/admin/permission'
    },
];
export default menuList;