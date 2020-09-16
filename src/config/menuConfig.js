

const menuList = [
    {
        title: '首页',
        key: '/admin/home',
        pages:"./pages/home"
    },
    {
        title: 'UI',
        key: '/admin/ui',
        children: [
            {
                title: '按钮',
                key: '/admin/ui/button',
                pages:'./pages/ui/button'
            },
            {
                title: '图片上传',
                key: '/admin/ui/upload',
                pages:'./pages/ui/upload'
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
                pages:'./pages/form/login'
            }
        ]
    },
    {
        title: '富文本',
        key: '/admin/rich',
        pages: './pages/rich'
    }
];
export default menuList;