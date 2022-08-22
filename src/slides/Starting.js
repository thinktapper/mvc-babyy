import { IconContainer } from "./Intro";
import IconGithub from "../icons/IconGithub";

const Starting = () => {
  return (
    <>
      <h2 className="animateIn"><strong>Mongoose</strong> → ODM (Object Data Modeling) library for MongoDB</h2>
      <ul>
        <li className="animateIn">
          Translates JS code & MongoDB data objects
        </li>
        <li className="animateIn">
          Validates data passing into the DB using “schemas”
        </li>
      </ul>
      <h2 className="animateIn"><strong>Schema:</strong> a document data structure that is enforced via the application layer</h2>
      <p className="animateIn">Data types, required fields, etc.</p>
      <h2 className="animateIn"><strong>Models:</strong> constructors that take a schema and create and instance of a document equivalent to records in a relational database</h2>
    </>
  );
};

export default Starting;