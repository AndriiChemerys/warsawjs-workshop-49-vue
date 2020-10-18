import VueRouter from 'vue-router'

import Add from '@/views/Add'
import Edit from '@/views/Edit'
import Home from '@/views/Home'
import Post from '@/views/Post'

const router = new VueRouter({
    routes: [
        {
            path: '/add',
            component: Add,
        },
        {
            path: '/edit',
            component: Edit,
        },
        {
            path: '/',
            component: Home,
        },
        {
            path: '/post',
            component: Post,
        },
    ]
});

export default router;