# Click: the per-constructor "bill" / algebra reading of mapping out (2026-08-13)

A run of review questions converged on a framing that produced an explicit click
("another click moment... shows the initiality picture more concretely"):
**mapping out of any inductive type = paying a bill with one line per declared
constructor, each line the constructor's type restated in the target.** Ties to
[[0009-fibres-loop-constructor-and-computation]] and the initiality thread
(see the foundations-split decision in [[NOTES.md]]).

## The sequence that got there (bank the order; it worked)
1. **Why want a hole** (L8 review): nobody declares a hole; you declare paths
   and the hole is the 2-cell you withhold. Hole = memory (S¹'s hole stores
   winding; filled = disc = amnesia). The learner had already been relying on a
   hole: `refl ≠ ua not` in `Bool = Bool` is what keeps the two dictionaries
   distinct; UIP = "fill every hole" = kills univalence (L4 cost).
2. **Legality of `fill : loop = refl`** (and even `tru = fls`): legal in a NEW
   type; declarations generate, they do not assert about existing types.
   No contradiction, only collapse: the eliminator's extra obligation blocks
   the `Code` discriminator (obligation `⊤ = ⊥` unfillable). Constructors glue,
   never tear; distinctness is earned by silence + a discriminating map, never
   declared.
3. **One-way street**: collapsing to refl always available in *recursion* (you
   own the target: `loop ↦ refl`); never the reverse (`ap f refl ≡ refl`);
   and NOT always available in *induction* (fixed family twists the obligation:
   no section of Cover since `succ n = n` fails).
4. **The general rec recipe**: one input per constructor, its type with the HIT
   replaced by X and earlier constructors by their images. Table across
   ℕ / interval / S¹ / S² / torus / quotient (respects-R!) / truncation
   (forces X to be a prop).
5. **ℕ as a HIT with an empty path section** (the click): ℕ-rec's (z, s) is the
   same bill; parity = algebra (Bool, true, not); then ℕ₂ (add
   `mod : n = suc (suc n)`) grows every bill by one line and filters maps to
   the relation-respecting ones (parity survives, double and identity die).

## Why it clicked / how to reuse
- The learner sees initiality best through **concrete algebra tuples passed as
  arguments** ((Bool, true, not)), not through diagrams alone. Reuse the "bill"
  metaphor: declaration lines = invoice lines; recursion = paying in the target.
- Follow-up question asked immediately: "pre-HIT world didn't spell out
  per-constructor arguments; how did it work before?" Answer banked: it always
  did (Martin-Löf elim rules, nat_ind's base+step, J itself), but hidden under
  (a) proof-by-induction's base/step, (b) pattern-matching clauses elaborated to
  eliminators, (c) folds/catamorphisms in FP. HITs un-disguise it because a
  path-constructor line is a *constraint between clauses*, not a branch, so
  clause syntax breaks down (cubical Agda gets it back via `f (loop i)` with
  boundary checks).
- Exercise left open: write the bill for List A and for the interval; check
  which `Bool → X` survive as maps out of the interval.
