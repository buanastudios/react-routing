import Container from "../components/element/Container";
import Address from "../components/person/Address";
import Bio from "../components/person/Bio";
import Follows from "../components/person/Follows";
import Profile from "../components/person/Profile";
import Subscription from "../components/person/Subscription";

import { createPerson } from "../functions/people";

import "./Person.css";

const person = createPerson();

const Person = () => {
  return (
    <Container>
      <div className="person-detail">
        <a className="btn-back" href="/">
          Back
        </a>
        <Profile info={person} />
        <Bio bio={person.bio} />
        <Follows info={person} />
        <Address address={person.address} />
        <Subscription info={person} />
      </div>
    </Container>
  );
};

export default Person;
