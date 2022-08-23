// import { colors } from "../colors";

const Performance = () => {
  return (
    <>
      <ul>
        <li className="animateIn">
          MVC Components are partitioned into separate foldersMVC Components are partitioned into separate folders
        </li>
        <li className="animateIn">
          Server becomes less cluttered when logic is moved to multiple outside controllers
        </li>
        <li className="animateIn">
          Multiple routes files organize routes into logical branches so data is easy to traceMultiple routes files organize routes into logical branches so data is easy to trace
        </li>
        <li className="animateIn">
          Schemas provide a reference to the data structure, without directly viewing the database
        </li>
        <li className="animateIn">
          Models can be referenced in all controllers via exporting, providing immediate structure and connection to the database
        </li>
      </ul>
    </>
  );
};

export default Performance;
