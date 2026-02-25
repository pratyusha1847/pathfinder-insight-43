import { CareerMatch } from "@/data/careerData";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, PolarRadiusAxis } from "recharts";

interface MatchRadarChartProps {
  match: CareerMatch;
}

const MatchRadarChart = ({ match }: MatchRadarChartProps) => {
  const data = [
    { dimension: "Skills", value: match.skillMatch },
    { dimension: "Interest", value: match.interestMatch },
    { dimension: "Education", value: match.educationFit },
    { dimension: "Industry", value: match.industryFit },
    { dimension: "Work Style", value: match.workStyleFit },
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="text-lg font-bold mb-4">Profile Match Radar</h3>
      <ResponsiveContainer width="100%" height={280}>
        <RadarChart data={data}>
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis
            dataKey="dimension"
            tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
          />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            dataKey="value"
            stroke="hsl(175, 80%, 40%)"
            fill="hsl(175, 80%, 40%)"
            fillOpacity={0.2}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MatchRadarChart;
