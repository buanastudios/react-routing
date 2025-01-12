export type Person = {
  id: string;
  name: string;
  username: string;
  email: string;
  phoneNumber: string;
  address: Address;
  bio: string;
  avatar: string;
  url: string;
  balance: number;
  credit_card: CreditCard;
  followers: string;
  following: string;
  likes: string;
};

export type Address = {
  buildingNumber: string; 
  street: string;
  long: number;
  lat: number;
  zipCode: string;
  city: string;
  county: string;
  country: string;
  state: string;
}

export type CreditCard = {
  CCV: string;
  issuer: string;
  number: string;
}