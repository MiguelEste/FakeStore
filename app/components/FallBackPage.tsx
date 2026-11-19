export function FallbackPage({
  title,
  message,
}: {
  title: string;
  message?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-md bg-gray-900 p-10 text-gray-100">
      <h2 className="text-2xl font-bold">{title}</h2>
      {message && <p>{message}</p>}
    </div>
  );
}
