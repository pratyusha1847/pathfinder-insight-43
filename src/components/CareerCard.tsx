import { CareerMatch } from "@/data/careerData";
import { TrendingUp, TrendingDown, Minus, BookOpen, DollarSign, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface CareerCardProps {
  match: CareerMatch;
  index: number;
}

const getGrowthIcon = (outlook: string) => {
  if (outlook === "High") return <TrendingUp className="w-4 h-4 text-emerald" />;
  if (outlook === "Medium") return <Minus className="w-4 h-4 text-amber" />;
  return <TrendingDown className="w-4 h-4 text-rose" />;
};

const CareerCard = ({ match, index }: CareerCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const { career, matchPercentage, reasoning, matchedSkills, missingSkills } = match;

  return (
    <div
      className="bg-card rounded-xl border border-border p-6 glow-soft hover:glow-teal transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-xl font-bold">{career.title}</h3>
            {index === 0 && (
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                Best Match
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{career.industry}</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-gradient">{matchPercentage}%</div>
          <p className="text-xs text-muted-foreground">match</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4">{career.description}</p>

      {/* Reasoning */}
      <div className="bg-primary/5 rounded-lg p-3 mb-4">
        <p className="text-sm font-medium text-foreground">💡 {reasoning}</p>
      </div>

      {/* Score Bars */}
      <div className="grid grid-cols-5 gap-2 mb-4">
        {[
          { label: "Skills", value: match.skillMatch },
          { label: "Interest", value: match.interestMatch },
          { label: "Education", value: match.educationFit },
          { label: "Industry", value: match.industryFit },
          { label: "Style", value: match.workStyleFit },
        ].map(({ label, value }) => (
          <div key={label} className="text-center">
            <div className="h-2 bg-muted rounded-full overflow-hidden mb-1">
              <div
                className="h-full gradient-teal rounded-full transition-all duration-700"
                style={{ width: `${value}%` }}
              />
            </div>
            <span className="text-[10px] text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <DollarSign className="w-4 h-4" /> {career.salaryRange}
        </span>
        <span className="flex items-center gap-1">
          {getGrowthIcon(career.growthOutlook)} {career.growthOutlook} Growth
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {matchedSkills.map((s) => (
          <span key={s} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">{s}</span>
        ))}
        {missingSkills.map((s) => (
          <span key={s} className="text-xs px-2 py-1 rounded-full bg-destructive/10 text-destructive font-medium">{s}</span>
        ))}
      </div>

      {/* Expand */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1 text-sm text-primary hover:underline mt-2"
      >
        <BookOpen className="w-4 h-4" />
        {expanded ? "Hide" : "How to get started"}
        {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
      </button>
      {expanded && (
        <ol className="mt-3 space-y-2 animate-fade-in">
          {career.howToStart.map((step, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-semibold">{i + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default CareerCard;
