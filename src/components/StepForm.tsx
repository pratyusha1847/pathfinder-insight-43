import { useState } from "react";
import { UserProfile, SKILLS, INTERESTS, EDUCATION_LEVELS, WORK_STYLES, INDUSTRIES } from "@/data/careerData";
import { Check, ChevronRight, ChevronLeft, Sparkles } from "lucide-react";

interface StepFormProps {
  onSubmit: (profile: UserProfile) => void;
}

const STEPS = ["Education", "Skills", "Interests", "Work Style", "Industry"];

const StepForm = ({ onSubmit }: StepFormProps) => {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<UserProfile>({
    education: "",
    skills: [],
    interests: [],
    workStyles: [],
    industry: "",
  });

  const toggleItem = (key: "skills" | "interests" | "workStyles", item: string) => {
    setProfile((prev) => ({
      ...prev,
      [key]: prev[key].includes(item)
        ? prev[key].filter((i) => i !== item)
        : [...prev[key], item],
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 0: return profile.education !== "";
      case 1: return profile.skills.length >= 2;
      case 2: return profile.interests.length >= 1;
      case 3: return profile.workStyles.length >= 1;
      case 4: return true;
      default: return false;
    }
  };

  const handleNext = () => {
    if (step < STEPS.length - 1) setStep(step + 1);
    else onSubmit(profile);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                i < step
                  ? "bg-primary text-primary-foreground"
                  : i === step
                  ? "bg-primary text-primary-foreground animate-pulse-glow"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {i < step ? <Check className="w-4 h-4" /> : i + 1}
            </div>
            {i < STEPS.length - 1 && (
              <div className={`h-0.5 flex-1 transition-all duration-300 ${i < step ? "bg-primary" : "bg-muted"}`} />
            )}
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mb-2">Step {step + 1} of {STEPS.length}</p>

      {/* Step Content */}
      <div className="min-h-[320px]">
        {step === 0 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-2">What's your education level?</h2>
            <p className="text-muted-foreground mb-6">Select the highest level you've completed or are pursuing.</p>
            <div className="grid gap-3">
              {EDUCATION_LEVELS.map((level) => (
                <button
                  key={level}
                  onClick={() => setProfile({ ...profile, education: level })}
                  className={`p-4 rounded-lg border text-left transition-all duration-200 ${
                    profile.education === level
                      ? "border-primary bg-primary/5 glow-teal"
                      : "border-border hover:border-primary/50 bg-card"
                  }`}
                >
                  <span className="font-medium">{level}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-2">What are your skills?</h2>
            <p className="text-muted-foreground mb-6">Select at least 2 skills you're confident in.</p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <button
                  key={skill}
                  onClick={() => toggleItem("skills", skill)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    profile.skills.includes(skill)
                      ? "bg-primary text-primary-foreground glow-teal"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">{profile.skills.length} selected</p>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-2">What are you interested in?</h2>
            <p className="text-muted-foreground mb-6">Pick the areas that excite you most.</p>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <button
                  key={interest}
                  onClick={() => toggleItem("interests", interest)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    profile.interests.includes(interest)
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-2">How do you like to work?</h2>
            <p className="text-muted-foreground mb-6">Select your preferred work styles.</p>
            <div className="grid grid-cols-2 gap-3">
              {WORK_STYLES.map((style) => (
                <button
                  key={style}
                  onClick={() => toggleItem("workStyles", style)}
                  className={`p-4 rounded-lg border text-center transition-all duration-200 ${
                    profile.workStyles.includes(style)
                      ? "border-primary bg-primary/5 glow-teal"
                      : "border-border hover:border-primary/50 bg-card"
                  }`}
                >
                  <span className="font-medium">{style}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-2">Preferred industry?</h2>
            <p className="text-muted-foreground mb-6">Optional — helps narrow results.</p>
            <div className="grid grid-cols-2 gap-3">
              {INDUSTRIES.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setProfile({ ...profile, industry: profile.industry === ind ? "" : ind })}
                  className={`p-4 rounded-lg border text-center transition-all duration-200 ${
                    profile.industry === ind
                      ? "border-primary bg-primary/5 glow-teal"
                      : "border-border hover:border-primary/50 bg-card"
                  }`}
                >
                  <span className="font-medium">{ind}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => setStep(step - 1)}
          disabled={step === 0}
          className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground disabled:opacity-0 transition-all"
        >
          <ChevronLeft className="w-4 h-4" /> Back
        </button>
        <button
          onClick={handleNext}
          disabled={!canProceed()}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            canProceed()
              ? "gradient-teal text-primary-foreground glow-teal hover:opacity-90"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
        >
          {step === STEPS.length - 1 ? (
            <>
              <Sparkles className="w-4 h-4" /> Get Recommendations
            </>
          ) : (
            <>
              Next <ChevronRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default StepForm;
