export type Character = {
  id: number;
  name: string;
  avatar: string;
  attribute: string;
};

export type Image = {
  id: number;
  filePath: string;
  primary: boolean;
};

export type ProductCategories = {
  id: string;
  name: string;
  price: string;
  description: string;
  rate: boolean;
  character: Character;
  productType: string;
  classify: {
    title: string;
    class: string;
  };
  images: Image[];
  demo: string;
  quantity: number;
  saleOff: number;
};

export type HeroCategoriesProps = {
  heroCategories: ProductCategories[] | undefined;
};

export type User = {
  userName: string;
  email: string;
  phoneNumber: string;
  password: string;
};

//Heros Page
export type CharactersType = {
  name: string;
  id: number;
  attribute: string;
  filePath: string;
};
export type CharactersResponse = {
  status: number;
  message: string;
  data: CharactersType[];
};
