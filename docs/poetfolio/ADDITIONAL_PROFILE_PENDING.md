# ADDITIONAL GITHUB PROFILE READINESS

**Current Status:** Awaiting secondary profile URL from user.  
**Architectural Readiness:** 100% Ready.

---

## 1. Multi-Profile Data Architecture

Poetfolio's data models in `data/projects.ts` and `components/Projects.tsx` are architected to support multiple GitHub handles without requiring any code restructuring or layout alterations.

```typescript
export interface ProjectItem {
  id: string;
  title: string;
  category: "AI & ML" | "Data Science" | "Full Stack" | "Mobile & IoT" | "All";
  description: string;
  fullDetails?: string;
  tech: string[];
  metrics?: string;
  repoUrl?: string;          // Direct GitHub link (supports any profile)
  demoUrl?: string;          // Live link if deployed
  accessRequired?: boolean;  // Triggers Request Access modal if proprietary
  authorship?: string;       // Explicit role (e.g. Lead, Debugger, Collaborator)
  githubProfile?: "mrvruser" | "vijayaregunath-t" | "secondary";
}
```

---

## 2. Ingestion Protocol When Secondary Profile Is Provided

When the user supplies the second GitHub profile handle:
1. Automated API interrogation via `https://api.github.com/users/<user>/repos`.
2. Cross-referencing against the 19 projects inventoried in `CROSS_PROJECT_INVENTORY.md`.
3. Deduplication check (identifying forks, mirrors, and renames).
4. Automated population into `data/projects.ts`.
5. Re-run `npm run build` to confirm zero TypeScript regressions.

