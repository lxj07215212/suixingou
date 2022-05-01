// 引入组件
// 使用路由懒加载
// 配置路由信息
export default (
    [
        {
            path:'/home',
            component:()=>import('@/pages/Home'),
            meta:{show:true},
        },
        {
            path:'/login',
            component:()=>import('@/pages/Login'),
            meta:{show:false},
        },
        {
            name:'search',
            path:'/search/:keyword?',
            component:()=>import('@/pages/Search'),
            meta:{show:true},
        },
        {
            path:'/register',
            component:()=>import('@/pages/Register'),
            meta:{show:false},
        },
        {
            path:'/detail/:skuId',
            component:()=>import('@/pages/Detail'),
            meta:{show:true},
        },
        {
            path:'/AddCartSuccess',
            component:()=>import('@/pages/AddCartSuccess'),
            meta:{show:true},
        },
        {
            path:'/shopCart',
            component:()=>import('@/pages/ShopCart'),
            meta:{show:true},
        },
        {
            path:'/trade',
            component:()=>import('@/pages/Trade'),
            meta:{show:true},
            beforeEnter: (to, from, next) => {
                if (from.path === '/shopCart') {
                    next();
                }else{
                    next(false)
                }
            }
        },
        {
            path:'/pay',
            component:()=>import('@/pages/Pay'),
            meta:{show:true},
            beforeEnter: (to, from, next) => {
                if(from.path=='/trade') next()
                else next(false)
            }
        },
        {
            path:'/paySuccess',
            component:()=>import('@/pages/PaySuccess'),
            meta:{show:true},
            beforeEnter: (to, from, next) => {
                if(from.path === 'pay') next()
                else next(false)
            }
        },
        {
            path:'/center',
            component:()=>import('@/pages/Center'),
            meta:{show:true},
            children:[
                {
                    path:'myOrder',
                    component:()=>import('@/pages/Center/MyOrder'),
                },
                {
                    path:'groupOrder',
                    component:()=>import('@/pages/Center/GroupOrder'),
                },
                {
                    path:'/center',
                    redirect:'/center/myOrder'
                }
            ]
        },
        {
            //重定向
            path:'*',
            redirect:'/home'
        }
    ]
)