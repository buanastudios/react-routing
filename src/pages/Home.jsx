import { useEffect, useState } from "react";

import Button from "@/src/components/element/Button";
import Card from "@/src/components/element/Card";
import Gap from "@/src/components/element/Gap";
import NoData from "@/src/components/element/NoData";

import Container from "@/src/components/element/Container";

import { getPeople, storePeople } from "@/src/functions/people";

import "./Home.css";

/** @type {import("react").FC<{people: import("@/src/functions/people-definition").Person[]}>} */
const People = ({ people }) => {
  if (people.length) {
    return people.map((person) => <Card key={person.id} person={person} />);
  }

  return <NoData>No People Found.</NoData>;
};

const Home = () => {
  /** @type {ReturnType<typeof import("react").useState<import("@/src/functions/people-definition").Person[]>>} */
  const [people, setPeople] = useState([]);

  const onGeneratePeople = async () => {
    console.log("Generating People...");
    try {
      await storePeople();
      console.log("People Generated!");
    } catch (err) {
      console.log(err);
    }
  };

  const onFetchPeople = async () => {
    console.log("Getting People...");
    try {
      const people = await getPeople();

      if (people) {
        console.log("People obtained!");
        return setPeople(people);
      }

      console.log("No people found.");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    onFetchPeople();
  }, []);

  return (
    <Container>
      <Gap gap="lg" direction="column" align="center">
        <div className="cards">
          <People people={people} />
        </div>
        <Gap gap="lg">
          <Button variant="secondary" onClick={onGeneratePeople}>
            Generate People
          </Button>
          <Button onClick={onFetchPeople}>Fetch People</Button>
        </Gap>
      </Gap>
    </Container>
  );
};

export default Home;
