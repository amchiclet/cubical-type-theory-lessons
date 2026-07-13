# Mission: Cubical Type Theory (and the HoTT it rests on)

## Why
To read a HoTT or cubical type theory proof and actually follow the argument, and to explain the core ideas (identifications, univalence, the cubical interval) to another person in plain language. The goal is a working mental model, not the ability to write cubical programs.

## Success looks like
- Can state, in own words, what the univalence axiom says and why it matters.
- Can read the sentence "types are ∞-groupoids, equalities are paths" and unpack every word correctly.
- Can follow a HoTT-style proof and say what each move (transport, ap, path induction) is doing.
- Can explain the *point* of cubical type theory: what problem in book-HoTT it solves and how the interval solves it.

## Constraints
- Background: knows ordinary (dependent) type theory well; shaky on HoTT; cannot yet explain univalence.
- Can read Agda/Coq/Lean snippets but has not written proofs — illustrate with code lightly, never require it.
- Topology background is "vague memory" (has heard of continuous deformation) — spatial intuition must be built, not assumed.
- Understands basic category theory — groupoid / functor / structure-preserving framing is fair game and often the fastest path.
- Conceptual understanding is the aim; depth of implementation is explicitly secondary.

## Out of scope (for now)
- Writing real cubical Agda / cubicaltt programs.
- The full metatheory (canonicity proofs, the cubical set model in detail).
- Category-theoretic foundations beyond what's needed for intuition.
