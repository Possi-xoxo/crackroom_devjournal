const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const {randomUUID}=require('node:crypto');
const context=vm.createContext({crypto:{randomUUID}});
vm.runInContext(fs.readFileSync(require('node:path').join(__dirname,'../docs/design-revision-four.js'),'utf8'),context);
vm.runInContext(fs.readFileSync(require('node:path').join(__dirname,'../docs/design-content.js'),'utf8'),context);
vm.runInContext(fs.readFileSync(require('node:path').join(__dirname,'../docs/lore.js'),'utf8'),context);
vm.runInContext(fs.readFileSync(require('node:path').join(__dirname,'../docs/app.js'),'utf8').split('let state=')[0]+';globalThis.api={initial,migrateConcept,legacyTasks,previousConceptNotes,previousConceptNext,previousTaskTitles,revisionTwoNotes,economyTasks,revisionThreeNotes,revisionThreeEgg,revisionThreeNext,validPlayerRoadmap,makePlayerRoadmap,revisionFourDesign,revisionFiveNotes,validResearchNotes,revisionSixLoreNotes,validLoreNotes};',context);
const {initial,migrateConcept,legacyTasks,previousConceptNotes,previousConceptNext,previousTaskTitles,revisionTwoNotes,economyTasks,revisionThreeNotes,revisionThreeEgg,revisionThreeNext,validPlayerRoadmap,makePlayerRoadmap,revisionFourDesign,revisionFiveNotes,validResearchNotes,revisionSixLoreNotes,validLoreNotes}=context.api;
function oldJournal(){return {version:1,project:{name:'BackroomsLore',tagline:'A game-building journey, one experiment at a time.'},next:'Keep my next step',notes:{pitch:'My own pitch',loop:'',world:'Existing lore',mechanics:'',decisions:'',questions:''},entries:[{id:'user-entry',title:'My real work',body:'Keep this'}],tasks:legacyTasks.map((title,i)=>({id:'task-'+i,title,phase:Math.floor(i/3),done:i===0})),updatedAt:'2026-11-02T12:00:00Z'};}
const old=oldJournal();old.tasks.push({id:'custom',title:'My custom task',phase:1,done:true});
const migrated=migrateConcept(old);
assert.equal(migrated.project.name,'In to the Crackrooms');
assert.equal(migrated.notes.pitch,'My own pitch');assert.equal(migrated.notes.world,'Existing lore');assert.equal(migrated.next,'Keep my next step');
assert.match(migrated.notes.loop,/collection system/);
assert.equal(migrated.entries[0].body,'Keep this');
assert.equal(migrated.tasks.find(t=>t.id==='task-0').title,legacyTasks[0]);assert.equal(migrated.tasks.find(t=>t.id==='task-0').done,true);
assert.equal(migrated.tasks.find(t=>t.id==='custom').done,true);
assert.equal(migrated.tasks.find(t=>t.title.startsWith('Block out')).done,false);
assert.equal(migrated.tasks.find(t=>t.id==='task-1').title,'Build movement and a basic tool that cracks the glass exterior');
const once=JSON.stringify(migrated);assert.equal(JSON.stringify(migrateConcept(migrated)),once);
const custom=oldJournal();custom.project.name='My title';assert.equal(migrateConcept(custom).project.name,'My title');
const fresh=initial();assert.equal(fresh.tasks.length,22);assert.equal(fresh.entries.length,0);assert.equal(fresh.contentRevision,7);assert.equal(fresh.tasks.filter(t=>t.done).length,0);
console.log('PASS: existing notes, entries, completed tasks, custom work, migration idempotency, and fresh defaults.');

const v1=oldJournal();v1.contentRevision=1;v1.notes={...previousConceptNotes};v1.notes.world='My customized world';v1.next=previousConceptNext;v1.tasks=previousTaskTitles.map((title,i)=>({id:'v1-'+i,title,phase:i===0?0:1,done:i===0}));
const v2=migrateConcept(v1);assert.equal(v2.notes.world,'My customized world');assert.match(v2.notes.loop,/antechamber/);assert.match(v2.notes.loop,/chamber store/);assert.match(v2.next,/go-kart/);assert.equal(v2.tasks.find(t=>t.id==='v1-0').done,true);assert.equal(v2.tasks.find(t=>t.id==='v1-0').title,previousTaskTitles[0]);assert.match(v2.tasks.find(t=>t.id==='v1-1').title,/inside the egg chamber/);assert.equal(v2.tasks.filter(t=>t.title.includes('opening safety door')).length,1);assert.match(v2.egg.shell,/spherical/);assert.match(v2.egg.spawns,/DRAFT/);v2.egg.core='My core notes';const v2Snapshot=JSON.stringify(v2);assert.equal(JSON.stringify(migrateConcept(v2)),v2Snapshot);assert.equal(v2.egg.core,'My core notes');
console.log('PASS: chamber correction migration, completed work, editable egg dossier, and repeated-load preservation.');

const savedV2=initial();savedV2.contentRevision=2;savedV2.notes={...revisionTwoNotes};savedV2.tasks=savedV2.tasks.filter(t=>!economyTasks.includes(t.title));savedV2.notes.decisions='My custom decisions';savedV2.egg.core='My custom core';savedV2.tasks[0].done=true;const taskId=savedV2.tasks[0].id;const updated=migrateConcept(savedV2);assert.equal(updated.contentRevision,7);assert.match(updated.notes.loop,/shared cash pool/);assert.match(updated.notes.loop,/reset/);assert.equal(updated.notes.decisions,'My custom decisions');assert.equal(updated.egg.core,'My custom core');assert.equal(updated.tasks.find(t=>t.id===taskId).done,true);for(const title of economyTasks)assert.equal(updated.tasks.filter(t=>t.title===title).length,1);const onceV3=JSON.stringify(updated);assert.equal(JSON.stringify(migrateConcept(updated)),onceV3);console.log('PASS: daily economy defaults migrate once and preserve customized content and completed work.');

const savedV3=initial();savedV3.contentRevision=3;delete savedV3.playerRoadmap;savedV3.notes={...revisionThreeNotes};savedV3.egg={...revisionThreeEgg};savedV3.next=revisionThreeNext;savedV3.notes.decisions='Preserve my decisions';savedV3.egg.core='Preserve my core';savedV3.entries=[{id:'existing',title:'Keep this session'}];savedV3.tasks[0].done=true;const oldTaskId=savedV3.tasks[0].id;const v4=migrateConcept(savedV3);assert.equal(v4.contentRevision,7);assert.match(v4.notes.loop,/go-kart/);assert.match(v4.notes.loop,/research/);assert.match(v4.egg.shell,/glass exterior/);assert.match(v4.egg.layers,/fleshy, irritated/i);assert.equal(v4.notes.decisions,'Preserve my decisions');assert.equal(v4.egg.core,'Preserve my core');assert.equal(v4.entries[0].title,'Keep this session');assert.equal(v4.tasks.find(t=>t.id===oldTaskId).done,true);assert.equal(v4.playerRoadmap.length,7);assert.ok(validPlayerRoadmap(v4.playerRoadmap));v4.playerRoadmap[0].bullets.push('My custom player step');v4.playerRoadmap[0].unlock='My custom unlock';const onceV4=JSON.stringify(v4);assert.equal(JSON.stringify(migrateConcept(v4)),onceV4);assert.ok(!validPlayerRoadmap([{id:'x',title:'X',unlock:'Y',bullets:[42]}]));assert.ok(!validPlayerRoadmap([{id:'x',title:'X',unlock:'Y',bullets:[]},{id:'x',title:'Z',unlock:'Y',bullets:[]}]));assert.ok(validPlayerRoadmap(JSON.parse(JSON.stringify(v4.playerRoadmap))));const freshA=makePlayerRoadmap(),freshB=makePlayerRoadmap();freshA[0].bullets.push('isolated');assert.notEqual(freshA[0].bullets.length,freshB[0].bullets.length);console.log('PASS: glass/tissue update preserves saved work, editable player roadmap, import validation, and independent defaults.');

// Revision-four backups must adopt the new order without overwriting customized writing.
function oldV4(){const s=initial();s.contentRevision=4;s.notes=structuredClone(revisionFourDesign.notes);s.egg=structuredClone(revisionFourDesign.egg);s.next=revisionFourDesign.next;s.playerRoadmap=structuredClone(revisionFourDesign.roadmap);return s;}
const layered=migrateConcept(oldV4());
assert.equal(layered.contentRevision,7);
assert.deepEqual(Array.from(layered.playerRoadmap,s=>s.title),['Reflective glass exterior','Abandoned Utility Halls','Poolrooms','Abandoned Office','Terror Hotel','Threshold','Core']);
assert.match(layered.playerRoadmap[0].unlock,/Hammer/);
assert.match(layered.playerRoadmap[1].unlock,/hard-tool auger/);
assert.match(layered.playerRoadmap[2].unlock,/reality-gun research/);
assert.match(layered.playerRoadmap[3].unlock,/soft-tool pick/);
assert.match(layered.playerRoadmap[4].unlock,/Reuse the hard-tool auger/);
assert.match(layered.playerRoadmap[5].unlock,/solvent research/);
assert.match(layered.egg.layers,/Abandoned Utility Halls/);
assert.ok(!layered.notes.mechanics.includes('two known layers'));
assert.equal(JSON.stringify(migrateConcept(layered)),JSON.stringify(layered));
const personalized=oldV4();personalized.notes.decisions='Our decisions';personalized.egg.layers='Our layer notes';personalized.next='Our next experiment';personalized.playerRoadmap[0].bullets.push('Our saved idea');personalized.tasks[0].done=true;
const savedPlan=JSON.stringify(personalized.playerRoadmap);migrateConcept(personalized);
assert.equal(personalized.notes.decisions,'Our decisions');assert.equal(personalized.egg.layers,'Our layer notes');assert.equal(personalized.next,'Our next experiment');assert.equal(JSON.stringify(personalized.playerRoadmap),savedPlan);assert.equal(personalized.tasks[0].done,true);
assert.ok(validPlayerRoadmap(personalized.playerRoadmap));
console.log('PASS: seven-stage sequence and required tools migrate, while customized plans and notes survive.');

const beforeComputer=initial();beforeComputer.contentRevision=5;delete beforeComputer.researchNotes;Object.assign(beforeComputer.notes,revisionFiveNotes);beforeComputer.notes.decisions='Custom team decision';const unchangedPlan=JSON.stringify(beforeComputer.playerRoadmap);const computer=migrateConcept(beforeComputer);
assert.equal(computer.contentRevision,7);assert.match(computer.notes.loop,/desktop computer/);assert.match(computer.notes.world,/Computer|computer/);assert.equal(computer.notes.decisions,'Custom team decision');assert.equal(JSON.stringify(computer.playerRoadmap),unchangedPlan);assert.equal(Object.keys(computer.researchNotes).length,14);assert.ok(validResearchNotes(computer.researchNotes));
computer.researchNotes.python='Repair the payroll script';computer.researchNotes.secrets='Reopen the completed memo';const computerSnapshot=JSON.stringify(computer);assert.equal(JSON.stringify(migrateConcept(computer)),computerSnapshot);assert.ok(validResearchNotes(JSON.parse(computerSnapshot).researchNotes));assert.ok(!validResearchNotes({...computer.researchNotes,python:42}));assert.ok(!validResearchNotes({...computer.researchNotes,secrets:'x'.repeat(50001)}));assert.ok(!validResearchNotes([]));assert.equal(initial().researchNotes.python,'');
console.log('PASS: Computer Research initializes for older saves, preserves custom plans and notes, and validates exported research notes.');

const beforeLore=initial();beforeLore.contentRevision=6;delete beforeLore.loreNotes;Object.assign(beforeLore.notes,revisionSixLoreNotes);beforeLore.notes.decisions='Keep our company decision';beforeLore.researchNotes.hub='Our terminal layout';beforeLore.playerRoadmap[0].bullets.push('Our stage idea');const priorPlan=JSON.stringify(beforeLore.playerRoadmap);
const withLore=migrateConcept(beforeLore);assert.equal(withLore.contentRevision,7);assert.match(withLore.notes.pitch,/Employed by a company/);assert.match(withLore.notes.world,/imploded and collapsed/);assert.equal(withLore.notes.decisions,'Keep our company decision');assert.equal(withLore.researchNotes.hub,'Our terminal layout');assert.equal(JSON.stringify(withLore.playerRoadmap),priorPlan);assert.ok(validLoreNotes(withLore.loreNotes));assert.equal(Object.keys(withLore.loreNotes).length,4);
withLore.loreNotes.origin='Our agreed collapse theory';const loreSnapshot=JSON.stringify(withLore);assert.equal(JSON.stringify(migrateConcept(withLore)),loreSnapshot);assert.ok(validLoreNotes(JSON.parse(loreSnapshot).loreNotes));assert.ok(!validLoreNotes({...withLore.loreNotes,origin:5}));assert.ok(!validLoreNotes({...withLore.loreNotes,company:'x'.repeat(50001)}));assert.equal(initial().loreNotes.origin,'');
console.log('PASS: lore premise migrates without changing custom decisions, research or roadmap; saved lore notes validate and persist.');
