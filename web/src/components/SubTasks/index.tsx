type TasksProps = {
  tasks: {
    id: string;
    name: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
  }[];
};

function SubTasks({ tasks }: TasksProps) {
  return (
    <div className="block">
      <h3 className="text-xs font-semibold leading-10">SUBTASKS OF</h3>

      {tasks.map((task) => {
        return (
          <button
            type="button"
            key={task.id}
            className="flex items-center space-x-2 my-2"
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

export { SubTasks };
