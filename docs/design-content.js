// Frozen revision-five note values for preserving customized browser saves.
const revisionFiveNotes = {
  "loop": "Start the day by go-kart travel to the area of interest → arrive in the wide-open egg chamber at the center of a larger maze → read the daily assignment and choose equipment from the chamber store → collect glass and other accessible materials → deposit the haul through the collection system into the shared cash pool → complete research-table minigames to unlock better shop tools → use the reality gun to phase glitched objects back into existence before clearing them → uncover doors, tissue, enemies, carcasses, and clues → complete an event or equipment assignment → return through the main hallway → begin another day.\n\nDaily purchases reset each morning. Store and research progression survive day-reset anomalies, allowing quick recovery of previously unlocked capabilities. Unspent cash carryover, placed scaffolding, and exact world-reset rules remain open. The earlier waking-room / antechamber / safety-door idea can remain in the starting hub, but its position relative to go-kart travel is not fixed.\n\nConfirmed excavation sequence: Reflective glass exterior → Abandoned Utility Halls → Poolrooms → Abandoned Office → Terror Hotel → Threshold → Core. Tool sequence: hammer and scaffolding → hard-tool auger → reality-gun research → soft-tool pick → reuse hard-tool auger → solvent research → exposed core.",
  "world": "The egg chamber is a wide-open room at the center of a larger Backrooms maze. The day starts with go-kart travel to the area of interest. Maze passages can produce incoming monsters; each should have a unique silhouette, recognizable approach cues, and learnable ways to avoid it.\n\nThe sphere remains above the chasm with access extended by scaffolding. The chamber contains a shared-cash collection deposit system and equipment store. A research table may unlock shop upgrades through minigames.\n\nDoors uncovered inside the egg transport players to event spaces for puzzles or enemy evasion, then exit back into the main hallway. Anomalies may replay previous days with repeated scripts. Finding your own dead body is an intended unsettling event idea.",
  "mechanics": "Established direction — November 5, 2026\n• Begin the day with go-kart travel to the wide-open egg chamber inside a larger maze.\n• Excavate seven stages: Reflective glass exterior → Abandoned Utility Halls → Poolrooms → Abandoned Office → Terror Hotel → Threshold → Core.\n• Common materials can appear as sketch-like, glitched reality; reality-gun research enables phasing them back into existence before clearing them in the Poolrooms.\n• Earn resources through excavation and pay them into one shared team cash pool.\n• Purchased daily items reset each morning.\n• Day-reset anomalies preserve store and research progression.\n• Progress through collection milestones, directions such as find the door, and assignments to install unique equipment.\n• Hidden doors lead to puzzle or evasion event spaces and return to the main hallway.\n• Monsters can arrive from the maze; enemies or carcasses can emerge from the egg.\n• Threats need distinctive warnings so players can identify and avoid them.\n• Include secret endings and opportunities that appear across days.\n\nProposed implementation\nA research table uses minigames to unlock shop capabilities. The seven-stage order and tool assignments are confirmed. Prices, collection thresholds, research minigames, and ending conditions remain open.",
  "decisions": "Confirmed design direction\n• Working title: In to the Crackrooms.\n• The egg is spherical. Confirmed sequence: Reflective glass exterior → Abandoned Utility Halls → Poolrooms → Abandoned Office → Terror Hotel → Threshold → Core.\n• Tissue may bleed with deeper excavation.\n• Start with a hammer and scaffolding. Use the hard-tool auger in Utility Halls and again in Terror Hotel, research the reality gun for Poolrooms, acquire the soft-tool pick for Abandoned Office, and research solvent for Threshold.\n• Start the day by go-kart travel to a wide-open chamber at the center of a Backrooms maze.\n• Resource payouts and purchases use one shared team cash pool.\n• All items purchased for the day reset each morning.\n• Store and research progression survive day-reset anomalies.\n• Enemy approaches should be identifiable and avoidable.\n• Egg doors lead to event spaces and exit back into the main hallway.\n• Some days direct players to find a door or set up special equipment.\n• Secret endings are required; walking out a door and opportunities across days are route ideas.\n\nConcepts to develop\nA minigame-based research table for shop upgrades, repeated-day scripts, and discovering your own dead body. The excavation order and required tools are decided. Acquisition prices, numerical unlock thresholds, research challenges, and ending conditions remain open."
};

// Current design direction and editable starting points.
const currentDesign = {
  "notes": {
    "pitch": "Employed by a company to excavate an anomalous sphere, a research team travels into a Backrooms region that has imploded and collapsed in on itself. Digging through its seven stages uncovers resources, impossible spaces, and a living core, while research and discoveries open routes toward possible endings.",
    "loop": "Start the day by go-kart travel to the area of interest → arrive in the wide-open egg chamber at the center of a larger maze → read the daily assignment and choose equipment from the chamber store → collect glass and other accessible materials → deposit the haul through the collection system into the shared cash pool → use the full company desktop computer and its disguised research minigames to unlock the next progression capability → use the reality gun to phase glitched objects back into existence before clearing them → uncover doors, tissue, enemies, carcasses, and clues → complete an event or equipment assignment → return through the main hallway → begin another day.\n\nDaily purchases reset each morning. Store and research progression survive day-reset anomalies, allowing quick recovery of previously unlocked capabilities. Unspent cash carryover, placed scaffolding, and exact world-reset rules remain open. The earlier waking-room / antechamber / safety-door idea can remain in the starting hub, but its position relative to go-kart travel is not fixed.\n\nConfirmed excavation sequence: Reflective glass exterior → Abandoned Utility Halls → Poolrooms → Abandoned Office → Terror Hotel → Threshold → Core. Tool sequence: hammer and scaffolding → hard-tool auger → reality-gun research → soft-tool pick → reuse hard-tool auger → solvent research → exposed core.",
    "world": "The anomalous sphere is a section of the Backrooms that has imploded and collapsed in on itself. The players are part of a company-employed research team sent to excavate it. The cause of the collapse, the company’s full motives, and the relationship between the collapsed architecture and living core remain mysteries.\n\nThe egg chamber is a wide-open room at the center of a larger Backrooms maze. The day starts with go-kart travel to the area of interest. Maze passages can produce incoming monsters; each should have a unique silhouette, recognizable approach cues, and learnable ways to avoid it.\n\nThe sphere remains above the chasm with access extended by scaffolding. The chamber contains a shared-cash collection deposit system and equipment store. A full desktop computer is the research hub. Ordinary company software conceals minigames, lore, and alternate endings. Emails, folders, browser history, internal tools, and error messages form a larger desktop puzzle.\n\nDoors uncovered inside the egg transport players to event spaces for puzzles or enemy evasion, then exit back into the main hallway. Anomalies may replay previous days with repeated scripts. Finding your own dead body is an intended unsettling event idea.",
    "mechanics": "Established direction — November 5, 2026\n• Begin the day with go-kart travel to the wide-open egg chamber inside a larger maze.\n• Excavate seven stages: Reflective glass exterior → Abandoned Utility Halls → Poolrooms → Abandoned Office → Terror Hotel → Threshold → Core.\n• Common materials can appear as sketch-like, glitched reality; reality-gun research enables phasing them back into existence before clearing them in the Poolrooms.\n• Earn resources through excavation and pay them into one shared team cash pool.\n• Purchased daily items reset each morning.\n• Day-reset anomalies preserve store and research progression.\n• Progress through collection milestones, directions such as find the door, and assignments to install unique equipment.\n• Hidden doors lead to puzzle or evasion event spaces and return to the main hallway.\n• Monsters can arrive from the maze; enemies or carcasses can emerge from the egg.\n• Threats need distinctive warnings so players can identify and avoid them.\n• Include secret endings and opportunities that appear across days.\n\nProposed implementation\nComputer Research uses ordinary company software to hide progression minigames. Reality-gun research in Poolrooms and solvent research at Threshold are established gates; the specific minigames assigned to each are proposals. The seven-stage order and tool assignments are confirmed. Prices, collection thresholds, research minigames, and ending conditions remain open.",
    "decisions": "Confirmed design direction\n• Working title: In to the Crackrooms.\n• The sphere is a Backrooms region that has imploded and collapsed inward.\n• Players are company-employed researchers tasked with excavating the anomaly.\n• The collapse’s cause, company motives, and ultimate core revelation remain open.\n• The egg is spherical. Confirmed sequence: Reflective glass exterior → Abandoned Utility Halls → Poolrooms → Abandoned Office → Terror Hotel → Threshold → Core.\n• Tissue may bleed with deeper excavation.\n• Start with a hammer and scaffolding. Use the hard-tool auger in Utility Halls and again in Terror Hotel, research the reality gun for Poolrooms, acquire the soft-tool pick for Abandoned Office, and research solvent for Threshold.\n• Start the day by go-kart travel to a wide-open chamber at the center of a Backrooms maze.\n• Resource payouts and purchases use one shared team cash pool.\n• All items purchased for the day reset each morning.\n• Store and research progression survive day-reset anomalies.\n• Enemy approaches should be identifiable and avoidable.\n• Egg doors lead to event spaces and exit back into the main hallway.\n• Some days direct players to find a door or set up special equipment.\n• Secret endings are required; walking out a door and opportunities across days are route ideas.\n\nConcepts to develop\nA full company desktop acts as the Computer Research hub for progression, lore, and alternate endings. Minigame assignments, repeated-day scripts, and discovering your own dead body need further design. The excavation order and required tools are decided. Acquisition prices, numerical unlock thresholds, research challenges, and ending conditions remain open.",
    "questions": "What counts as completing a glass collection milestone?\nWhich research minigames are fun to repeat, and which should only be completed once?\nHow long does a realified object remain solid, and how is that duration communicated?\nDoes a failed research minigame cost resources, time, or only a retry?\nHow are maze threats signaled before they enter the chamber?\nWhen does an egg reveal produce an enemy versus a carcass or clue?\nWhich repeated-day scripts can be exploited once players remember them?\nWhat clue links a discovered body to the player?\nWhich exit opportunities appear across days, and how do players recognize a secret route?\nDoes unspent shared cash carry over between mornings?\nWhat baseline equipment or allowance prevents a broke team from becoming stuck?\nWho authorizes purchases from the shared pool?\nDo placed scaffolding, opened doors, excavation changes, and collected clues persist?\nHow does the starting hub and safety-door concept connect to the go-kart route?\nWhat prerequisites and prices make the auger and soft-tool pick available?\nWhich tool clears Poolrooms objects after the reality gun makes them tangible?\nHow is solvent applied, and what research challenge unlocks it?\nWhich events and secret-exit opportunities occur within each of the seven stages?"
  },
  "egg": {
    "shell": "CURRENT DIRECTION: a spherical egg with a reflective glass exterior shell. Start with a hammer to shatter the shell, collect glass, and build scaffolding for access.\n\nThe glass is the first stage of a seven-stage excavation sequence. The intervening Backrooms layers lead through wallpaper and adhesive film to the fleshy center.\n\nOpen: fracture behavior, collection milestones, scaffolding costs, and the starting equipment policy.",
    "layers": "CONFIRMED EXCAVATION SEQUENCE\n1. Reflective glass exterior: Start with a hammer to shatter the shell and build scaffolding for access.\n2. Abandoned Utility Halls: Heavy construction materials and dense piping require a hard-tool auger.\n3. Poolrooms: Glitching geometry blocks excavation. Invest in reality-gun research to phase objects back into existence before clearing them.\n4. Abandoned Office: Acquire a soft-tool pick to clear the softer office materials.\n5. Terror Hotel: Return to the hard-tool auger to excavate the hotel layer.\n6. Threshold: The final layer consists of wallpaper and adhesive film. Invest in solvent research to dissolve the bonds and peel it away.\n7. Core: Removing the wallpaper exposes the sphere’s fleshy, irritated center.\n\nThe reality gun is the researched realification tool. Its effect duration and the tool used to clear phased Poolrooms objects remain open. This sequence supersedes the earlier two-known-layers outline.",
    "core": "Removing the Threshold’s wallpaper and adhesive film exposes the sphere’s fleshy, irritated center. Soft tissue may bleed as excavation goes deeper.\n\nThe core is Stage 7, reached after reflective glass, Utility Halls, Poolrooms, Abandoned Office, Terror Hotel, and solvent-assisted removal of the Threshold. The irritation response and ultimate revelation still need design.\n\nReaching the core does not yet define the ending. Develop a main-route conclusion alongside secret exits, repeated-day clues, and discovering your own dead body. Whether alternate routes bypass the core remains open.",
    "discoveries": "Glass and other recovered materials support advancement. Some days give a specific direction such as find the door or install unique equipment.\n\nDoors inside the egg transport the team into event spaces, such as an enemy-evasion sequence or a puzzle. Those spaces exit back into the main hallway.\n\nEnemies or carcasses may appear from the egg. Finding your own dead body is an event idea to explore. Some anomalies replay previous days and repeated scripts. Store and research progression must survive those resets so the team can get back up to speed quickly.\n\nSecret endings can depend on walking out a door or acting on opportunities spread across days. Exact conditions are still to be designed.",
    "agitation": "The egg is living, breathing, and watching. Deeper tissue may bleed, and excavation can lead to enemies, carcasses, or other abnormalities appearing.\n\nThreat clarity is a design priority: distinct silhouette, approach sound, warning interval, and an observable avoidance rule. Maze-origin monsters and egg-origin manifestations should be distinguishable.\n\nStill open: which actions build agitation, whether it is local or global, how it subsides, and whether bleeding predicts danger. Suggested response structure: disturbance → recognizable warning → manifestation → counterplay → recovery.",
    "spawns": "ESTABLISHED SOURCES\n• Maze: incoming monsters emerge from the surrounding Backrooms passages.\n• Egg: enemies or carcasses can appear during excavation.\n• Event spaces: enemy evasion or puzzles after entering an uncovered door.\n• Day anomalies: repeated scripts and previous-day situations; store/research advancement survives.\n\nDRAFT ENCOUNTER IDEAS — not a final roster\nCORRIDOR RUNNER (maze): a low, fast silhouette and accelerating footsteps announce a direct charge. Proposed response: leave its line and use a side opening.\nGLASS BROOD (egg): shard-shaped silhouettes and a rising glass chime warn of an emergence. Proposed response: stop cutting and clear the marked fracture zone.\nTHE RETURNED BODY (discovery): a carcass appears with details matching your own equipment or identity. Treat this as a clue/event concept, not automatically an enemy.\n\nFor every chosen enemy define its origin, silhouette, approach cue, trigger, avoidance rule, failure consequence, and recovery. Test that the warning can be learned without relying on color alone."
  },
  "next": "Prototype go-kart arrival, a hammer shattering reflective glass, and scaffold access; then test the transition to Utility Halls and its hard-tool auger requirement.",
  "roadmap": [
    {
      "id": "layer-glass",
      "title": "Reflective glass exterior",
      "unlock": "Hammer available from the start; scaffolding provides access. Starting purchase or issued-kit policy and prices remain open.",
      "bullets": [
        "Begin the day with go-kart travel to the wide-open chamber at the center of the maze.",
        "Shatter the reflective glass exterior with a hammer and collect the fragments.",
        "Build scaffolding to reach new parts of the sphere.",
        "Introduce the deposit system, shared cash pool, shop, and recognizable maze threats."
      ]
    },
    {
      "id": "layer-utility",
      "title": "Abandoned Utility Halls",
      "unlock": "Acquire the hard-tool auger for Stage 2. Exact price and any acquisition prerequisite remain open.",
      "bullets": [
        "Expose the Abandoned Utility Halls beneath the reflective glass.",
        "Use the hard-tool auger to excavate heavy construction materials and dense piping.",
        "Clear access toward the Poolrooms; use recovered resources to fund the next capability."
      ]
    },
    {
      "id": "layer-poolrooms",
      "title": "Poolrooms",
      "unlock": "Invest in reality-gun research at Stage 3 to unlock the reality gun. Research cost and minigame remain to be designed.",
      "bullets": [
        "Reach the Poolrooms and encounter glitching geometry that blocks excavation.",
        "Invest in reality-gun research to unlock the required capability.",
        "Phase objects back into existence with the reality gun before clearing them.",
        "Define which clearing tool follows realification and how long objects remain tangible."
      ]
    },
    {
      "id": "layer-office",
      "title": "Abandoned Office",
      "unlock": "Acquire the soft-tool pick for Stage 4. Exact price and any acquisition prerequisite remain open.",
      "bullets": [
        "Reach the Abandoned Office beyond the Poolrooms.",
        "Acquire a soft-tool pick for the softer office materials.",
        "Clear the office layer to expose Terror Hotel."
      ]
    },
    {
      "id": "layer-hotel",
      "title": "Terror Hotel",
      "unlock": "Reuse the hard-tool auger introduced in Stage 2. Its availability persists; daily purchased gear still resets each morning.",
      "bullets": [
        "Reach Terror Hotel and return to the hard-tool auger.",
        "Excavate the hotel layer using the previously introduced hard-material tool.",
        "Excavate toward the Threshold using the auger’s established hard-material role."
      ]
    },
    {
      "id": "layer-threshold",
      "title": "Threshold",
      "unlock": "Invest in solvent research at Stage 6. Research unlocks the solvent capability; cost, minigame, and application method remain open.",
      "bullets": [
        "Reach the final covering: wallpaper and adhesive film.",
        "Invest in solvent research to dissolve the adhesive bonds.",
        "Apply solvent and peel away the wallpaper to expose the center."
      ]
    },
    {
      "id": "layer-core",
      "title": "Core",
      "unlock": "No additional core tool is specified. Reaching the center follows solvent research and removal of the Threshold.",
      "bullets": [
        "Removing the wallpaper exposes the sphere’s fleshy, irritated center.",
        "Deeper tissue may bleed; enemies, carcasses, and clues remain possible discoveries.",
        "Use the core reveal to develop the main-route conclusion while retaining secret exit opportunities across days.",
        "The final revelation, ending triggers, and whether a secret route can bypass the core remain open."
      ]
    }
  ],
  "buildTasks": [
    [
      "Prototype go-kart travel into the open chamber and its surrounding maze",
      0
    ],
    [
      "Teach distinct visual and audio warnings for incoming maze threats",
      2
    ],
    [
      "Connect a glass collection milestone to a research minigame and shop unlock",
      1
    ],
    [
      "Prototype temporary realification of a glitched common object",
      2
    ],
    [
      "Build an egg door event that exits into the main hallway",
      2
    ],
    [
      "Preserve shop and research unlocks through a scripted day-reset anomaly",
      3
    ],
    [
      "Prototype a special equipment assignment and a secret ending route",
      3
    ]
  ],
  "layers": [
    {
      "title": "Reflective glass exterior",
      "obstacle": "Start with a hammer to shatter the shell and build scaffolding for access."
    },
    {
      "title": "Abandoned Utility Halls",
      "obstacle": "Heavy construction materials and dense piping require a hard-tool auger."
    },
    {
      "title": "Poolrooms",
      "obstacle": "Glitching geometry blocks excavation. Invest in reality-gun research to phase objects back into existence before clearing them."
    },
    {
      "title": "Abandoned Office",
      "obstacle": "Acquire a soft-tool pick to clear the softer office materials."
    },
    {
      "title": "Terror Hotel",
      "obstacle": "Return to the hard-tool auger to excavate the hotel layer."
    },
    {
      "title": "Threshold",
      "obstacle": "The final layer consists of wallpaper and adhesive film. Invest in solvent research to dissolve the bonds and peel it away."
    },
    {
      "title": "Core",
      "obstacle": "Removing the wallpaper exposes the sphere’s fleshy, irritated center."
    }
  ],
  "researchBuffs": [
    {
      "title": "Mining speed",
      "motivation": "Make excavation more efficient by reducing the time spent breaking or clearing materials.",
      "question": "Would this affect tool action speed, damage to material, or time to clear an obstruction?"
    },
    {
      "title": "Movement speed",
      "motivation": "Move between work areas more quickly and create more room to reposition during encounters.",
      "question": "Would this improve walking speed, sprinting speed, or both?"
    },
    {
      "title": "Stamina boost",
      "motivation": "Sustain movement or exertion longer during excavation, exploration, and escapes.",
      "question": "Would this increase maximum stamina, improve recovery, or reduce stamina costs?"
    },
    {
      "title": "Aggro reduction / stealth",
      "motivation": "Attract less attention from threats and give cautious teams another reason to invest in research.",
      "question": "Would this affect noise, detection range, threat buildup, or another enemy-awareness rule?"
    }
  ],
  "researchGames": [
    {
      "id": "rhythm",
      "title": "Rhythm game",
      "software": "Equipment Calibration",
      "challenge": "Guitar Hero–style timed inputs, disguised as calibrating equipment or synchronizing signals.",
      "discovery": "Synchronization errors or an unexpected signal could hint that the equipment is communicating with something.",
      "use": "Candidate for reality-gun signal calibration. This assignment is a proposal."
    },
    {
      "id": "typing",
      "title": "Typing speed challenge",
      "software": "Company Memo Transcription",
      "challenge": "Transcribe company memos against a timer while maintaining accuracy.",
      "discovery": "Strange instructions and confidential details begin appearing inside otherwise routine text.",
      "use": "Could deliver research instructions and company lore through the same task."
    },
    {
      "id": "shapes",
      "title": "Count the Shapes",
      "software": "Visual Inspection",
      "challenge": "Count shapes in an image with overlapping outlines and increasingly distracting patterns.",
      "discovery": "A repeated shape or inconsistency could become a clue elsewhere on the desktop.",
      "use": "Candidate for inspecting unstable geometry before reality-gun research."
    },
    {
      "id": "runner",
      "title": "Dinosaur runner",
      "software": "Network Offline",
      "challenge": "A Chrome dinosaur–style runner appears when the company network goes offline.",
      "discovery": "The outage screen becomes an unexpected place to find a clue or a path into another program.",
      "use": "A possible optional discovery during downtime; whether it gates research is undecided."
    },
    {
      "id": "clicker",
      "title": "Cookie Clicker",
      "software": "Productivity Monitor",
      "challenge": "Repetitive clicking earns “productivity points,” with upgrades that change the process.",
      "discovery": "Upgrades gradually reveal what the company is actually producing.",
      "use": "A possible company-lore thread. The relationship between productivity points, research, and shared cash is open."
    },
    {
      "id": "trace",
      "title": "Draw a Perfect Circle / Trace the Shape",
      "software": "Precision Diagnostics",
      "challenge": "Precision mouse challenges with increasingly strict scoring and unsettling shapes.",
      "discovery": "Familiar calibration outlines become less ordinary as the task progresses.",
      "use": "Candidate for calibration research; score thresholds and an accessible alternative remain open."
    },
    {
      "id": "python",
      "title": "Python scripting console",
      "software": "Maintenance Console",
      "challenge": "Solve short programming challenges, repair scripts, or automate company tasks.",
      "discovery": "Exploring the console can expose hidden files and commands.",
      "use": "Could unlock an internal tool or reveal a secret route. Required programming knowledge and hints need design."
    },
    {
      "id": "captcha",
      "title": "CAPTCHA challenges",
      "software": "Employee Verification",
      "challenge": "Select matching images or increasingly obscure colors, including chartreuse, vermilion, and periwinkle.",
      "discovery": "Later prompts become suspiciously specific.",
      "use": "A possible access-control puzzle or research check. Color-based tasks need an equivalent readable path."
    },
    {
      "id": "arithmetic",
      "title": "Multiplication under pressure",
      "software": "Throughput Accounting",
      "challenge": "Answer multiplication questions before time expires while notifications and alarms compete for attention.",
      "discovery": "The distracting messages may carry useful information as well as pressure.",
      "use": "Candidate for a research calculation, such as solvent preparation. This assignment is a proposal."
    },
    {
      "id": "number",
      "title": "Guess the Number",
      "software": "Parameter Tuning",
      "challenge": "Use higher/lower clues to find a number within a limited number of guesses.",
      "discovery": "Hidden variants use patterns or clues found elsewhere on the desktop.",
      "use": "Could tune a research parameter or connect several programs into one puzzle."
    },
    {
      "id": "dialogue",
      "title": "Resistant AI dialogue",
      "software": "Company Helpdesk",
      "challenge": "Convince a stubborn company chatbot to help, disclose information, or grant access.",
      "discovery": "Company lore becomes conversational leverage: details from memos or files change what the player can ask or prove.",
      "use": "A possible research-access gate or alternate-ending route. Whether dialogue is authored, simulated, or model-driven remains open."
    }
  ]
};
