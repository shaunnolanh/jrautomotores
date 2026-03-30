export default function Toast({ message }: { message: string }) {
  return <div className="fixed bottom-4 right-4 rounded-lg bg-gris-oscuro px-4 py-2">{message}</div>;
}
