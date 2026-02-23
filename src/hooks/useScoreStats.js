import { useMemo } from "react";

export function useScoreStats(users, minScore) {
    return useMemo(() => {
        console.log("🔄 Recalcul des statistiques...");

        if (users.length === 0) {
            return { countAboveMin: 0, average: 0, max: 0, min: 0 };
        }

        const aboveMin = users.filter((u) => u.score >= minScore);
        const count = aboveMin.length;

        const average =
            users.reduce((sum, u) => sum + u.score, 0) / users.length;

        const max = Math.max(...users.map((u) => u.score));
        const min = Math.min(...users.map((u) => u.score));

        return { countAboveMin: count, average, max, min };
    }, [users, minScore]);
}