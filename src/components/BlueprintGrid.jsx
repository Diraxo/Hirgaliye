// The hero backdrop: a faint engineering grid, masked so it fades out toward
// the edges and never competes with the headline or the dashboard preview.

export default function BlueprintGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 bg-grid bg-[size:44px_44px] opacity-[0.35] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,black,transparent)]" />
      <div className="absolute -top-24 right-0 w-[40rem] h-[40rem] rounded-full bg-teal/5 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full bg-violet/5 blur-3xl" />
    </div>
  )
}
