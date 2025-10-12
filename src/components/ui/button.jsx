export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-2xl border hover:bg-gray-50 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
