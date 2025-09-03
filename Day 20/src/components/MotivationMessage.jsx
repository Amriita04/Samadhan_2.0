export default function MotivationMessage({ condition }) {
  const messages = {
    Rain: "Perfect time to reflect and recharge.",
    Clear: "Let the sunshine fuel your goals.",
    Snow: "Bundle up and build something cool!",
  };

  return (
    <div className="mt-4 text-sm text-gray-600 italic">
      {messages[condition] || "Whatever the weather, you've got this."}
    </div>
  );
}
