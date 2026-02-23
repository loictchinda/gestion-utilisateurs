import { useMemo } from "react";

export function usePlayerStats(players, minScore) {
    return useMemo(() => {
        console.log("🔄 Recalcul des stats joueurs...");

        const filtered = players.filter((p) => p.score >= minScore);

        const countAboveMin = filtered.length;

        const average =
            filtered.length > 0
                ? filtered.reduce((sum, p) => sum + p.score, 0) / filtered.length
                : 0;

        const max = filtered.length > 0 ? Math.max(...filtered.map((p) => p.score)) : 0;
        const min = filtered.length > 0 ? Math.min(...filtered.map((p) => p.score)) : 0;

        const ranked = [...filtered]
            .sort((a, b) => b.score - a.score)
            .map((p, index) => ({
                ...p,
                rank: index + 1,
                category: p.score < 50 ? "Faible" : p.score < 80 ? "Moyen" : "Élevé",
            }));

        return { countAboveMin, average, max, min, ranked };
    }, [players, minScore]);
}