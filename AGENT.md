# AGENT.md — how the entry was chosen

- 54 unique candidates came from 28 of 113 models (full-pool generation; 85 models failed on router 429/cooldowns caused by parallel sibling runs).
- Cleaned, then a shortlist of 11 by lexicographic C1–C5 scoring. Saturated clusters were dropped: recursion ("schedule another meeting"), headcount arithmetic, read-aloud email, and zombie "creator left" variants owned by a sibling entry.
- Ensemble rank panel: empty, 0/5 (the filter worked, no signal).
- glm-5.3-flash duels via `judge-call.py --priority high`:
  - #17 beat #7 2-0, margin 3+3 (clean, same entry in both positions).
  - #17 vs #1 split 1-1; both runs picked label B, which is position bias, so no signal.
- Decided on lexicographic C2: self-cancellation literally ends the meeting, while the summary line only proves it was useless after the fact. Also lean execution: 104 bytes vs 188, and the byte tie-break favors the shorter text.

The entry line is final: `I'm the recurring 9:00 AM standup that started in 2013; no one has canceled me, so I'm canceling myself.`
