export default function Overview(props) {
  return (
    <li>
      {`${props.id + 1}. ${props.content}`}
      <button onClick={() => props.onClick(props.id)}>Delete</button>
    </li>
  );
}
