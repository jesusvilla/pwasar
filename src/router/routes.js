
export default [
  {
    path: '/', redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('pages/login')
  },
  {
    path: '/muro',
    component: () => import('layouts/modulo/index'),
    children: [
      { path: '', component: () => import('pages/muro/index') }
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
