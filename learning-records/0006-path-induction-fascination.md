# Learner's live puzzle: why does proving refl suffice for path induction? (2026-07-14)

Flagged Lesson 5 (path algebra / J) as the one they're most curious about. The exact thing that "blows their mind": there are many ways to build paths (`ua not`, funext paths, HIT constructors like `loop`), yet path induction only asks you to handle `refl`. Why is that enough? And they explicitly asked to spell out any HoTT-vs-CTT difference.

This is a strong ZPD signal: the learner is reaching for the *justification* of J, not its mechanics. Consistent with [[0003-terminology-precision]] (wants the precise object, not a slogan) and [[0005-unprovable-vs-false]] (reasons at the internal-vs-metatheory boundary).

## The answer Lesson 5 should be built around (banked, so it doesn't drift)

1. **J does not say "all paths are refl."** Correct the framing head-on. Based path induction fixes one endpoint `a` and lets the other end `y` range free. It quantifies over the based path space `Σ(y:A). a = y`, which is **contractible** with center `(a, refl)`. Proving a property at the center of a contractible space suffices. That is the whole content of J: contractibility of the singleton / based path space, as an eliminator. Ties to Lesson 3 rung 0 (contractible).

2. **Why `ua not` doesn't break it (the payoff move).** `ua not` is a *loop*: both endpoints pinned to `Bool`. J's contractible space has one *free* endpoint, so loops never enter it. Contractibility does give `(Bool, refl) = (Bool, ua not)` in the total space `Σ(y). Bool = y`, but that path moves BOTH components (its base part is a non-trivial `Bool = Bool`). So `ua not ≠ refl` in `Bool =_𝒰 Bool` (pinned endpoints) and `(Bool,refl) = (Bool, ua not)` in the total space (free endpoint) are different types and coexist. J flattens the free-endpoint space; loops pin the endpoint and stay out of reach. This is exactly why J is consistent with a groupoid universe (loops back to [[NOTES.md]] Lesson 2/3).

3. **HoTT vs CTT — same proof principle, different operational behaviour.** Book-HoTT: J is a primitive eliminator with a *definitional* β-rule (`J..refl ≡ base`), justified by the model's contractible path spaces; but J only actually reduces on syntactic `refl`, so applied to a `ua`/funext path it gets STUCK. Same "axioms don't compute" wall as Lesson 4. Cubical (CCHM): paths are functions `I → A`, J is *derived* from transport/hcomp, so it computes on every path including `ua`/funext ones; the price is J's β-rule holds only *up to a path*, not definitionally. Honesty flag: the propositional-β point is CCHM / cubical Agda; some Cartesian-cubical variants with regularity recover definitional J-on-refl (verify against a source before asserting details).

## Design implications for Lesson 5
- Lead with the contractibility reframing, not the rule statement. The "aha" IS "refl is the center of a contractible space, not the only path."
- Use `ua not` as the worked "why doesn't this break J" example (learner already owns it from Lesson 2). The two-different-types resolution (pinned vs free endpoint) is the tangible win.
- Make the HoTT/CTT operational split explicit — this is a named mission goal and the learner asked for it directly. Reuse the Lesson 4 through-line (intensional bill → book-HoTT axioms don't run → cubical computes).
- `ap` and `transport` are the supporting cast; J + its "why refl suffices" is the spine.
