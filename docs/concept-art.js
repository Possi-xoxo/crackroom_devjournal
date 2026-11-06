// Visual proposals for discussion; gallery controls do not change journal progress.
const conceptArtCollection = [
  {id:'collapse-atlas',title:'The collapsed district',category:'Environment',alt:'A huge reflective sphere suspended amid inward-curving corridors and scaffold bridges above a chasm.',caption:'A district folded inward. Broken corridors, tiny work lights and the spherical boundary establish the scale of the collapse.',question:'How much of the old maze should remain recognizable around the chamber?'},
  {id:'waking-room',title:'Before the first shift',category:'Environment',alt:'Empty company bunks and a locker containing yellow workwear, with an antechamber safety door beyond.',caption:'The company has already made a place for you. Bunks and familiar belongings lead toward the antechamber and its safety door.',question:'Which small detail would make this room feel different after a repeated day?'},
  {id:'kart-run',title:'The route to work',category:'Fieldwork',alt:'Researchers driving small utility go-karts along a fluorescent Backrooms corridor toward the excavation site.',caption:'A routine commute through an impossible workplace. Compact carts and secured equipment make the journey part of the workday.',question:'What landmarks help the team learn this route before it changes?'},
  {id:'scaffold-crew',title:'Building a way across',category:'Fieldwork',alt:'Two yellow-suited researchers secure a scaffold section beside the sphere over a deep void.',caption:'Access is something the team builds together. Clamps, braces and narrow working platforms give excavation a physical cost.',question:'Which construction actions should benefit most from a second pair of hands?'},
  {id:'deposit-machine',title:'What the machine accepts',category:'Fieldwork',alt:'Gloved hands tip reflective glass fragments onto a worn automated sorting conveyor.',caption:'Fragments become resources, then shared spending power. The deposit machine makes the collection loop tangible and satisfying.',question:'What visual or mechanical response tells the team that a valuable sample has arrived?'},
  {id:'tool-counter',title:'A tool for every obstruction',category:'Equipment',alt:'A hammer, auger, pick, reality tool and solvent kit displayed at a worn equipment counter.',caption:'Five tool silhouettes explore the established excavation gates: impact, hard material, soft material, unstable reality and adhesive bonds.',question:'Can players recognize each tool and its purpose from across the store?'},
  {id:'research-night',title:'The second pair of eyes',category:'Equipment',alt:'One researcher solves a geometric exercise on a desktop while a teammate compares a recovered paper diagram.',caption:'Ordinary company software becomes a cooperative investigation. Samples and recovered clues connect computer research to the field.',question:'What can a teammate notice that the person operating the computer cannot?'},
  {id:'maze-warning',title:'Something at the junction',category:'Anomalies',alt:'Two researchers shelter behind a pillar while a low elongated creature crosses a distant maze junction.',caption:'A threat should be identifiable before it arrives. Silhouette, disturbed dust and failing light suggest a readable warning with room to react.',question:'Which warning belongs uniquely to this creature, and what response should it teach?'},
  {id:'unstable-sample',title:'Almost solid',category:'Anomalies',alt:'A reality tool stabilizes fragments of a chair and tile that alternate between solid surfaces and wire outlines.',caption:'Common objects become uncertain material. The boundary between sketch and solid suggests a brief window for excavation after stabilization.',question:'How should the material signal that its stable window is about to end?'},
  {id:'ordinary-exit',title:'The door that was always there',category:'Environment',alt:'A lone researcher considers a slightly open ordinary door casting cool light into a yellow hallway.',caption:'A possible opportunity hides in plain sight. This study explores the restraint of a secret route without confirming what lies beyond.',question:'What earlier inconsistency would make noticing this door feel earned?'},
  {"id": "utility-breach", "title": "Through the pipework", "category": "Fieldwork", "alt": "Two researchers brace a heavy auger against compressed masonry and pipework inside the sphere.", "caption": "The Utility Halls turn excavation into a problem of access and force. Dense piping and concrete make the auger a clear step beyond the starting hammer.", "question": "How does the team recognize a useful seam among pipes that may still be active?"},
  {"id": "poolroom-alignment", "title": "A floor that will not stay", "category": "Anomalies", "alt": "A researcher stabilizes missing tiled floor sections over turquoise water while a teammate waits on solid ground.", "caption": "The Poolrooms make unstable geometry a spatial obstacle. This proposal explores how a temporary solid surface might communicate the reality tool’s effect.", "question": "Should stabilization only enable excavation, or can it briefly create safe traversal?"},
  {"id": "office-fold", "title": "An office turned inward", "category": "Environment", "alt": "Office cubicles, desks and carpet curl inward around a small excavation team using a pick.", "caption": "Recognizable office materials preserve traces of the collapsed district. Soft partitions and carpet suggest a different excavation rhythm from the Utility Halls.", "question": "Which intact workplace detail would make this layer feel inhabited before the collapse?"},
  {"id": "embedded-event-door", "title": "A room inside the wound", "category": "Environment", "alt": "Researchers uncover an ordinary hotel door in the excavation face, opening onto a much larger puzzle room.", "caption": "An embedded door interrupts the digging route with an event space. The ordinary frame makes the impossible depth behind it more unsettling.", "question": "What clue tells players this excursion will return them to the main hallway?"},
  {"id": "threshold-peel", "title": "The last ordinary surface", "category": "Fieldwork", "alt": "Gloved hands peel wallpaper and adhesive from a curved surface to reveal softly ridged organic tissue.", "caption": "Solvent research changes the final action from striking to peeling. A familiar decorative surface becomes the thin boundary around something alive.", "question": "What sound or movement should make the team hesitate before removing the next strip?"},
  {"id": "core-listening", "title": "It answers the instruments", "category": "Anomalies", "alt": "Researchers pause beside the exposed rounded core while a probe and analog instrument register a response.", "caption": "At the center, excavation becomes an encounter. A response to the team’s instruments could connect agitation, research and the question of what they have uncovered.", "question": "What observable response would distinguish curiosity, distress and an imminent spawn?"}
];
const conceptArtCategories=['All','Environment','Fieldwork','Equipment','Anomalies'];
let conceptArtFilter='All';
let artViewerItems=[];
let artViewerIndex=0;
let artViewerTrigger=null;
function conceptArtPath(item){return `assets/concept-gallery/${item.id}-v1.png`;}
function filteredConceptArt(){return conceptArtCollection.filter(item=>conceptArtFilter==='All'||item.category===conceptArtFilter);}
function conceptArtCards(){return filteredConceptArt().map((item,i)=>`<figure class="art-card"><button class="art-image-button" data-art-open="${item.id}" aria-label="Enlarge ${esc(item.title)}"><img src="${conceptArtPath(item)}" alt="${esc(item.alt)}" width="1536" height="1024" loading="${i<2?'eager':'lazy'}" decoding="async"><span class="art-enlarge" aria-hidden="true">View study ↗</span></button><figcaption><div class="art-card-meta"><span>STUDY ${String(conceptArtCollection.indexOf(item)+1).padStart(2,'0')}</span><span>${item.category}</span></div><h2>${esc(item.title)}</h2><p>${esc(item.caption)}</p><p class="art-review"><strong>Discuss</strong> ${esc(item.question)}</p><a href="${conceptArtPath(item)}" target="_blank" rel="noopener">Open full-resolution image ↗</a></figcaption></figure>`).join('');}
function conceptArtPage(){return heading('VISUAL DEVELOPMENT / CONCEPT GALLERY','Concept art','Views into an ordinary workday in an impossible place. Explore the spaces, equipment and unsettling discoveries that could shape In to the Crackrooms.')+`<div class="art-intro"><span class="tag">${conceptArtCollection.length} original studies</span><p>AI-generated visual proposals, inspired by our existing chamber artwork. Use these to discuss mood, composition and gameplay readability; details shown here remain open for the team to shape.</p></div><section aria-label="Concept art gallery"><div class="art-toolbar"><div class="art-filters" role="group" aria-label="Filter concept art">${conceptArtCategories.map(c=>`<button class="button secondary" data-art-filter="${c}" aria-pressed="${conceptArtFilter===c}">${c}</button>`).join('')}</div><p id="art-count" role="status">${filteredConceptArt().length} of ${conceptArtCollection.length} studies</p></div><div class="art-grid" id="art-grid">${conceptArtCards()}</div></section><aside class="card art-related"><h2>Keep exploring the world</h2><p>The earlier material studies and story illustrations remain alongside the ideas they explore.</p><div><a href="#egg">Seven layers in the Egg dossier ↗</a><a href="#lore">The collapse and company lore ↗</a><a href="#research">Computer Research ↗</a></div></aside>`;}
function updateArtViewer(){
 const item=artViewerItems[artViewerIndex];
 const img=document.getElementById('art-viewer-image');
 img.src=conceptArtPath(item);img.alt=item.alt;
 document.getElementById('art-viewer-title').textContent=item.title;
 document.getElementById('art-viewer-caption').textContent=item.caption;
 document.getElementById('art-viewer-question').textContent='Discuss: '+item.question;
 document.getElementById('art-viewer-position').textContent=`${artViewerIndex+1} / ${artViewerItems.length} · ${conceptArtFilter==='All'?'All studies':conceptArtFilter}`;
 document.getElementById('art-viewer-original').href=conceptArtPath(item);
}
function stepArtViewer(step){artViewerIndex=(artViewerIndex+step+artViewerItems.length)%artViewerItems.length;updateArtViewer();}
document.getElementById('content').addEventListener('click',event=>{
 const filter=event.target.closest('[data-art-filter]');
 if(filter){
  if(!conceptArtCategories.includes(filter.dataset.artFilter))return;
  conceptArtFilter=filter.dataset.artFilter;
  document.querySelectorAll('[data-art-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.artFilter===conceptArtFilter)));
  document.getElementById('art-grid').innerHTML=conceptArtCards();
  document.getElementById('art-count').textContent=`${filteredConceptArt().length} of ${conceptArtCollection.length} studies`;
 }
 const trigger=event.target.closest('[data-art-open]');
 if(trigger){
  artViewerItems=filteredConceptArt();artViewerIndex=artViewerItems.findIndex(item=>item.id===trigger.dataset.artOpen);
  if(artViewerIndex<0)return;
  artViewerTrigger=trigger;updateArtViewer();document.getElementById('art-viewer').showModal();document.getElementById('art-viewer-close').focus();
 }
});
const artViewerDialog=document.getElementById('art-viewer');
document.getElementById('art-viewer-close').addEventListener('click',()=>artViewerDialog.close());
document.getElementById('art-viewer-prev').addEventListener('click',()=>stepArtViewer(-1));
document.getElementById('art-viewer-next').addEventListener('click',()=>stepArtViewer(1));
artViewerDialog.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();stepArtViewer(event.key==='ArrowRight'?1:-1);}});
artViewerDialog.addEventListener('close',()=>{if(artViewerTrigger?.isConnected)artViewerTrigger.focus();});
window.addEventListener('hashchange',()=>{if(artViewerDialog.open)artViewerDialog.close();});
