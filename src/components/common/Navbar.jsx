import { NavLink, useNavigate } from "react-router-dom";
import { faker } from "@faker-js/faker";

import { getPeople } from "@/src/functions/people";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const randomizer = async () => {
    const people = await getPeople();

    if (!people.length) return;

    const person = faker.helpers.arrayElement(people);

    return navigate(`/person/${person.id}`);
  };

  return (
    <div className={styles.navbar}>
      <nav>
        <NavLink
          className={styles["navbar-item"]}
          to="/person/create"
          style={({ isActive }) => ({
            color: isActive ? "#1c68cc" : undefined,
          })}
        >
          Create
        </NavLink>
        <button className={styles["navbar-button"]} onClick={randomizer}>
          Random
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
