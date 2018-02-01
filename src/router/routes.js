import index from '../pages/index/index.vue';
import Login from '../pages/login/login.vue';
import Register from '../pages/register/register.vue';
import Entry from '../pages/onece/onece.vue';
import personnel from '../pages/onece/personnel.vue';
import actmessage from '../pages/onece/actmessage.vue';
import Grid from '../pages/grid/grid.vue';
import Public from '../pages/public/public.vue';
import Message from '../pages/messages/messages.vue';
import Activity from '../pages/activity/activity.vue';
import activity_first from '../pages/activity_first/activity_first.vue';
import activity_two from '../pages/activity_two/activity_two.vue';
import activity_three from '../pages/activity_three/activity_three.vue'
import activity_last from '../pages/activity_last/activity_last.vue'
export default[
    {
        path: '/',
        redirect: 'admin/menu'
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/admin/menu',
        component: index,
        name: 'admin',
        children: [
            {
                path: '/',
                name: 'public',
                redirect: 'public'
            },
            {
                path: 'entry',
                name: 'entry',
                component: Entry,
                children: [
                    {
                        path: '/',
                        redirect: 'actmessage'
                    },
                    {
                        path: 'personnel',
                        name: 'personnel',
                        component: personnel
                    },
                    {
                        path: 'actmessage',
                        name: 'actmessage',
                        component: actmessage
                    }
                ]
            },
            {
                path: 'grid',
                name: 'grid',
                component: Grid
            },
            {
                path: 'public',
                name: 'public',
                component: Public,
                children: [
                    {
                        path: '/',
                        name: 'message',
                        redirect: 'message'
                    },
                    {
                        path: 'message',
                        name: 'message',
                        component: Message
                    },
                    {
                        path: 'activity',
                        name: 'activity',
                        component: Activity,
                        children: [
                            {
                                path: '/',
                                redirect: 'first'
                            },
                            {
                                path: 'first',
                                name: 'first',
                                component: activity_first
                            },
                            {
                                path: 'two',
                                name: 'two',
                                component: activity_two
                            },
                            {
                                path: 'three',
                                name: 'three',
                                component: activity_three
                            },
                            {
                                path: 'last',
                                name: 'last',
                                component: activity_last
                            }
                        ]
                    }
                ]
            }
        ]
    }
]