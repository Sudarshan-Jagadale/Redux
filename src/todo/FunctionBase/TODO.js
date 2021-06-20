export default function TODO({ todo, ...other }) {
  return (
    <div>
      <div>name: {todo.name}</div>
      <div>desc : {todo.desc}</div>
    </div>
  );
}
