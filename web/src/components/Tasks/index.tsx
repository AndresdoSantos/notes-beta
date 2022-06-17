type Task = {
  id: string;
  name: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type TasksProps = {
  tasks: Task[];
};

function Tasks({ tasks }: TasksProps) {
  function getFocusedTask(task: Task) {
    window.localStorage.setItem('@cupertino:tasks', JSON.stringify(task));
  }

  return (
    <div className="block">
      <h3 className="text-xs font-semibold leading-10">TASKS OF THE DAY</h3>

      {tasks.map((task) => {
        return (
          <button
            type="button"
            key={task.id}
            className="flex items-center space-x-2 my-2"
            onClick={() => getFocusedTask(task)}
          >
            <p className="text-xs font-light uppercase hover:text-green-500">
              {task.name}
            </p>
          </button>
        );
      })}
    </div>
  );
}

export { Tasks };
