type ChildrenList = {
  label: string;
  value: number;
  path?: string;
  parent: number;
};

type OptionsList = {
  label: string;
  value: number;
  path?: string;
  children?: ChildrenList;
}[];
export interface MenuProps {
  optionsList: OptionsList;
}
