const Starting = () => {
  return (
    <>
      <p className="animateIn"><strong>Mongoose</strong> → ODM (Object Data Modeling) library for MongoDB</p>
      <ul>
        <li className="animateIn">
          Translates JS code & MongoDB data objects
        </li>
        <li className="animateIn">
          Validates data passing into the DB using “schemas”
        </li>
      </ul>
      <p className="animateIn"><strong>Schema</strong> → a document data structure that is enforced via the application layer</p>
      <h3 className="animateIn">Data types, required fields, etc.</h3>
      <p className="animateIn"><strong>Models</strong> → constructors that take a schema and create and instance of a document equivalent to records in a relational database</p>
    </>
  );
};

export default Starting;