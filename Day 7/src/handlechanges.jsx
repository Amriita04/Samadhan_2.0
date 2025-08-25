const [state, setState] = React.useState(initialValue);
const [text, setText] = React.useState('');

function handleChange(event) {
  setText(event.target.value);
}

return <input value={text} onChange={handleChange} />;

export default handleChange;