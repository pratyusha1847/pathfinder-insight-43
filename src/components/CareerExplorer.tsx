import { careers } from "@/data/careerData";
import { INDUSTRIES, SKILLS } from "@/data/careerData";
import { useState } from "react";
import { Search, Filter, TrendingUp, Minus, DollarSign } from "lucide-react";

const CareerExplorer = () => {
  const [search, setSearch] = useState("");
  const [filterIndustry, setFilterIndustry] = useState("");
  const [filterSkill, setFilterSkill] = useState("");

  const filtered = careers.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    const matchesIndustry = !filterIndustry || c.industry === filterIndustry;
    const matchesSkill = !filterSkill ||
      c.requiredSkills.includes(filterSkill) ||
      c.optionalSkills.includes(filterSkill);
    return matchesSearch && matchesIndustry && matchesSkill;
  });

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">Career Explorer</h2>
      <p className="text-muted-foreground mb-6">Browse all careers by industry, skill, or keyword.</p>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search careers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <select
          value={filterIndustry}
          onChange={(e) => setFilterIndustry(e.target.value)}
          className="px-4 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <option value="">All Industries</option>
          {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
        </select>
        <select
          value={filterSkill}
          onChange={(e) => setFilterSkill(e.target.value)}
          className="px-4 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <option value="">All Skills</option>
          {SKILLS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((career) => (
          <div key={career.id} className="bg-card rounded-xl border border-border p-5 hover:glow-teal transition-all duration-300">
            <h3 className="font-bold mb-1">{career.title}</h3>
            <p className="text-xs text-primary font-medium mb-2">{career.industry}</p>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{career.description}</p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <DollarSign className="w-3 h-3" /> {career.salaryRange}
              </span>
              <span className="flex items-center gap-1">
                {career.growthOutlook === "High" ? <TrendingUp className="w-3 h-3 text-emerald" /> : <Minus className="w-3 h-3 text-amber" />}
                {career.growthOutlook}
              </span>
            </div>
            <div className="flex flex-wrap gap-1 mt-3">
              {career.requiredSkills.slice(0, 3).map((s) => (
                <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{s}</span>
              ))}
              {career.requiredSkills.length > 3 && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                  +{career.requiredSkills.length - 3}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">No careers match your filters.</p>
      )}
    </div>
  );
};

export default CareerExplorer;
