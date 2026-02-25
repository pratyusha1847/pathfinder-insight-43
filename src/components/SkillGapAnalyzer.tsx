import { CareerMatch } from "@/data/careerData";
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

interface SkillGapAnalyzerProps {
  match: CareerMatch;
}

const SkillGapAnalyzer = ({ match }: SkillGapAnalyzerProps) => {
  const { career, matchedSkills, missingSkills } = match;

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="text-lg font-bold mb-1">Skill Gap Analysis</h3>
      <p className="text-sm text-muted-foreground mb-4">for {career.title}</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Skills You Have */}
        <div>
          <h4 className="text-sm font-semibold flex items-center gap-2 mb-3 text-emerald">
            <CheckCircle className="w-4 h-4" /> Skills You Have
          </h4>
          <div className="space-y-2">
            {matchedSkills.length > 0 ? matchedSkills.map((s) => (
              <div key={s} className="flex items-center gap-2 text-sm p-2 bg-emerald/5 rounded-lg">
                <CheckCircle className="w-3 h-3 text-emerald" /> {s}
              </div>
            )) : (
              <p className="text-sm text-muted-foreground">No matching skills yet</p>
            )}
          </div>
        </div>

        {/* Skills to Learn */}
        <div>
          <h4 className="text-sm font-semibold flex items-center gap-2 mb-3 text-amber">
            <AlertTriangle className="w-4 h-4" /> Skills to Learn
          </h4>
          <div className="space-y-2">
            {missingSkills.length > 0 ? missingSkills.map((s) => (
              <div key={s} className="flex items-center gap-2 text-sm p-2 bg-amber/5 rounded-lg">
                <ArrowRight className="w-3 h-3 text-amber" /> {s}
              </div>
            )) : (
              <p className="text-sm text-emerald font-medium">🎉 You have all required skills!</p>
            )}
          </div>
        </div>
      </div>

      {/* Learning Roadmap */}
      {missingSkills.length > 0 && (
        <div className="mt-6 pt-4 border-t border-border">
          <h4 className="text-sm font-semibold mb-3">📚 Suggested Learning Path</h4>
          <div className="flex items-center gap-2 flex-wrap">
            {missingSkills.map((skill, i) => (
              <div key={skill} className="flex items-center gap-2">
                <span className="text-xs px-3 py-1.5 bg-primary/10 text-primary font-medium rounded-full">
                  {i + 1}. Learn {skill}
                </span>
                {i < missingSkills.length - 1 && <ArrowRight className="w-3 h-3 text-muted-foreground" />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillGapAnalyzer;
