import type { RouteLocationRaw } from 'vue-router'

export interface Breadcrumb {
  path?: RouteLocationRaw
  breadcrumbName: string
}
