---
sidebar_position: 2
title: Course curriculum
description: Structure and learning objectives for the GB Studio Master Course.
---

# Course curriculum

The course contains 24 project-driven chapters. Each chapter combines a mental model, technical context, a guided workshop, common failure modes, an exercise, a mastery check, and links to the relevant reference documentation.

[Start the Master Course](./course-en)

## Part 1: Foundations and working environment

Start by mastering installation, the edit-build-test loop, project structure, backups, version control, and the editor itself. The goal is to remove the “black box” feeling before you build larger systems.

### 1. Installation, your first project, and the feedback loop
**Level:** Beginner  
**Suggested time:** 60-90 min  
**Goal:** Install the correct build, run a known-good project, make a visible change, and prove the edit → build → run → observe cycle.

### 2. Project anatomy, saving, backups, and Git
**Level:** Beginner  
**Suggested time:** 90 min  
**Goal:** Understand source files, generated output, backup recovery, and version-control workflow.

### 3. Editor interface, Navigator, Project Views, and shortcuts
**Level:** Beginner  
**Suggested time:** 2 h  
**Goal:** Navigate quickly and understand what each editor region is responsible for.

### 4. Scenes and scene types
**Level:** Beginner → Intermediate  
**Suggested time:** 2-3 h  
**Goal:** Choose the correct movement and physics foundation before scripting.

## Part 2: World building and assets

### 5. Backgrounds, tiles, camera bounds, parallax, and seamless transitions
**Level:** Intermediate — 3-4 h  
Build efficient backgrounds and use camera, parallax, and common tilesets deliberately.

### 6. Collisions, player, movement, and controls
**Level:** Beginner → Intermediate — 2-3 h  
Create predictable movement by separating scene collision, player setup, engine settings, and controls.

### 7. Actors, triggers, collision groups, and responsibilities
**Level:** Beginner → Intermediate — 3 h  
Design scene entities and spatial events with clear ownership.

### 8. Sprites, animation states, origins, and collision boxes
**Level:** Intermediate — 3-4 h  
Create efficient animated sprites with predictable alignment and collision.

### 9. Color modes, palettes, automatic color, and tile priority
**Level:** Intermediate — 3 h  
Create color art that respects palette rules and intended device compatibility.

### 10. Music, sound effects, UI assets, and fonts
**Level:** Intermediate — 3-4 h  
Build clear audiovisual feedback and robust text/UI assets.

## Part 3: Logic, state, and architecture

### 11. Scripting fundamentals: events, execution order, and entry points
**Level:** Beginner → Intermediate — 3 h  
Understand when scripts run and build predictable event sequences.

### 12. Variables, Script Values, and math expressions
**Level:** Intermediate — 4 h  
Model game state and calculations clearly and safely.

### 13. Control flow: If, Switch, loops, and stopping execution
**Level:** Intermediate — 3 h  
Choose structures that keep logic readable and terminating.

### 14. Dialogue, menus, text variables, and runtime formatting
**Level:** Intermediate — 3 h  
Build dynamic text and menus that reflect state without duplication.

### 15. Custom Scripts and Prefabs
**Level:** Intermediate → Advanced — 4 h  
Turn repeated behavior and entity setup into single sources of truth.

### 16. State architecture: quests, inventory, and persistence
**Level:** Intermediate → Advanced — 4 h  
Design canonical state that remains correct across scene reloads and saves.

## Part 4: Debugging, performance, and release

### 17. Debugger, breakpoints, watched variables, and Build Log
**Level:** Intermediate — 3-4 h  
Investigate bugs using runtime evidence instead of random edits.

### 18. VRAM, scene limits, and data-driven optimization
**Level:** Advanced — 4 h  
Understand disappearing sprites, tile pressure, and measured optimization.

### 19. Builds, exports, release testing, and distribution
**Level:** Intermediate — 3 h  
Generate ROM/web/Pocket output and validate the exact artifact players receive.

## Part 5: Advanced extension and professional practice

### 20. Plugins: assets, script events, engine fields, and scene types
**Level:** Advanced — 5-8 h  
Understand reusable extensions and when they are preferable to lower-level engine forks.

### 21. GBVM, Engine Eject, and the abstraction ladder
**Level:** Advanced — 6-10 h  
Read lower-level behavior and decide when direct VM/engine control is justified.

### 22. Capstone 1: Lost Cartridge
**Level:** All levels — 6-10 h  
Integrate world, state, dialogue, reuse, debugging, and export into a complete vertical slice.

### 23. Capstone 2: polished short platformer
**Level:** All levels — 6-10 h  
Apply platformer settings, collision, animation, checkpoints, debugging, and tuning.

### 24. Professional workflow and upstream contribution
**Level:** Advanced — 4-6 h  
Prepare projects and contributions so another person can reproduce, review, and maintain them.

## Design principles

- The reference documentation remains the source of truth for current behavior and limits.
- Exercises are deliberately small so learners can isolate cause and effect.
- Advanced layers are introduced only after normal editor workflows, reusable scripts, debugging, and optimization.
- The course treats release testing, reproducibility, and contribution hygiene as part of the technical skill set.
- Course source stays in Markdown so it can be reviewed, translated, printed, and evolved with the rest of the documentation.
