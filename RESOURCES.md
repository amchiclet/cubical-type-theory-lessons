# Cubical Type Theory & HoTT Resources

All URLs below were verified live (July 2026). Curated for conceptual understanding by a type theorist, not for programming.

## Start here (top three)

1. [Book/notes: _Introduction to Homotopy Type Theory_ — Egbert Rijke](https://arxiv.org/abs/2212.11082)
   The best on-ramp for someone who knows ordinary type theory. Builds MLTT → univalence carefully, no homotopy prerequisite, 200+ exercises. Use for: the main throughline.
2. [Notes: _A synthetic approach to higher equalities_ — Mike Shulman](https://home.sandiego.edu/~shulman/papers/synhott.pdf)
   Prose, almost no formalism, written for philosophers. Use for: "what is this and why" before any symbols.
3. [Book: _Homotopy Type Theory: Univalent Foundations_ — the HoTT Book](https://homotopytypetheory.org/book/)
   The canonical reference. Free PDF. Use for: following proofs; read Ch. 1–2 alongside Rijke.

## Knowledge

### HoTT — introductions
- [_Introduction to Homotopy Type Theory_ — Rijke (arXiv 2212.11082)](https://arxiv.org/abs/2212.11082) — intro. Careful, exercise-driven first book.
- [_A synthetic approach to higher equalities_ — Shulman](https://home.sandiego.edu/~shulman/papers/synhott.pdf) — intro. Conceptual prose overview.
- [_Introduction to Univalent Foundations with Agda_ — Martín Escardó](https://martinescardo.github.io/HoTT-UF-in-Agda-Lecture-Notes/) — intro→intermediate. Every step spelled out; skip the Agda if you like. [arXiv mirror](https://arxiv.org/abs/1911.00580).
- [Rijke HoTT-Intro course repo](https://github.com/EgbertRijke/HoTT-Intro) — companion lectures & exercises.

### The HoTT Book
- [Official site + PDFs](https://homotopytypetheory.org/book/) — canonical reference.
- [Source / nightly builds + errata](https://github.com/HoTT/book).

### Univalence — targeted explanations
- [_The Axiom of Univalence_ — Bartosz Milewski](https://bartoszmilewski.com/2026/03/10/the-axiom-of-univalence/) — intro→intermediate. Programmer/type-theorist angle on `(A = B) ≃ (A ≃ B)`.
- [_Voevodsky's Univalence Axiom_ — Awodey, Pelayo, Warren (Notices of the AMS)](https://www.andrew.cmu.edu/user/awodey/preprints/NoticesAMS.pdf) — intro. Short, authoritative.
- [univalence axiom (nLab)](https://ncatlab.org/nlab/show/univalence+axiom) — intermediate. Precise statement; "no predicate distinguishes isomorphic types."

### Cubical Type Theory
- [_Cubical Type Theory: a constructive interpretation of the univalence axiom_ (CCHM) — Cohen, Coquand, Huber, Mörtberg](https://arxiv.org/abs/1611.02108) — advanced. The foundational paper; read after HoTT.
- [Cubical Agda docs](https://agda.readthedocs.io/en/latest/language/cubical.html) — intermediate. Interval, path types, cubical features, concisely.
- [The 1Lab](https://1lab.dev/) — intermediate→advanced. Cross-linked formalized encyclopedia; readable. (Host may block automated fetch; loads fine in a browser.)
- [EPIT 2020 Spring School repo — Mörtberg's cubical unit](https://github.com/HoTT/EPIT-2020) — lecture materials + recording links.

### Video lectures
- [Mörtberg — Cubical Agda: the interval and path types, Part 1](https://www.youtube.com/watch?v=QBxtIxsFh7U) — best cubical video intro.
- [Mörtberg — Cubical Methods in HoTT and Univalent Foundations](https://www.youtube.com/watch?v=p9ANNglWMvc) — higher-level framing talk.
- [HoTTEST Summer School 2022 (YouTube)](https://www.youtube.com/channel/UC-9jDbJ-HegCFuWuam1SfvQ) — most complete free video course. [Materials repo](https://github.com/martinescardo/HoTTEST-Summer-School).
- [Mörtberg — talks index](https://staff.math.su.se/anders.mortberg/talks.html) — hub of cubical talks & courses.

## Side quests

### Why induction holds: inductive types as initial algebras
Prompted 2026-07-15 (the "why does J / induction actually hold" question). The frame: an inductive type is the *initial algebra* of a signature functor; the recursor is the unique map out of the initial object; induction is its dependent form.
- [nLab: initial algebra of an endofunctor](https://ncatlab.org/nlab/show/initial+algebra+of+an+endofunctor) — the core notion, plus **Lambek's lemma** (initial algebra is a fixed point).
- [nLab: inductive type](https://ncatlab.org/nlab/show/inductive+type) — inductive types as initial algebras of polynomial functors; ties to W-types.
- [nLab: Knaster–Tarski theorem](https://ncatlab.org/nlab/show/Knaster-Tarski+theorem) — the order-theoretic least-fixed-point result that initial algebras generalize (the "Tarski" hunch).
- Meijer, Fokkinga, Paterson, *Functional Programming with Bananas, Lenses, Envelopes and Barbed Wire* (1991) — catamorphisms / initial-algebra recursion, the programmer's-eye view. Widely mirrored PDF; search the title.
- Awodey, *Category Theory* — initial objects and algebras, if a textbook grounding is wanted.

## Wisdom (Communities)

- [HoTT Zulip](https://hott.zulipchat.com) — the main real-time chat; friendly to both formal and informal/conceptual questions. Use for: "am I understanding univalence right?"-type questions.
- [HoTTEST Summer School Discord](https://discord.gg/tkhJ9zCGs9) — beginner-friendly, tied to the video course.
- [Homotopy Type Theory blog](https://homotopytypetheory.org/) ([links page](https://homotopytypetheory.org/links/)) — hub of expository posts.
