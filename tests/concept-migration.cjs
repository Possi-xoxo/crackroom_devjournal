const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const {randomUUID}=require('node:crypto');
const context=vm.createContext({crypto:{randomUUID}});
vm.runInContext(fs.readFileSync(require('node:path').join(__dirname,'../docs/app.js'),'utf8').split('let state=')[0]+';globalThis.api={initial,migrateConcept,legacyTasks,previousConceptNotes,previousConceptNext,previousTaskTitles};',context);
const {initial,migrateConcept,legacyTasks,previousConceptNotes,previousConceptNext,previousTaskTitles}=context.api;
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
assert.equal(migrated.tasks.find(t=>t.id==='task-1').title,'Build movement and a basic tool that removes outer junk');
const once=JSON.stringify(migrated);assert.equal(JSON.stringify(migrateConcept(migrated)),once);
const custom=oldJournal();custom.project.name='My title';assert.equal(migrateConcept(custom).project.name,'My title');
const fresh=initial();assert.equal(fresh.tasks.length,13);assert.equal(fresh.entries.length,0);assert.equal(fresh.contentRevision,2);assert.equal(fresh.tasks.filter(t=>t.done).length,0);
console.log('PASS: existing notes, entries, completed tasks, custom work, migration idempotency, and fresh defaults.');

const v1=oldJournal();v1.contentRevision=1;v1.notes={...previousConceptNotes};v1.notes.world='My customized world';v1.next=previousConceptNext;v1.tasks=previousTaskTitles.map((title,i)=>({id:'v1-'+i,title,phase:i===0?0:1,done:i===0}));
const v2=migrateConcept(v1);assert.equal(v2.notes.world,'My customized world');assert.match(v2.notes.loop,/antechamber/);assert.match(v2.notes.loop,/chamber store/);assert.match(v2.next,/safety door/);assert.equal(v2.tasks.find(t=>t.id==='v1-0').done,true);assert.equal(v2.tasks.find(t=>t.id==='v1-0').title,previousTaskTitles[0]);assert.match(v2.tasks.find(t=>t.id==='v1-1').title,/inside the egg chamber/);assert.equal(v2.tasks.filter(t=>t.title.includes('opening safety door')).length,1);assert.match(v2.egg.shell,/spherical/);assert.match(v2.egg.spawns,/proposals/);v2.egg.core='My core notes';const v2Snapshot=JSON.stringify(v2);assert.equal(JSON.stringify(migrateConcept(v2)),v2Snapshot);assert.equal(v2.egg.core,'My core notes');
console.log('PASS: chamber correction migration, completed work, editable egg dossier, and repeated-load preservation.');
