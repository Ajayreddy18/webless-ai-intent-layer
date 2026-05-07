export default function GridBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />
    </div>
  )
}