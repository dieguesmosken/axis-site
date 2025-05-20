interface Task {
  id: string
  title: string
  dueDate: string
  priority: "high" | "medium" | "low"
  completed: boolean
}

interface TaskListProps {
  tasks: Task[]
}

export default function TaskList({ tasks }: TaskListProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="bg-gray-900 rounded-lg shadow-lg">
      <div className="p-4 border-b border-gray-800">
        <h3 className="text-lg font-medium">Tarefas Pendentes</h3>
      </div>
      <div className="divide-y divide-gray-800">
        {tasks.map((task) => (
          <div key={task.id} className="p-4 flex items-center">
            <input
              type="checkbox"
              defaultChecked={task.completed}
              className="h-4 w-4 rounded border-gray-600 text-primary focus:ring-primary"
            />
            <div className="ml-3 flex-1">
              <p className={`text-sm font-medium ${task.completed ? "line-through opacity-50" : ""}`}>{task.title}</p>
              <p className="text-xs text-gray-400 mt-1">Vencimento: {task.dueDate}</p>
            </div>
            <div className={`h-2 w-2 rounded-full ${getPriorityColor(task.priority)}`} />
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-800">
        <button className="text-sm text-primary hover:underline">Ver todas as tarefas</button>
      </div>
    </div>
  )
}
