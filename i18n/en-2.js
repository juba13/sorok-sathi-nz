window.EN = window.EN || {tabs:{}, subs:{}};
Object.assign(EN.tabs, {
  giveway:{title:'Give Way and Intersections', intro:'The most theory test questions (I30–I49) come from here. In the restricted test, failing to give way = immediate fail.'},
  round:{title:'Roundabouts', intro:'Signalling and giving way. Forgetting to signal when leaving a roundabout is a common test mistake.'},
  skills:{title:'Driving Skills and Roads', intro:'Pulling out from the kerb, lane changes, merging, flush medians, overtaking, higher speeds, curves, motorways and country roads.'},
  park:{title:'Parking, Turning and Hills', intro:'Where you cannot park, parallel parking (test measurements), angle parking, U-turns, 3-point turns and hills.'}
});
Object.assign(EN.subs, {
'5.1':{t:'The basic give way rules (official order)', h:`
<div class="mem"><b>Rule 1:</b> Turning → give way to <b>Straight</b><br><b>Rule 2:</b> <b>Right</b>-turner → give way to the oncoming <b>Left</b>-turner<br><b>Rule 3:</b> Bottom of the T (terminating) → give way to the top road<br><b>Rule 4:</b> In all other cases → give way to the vehicle on your <b>right</b></div>
<div class="rule"><ol style="margin:0">
<li><b>STOP sign</b>: stop <b>completely</b> at the limit line, then give way to <b>everyone</b>.</li>
<li><b>Give Way sign</b>: give way to everyone — <b>except those facing a STOP sign</b>.</li>
<li>When you <b>turn</b>, give way to everyone who is not turning — including cyclists in cycle lanes and bus lanes, vehicles in bus lanes, and <b>e-scooters</b> in cycle lanes.</li>
<li>When turning <b>right</b>, give way to an oncoming vehicle turning <b>left</b> — even if you both have the same control (both STOP, both Give Way, or both green).</li>
<li>At an uncontrolled intersection, if you <b>leave the centreline path</b>, legally you are "turning" — give way to vehicles following the centreline.</li>
<li>From a <b>terminating road</b> (bottom of the T) → give way to traffic on the continuing road. <b>The same applies to a driveway</b>.</li>
<li>Leaving or entering a <b>driveway</b>: give way to everyone on the road <b>and to everyone on the footpath, cycle path and shared path</b>.</li>
<li>On roads of <b>60 km/h or less</b>: give way to a <b>bus</b> that wants to leave a bus stop, the roadside or a bus lane (the bus must indicate for at least 3 seconds).</li>
<li>In all other cases give way to the vehicle on your <b>right</b> — for example roundabouts, uncontrolled crossroads, and flashing yellow in all directions.</li>
</ol></div>
<div class="tip">Giving way means: the person you are giving way to <b>does not have to stop, brake, slow down or move aside</b>.</div>`, mem:'Turning→Straight · Right→Left · Bottom of T→Top · Otherwise→Right'},
'5.2':{t:'Give way, with examples', h:`
<div class="ex"><b>A.</b> You are turning right, the oncoming car is going <b>straight</b> → Rule 1 → <b>you</b> give way.</div>
<div class="ex"><b>B.</b> You are turning right, the oncoming car is turning <b>left</b> (into the same road) → Rule 2 → <b>you</b> give way.</div>
<div class="ex"><b>C.</b> You are turning left, the oncoming car is turning right → they must give way to you — but still make sure before you go.</div>
<div class="ex"><b>D.</b> You are at a <b>STOP</b>, the oncoming car is at a <b>Give Way</b> and is turning right, you are turning left → a Give Way vehicle does not give way to a STOP vehicle → <b>you</b> give way. (Drive states this clearly)</div>
<div class="ex"><b>E.</b> Uncontrolled T-intersection, you are at the bottom of the T → Rule 3 → give way to <b>everyone</b>.</div>
<div class="ex"><b>F.</b> You are leaving a driveway and someone is walking on the footpath → give way to them.</div>
<div class="ex"><b>G.</b> On a 50 km/h road a bus at a bus stop is indicating right → give way to the bus.</div>
<div class="ex"><b>H.</b> Uncontrolled crossroads, you are both going straight → Rule 4 → give way to the vehicle <b>coming from your right</b>.</div>
<div class="warn">Even when you have right of way, be ready to give way — others may choose the wrong gap.</div>`, mem:'A STOP vehicle gives way to a Give Way vehicle'},
'5.3':{t:'Intersection approach routine — MSCBGA', h:`
<div class="mem"><b>"My Safety Cannot Be Given Away"</b> = Mirrors · Signal · Course · Brake · Gear · Assess</div>
<table><tr><th>Step</th><th>What to do</th></tr>
<tr><td><b>M</b> Mirrors</td><td>Check what is behind you before you slow down</td></tr>
<tr><td><b>S</b> Signal</td><td>At least 3 seconds</td></tr>
<tr><td><b>C</b> Course</td><td>Correct lane and position</td></tr>
<tr><td><b>B</b> Brake</td><td>Slow to a speed where you can stop if needed (eBook: about 15–20 km/h)</td></tr>
<tr><td><b>G</b> Gear</td><td>Change down if you drive a manual</td></tr>
<tr><td><b>A</b> Assess</td><td>Is it safe? Decide — if you are not sure, wait</td></tr></table>
<p>When you stop behind the vehicle in front, leave enough distance so you can see <b>some road over the bonnet</b>. In the test the Testing Officer will check that you take the <b>first safe gap</b>.</p>`, mem:'MSCBGA = My Safety Cannot Be Given Away', cap:['Busy intersection']},
'5.4':{t:'When to signal', h:`
<div class="rule">At least <b>3 seconds</b> before — not too early either (it confuses people). Cancel the indicator when you finish.</div>
<ul><li>Pulling out from the kerb or returning to the kerb</li><li>Entering or leaving a parking space</li><li>Turning</li><li>Changing lanes</li><li>Roundabouts</li><li>Crossing the centreline</li><li>Merging when your lane ends (for example a motorway on-ramp)</li><li>Moving sideways <b>more than the width of your vehicle</b> (for example to pass a parked car or a cyclist)</li></ul>
<p>Signal even if nobody is around. When two lanes become one (zip merge), signalling is not legally required, but it is good practice.</p>`, mem:'3 seconds · even if nobody is around'},
'5.5':{t:'Turning left', h:`
<ol class="steps"><li>Check the turning lane and take the right lane; MSCBGA</li><li>Before the turn check your <b>left side mirror and blind spot</b> — a cyclist may come up on the inside</li><li>Look right</li><li>Look left around the corner to see that the road is clear</li><li>Look right again as you pull out — be ready to stop</li><li>Turn smoothly, then build up to the speed of the traffic</li></ol>
<p>Practice: start by practising choosing gaps from the footpath — you need the same kind of gap to cross on foot as you do in a car.</p>`, mem:'Turning left: left mirror + cyclist over your left shoulder', cap:['Drive animation: choosing a gap and turning left']},
'5.6':{t:'Turning right and going straight ahead', h:`
<ol class="steps"><li>MSCBGA</li><li>Stop next to the centreline, <b>facing straight ahead</b> (do not turn your wheels right)</li><li>Follow the give way rule that applies</li><li>Check for a gap in <b>both directions</b> — you must cross both the right and the left lane</li><li>Check there is space where you are turning into</li><li>Look right and left one last time as you move off</li><li>After the turn, match your speed to the traffic</li></ol>`, mem:'Turning right = wait facing straight, check both directions', cap:['Drive animation: turning right and going straight ahead']},
'5.7':{t:'Turning on multi-lane roads and choosing a lane', h:`
<div class="rule"><b>Always turn into the lane closest to you</b> — turning left → left (kerb-side) lane · turning right → lane next to the centreline. This applies to both one-way and two-way roads.</div>
<ul><li>If there are no lane arrows: left lane = turn left, right lane = turn right, straight ahead = any lane.</li>
<li>Check in both directions <b>at least twice</b>; vehicles in the two lanes may be travelling at different speeds.</li>
<li><b>Turning right off a multi-lane road</b>: get into the right lane early; use the right-turn bay or flush median if there is one; you need a gap in <b>both</b> oncoming lanes; a small vehicle can hide behind a large one.</li>
<li>You cannot overtake a vehicle going straight ahead by using the right-turn bay.</li></ul>`, mem:'Turn = into the closest lane', cap:['Drive animation: turning right onto a multi-lane road','Drive animation: turning right off a multi-lane road']},
'5.8':{t:'Turning into a one-way street', h:`
<ul><li>Closest lane: <b>turning left → left lane</b>, <b>turning right → right lane</b> (unless lane markings say otherwise).</li>
<li>When turning right, give way to traffic going straight ahead.</li>
<li>If an oncoming vehicle is turning into the same road, you can both go at the same time (separate lanes), but it may move across into your lane.</li>
<li>On a one-way road you can park on both sides.</li></ul>`, mem:'One-way: left→left lane, right→right lane', cap:['Drive animation: turning into a one-way street','One way sign']},
'5.9':{t:'Complex intersections and city traffic', h:`
<ul><li>Look ahead for signs, markings and controls (Give Way, STOP, lights); follow the lane arrows.</li>
<li>Stay in your own lane through the intersection.</li>
<li><b>Special vehicle lane</b> (bus/transit/cycle): if your vehicle does not meet the conditions, you may use it only to turn, for a maximum of <b>50 m</b>; give way to everyone in the lane (including cyclists).</li>
<li>Look where other drivers are looking and which way their wheels point — work out what they will do before they do it.</li>
<li>Watch for motorcycles and cyclists coming through the middle of the lane or up the left side.</li>
<li>The restricted test is held in a town or city — if you live in the country, practise in busy traffic a few times first.</li></ul>`, mem:'Turning in a special lane: 50 m maximum'},
'6.1':{t:'Rules and signalling', h:`
<div class="rule"><ul style="margin:0"><li>Go <b>clockwise</b> (the direction of a clock).</li><li>Give way to all traffic <b>coming from your right</b>.</li></ul></div>
<table><tr><th>Where you are going</th><th>Entering</th><th>Leaving</th></tr>
<tr><td>Left</td><td><b>Left</b></td><td>Left stays on</td></tr>
<tr><td>Straight</td><td><b>No signal</b></td><td><b>Left</b> as soon as you pass the exit <b>before yours</b></td></tr>
<tr><td>Right (more than halfway round)</td><td><b>Right</b></td><td><b>Left</b> as soon as you pass the exit before yours</td></tr></table>`, mem:'Left = L · straight = nothing · right = R — always L before you leave', cap:['Drive animation: turning right at a roundabout','Roundabout give way']},
'6.2':{t:'Approach and choosing a gap', h:`
<ol class="steps"><li>Look at the layout from a distance and decide which exit you will take</li><li>MSCBGA — signal according to the table above</li><li>Slow down, stop if you need to</li><li>Choose a gap</li></ol>
<ul><li>A vehicle going straight is usually faster than a vehicle that is turning.</li>
<li>Other drivers’ signals can be wrong — watch their wheels and speed too.</li>
<li>Cyclists, scooters and motorbikes can hide behind large vehicles.</li>
<li>If you are not sure about the gap, wait.</li></ul>`, mem:'If not sure, wait', cap:['Simple roundabout','Roundabout ahead sign']},
'6.3':{t:'Multi-lane roundabout', h:`
<ul><li>Read the signs and lane markings at least 12 seconds ahead and choose your lane.</li>
<li>If you must change lanes inside the roundabout, signal early and give way to vehicles in that lane.</li>
<li>After you pass the exit before yours: <b>mirror → left signal → look over your left shoulder</b>.</li>
<li>Large vehicles like a <b>bus</b> may swing out of their lane — stay back and let them go first.</li>
<li>Practise on small roundabouts first.</li></ul>`, mem:'Before leaving: Mirror → Left signal → left shoulder', cap:['Multi-lane roundabout — from above']},
'7.1':{t:'Pulling out from the kerb and stopping at the kerb', h:`
<h4>Pulling out</h4>
<ol class="steps"><li>Check the rear-view mirror and the right side mirror</li><li>Indicate <b>right for at least 3 seconds</b></li><li>Select a gear</li><li>Check the mirror again and look over your <b>right shoulder</b> (cars, cyclists, pedestrians)</li><li>When there is a safe gap, steer out slowly</li><li>Build up speed and check the mirror again</li></ol>
<h4>Stopping at the kerb</h4>
<ol class="steps"><li>Find a legal and safe place</li><li>Indicate <b>left for 3 seconds</b></li><li>Check the mirror and your <b>left shoulder</b> blind spot (cyclists)</li><li>Slow down smoothly and move towards the kerb</li><li>Stop parallel to the kerb, <b>within 30 cm</b></li><li>Neutral/park, handbrake, engine off</li></ol>`, mem:'Within 30 cm of the kerb', cap:['Drive animation: pulling out from the kerb']},
'7.2':{t:'Lane change', h:`
<ol class="steps"><li>Look for hazards 12 seconds ahead</li><li>Check the lane you are moving into using your mirror and over your shoulder</li><li>Signal for at least 3 seconds</li><li>If needed, adjust your speed to make a gap (within the limit)</li><li>Check ahead again, the mirror, and the blind spot — especially for cyclists and motorcyclists</li><li>Change lanes smoothly</li><li>Check the mirror; match your speed and following distance</li></ol>
<p>If there are three lanes, a vehicle from the third lane may also come into the same gap.</p>`, mem:'Mirror → Signal → Shoulder → Move', cap:['Multi-lane road']},
'7.3':{t:'Merging — zip merge and lane ending', h:`
<div class="mem"><b>Zip merge</b>: when two lanes become one, take turns — one from the left, one from the right.</div>
<ul><li>Before merging, match the speed of the vehicles around you; mirror-signal-shoulder.</li>
<li><b>When your lane ends</b>: signal right, use the <b>whole length of the lane</b> to build up speed, and choose your gap early.</li>
<li>If traffic ahead is slowing, a merge may be coming up.</li>
<li>Cancel your indicator after you merge.</li></ul>`, mem:'Merge like a zip', cap:['Drive animation: merging','Merge']},
'7.4':{t:'Flush median', h:`
<p>Diagonal white markings in the middle of the road — a waiting space when <b>turning right</b>, so you do not hold up traffic. It is not for normal driving.</p>
<h4>Turning right out of the main road</h4>
<ol class="steps"><li>Correct lane</li><li>Decide in advance where you will stop in the median</li><li>MSCBGA</li><li>Turn when there is a safe gap</li></ol>
<h4>Entering the main road (in two stages)</h4>
<ol class="steps"><li>Look right for a gap, and look left to see whether anyone else is coming into the median at the same spot</li><li>Wait in the median</li><li><b>Signal left</b>, check the mirror and look over your left shoulder</li><li>When there is a gap, build up speed and merge</li></ol>
<div class="rule">You can drive in a flush median for a maximum of <b>50 m</b>. You may also use the flush median to pass a cyclist safely with a 1.5 m gap.</div>`, mem:'Flush median = waiting space for turning right', cap:['Drive animation: using a flush median','Flush median diagram']},
'7.5':{t:'Special vehicle lane (bus, transit, cycle)', h:`
<ul><li>Recognise them by markings and signs; many are in operation only at certain times.</li>
<li>If you do not meet the conditions, you may enter only to turn or to reach a driveway/parking — for a maximum of <b>50 m</b>.</li>
<li>Before entering: mirror → signal 3 seconds → blind spot → give way to everyone in the lane (including cyclists and e-scooters) → enter smoothly.</li>
<li>When waiting in the left-turn lane, <b>do not stop on the cycle lane</b>.</li></ul>`, mem:'Special lane = 50 m maximum', cap:['Bus and special lane']},
'7.6':{t:'Overtaking — when it is safe and legal', h:`
<div class="rule"><ul style="margin:0">
<li>There must be at least <b>100 m of clear road ahead</b> <b>even after you finish</b> overtaking — for the whole manoeuvre.</li>
<li><b>Never near a corner or bend</b>.</li>
<li>A solid yellow line or double yellow lines on your side = not allowed.</li>
<li>You must not go over the <b>speed limit</b> to overtake — if you cannot do it within the limit, do not overtake.</li>
</ul></div>
<ul><li>If possible, be patient until a <b>passing lane</b>.</li>
<li>Check whether anyone could come out of a side street.</li>
<li>The faster or longer the vehicle ahead, the more space you need. Do not overtake if you cannot see ahead behind a large truck.</li>
<li>At night: yellow reflectors = no passing, white = passing allowed.</li></ul>
<p style="font-weight:700">If you are not sure, do not overtake.</p>`, mem:'100 m clear even after overtaking · never at a bend', cap:['Think before you overtake']},
'7.7':{t:'Overtaking — steps and passing lanes', h:`
<ol class="steps"><li>Stay at least 2 seconds behind the vehicle in front</li><li>Indicate right, check the mirror and look over your shoulder</li><li>One last check — is there enough clear road ahead? (be ready to abort)</li><li>Check the mirror and shoulder again — is anyone overtaking you?</li><li>Use your <b>left indicator</b> as you pass</li><li>Return to the left lane when you are far enough ahead of the vehicle you passed</li></ol>
<p>If you have to abort, brake and drop back behind the vehicle in front.</p>
<h4>Passing lane</h4>
<ul><li>If you are not overtaking, stay in the <b>left lane</b> and <b>do not speed up</b>.</li>
<li>If you are overtaking: keep your distance and look ahead, signal for 3 seconds, move into the right lane; pass, then return the same way.</li>
<li>When you see the end of passing lane sign, merge using mirror, blind spot and signal.</li></ul>`, mem:'If a vehicle comes up behind you in a passing lane, do not speed up', cap:['Drive animation: overtaking']},
'7.8':{t:'Straight roads at higher speeds', h:`
<ul><li>At speeds over 50 km/h look at least 12 seconds ahead; at 80–100 km/h, 12 seconds is much further.</li>
<li>Watch for side roads, merge lanes and traffic in other lanes; check your mirror especially when slowing down.</li>
<li>Keep at least a 3 second following distance to start with, 4 seconds in bad conditions.</li>
<li>Stay in the middle of your lane; on multi-lane roads use the left lane.</li>
<li>Drive with the traffic within the limit; driving slower is fine if you do not feel comfortable.</li></ul>`, mem:'Higher speed = look further ahead, leave more distance'},
'7.9':{t:'Curves (bends)', h:`
<ol class="steps"><li>Look as far into the bend as you can to judge how sharp it is</li><li>Check the speed on the curve sign and slow down <b>before the bend</b> (mirror first)</li><li>Position: <b>towards the left in a right bend</b>, <b>towards the right in a left bend</b> — but always left of the centreline</li><li>Change down early if needed</li><li>Hold a steady speed in the bend with light accelerator — do not coast, and do not brake</li><li>When the road straightens, speed up smoothly, then check the mirror</li></ol>
<div class="rule"><b>Crossing the centreline on a bend is illegal</b> — risk of a head-on crash.</div>
<p>Several downhill bends in a row: brake hard on the straight parts, lightly in the bends. Be extra careful in a high vehicle such as an SUV.</p>`, mem:'Brake before the bend, not in the bend', cap:['Slow down before the bend','Do not cross the centreline']},
'7.10':{t:'Motorway', h:`
<h4>Entering</h4><ol class="steps"><li>Build up to motorway speed using the <b>whole length</b> of the on-ramp</li><li>Check the mirror, choose a gap, signal for 3 seconds</li><li>Check the mirror and blind spot again, then move into the gap</li></ol>
<h4>While driving</h4><ul><li>2 second following distance (4 in bad conditions); middle of your lane; left lane.</li><li>Watch for speed limit, exit and lane closure signs.</li></ul>
<div class="rule"><b>Never</b> on a motorway: stop (except in an emergency), make a <b>U-turn</b>, pick up or drop off passengers, or stop or reverse if you miss your exit — keep going to the next exit.</div>
<h4>Leaving</h4><ul><li>Be in the correct lane early; signal <b>left for 3 seconds</b>.</li><li>Keep your speed until you are on the off-ramp, then slow down.</li></ul>`, mem:'Motorway: no stopping, no U-turn, no reversing'},
'7.11':{t:'Country roads and gravel', h:`
<h4>Sealed roads without a centreline</h4>
<ul><li>Narrow and winding — higher risk of head-on crashes.</li><li>Drive at a speed where you can stop in <b>half</b> the distance you can see — even in a 100 zone it is often much slower.</li><li>Keep as far left as is safe; there may be loose gravel and a drop at the edge.</li><li>Watch for cyclists, pedestrians (no footpath), tractors, quad bikes, animals and hidden driveways.</li><li>Slow down before one-lane bridges.</li></ul>
<h4>Unsealed (gravel) roads</h4>
<ul><li>Slippery — make every movement <b>smooth and slow</b>.</li><li>When a vehicle approaches, slow down more and keep left — less dust and fewer stones on your windscreen.</li><li>Increase your following distance because of dust.</li><li>If you drift into deep gravel, slow down a lot and steer gently to get out — sudden steering can roll the vehicle.</li></ul>
<div class="rule">If you see animals on the road, slow down and pass carefully — <b>do not sound your horn</b>.</div>`, mem:'No centreline = stop in half the visible distance · animals = no horn', cap:['Sealed road without a centreline','Unsealed (gravel) road']},
'7.12':{t:'Suburban roads', h:`
<ul><li>Children or pedestrians may step out from behind parked cars.</li><li>Take extra care near playgrounds and schools — 8–9 am and 3–4 pm.</li><li>Watch for Give Way, STOP and unmarked intersections.</li><li>Know the width of your vehicle — for passing parked cars.</li></ul>`, mem:'Children behind parked cars', cap:['Suburban road']},
'8.1':{t:'Where you cannot stop or park', h:`
<div class="rule"><ul style="margin:0">
<li>Not on the <b>right-hand side</b> of the road (except on one-way roads); parking <b>facing the wrong way</b> can get a fine or a tow.</li>
<li>Not within <b>6 m</b> of an <b>intersection</b>, the approach side of a crossing, or a <b>bus stop</b> that is only signed.</li>
<li>Not in front of a <b>driveway</b> or within <b>1 m</b> of it.</li>
<li>Not on a footpath, traffic island, taxi stand, marked bus stop or <b>cycle lane</b>.</li>
<li>Not on <b>broken yellow lines</b>.</li>
<li>No <b>double parking</b>.</li>
<li>Not in a bus/transit lane when it is operating.</li>
<li>Not on or within <b>50 cm</b> of a fire hydrant (unless the driver stays with the vehicle).</li>
<li>Not near a corner, bend, hill, island or intersection where you would block others’ view.</li>
<li>If there is room on the roadside (margin), do not park on the road.</li>
</ul></div>`, mem:'Intersection / crossing 6 m · driveway 1 m · hydrant 50 cm'},
'8.2':{t:'Parking at the roadside', h:`
<ol class="steps"><li>Look for a parking space</li><li>Check the mirror</li><li>Signal left for 3 seconds</li><li>Check the mirror and blind spot again</li><li>Brake gently and move smoothly to the side</li><li>Parallel to the kerb, <b>within 30 cm</b></li><li>Handbrake; neutral (manual) / park (auto)</li><li>Cancel the indicator and turn off the engine</li></ol>
<p>In higher-speed areas park as far off the road as possible; in the dark park under a light or leave your parking lights on.</p>`, mem:'Park = parallel, within 30 cm'},
'8.3':{t:'Reversing', h:`
<p>Before you get in the car, check for <b>children or pets</b> around it.</p>
<table><tr><th>Automatic: Brake-Gear-Mirrors</th><th>Manual: Clutch-Gear-Mirrors</th></tr>
<tr><td>Press the brake → R → mirrors and blind spot → turn left and look through the rear window → release the brake, add light accelerator if needed</td>
<td>Clutch fully down → R → mirrors and blind spot → turn left and look → bring the clutch to the "bite" point → release the clutch with light accelerator</td></tr></table>
<ul><li>Keep your eyes up — look where you want to go.</li><li>Check the blind spot, side mirrors and side windows again and again.</li><li>Brake smoothly when you are one car length from where you want to stop (clutch too in a manual).</li></ul>`, mem:'Reverse: Brake/Clutch → Gear → Mirrors', cap:['Drive animation: steering while reversing','Look back over your shoulder']},
'8.4':{t:'Reverse parallel park (with test measurements)', h:`
<ol class="steps"><li>Signal left, and start reversing with the indicator still on</li><li>Beside the parked car: your <b>front door level with its front wheel</b>, about <b>half a metre</b> away</li><li>Keep checking the mirror and blind spot the whole time</li><li>When your <b>rear wheel is level with its rear bumper</b>, steer <b>left</b></li><li>As soon as your <b>front bumper clears its rear bumper</b>, steer <b>right</b></li><li>If needed, drive forward to straighten up</li><li>Neutral/park + handbrake</li></ol>
<div class="rule"><b>In the restricted test:</b> maximum <b>4 movements</b> · <b>2 minutes</b> · do not go back more than <b>7 m</b> behind the front car · finish <b>within 30 cm</b> of the kerb and <b>1–2 m</b> from the car in front · do not hit or mount the kerb · to leave, signal right for 3 seconds, maximum 2 movements.</div>
<p>Tip: if you have electric mirrors, tilt the left mirror down — it makes the kerb easier to see.</p>`, mem:'4 moves · 2 minutes · 30 cm · 1–2 m from the front car', cap:['Drive animation: reverse parallel park']},
'8.5':{t:'Reversing out of an angle park', h:`
<ol class="steps"><li>Check both sides and the blind spot</li><li>Reverse very slowly <b>straight back</b> — look over your left shoulder</li><li>When the back of your car <b>passes the back of the car on your left</b>, steer <b>left</b></li><li>Is the <b>front right corner</b> clear of the car on your right?</li><li>When out, check the mirror, shoulder check, <b>signal right</b>, then go forward</li></ol>
<p><b>You do not need to signal before you start reversing</b>; signal right before you move forward. Drive slowly so others can see you.</p>`, mem:'Angle park: straight back → steer left → signal right', cap:['Drive animation: leaving an angle park','Angle park']},
'8.6':{t:'U-turn', h:`
<p>Use a quiet, flat road wide enough to turn in <b>one movement</b>, with a good view in both directions.</p>
<ol class="steps"><li>Check the mirror, signal left, stop as close to the kerb as you can</li><li>Check the mirror</li><li>Signal right for at least 3 seconds</li><li>One last mirror and shoulder check</li><li>Pull out and turn to face the other way</li><li>Before building up speed in the lane, check the mirror and shoulder — is anyone trying to pass?</li></ol>
<div class="rule">When making a U-turn, give way to <b>all</b> traffic. Not allowed: where there is a No U-turn sign, across a solid yellow line, or on a <b>motorway</b>. The same rule applies in a cul-de-sac — signal and check your blind spot.</div>`, mem:'U-turn = give way to everyone · never on a motorway', cap:['Drive animation: U-turn']},
'8.7':{t:'3-point turn', h:`
<p>For when the road is too narrow for a U-turn. A flat road where you can see at least <b>50 m</b> in both directions.</p>
<ol class="steps"><li>Signal left, stop parallel to the kerb within 30 cm</li><li>Signal right for 3 seconds</li><li>Check the mirror and right shoulder</li><li><b>Forward → back → forward</b> — a maximum of 3 movements</li><li>At the end, return to the correct side, check the mirror and shoulder and merge with traffic</li></ol>
<div class="rule"><b>In the test:</b> do not use a driveway or anyone’s property · do not mount or hit the kerb hard · <b>2 minutes</b>. You are asked to do a 3-point turn only if there is no space for a parallel park.</div>`, mem:'3-point: 3 moves, 2 minutes, no driveway', cap:['Drive animation: 3-point turn']},
'8.8':{t:'Parking on a hill — which way the wheels point', h:`
<table><tr><th>Facing</th><th>Steering</th><th>Front wheels</th><th>Gear in a manual</th></tr>
<tr><td><b>Downhill</b> (facing down)</td><td><b>Left</b></td><td><b>towards the kerb</b></td><td>Reverse</td></tr>
<tr><td><b>Uphill</b> (facing up)</td><td><b>Right</b></td><td><b>away from the kerb</b></td><td>1st</td></tr></table>
<div class="mem">Easy way to remember: in either case, if the car rolls it will be <b>stopped by the kerb</b> — in front of the wheel when downhill, behind the wheel when uphill.</div>
<p>In an automatic use P + handbrake. The same gear rule applies when using a space-saver or changing a wheel (flat = 1st).</p>`, mem:'Downhill → left (towards the kerb) · Uphill → right', cap:['Hilly road']},
'8.9':{t:'Hill starts and driving on hills', h:`
<h4>Uphill — Automatic</h4><ol class="steps"><li>Select Drive</li><li>Raise the handbrake slightly and hold the button in</li><li>Light accelerator — the car pulls</li><li>Release the handbrake slowly (if you roll back, raise it again)</li><li>Signal, mirror, shoulder → move off smoothly</li></ol>
<h4>Uphill — Manual</h4><ol class="steps"><li>1st gear</li><li>Hold the handbrake on</li><li>Bring the clutch to the "bite", then press down slightly and hold steady</li><li>Use more accelerator than on the flat</li><li>Release the handbrake slowly</li><li>Signal, mirror, shoulder → release the clutch with the accelerator</li></ol>
<h4>Downhill</h4><ol class="steps"><li>Press the footbrake</li><li>Drive / 1st</li><li>Release the handbrake</li><li>(manual) release the clutch while slowly easing off the footbrake</li><li>Signal right, mirror, shoulder → use the accelerator as needed</li></ol>
<ul><li>Uphill: more accelerator, in a manual a lower gear and more revs.</li><li>Downhill: you need to brake earlier and harder; a lower gear helps hold your speed (on a very steep hill in an automatic use L/1/2).</li><li>If you have an electric parking brake, just move your foot from the footbrake to the accelerator.</li></ul>`, mem:'Uphill start = bite + accelerator, then release the handbrake', cap:['Uphill','Handbrake and steering']}
});
