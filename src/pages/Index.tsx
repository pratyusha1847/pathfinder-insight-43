import { useState } from "react";
import { UserProfile, CareerMatch, getRecommendations } from "@/data/careerData";
import StepForm from "@/components/StepForm";
import CareerCard from "@/components/CareerCard";
import MatchRadarChart from "@/components/MatchRadarChart";
import SkillGapAnalyzer from "@/components/SkillGapAnalyzer";
import CareerExplorer from "@/components/CareerExplorer";
import { Sparkles, Compass, RotateCcw, Brain, Target, BarChart3 } from "lucide-react";

type View = "hero" | "form" | "results" | "explorer";

const Index = () => {
  const [view, setView] = useState<View>("hero");
  const [results, setResults] = useState<CareerMatch[]>([]);
  const [selectedResult, setSelectedResult] = useState(0);

  const handleSubmit = (profile: UserProfile) => {
    const recs = getRecommendations(profile);
    setResults(recs);
    setSelectedResult(0);
    setView("results");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => setView("hero")} className="flex items-center gap-2 text-lg font-bold">
            <Brain className="w-5 h-5 text-primary" />
            <span>CareerIQ</span>
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setView("explorer")}
              className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <Compass className="w-4 h-4" /> Explore
            </button>
            <button
              onClick={() => setView("form")}
              className="text-sm px-4 py-2 rounded-lg gradient-teal text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      {view === "hero" && (
        <div className="gradient-hero text-primary-foreground">
          <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
            <div className="max-w-2xl animate-fade-in">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/20 text-teal-light">
                  Career Intelligence System
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Discover Your
                <br />
                <span className="text-gradient">Perfect Career</span>
              </h1>
              <p className="text-lg md:text-xl opacity-80 mb-8 leading-relaxed">
                Smart recommendations powered by weighted skill matching, interest analysis,
                and personalized learning paths. Not just predictions — actionable guidance.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setView("form")}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg gradient-teal font-semibold text-primary-foreground glow-teal hover:opacity-90 transition-all"
                >
                  <Sparkles className="w-5 h-5" /> Start Assessment
                </button>
                <button
                  onClick={() => setView("explorer")}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary-foreground/20 font-semibold hover:bg-primary-foreground/10 transition-all"
                >
                  <Compass className="w-5 h-5" /> Explore Careers
                </button>
              </div>
            </div>

            {/* Feature cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-20">
              {[
                { icon: Target, title: "Smart Matching", desc: "Weighted algorithm scores careers across 5 dimensions" },
                { icon: BarChart3, title: "Skill Gap Analysis", desc: "See what you know and what you need to learn" },
                { icon: Compass, title: "Learning Paths", desc: "Step-by-step roadmaps to reach your career goals" },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="bg-primary-foreground/5 backdrop-blur rounded-xl p-6 border border-primary-foreground/10 animate-slide-up"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <Icon className="w-8 h-8 text-teal-light mb-3" />
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm opacity-70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      {view === "form" && (
        <div className="max-w-6xl mx-auto px-6 py-12">
          <StepForm onSubmit={handleSubmit} />
        </div>
      )}

      {/* Results */}
      {view === "results" && results.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-1">Your Career Matches</h2>
              <p className="text-muted-foreground">Top {Math.min(5, results.length)} recommendations based on your profile</p>
            </div>
            <button
              onClick={() => setView("form")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Retake
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Cards */}
            <div className="lg:col-span-2 space-y-4">
              {results.slice(0, 5).map((match, i) => (
                <div key={match.career.id} onClick={() => setSelectedResult(i)} className="cursor-pointer">
                  <CareerCard match={match} index={i} />
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <MatchRadarChart match={results[selectedResult]} />
              <SkillGapAnalyzer match={results[selectedResult]} />
            </div>
          </div>
        </div>
      )}

      {/* Explorer */}
      {view === "explorer" && (
        <div className="max-w-6xl mx-auto px-6 py-12">
          <CareerExplorer />
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          <p>CareerIQ — Career Intelligence System</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
