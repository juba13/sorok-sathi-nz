window.EN = window.EN || {tabs:{}, subs:{}};
Object.assign(EN.tabs, {
  users:{title:'Crossings and Other Road Users', intro:'Pedestrians, schools, railways, cyclists (new 1.5 m rule), trucks, buses, emergency vehicles.'},
  cond:{title:'Weather and Emergencies', intro:'Night, rain, fog, ice, hills; emergency stops, brake failure, blowouts, breakdowns, crashes, trailers.'},
  compare:{title:'Comparison and Updates', intro:'What we found by cross-checking four sources: where they agree, where they differ, which is right, and the 2026 law changes.'},
  exam:{title:'Exam Prep', intro:'Quick revision (all memory hooks in one place), numbers to remember, flashcards, a 35-question mock test, and a glossary.'}
});
Object.assign(EN.subs, {
'9.1':{t:'Pedestrian (zebra) crossing', h:`<ul><li>Spot it early from the warning sign and the <b>white diamond</b> on the road; slow down and be ready to stop.</li>
<li>Give way to everyone on the crossing, stepping onto it, or <b>clearly waiting</b> to cross. Stop behind the white limit line.</li>
<li>No <b>raised traffic island</b> in the middle: stop for a pedestrian on <b>any part</b> of the crossing.</li>
<li>Raised island: stop only for pedestrians on <b>your half</b>.</li>
<li>Do not go until a pedestrian crossing in front of you has <b>completely cleared</b> your path.</li></ul>
<div class="rule"><ul style="margin:0"><li>Do not enter the crossing if there is no room for your car on the other side.</li><li>Do <b>not overtake</b> a vehicle that is slowing or stopped at a crossing.</li><li>In the test, stopping on the crossing = <b>immediate fail</b>.</li></ul></div>`, mem:'No island = the whole crossing · Island = my half', cap:['Pedestrian crossing']},
'9.2':{t:'School crossing, school bus, school zone', h:`<ul><li>When a <b>School patrol STOP</b> sign is out, stop behind the limit line and stay stopped until <b>all signs</b> are taken in.</li>
<li>Take extra care around <b>8–9</b> in the morning and <b>3–4</b> in the afternoon: cars and buses dropping off and picking up children.</li>
<li>When an <b>active school speed sign</b> is flashing, drive at the sign's <b>30 or 40 km/h</b>.</li></ul>
<div class="rule">Passing a stopped <b>school bus</b> (lights flashing, or children getting on or off, even without lights): <b>20 km/h or less, from both directions</b>, until you are fully past the bus.</div>`, mem:'School bus = 20 km/h, from both directions', cap:['School warning sign','School patrol STOP']},
'9.3':{t:'Railway level crossing', h:`<table><tr><th>What you see</th><th>What to do</th></tr>
<tr><td>Barrier down / red lights flashing / bells ringing</td><td>Stop; wait until <b>everything</b> has stopped and the barrier is up</td></tr>
<tr><td><b>STOP</b> sign</td><td>Stop completely, look both ways, and cross only if no train is coming</td></tr>
<tr><td><b>Give Way</b> sign or no sign</td><td>Slow down, be ready to stop, and look both ways</td></tr></table>
<div class="rule"><ul style="margin:0"><li>When you stop, stay behind the limit line; if there is no line, stay <b>at least 5 m</b> from the rail (so you are not pushed onto the track if hit from behind).</li><li>Do not enter the crossing if there is no room for your car on the other side.</li></ul></div>
<ul><li>A train looks further away and slower than it really is; trains take a long time to stop.</li><li>If there is more than one track, another train may come from the other direction after the first one passes.</li></ul>`, mem:'Railway: 5 m if there is no limit line', cap:['Railway crossing: lights and bells']},
'9.4':{t:'Cyclists, e-scooters, horses: the new 1.5 m rule', h:`<div class="rule"><ul style="margin:0">
<li><b>From 1 October 2026</b>: when passing a <b>cyclist</b>, <b>horse rider</b> or other road user going the same way in the same lane, leave <b>at least 1.5 m at any speed</b>. If you cannot, slow down and wait behind.</li>
<li>When turning, give way to cyclists in cycle lanes and bus lanes, and to <b>e-scooters in cycle lanes</b>.</li>
<li>Look both ways when crossing a cycle path.</li>
</ul></div>
<ul><li>A cyclist may move to the middle of the lane for safety (<b>"taking the lane"</b>). You can pass safely over a flush median, keeping 1.5 m.</li>
<li>Children aged <b>12 or under</b> (and parents with them) can cycle on the footpath. Watch for them when leaving a driveway.</li>
<li>After passing, make sure you are fully clear before moving back; cyclists are faster than you think.</li>
<li><b>Before opening your door</b>, check your mirror and shoulder (<b>Dutch reach</b>: open the door with your far hand, so your body turns and you look back).</li>
<li>Turning left: check your left mirror and shoulder for cyclists and motorcyclists. Turning right: check for cyclists coming straight ahead or turning left.</li></ul>`, mem:'Passing a cyclist or horse = always 1.5 m', cap:['Leave room beside a cyclist','Cyclist at an intersection']},
'9.5':{t:'Trucks and buses', h:`<ul><li>Stay <b>at least 3 seconds</b> behind, and where you can see both of its <b>side mirrors</b>. If you can see its mirrors, the driver can see you.</li>
<li>Passing a large vehicle takes more time and more clear road.</li>
<li>Do not pass a truck or bus that is turning; it may swing out of its lane.</li>
<li>Oncoming large vehicles and passing ones create a blast of air. Hold the steering wheel firmly with both hands.</li>
<li>When you see a <b>"Wide load follows"</b> sign, slow down at once and move as far off the road as you can.</li></ul>
<div class="rule">On roads of <b>60 km/h or less</b>, <b>give way to a bus</b> pulling out from a bus stop, the roadside or a bus lane (from 1 Oct 2026; it used to be 50 km/h).</div>`, mem:'If you cannot see the truck\'s mirror, it cannot see you'},
'9.6':{t:'Emergency vehicles and police', h:`<table><tr><th>Road</th><th>What to do</th></tr>
<tr><td>Single lane</td><td>Signal, move to the side and stop</td></tr>
<tr><td>Multi-lane</td><td>Slow down and move into the left lane (stay there if you are already in it)</td></tr>
<tr><td>Multi-lane, both lanes jammed</td><td>If in the left lane, move as far left as you can; if in the right lane, as far right as you can. This makes a path down the middle</td></tr></table>
<ul><li>If you hear a siren but cannot tell where it is coming from, stop safely at the side; if stopping is not safe, slow down and keep left.</li>
<li>Once it has passed, return to the road only when it is clear. Failing to give way means a <b>$150 fine</b>.</li></ul>
<div class="rule">If a <b>police</b> vehicle behind you shows red and blue lights or a siren, stop safely at the side as soon as you can and <b>stay in the car</b>. If you do not stop: 35 demerit points, arrest, vehicle impounded, and a fine of up to $10,000.</div>`, mem:'In a jam: left goes left, right goes right, leave a path in the middle'},
'9.7':{t:'Other vulnerable road users', h:`<ul><li>Hard-to-see places: <b>intersections, driveways, roundabouts, car parks</b>. Check your mirrors and blind spot twice.</li>
<li>Slow down or be ready to stop near: <b>schools, shopping centres, bus stops, pedestrian crossings</b>.</li>
<li>Entering or leaving a driveway: always give way to pedestrians on the footpath.</li></ul>`, mem:'Driveway = people on the footpath go first', cap:['Motorcycle in traffic']},
'10.1':{t:'Night driving and headlights', h:`<div class="rule"><ul style="margin:0">
<li>Headlights on: <b>from 30 minutes after sunset until 30 minutes before sunrise</b>, and any time you cannot clearly see a person or vehicle <b>100 m</b> away.</li>
<li>Never drive with only the park lights on.</li>
<li>You <b>must dip</b> when: a vehicle is coming towards you · you are following a vehicle · you are approaching police directing traffic · you are parked at the side.</li>
<li>On roads with lanes, be able to stop within the distance you can see; on roads without lanes, within half of it. (You can only see as far as your headlights reach.)</li>
</ul></div>
<ul><li>If someone has their high beam on, look at the <b>white line on your left</b>; if you are dazzled, slow down or stop.</li><li>If there are no street lights, use full beam when you need it.</li><li>Keep the windscreen and lights clean; no sunglasses at night.</li><li>As a learner, keep a 4-second gap; there are more drunk drivers at night.</li><li>Dipping in fog is a recommendation, not a legal requirement.</li></ul>`, mem:'30 minutes (sunset/sunrise) · when you cannot see 100 m', cap:['Road at night']},
'10.2':{t:'Rain', h:`<ul><li>As soon as it starts raining, use <b>headlights</b>, wipers (front and rear) and the <b>demister</b>.</li><li>Reduce your speed; you may need to go slower than the limit. Keep <b>at least 4 seconds</b> behind.</li><li>The first rain after a dry spell makes the road most slippery.</li><li>Above 70 km/h, you can lose grip on a big puddle (<b>aquaplaning</b>). Look 12 seconds ahead.</li><li>Drive in the wheel tracks of the vehicle ahead; stay away from the spray of large vehicles.</li></ul>`, mem:'Rain = headlights + 4 seconds', cap:['Wet road']},
'10.3':{t:'Fog', h:`<ul><li>Slow down. Check your speedometer to judge your speed.</li><li>Use <b>low beam</b>; high beam bounces back off the fog and dazzles you.</li><li>Use fog lights if you have them.</li><li>Stay away from the centreline, closer to the white line on the left.</li><li>Do not stop on the road; if you must stop, get well away from traffic.</li></ul>`, mem:'Fog = low beam', cap:['Fog']},
'10.4':{t:'Ice and snow', h:`<ul><li>Before you leave, check the forecast and whether the road is closed (<b>nzta.govt.nz/traffic</b>, metservice.com); if possible, travel in the middle of the day.</li><li>Use <b>cold water</b> on the windscreen; hot water can crack the glass. Run the demister fully.</li><li>Dip your headlights in snow; watch for the <b>ice markers</b> with blue flashing lights.</li><li>Keep at least 4 seconds back; brake earlier and gently; there is more ice on bridges and in shade.</li><li>If you fit snow chains, drive <b>under 50 km/h</b>; if you rent a car with chains, learn how to fit them first.</li></ul>
<div class="rule"><b>If you skid</b>: take your foot off the accelerator → look where you want to go → <b>steer into the skid</b> (the way the back is sliding) → do not brake; once you regain control, brake steadily if you have ABS, or pump gently if you do not.</div>`, mem:'Skid = ease off the accelerator, steer into the skid, do not brake'},
'10.5':{t:'Hill roads', h:`<ul><li>Before you set off, check the brakes, wipers and demister.</li><li>Going downhill, use a <b>lower gear</b>. If you rely only on the brakes, they overheat and stop working well (<b>brake fade</b>).</li><li>On a steep uphill, use a lower gear and watch the temperature gauge.</li><li>On bends, do not drive close to the centreline.</li></ul>`, mem:'Downhill = lower gear', cap:['Hill road']},
'10.6':{t:'Emergency stop (ABS and non-ABS)', h:`<table><tr><th>With ABS (ABS logo on the steering wheel)</th><th>Without ABS</th></tr>
<tr><td><b>Hold</b> the brake down as hard as you can, even if the pedal pulsates. Do not pump.</td><td>Brake gently at first, then increase the pressure. If the wheels lock, release for a moment and then brake again.</td></tr></table>
<ul><li>Look where you need to go, keep both hands on the wheel, and steer around the hazard.</li><li>Manual: brake first; if there is time, press the clutch just before you stop. Stalling does not matter; stopping safely comes first.</li><li>Practise in an empty car park on a dry road, starting at 20–30 km/h.</li></ul>`, mem:'ABS = hold it down, do not pump', cap:['Avoiding a skid']},
'10.7':{t:'Steering to avoid danger', h:`<ul><li>Above 40 km/h, steering around a hazard is often quicker than braking.</li><li>Do not brake hard and turn sharply at the same time; the wheels can lock (if you have no ABS).</li><li>Do not turn more than you need to; once you are past the hazard, <b>counter-steer</b> the other way.</li></ul>`, mem:'Once past the hazard, counter-steer', cap:['Hands at 9 and 3 o\'clock']},
'10.8':{t:'Brake failure and a stuck accelerator', h:`<h4>Brake failure</h4><ol class="steps"><li>Change to a lower gear and look for a place to stop</li><li><b>Pump</b> the brake quickly several times</li><li>If that fails, apply the handbrake slowly (if the rear wheels skid, ease it off a little)</li><li>Headlights, <b>hazard lights</b>, horn</li><li>Steer off the road or onto an uphill road; as a last resort, rub against a guard rail or kerb to slow down</li></ol>
<h4>Stuck accelerator</h4><ol class="steps"><li>Stay calm, both hands on the wheel</li><li>Tap the pedal a few times, and try lifting it with your toe</li><li>If that fails, shift to <b>neutral</b>, then brake</li><li>Pull over, switch off the engine, hazard lights</li><li>If it will not go into neutral, as a last resort turn off the ignition, but <b>not to LOCK</b> (the steering will lock)</li></ol>`, mem:'Stuck accelerator = Neutral, then brake', cap:['Brake system','Controlling speed']},
'10.9':{t:'Tyre blowout and changing a wheel', h:`<p>If a front tyre blows, the car <b>pulls</b> towards that side; if a rear tyre blows, the back <b>sways</b>.</p>
<ol class="steps"><li>Grip the steering wheel firmly and <b>do not over-correct</b></li><li>Check your mirror and shoulder: is anyone behind you?</li><li>Slow down <b>gently and smoothly</b> (eBook: ease off the accelerator first, no sudden braking)</li><li>Indicate, then stop on the left, on flat, firm ground, away from traffic</li><li>Wheels straight, handbrake, <b>hazard lights</b>; auto: P; manual: on flat/uphill use 1st, downhill use R; engine off</li></ol>
<h4>Changing a wheel</h4><ol class="steps"><li>Loosen the wheel nuts <b>anticlockwise</b> (do not remove them yet)</li><li>Raise the car with the jack at the correct lifting point</li><li>Remove the nuts, fit the spare, and tighten by hand</li><li>Tighten with the tool in this order: <b>top → opposite → left → right</b></li><li>Lower the car and fully tighten in the same order again</li></ol>
<ul><li>Never go under a car on a jack; engine off; passengers out of the car; firm, level ground.</li><li>On a space-saver tyre, do <b>not exceed 80 km/h</b>.</li></ul>`, mem:'Blowout: grip firmly, slow down gently, stop on the left', cap:['Tyre blowout']},
'10.10':{t:'Breakdown', h:`<ol class="steps"><li>Stop on a straight road (not on a bend), and completely off the road if you can</li><li><b>Hazard lights</b>; interior light at night</li><li>Raise the bonnet and boot; put the reflective triangle behind the car</li><li>Get help: family, friends, AA, <b>*555</b>, a garage</li><li>Stay near the car until help arrives; <b>do not walk along the motorway</b>. If it is safe, stay in the car</li></ol>`, mem:'Breakdown: hazard lights · raise the bonnet · *555'},
'10.11':{t:'If you are in a crash', h:`<ol class="steps"><li>Stop; check whether anyone is hurt and help them</li><li>If anyone is hurt, call <b>111</b> (ambulance, police, fire); use <b>*555</b> to report a traffic incident</li><li>Do not move an injured person unless you really must (spinal injury); do not stand in front of an undeployed airbag</li></ol>
<div class="rule"><table style="margin:0"><tr><th>Situation</th><th>Time limit</th></tr>
<tr><td>Someone is <b>injured</b></td><td>Tell the police as soon as possible, <b>within 24 hours</b></td></tr>
<tr><td>No one is injured</td><td>Give the owner of the other vehicle or property your name, address and plate number <b>within 48 hours</b></td></tr>
<tr><td>You cannot find the owner</td><td>Tell the police <b>within 60 hours</b></td></tr></table></div>
<p>Pass a crash sign at <b>20 km/h or less</b>. If you have insurance, tell your insurer.</p>`, mem:'Injury = 24 hours · owner = 48 · cannot find them = 60'},
'10.12':{t:'Towing a trailer and reversing', h:`<ul><li>Check the towbar lock, safety chain, lights and indicators; the load should be centred and tied down firmly; check your mirrors.</li>
<li>Maximum <b>90 km/h</b>; keep a <b>4-second</b> gap; slow down early before intersections; you need bigger gaps.</li>
<li>Take corners a little wider; the trailer cuts the corner.</li>
<li>If a line of vehicles builds up behind you, stop in a safe place and let them pass.</li></ul>
<div class="rule">Total weight (car + trailer + load): <b>learner/restricted maximum 4500 kg</b>, full licence 6000 kg.</div>
<h4>Reversing</h4><ul><li>Start with the car and trailer wheels straight.</li><li>Steer in the <b>opposite</b> direction to where you want the trailer to go.</li><li>Once the trailer is heading the right way, straighten the wheels, then follow the trailer with the car.</li><li>Go slowly, with small, smooth steering movements. If it jack-knifes, drive forward and start again.</li></ul>`, mem:'Trailer: 90 km/h · 4 seconds · steer the opposite way', cap:['Drive animation: trailer reverse','Trailer']},
'10.13':{t:'Preparing for a long trip', h:`<ul><li>Check your route, rest stops, the weather and road conditions beforehand (journeys.nzta.govt.nz).</li><li>NZ roads are narrow, winding and hilly; trips take longer than they look on a map.</li><li>Make sure the car is roadworthy, the glass is clean and you have enough petrol.</li><li>Choose your playlist beforehand, put your phone on silent, and eat during breaks.</li><li>To enjoy the view, stop in a safe place completely off the road, not at a no stopping sign or on broken yellow lines.</li></ul>`, mem:'Close on the map is not close on the road'},
'11.1':{t:'The four sources', h:`<table><tr><th>Source</th><th>What it is</th><th>How reliable</th></tr>
<tr><td><span class="src rc">Road Code</span></td><td>Official NZ Road Code 2026 (1 April 2026) + updates page</td><td><b>Final word</b>: the theory test comes from here</td></tr>
<tr><td><span class="src dr">Drive</span></td><td>55 restricted skill pages on drive.govt.nz (NZTA + ACC)</td><td><b>Official</b>: how the practical test works</td></tr>
<tr><td><span class="src dn">Driving in NZ</span></td><td>NZTA leaflet 2026, 6 pages</td><td><b>Official</b>: brief</td></tr>
<tr><td><span class="src eb">eBook</span></td><td>A1 Driving School, 61 pages</td><td>Good practical tips; some facts are outdated or different</td></tr></table>
<h4>Images</h4>
<ul><li><b>Animations</b>: Drive (NZTA).</li><li><b>Road signs</b>: NZ sign diagrams from Wikimedia Commons.</li><li><b>Cartoons</b>: newly drawn for this guide, following NZ rules (driving on the left, right-hand drive, clockwise roundabouts). No images from the eBook are used any more.</li></ul>`},
'11.2':{t:'Differences and corrections (from the earlier version)', h:`<table><tr><th>Topic</th><th>Before / in the eBook</th><th>Official (now in this guide)</th><th>Source</th></tr>
<tr><td>Distance when passing a cyclist</td><td>1 m up to 60 km/h, 1.5 m above</td><td><b>Always 1.5 m</b> (from 1 Oct 2026); horse riders too</td><td>RC updates</td></tr>
<tr><td>Give way to a bus</td><td>50 km/h or less</td><td><b>60 km/h or less</b>, from a bus stop, the roadside or a bus lane</td><td>RC updates</td></tr>
<tr><td>Parking uphill on a hill</td><td>"Wheels towards the kerb"</td><td>Uphill: steering right, wheels <b>away from the kerb</b>; downhill: left, towards the kerb</td><td>Drive</td></tr>
<tr><td>Leaving an angle park</td><td>When reversing, steering right</td><td>Once clear of the car on your left, steering <b>left</b>, then signal right and go forward</td><td>Drive</td></tr>
<tr><td>L plate</td><td>Rear only</td><td><b>Front and rear</b></td><td>RC</td></tr>
<tr><td>Dipping headlights</td><td>Within 200 m</td><td>The Road Code gives no distance: dip for oncoming vehicles, when following, for police, and when parked</td><td>RC</td></tr>
<tr><td>Speed outside a school</td><td>urban 30, rural 60</td><td><b>30 or 40</b>, as shown on the active school sign</td><td>RC</td></tr>
<tr><td>Crash: no one injured</td><td>60 hours only</td><td><b>48 hours</b> to the owner; if you cannot find them, 60 hours to the police</td><td>RC</td></tr>
<tr><td>Give Way sign</td><td>"Everyone on the road without a sign"</td><td>Everyone, <b>except those at a STOP sign</b></td><td>RC, DN</td></tr>
<tr><td>Restricted passengers</td><td>spouse, dependants, caregiver</td><td>+ parent/guardian, a relative who receives a benefit; if you took the test in an auto, auto only</td><td>RC</td></tr>
<tr><td>Leaving a driveway</td><td>pedestrians and vehicles</td><td>+ everyone on the footpath, cycle path and shared path</td><td>RC</td></tr>
<tr><td>Tyre blowout</td><td>eBook: avoid braking</td><td>Drive: "brake slowly and smoothly". Combined: not suddenly, gently</td><td>Drive, EB</td></tr>
<tr><td>Fatigue nap</td><td>-</td><td>Drive: 15–20 minutes; Driving in NZ: 15–30 minutes; no more than 40</td><td>Drive, DN</td></tr>
<tr><td>Following distance as a learner</td><td>eBook: 3 seconds</td><td>The law says 2/4 seconds; Drive suggests 3 while learning at higher speeds</td><td>RC, Drive</td></tr>
<tr><td>Licence system</td><td>"Announcement of a change"</td><td>Details from 25 Jan 2027 (see 1.8)</td><td>NZTA</td></tr></table>`, mem:'When in doubt, the Road Code is final'},
'11.3':{t:'2026 law changes', h:`<table><tr><th>Effective</th><th>Change</th></tr>
<tr><td>1 April 2026</td><td>Road Code 2026 edition; new fees</td></tr>
<tr><td>6 August 2026</td><td>A Class 1 full licence can drive zero-emission vehicles of 6001–7500 kg</td></tr>
<tr><td>1 October 2026</td><td><b>1.5 m</b> when passing cyclists, horse riders and others · children aged 12 or under can cycle on the footpath · e-scooters in cycle lanes · <b>give way to a bus</b> on roads of 60 km/h or less</td></tr>
<tr><td>22 October 2026</td><td>Tractors and special-type vehicles <b>40 km/h</b> maximum</td></tr>
<tr><td>This year</td><td>Beach/river variable speed signs (30/60); reflective triangle at a crash site; Fijian and Thai added to the theory test</td></tr>
<tr><td>25 Jan 2027</td><td>New GDLS (1.8)</td></tr></table>`, mem:'1 Oct 2026: 1.5 m + give way to a bus at 60'},
'11.4':{t:'Restricted test: mistakes that fail you immediately', h:`<table><tr><th>Mistake</th><th>Type</th></tr>
<tr><td>Not stopping completely at a STOP sign</td><td>Critical / immediate fail</td></tr>
<tr><td>Not giving way</td><td>Immediate fail</td></tr>
<tr><td>Stopping on a pedestrian crossing</td><td>Immediate fail</td></tr>
<tr><td>Stalling in a manual</td><td>Critical error</td></tr>
<tr><td>Speeding</td><td>One of the biggest causes of failing</td></tr>
<tr><td>Not signalling when leaving a roundabout</td><td>Common mistake</td></tr>
<tr><td>Not taking the first safe gap</td><td>The officer watches for this</td></tr></table>`, mem:'STOP = stop completely · give way · do not stop on a crossing'},
'12.1':{t:'🧠 Quick revision: all the memory hooks', h:`<div id="revision"></div>`},
'12.2':{t:'Numbers to remember', h:`<div class="numgrid">
<div><b>16</b><span>learner age</span></div><div><b>16½</b><span>restricted age</span></div><div><b>6 months</b><span>minimum on learner</span></div><div><b>35 / 32</b><span>theory questions / pass mark</span></div>
<div><b>2 years</b><span>supervisor's full licence</span></div><div><b>10pm–5am</b><span>restricted: not alone</span></div><div><b>0</b><span>alcohol, under 20</span></div><div><b>250 / 50</b><span>20+ breath mcg / blood mg</span></div>
<div><b>3 sec</b><span>minimum signal</span></div><div><b>2 sec</b><span>normal following gap</span></div><div><b>4 sec</b><span>wet / bad conditions / trailer</span></div><div><b>12 sec</b><span>scan ahead</span></div>
<div><b>100 m</b><span>clear ahead after overtaking</span></div><div><b>100 m</b><span>headlights if you cannot see this far</span></div><div><b>30 minutes</b><span>after sunset / before sunrise</span></div><div><b>1.5 m</b><span>passing a cyclist / horse</span></div>
<div><b>20 km/h</b><span>school bus · crash site</span></div><div><b>30 / 40</b><span>active school sign</span></div><div><b>30 / 60</b><span>beach (people / none)</span></div><div><b>90 km/h</b><span>trailer</span></div>
<div><b>60 km/h</b><span>or under: give way to a bus</span></div><div><b>6 m</b><span>intersection / crossing / bus stop</span></div><div><b>1 m</b><span>driveway</span></div><div><b>50 cm</b><span>fire hydrant</span></div>
<div><b>30 cm</b><span>park from the kerb</span></div><div><b>5 m</b><span>railway (if no line)</span></div><div><b>50 m</b><span>flush median / special lane</span></div><div><b>50 m</b><span>visibility for a 3-point turn</span></div>
<div><b>4 · 2 minutes</b><span>parallel park moves · time</span></div><div><b>7 m</b><span>max reversing in a parallel park</span></div><div><b>1.5 mm</b><span>tyre tread</span></div><div><b>80 km/h</b><span>space-saver tyre</span></div>
<div><b>20</b><span>phone demerit points</span></div><div><b>100 / 2 years</b><span>demerits → 3 months</span></div><div><b>+40 km/h</b><span>→ 28-day suspension</span></div><div><b>24 / 48 / 60 hours</b><span>crash report</span></div>
<div><b>under 7</b><span>child restraint</span></div><div><b>under 15</b><span>driver responsible for belt</span></div><div><b>2 hours</b><span>break</span></div><div><b>111 · *555</b><span>emergency · traffic</span></div>
</div>`},
'12.3':{t:'Flashcards: tap for the answer', h:`<div class="flash" id="flash"></div>`},
'12.4':{t:'Mock theory test (35 questions)', h:`<div class="score" id="score">Score: 0 / 0</div><div id="quiz"></div><button class="btn" onclick="buildQuiz(true)">🔀 Start again in a new order</button>`},
'12.5':{t:'Glossary: tough words', h:`<table><tr><th>English</th><th>Meaning</th></tr>
<tr><td><b>Give way</b></td><td>Let others go first, so they do not have to brake or move aside</td></tr>
<tr><td><b>Limit line</b></td><td>The white line where you stop (yellow at a railway)</td></tr>
<tr><td><b>Kerb</b></td><td>The raised edge at the side of the road</td></tr>
<tr><td><b>Footpath / shared path</b></td><td>A path for walking / a path for both walking and cycling</td></tr>
<tr><td><b>Centreline</b></td><td>The line down the middle of the road</td></tr>
<tr><td><b>Flush median</b></td><td>The diagonally striped area in the middle, where you wait to turn right</td></tr>
<tr><td><b>Terminating road</b></td><td>The road that ends at a T-intersection (the bottom of the T)</td></tr>
<tr><td><b>Uncontrolled intersection</b></td><td>An intersection with no signs or lights</td></tr>
<tr><td><b>Blind spot / shoulder (head) check</b></td><td>The area you cannot see in your mirrors / turning your head to look</td></tr>
<tr><td><b>Tailgating</b></td><td>Following too close</td></tr>
<tr><td><b>Overtake / pass</b></td><td>Go past another vehicle</td></tr>
<tr><td><b>Merge (zip)</b></td><td>Two lanes joining into one, taking turns</td></tr>
<tr><td><b>Feeder lane / on-ramp</b></td><td>The lane for building up speed to join a motorway</td></tr>
<tr><td><b>Passing lane</b></td><td>An extra lane for overtaking</td></tr>
<tr><td><b>No-passing line</b></td><td>A solid yellow line</td></tr>
<tr><td><b>Clearway / transit lane (T2/T3)</b></td><td>No stopping at set times / a lane for vehicles with 2-3 people</td></tr>
<tr><td><b>Level crossing</b></td><td>Where a road crosses a railway line</td></tr>
<tr><td><b>Cul-de-sac</b></td><td>A road closed at one end</td></tr>
<tr><td><b>Hazard / hazard lights</b></td><td>A danger / all four indicators flashing together</td></tr>
<tr><td><b>Dip / low beam · full beam</b></td><td>Headlights pointed lower · pointed higher</td></tr>
<tr><td><b>Supervisor / driving coach</b></td><td>The person with a full licence for 2 years who sits beside a learner</td></tr>
<tr><td><b>Demerit points · infringement</b></td><td>Penalty points · a fine without going to court</td></tr>
<tr><td><b>Disqualification · suspension · impound</b></td><td>Licence cancelled · licence put on hold · vehicle seized</td></tr>
<tr><td><b>WoF · rego</b></td><td>Warrant of Fitness (the vehicle's safety certificate) · registration</td></tr>
<tr><td><b>Advisory speed</b></td><td>The suggested speed for a bend</td></tr>
<tr><td><b>Aquaplaning</b></td><td>Tyres losing grip on water</td></tr>
<tr><td><b>Stall · bite point · revs</b></td><td>The engine cuts out · where the clutch starts to grip · how fast the engine is spinning</td></tr>
<tr><td><b>Chevron</b></td><td>An arrow board showing the direction of a bend</td></tr>
<tr><td><b>Taking the lane</b></td><td>A cyclist riding in the middle of the lane</td></tr>
<tr><td><b>Road</b> (legal meaning)</td><td>Beach, bridge, car park, street, motorway: all count as road</td></tr></table>`, mem:'In law, a beach and a car park are also "road"'},
'12.6':{t:'10 common mistakes by learners (eBook)', h:`<table><tr><th>#</th><th>Mistake</th><th>What to do</th></tr>
<tr><td>1</td><td>Not wearing a seat belt</td><td>Belt on as soon as you get in (2.3)</td></tr>
<tr><td>2</td><td>Not stopping at a STOP sign</td><td>Stop completely; immediate fail in the test (5.1)</td></tr>
<tr><td>3</td><td>Forgetting to indicate</td><td>3 seconds (5.4)</td></tr>
<tr><td>4</td><td>Changing lanes without looking</td><td>Mirror-Signal-Shoulder (7.2)</td></tr>
<tr><td>5</td><td>Speeding</td><td>The limit is a maximum (3.4)</td></tr>
<tr><td>6</td><td>Wrong following distance</td><td>2 / 4 seconds (3.3)</td></tr>
<tr><td>7</td><td>Driving while tired</td><td>Break every 2 hours (3.7)</td></tr>
<tr><td>8</td><td>Wrong position on the road</td><td>Keep left, in the middle of your lane (3.9)</td></tr>
<tr><td>9</td><td>Sudden hard braking</td><td>Look ahead and brake smoothly (3.2)</td></tr>
<tr><td>10</td><td>Losing concentration</td><td>No phone (3.6)</td></tr></table>`, cap:['Learner driver: 10 common mistakes']},
'12.7':{t:'Where to practise', h:`<ul><li><b>drive.govt.nz</b>: open a free account for real theory test questions, and the "Tough words" and "Tricky questions" tests.</li>
<li><b>Drive Go app</b>: restricted skills.</li>
<li>The Road Code "Updates" page: the list of new theory questions (C, S, RP, B, I).</li>
<li>Order of practice (according to Drive): empty car park → quiet roads → simple intersections → busy town → multi-lane → higher speeds → night and rain.</li></ul>`}
});
EN.flash = [
['Alcohol limit if you are under 20?','Zero'],
['Alcohol limit if you are 20 or over?','250 mcg / litre of breath (blood 50 mg / 100 mL)'],
['Following distance on a wet road or with a trailer?','At least 4 seconds'],
['How long before turning should you signal?','At least 3 seconds'],
['When can you drive alone on a restricted licence?','5am – 10pm'],
['Who do you give way to at a roundabout?','Everyone coming from your right'],
['Going straight ahead at a roundabout: signal on entering?','No signal on entering; signal left before you exit'],
['Right-turner vs an oncoming left-turner?','The right-turner gives way'],
['Who do you give way to at a Give Way sign?','Everyone, except those at a STOP sign'],
['How much room when passing a cyclist?','At least 1.5 m (at any speed)'],
['On roads of what speed do you give way to a bus?','60 km/h or less'],
['Speed when passing a school bus?','20 km/h, from both directions'],
['How much clear road must you have ahead when you finish overtaking?','100 m'],
['How far from an intersection must you park?','At least 6 m'],
['Parking uphill: steering?','Right (wheels away from the kerb)'],
['Parking downhill: steering?','Left (wheels towards the kerb)'],
['When are headlights compulsory?','From 30 minutes after sunset to 30 minutes before sunrise; or when you cannot see 100 m'],
['No centreline: within what distance must you be able to stop?','Half of the road you can see'],
['People on the beach: speed?','30 km/h'],
['Demerit points for using a hand-held phone?','20'],
['Where does the L plate go?','Front and rear'],
['Crash with someone injured: when must you tell the police?','As soon as possible, within 24 hours'],
['What does MSCBGA stand for?','Mirrors · Signal · Course · Brake · Gear · Assess'],
['What does IPDA stand for?','Identify · Predict · Decide · Act']
];
EN.quiz = [
['You are 19. What is your alcohol limit?',['250 mcg/L breath','150 mcg/L breath','Zero','400 mcg/L breath'],'Under 20 = zero.'],
['You are turning right; an oncoming car is going straight. Who gives way?',['The oncoming car','You','Whoever arrived first','Nobody'],'Turning traffic gives way to traffic going straight.'],
['You are turning right and the oncoming car is turning left; you both have a green light. Who gives way?',['You','The car turning left','Whoever moves first','Nobody: it is green'],'The right-turner gives way to the left-turner, even when both have the same control.'],
['You are at a STOP sign turning left; the oncoming car at a Give Way sign is turning right. Who gives way?',['The oncoming car','You','Both stop','The bigger vehicle'],'A car at a Give Way sign does not have to give way to a car at a STOP sign, so you give way.'],
['You will turn right at a roundabout. What is your signal on entering?',['Left','Right','No signal','Hazard lights'],'Turning right = right signal; signal left before you exit.'],
['You will go straight ahead at a roundabout. How do you signal?',['Right on entering','Left on entering','Nothing on entering; signal left after passing the exit before yours','No signal at all'],'Going straight: no signal on entering; signal left once you pass the exit before yours.'],
['What is the following distance rule in normal conditions?',['1 second','2 seconds','4 seconds','10 m'],'The 2-second rule; 4 in bad conditions.'],
['What is the following distance on a wet road or when towing a trailer?',['2 seconds','3 seconds','4 seconds','6 seconds'],'The 4-second rule.'],
['When must you have your headlights on?',['Only in the dark','From 30 minutes after sunset to 30 minutes before sunrise, and when you cannot see 100 m','From 6pm','Only in the rain'],'The 30-minute rule + 100 m.'],
['At night on a road with lanes, you must be able to stop within half the distance you can see. True or false?',['True','False'],'False. With lanes = the whole distance you can see; half applies only on roads without lanes/centreline.'],
['When leaving a driveway, you must give way to everyone on the footpath, cycle path, shared path and road. True or false?',['True','False'],'True.'],
['You are driving at 80 km/h and see a 100 km/h sign ahead. When can you speed up?',['As soon as you see the sign','After you pass the sign','200 m before it','Whenever you like'],'For a higher limit, after you pass the sign.'],
['You are on an 80 km/h road and see a 60 km/h sign ahead. When must you slow to 60?',['After you pass the sign','By the time you reach the sign','1 km later','At the next intersection'],'For a lower limit, before you reach the sign.'],
['You are driving slower than the limit and a line of vehicles has built up behind you. What do you do?',['Speed up','Use your hazard lights','Keep left and, when safe, stop to let them pass','Nothing'],'The slow drivers rule.'],
['A "35" on a curve sign means a suggested 35 km/h in good conditions. True or false?',['True','False'],'True: it is the advisory speed.'],
['What must you do at a Give Way sign?',['Just slow down','Give way to everyone, except those at a STOP sign','Stop completely','Give way only to traffic from the right'],'Give Way sign = give way to everyone except those at a STOP sign.'],
['What does a solid yellow line on your side mean?',['Overtake with care','No overtaking','Bus lane','Parking'],'No-passing line.'],
['What do broken yellow lines beside the kerb mean?',['Park for 5 minutes','No stopping','Loading zone','Bus lane'],'No stopping.'],
['You are turning right into a multi-lane road. Which lane do you enter?',['The left lane','The lane nearest the centreline','Any lane','The right lane, then change later'],'The nearest lane.'],
['Can you wait in a flush median to turn right?',['Yes, until there is a safe gap','No, never','Only at night','Only buses'],'Yes: that is what a flush median is for.'],
['In a left-turn line, can you stop on a cycle lane?',['Yes','No'],'No: you must not stop on a cycle lane.'],
['What is the minimum room when passing a cyclist in the same lane going the same way?',['0.5 m','1 m','1.5 m','3 m'],'From 1 Oct 2026, always 1.5 m.'],
['On a 50 km/h road, a bus at a bus stop is indicating right. What do you do?',['Go ahead of it','Give way to the bus','Sound your horn','Overtake'],'On roads of 60 km/h or less, give way to the bus.'],
['Can you hold a phone to make a call while driving?',['Yes, a short call','No: only a mounted phone, rarely and briefly','Yes, at a red light','Yes, on speaker'],'Hand-held is banned, even at a red light.'],
['What is the maximum speed when passing a stopped school bus (children getting off)?',['50','30','20','10 km/h'],'20 km/h from both directions.'],
['This variable sign is at a beach and there are people ahead. What is the speed limit?',['30 km/h','60 km/h','50 km/h','100 km/h'],'30 when people are there, 60 when there are none.'],
['What is the minimum distance from an intersection to park?',['1 m','3 m','6 m','10 m'],'6 m.'],
['You must stop at a railway crossing but there is no limit line. Where do you stop?',['On the rail','At least 5 m before the rail','1 m before','You do not have to stop'],'5 m.'],
['Can you make a U-turn on a motorway?',['Yes, if it is clear','No','Yes, at night','Yes, if you miss your exit'],'Never.'],
['Two lanes merge into one. What is the best way?',['Bigger vehicles first','Zip: take turns, one at a time','Right lane first','Whoever is faster'],'Merge like a zip.'],
['Where does a learner driver\'s supervisor sit?',['In the back seat','In the front passenger seat, beside you','Any seat','They do not need to be in the car'],'The front passenger seat.'],
['Where must a learner driver put L plates on the car?',['Rear only','Front only','Front and rear','Inside the windscreen'],'Front and rear.'],
['Your car breaks down on a motorway. What do you do?',['Walk along the motorway to find help','Stop as far off the road as possible, use hazard lights, call for help, and stay in the car if it is safe','Stop in the middle of the road','Reverse to the exit'],'Do not walk on the motorway.'],
['An uncontrolled crossroads: you are both going straight. Who do you give way to?',['Traffic from the left','Traffic from the right','Nobody','The bigger vehicle'],'In all other cases, give way to traffic from the right.'],
['When must you report a crash in which someone was injured to the police?',['Within 60 hours','Within 1 week','As soon as possible, within 24 hours','No need to report'],'24 hours.']
];
