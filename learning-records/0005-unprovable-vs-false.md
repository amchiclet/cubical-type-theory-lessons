# Learner distinguishes "unprovable" from "provably false" (2026-07-13)

Reviewing Lesson 2, the learner caught that "`P Binary` has no inhabitant without univalence" was being conflated with "`P Binary` is false." They correctly noted we are not proving impossibility, only lack of a proof.

Evidence of understanding: they independently drew the constructive distinction between (a) not provable, (b) provably false (¬P inhabited), and (c) independent, and spotted that the lesson overclaimed. `Binary = Bool` is *independent* of bare MLTT: not provable and not refutable (you can refute `Bool = ⊥` via transport, but not `Binary = Bool`, since they are genuinely equivalent). Representation independence is shown non-provable by model-existence (a rigid universe where the transfer fails), not by internal refutation.

Implications: this learner reasons at the internal-vs-metatheory boundary. Future lessons can use "independent / underivable / consistent to add either way / holds in some model" language without hand-holding. Keep lesson claims precise about provable vs false vs independent, especially in the univalence (#7), funext (#9), and canonicity (#9/#11) lessons where "the axiom does not compute" and "consistent but not derivable" recur. Fixed the Lesson 2 wording accordingly. Ties to [[0003-terminology-precision]].
