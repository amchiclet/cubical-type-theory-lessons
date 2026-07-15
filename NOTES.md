# Working notes (teacher scratchpad)

## Learner profile (as of 2026-07-03)
- Knows ordinary dependent type theory well.
- Proof assistants: has *read* Agda/Coq/Lean, has not *written* proofs. → Code snippets OK as illustration, never required.
- Topology: "vague memory" — has heard of continuous deformation, not much more. → Build the spatial picture; don't assume paths/homotopy/π₁.
- Category theory: knows the basics. → Groupoid, functor, "structure-preserving" framing is a fast path. Use it.

## Teaching preferences (from global user CLAUDE.md — apply to lessons too)
- Plain language. No em-dashes. Never the word "load-bearing." Short sentences, simple words.
- Be a sparring partner: when the learner proposes a framing, push back before agreeing.
- Lead with the single strongest point; don't spray broad-and-shallow.
- Acknowledge uncertainty literally ("I'm guessing" / "I don't know").
- **Preferred explanatory mode (confirmed 2026-07-05): concrete before/after worked examples in spelled-out pseudocode, that make the world *without* the concept explicit.** The Bool/Binary univalence example (transport a bundle for free vs re-proving every law by hand, with the "no path exists" wall and the unprovable representation-independence principle) is the template. Offer this flavour by default when introducing a new concept; a made-up/pseudocode language is fine to avoid syntax distraction.
- **IOU / scope discipline is LOOSE (confirmed 2026-07-14).** The learner is explicitly *not* bothered if lessons go out of scope or if depth is inconsistent from lesson to lesson. When a tangent is interesting, follow it. This relaxes the "keep IOUs explicit, don't expand the arc silently" caution in [[learning-records/0004-motivation-first]]: still name what is deferred, but do not hold back an interesting digression to protect arc tidiness or uniform lesson size. Working-memory limits per lesson still apply (that is pedagogy, not scope).

## Course arc (planned; revise as we go)
1. ✅ Types as spaces — identity type = path, refl = constant path, the tower of higher paths → ∞-groupoid. [0001]
2. ✅ **Why HoTT/CTT matters — the payoff "trailer"** [0002]. Built around the Bool/Binary worked example (transport a bundle for free vs re-proving by hand; the "no path" wall; unprovable representation independence). Engine (transport) / fuel (univalence) / catch (computes only in cubical). Pairs with a later "feature" lesson (#12).
3. ✅ **h-levels** [0003]: contractible → prop → set → groupoid → … The recursive definition (each rung = all identity types one rung lower). Folded in UIP = "every type is a set," the Agda-vs-book numbering caveat, and the "Bool is a set, the universe is a groupoid" loop back to [0002]. What each rung buys (props give free equalities / proof irrelevance; sets give plain equality).
4. ✅ **The two equalities** [0004]: judgmental (≡) vs propositional (=), named precisely (≡ = what the machine believes; = = what you can prove). Anchored on `0 + n ≡ n` (free) vs `n + 0 = n` (earned), one fact two statuses. Fork = equality reflection → intensional vs extensional. Cost of the shortcut: undecidable typechecking + forces UIP (kills univalence, loops to [0002]/[0003]). Precision aside: funext is *independent*, not false (honours [[learning-records/0005-unprovable-vs-false]]). Set up the through-line: intensional creates a bill → book-HoTT pays with non-computing axioms (#7, #9) → cubical pays with computing theorems (#10–11).
5. ✅ **Path algebra: ap, transport, J** [0005]. Built around the learner's puzzle (why does refl suffice?) via J = contractibility of the based path space (refl is the *centre*, not the only path); `ua not` is a loop that pins both endpoints so it escapes J. Folded in (per 2026-07-14 decision) the **encode-decode / identity-type characterization** thread from [[learning-records/0007-uses-of-identity]]: `true ≠ false` proved by transport = the baby case, generalised to `(x=y) ≃ Code x y` and the pattern table (product/funext/sigma). Closed with the HoTT-vs-CTT operational split on J (definitional-β-but-stuck vs computes-but-propositional-β). Spine: "J is the engine, contractibility is why it's allowed, encode-decode is what it builds, cubical is what makes it run." Deferred to #8: `π₁(S¹)=ℤ` (paths-as-data payoff). See [[learning-records/0006-path-induction-fascination]].
6. Equivalence: what makes a function an equivalence (and why "iso" needs care).
7. Univalence: (A ≃ B) ≃ (A = B). Statement, intuition, why it's an axiom in book-HoTT. Representation independence / transport-across-≃ payoff. Generalizes propositional extensionality.
8. **Higher inductive types (HITs):** constructors for paths, not just points. Quotients without setoid hell, the circle, truncations. (Half the motivation from #2 gets paid off here.)
9. Function extensionality + "axioms don't compute" (canonicity breaks; transport along ua / funext gets stuck). THE motivator for cubical.
10. Cubical fix: the interval I, paths as functions I → A, funext for free (a one-liner that runs).
11. Kan operations (transport/hcomp) and Glue → univalence becomes a theorem that computes.
12. **Feature payoff lesson:** the #2 payoffs now running in cubical — verified programs across representations, quotient types, structure identity principle — proofs that actually normalize.

Confirmed learner interests to honour:
- (2026-07-03) intensional/extensional distinction + extensionality principles (funext) explicit → #4, #9. See [[learning-records/0002-extensionality-interest]].
- (2026-07-05) wants a "why this matters / what programs it enables" motivation grounding → trailer #2 + feature #12, and HITs #8 added. See [[learning-records/0004-motivation-first]].
- (2026-07-14) most curious about path induction: "why does refl suffice when there are so many other paths?" + wants the HoTT/CTT difference spelled out → shaped #5 (done). See [[learning-records/0006-path-induction-fascination]].
- (2026-07-14) probing the full role of identity (uses beyond swapping; proving ¬identity; nested identity formulas) → encode-decode folded into #5; `π₁(S¹)=ℤ` reserved for #8. See [[learning-records/0007-uses-of-identity]].

## Lesson design reminders
- One tangible win per lesson. Keep inside working memory.
- Retrieval practice (recall before reveal), space & interleave across sessions.
- Quiz answers: equal length, no formatting tells.
- Every lesson: primary source + "ask your teacher" reminder + cross-links.
