export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  Contact = "contact",
}

export interface IBenefit {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export interface IClass {
  name?: string;
  desc?: string;
  image?: string;
}
