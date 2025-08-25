function App() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState('');
  
  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      
      <h2>Live Text Preview</h2>
      <input 
        type="text" 
        value={text} 
        onChange={e => setText(e.target.value)} 
        placeholder="Type something..."
      />
      <p>Preview: {text}</p>
    </div>
  );
}
 export default App;