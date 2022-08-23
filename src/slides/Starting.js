const Starting = () => {
  return (
    <>
      <h3 className="animateIn"><strong>Mongoose</strong> → ODM (Object Data Modeling) library for MongoDB</h3>
      <ul>
        <li className="animateIn">
          Translates JS code & MongoDB data objects
        </li>
        <li className="animateIn">
          Validates data passing into the DB using “schemas”
        </li>
      </ul>
      <h3 className="animateIn"><strong>Schema:</strong> a document data structure that is enforced via the application layer</h3>
      <p className="animateIn">Data types, required fields, etc.</p>
      <h3 className="animateIn"><strong>Models:</strong> constructors that take a schema and create and instance of a document equivalent to records in a relational database</h3>
    </>
  );
};

export default Starting;