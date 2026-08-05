import { cn } from "~/lib/utils"
import { Marquee } from "~/components/ui/marquee"

const reviews = [
  {
    name: "1. Politics",
    username: "Bloomberg, The Guardian, BBC",
    body: "Recent diplomatic developments show a cautious de-escalation in the Iran conflict. President Trump called off planned strikes ...",
  },
  {
    name: "2. Technology",
    username: "TechCrunch, The Verge",
    body: "China's rapid tech advances—new AI models, advanced robots, and specialty computer chips—are creating significant disruption ...",
  },
  {
    name: "3. Economy",
    username: "WSJ, Economist",
    body: "Recent economic data shows mixed signals globally. UK manufacturing growth accelerated in July, marking its fourth consecutive month ...",
  },
  {
    name: "4. War",
    username: "AP News, BBC, DW",
    body: "In the Israel-Iran war, President Trump abruptly canceled planned 'massive' strikes on Iran, citing progress on a deal to reopen the Strait ...",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
{/*const secondRow = reviews.slice(reviews.length / 2)*/ }

const ReviewCard = ({
  name,
  username,
  body,
}: {
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/*<Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>*/}
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}
