// Current design direction and editable player-roadmap starting points.
const currentDesign = {
  "notes": {
    "pitch": "A research team travels by go-kart into a wide-open chamber at the center of a Backrooms maze to excavate a glass-shelled, living sphere. Shared earnings and persistent research open new tools, hidden event doors, and routes toward multiple endings.",
    "loop": "Start the day by go-kart travel to the area of interest → arrive in the wide-open egg chamber at the center of a larger maze → read the daily assignment and choose equipment from the chamber store → collect glass and other accessible materials → deposit the haul through the collection system into the shared cash pool → complete research-table minigames to unlock better shop tools → temporarily realify glitched materials and break them → uncover doors, tissue, enemies, carcasses, and clues → complete an event or equipment assignment → return through the main hallway → begin another day.\n\nDaily purchases reset each morning. Store and research progression survive day-reset anomalies, allowing quick recovery of previously unlocked capabilities. Unspent cash carryover, placed scaffolding, and exact world-reset rules remain open. The earlier waking-room / antechamber / safety-door idea can remain in the starting hub, but its position relative to go-kart travel is not fixed.",
    "world": "The egg chamber is a wide-open room at the center of a larger Backrooms maze. The day starts with go-kart travel to the area of interest. Maze passages can produce incoming monsters; each should have a unique silhouette, recognizable approach cues, and learnable ways to avoid it.\n\nThe sphere remains above the chasm with access extended by scaffolding. The chamber contains a shared-cash collection deposit system and equipment store. A research table may unlock shop upgrades through minigames.\n\nDoors uncovered inside the egg transport players to event spaces for puzzles or enemy evasion, then exit back into the main hallway. Anomalies may replay previous days with repeated scripts. Finding your own dead body is an intended unsettling event idea.",
    "mechanics": "Established direction — November 5, 2026\n• Begin the day with go-kart travel to the wide-open egg chamber inside a larger maze.\n• Excavate two known layers: a glass exterior shell and a soft tissue center that may bleed as digging goes deeper.\n• Common materials can appear as sketch-like, glitched reality; a researched tool temporarily realifies them so they can be cracked open.\n• Earn resources through excavation and pay them into one shared team cash pool.\n• Purchased daily items reset each morning.\n• Day-reset anomalies preserve store and research progression.\n• Progress through collection milestones, directions such as find the door, and assignments to install unique equipment.\n• Hidden doors lead to puzzle or evasion event spaces and return to the main hallway.\n• Monsters can arrive from the maze; enemies or carcasses can emerge from the egg.\n• Threats need distinctive warnings so players can identify and avoid them.\n• Include secret endings and opportunities that appear across days.\n\nProposed implementation\nA research table uses minigames to unlock shop capabilities. Tool names, milestone order, thresholds, prices, and exact minigames are editable proposals in Player progression.",
    "decisions": "Confirmed design direction\n• Working title: In to the Crackrooms.\n• The egg is spherical, with two known layers: glass exterior and soft tissue center.\n• Tissue may bleed with deeper excavation.\n• Glitched common materials require a researched realification tool before they can be broken.\n• Start the day by go-kart travel to a wide-open chamber at the center of a Backrooms maze.\n• Resource payouts and purchases use one shared team cash pool.\n• All items purchased for the day reset each morning.\n• Store and research progression survive day-reset anomalies.\n• Enemy approaches should be identifiable and avoidable.\n• Egg doors lead to event spaces and exit back into the main hallway.\n• Some days direct players to find a door or set up special equipment.\n• Secret endings are required; walking out a door and opportunities across days are route ideas.\n\nConcepts to develop\nA minigame-based research table for shop upgrades, repeated-day scripts, and discovering your own dead body. The exact tool roster, objective sequence, unlock thresholds, and ending conditions are proposals.",
    "questions": "What counts as completing a glass collection milestone?\nWhich research minigames are fun to repeat, and which should only be completed once?\nHow long does a realified object remain solid, and how is that duration communicated?\nDoes a failed research minigame cost resources, time, or only a retry?\nHow are maze threats signaled before they enter the chamber?\nWhen does an egg reveal produce an enemy versus a carcass or clue?\nWhich repeated-day scripts can be exploited once players remember them?\nWhat clue links a discovered body to the player?\nWhich exit opportunities appear across days, and how do players recognize a secret route?\nDoes unspent shared cash carry over between mornings?\nWhat baseline equipment or allowance prevents a broke team from becoming stuck?\nWho authorizes purchases from the shared pool?\nDo placed scaffolding, opened doors, excavation changes, and collected clues persist?\nHow does the starting hub and safety-door concept connect to the go-kart route?"
  },
  "egg": {
    "shell": "CURRENT DIRECTION: a spherical egg with a glass exterior shell. Glass collection is the first clear excavation reward and progression driver. This replaces the earlier mostly-junk outer-shell concept. Backrooms remnants and ordinary objects may still occur within the sphere.\n\nQuestions: How does glass fracture? What is collected, what is hazardous, and which thicknesses need a better tool? Can players see hints of the center through unbroken glass?",
    "layers": "TWO KNOWN LAYERS\n1. Glass exterior shell: initial collection and cracking progression.\n2. Soft tissue center: exposed by deeper excavation; it may bleed as the team digs further.\n\nGlitched common materials are embedded components, not a confirmed third layer. They appear sketch-like or partly unreal. A researched tool realifies them temporarily, creating a window in which they can be cracked open.\n\nThe mystery can still combine a living presence and connections between realities. What lies at the ultimate core is unresolved.",
    "core": "We are searching through a living sphere whose center is soft tissue and whose contents can connect to other realities. Reaching tissue does not yet explain the ultimate mystery.\n\nThe desired progression should keep the team digging: glass milestones → new research and tools → access to glitched materials → hidden doors and deeper tissue → clues to possible endings.\n\nOpen: What is the final revelation? Is it necessary to fully excavate the center, or can understanding an exit opportunity conclude a run? How does finding your own dead body change what you believe about previous days?",
    "discoveries": "Glass and other recovered materials support advancement. Some days give a specific direction such as find the door or install unique equipment.\n\nDoors inside the egg transport the team into event spaces, such as an enemy-evasion sequence or a puzzle. Those spaces exit back into the main hallway.\n\nEnemies or carcasses may appear from the egg. Finding your own dead body is an event idea to explore. Some anomalies replay previous days and repeated scripts. Store and research progression must survive those resets so the team can get back up to speed quickly.\n\nSecret endings can depend on walking out a door or acting on opportunities spread across days. Exact conditions are still to be designed.",
    "agitation": "The egg is living, breathing, and watching. Deeper tissue may bleed, and excavation can lead to enemies, carcasses, or other abnormalities appearing.\n\nThreat clarity is a design priority: distinct silhouette, approach sound, warning interval, and an observable avoidance rule. Maze-origin monsters and egg-origin manifestations should be distinguishable.\n\nStill open: which actions build agitation, whether it is local or global, how it subsides, and whether bleeding predicts danger. Suggested response structure: disturbance → recognizable warning → manifestation → counterplay → recovery.",
    "spawns": "ESTABLISHED SOURCES\n• Maze: incoming monsters emerge from the surrounding Backrooms passages.\n• Egg: enemies or carcasses can appear during excavation.\n• Event spaces: enemy evasion or puzzles after entering an uncovered door.\n• Day anomalies: repeated scripts and previous-day situations; store/research advancement survives.\n\nDRAFT ENCOUNTER IDEAS — not a final roster\nCORRIDOR RUNNER (maze): a low, fast silhouette and accelerating footsteps announce a direct charge. Proposed response: leave its line and use a side opening.\nGLASS BROOD (egg): shard-shaped silhouettes and a rising glass chime warn of an emergence. Proposed response: stop cutting and clear the marked fracture zone.\nTHE RETURNED BODY (discovery): a carcass appears with details matching your own equipment or identity. Treat this as a clue/event concept, not automatically an enemy.\n\nFor every chosen enemy define its origin, silhouette, approach cue, trigger, avoidance rule, failure consequence, and recovery. Test that the warning can be learned without relying on color alone."
  },
  "next": "Prototype the go-kart arrival and first glass collection assignment, then connect one research minigame to a persistent shop unlock and a daily item purchase.",
  "roadmap": [
    {
      "id": "arrival",
      "title": "Arrival — learn the room and collect glass",
      "unlock": "Starter glass-breaking tool and collection kit available from the first shift. Baseline issue versus purchase remains to decide.",
      "bullets": [
        "Begin with go-kart travel to the wide-open chamber at the center of the maze.",
        "Introduce the sphere, deposit system, shared cash pool, store, and routes back to the main hallway.",
        "Give a simple collect-glass assignment with a clear completion signal.",
        "Teach one recognizable incoming maze threat and its avoidance rule."
      ]
    },
    {
      "id": "glass",
      "title": "First advancement — turn glass into research",
      "unlock": "Precision glass cutter after the first glass milestone and research-table calibration.",
      "bullets": [
        "Make glass collection unlock a concrete next objective rather than only increasing cash.",
        "Introduce the research table with a short calibration or pattern-matching minigame.",
        "Successful research adds the improved cutter to the persistent store catalogue.",
        "Players purchase the daily instance of the tool using shared cash; exact prices and thresholds remain open."
      ]
    },
    {
      "id": "realifier",
      "title": "Glitched materials — learn to realify",
      "unlock": "Realifier after recovering a glitched sample and completing a signal-alignment research minigame.",
      "bullets": [
        "Expose a familiar object that appears sketched, incomplete, or displaced in reality.",
        "Explain through feedback that ordinary impacts cannot reliably break it.",
        "Research the Realifier, temporarily stabilize the object, and crack it during the solid window.",
        "Reveal a useful component or route that justifies further excavation."
      ]
    },
    {
      "id": "door",
      "title": "Find the door — the first event space",
      "unlock": "Door/route scanner after completing the first door event and researching its recovered data.",
      "bullets": [
        "Use a daily directive such as find the door to redirect the usual collection routine.",
        "Uncover and enter a door embedded in the sphere.",
        "Complete a contained puzzle or readable enemy-evasion challenge.",
        "Exit the event space back into the main hallway, then reconnect with the chamber."
      ]
    },
    {
      "id": "tissue",
      "title": "Living center — deeper work has consequences",
      "unlock": "Tissue sampling tool after first tissue exposure and a sample-handling research minigame.",
      "bullets": [
        "Break through enough glass to reveal the soft tissue center.",
        "Introduce bleeding as a visible consequence of deeper excavation.",
        "Stage an egg-origin enemy or carcass reveal with distinct warning cues.",
        "Give the team a reason to continue: a research sample, meaningful clue, or new embedded door."
      ]
    },
    {
      "id": "equipment",
      "title": "Special assignments — install and operate",
      "unlock": "Specialized field rig after relevant event data is researched; the daily assignment selects its purpose.",
      "bullets": [
        "Issue an occasional directive to set up unique equipment rather than only collect material.",
        "Coordinate transport, placement, setup, and a short calibration minigame.",
        "Use the rig to access a blocked discovery or observe an egg reaction.",
        "Make the benefit and the risk of the setup legible to the whole team."
      ]
    },
    {
      "id": "replay",
      "title": "The day repeats — use what you remember",
      "unlock": "Previously researched tools and store upgrades remain unlocked; reacquire the daily gear without redoing research.",
      "bullets": [
        "Replay an earlier day with recognizable scripts, dialogue, or event timing.",
        "Let remembered patterns help the team regain progress quickly.",
        "Keep store and research advancement intact through the anomaly.",
        "Introduce a contradiction such as discovering your own dead body, and seed an alternate exit opportunity."
      ]
    },
    {
      "id": "conclusion",
      "title": "Conclusion — choose what leaving means",
      "unlock": "No mandatory final tool specified yet; ending access follows accumulated clues and recognized opportunities.",
      "bullets": [
        "Main-route proposal: combine deeper excavation and event clues to understand an available way out.",
        "Secret-route proposal: walk out through a door when its meaning or timing becomes clear.",
        "Alternate-route proposal: act on, or deliberately leave, an opportunity that recurs across days.",
        "Pay off the repeated-day and body discoveries through the route taken; define explicit completion feedback for each ending.",
        "Keep the exact core revelation, ending count, and conditions open for further writing."
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
  ]
};
