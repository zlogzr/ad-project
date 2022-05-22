export interface MenuItemInfoType {
    name: string
    menuChildren: MenuItemChild[]
    url: string
    isActive: boolean
}

export interface MenuItemChild {
    label: string
    url: string
}
