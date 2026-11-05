'use strict';
const progressionSurvey = {
  "version": 1,
  "title": "End-to-end progression review",
  "sections": [
    {
      "id": "scope",
      "title": "01 · Define the experience and destination",
      "purpose": "Agree on the scale and promise before deciding prices or thresholds.",
      "questions": [
        {
          "id": "Q01",
          "title": "Who is one complete campaign designed for?",
          "prompts": [
            "Set the intended player count, whether solo play is supported, and what a late-joining player can do.",
            "Set target minutes per workday, workdays per campaign, and total time to a first ending. Give ranges if uncertain.",
            "Are seven layers mandatory stages in one campaign, or can routes branch or bypass them?"
          ],
          "worksheet": "Players:\nSolo / late join:\nMinutes per day:\nDays and total campaign length:\nRoute structure:"
        },
        {
          "id": "Q02",
          "title": "What must the team experience before the main ending feels earned?",
          "prompts": [
            "Name the three most important accomplishments: excavation mastery, cooperation, company discovery, understanding the egg, or something else.",
            "What observable action completes the main route? Exposing the core alone is not yet a defined ending.",
            "What mystery should be answered, and what should remain unresolved?"
          ],
          "worksheet": "Three accomplishments:\nMain completion action:\nRequired revelation:\nMystery left open:"
        },
        {
          "id": "Q03",
          "title": "Which established decisions, if any, are we deliberately reopening?",
          "prompts": [
            "The established baseline is the starting point, not a vote already cast by this survey.",
            "List any change to the layer order, daily gear reset, shared cash, persistent research, event return route, or required secret endings.",
            "Record why the change is needed and which other systems it affects. Leave “None” if keeping the baseline."
          ],
          "worksheet": "Rule to revisit (or None):\nReplacement rule:\nReason and affected systems:"
        }
      ]
    },
    {
      "id": "opening",
      "title": "02 · First shift and daily rhythm",
      "purpose": "Define a teachable opening and a repeatable workday with a clear finish.",
      "questions": [
        {
          "id": "Q04",
          "title": "What is the exact playable route from spawning to the first glass fragment?",
          "prompts": [
            "Place waking rooms, camp, antechamber, safety door, go-kart ride, and egg chamber in order; remove optional steps if needed.",
            "Where is the hammer issued or purchased, and when is scaffolding introduced?",
            "Who controls the kart and door, and how can the team regroup if someone falls behind?"
          ],
          "worksheet": "Ordered opening route:\nFirst equipment and payment:\nFirst glass interaction:\nRegrouping rule:"
        },
        {
          "id": "Q05",
          "title": "What does the first shift teach, and how does the game verify it?",
          "prompts": [
            "Choose the first collection target, deposit action, shared purchase, scaffold action, and recognizable threat.",
            "What feedback proves each action worked? What must be completed before the tutorial stops directing the team?",
            "What first-shift success makes players want another day?"
          ],
          "worksheet": "Required teaching beats:\nSuccess signals:\nFirst-shift completion condition:\nNext-day hook:"
        },
        {
          "id": "Q06",
          "title": "What starts and ends a normal workday?",
          "prompts": [
            "Choose a timer, quota, explicit team return, objective completion, or a defined combination.",
            "Can the team research and shop during the shift? What happens to undeposited loot when time expires?",
            "State the last-return warning, late-player consequence, and whether leaving early is possible."
          ],
          "worksheet": "Start trigger:\nEnd trigger and warnings:\nShopping / research window:\nEarly return / late return:\nUnbanked loot:"
        },
        {
          "id": "Q07",
          "title": "How are daily directives scheduled?",
          "prompts": [
            "Which days prioritize collection, finding a door, or installing unique equipment? Are directives authored, stage-triggered, or selected from a pool?",
            "Which are mandatory for the main path, and can a team decline or repeat one?",
            "What happens if an objective is inaccessible, missed, or partly completed at reset?"
          ],
          "worksheet": "Selection rule:\nMandatory versus optional:\nCompletion reward:\nMissed / inaccessible objective recovery:"
        }
      ]
    },
    {
      "id": "economy",
      "title": "03 · Shared cash, store, and recovery",
      "purpose": "Make every required tool affordable through a defined path, including after a bad day.",
      "questions": [
        {
          "id": "Q08",
          "title": "What is the team’s starting budget and guaranteed way to earn?",
          "prompts": [
            "Give a starting cash amount, the first glass payout, and the cost of one day of essential equipment and scaffold access.",
            "Is the first hammer issued, free to reclaim, or purchased? Daily purchased items still reset under the current rule.",
            "Work through a broke-team example: how can they earn again without already owning an unaffordable tool?"
          ],
          "worksheet": "Starting cash:\nGlass payout / expected first haul:\nEssential daily costs:\nGuaranteed zero-cash recovery:"
        },
        {
          "id": "Q09",
          "title": "When can the team buy each tool, and what must it pay?",
          "prompts": [
            "For hammer, hard-tool auger, reality gun, soft-tool pick, and solvent, specify first availability, any prerequisite, research cost, and daily purchase cost.",
            "The auger returns in Terror Hotel: does its earlier unlock fully cover access, or does anything else change?",
            "Is scaffolding bought, crafted, or both? Separate durable unlocks from consumable or daily equipment."
          ],
          "worksheet": "Hammer — availability / cost:\nAuger — availability / cost:\nReality gun — research / daily cost:\nSoft-tool pick — availability / cost:\nSolvent — research / daily cost:\nScaffolding — materials / cost / access:"
        },
        {
          "id": "Q10",
          "title": "How does shared spending work under pressure?",
          "prompts": [
            "Who may spend team cash: anyone, a designated buyer, or a vote? How are purchases communicated?",
            "Can tools be shared, dropped, refunded, or recovered from a dead teammate?",
            "What prevents accidental duplicate purchases or one player spending the next mandatory unlock’s budget?"
          ],
          "worksheet": "Purchase authority:\nShared inventory and transfers:\nRefund / recovery rule:\nProtection for essential spending:"
        },
        {
          "id": "Q11",
          "title": "Does the economy support advancement rather than repetitive farming?",
          "prompts": [
            "Choose expected net earnings and required expense at each major gate; distinguish research investment from daily upkeep.",
            "Can a successful day still leave the team unable to afford its next essential tool? Show a sample balance before and after the purchase.",
            "How many unsuccessful days are tolerable before recovery assistance appears? Define the assistance, if any."
          ],
          "worksheet": "Gate / starting balance / income / upkeep / research / next kit / remaining balance:\nAcceptable repetition:\nRecovery assistance trigger and result:"
        }
      ]
    },
    {
      "id": "layers",
      "title": "04 · Write a completion contract for every layer",
      "purpose": "Fill every stage with an entry requirement, action, success signal, and next-stage trigger. A tool name alone is not a progression gate.",
      "questions": [
        {
          "id": "Q12",
          "title": "How do the layers occupy the sphere and unlock one another?",
          "prompts": [
            "Are these concentric shells, nested spaces, local excavation patches, or a mixture? Define the traversal model.",
            "Can players expose different layers in parallel, skip ahead with scaffolding, or revisit cleared areas?",
            "What state is shared across the team, and how does the game show that a transition has opened?"
          ],
          "worksheet": "Spatial model:\nGate / bypass rule:\nBacktracking and parallel work:\nShared completion signal:"
        },
        {
          "id": "Q13",
          "title": "Stage 1 · Reflective glass exterior",
          "prompts": [
            "Hammer and scaffold access are established. What first patch or amount of glass counts as meaningful completion?",
            "How does the player recognize the Utility Halls underneath, and what makes the auger available?",
            "What are the scaffold reach requirement and first hazard?"
          ],
          "worksheet": "Entry requirement:\nPlayer objective and required action:\nTool / research / resource cost:\nHazard and readable counterplay:\nProof of completion / next-stage trigger:\nReward or clue:\nTarget time / recovery after failure:"
        },
        {
          "id": "Q14",
          "title": "Stage 2 · Abandoned Utility Halls",
          "prompts": [
            "The hard-tool auger clears heavy construction materials and dense piping. What exact obstruction must be removed?",
            "What discovery introduces Poolrooms and reality-gun research? Does the research clue come before the blocker?",
            "What makes auger use a new challenge beyond holding the same input longer?"
          ],
          "worksheet": "Entry requirement:\nPlayer objective and required action:\nTool / research / resource cost:\nHazard and readable counterplay:\nProof of completion / next-stage trigger:\nReward or clue:\nTarget time / recovery after failure:"
        },
        {
          "id": "Q15",
          "title": "Stage 3 · Poolrooms",
          "prompts": [
            "Reality-gun research phases glitching objects back into existence. Which tool clears them afterward?",
            "Specify the tangible window, its visual or audio feedback, and what happens if it expires during excavation.",
            "What accomplishment opens the Abandoned Office and access to its soft-tool pick?"
          ],
          "worksheet": "Entry requirement:\nPlayer objective and required action:\nTool / research / resource cost:\nHazard and readable counterplay:\nProof of completion / next-stage trigger:\nReward or clue:\nTarget time / recovery after failure:"
        },
        {
          "id": "Q16",
          "title": "Stage 4 · Abandoned Office",
          "prompts": [
            "The soft-tool pick clears softer office materials. How is this interaction distinguishable from hammer and auger use?",
            "What evidence, material, or opening proves the layer is complete?",
            "How does the team find Terror Hotel, and what meaningful clue or event accompanies that transition?"
          ],
          "worksheet": "Entry requirement:\nPlayer objective and required action:\nTool / research / resource cost:\nHazard and readable counterplay:\nProof of completion / next-stage trigger:\nReward or clue:\nTarget time / recovery after failure:"
        },
        {
          "id": "Q17",
          "title": "Stage 5 · Terror Hotel",
          "prompts": [
            "The hard-tool auger returns. What new constraint or encounter makes reusing it interesting?",
            "How does the player distinguish an ordinary hotel door, an event door, and the route deeper?",
            "What reveals the Threshold and introduces solvent research?"
          ],
          "worksheet": "Entry requirement:\nPlayer objective and required action:\nTool / research / resource cost:\nHazard and readable counterplay:\nProof of completion / next-stage trigger:\nReward or clue:\nTarget time / recovery after failure:"
        },
        {
          "id": "Q18",
          "title": "Stage 6 · Threshold",
          "prompts": [
            "Wallpaper and adhesive film require solvent research. How is solvent applied, consumed, and replenished?",
            "What counts as dissolving a bond, and who performs the peel? Can the team act cooperatively?",
            "What exact removal exposes the core, and how is the danger of that action communicated?"
          ],
          "worksheet": "Entry requirement:\nPlayer objective and required action:\nTool / research / resource cost:\nHazard and readable counterplay:\nProof of completion / next-stage trigger:\nReward or clue:\nTarget time / recovery after failure:"
        },
        {
          "id": "Q19",
          "title": "Stage 7 · Core",
          "prompts": [
            "Removing the wallpaper exposes irritated flesh. What can the team do here, and which action is irreversible?",
            "How do bleeding, agitation, enemy or carcass discoveries, and narrative evidence support the final choice?",
            "What separates “core exposed,” “main objective complete,” and “ending achieved”?"
          ],
          "worksheet": "Entry requirement:\nPlayer objective and required action:\nTool / research / resource cost:\nHazard and readable counterplay:\nProof of completion / next-stage trigger:\nReward or clue:\nTarget time / recovery after failure:"
        }
      ]
    },
    {
      "id": "computer",
      "title": "05 · Computer Research",
      "purpose": "Assign a small set of minigames to required progression and define what success changes.",
      "questions": [
        {
          "id": "Q20",
          "title": "Which desktop challenges belong on the critical path?",
          "prompts": [
            "Assign a specific program to reality-gun research and solvent research. Use the eleven concepts in Computer Research or propose a replacement.",
            "Which remaining programs are optional lore, productivity experiments, or secret-route clues?",
            "Set challenge duration, difficulty growth, and how often each game repeats. Do not require all eleven by default."
          ],
          "worksheet": "Reality-gun program and success test:\nSolvent program and success test:\nOptional / lore / secret programs:\nDuration and repetition:"
        },
        {
          "id": "Q21",
          "title": "What happens before, during, and after a research attempt?",
          "prompts": [
            "Specify whether research requires a sample, clue, cash payment, or only reaching a stage.",
            "What does failure consume, and what does a retry preserve?",
            "What unlocks on success, and how is it shown in the shared store? Completed research survives replay-day anomalies."
          ],
          "worksheet": "Entry prerequisites:\nAttempt cost:\nFailure / retry rule:\nSuccess result and team notification:"
        },
        {
          "id": "Q22",
          "title": "How does desktop work fit cooperative play and different abilities?",
          "prompts": [
            "Can others excavate while one player researches? Does the world timer or threat continue?",
            "Can teammates assist with clues or controls, and who receives the unlock?",
            "For timing, typing, color, mouse precision, and scripting challenges, define hints or alternative routes so one skill does not unintentionally block the campaign."
          ],
          "worksheet": "World simulation during computer use:\nTeam roles and shared result:\nAssistance / alternative challenge:\nPass threshold:"
        },
        {
          "id": "Q23",
          "title": "Which desktop discovery leads somewhere consequential?",
          "prompts": [
            "Write one complete clue chain using emails, folders, browser history, internal tools, or errors.",
            "For F5 on a screen, refreshing an error, or reopening a finished program: what small inconsistency hints at the action, and what response confirms it?",
            "Name the access, lore, or ending opportunity it changes. Can the hint be revisited if missed?"
          ],
          "worksheet": "Hint and where it appears:\nPlayer inference and action:\nVisible response / discovery:\nConsequence and recovery if missed:"
        }
      ]
    },
    {
      "id": "danger",
      "title": "06 · Threats, events, and pressure",
      "purpose": "Decide how interruptions change the excavation path without making progression unreadable.",
      "questions": [
        {
          "id": "Q24",
          "title": "How does egg agitation work across a shift?",
          "prompts": [
            "Choose what increases agitation, how the team reads it, and what reduces it.",
            "What changes with depth, especially near tissue? Separate harmless feedback from a reliable danger warning.",
            "Specify one threshold response and whether players can deliberately accept the risk for a reward."
          ],
          "worksheet": "Causes and scope:\nWarning signals:\nThreshold response:\nDecay / counterplay / incentive:"
        },
        {
          "id": "Q25",
          "title": "What is the first learnable maze threat and the first egg threat?",
          "prompts": [
            "For each: origin, unique silhouette or sound, warning time, behavior, avoidance rule, and consequence.",
            "When is it first taught, and what safe feedback proves the avoidance rule?",
            "What stops threats from blocking the only deposit, store, research computer, or return path indefinitely?"
          ],
          "worksheet": "Maze threat — cue / behavior / counterplay:\nEgg threat — cue / behavior / counterplay:\nTeaching moment:\nEssential-facility recovery rule:"
        },
        {
          "id": "Q26",
          "title": "What is the minimum complete door event?",
          "prompts": [
            "Choose a puzzle or evasion event, where its door appears, and whether completion is required.",
            "Define entry conditions, party separation rules, failure, and the reward or progression flag.",
            "The event exits into the main hallway. Where does that place the team relative to the chamber, and can they re-enter?"
          ],
          "worksheet": "Door appearance and requirement:\nEvent objective:\nParty entry / separation:\nFailure and retry:\nReward / flag / hallway exit / re-entry:"
        },
        {
          "id": "Q27",
          "title": "What does a unique equipment assignment add to progression?",
          "prompts": [
            "Pick one rig and define transport, placement, setup, calibration, and operation.",
            "What unlock or discovery requires it, and who can do useful work during setup?",
            "What if it is destroyed, installed in the wrong place, or the day ends mid-operation?"
          ],
          "worksheet": "Rig and purpose:\nPrerequisite / cost:\nSetup sequence and team roles:\nCompletion signal:\nFailure / partial-progress recovery:"
        }
      ]
    },
    {
      "id": "resets",
      "title": "07 · Persistence, death, and repeated days",
      "purpose": "Write distinct rules for a normal morning, death, a team wipe, and a scripted rewind.",
      "questions": [
        {
          "id": "Q28",
          "title": "What exactly survives each kind of reset?",
          "prompts": [
            "For each event, specify shared cash, daily purchased gear, store catalogue, completed research, scaffolding, excavation, doors, clues, and ending flags.",
            "Current rules: purchased daily items reset each morning; store and research progression survive day-reset anomalies.",
            "Separate the world appearing to repeat from the player losing actual advancement."
          ],
          "worksheet": "Normal morning — cash / gear / store / research / scaffolds / excavation / doors / clues / ending flags:\nIndividual death — same fields:\nTeam wipe — same fields:\nReplay-day anomaly — same fields:\nNew campaign after ending — same fields:"
        },
        {
          "id": "Q29",
          "title": "How does a failed expedition become a recoverable next attempt?",
          "prompts": [
            "What can dead players do while teammates continue? What ends a team wipe?",
            "Where do players and equipment return, and what is the next actionable objective?",
            "Test the worst case: no cash, no daily tools, advanced layer unlocked, and an unfinished required event."
          ],
          "worksheet": "Individual death loop:\nWipe / respawn loop:\nWorst-case recovery sequence:\nMaximum progress that can be lost:"
        },
        {
          "id": "Q30",
          "title": "What is the first repeated-day anomaly’s exact script?",
          "prompts": [
            "Choose which earlier day or sequence returns and which details repeat recognizably.",
            "What contradiction tells the team something changed? How can memory help them recover quickly?",
            "What persistent unlock bypasses repeated work, and what action resolves or advances the anomaly?"
          ],
          "worksheet": "Trigger and repeated sequence:\nRecognizable repeats / contradiction:\nRetained capability and shortcut:\nResolution condition / next state:"
        },
        {
          "id": "Q31",
          "title": "What does discovering your own body mean mechanically?",
          "prompts": [
            "How does the player recognize it as their own, rather than a generic carcass?",
            "What evidence or action does it enable, and is it mandatory or optional?",
            "How does it remain coherent if players have died, changed gear, joined late, or repeated the day?"
          ],
          "worksheet": "Placement and recognition clue:\nInteraction / evidence:\nProgression consequence:\nContinuity rules:"
        }
      ]
    },
    {
      "id": "endings",
      "title": "08 · Main ending and secret routes",
      "purpose": "Define achievable completion conditions and fair signals, while keeping lore choices deliberate.",
      "questions": [
        {
          "id": "Q32",
          "title": "What is the main route from exposed core to completion?",
          "prompts": [
            "List the final objective, required clues or tools, player action, and world response in order.",
            "What is the point of no return, and does the team receive a warning?",
            "What screen, scene, or changed state clearly confirms completion? What remains playable afterward?"
          ],
          "worksheet": "Prerequisites:\nFinal action sequence:\nPoint of no return and warning:\nEnding confirmation:\nAfter the ending:"
        },
        {
          "id": "Q33",
          "title": "What is the first secret ending, written as a complete route?",
          "prompts": [
            "Choose one opportunity: walk out a particular door, act on or leave a recurring opportunity, or follow a desktop discovery.",
            "Specify earliest availability, required clues, exact action, and ending result. Can it bypass the core?",
            "What hints make it discoverable, and what happens if the opportunity is missed?"
          ],
          "worksheet": "Route name / earliest stage:\nClues and prerequisites:\nExact action:\nBypasses core?\nEnding result:\nMissed-opportunity recovery:"
        },
        {
          "id": "Q34",
          "title": "How do endings behave for a team with different choices?",
          "prompts": [
            "Does one player leaving conclude the campaign for everyone, split the party, or create a personal outcome?",
            "Can teammates disagree at the final choice, and how is a dead or disconnected player handled?",
            "Can the group pursue another ending in the same save, or must it start again?"
          ],
          "worksheet": "Decision authority / split outcomes:\nAbsent or dead teammates:\nSave state after completion:\nReplay / other-ending access:"
        },
        {
          "id": "Q35",
          "title": "How many endings belong in the first complete release?",
          "prompts": [
            "Name each planned route and the meaningful difference in its player action and revelation.",
            "Identify the minimum ending set required for a coherent first release; separate later ideas.",
            "What would make two routes feel like different endings rather than cosmetic variations?"
          ],
          "worksheet": "First-release ending set:\nDistinct actions and revelations:\nDeferred routes:\nCompletion criteria per route:"
        }
      ]
    },
    {
      "id": "walkthrough",
      "title": "09 · Stress-test the complete path",
      "purpose": "Use the decisions above to narrate an actual run and expose missing links.",
      "questions": [
        {
          "id": "Q36",
          "title": "Can we describe a successful run without saying “then progress happens”?",
          "prompts": [
            "Write an ordered path from spawn to main ending with the objective, action, reward, and unlock at every transition.",
            "Include first deposit, auger acquisition, reality-gun research, soft pick, auger reuse, solvent research, core reveal, and final choice.",
            "Place required events and anomalies; distinguish days from layers."
          ],
          "worksheet": "Day / stage → current objective → player action → cost → result → next objective:\n"
        },
        {
          "id": "Q37",
          "title": "Where does the path still break?",
          "prompts": [
            "Walk through: a required tool is unaffordable; the researcher fails repeatedly; the team misses a door; an anomaly occurs mid-research; a teammate leaves with the only tool.",
            "For each, identify the expected next action, whether progress remains possible, and any rule that must change.",
            "Check for circular prerequisites: a tool cannot require a sample only that tool can obtain."
          ],
          "worksheet": "Scenario → expected recovery → remaining gap / rule change:\n"
        },
        {
          "id": "Q38",
          "title": "What is the smallest playable test that can reject this design?",
          "prompts": [
            "Choose one start-to-finish slice that includes earning, a tool or research gate, a threat, and a clear completion signal.",
            "Set observable acceptance targets: completion time, comprehension, recovery success, and useful team participation.",
            "Name the uncertain rule the test should challenge and what result would make the team change it."
          ],
          "worksheet": "Playable slice:\nAcceptance targets:\nHighest-risk assumption:\nChange-the-design signal:\nTest owner / date:"
        }
      ]
    },
    {
      "id": "signoff",
      "title": "10 · Agree on the next revision",
      "purpose": "Make the handoff explicit so the guide reflects the team’s decisions rather than guesses.",
      "questions": [
        {
          "id": "Q39",
          "title": "Which decisions are agreed, provisional, or blocked by disagreement?",
          "prompts": [
            "Use the status selector on every answer you discussed. A written answer is not automatically an agreement.",
            "List disagreements with the competing rules and the evidence or playtest needed to choose.",
            "Assign an owner and next step to unresolved decisions that block the end-to-end path."
          ],
          "worksheet": "Blocking question IDs:\nCompeting rules:\nEvidence needed:\nOwner / next step / review date:"
        },
        {
          "id": "Q40",
          "title": "What should the next guide update adopt?",
          "prompts": [
            "List agreed question IDs to incorporate, provisional ones to label as proposals, and decisions to leave unchanged.",
            "Note contradictions with the current guide and which answer should take precedence.",
            "Identify the next prototype milestone after this review. Export the packet for the team and send it back for synthesis."
          ],
          "worksheet": "Adopt as decisions:\nKeep as proposals:\nDo not change yet:\nContradictions / precedence:\nNext prototype milestone:"
        }
      ]
    }
  ]
};
const surveyStatuses={open:'Open',provisional:'Provisional',agreed:'Agreed',test:'Needs playtest',disputed:'Disputed'};
const surveyQuestions=progressionSurvey.sections.flatMap(section=>section.questions);
const surveyDraft={team:'',reviewDate:'',facilitator:'',answers:{}};
const surveyBaseline=[
 'Layer order: Reflective glass exterior → Abandoned Utility Halls → Poolrooms → Abandoned Office → Terror Hotel → Threshold → Core.',
 'Required capabilities: hammer and scaffolding → hard-tool auger → reality-gun research → soft-tool pick → reuse hard-tool auger → solvent research → exposed fleshy core.',
 'The team uses a shared cash pool. All items purchased for the day reset each morning.',
 'Store and research progression survive replay-day anomalies. Other persistence rules still need decisions.',
 'The day starts with go-kart travel to the chamber. Embedded event spaces exit to the main hallway.',
 'Secret endings are required. Exact ending actions and conditions are still open.'
];
function surveyAnswer(id){return surveyDraft.answers[id]||{answer:'',status:'open',notes:''};}
function surveyCounts(draft=surveyDraft){const answers=surveyQuestions.map(q=>draft.answers[q.id]||{});return {answered:answers.filter(a=>a.answer?.trim()).length,agreed:answers.filter(a=>a.answer?.trim()&&a.status==='agreed').length};}
function surveyPacket(draft=surveyDraft){
 const counts=surveyCounts(draft),lines=[`# ${progressionSurvey.title}`,`Survey version: ${progressionSurvey.version}`,'',`Team: ${draft.team.trim()||'[not recorded]'}`,`Review date: ${draft.reviewDate||'[not recorded]'}`,`Facilitator / recorder: ${draft.facilitator.trim()||'[not recorded]'}`,'',`${counts.answered}/${surveyQuestions.length} answered; ${counts.agreed} answered and marked agreed.`,'','## Handoff instructions','This packet records a team discussion. Only answers explicitly marked Agreed are candidates for confirmed guide changes. Provisional, disputed, open, and playtest-dependent answers must retain their status. Flag contradictions rather than inventing a resolution. No answers have been applied to the guide by this survey.','','## Starting baseline (not new survey answers)',...surveyBaseline.map(line=>`- ${line}`),'','## Decisions still needing agreement',...surveyQuestions.filter(q=>{const a=draft.answers[q.id];return !a?.answer?.trim()||a.status!=='agreed';}).map(q=>`- ${q.id}: ${q.title}`)];
 if(counts.agreed===surveyQuestions.length)lines.push('- None recorded.');
 for(const section of progressionSurvey.sections){lines.push('',`## ${section.title}`,section.purpose);for(const q of section.questions){const a=draft.answers[q.id]||{};lines.push('',`### ${q.id} — ${q.title}`,`Status: ${surveyStatuses[a.status]||'Open'}`,'','Discussion prompts:',...q.prompts.map(prompt=>`- ${prompt}`),'','Team answer:',a.answer?.trim()||'[No answer recorded]','','Reason / dissent / owner / next step:',a.notes?.trim()||'[Not recorded]');}}
 return lines.join('\n')+'\n';
}
function survey(){const counts=surveyCounts();return heading('TEAM WORKSHOP / PROGRESSION SURVEY','Define the path from first shift to ending.','40 focused prompts across 10 discussions. Work through the route together, then export the decisions for the next guide revision.')+`
<div class="notice survey-warning"><b>Survey answers are not saved.</b> They stay in memory while you navigate this tab, but refresh, closing the tab, or reopening the site clears them. They are not included in the journal backup and are not shared with teammates. Download the decision packet before leaving. Nothing here changes the guide automatically.</div>
<section class="card survey-intro"><div class="eyebrow">HOW TO USE THIS REVIEW</div><ol><li>Agree on the destination and first shift before tuning costs.</li><li>Write a completion contract for each layer. Make every transition explicit.</li><li>Stress-test failure and alternate routes, then mark each answer’s agreement status.</li><li>Download the packet and send it back for synthesis into the guide.</li></ol><p class="small muted">Use one recorder for a shared team discussion, or compare individually exported packets. Options in the prompts are discussion starters, not preselected recommendations. “Open” is a valid outcome when the next experiment is clear.</p><div class="survey-metadata"><div class="form-field"><label for="survey-team">Team / review name</label><input id="survey-team" data-survey-meta="team" maxlength="200" value="${esc(surveyDraft.team)}" placeholder="Team progression review"></div><div class="form-field"><label for="survey-date">Review date</label><input id="survey-date" data-survey-meta="reviewDate" type="date" value="${esc(surveyDraft.reviewDate)}"></div><div class="form-field"><label for="survey-facilitator">Facilitator / recorder</label><input id="survey-facilitator" data-survey-meta="facilitator" maxlength="200" value="${esc(surveyDraft.facilitator)}"></div></div><details class="survey-baseline"><summary>Starting baseline — established guide decisions</summary><ul>${surveyBaseline.map(line=>`<li>${esc(line)}</li>`).join('')}</ul><p class="small muted">Record deliberate changes in Q03 and reconcile them in Q40. Reference: <a href="#progression">Player progression</a> · <a href="#research">Computer Research</a> · <a href="#egg">Egg dossier</a>.</p></details></section>
<div class="survey-toolbar"><span id="survey-count" role="status">${counts.answered} / ${surveyQuestions.length} answered · ${counts.agreed} agreed</span><div><button class="button secondary" type="button" data-survey-action="copy">Copy decision packet</button><button class="button" type="button" data-survey-action="download">Download decisions (.md)</button></div></div>
<nav class="survey-jumps" aria-label="Survey discussions">${progressionSurvey.sections.map(section=>`<button type="button" data-survey-section="${section.id}">${esc(section.title)}</button>`).join('')}</nav>
<div class="survey-sections">${progressionSurvey.sections.map((section,i)=>`<details class="card survey-section" id="survey-section-${section.id}" ${i===0?'open':''}><summary><span>${esc(section.title)}</span><small>${section.questions.length} prompts</small></summary><p class="survey-purpose">${esc(section.purpose)}</p>${section.questions.map(q=>{const a=surveyAnswer(q.id);return `<article class="survey-question" aria-labelledby="survey-title-${q.id}"><div class="eyebrow">${q.id}</div><h3 id="survey-title-${q.id}">${esc(q.title)}</h3><ul>${q.prompts.map(prompt=>`<li>${esc(prompt)}</li>`).join('')}</ul><div class="form-field"><label for="survey-answer-${q.id}">${q.id} · Team answer</label><textarea id="survey-answer-${q.id}" data-survey-id="${q.id}" data-survey-field="answer" maxlength="20000" rows="${section.id==='layers'?7:4}" placeholder="${esc(q.worksheet)}">${esc(a.answer)}</textarea></div><div class="survey-answer-footer"><div class="form-field"><label for="survey-status-${q.id}">${q.id} · Agreement status</label><select id="survey-status-${q.id}" data-survey-id="${q.id}" data-survey-field="status">${Object.entries(surveyStatuses).map(([value,label])=>`<option value="${value}" ${a.status===value?'selected':''}>${label}</option>`).join('')}</select></div><div class="form-field"><label for="survey-notes-${q.id}">${q.id} · Reason, dissent, owner / next step</label><textarea id="survey-notes-${q.id}" data-survey-id="${q.id}" data-survey-field="notes" maxlength="10000" rows="2" placeholder="Why this choice? What is unresolved, and who follows up?">${esc(a.notes)}</textarea></div></div></article>`;}).join('')}</details>`).join('')}</div>
<section class="card survey-finish"><h2>Bring the decisions back into the guide.</h2><p>Download the packet, review it with the team, and share it here when ready. Question IDs, agreement status, reasons, and remaining gaps are included so the next update can distinguish decisions from ideas.</p><button class="button" type="button" data-survey-action="download">Download decisions (.md)</button><p class="small muted">Refreshing this page clears the survey. A journal backup does not include these answers.</p></section>`;}
function updateSurveyInput(event){const el=event.target;
 if(el.dataset.surveyMeta&&Object.hasOwn(surveyDraft,el.dataset.surveyMeta)&&el.dataset.surveyMeta!=='answers')surveyDraft[el.dataset.surveyMeta]=el.value;
 const id=el.dataset.surveyId,key=el.dataset.surveyField;
 if(id&&surveyQuestions.some(q=>q.id===id)&&['answer','status','notes'].includes(key)){
  surveyDraft.answers[id]={...surveyAnswer(id),[key]:el.value};
  const counts=surveyCounts();const counter=document.getElementById('survey-count');if(counter)counter.textContent=`${counts.answered} / ${surveyQuestions.length} answered · ${counts.agreed} agreed`;
 }
}
async function handleSurveyClick(event){
 const jump=event.target.closest('[data-survey-section]');if(jump){const section=document.getElementById('survey-section-'+jump.dataset.surveySection);if(section){section.open=true;section.querySelector('summary').focus();section.scrollIntoView({block:'start'});}return;}
 const button=event.target.closest('[data-survey-action]');if(!button)return;
 const packet=surveyPacket();
 if(button.dataset.surveyAction==='copy'){try{await navigator.clipboard.writeText(packet);toast('Decision packet copied. Paste it into your team review or this chat.');}catch{toast('Clipboard unavailable. Download the decision packet instead.');}}
 if(button.dataset.surveyAction==='download'){const url=URL.createObjectURL(new Blob([packet],{type:'text/markdown;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download='crackrooms-progression-review-'+(surveyDraft.reviewDate||dateValue())+'.md';link.click();setTimeout(()=>URL.revokeObjectURL(url),2000);toast('Decision packet downloaded. Survey answers are still temporary.');}
}
