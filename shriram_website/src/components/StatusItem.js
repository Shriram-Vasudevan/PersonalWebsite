export default function StatusItem({ icon, children }) {
  return (
    <div className="flex items-center gap-2 text-sm mb-2">
      <span className="opacity-70">{icon}</span>
      <span className="font-mono lowercase">{children}</span>
    </div>
  )
} 