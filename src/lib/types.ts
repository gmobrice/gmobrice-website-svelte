export interface NavigationLink {
	id: number;
	name: string;
	href: string;
}

export interface Experience {
	id: number;
	name: string;
	company: string;
	countryFlag: string;
	startYear: number;
	endYear?: number;
}
