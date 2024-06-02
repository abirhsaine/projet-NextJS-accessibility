export interface NavItem {
  title: string
  href?: string
  description?:string
  subItems?: NavItem[]
  disabled?: boolean
  external?: boolean
}
