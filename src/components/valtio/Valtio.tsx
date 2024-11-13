import { useRef, Fragment } from "react";
import { proxy, useSnapshot } from "valtio";

type Status = "pending" | "completed";
type Filter = Status | "all";
type Todo = {
  description: string;
  status: Status;
  id: number;
};
//객체의 기본동작을 대리하여 다른 동작을 한다.
//proxy-compare를 기반으로 동작하는 특징이 있음.
export const store = proxy<{ filter: Filter; todos: Todo[] }>({
  filter: "all",
  todos: [],
});

const addTodo = (description: string) => {
  store.todos.push({
    description,
    status: "pending",
    id: Date.now(),
  });
};

const removeTodo = (id: number) => {
  const index = store.todos.findIndex((todo) => todo.id === id);
  if (index >= 0) {
    store.todos.splice(index, 1);
  }
};

const toggleDone = (id: number, currentStatus: Status) => {
  const nextStatus = currentStatus === "pending" ? "completed" : "pending";
  const todo = store.todos.find((todo) => todo.id === id);
  if (todo) {
    todo.status = nextStatus;
  }
};

const setFilter = (filter: Filter) => {
  store.filter = filter;
};

const filterValues: Filter[] = ["all", "pending", "completed"];

const Filters = () => {
  // 변경불가능한 스냅샷을 반환함
  const snap = useSnapshot(store);
  return (
    <nav>
      {filterValues.map((filter) => (
        <Fragment key={filter}>
          <input
            name="filter"
            type="radio"
            value={filter}
            checked={snap.filter === filter}
            onChange={() => setFilter(filter)}
          />
          <label>{filter}</label>
        </Fragment>
      ))}
    </nav>
  );
};

const Todos = () => {
  const snap = useSnapshot(store);
  return (
    <ul>
      {snap.todos
        .filter(({ status }) => status === snap.filter || snap.filter === "all")
        .map(({ description, status, id }) => {
          return (
            <li key={id}>
              <span
                data-status={status}
                className="description"
                onClick={() => toggleDone(id, status)}
              >
                {description}
              </span>
              <button className="remove" onClick={() => removeTodo(id)}>
                x
              </button>
            </li>
          );
        })}
    </ul>
  );
};

const CreateTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <section>
      <input name="description" type="text" minLength={2} ref={inputRef} />
      <button
        className="add"
        onClick={() => addTodo(inputRef.current?.value ?? "")}
      >
        Add new
      </button>
    </section>
  );
};
