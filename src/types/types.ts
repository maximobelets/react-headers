export interface TestArray {
	name: string,
};

export interface Path {
	path: string,
	exact: boolean,
	title: string,
}

export interface ISearchListItem {
	name: string,
	onClick: (item) => void,
};

export interface ISelectItem {
	name: string,
	key: string,
	onClick?: (item) => void,
};