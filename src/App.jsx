// Import
import tasks from "./data/data.js"

// Filtro l'array tasks per trovare gli stati completati
const completedTasks = tasks.filter((curTask) => {
  if (curTask.state === "completed") {
    return curTask;
  };
});

// Filtro l'array tasks per trovare gli stati da completare
const inProgressTasks = tasks.filter((curTask) => {
  if (curTask.state === "in_progress" || curTask.state === "backlog") {
    return curTask;
  };
});


// Functions
function printListTasks(arrayToCheck) {
  return arrayToCheck.map((curElem) => (
    <li key={curElem.id}>
      <div>
        <h4>
          {curElem.title}
        </h4>
        <span className={`state ${curElem.state}`}>{curElem.state}</span>
      </div>
      <div>
        <span className="details">Priority: {curElem.priority}</span>
        <span className="details">Est. time {curElem.estimatedTime}</span>
      </div>
    </li>
  ));
};

function App() {

  return (
    <>
      <header>
        <h1>Task manager</h1>
      </header>
      <main>
        <section>
          <h2 className="task-title">Current Task</h2>
          <ul>
            {printListTasks(inProgressTasks)}
          </ul>
        </section>
        <hr />
        <section>
          <h2 className="task-title">Completed Task</h2>
          <ul>
            {printListTasks(completedTasks)}
          </ul>
        </section>
      </main>
    </>
  );
};

export default App
