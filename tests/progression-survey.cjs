const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const context=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(__dirname,'../docs/progression-survey.js'),'utf8')+'\nglobalThis.api={progressionSurvey,surveyQuestions,surveyPacket,surveyCounts,surveyDraft};',context);
const {progressionSurvey,surveyQuestions,surveyPacket,surveyCounts,surveyDraft}=context.api;
assert.equal(progressionSurvey.sections.length,10);
assert.equal(surveyQuestions.length,40);
assert.equal(new Set(surveyQuestions.map(q=>q.id)).size,40);
assert.equal(surveyCounts().answered,0);
assert.equal(surveyCounts().agreed,0);
const blank=surveyPacket();
assert.equal((blank.match(/\[No answer recorded\]/g)||[]).length,40);
const packet=surveyPacket({team:'Workshop A',reviewDate:'2026-11-05',facilitator:'Team recorder',answers:{
 Q08:{answer:'Issue a free hammer.\nKeep research unlocks.',status:'agreed',notes:'Owner: team'},
 Q20:{answer:'Try rhythm calibration',status:'provisional',notes:'Needs a playtest'},
 Q32:{answer:' ',status:'agreed',notes:''},
 Q33:{answer:'Use the unusual door',status:'disputed',notes:'Route timing undecided'}
}});
assert.match(packet,/3\/40 answered; 1 answered and marked agreed/);
assert.match(packet,/Issue a free hammer\.\nKeep research unlocks\./);
assert.match(packet,/Status: Provisional/);assert.match(packet,/Status: Disputed/);
const openList=packet.split('## Decisions still needing agreement')[1].split('## 01')[0];
assert.ok(!openList.includes('- Q08:'));assert.ok(openList.includes('- Q20:'));assert.ok(openList.includes('- Q32:'));assert.ok(openList.includes('- Q33:'));
for(const q of surveyQuestions)assert.ok(packet.includes('### '+q.id+' — '+q.title));
assert.match(packet,/No answers have been applied to the guide/);
assert.equal(Object.keys(surveyDraft.answers).length,0);
console.log('PASS: all 40 prompts export with explicit agreement status, unanswered decisions stay open, and packet creation leaves the draft unchanged.');
