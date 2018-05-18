
export default [
  {
    path: '/',
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
