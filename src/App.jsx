// Data
const tasks = [
  {
    id: 1,
    title: "Implementare la homepage",
    priority: 1,
    estimatedTime: 120,
    state: "completed"
  },
  {
    id: 2,
    title: "Sviluppare il menu di navigazione",
    priority: 2,
    estimatedTime: 60,
    state: "completed"
  },
  {
    id: 3,
    title: "Creare il footer del sito",
    priority: 3,
    estimatedTime: 30,
    state: "completed"
  },
  {
    id: 4,
    title: "Ottimizzare le performance",
    priority: 1,
    estimatedTime: 180,
    state: "completed"
  },
  {
    id: 5,
    title: "Scrivere test per i componenti",
    priority: 2,
    estimatedTime: 90,
    state: "completed"
  },
  {
    id: 6,
    title: "Implementare la pagina dei contatti",
    priority: 3,
    estimatedTime: 60,
    state: "completed"
  },
  {
    id: 7,
    title: "Aggiungere animazioni CSS",
    priority: 2,
    estimatedTime: 30,
    state: "backlog"
  },
  {
    id: 8,
    title: "Integrare l'API di autenticazione",
    priority: 1,
    estimatedTime: 120,
    state: "in_progress"
  },
  {
    id: 9,
    title: "Aggiornare la documentazione",
    priority: 3,
    estimatedTime: 60,
    state: "backlog"
  },
  {
    id: 10,
    title: "Rifattorizzare il codice CSS",
    priority: 2,
    estimatedTime: 90,
    state: "in_progress"
  }
];

console.log(tasks);


// Functions
function printCompletedTasks() {
  // Filtro l'array tasks per trovare gli stati completati
  const completedTasks = tasks.filter((curTask) => {
    if (curTask.state === "completed") {
      return curTask;
    };
  });
  // Restituisco gli elementi richiesti dall'array filtrato tramite map
  return completedTasks.map((curTask, index) => {
    return (<li key={index}>{curTask.title} <span className="states">{curTask.state}</span> <br /> Priority: {curTask.priority} <br /> Est. time {curTask.estimatedTime}</li>)
  });
};


function printInProgressTasks() {
  // Filtro l'array tasks per trovare gli stati in progresso o backlog
  const inProgressTasks = tasks.filter((curTask) => {
    if (curTask.state === "in_progress" || curTask.state === "backlog") {
      return curTask;
    };
  });
  // Restituisco gli elementi richiesti dall'array filtrato tramite map
  return inProgressTasks.map((curTask, index) => {
    return (<li key={index}>{curTask.title} <span className="states">{curTask.state}</span> <br /> Priority: {curTask.priority} <br /> Est. time {curTask.estimatedTime}</li>);
  });
};


function App() {

  return (
    <>
      <h1>Task manager</h1>
      <h2>Current Task</h2>
      <ul>
        {printInProgressTasks()}
      </ul>
      <hr />
      <h2>Completed Task</h2>
      <ul>
        {printCompletedTasks()}
      </ul>
    </>
  )
}

export default App
