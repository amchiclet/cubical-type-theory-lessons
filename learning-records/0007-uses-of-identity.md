# Learner probing the full role of identity, prompted by Lesson 2 (2026-07-14)

After the motivation lesson, the learner formed the model "identity's usage is about swapping things freely" (transport / substitution) and asked three questions: (1) uses of identity other than swapping? (2) any use of proving *not* identity, `¬(a = b)`? (3) complex/nested formulas of identity that show up as concrete examples?

Strong ZPD + motivation signal (consistent with [[0004-motivation-first]]): the learner is generating their own "why does this matter" questions and wants concrete payoff, and reasons precisely (ties to [[0003-terminology-precision]], [[0005-unprovable-vs-false]]).

## The framing given back (bank so lessons stay consistent)

Reframe delivered: "swapping" is only the *elimination* face of identity (transport / Leibniz: how you USE a path). The HoTT shift is that a path is also something you PRODUCE and STUDY. Three further roles:

1. **Identity as goal / specification.** The equality is the deliverable, not a tool: `reverse (reverse xs) = xs`, `optimized = naive`, `f = g` (funext), commuting diagrams / naturality. No swapping happens.
2. **Identity as object of study.** Paths that ARE the mathematics: `π₁(S¹) = ℤ` — the path space `base = base` is literally the integers (winding number). Identity types carry algebraic/topological content with no pre-HoTT analogue.
3. **Disequality `¬(a = b)` as a nontriviality detector.** `true ≠ false` (proved BY transport — connects to their swap intuition), `0 ≠ suc n`; then at path level `loop ≠ refl` = "circle has a hole", `ua not ≠ refl` = "universe is a groupoid" (Lesson 2 callback). Two precise nuggets they liked: `¬(a=b)` is always a mere prop even when `a=b` is a rich space; and the three statuses (=, ¬=, independent) from [[0005-unprovable-vs-false]].
4. **Complex/nested identity formulas = the identity type mirrors the type's structure.** Encode-decode / identity-type characterization: `((a,b)=(a',b')) ≃ (a=a')×(b=b')`, funext `(f=g) ≃ ∀x. f x = g x`, sigma with a transport. Plus the ones they already own: `isSet` = identity-between-identities, `isProp`/`isEquiv`/`A ≃ B` are all nested-identity formulas (Lesson 3).

## Lesson-worthy threads flagged (candidates, not yet scheduled)
- **Identity-type characterization / encode-decode** is strong enough to be its own lesson or a big beat in path-algebra (#5) or equivalence (#6). It also IS the machinery behind `π₁(S¹)=ℤ` in the HITs lesson (#8). Good candidate to seed before #8.
- **Disequality as nontriviality detector** folds naturally into #5 (`true ≠ false` via transport) and pays off in #8 (`loop ≠ refl`). Keep the "¬ is always a prop" + three-statuses precision.
- **Paths-as-data (`π₁(S¹)=ℤ`)** is a headline payoff for #8 (HITs); use it as the concrete "identity is the object, not the tool" example.
Consider whether these earn a new arc slot or ride inside #5/#6/#8. Decide with the learner; do not silently expand the arc (see [[0004-motivation-first]] on keeping IOUs explicit).
