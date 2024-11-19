export interface ITab {
  slot: string
  button: string,
}

export interface ITabsProps {
  tabs: ITab[]
  tabsName: string
}
