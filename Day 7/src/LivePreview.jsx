function LivePreview() {
  const [text, setText] = React.useState('');
  
  return (
    <div>
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
 export default LivePreview;