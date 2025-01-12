import localforage from "localforage";
import { faker } from "@faker-js/faker";
import { formatLargeNumber } from "./format";

/**
 * @returns {import("./people-definition").Person}
 */
export const createPerson = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.number(),
  address: {
    buildingNumber: faker.location.buildingNumber(),
    street: faker.location.streetAddress(),
    long: faker.location.longitude(),
    lat: faker.location.latitude(),
    zipCode: faker.location.zipCode(),
    city: faker.location.city(),
    county: faker.location.county(),
    country: faker.location.country(),
    state: faker.location.state(),
  },
  bio: faker.lorem.paragraphs(),
  avatar: faker.image.avatarLegacy(),
  url: faker.internet.url(),
  balance: faker.finance.amount({ symbol: "$" }),
  credit_card: {
    CCV: faker.finance.creditCardCVV(),
    issuer: faker.finance.creditCardIssuer(),
    number: faker.finance.creditCardNumber(),
  },
  followers: formatLargeNumber(faker.number.int({ min: 10000, max: 9999999 })),
  following: formatLargeNumber(faker.number.int({ min: 1000, max: 99999 })),
  likes: formatLargeNumber(faker.number.int({ min: 10000, max: 9999999 })),
});

/**
 * @param {number} size
 * @returns {import("./people-definition").Person[]}
 */
export const createPeople = (size = 10) => {
  return [...Array(size)].map(() => createPerson());
};

/**
 * @returns {Promise<import("./people-definition").Person[]>}
 */
export const getPeople = async () => {
  return await localforage.getItem("people");
};

/**
 * @param {import("./people-definition").Person | Array<import("./people-definition").Person>} data
 * @returns
 */
export const storePeople = async (data) => {
  return await localforage.setItem("people", data || createPeople(10));
};

/**
 * @param {string} id
 */
export const getPerson = async (id) => {
  const people = await getPeople();

  return people.find((person) => person.id == id);
};
