import Chance from "chance";
import _ from "lodash";

const chance = new Chance();

const userItems = () => ({
  'id': chance.guid(),
  'email': chance.email(),
  'address': chance.address(),
  'phone': chance.phone({ country: "us", mobile: true }),
  'name': chance.sentence({words: 2}),
  'username': chance.sentence({words: 1})
});

export const users = _.times(20, userItems);
