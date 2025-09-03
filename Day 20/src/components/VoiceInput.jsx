export default function VoiceInput({ onCitySpoken }) {
  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.onresult = (e) => {
      const city = e.results[0][0].transcript;
      onCitySpoken(city);
    };
    recognition.start();
  };

  return (
    <button onClick={startListening} className="bg-indigo-500 text-white px-4 py-2 rounded">
      🎤 Speak City Name
    </button>
  );
}
