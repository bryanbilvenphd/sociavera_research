export type Publication = {
  id: string
  title: string
  abstract: string
  year: number
  tags: string[]
  authors: string
}

export const publications: Publication[] = [
  {
    id: "1",
    title: "Aligning Frontier Models with Deliberative Governance Frameworks",
    abstract:
      "We propose a governance layer that couples model evaluations with institutional oversight, showing measurable reductions in unsafe completions across three frontier systems.",
    year: 2026,
    tags: ["AI Governance", "Pre-registered"],
    authors: "Bilven, Okafor, Lindqvist",
  },
  {
    id: "2",
    title: "Perceived Agency and Trust in Human–AI Collaborative Teams",
    abstract:
      "A field study of 1,240 knowledge workers finds that perceived agency mediates trust formation more strongly than raw model accuracy, reshaping deployment guidance.",
    year: 2025,
    tags: ["Social Psychology", "Pre-registered"],
    authors: "Mensah, Bilven, Torres",
  },
  {
    id: "3",
    title: "Institutional Readiness for Autonomous Decision Systems",
    abstract:
      "Drawing on interviews across 14 public agencies, we map the organizational preconditions that predict responsible adoption of autonomous decision support.",
    year: 2025,
    tags: ["AI Governance", "Policy"],
    authors: "Bilven, Ferreira",
  },
  {
    id: "4",
    title: "Social Norms Emergence in Multi-Agent Language Systems",
    abstract:
      "Through controlled simulations we observe stable cooperative norms emerging among LLM agents, with implications for alignment under distributional shift.",
    year: 2026,
    tags: ["Frontier AI", "Social Psychology"],
    authors: "Okafor, Bilven, Haas",
  },
  {
    id: "5",
    title: "Calibrating Public Sentiment Toward Generative AI Regulation",
    abstract:
      "A nationally representative survey experiment reveals how framing effects shift support for AI regulation by up to 22 percentage points across demographics.",
    year: 2024,
    tags: ["Social Psychology", "Policy", "Pre-registered"],
    authors: "Torres, Bilven",
  },
  {
    id: "6",
    title: "Auditing Emergent Capabilities with Adversarial Red-Teaming",
    abstract:
      "We introduce a reproducible red-teaming protocol that surfaces latent capabilities in frontier models earlier than standard benchmark suites.",
    year: 2026,
    tags: ["Frontier AI", "AI Governance"],
    authors: "Lindqvist, Bilven, Mensah",
  },
]

export const stats = [
  { label: "Total Publications", value: "128", change: "+12 this year" },
  { label: "Pre-registrations", value: "47", change: "AsPredicted / OSF" },
  { label: "Policy Briefs", value: "23", change: "+4 this quarter" },
  { label: "Active Datasets", value: "36", change: "9 open access" },
]
