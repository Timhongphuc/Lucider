import { MorphingText } from "~/components/ui/morphing-text"

const texts = [
  "4:00 AM",
  "Fetching...",
  "Generating...",
  "Summarizing...",
  "Done.",
]

export function MorphingTextDemo({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center px-6 pb-16 ${className || ""}`}>
      <MorphingText 
        texts={texts} 
        className="text-2xl md:text-3xl lg:text-4xl h-auto whitespace-nowrap" 
      />
    </div>
  )
}
