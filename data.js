/* NZ Road Code Bangla guide — content.
   Sources: RC = Official NZ Road Code 2026 (nzta.govt.nz), DR = Drive restricted skills (drive.govt.nz),
   DN = "Driving in New Zealand 2026" leaflet (NZTA PDF), EB = A1 Driving School eBook.
   Facts checked against RC/DR/DN on 30 Oct 2026. */

const RCB='https://www.nzta.govt.nz/driving-skills/learn-to-drive/roadcode/general-road-code/';
const DRB='https://drive.govt.nz/restricted-licence/skills/';
const LINKS={
 dn:['https://www.nzta.govt.nz/assets/resources/driving-in-nz/docs/driving-in-nz-english.pdf','Driving in New Zealand 2026 (PDF)'],
 upd:[RCB+'overview/updates-to-the-general-road-code','Road Code — Updates 2026'],
 gdls:['https://www.nzta.govt.nz/driver-licences/apply-for-a-car-licence/changes-to-getting-a-car-licence','Changes to getting a car licence (2027)'],
 demerit:['https://www.nzta.govt.nz/driver-licences/driving-offences-and-penalties/demerit-points/','Demerit points table'],
 drivetests:['https://drive.govt.nz/learner-licence/road-code','Drive — practice theory tests'],
 eb:['','A1 Driving School eBook'],
};
function rc(p,l){return [RCB+p,'Road Code: '+l]}
function dr(p,l){return [DRB+p,'Drive: '+l]}

const DATA = [
/* =================================================================== 1 */
{id:'start', icon:'🏁', title:'Licence', intro:'NZ-এ car licence (Class 1) পাওয়ার ধাপ, শর্ত, fee, theory test আর ২০২৭-এর পরিবর্তন।',
subs:[
{n:'1.1', t:'এই guide কীভাবে পড়বেন', src:'', h:`
<p><b>উপরের tab</b> = বড় topic, <b>বাম পাশের list</b> = sub-level। প্রতিটা অংশের শেষে:</p>
<ul>
<li><span class="mem-inline">🧠 মনে রাখুন</span> — এক লাইনের memory hook। সব hook একসাথে পাবেন <b>Exam Prep → Quick revision</b>-এ।</li>
<li><b>📎 Source</b> — official page-এর link, নিজে মিলিয়ে দেখার জন্য।</li>
</ul>
<p>Source badge:</p>
<ul>
<li><span class="src rc">Road Code</span> = Official NZ Road Code 2026 — <b>theory test এখান থেকেই আসে</b>।</li>
<li><span class="src dr">Drive</span> = drive.govt.nz-এর restricted skills — <b>practical test</b>-এর official পদ্ধতি।</li>
<li><span class="src dn">Driving in NZ</span> = NZTA-র 2026 leaflet (নতুন ও বিদেশি driver-দের জন্য)।</li>
<li><span class="src eb">eBook</span> = A1 Driving School eBook — practical tips। Official source-এর সাথে না মিললে official-টাই রাখা হয়েছে (দেখুন <b>তুলনা</b> tab)।</li>
</ul>
<div class="warn">সব তথ্য ৩০ অক্টোবর ২০২৬-এ official page-এর সাথে মিলিয়ে দেখা। আইন বদলায় — test-এর আগে link-গুলো আবার দেখে নিন।</div>`},
{n:'1.2', t:'Licence-এর ৩টি ধাপ (GDLS)', src:'RC', img:[['sign-lplate.png','L plate — সামনে ও পেছনে দুই জায়গায়']], h:`
<table><tr><th>ধাপ</th><th>কখন পারবেন</th><th>কীভাবে পাবেন</th></tr>
<tr><td><b>1. Learner</b></td><td>বয়স কমপক্ষে <b>16</b></td><td>Eyesight check + <b>theory test</b> পাস</td></tr>
<tr><td><b>2. Restricted</b></td><td>বয়স কমপক্ষে <b>16½</b>, learner কমপক্ষে <b>6 মাস</b></td><td><b>Restricted practical test</b></td></tr>
<tr><td><b>3. Full</b></td><td>বয়স কমপক্ষে <b>18</b> (advanced course করলে 17½)</td><td><b>Full practical test</b></td></tr></table>
<h4>Restricted কতদিন রাখতে হবে (বর্তমান নিয়ম)</h4>
<table><tr><th>বয়স</th><th>সাধারণ</th><th>Advanced driving course করলে</th></tr>
<tr><td>২৫-এর কম</td><td><b>18 মাস</b></td><td>12 মাস</td></tr>
<tr><td>২৫ বা বেশি</td><td><b>6 মাস</b></td><td>3 মাস</td></tr></table>
<div class="warn">২৫ জানুয়ারি ২০২৭ থেকে নিয়ম বদলাচ্ছে — দেখুন 1.8।</div>`,
mem:'16 → learner · 16½ + 6 মাস → restricted · 18 → full', ref:[rc('about-driver-licences/stage-2-restricted-licence','Restricted'),rc('about-driver-licences/stage-3-full-licence','Full')]},
{n:'1.3', t:'Learner licence-এর শর্ত', src:'RC', h:`
<div class="rule"><ul style="margin:0">
<li>একা চালানো যাবে না — <b>supervisor</b> সবসময় <b>সামনের passenger seat</b>-এ।</li>
<li><b>L plate</b> গাড়ির <b>সামনে ও পেছনে দুই জায়গাতেই</b> — হলুদ background-এ কালো L, পরিষ্কার দেখা যাবে, আপনার দেখা আটকাবে না।</li>
<li>Passenger নেওয়া যায়, তবে supervisor রাজি থাকতে হবে। গাড়ির সবার দায়িত্ব supervisor-এর।</li>
<li>শর্ত ভাঙলে: <b>25–35 demerit points</b> + <b>$100 fine</b>।</li>
</ul></div>
<h4>Supervisor কে হতে পারবেন?</h4>
<ul><li>বৈধ <b>full NZ licence</b> (একই class), কোনো supervisor condition নেই।</li>
<li>Full NZ licence <b>কমপক্ষে ২ বছর</b> — অথবা সমমানের বিদেশি licence ২ বছর।</li>
<li>সাথে licence রাখবেন এবং আপনার পাশের seat-এ বসবেন।</li></ul>`,
mem:'L plate = সামনে + পেছনে · Supervisor = full licence ২ বছর, পাশের seat-এ', ref:[rc('about-driver-licences/stage-1-learner-licence','Learner')]},
{n:'1.4', t:'Restricted licence-এর শর্ত', src:'RC', h:`
<div class="rule"><ul style="margin:0">
<li>একা চালাতে পারবেন, কিন্তু <b>10pm – 5am</b>-এ নয় (তখন supervisor লাগবে)।</li>
<li><b>Automatic</b> গাড়িতে test দিলে supervisor ছাড়া শুধু automatic চালাতে পারবেন।</li>
<li>Supervisor ছাড়া passenger নেওয়া যাবে না। Exception — শুধু এরা:
<ul><li>আপনার <b>spouse / partner</b></li><li>আপনার সাথে থাকা ও আপনার (বা partner-এর) দায়িত্বে থাকা <b>সন্তান</b></li><li>আপনার সাথে থাকা, social security benefit পাওয়া <b>আত্মীয়</b></li><li>আপনার <b>parent / guardian</b></li><li>যার আপনি <b>primary caregiver</b></li></ul></li>
<li>শর্ত ভাঙলে: <b>35 demerit points</b> + <b>$100 fine</b>।</li>
</ul></div>`,
mem:'Restricted: 5am–10pm একা · বন্ধু passenger নয়', ref:[rc('about-driver-licences/stage-2-restricted-licence','Restricted')]},
{n:'1.5', t:'Theory test', src:'RC', h:`
<ul>
<li>Computer-এ <b>35টি</b> multiple-choice প্রশ্ন; pass করতে <b>কমপক্ষে 32টি</b> সঠিক (৩টির বেশি ভুল = fail)।</li>
<li>পরের প্রশ্নে গেলে আগের উত্তর <b>lock</b> হয়ে যায়।</li>
<li>একই দিনে <b>দুবার fail</b> করলে আবার দিতে <b>১০ working day</b> অপেক্ষা।</li>
<li>Pass করলে <b>21 দিনের temporary licence</b> পাবেন, photo licence আসা পর্যন্ত।</li>
<li>Test-এ শিশুদের আনবেন না।</li>
</ul>
<h4>ভাষা</h4>
<p>English ছাড়া: Arabic, Chinese, Fijian, Filipino, Gujarati, Hindi, Korean, Māori, Punjabi, Samoan, Thai, Tongan। <b>বাংলা এই তালিকায় নেই</b> — তাই প্রশ্নের English শব্দগুলো চেনা জরুরি (দেখুন Exam Prep → শব্দকোষ)। পড়তে অসুবিধা হলে <b>অতিরিক্ত সময়</b> বা <b>মৌখিক (oral) test</b>-এর আবেদন করা যায়।</p>
<div class="tip">২০২৫-এর ডিসেম্বর থেকে নতুন প্রশ্ন যোগ হয়েছে — যেমন driveway থেকে বের হওয়া, মন্থর driver, beach speed sign, cyclist-কে পাশ কাটানো। Exam Prep-এর quiz-এ এগুলো আছে।</div>`,
mem:'35 প্রশ্ন, 32 ঠিক = pass · একদিনে ২ fail = ১০ working day অপেক্ষা', ref:[rc('about-driver-licences/stage-1-learner-licence','Theory test'),LINKS.upd,LINKS.drivetests]},
{n:'1.6', t:'Fee (2026)', src:'RC', h:`
<table><tr><th>Licence</th><th>Application fee (২টি test সহ)</th><th>৩য় test থেকে প্রতিটি</th></tr>
<tr><td>Learner</td><td><b>$96.10</b></td><td>$54.60</td></tr>
<tr><td>Restricted</td><td><b>$167.50</b></td><td>$102.80</td></tr>
<tr><td>Full</td><td><b>$98.90</b></td><td>$71.90</td></tr></table>
<p>সব fee GST সহ, ফেরতযোগ্য নয়। Test বদলাতে বা বাতিল করতে কমপক্ষে <b>২ পূর্ণ working day</b> আগে করলে খরচ কম।</p>
<h4>Test-এর দিনে</h4>
<ul><li>Photo ID ও application-এর কাগজপত্র (driver licensing agent-এ — AA, VTNZ, VINZ)।</li>
<li>চশমা লাগলে সাথে আনুন।</li>
<li>Practical test-এ: বৈধ <b>WoF</b> ও <b>registration</b>-সহ ভালো অবস্থার গাড়ি।</li></ul>`,
mem:'Learner $96.10 · প্রথম ২টি test fee-র মধ্যে', ref:[LINKS.upd]},
{n:'1.7', t:'বিদেশি licence (Bangladesh থেকে এলে)', src:'DN', h:`
<ul>
<li>NZ-এ আসার পর <b>১২ মাস</b> পর্যন্ত বৈধ বিদেশি licence বা permit দিয়ে চালাতে পারবেন।</li>
<li>Licence English-এ না হলে সাথে একটি <b>সঠিক English translation</b> রাখতেই হবে।</li>
<li>চালানোর সময় licence সবসময় সাথে।</li>
<li>১২ মাস NZ-এ থাকার পর <b>NZ licence</b> নিতে হবে (overseas conversion)। ২০২৭-এর পরিবর্তন conversion-এর নিয়ম বদলায় না।</li>
</ul>`,
mem:'বিদেশি licence = ১২ মাস + English translation', ref:[LINKS.dn,LINKS.gdls]},
{n:'1.8', t:'২৫ জানুয়ারি ২০২৭ থেকে যা বদলাচ্ছে', src:'RC', h:`
<table><tr><th>বিষয়</th><th>এখন</th><th>২৫ জানু ২০২৭ থেকে</th></tr>
<tr><td>Learner সময় (২৫-এর কম)</td><td>6 মাস</td><td><b>12 মাস</b> (approved course বা ~60 ঘণ্টা supervised driving log করলে 6 মাস)</td></tr>
<tr><td>Learner সময় (২৫+)</td><td>6 মাস</td><td>6 মাস</td></tr>
<tr><td>Restricted সময় (২৫-এর কম)</td><td>18 মাস</td><td><b>12 মাস</b>, course দিয়ে কমানো যাবে না</td></tr>
<tr><td>Restricted সময় (২৫+)</td><td>6 মাস</td><td>6 মাস</td></tr>
<tr><td>Restricted-এ demerit পেলে</td><td>—</td><td>প্রতিবার <b>+6 মাস</b> restricted</td></tr>
<tr><td>Restricted test</td><td>—</td><td><b>Hazard perception</b> অংশ যোগ হবে</td></tr>
<tr><td>Full licence</td><td>Practical test</td><td><b>কোনো practical test নেই</b>, fee $25.90</td></tr>
<tr><td>Alcohol (learner/restricted)</td><td>২০-এর কম zero</td><td>সব বয়সে <b>zero</b> — তারিখ এখনো ঠিক হয়নি</td></tr></table>
<p>২৫ জানু ২০২৭-এ যার learner বা restricted licence থাকবে, তার উপরও নতুন নিয়ম প্রযোজ্য। <b>৭ মে ২০২৬ থেকে</b> পাওয়া demerit-ও restricted সময় বাড়াতে পারে।</p>`,
mem:'২০২৭: full test উঠে যাচ্ছে, restricted-এ hazard perception যোগ হচ্ছে', ref:[LINKS.gdls]}
]},
/* =================================================================== 2 */
{id:'car', icon:'🚗', title:'গাড়ি ও Controls', intro:'চালানোর আগে seat, mirror, pedal, gear — আর engine start থেকে থামা পর্যন্ত।',
subs:[
{n:'2.1', t:'প্রথমবার গাড়িতে বসে setup', src:'DR EB', img:[['cartoon/p07_4.svg','Seat সোজা ও ঠিক দূরত্বে'],['cartoon/p08_2.svg','Side mirror — পেছনের রাস্তা দেখায়']], h:`
<ol class="steps">
<li><b>Seat</b>: বাম pedal পুরো মেঝে পর্যন্ত চাপলে হাঁটু সামান্য ভাঁজ থাকবে।</li>
<li><b>Steering wheel</b>: হাত সোজা করলে <b>কবজি</b> wheel-এর উপরে থাকবে। হাতের তালু পৌঁছালে = দূরে; কনুইয়ের নিচ পৌঁছালে = কাছে (airbag-এর ঝুঁকি)।</li>
<li><b>Seat belt</b>: ডান কাঁধের উপর দিয়ে বুকের মাঝ দিয়ে; উচ্চতা ডান কাঁধের কাছে adjust হয়।</li>
<li><b>Mirrors</b>: rear-view mirror-এ পেছনের রাস্তা যত বেশি সম্ভব; side mirror-এ নিজের গাড়ির পাশটা <b>প্রায় দেখা যায় না</b> এমনভাবে — তাতে blind spot সবচেয়ে ছোট।</li>
<li><b>Controls চিনুন</b>: indicator, headlights, wipers, handbrake (lever, pedal বা electric button)।</li>
</ol>`,
mem:'Seat → Wheel → Belt → Mirrors → Controls', ref:[dr('set-up-and-get-moving/setting-up-your-car-and-using-the-controls','Setting up your car')]},
{n:'2.2', t:'গাড়িতে রাখার জিনিস ও tyre check', src:'EB DR', img:[['cartoon/p06_2.svg','Tyre নিয়মিত check করুন']], h:`
<h4>সবসময় গাড়িতে রাখুন</h4>
<p>First aid kit · reflective warning triangle · jumper cable · spare tyre (বা repair kit) + jack ও wheel brace · fire extinguisher।</p>
<h4>Tyre check</h4>
<ul><li><b>Pressure</b>: owner's manual অনুযায়ী, tyre ঠান্ডা অবস্থায় মাপুন।</li>
<li><b>Tread</b>: নতুন ≈ 8mm; <b>আইনি সর্বনিম্ন 1.5mm</b> (2mm-এ বদলানো ভালো)।</li>
<li><b>Damage</b>: bulge, crack, cut থাকলে দোকানে দেখান।</li></ul>`,
mem:'Tread-এর আইনি সর্বনিম্ন = 1.5mm', ref:[LINKS.eb,dr('set-up-and-get-moving/stopping-suddenly','Tyre condition')]},
{n:'2.3', t:'Seat belt ও child restraint', src:'RC DN', img:[['cartoon/p07_3.svg','Belt-এ "click" শুনুন, টেনে দেখুন']], h:`
<div class="rule"><table style="margin:0"><tr><th>বয়স</th><th>আইন</th></tr>
<tr><td><b>৭-এর কম</b></td><td>Approved <b>child restraint</b> বাধ্যতামূলক (taxi-তে না থাকলে পেছনের seat)</td></tr>
<tr><td><b>৭ বছর</b></td><td>Child restraint থাকলে সেটা; না থাকলে যা আছে (belt)</td></tr>
<tr><td><b>৮ ও বেশি</b></td><td>Seat belt</td></tr>
<tr><td>সব প্রাপ্তবয়স্ক</td><td>Seat belt — গাড়ির যেকোনো seat-এ</td></tr></table></div>
<ul><li><b>১৫-এর কম</b> passenger belt/restraint পরেছে কিনা — দায়িত্ব <b>driver-এর</b>।</li>
<li><b>১৫ ও বেশি</b> — নিজের belt নিজের দায়িত্ব।</li>
<li>একটি belt-এ একজন বড় ও একটি শিশু একসাথে কখনো নয়।</li>
<li>Belt না পরার exception: doctor-এর certificate, বা reverse করার সময় belt পরে দেখতে অসুবিধা হলে।</li></ul>`,
mem:'৭-এর কম = car seat · ১৫-এর কম = driver দায়ী', ref:[rc('about-driver-responsibility/safety-belts-and-child-restraints','Seatbelts'),LINKS.dn]},
{n:'2.4', t:'Steering-এর পাশের controls', src:'EB DR', img:[['cartoon/p08_3.svg','Steering-এর পাশের controls']], h:`
<ul>
<li><b>Indicator lever</b> (Japanese গাড়িতে সাধারণত ডানে): steering যেদিকে ঘোরাবেন lever সেদিকে — উপরে = left, নিচে = right।</li>
<li><b>Headlights</b>: indicator stick ঘুরিয়ে; সামনে ঠেললে <b>high beam</b>।</li>
<li><b>Wipers</b>: অন্য stick-এ; উপরে ঠেললে একবার wipe।</li>
<li>Indicator steering-এর বামে থাকলে, uphill start-এ handbrake ধরার আগেই indicate করে নিন।</li>
</ul>`,
mem:'Indicator lever wheel যেদিকে ঘুরবে সেদিকে', ref:[LINKS.eb,dr('parking-turning-around-and-hills/hill-driving-manual','Hill driving')]},
{n:'2.5', t:'Pedal ও gear — Automatic', src:'DR EB', img:[['cartoon/p10_1.svg','Automatic gear lever ও pedals']], h:`
<ul><li>দুটি pedal: ডানে <b>accelerator</b>, বামে <b>brake</b> — দুটোই <b>শুধু ডান পা</b>; বাম পা foot rest-এ।</li>
<li>Heel মেঝেতে, পায়ের <b>ball</b> দিয়ে চাপুন।</li></ul>
<table><tr><th>Gear</th><th>মানে</th></tr>
<tr><td><b>P</b> Park</td><td>পার্ক — গাড়ি lock</td></tr><tr><td><b>R</b> Reverse</td><td>পেছনে</td></tr>
<tr><td><b>N</b> Neutral</td><td>চাকায় শক্তি যায় না</td></tr><tr><td><b>D</b> Drive</td><td>সামনে</td></tr>
<tr><td><b>L / 1 / 2</b></td><td>খাড়া পাহাড় বা ভারী load</td></tr></table>
<p>P, R, N, D-এর মধ্যে বদলাতে: <b>পা brake-এ</b> + gearshift-এর পাশের button চাপুন, গাড়ি থামা অবস্থায়।</p>`,
mem:'Auto: এক পা (ডান) দুই pedal', ref:[dr('set-up-and-get-moving/using-the-pedals-and-gearshift-auto','Pedals (auto)')]},
{n:'2.6', t:'Pedal ও gear — Manual (ABC)', src:'DR', img:[['cartoon/p20_3.svg','Manual gear lever']], h:`
<div class="mem">ডান থেকে বামে <b>A-B-C</b>: <b>A</b>ccelerator · <b>B</b>rake · <b>C</b>lutch</div>
<ul><li>ডান পা → accelerator ও brake; বাম পা → clutch।</li>
<li><b>1st, 2nd</b> = power gear; <b>3rd–5th/6th</b> = speed gear; <b>R</b> = reverse।</li>
<li>Gear বদলান শুধু <b>clutch পুরো চেপে</b>।</li></ul>
<h4>Gear বদলানোর ধাপ</h4>
<ol class="steps"><li>Accelerator ছাড়ুন</li><li>Clutch পুরো চাপুন</li><li>পরের gear</li><li>Clutch আস্তে ছাড়ুন</li><li>হালকা accelerator</li></ol>
<ul><li>হাতের অবস্থান: 1st/2nd-এ তালু বাইরে কাত · 3rd/4th-এ সোজা উপরে · 5th/R-এ নিজের দিকে।</li>
<li>Gear-এর দিকে তাকাবেন না; শেষ হলেই বাম হাত steering-এ।</li>
<li>Clutch পুরো ছাড়ার আগে <b>"bite"</b> অনুভব করুন — engine-এর শব্দ বদলায়, সামনেটা একটু ওঠে।</li></ul>`,
mem:'ABC = Accelerator · Brake · Clutch (ডান → বাম)', ref:[dr('set-up-and-get-moving/using-the-pedals-and-gear-stick-manual','Pedals (manual)'),dr('set-up-and-get-moving/changing-gears-manual','Changing gears')]},
{n:'2.7', t:'Engine start, রওনা ও থামা', src:'DR', h:`
<h4>Start-এর আগে</h4>
<ol class="steps"><li>Handbrake on আছে কিনা</li><li>Gear neutral (manual) / park (auto)</li><li>Clutch চাপা (manual) / পা brake-এ (auto)</li><li>Key ঘুরিয়ে start; dashboard-এ handbrake ছাড়া অন্য warning light আছে কিনা দেখুন</li></ol>
<h4>রওনা</h4>
<ol class="steps"><li>1st gear / Drive</li><li>Handbrake ছাড়ুন</li><li>কমপক্ষে <b>৩ সেকেন্ড</b> indicate</li><li>Mirror + <b>blind spot</b> (কাঁধের উপর দিয়ে)</li><li>Auto: হালকা accelerator · Manual: accelerator দিয়ে clutch আস্তে ছাড়ুন</li></ol>
<h4>থামা</h4>
<ol class="steps"><li>Mirror</li><li><b>বামে ৩ সেকেন্ড</b> indicate</li><li>কোথায় থামবেন সেদিকে তাকান</li><li><b>ABC</b>: Accelerator ছাড়ুন → Brake → (manual) থামার ঠিক আগে Clutch</li><li>Handbrake, neutral/park, engine বন্ধ</li></ol>
<div class="warn">Manual-এ <b>stall</b> করা restricted test-এ <b>critical error</b>।</div>`,
mem:'থামা = Accelerator ছাড়ো → Brake → Clutch', ref:[dr('set-up-and-get-moving/starting-the-engine-moving-off-and-stopping','Starting & stopping')]},
{n:'2.8', t:'Stall হলে (manual)', src:'DR EB', img:[['drive-drive04-what-to-do-if-you-stall.gif','Drive animation: stall থেকে restart']], h:`
<p>কারণ: clutch খুব দ্রুত ছাড়া → engine-এর <b>RPM</b> খুব কমে যায়। শান্ত থাকুন:</p>
<ol class="steps"><li>পা <b>brake</b>-এ</li><li><b>Clutch</b> পুরো চাপুন</li><li><b>Neutral</b></li><li>Engine <b>restart</b></li><li><b>1st</b> gear</li><li>Mirror ও কাঁধের উপর দিয়ে দেখে রওনা</li></ol>`,
mem:'Stall: Brake-Clutch-Neutral-Start-1st-Look', ref:[dr('driving-on-the-road/what-to-do-if-you-stall-manual','Stall')]},
{n:'2.9', t:'Steering', src:'DR EB', img:[['cartoon/p18_2.svg','দুই হাতে steering']], h:`
<ul><li>হাত <b>"quarter to three"</b> (৯ ও ৩ টা) — airbag খুললে হাত বাধা হবে না।</li>
<li>Turn-এ হাত cross নয় — এক হাত থেকে অন্য হাতে wheel দিন (<b>pull-push</b>)।</li>
<li>মাথা উঁচু, <b>১২ সেকেন্ড সামনে</b> — "চোখই steering করে"।</li>
<li>Turn-এর <b>আগে</b> smooth ভাবে slow, turn শেষে smooth ভাবে speed।</li>
<li>Practice: খালি car park-এ ছোট বৃত্ত, তারপর ইংরেজি 8।</li></ul>`,
mem:'9 আর 3 · চোখ ১২ সেকেন্ড সামনে', ref:[dr('set-up-and-get-moving/steering','Steering')]}
]},
/* =================================================================== 3 */
{id:'safety', icon:'🛡️', title:'Safety ও মূল আইন', intro:'Blind spot, hazard, following distance, speed, alcohol, phone, fatigue ও penalty — theory test-এর বড় অংশ।',
subs:[
{n:'3.1', t:'Blind spot ও shoulder check', src:'DR', img:[['cartoon/p12_1.svg','Mirror সব দেখায় না']], h:`
<p><b>Blind spot</b> = গাড়ির দুই পাশে, driver-এর একটু পেছনে, যা সামনে তাকিয়ে বা mirror-এ দেখা যায় না। <b>Shoulder check (head check)</b> = মাথা দ্রুত ঘুরিয়ে পাশের জানালা দিয়ে দেখা।</p>
<h4>কখন check করবেন</h4>
<ul><li>Kerb থেকে বের হওয়ার আগে</li><li>Parallel park করা ও park থেকে বের হওয়ার আগে</li><li>U-turn ও 3-point turn-এর <b>আগে ও চলাকালীন</b></li><li>Merge করার আগে</li><li>Lane change ও overtake-এর আগে</li><li>Turn-এর আগে — যদি কেউ blind spot-এ ঢুকে থাকতে পারে</li><li>রাস্তায় reverse বা driveway থেকে পেছনে বের হওয়ার সময়</li><li>যখনই নিশ্চিত নন</li></ul>
<p>অন্যের blind spot-এ পাশাপাশি থাকবেন না — একটু এগিয়ে যান বা পিছিয়ে পড়ুন।</p>`,
mem:'নড়ার আগে: Mirror → Signal → Shoulder', ref:[dr('driving-on-the-road/blind-spots-and-shoulder-checks','Blind spots')]},
{n:'3.2', t:'Hazard scanning — ১২ সেকেন্ড ও IPDA', src:'DR', img:[['cartoon/p12_2.svg','Hazard — সামনে বাঁক'],['cartoon/p13_1.svg','১২ সেকেন্ড সামনে তাকান']], h:`
<p><b>Hazard</b> = রাস্তায় বা পাশে এমন কিছু যা crash ঘটাতে পারে।</p>
<ul><li><b>দৃশ্যমান</b>: রাস্তা পার হওয়া মানুষ, driveway থেকে বের হওয়া গাড়ি, cyclist, pothole, roadworks।</li>
<li><b>লুকানো</b> (বেশি বিপজ্জনক): parked গাড়ির দরজা হঠাৎ খোলা, গাড়ির আড়ালে driveway, truck-এর আড়ালে side road, playground থেকে শিশু দৌড়ানো।</li></ul>
<div class="mem"><b>IPDA</b> — Hazard action plan: <b>I</b>dentify (চিনুন) → <b>P</b>redict (কী হতে পারে) → <b>D</b>ecide (কী করবেন) → <b>A</b>ct (করুন)</div>
<ul><li><b>১২ সেকেন্ড সামনে</b> scan করুন, তারপর গাড়ির কাছে, আবার দূরে।</li>
<li>Rear-view mirror শুরুতে প্রতি <b>8–12 সেকেন্ডে</b> একবার।</li>
<li>Speed যত বেশি, ১২ সেকেন্ডে তত বেশি দূরত্ব — তাই আরও দূরে তাকান।</li></ul>`,
mem:'IPDA: Identify-Predict-Decide-Act · ১২ সেকেন্ড সামনে', ref:[dr('driving-on-the-road/scanning-for-hazards','Scanning for hazards'),dr('driving-on-the-road/driving-on-the-road','Driving on the road')]},
{n:'3.3', t:'Following distance — ২ ও ৪ সেকেন্ড', src:'RC DR', h:`
<div class="rule"><ul style="margin:0">
<li>স্বাভাবিক অবস্থায়: কমপক্ষে <b>২ সেকেন্ড</b>।</li>
<li><b>খারাপ আবহাওয়া, ভেজা/পিচ্ছিল রাস্তা, trailer টানলে</b>: কমপক্ষে <b>৪ সেকেন্ড</b>।</li>
</ul></div>
<div class="ex">সামনের গাড়ি একটা খুঁটি পার হলে বলুন <b>"one thousand and one, one thousand and two"</b> (৮টা শব্দ)। শেষ হওয়ার আগেই খুঁটিতে পৌঁছালে আপনি খুব কাছে।</div>
<ul><li>Drive-এর পরামর্শ: নতুন অবস্থায় বেশি speed-এ <b>৩ সেকেন্ড</b>, রাতে ৪ সেকেন্ড; truck/bus-এর পেছনে কমপক্ষে ৩ সেকেন্ড — যাতে তার দুটো side mirror দেখা যায়।</li>
<li>পেছনের গাড়ি <b>tailgate</b> করলে: সামনের গাড়ি থেকে দূরত্ব ২ → ৪ সেকেন্ড করুন, নিরাপদ হলে বামে সরে যেতে দিন।</li>
<li>Overtake করতে না চাইলে সামনে এমন জায়গা রাখুন যাতে পেছনের গাড়ি আপনাকে পার হয়ে ঢুকতে পারে।</li></ul>`,
mem:'২ সেকেন্ড স্বাভাবিক · ৪ সেকেন্ড ভেজা/খারাপ/trailer', ref:[rc('about-driving/key-driving-skills/following-distance','Following distance'),dr('city-and-town-driving/driving-in-traffic-trucks-and-buses','Trucks and buses')]},
{n:'3.4', t:'Speed limits ও safe speed', src:'RC DN DR', img:[['sign-speed50.png','Urban সাধারণত 50'],['sign-speed100.png','Open road 100'],['sign-schoolzone40.png','Active school speed sign']], h:`
<div class="rule"><ul style="margin:0">
<li>Speed limit = <b>ভালো অবস্থায় সর্বোচ্চ</b> speed, লক্ষ্য নয়।</li>
<li><b>Centreline/lane আছে</b>: যতটুকু পরিষ্কার রাস্তা দেখা যায় <b>তার মধ্যে</b> থামতে পারার speed।</li>
<li><b>Centreline নেই</b>: দেখা রাস্তার <b>অর্ধেকে</b> থামতে পারার speed।</li>
<li>Limit বদলায় <b>sign-এর জায়গায়</b>: কম limit হলে sign-এ পৌঁছানোর <b>আগেই</b> কমান; বেশি হলে sign <b>পার হওয়ার পরে</b> বাড়ান।</li>
<li>Overtake করার সময়ও limit পার হওয়া যাবে না।</li>
</ul></div>
<table><tr><th>পরিস্থিতি</th><th>সর্বোচ্চ</th></tr>
<tr><td>Open road sign</td><td><b>100 km/h</b></td></tr>
<tr><td>Trailer টানা light vehicle / ৩৫০০ kg-এর বেশি গাড়ি</td><td><b>90 km/h</b> (100 zone-এও)</td></tr>
<tr><td>School bus (২০০০ kg-এর বেশি)</td><td>80 km/h</td></tr>
<tr><td>Rope দিয়ে অন্য গাড়ি টানলে</td><td>50 km/h</td></tr>
<tr><td>Tractor ও special-type vehicle (২২ অক্টো ২০২৬ থেকে)</td><td>40 km/h</td></tr>
<tr><td>থেমে থাকা <b>school bus</b> পার হওয়া — <b>দুই দিক থেকেই</b></td><td><b>20 km/h</b></td></tr>
<tr><td>Crash/fire/emergency sign</td><td><b>20 km/h</b></td></tr>
<tr><td><b>Active school</b> speed sign (লাল বৃত্ত জ্বলছে)</td><td>sign-এ দেখানো <b>30 বা 40</b></td></tr>
<tr><td><b>Beach/river</b> variable sign</td><td>মানুষ থাকলে <b>30</b>, না থাকলে <b>60</b></td></tr>
<tr><td>Space-saver spare tyre</td><td>80 km/h</td></tr>
<tr><td>Snow chain লাগানো</td><td>50 km/h-এর নিচে</td></tr></table>
<div class="warn">Permanent limit-এর চেয়ে <b>৪০ km/h-এর বেশি</b> (বা temporary limit-এর চেয়ে ৫০-এর বেশি) জোরে চালালে সাথে সাথে <b>২৮ দিনের licence suspension</b>।</div>
<h4>মন্থর driver (নতুন প্রশ্ন)</h4>
<p>আপনি limit-এর চেয়ে ধীরে চালাচ্ছেন আর পেছনে গাড়ির সারি — যতটা সম্ভব বামে থাকুন এবং <b>নিরাপদ হলেই থেমে পার হতে দিন</b>। সোজা রাস্তায় speed বাড়িয়ে পার হতে বাধা দেবেন না।</p>`,
mem:'Lane আছে = পুরো দেখা দূরত্বে থামা · Lane নেই = অর্ধেকে', ref:[rc('about-limits/speed-limits','Speed limits'),LINKS.dn,dr('driving-to-the-conditions/controlling-your-speed-and-sticking-to-the-limits','Controlling speed')]},
{n:'3.5', t:'Alcohol ও drugs', src:'RC DN', h:`
<div class="rule"><table style="margin:0"><tr><th>Driver</th><th>Limit</th><th>Penalty</th></tr>
<tr><td><b>২০-এর কম</b></td><td><b>Zero</b> — একটা drink-ও নয়</td><td>&lt;150 mcg/L breath (বা &lt;30 mg/100 mL blood): fine + <b>50 demerit</b>। বেশি হলে disqualification + fine বা জেল</td></tr>
<tr><td><b>২০ বা বেশি</b></td><td><b>250 mcg</b>/L breath বা <b>50 mg</b>/100 mL blood</td><td>251–400 mcg (51–80 mg): fine + <b>50 demerit</b>। বেশি হলে disqualification + fine বা জেল</td></tr></table></div>
<ul><li>যে drug চালানোর ক্ষমতা কমায় — doctor-এর দেওয়া ওষুধও — নিয়ে চালানো <b>অপরাধ</b>। Doctor-কে জিজ্ঞাসা করুন।</li>
<li>Police যেকোনো সময় থামিয়ে <b>alcohol ও drug test</b> করতে পারে (breath test, saliva test, impairment test)।</li>
<li>Official পরামর্শ: <b>"if you drink at all, don't drive"</b>।</li></ul>
<div class="note">২০২৭-এর পরিকল্পনা: সব learner ও restricted driver-এর জন্য zero limit (তারিখ ঠিক হয়নি)।</div>`,
mem:'২০-এর কম = Zero · ২০+ = 250 breath / 50 blood', ref:[rc('about-limits/alcohol-and-drug-limits','Alcohol and drugs'),LINKS.dn]},
{n:'3.6', t:'Mobile phone', src:'RC DN', h:`
<div class="rule"><ul style="margin:0">
<li>হাতে ধরা phone দিয়ে <b>call, text পড়া/লেখা/পাঠানো, internet</b> — কিছুই নয়। <b>লাল বাতিতে থেমে থাকলেও</b> প্রযোজ্য।</li>
<li>Phone গাড়িতে <b>mount</b> করা থাকলে call-এর জন্য <b>কদাচিৎ ও সংক্ষেপে</b> touch করা যায়।</li>
<li>Exception: নিরাপদে থামা সম্ভব না হলে <b>111</b> বা <b>*555</b> call।</li>
<li>Penalty: fine + <b>20 demerit points</b>।</li>
</ul></div>`,
mem:'হাতে phone = 20 demerit · লাল বাতিতেও', ref:[rc('about-driver-responsibility/responsible-driving','Responsible driving'),LINKS.demerit]},
{n:'3.7', t:'Fatigue (ক্লান্তি)', src:'DR DN', h:`
<ul><li>প্রতি <b>২ ঘণ্টায়</b> বিরতি — গাড়ি থেকে নেমে হাঁটুন।</li>
<li>সম্ভব হলে অন্য অভিজ্ঞ driver-এর সাথে ভাগ করে চালান।</li>
<li>যখন সাধারণত ঘুমান সেই সময়ে চালাবেন না; লম্বা flight-এর পর আগে ঘুমান।</li>
<li>ভারী, চর্বিযুক্ত বা মিষ্টি খাবার নয়; পানি খান।</li></ul>
<h4>ক্লান্তির লক্ষণ — এখনই থামুন</h4>
<p>মনোযোগ বা চোখ খোলা রাখতে কষ্ট · দিবাস্বপ্ন · sign বা exit মিস · হাই তোলা, চোখ ঘষা · lane থেকে সরে যাওয়া বা খুব কাছে চলে যাওয়া · অস্থির লাগা।</p>
<ul><li><b>Power nap ১৫–২০ মিনিট</b> (Driving in NZ বলে ১৫–৩০); <b>৪০ মিনিটের বেশি নয়</b>।</li>
<li>Nap শুধু একটু সময় দেয়, ক্লান্তি সারায় না — আসল সমাধান ৭–৮ ঘণ্টা ঘুম।</li></ul>`,
mem:'প্রতি ২ ঘণ্টায় বিরতি · nap ১৫–২০ মিনিট', ref:[dr('bonus-skills/preparing-and-planning-for-a-journey','Planning a journey'),LINKS.dn]},
{n:'3.8', t:'Demerit points ও penalty', src:'RC', h:`
<table><tr><th>বিষয়</th><th>ফল</th></tr>
<tr><td><b>২ বছরে ১০০+</b> demerit</td><td><b>৩ মাস suspension</b>; licence বাতিল, নতুন licence নিতে হবে</td></tr>
<tr><td>হাতে phone</td><td>20 demerit</td></tr>
<tr><td>Learner শর্ত ভাঙা</td><td>25–35 demerit + $100</td></tr>
<tr><td>Restricted শর্ত ভাঙা</td><td>35 demerit + $100</td></tr>
<tr><td>Alcohol (উপরের সীমার মধ্যে)</td><td>50 demerit + fine</td></tr>
<tr><td>Police থামতে বললে না থামা</td><td>35 demerit, গ্রেপ্তার, গাড়ি জব্দ, $10,000 পর্যন্ত fine</td></tr>
<tr><td>Emergency vehicle-কে পথ না দেওয়া</td><td>$150 fine</td></tr>
<tr><td>Limit-এর চেয়ে ৪০+ km/h বেশি</td><td>সাথে সাথে ২৮ দিন suspension</td></tr>
<tr><td>Disqualified/suspended অবস্থায় চালানো</td><td>গাড়ি ২৮ দিন <b>impound</b></td></tr>
<tr><td>Careless/dangerous driving</td><td>$20,000 পর্যন্ত fine, ১০ বছর পর্যন্ত জেল</td></tr></table>`,
mem:'১০০ demerit / ২ বছর = ৩ মাস suspension', ref:[rc('about-driver-responsibility/stepping-over-the-line','Stepping over the line'),LINKS.demerit]},
{n:'3.9', t:'Keep left', src:'DN DR', h:`
<div class="rule"><ul style="margin:0">
<li>NZ-এ সবসময় <b>বাম দিকে</b> চালান — প্রতিটি intersection-এ ও রাস্তায় ঢোকার সময়।</li>
<li><b>Corner কাটবেন না</b>।</li>
<li>Centreline পার হবেন শুধু নিরাপদে overtake বা turn করতে।</li>
<li>Multi-lane রাস্তায় <b>বাম lane</b> — শুধু overtake, ডানে turn-এর প্রস্তুতি, বা বাম lane বন্ধ/ভরা থাকলে ডানে।</li>
</ul></div>`,
mem:'Keep left · corner কাটবেন না', ref:[LINKS.dn,dr('driving-on-multi-laned-roads/driving-on-multi-laned-roads','Multi-laned roads')]}
]},
/* =================================================================== 4 */
{id:'signs', icon:'🚦', title:'Signs, Lights, Markings', intro:'আকৃতি ও রং দেখে sign চেনা, traffic light ও arrow, রাস্তার দাগ।',
subs:[
{n:'4.1', t:'আকৃতি ও রং — মূল ধারণা', src:'RC', h:`
<div class="signs">
<div class="sign"><img src="img/sign-stop.png" alt="STOP" onclick="zoom(this)"><b>STOP</b> (octagon)<br>পুরো থামুন, তারপর সবাইকে give way</div>
<div class="sign"><img src="img/sign-giveway.png" alt="GIVE WAY" onclick="zoom(this)"><b>GIVE WAY</b> (উল্টো triangle)<br>সবাইকে give way — <b>শুধু STOP sign-এ থাকাদের ছাড়া</b></div>
<div class="sign"><img src="img/sign-speed50.png" alt="Speed limit 50" onclick="zoom(this)"><b>লাল বৃত্ত</b> = আইন (compulsory)</div>
<div class="sign"><img src="img/sign-crossroads.png" alt="Crossroads ahead" onclick="zoom(this)"><b>হলুদ diamond</b> = সতর্কতা</div>
<div class="sign"><div class="g"><div class="dia or"><span>🚧</span></div></div><b>কমলা</b> = temporary (roadworks)</div>
<div class="sign"><div class="g"><div class="rect" style="background:#0a7a3e">MOTORWAY</div></div><b>সবুজ</b> = motorway/direction</div>
<div class="sign"><div class="g"><div class="rect" style="background:#0b5cad">P 60</div></div><b>নীল</b> = তথ্য, parking</div>
<div class="sign"><div class="g"><div class="rect" style="background:#7a4a20">🏞</div></div><b>বাদামি</b> = পর্যটন</div>
</div>`,
mem:'Octagon = STOP · উল্টো triangle = GIVE WAY · লাল বৃত্ত = আইন · হলুদ = সতর্ক', ref:[rc('about-signs/main-types-of-signs','Main types of signs')]},
{n:'4.2', t:'Regulatory sign (মানতেই হবে)', src:'RC', h:`
<div class="signs">
<div class="sign"><img src="img/sign-no-left-turn.png" alt="No left turn" onclick="zoom(this)"><b>No left turn</b></div>
<div class="sign"><img src="img/sign-keep-left.png" alt="Keep left" onclick="zoom(this)"><b>Keep left</b> (island-এর বামে)</div>
<div class="sign"><img src="img/sign-p60.png" alt="P60" onclick="zoom(this)"><b>P60</b> — তীরের দিকে ৬০ মিনিট park</div>
<div class="sign"><img src="img/sign-bus-stop.png" alt="Bus stop" onclick="zoom(this)"><b>Bus stop</b> — park নিষেধ</div>
<div class="sign"><img src="img/sign-roundabout-giveway.png" alt="Roundabout give way" onclick="zoom(this)"><b>Roundabout</b> give way</div>
<div class="sign"><img src="img/sign-school-patrol.png" alt="School patrol stop" onclick="zoom(this)"><b>School patrol STOP</b></div>
</div>
<ul><li>লাল বৃত্তের উপর আড়াআড়ি দাগ = ঐ কাজ নিষেধ (No U-turn, No right turn…)।</li>
<li>Parking: P30/P60/P120 = ৩০/৬০/১২০ মিনিট; <b>Clearway</b> = নির্দিষ্ট সময়ে থামা নিষেধ।</li>
<li>Lane: <b>Bus lane</b>, <b>Transit lane T2/T3</b> (কমপক্ষে ২/৩ জন), <b>Cycle lane</b> — শুধু চালু সময়ে।</li></ul>`,
mem:'আড়াআড়ি দাগ = নিষেধ', ref:[rc('about-signs/main-types-of-signs','Signs')]},
{n:'4.3', t:'Warning sign ও curve speed', src:'RC DN', h:`
<div class="signs">
<div class="sign"><img src="img/sign-crossroads.png" alt="Crossroads" onclick="zoom(this)"><b>Crossroads</b></div>
<div class="sign"><img src="img/sign-lights-ahead.png" alt="Traffic lights ahead" onclick="zoom(this)"><b>Traffic lights</b> সামনে</div>
<div class="sign"><img src="img/sign-giveway-ahead.png" alt="Give way ahead" onclick="zoom(this)"><b>Give way</b> সামনে</div>
<div class="sign"><img src="img/sign-stop-ahead.png" alt="Stop ahead" onclick="zoom(this)"><b>Stop</b> সামনে</div>
<div class="sign"><img src="img/sign-chevron.png" alt="Chevron" onclick="zoom(this)"><b>Chevron</b> — বাঁকের দিক</div>
<div class="sign"><img src="img/sign-slippery.png" alt="Slippery" onclick="zoom(this)"><b>Slippery</b> — brake আস্তে</div>
<div class="sign"><img src="img/sign-children.png" alt="Children" onclick="zoom(this)"><b>Children</b></div>
<div class="sign"><img src="img/sign-dip.png" alt="Dip" onclick="zoom(this)"><b>Dip</b></div>
<div class="sign"><img src="img/sign-stock.png" alt="Stock" onclick="zoom(this)"><b>Stock</b> — horn নয়</div>
</div>
<div class="rule"><b>Curve warning sign</b>-এর সংখ্যা (যেমন 35) = <b>ভালো অবস্থায়</b> নিরাপদ ও আরামদায়ক speed-এর <b>পরামর্শ</b>। তীর দেখায় বাঁক কোন দিকে।</div>`,
mem:'Curve sign-এর সংখ্যা = ভালো অবস্থায় পরামর্শ speed', ref:[rc('about-limits/speed-limits','Curve warning signs'),LINKS.dn]},
{n:'4.4', t:'One-lane bridge', src:'DN RC', h:`
<div class="signs">
<div class="sign"><img src="img/sign-bridge-giveway.png" alt="One-lane bridge — give way" onclick="zoom(this)" style="height:120px"><b>লাল বৃত্ত, আপনার দিকের তীর ছোট লাল</b><br>→ <b>আপনি give way</b></div>
<div class="sign"><img src="img/sign-bridge-priority.png" alt="One-lane bridge — priority" onclick="zoom(this)" style="height:120px"><b>নীল আয়তক্ষেত্র, আপনার তীর বড় সাদা</b><br>→ অন্যদিক থেকে কেউ না এলে যেতে পারেন</div>
</div>
<p>হলুদ warning sign আগে থেকে জানায় সামনে one-lane bridge। Slow করুন, অন্যদিক থেকে গাড়ি আসছে কিনা দেখুন।</p>`,
mem:'ছোট লাল তীর = আমি থামব', ref:[LINKS.dn,rc('about-driving/giving-way/giving-way-on-one-lane-bridges','One-lane bridges')]},
{n:'4.5', t:'Traffic lights ও arrow', src:'RC DR', img:[['cartoon/p19_1.svg','Traffic lights ও arrow']], h:`
<table><tr><th>Signal</th><th>মানে</th></tr>
<tr><td>🔴 Red</td><td>থামুন</td></tr>
<tr><td>🟡 Yellow</td><td><b>থামুন</b> — যদি না এত কাছে থাকেন যে নিরাপদে থামা সম্ভব নয়</td></tr>
<tr><td>🟢 Green</td><td>নিরাপদ হলে যান। <b>ডানে</b> turn করলে মুখোমুখি <b>সোজা</b> ও <b>বামে turn</b> করা গাড়িকে give way; রাস্তা পার হওয়া pedestrian-কেও give way</td></tr>
<tr><td>🔴➡ Red arrow</td><td>ঐ দিকে যাওয়া নিষেধ (বামের লাল arrow pedestrian-দের রক্ষা করে)</td></tr>
<tr><td>🟡➡ Yellow arrow</td><td>ঐ দিকে থামুন, যদি না নিরাপদে থামা অসম্ভব</td></tr>
<tr><td>🟢➡ Green arrow</td><td>ঐ দিকে নিরাপদ হলে যান (মুখোমুখি traffic থামানো)</td></tr>
<tr><td>🟡 Flashing yellow</td><td>Light নষ্ট — <b>give way rules</b> মানুন; সব দিক flashing হলে <b>ডান দিকের গাড়িকে give way</b></td></tr>
<tr><td>সাদা <b>B</b></td><td>শুধু bus (আর bus lane বৈধভাবে ব্যবহারকারী)</td></tr></table>
<h4>দুটো গুরুত্বপূর্ণ নিয়ম</h4>
<ul><li><b>Blocking rule</b>: ওপারে আপনার গাড়ির জায়গা না থাকলে intersection-এ ঢুকবেন না।</li>
<li>ডানে turn, arrow নেই: কেউ আগে থেকে অপেক্ষা না করলে intersection-এর ভেতরে এগিয়ে gap-এর অপেক্ষা করা যায়। হলুদ/লাল হলে সোজা আসা traffic থামার পর turn শেষ করুন।</li></ul>`,
mem:'হলুদ = থামো (নিরাপদে পারলে) · flashing হলুদ = ডানকে give way', ref:[rc('about-driving/giving-way/the-give-way-rules','Traffic signals'),dr('city-and-town-driving/driving-through-complex-intersections','Complex intersections')]},
{n:'4.6', t:'রাস্তার দাগ (markings)', src:'RC DN DR', h:`
<table><tr><th>দাগ</th><th>মানে</th></tr>
<tr><td>সাদা <b>dashed</b> centreline</td><td>নিরাপদ হলে overtake করা যায়</td></tr>
<tr><td>আপনার দিকে <b>একটানা হলুদ</b> (no-passing line)</td><td>Overtake করা খুব বিপজ্জনক — <b>নিষেধ</b></td></tr>
<tr><td><b>দুটি হলুদ</b> লাইন</td><td>কোনো দিক থেকেই overtake নয়</td></tr>
<tr><td>রাতে হলুদ reflector / সাদা reflector</td><td>হলুদ = no-passing · সাদা = passing line</td></tr>
<tr><td>রাস্তার কিনারে <b>ভাঙা হলুদ</b> লাইন</td><td><b>No stopping</b> — থামা বা park নয়</td></tr>
<tr><td>সাদা <b>limit line</b></td><td>থামার জায়গা (STOP, traffic light, crossing)</td></tr>
<tr><td><b>Flush median</b> (মাঝে diagonal সাদা দাগ)</td><td>ডানে turn-এর অপেক্ষা; সাধারণ চলাচলের জন্য নয়</td></tr>
<tr><td>সাদা <b>diamond</b></td><td>সামনে pedestrian crossing</td></tr>
<tr><td>Lane-এ <b>তীর</b></td><td>ঐ lane থেকে কোন দিকে যাবেন</td></tr>
<tr><td>হলুদ আয়তক্ষেত্র ও বৃত্ত / হলুদ তীর</td><td>Fire hydrant — এর উপর বা ৫০ cm-এর মধ্যে park নয়</td></tr></table>`,
mem:'হলুদ একটানা = overtake নয় · ভাঙা হলুদ কিনারে = থামা নয়', ref:[LINKS.dn,dr('higher-speed-driving/overtaking','Overtaking'),rc('about-driving/stopping-and-parking/where-not-to-park','Where not to park')]}
]},
/* =================================================================== 5 */
{id:'giveway', icon:'↔️', title:'Give Way ও Intersections', intro:'Theory test-এ সবচেয়ে বেশি প্রশ্ন (I30–I49) এখান থেকে। Restricted test-এ give way না করা = immediate fail।',
subs:[
{n:'5.1', t:'Give way-এর মূল নিয়ম (official ক্রম)', src:'RC DN', h:`
<div class="mem"><b>সূত্র ১:</b> Turning → <b>Straight</b>-কে give way<br><b>সূত্র ২:</b> <b>Right</b>-turner → মুখোমুখি <b>Left</b>-turner-কে give way<br><b>সূত্র ৩:</b> T-এর নিচ (terminating) → উপরের রাস্তাকে give way<br><b>সূত্র ৪:</b> বাকি সব ক্ষেত্রে → <b>ডান দিকের</b>-কে give way</div>
<div class="rule"><ol style="margin:0">
<li><b>STOP sign</b>: limit line-এ <b>পুরো</b> থামুন, তারপর <b>সবাইকে</b> give way।</li>
<li><b>Give Way sign</b>: সবাইকে give way — <b>শুধু STOP sign-এ থাকাদের ছাড়া</b>।</li>
<li><b>Turn করলে</b>, যারা turn করছে না তাদের give way — cycle lane ও bus lane-এর cyclist, bus lane-এর গাড়ি, cycle lane-এর <b>e-scooter</b> সহ।</li>
<li><b>ডানে turn</b> করলে মুখোমুখি <b>বামে turn</b> করা গাড়িকে give way — দুজনে একই control-এ থাকলেও (দুজনেই STOP, দুজনেই Give Way, বা দুজনেই green)।</li>
<li>Uncontrolled intersection-এ <b>centreline-এর পথ ছেড়ে</b> গেলে আইনত আপনি "turning" — centreline ধরে চলা গাড়িকে give way।</li>
<li><b>Terminating road</b> (T-এর নিচ) থেকে → continuing road-এর traffic-কে give way। <b>Driveway-তেও একই</b>।</li>
<li><b>Driveway</b> থেকে বের হওয়া/ঢোকা: রাস্তার সবাইকে <b>এবং footpath, cycle path, shared path-এর সবাইকে</b> give way।</li>
<li><b>৬০ km/h বা কম</b> রাস্তায়: bus stop, রাস্তার পাশ বা bus lane থেকে বের হতে চাওয়া <b>bus</b>-কে give way (bus কমপক্ষে ৩ সেকেন্ড indicate করবে)।</li>
<li>বাকি সব ক্ষেত্রে <b>ডান দিকের</b> গাড়িকে give way — যেমন roundabout, uncontrolled crossroads, সব দিকে flashing yellow।</li>
</ol></div>
<div class="tip">Give way মানে: যাকে give way করছেন তাকে <b>থামতে, brake করতে, slow করতে বা সরে যেতে হবে না</b>।</div>`,
mem:'Turning→Straight · Right→Left · T-নিচ→উপর · বাকি→ডান', ref:[rc('about-driving/giving-way/the-give-way-rules','The give way rules'),LINKS.upd,LINKS.dn]},
{n:'5.2', t:'উদাহরণ দিয়ে give way', src:'RC DR', h:`
<div class="ex"><b>A.</b> আপনি ডানে turn করবেন, মুখোমুখি গাড়ি <b>সোজা</b> যাবে → সূত্র ১ → <b>আপনি</b> give way।</div>
<div class="ex"><b>B.</b> আপনি ডানে, মুখোমুখি গাড়ি <b>বামে</b> turn (একই রাস্তায় ঢুকবেন) → সূত্র ২ → <b>আপনি</b> give way।</div>
<div class="ex"><b>C.</b> আপনি বামে, মুখোমুখি গাড়ি ডানে → সে আপনাকে give way করবে — তবু নিশ্চিত হয়ে যান।</div>
<div class="ex"><b>D.</b> আপনি <b>STOP</b>-এ, মুখোমুখি গাড়ি <b>Give Way</b>-এ এবং সে ডানে turn করছে, আপনি বামে → Give Way sign-এর গাড়ি STOP-এর গাড়িকে give way করে না → <b>আপনি</b> give way। (Drive-এ এটা স্পষ্ট লেখা)</div>
<div class="ex"><b>E.</b> Uncontrolled T-intersection, আপনি T-এর নিচ থেকে → সূত্র ৩ → <b>সবাইকে</b> give way।</div>
<div class="ex"><b>F.</b> আপনি driveway থেকে বের হচ্ছেন, footpath-এ একজন হাঁটছেন → তাকে give way।</div>
<div class="ex"><b>G.</b> ৫০ km/h রাস্তায় bus stop থেকে bus ডানে indicate করছে → bus-কে give way।</div>
<div class="ex"><b>H.</b> Uncontrolled crossroads, দুজনেই সোজা যাবেন → সূত্র ৪ → <b>ডান দিক থেকে আসা</b> গাড়িকে give way।</div>
<div class="warn">অধিকার থাকলেও give way করতে প্রস্তুত থাকুন — অন্যরা ভুল gap বাছতে পারে।</div>`,
mem:'STOP-এর গাড়ি Give Way-এর গাড়িকে give way করে', ref:[rc('about-driving/giving-way/the-give-way-rules','Give way rules'),dr('driving-on-the-road/choosing-a-gap-in-traffic-and-turning-left-at-an-intersection','Turning left')]},
{n:'5.3', t:'Intersection approach routine — MSCBGA', src:'DR EB', img:[['cartoon/p40_1.svg','ব্যস্ত intersection']], h:`
<div class="mem"><b>"My Safety Cannot Be Given Away"</b> = Mirrors · Signal · Course · Brake · Gear · Assess</div>
<table><tr><th>ধাপ</th><th>কী করবেন</th></tr>
<tr><td><b>M</b> Mirrors</td><td>Slow করার আগে পেছনে কী আছে</td></tr>
<tr><td><b>S</b> Signal</td><td>কমপক্ষে ৩ সেকেন্ড</td></tr>
<tr><td><b>C</b> Course</td><td>ঠিক lane ও position</td></tr>
<tr><td><b>B</b> Brake</td><td>দরকারে থামতে পারার speed-এ (eBook: প্রায় 15–20 km/h)</td></tr>
<tr><td><b>G</b> Gear</td><td>Manual হলে নিচের gear</td></tr>
<tr><td><b>A</b> Assess</td><td>নিরাপদ? সিদ্ধান্ত নিন — নিশ্চিত না হলে অপেক্ষা</td></tr></table>
<p>সামনের গাড়ির পেছনে থামলে এমন দূরত্ব রাখুন যাতে <b>bonnet-এর উপর দিয়ে কিছুটা রাস্তা</b> দেখা যায়। Test-এ Testing Officer দেখবেন আপনি <b>প্রথম নিরাপদ gap</b> নিচ্ছেন কিনা।</p>`,
mem:'MSCBGA = My Safety Cannot Be Given Away', ref:[dr('driving-on-the-road/turning-right-and-going-straight-ahead-at-an-intersection','Turning right'),LINKS.eb]},
{n:'5.4', t:'কখন signal দেবেন', src:'DR DN', h:`
<div class="rule">কমপক্ষে <b>৩ সেকেন্ড</b> আগে — খুব আগেও নয় (বিভ্রান্তি)। কাজ শেষে indicator বন্ধ।</div>
<ul><li>Kerb থেকে বের হওয়া বা kerb-এ ফেরা</li><li>Parking-এ ঢোকা/বের হওয়া</li><li>Turn</li><li>Lane change</li><li>Roundabout</li><li>Centreline পার হওয়া</li><li>আপনার lane শেষ হয়ে merge (যেমন motorway on-ramp)</li><li><b>গাড়ির প্রস্থের চেয়ে বেশি</b> পাশে সরলে (parked গাড়ি বা cyclist পার হতে)</li></ul>
<p>আশেপাশে কেউ না থাকলেও signal দিন। দুই lane মিলে এক হলে (zip merge) signal আইনত বাধ্যতামূলক নয়, তবে দেওয়া ভালো।</p>`,
mem:'৩ সেকেন্ড · কেউ না থাকলেও', ref:[dr('driving-on-the-road/when-you-need-to-signal','When to signal'),LINKS.dn]},
{n:'5.5', t:'বামে turn', src:'DR', img:[['drive-drive07-choosing-a-gap-in-traffic-and-turning-left-at-an-intersection-v1.gif','Drive animation: gap বেছে বামে turn']], h:`
<ol class="steps"><li>Turning lane দেখে ঠিক lane; MSCBGA</li><li>Turn-এর আগে <b>বাম side mirror ও blind spot</b> — ভেতর দিয়ে cyclist আসতে পারে</li><li>ডানে দেখুন</li><li>Corner-এর ওপাশে বামে দেখুন রাস্তা খালি কিনা</li><li>বের হওয়ার সময় আবার ডানে — থামতে প্রস্তুত</li><li>Smooth turn, তারপর traffic-এর speed-এ উঠুন</li></ol>
<p>Practice: প্রথমে footpath থেকে gap বাছাই অভ্যাস করুন — হেঁটে পার হওয়ার মতো gap গাড়িতেও লাগে।</p>`,
mem:'বামে turn: বাম mirror + বাম কাঁধে cyclist', ref:[dr('driving-on-the-road/choosing-a-gap-in-traffic-and-turning-left-at-an-intersection','Turning left')]},
{n:'5.6', t:'ডানে turn ও সোজা যাওয়া', src:'DR', img:[['drive-drive08-turning-right-and-going-straight-ahead-at-an-intersection-v1.gif','Drive animation: ডানে turn ও সোজা যাওয়া']], h:`
<ol class="steps"><li>MSCBGA</li><li>Centreline-এর পাশে, <b>সোজা সামনে মুখ করে</b> থামুন (চাকা ডানে ঘুরিয়ে রাখবেন না)</li><li>প্রযোজ্য give way rule মানুন</li><li><b>দুই দিকে</b> gap দেখুন — ডান ও বাম দুই lane-ই পার হতে হবে</li><li>Turn করে যেখানে যাবেন সেখানে জায়গা আছে কিনা</li><li>রওনার মুহূর্তে শেষবার ডানে-বামে</li><li>Turn শেষে speed মিলিয়ে নিন</li></ol>`,
mem:'ডানে turn = সোজা মুখ করে অপেক্ষা, দুই দিক দেখুন', ref:[dr('driving-on-the-road/turning-right-and-going-straight-ahead-at-an-intersection','Turning right')]},
{n:'5.7', t:'Multi-lane রাস্তায় turn ও lane বাছাই', src:'DR RC', img:[['drive-lane03-turning-right-onto-multilaned-roads.gif','Drive animation: multi-lane রাস্তায় ডানে ঢোকা'],['drive-lane04-turning-right-off-multi-laned-roads.gif','Drive animation: multi-lane রাস্তা থেকে ডানে বের হওয়া']], h:`
<div class="rule"><b>সবসময় আপনার সবচেয়ে কাছের lane-এ ঢুকুন</b> — বামে turn → বাম (kerb-এর পাশের) lane · ডানে turn → centreline-এর পাশের lane। One-way ও two-way দুই রাস্তাতেই।</div>
<ul><li>Lane arrow না থাকলে: বাম lane = বামে, ডান lane = ডানে, সোজা = যেকোনো lane।</li>
<li>দুই দিকে <b>অন্তত দুবার</b> দেখুন; দুই lane-এ গাড়ির speed আলাদা হতে পারে।</li>
<li><b>Multi-lane থেকে ডানে বের হওয়া</b>: আগেই ডান lane; right-turn bay বা flush median থাকলে সেখানে; মুখোমুখি <b>দুই lane-েই</b> gap লাগবে; বড় গাড়ির আড়ালে ছোট গাড়ি লুকিয়ে থাকতে পারে।</li>
<li>Right-turn bay দিয়ে সোজা যাওয়া গাড়িকে overtake করা যাবে না।</li></ul>`,
mem:'Turn = সবচেয়ে কাছের lane-এ', ref:[dr('driving-on-multi-laned-roads/turning-onto-multi-laned-roads','Turning onto multi-laned roads'),dr('driving-on-multi-laned-roads/turning-right-off-multi-laned-roads','Turning right off')]},
{n:'5.8', t:'One-way street-এ turn', src:'DR', img:[['drive-lane06-turning-into-one-way-streets.gif','Drive animation: one-way street-এ turn'],['cartoon/p45_2.svg','One way sign']], h:`
<ul><li>সবচেয়ে কাছের lane: <b>বামে → বাম lane</b>, <b>ডানে → ডান lane</b> (lane marking অন্য কিছু না বললে)।</li>
<li>ডানে turn করলে সোজা যাওয়া traffic-কে give way।</li>
<li>মুখোমুখি গাড়িও একই রাস্তায় turn করলে দুজনে একসাথে যেতে পারেন (আলাদা lane), তবে সে আপনার lane-এ সরে আসতে পারে।</li>
<li>One-way রাস্তায় দুই পাশেই park করা যায়।</li></ul>`,
mem:'One-way: বামে→বাম lane, ডানে→ডান lane', ref:[dr('driving-on-multi-laned-roads/turning-into-one-way-streets','One-way streets'),LINKS.dn]},
{n:'5.9', t:'Complex intersection ও শহরের traffic', src:'DR', h:`
<ul><li>Sign, marking, control (Give Way, STOP, light) আগে থেকে দেখুন; lane arrow মানুন।</li>
<li>নিজের lane-এ থেকেই intersection পার হন।</li>
<li><b>Special vehicle lane</b> (bus/transit/cycle): আপনার গাড়ি শর্ত না মানলে turn করতে সর্বোচ্চ <b>৫০ m</b>; lane-এ থাকা সবাইকে (cyclist সহ) give way।</li>
<li>অন্য driver কোথায় তাকাচ্ছে, চাকা কোন দিকে — দেখে আগাম বুঝুন।</li>
<li>Lane-এর মাঝ দিয়ে বা বাম দিয়ে আসা motorcycle/cyclist খেয়াল রাখুন।</li>
<li>Restricted test শহরে হয় — গ্রামে থাকলে আগে কয়েকবার ব্যস্ত traffic-এ practice করুন।</li></ul>`,
mem:'Special lane-এ turn করতে সর্বোচ্চ 50 m', ref:[dr('city-and-town-driving/driving-through-complex-intersections','Complex intersections'),dr('city-and-town-driving/driving-in-traffic-town-and-city-traffic','Town and city traffic')]}
]},
/* =================================================================== 6 */
{id:'round', icon:'⭕', title:'Roundabouts', intro:'Signal ও give way — roundabout থেকে বের হওয়ার signal ভুলে যাওয়া test-এর একটা সাধারণ ভুল।',
subs:[
{n:'6.1', t:'নিয়ম ও signal', src:'RC DR DN', img:[['drive-drive10-driving-through-roundabouts.gif','Drive animation: roundabout-এ ডানে যাওয়া'],['sign-roundabout-giveway.png','Roundabout give way']], h:`
<div class="rule"><ul style="margin:0"><li><b>Clockwise</b> (ঘড়ির কাঁটার দিকে) ঘুরুন।</li><li><b>ডান দিক থেকে আসা</b> সব traffic-কে give way।</li></ul></div>
<table><tr><th>কোথায় যাবেন</th><th>ঢোকার সময়</th><th>বের হওয়ার সময়</th></tr>
<tr><td>বামে</td><td><b>Left</b></td><td>Left চালু থাকে</td></tr>
<tr><td>সোজা</td><td><b>কোনো signal নয়</b></td><td>আপনার exit-এর <b>আগের exit পার হলেই Left</b></td></tr>
<tr><td>ডানে (অর্ধেকের বেশি ঘোরা)</td><td><b>Right</b></td><td>আগের exit পার হলেই <b>Left</b></td></tr></table>`,
mem:'বামে L · সোজা কিছু না · ডানে R — বের হওয়ার আগে সবসময় L', ref:[dr('driving-on-the-road/driving-through-roundabouts','Roundabouts'),dr('driving-on-the-road/when-you-need-to-signal','Signalling at roundabouts'),LINKS.dn]},
{n:'6.2', t:'Approach ও gap বাছাই', src:'DR EB', img:[['cartoon/p46_1.svg','Simple roundabout'],['cartoon/p46_2.svg','Roundabout ahead sign']], h:`
<ol class="steps"><li>দূর থেকে layout দেখুন, কোন exit নেবেন ঠিক করুন</li><li>MSCBGA — signal উপরের টেবিল অনুযায়ী</li><li>Speed কমান, দরকারে থামুন</li><li>Gap বাছুন</li></ol>
<ul><li>সোজা যাওয়া গাড়ি সাধারণত turn করা গাড়ির চেয়ে দ্রুত।</li>
<li>অন্যদের signal ভুল হতে পারে — চাকা ও গতিও দেখুন।</li>
<li>বড় গাড়ির আড়ালে cyclist, scooter, motorbike লুকিয়ে থাকে।</li>
<li>Gap নিয়ে নিশ্চিত না হলে অপেক্ষা।</li></ul>`,
mem:'নিশ্চিত না হলে অপেক্ষা', ref:[dr('driving-on-the-road/driving-through-roundabouts','Roundabouts')]},
{n:'6.3', t:'Multi-lane roundabout', src:'DR', img:[['cartoon/p47_1.svg','Multi-lane roundabout — উপর থেকে']], h:`
<ul><li>কমপক্ষে ১২ সেকেন্ড আগে sign ও lane marking দেখে lane বাছুন।</li>
<li>ভেতরে lane বদলাতে হলে আগেভাগে signal, আর ঐ lane-এ থাকা গাড়িকে give way।</li>
<li>আপনার exit-এর আগের exit পার হলে: <b>mirror → left signal → বাম কাঁধে দেখা</b>।</li>
<li><b>Bus</b>-এর মতো বড় গাড়ি lane-এর বাইরে আসতে পারে — পিছিয়ে থেকে আগে যেতে দিন।</li>
<li>আগে ছোট roundabout-এ practice করুন।</li></ul>`,
mem:'বের হওয়ার আগে: Mirror → Left signal → বাম কাঁধ', ref:[dr('driving-on-multi-laned-roads/driving-through-multi-laned-roundabouts','Multi-laned roundabouts')]}
]},
/* =================================================================== 7 */
{id:'skills', icon:'🛣️', title:'Driving Skills ও রাস্তা', intro:'Kerb থেকে বের হওয়া, lane change, merge, flush median, overtaking, বেশি speed, curve, motorway, গ্রামের রাস্তা।',
subs:[
{n:'7.1', t:'Kerb থেকে বের হওয়া ও kerb-এ থামা', src:'DR', img:[['drive-drive03-pulling-out.gif','Drive animation: kerb থেকে বের হওয়া']], h:`
<h4>বের হওয়া</h4>
<ol class="steps"><li>Rear-view ও ডান side mirror</li><li>কমপক্ষে <b>৩ সেকেন্ড ডানে</b> indicate</li><li>Gear-এ দিন</li><li>আবার mirror ও <b>ডান কাঁধে</b> দেখা (গাড়ি, cyclist, pedestrian)</li><li>নিরাপদ gap-এ ধীরে steering ঘুরিয়ে বের হন</li><li>Speed-এ উঠে আবার mirror</li></ol>
<h4>Kerb-এ থামা</h4>
<ol class="steps"><li>আইনসঙ্গত ও নিরাপদ জায়গা খুঁজুন</li><li><b>৩ সেকেন্ড বামে</b> indicate</li><li>Mirror ও <b>বাম কাঁধে</b> blind spot (cyclist)</li><li>Smooth ভাবে slow করে kerb-এর দিকে</li><li>Kerb-এর সমান্তরালে, <b>৩০ cm-এর মধ্যে</b> থামুন</li><li>Neutral/park, handbrake, engine বন্ধ</li></ol>`,
mem:'Kerb থেকে ৩০ cm-এর মধ্যে', ref:[dr('driving-on-the-road/pulling-out-and-returning-to-the-side-of-the-road','Pulling out')]},
{n:'7.2', t:'Lane change', src:'DR', img:[['cartoon/p38_3.svg','Multi-lane রাস্তা']], h:`
<ol class="steps"><li>১২ সেকেন্ড সামনে hazard দেখুন</li><li>যে lane-এ যাবেন তা mirror ও কাঁধের উপর দিয়ে দেখুন</li><li>কমপক্ষে ৩ সেকেন্ড signal</li><li>দরকারে speed adjust করে gap তৈরি (limit-এর মধ্যে)</li><li>আবার সামনে, mirror, blind spot — বিশেষ করে cyclist ও motorcyclist</li><li>Smooth ভাবে lane বদলান</li><li>Mirror; speed ও দূরত্ব মিলিয়ে নিন</li></ol>
<p>তিন lane থাকলে তৃতীয় lane-এর গাড়িও একই gap-এ আসতে পারে।</p>`,
mem:'Mirror → Signal → Shoulder → Move', ref:[dr('driving-on-multi-laned-roads/changing-lanes','Changing lanes')]},
{n:'7.3', t:'Merging — zip ও lane শেষ', src:'DR RC', img:[['drive-lane05-merging.gif','Drive animation: merging'],['cartoon/p39_1.svg','Merge']], h:`
<div class="mem"><b>Zip merge</b>: দুই lane এক হলে পালাক্রমে — বাম থেকে একটা, ডান থেকে একটা।</div>
<ul><li>Merge-এর আগে চারপাশের গাড়ির speed-এ উঠুন; mirror-signal-shoulder।</li>
<li><b>আপনার lane শেষ হলে</b>: ডানে signal, <b>lane-এর পুরো দৈর্ঘ্য</b> ব্যবহার করে speed তুলুন, আগেই gap বেছে নিন।</li>
<li>সামনে traffic slow হলে হয়তো merge আসছে।</li>
<li>Merge শেষে indicator বন্ধ।</li></ul>`,
mem:'Merge like a zip', ref:[dr('driving-on-multi-laned-roads/merging','Merging')]},
{n:'7.4', t:'Flush median', src:'DR RC EB', img:[['drive-city02-using-flush-medians.gif','Drive animation: flush median ব্যবহার'],['cartoon/p22_1.svg','Flush median diagram']], h:`
<p>রাস্তার মাঝে diagonal সাদা দাগ — <b>ডানে turn</b>-এর সময় traffic আটকে না রেখে অপেক্ষার জায়গা। সাধারণ চলাচলের জন্য নয়।</p>
<h4>Main road থেকে ডানে বের হতে</h4>
<ol class="steps"><li>ঠিক lane</li><li>Median-এ কোথায় থামবেন আগে ঠিক করুন</li><li>MSCBGA</li><li>নিরাপদ gap-এ turn</li></ol>
<h4>Main road-এ ঢুকতে (দুই ধাপে)</h4>
<ol class="steps"><li>ডান দিকে gap দেখুন, বামে দেখুন কেউ একই জায়গায় median-এ আসছে কিনা</li><li>Median-এ অপেক্ষা</li><li><b>বামে signal</b>, mirror ও বাম কাঁধে দেখা</li><li>Gap পেলে speed তুলে মিশে যান</li></ol>
<div class="rule">Flush median-এ সর্বোচ্চ <b>৫০ m</b> চালানো যায়। নিরাপদে ১.৫ m দূরত্ব রেখে cyclist পার হতেও flush median ব্যবহার করা যায়।</div>`,
mem:'Flush median = ডানে turn-এর অপেক্ষাঘর', ref:[dr('city-and-town-driving/using-a-flush-median','Flush median'),LINKS.upd]},
{n:'7.5', t:'Special vehicle lane (bus, transit, cycle)', src:'DR EB', img:[['cartoon/p17_1.svg','Bus ও special lane']], h:`
<ul><li>Marking ও sign দেখে চিনুন; অনেকগুলো নির্দিষ্ট সময়েই চালু।</li>
<li>শর্ত না মানলে ঢুকবেন শুধু turn করতে বা driveway/parking-এ যেতে — সর্বোচ্চ <b>৫০ m</b>।</li>
<li>ঢোকার আগে: mirror → ৩ সেকেন্ড signal → blind spot → lane-এর সবাইকে (cyclist, e-scooter সহ) give way → smooth ভাবে ঢুকুন।</li>
<li>বামে turn-এর লাইনে দাঁড়িয়ে <b>cycle lane-এর উপর থামবেন না</b>।</li></ul>`,
mem:'Special lane = সর্বোচ্চ 50 m', ref:[dr('city-and-town-driving/driving-through-complex-intersections','Special vehicle lanes'),LINKS.eb]},
{n:'7.6', t:'Overtake — কখন নিরাপদ ও আইনসঙ্গত', src:'DN DR RC', img:[['cartoon/p14_4.svg','Overtake-এর আগে ভাবুন']], h:`
<div class="rule"><ul style="margin:0">
<li>Overtake <b>শেষ হওয়ার পরও</b> সামনে কমপক্ষে <b>১০০ m পরিষ্কার রাস্তা</b> থাকতে হবে — পুরো সময়।</li>
<li><b>Corner বা বাঁকের কাছে কখনো নয়</b>।</li>
<li>আপনার দিকে একটানা হলুদ বা দুটি হলুদ লাইন = নিষেধ।</li>
<li>Overtake করতেও <b>speed limit</b> পার হওয়া যাবে না — limit-এর মধ্যে না পারলে overtake করবেন না।</li>
</ul></div>
<ul><li>সম্ভব হলে <b>passing lane</b> পর্যন্ত ধৈর্য ধরুন।</li>
<li>Side street থেকে কেউ বের হতে পারে কিনা দেখুন।</li>
<li>সামনের গাড়ি যত দ্রুত বা লম্বা, তত বেশি জায়গা লাগবে। বড় truck-এর পেছনে সামনে দেখতে না পেলে overtake নয়।</li>
<li>রাতে: হলুদ reflector = no-passing, সাদা = passing।</li></ul>
<p style="font-weight:700">নিশ্চিত না হলে overtake করবেন না।</p>`,
mem:'Overtake শেষেও ১০০ m খালি · বাঁকে কখনো না', ref:[LINKS.dn,dr('higher-speed-driving/overtaking','Overtaking')]},
{n:'7.7', t:'Overtake — ধাপ ও passing lane', src:'DR', img:[['drive-speed05-overtaking.gif','Drive animation: overtaking']], h:`
<ol class="steps"><li>সামনের গাড়ি থেকে কমপক্ষে ২ সেকেন্ড পেছনে</li><li>Right indicate, mirror ও কাঁধে দেখা</li><li>শেষবার — সামনে যথেষ্ট খালি রাস্তা? (বাতিলের জন্য প্রস্তুত থাকুন)</li><li>আবার mirror ও কাঁধ — কেউ আপনাকে overtake করছে কিনা</li><li>পার হওয়ার সময় <b>left indicate</b></li><li>পার হওয়া গাড়ি থেকে যথেষ্ট দূরে কিনা দেখে বাম lane-এ ফিরুন</li></ol>
<p>বাতিল করতে হলে brake করে আগের গাড়ির পেছনে ফিরে যান।</p>
<h4>Passing lane</h4>
<ul><li>Overtake না করলে <b>বাম lane-এ</b> থাকুন এবং <b>speed বাড়াবেন না</b>।</li>
<li>Overtake করলে: দূরত্ব রেখে সামনে দেখুন, ৩ সেকেন্ড signal, ডান lane-এ; পার হয়ে একইভাবে ফিরুন।</li>
<li>Passing lane শেষের sign দেখলে mirror, blind spot, signal দিয়ে merge।</li></ul>`,
mem:'Passing lane-এ পেছনের গাড়ি এলে speed বাড়াবেন না', ref:[dr('higher-speed-driving/overtaking','Overtaking'),dr('higher-speed-driving/using-passing-lanes','Passing lanes')]},
{n:'7.8', t:'বেশি speed-এ সোজা রাস্তা', src:'DR', h:`
<ul><li>৫০ km/h-এর বেশি speed-এ কমপক্ষে ১২ সেকেন্ড সামনে; ৮০–১০০-এ ১২ সেকেন্ড অনেক বেশি দূর।</li>
<li>Side road, merge lane, অন্য lane-এর traffic — সব খেয়াল রাখুন; slow করার সময় বিশেষ করে mirror।</li>
<li>শুরুতে কমপক্ষে ৩ সেকেন্ড, খারাপ অবস্থায় ৪ সেকেন্ড দূরত্ব।</li>
<li>Lane-এর মাঝখানে থাকুন; multi-lane-এ বাম lane।</li>
<li>Limit-এর মধ্যে traffic-এর সাথে মিলিয়ে চালান; অস্বস্তি হলে ধীরে চালানো ঠিক আছে।</li></ul>`,
mem:'বেশি speed = আরও দূরে তাকান, আরও দূরত্ব রাখুন', ref:[dr('higher-speed-driving/driving-straight-at-higher-speeds','Driving straight at higher speeds')]},
{n:'7.9', t:'Curve (বাঁক)', src:'DR EB', img:[['cartoon/p24_2.svg','বাঁকের আগে speed কমান'],['cartoon/p24_3.svg','Centreline পার নয়']], h:`
<ol class="steps"><li>বাঁকের যতটা সম্ভব ভেতরে তাকিয়ে বুঝুন কতটা তীক্ষ্ণ</li><li>Curve sign-এর speed দেখে <b>বাঁকের আগেই</b> slow (আগে mirror)</li><li>Position: <b>ডান বাঁকে বামের দিকে</b>, <b>বাম বাঁকে ডানের দিকে</b> — কিন্তু centreline-এর বামে</li><li>দরকারে gear আগেই নামান</li><li>বাঁকের মধ্যে হালকা accelerator দিয়ে সমান speed — coast করবেন না, brake নয়</li><li>রাস্তা সোজা হলে smooth ভাবে speed তুলুন, mirror</li></ol>
<div class="rule">বাঁকে <b>centreline পার হওয়া বেআইনি</b> — মুখোমুখি সংঘর্ষের ঝুঁকি।</div>
<p>পরপর downhill বাঁক: সোজা অংশে জোরে brake, বাঁকে হালকা। SUV-এর মতো উঁচু গাড়িতে বেশি সাবধান।</p>`,
mem:'বাঁকের আগে brake, বাঁকের মধ্যে নয়', ref:[dr('higher-speed-driving/driving-around-curves-at-higher-speeds','Curves')]},
{n:'7.10', t:'Motorway', src:'DR RC', h:`
<h4>ঢোকা</h4><ol class="steps"><li>On-ramp-এর <b>পুরো দৈর্ঘ্যে</b> motorway-র speed-এ উঠুন</li><li>Mirror, gap বাছুন, ৩ সেকেন্ড signal</li><li>আবার mirror ও blind spot, gap-এ ঢুকুন</li></ol>
<h4>চলার সময়</h4><ul><li>২ সেকেন্ড (খারাপে ৪) দূরত্ব; lane-এর মাঝে; বাম lane।</li><li>Speed limit, exit, lane বন্ধের sign দেখুন।</li></ul>
<div class="rule">Motorway-তে <b>কখনো নয়</b>: থামা (emergency ছাড়া), <b>U-turn</b>, যাত্রী তোলা/নামানো, exit মিস হলে থামা বা reverse — পরের exit পর্যন্ত চলুন।</div>
<h4>বের হওয়া</h4><ul><li>আগে থেকেই ঠিক lane; <b>৩ সেকেন্ড বামে</b> signal।</li><li>Off-ramp-এ না ঢোকা পর্যন্ত speed রাখুন, তারপর কমান।</li></ul>`,
mem:'Motorway: থামা নয়, U-turn নয়, reverse নয়', ref:[dr('higher-speed-driving/motorway-driving','Motorway driving')]},
{n:'7.11', t:'গ্রামের রাস্তা ও gravel', src:'DR DN EB', img:[['cartoon/p16_2.svg','Centreline ছাড়া sealed রাস্তা'],['cartoon/p16_3.svg','Unsealed (gravel) রাস্তা']], h:`
<h4>Centreline ছাড়া sealed রাস্তা</h4>
<ul><li>সরু, আঁকাবাঁকা — মুখোমুখি crash-এর ঝুঁকি বেশি।</li><li>দেখা রাস্তার <b>অর্ধেকে</b> থামতে পারার speed — 100 zone হলেও প্রায়ই অনেক কম।</li><li>যতটা নিরাপদ বামে; কিনারে আলগা gravel ও খাদ।</li><li>Cyclist, pedestrian (footpath নেই), tractor, quad bike, পশু, লুকানো driveway।</li><li>One-lane bridge-এর আগে slow।</li></ul>
<h4>Unsealed (gravel) রাস্তা</h4>
<ul><li>পিচ্ছিল — সব নড়াচড়া <b>smooth ও ধীরে</b>।</li><li>মুখোমুখি গাড়ি এলে আরও slow ও বামে — ধুলো কম, windscreen-এ পাথর কম।</li><li>ধুলোর জন্য following distance বাড়ান।</li><li>গভীর gravel-এ পড়লে খুব slow করে আস্তে steer করে বের হন — হঠাৎ steering-এ গাড়ি উল্টাতে পারে।</li></ul>
<div class="rule">রাস্তায় পশু দেখলে slow করে সাবধানে যান — <b>horn বাজাবেন না</b>।</div>`,
mem:'Centreline নেই = অর্ধেক দূরত্বে থামা · পশু = horn নয়', ref:[dr('higher-speed-driving/driving-in-the-country','Driving in the country'),LINKS.dn]},
{n:'7.12', t:'Suburban রাস্তা', src:'EB DR', img:[['cartoon/p20_2.svg','Suburban রাস্তা']], h:`
<ul><li>Parked গাড়ির আড়াল থেকে শিশু বা pedestrian বের হতে পারে।</li><li>Playground ও school-এর কাছে বাড়তি সাবধান — সকাল ৮–৯টা ও বিকেল ৩–৪টা।</li><li>Give Way, STOP ও unmarked intersection খেয়াল করুন।</li><li>নিজের গাড়ির প্রস্থ বুঝুন — parked গাড়ি পার হতে।</li></ul>`,
mem:'Parked গাড়ির আড়ালে শিশু', ref:[LINKS.eb,dr('city-and-town-driving/driving-around-pedestrian-and-school-crossings','School crossings')]}
]},
/* =================================================================== 8 */
{id:'park', icon:'🅿️', title:'Parking, Turning, Hills', intro:'কোথায় park নিষেধ, parallel park (test-এর মাপ), angle park, U-turn, 3-point turn, পাহাড়।',
subs:[
{n:'8.1', t:'কোথায় থামা/park করা যাবে না', src:'RC DR DN', h:`
<div class="rule"><ul style="margin:0">
<li>রাস্তার <b>ডান পাশে</b> নয় (one-way রাস্তা ছাড়া); <b>উল্টো দিকে মুখ করে</b> park করলে fine বা tow।</li>
<li><b>Intersection</b>, crossing-এর আসার দিক, বা শুধু sign দেওয়া <b>bus stop</b>-এর <b>৬ m</b>-এর মধ্যে নয়।</li>
<li><b>Driveway</b>-এর সামনে বা <b>১ m</b>-এর মধ্যে নয়।</li>
<li>Footpath, traffic island, taxi stand, marked bus stop, <b>cycle lane</b>-এ নয়।</li>
<li><b>ভাঙা হলুদ লাইন</b>-এ নয়।</li>
<li><b>Double parking</b> নয়।</li>
<li>Bus/transit lane-এ চালু সময়ে নয়।</li>
<li>Fire hydrant-এর উপর বা <b>৫০ cm</b>-এর মধ্যে নয় (driver পাশে না থাকলে)।</li>
<li>Corner, বাঁক, পাহাড়, island বা intersection-এর কাছে যেখানে অন্যদের দেখা আটকায় — নয়।</li>
<li>রাস্তার পাশে (margin) জায়গা থাকলে রাস্তার উপর নয়।</li>
</ul></div>`,
mem:'Intersection / crossing ৬ m · driveway ১ m · hydrant ৫০ cm', ref:[rc('about-driving/stopping-and-parking/where-not-to-park','Where not to park'),dr('parking-turning-around-and-hills/parking-on-the-side-of-the-road','Parking on the side of the road'),LINKS.dn]},
{n:'8.2', t:'রাস্তার পাশে park', src:'DR', h:`
<ol class="steps"><li>Park-এর জায়গা দেখুন</li><li>Mirror</li><li>৩ সেকেন্ড বামে signal</li><li>আবার mirror ও blind spot</li><li>আস্তে brake করে smooth ভাবে পাশে</li><li>Kerb-এর সমান্তরাল, <b>৩০ cm-এর মধ্যে</b></li><li>Handbrake; neutral (manual) / park (auto)</li><li>Indicator ও engine বন্ধ</li></ol>
<p>বেশি speed-এর এলাকায় যতটা সম্ভব রাস্তার বাইরে; অন্ধকারে আলোর নিচে বা park light জ্বেলে।</p>`,
mem:'Park = সমান্তরাল, ৩০ cm-এর মধ্যে', ref:[dr('parking-turning-around-and-hills/parking-on-the-side-of-the-road','Parking')]},
{n:'8.3', t:'Reverse করা', src:'DR', img:[['drive-set07-steering-in-reverse-v4.gif','Drive animation: reverse-এ steering'],['cartoon/p48_1.svg','কাঁধের উপর দিয়ে পেছনে তাকান']], h:`
<p>গাড়িতে ওঠার আগে চারপাশে <b>শিশু বা পোষা প্রাণী</b> আছে কিনা দেখুন।</p>
<table><tr><th>Automatic: Brake-Gear-Mirrors</th><th>Manual: Clutch-Gear-Mirrors</th></tr>
<tr><td>Brake চাপুন → R → mirror ও blind spot → বামে ঘুরে rear window দিয়ে দেখুন → brake ছাড়ুন, দরকারে হালকা accelerator</td>
<td>Clutch পুরো → R → mirror ও blind spot → বামে ঘুরে দেখুন → clutch "bite"-এ ধরুন → হালকা accelerator দিয়ে clutch ছাড়ুন</td></tr></table>
<ul><li>চোখ উঁচুতে — যেখানে যেতে চান সেখানে।</li><li>Blind spot, side mirror, side window বারবার।</li><li>এক গাড়ির দৈর্ঘ্য বাকি থাকতে smooth brake (manual-এ clutch-ও)।</li></ul>`,
mem:'Reverse: Brake/Clutch → Gear → Mirrors', ref:[dr('set-up-and-get-moving/steering-in-reverse-auto','Reverse (auto)'),dr('set-up-and-get-moving/steering-in-reverse-manual','Reverse (manual)')]},
{n:'8.4', t:'Reverse parallel park (test-এর মাপসহ)', src:'DR', img:[['drive-park04-reverse-parallel-parking.gif','Drive animation: reverse parallel park']], h:`
<ol class="steps"><li>বামে signal, indicator চালু রেখেই reverse শুরু</li><li>Park করা গাড়ির পাশে: আপনার <b>front door ওর front wheel-এর পাশে</b>, প্রায় <b>আধা মিটার</b> দূরে</li><li>Mirror ও blind spot — পুরো সময় দেখতে থাকুন</li><li>আপনার <b>পেছনের চাকা ওর পেছনের bumper-এর সমান</b> হলে steering <b>বামে</b></li><li>আপনার <b>সামনের bumper ওর পেছনের bumper পার</b> হলেই steering <b>ডানে</b></li><li>দরকারে সামনে এগিয়ে সোজা করুন</li><li>Neutral/park + handbrake</li></ol>
<div class="rule"><b>Restricted test-এ:</b> সর্বোচ্চ <b>৪টি movement</b> · <b>২ মিনিট</b> · সামনের গাড়ির <b>৭ m-এর বেশি</b> পেছনে যাবেন না · শেষে kerb থেকে <b>৩০ cm-এর মধ্যে</b> ও সামনের গাড়ি থেকে <b>১–২ m</b> · kerb-এ ধাক্কা বা kerb-এ ওঠা নয় · বের হতে ডানে ৩ সেকেন্ড signal, সর্বোচ্চ ২ movement।</div>
<p>Tip: electric mirror থাকলে বাম mirror নিচু করুন — kerb দেখা সহজ।</p>`,
mem:'৪ move · ২ মিনিট · ৩০ cm · সামনে থেকে ১–২ m', ref:[dr('parking-turning-around-and-hills/reverse-parallel-parking','Reverse parallel parking')]},
{n:'8.5', t:'Angle park থেকে reverse করে বের হওয়া', src:'DR', img:[['drive-park07-reversing-out-of-an-angle-park.gif','Drive animation: angle park থেকে বের হওয়া'],['cartoon/p50_1.svg','Angle park']], h:`
<ol class="steps"><li>দুদিক ও blind spot দেখুন</li><li>খুব ধীরে <b>সোজা</b> পেছনে যান — বাম কাঁধের উপর দিয়ে দেখুন</li><li>আপনার গাড়ির পেছন <b>বামের গাড়ির পেছন পার হলে</b> steering <b>বামে</b></li><li>সামনের <b>ডান কোণ</b> ডানের গাড়িতে লাগছে না তো?</li><li>বের হয়ে mirror, shoulder check, <b>ডানে signal</b>, তারপর সামনে</li></ol>
<p><b>Reverse শুরুর আগে signal লাগে না</b>; সামনে এগোনোর আগে ডানে signal। ধীরে চলুন যাতে অন্যরা আপনাকে দেখতে পায়।</p>`,
mem:'Angle park: সোজা পেছনে → steering বামে → ডানে signal', ref:[dr('parking-turning-around-and-hills/reversing-out-of-an-angle-park','Reversing out of an angle park')]},
{n:'8.6', t:'U-turn', src:'DR RC', img:[['drive-park02-making-a-u-turn.gif','Drive animation: U-turn']], h:`
<p>শান্ত, সমতল, যথেষ্ট চওড়া রাস্তা যেখানে <b>এক movement</b>-এ ঘোরা যায় এবং দুদিকে ভালো দেখা যায়।</p>
<ol class="steps"><li>Mirror, বামে signal, kerb-এর যত কাছে সম্ভব থামুন</li><li>Mirror</li><li>কমপক্ষে ৩ সেকেন্ড ডানে signal</li><li>শেষবার mirror ও কাঁধ</li><li>বের হয়ে উল্টো দিকে ঘুরুন</li><li>Lane-এ speed তোলার আগে mirror ও কাঁধ — কেউ পার হতে চাইছে কিনা</li></ol>
<div class="rule">U-turn করলে <b>সব</b> traffic-কে give way। নিষেধ: No U-turn sign, একটানা হলুদ লাইন পার হয়ে, <b>motorway</b>-তে। Cul-de-sac-এও একই নিয়ম — signal ও blind spot।</div>`,
mem:'U-turn = সবাইকে give way · motorway-তে কখনো নয়', ref:[dr('parking-turning-around-and-hills/making-u-turns','U-turns')]},
{n:'8.7', t:'3-point turn', src:'DR', img:[['drive-park03-making-three-point-turns.gif','Drive animation: 3-point turn']], h:`
<p>রাস্তা U-turn-এর জন্য সরু হলে। দুদিকে কমপক্ষে <b>৫০ m</b> দেখা যায় এমন সমতল রাস্তা।</p>
<ol class="steps"><li>বামে signal, kerb-এর সমান্তরালে ৩০ cm-এর মধ্যে থামুন</li><li>৩ সেকেন্ড ডানে signal</li><li>Mirror ও ডান কাঁধ</li><li><b>সামনে → পেছনে → সামনে</b> — সর্বোচ্চ ৩ movement</li><li>শেষে ঠিক পাশে ফিরে mirror ও কাঁধ দেখে traffic-এ মিশুন</li></ol>
<div class="rule"><b>Test-এ:</b> driveway বা কারো জমি ব্যবহার নয় · kerb-এ ওঠা বা জোরে ধাক্কা নয় · <b>২ মিনিট</b>। Parallel park-এর জায়গা না থাকলে তবেই 3-point turn চাওয়া হয়।</div>`,
mem:'3-point: ৩ move, ২ মিনিট, driveway নয়', ref:[dr('parking-turning-around-and-hills/making-3-point-turns','3-point turns')]},
{n:'8.8', t:'পাহাড়ে park — চাকা কোন দিকে', src:'DR', img:[['cartoon/p52_2.svg','পাহাড়ি রাস্তা']], h:`
<table><tr><th>মুখ</th><th>Steering</th><th>সামনের চাকা</th><th>Manual-এ gear</th></tr>
<tr><td><b>Downhill</b> (নিচের দিকে)</td><td><b>বামে</b></td><td><b>kerb-এর দিকে</b></td><td>Reverse</td></tr>
<tr><td><b>Uphill</b> (উপরের দিকে)</td><td><b>ডানে</b></td><td><b>kerb থেকে দূরে</b></td><td>1st</td></tr></table>
<div class="mem">সহজ মনে রাখা: যেকোনো ক্ষেত্রে গাড়ি গড়িয়ে গেলে <b>kerb-এ আটকে</b> যাবে — downhill-এ চাকার সামনে, uphill-এ চাকার পেছনে।</div>
<p>Automatic-এ P + handbrake। Space-saver বা চাকা বদলানোর সময়ও একই gear নিয়ম (flat = 1st)।</p>`,
mem:'Downhill → বামে (kerb-এর দিকে) · Uphill → ডানে', ref:[dr('parking-turning-around-and-hills/parking-on-the-side-of-the-road','Parking on hills'),dr('parking-turning-around-and-hills/hill-driving-auto','Hill driving (auto)')]},
{n:'8.9', t:'Hill start ও পাহাড়ে চালানো', src:'DR', img:[['cartoon/p53_1.svg','Uphill'],['cartoon/p54_1.svg','Handbrake ও steering']], h:`
<h4>Uphill — Automatic</h4><ol class="steps"><li>Drive-এ</li><li>Handbrake একটু তুলে button চেপে ধরে রাখুন</li><li>হালকা accelerator — গাড়ি টানছে</li><li>আস্তে handbrake ছাড়ুন (পেছালে আবার তুলুন)</li><li>Signal, mirror, কাঁধ → smooth ভাবে রওনা</li></ol>
<h4>Uphill — Manual</h4><ol class="steps"><li>1st gear</li><li>Handbrake ধরে রাখুন</li><li>Clutch "bite" পর্যন্ত, তারপর সামান্য চেপে steady</li><li>সমতলের চেয়ে বেশি accelerator</li><li>আস্তে handbrake ছাড়ুন</li><li>Signal, mirror, কাঁধ → accelerator দিয়ে clutch ছাড়ুন</li></ol>
<h4>Downhill</h4><ol class="steps"><li>Footbrake চাপুন</li><li>Drive / 1st</li><li>Handbrake ছাড়ুন</li><li>(manual) footbrake আস্তে ছাড়তে ছাড়তে clutch ছাড়ুন</li><li>Signal ডানে, mirror, কাঁধ → দরকারমতো accelerator</li></ol>
<ul><li>Uphill: বেশি accelerator, manual-এ নিচের gear ও rev বেশি।</li><li>Downhill: আগে ও জোরে brake লাগে; নিচের gear speed ধরে রাখে (খুব খাড়া পাহাড়ে auto-তে L/1/2)।</li><li>Electric parking brake থাকলে শুধু footbrake থেকে accelerator-এ পা নিন।</li></ul>`,
mem:'Uphill start = bite + accelerator, তারপর handbrake', ref:[dr('parking-turning-around-and-hills/hill-driving-manual','Hill (manual)'),dr('parking-turning-around-and-hills/hill-driving-auto','Hill (auto)')]}
]},
/* =================================================================== 9 */
{id:'users', icon:'🚶', title:'Crossings ও অন্যান্য Road users', intro:'Pedestrian, school, railway, cyclist (নতুন 1.5 m নিয়ম), truck, bus, emergency vehicle।',
subs:[
{n:'9.1', t:'Pedestrian (zebra) crossing', src:'DR DN RC', img:[['cartoon/p35_2.svg','Pedestrian crossing']], h:`
<ul><li>Warning sign ও রাস্তায় <b>সাদা diamond</b> দেখে আগেই চিনুন; slow, থামতে প্রস্তুত।</li>
<li>Crossing-এ থাকা, পা রাখা, বা <b>স্পষ্টভাবে অপেক্ষারত</b> সবাইকে give way — সাদা limit line-এর পেছনে থামুন।</li>
<li>মাঝে <b>উঁচু traffic island নেই</b> → crossing-এর <b>যেকোনো অংশে</b> থাকা pedestrian-এর জন্য থামুন।</li>
<li>উঁচু island আছে → শুধু <b>আপনার অর্ধেকে</b> থাকা pedestrian।</li>
<li>Pedestrian আপনার সামনে দিয়ে পার হয়ে <b>পুরোপুরি সরে না যাওয়া</b> পর্যন্ত যাবেন না।</li></ul>
<div class="rule"><ul style="margin:0"><li>ওপারে আপনার গাড়ির জায়গা না থাকলে crossing-এ উঠবেন না।</li><li>Crossing-এ slow বা থেমে থাকা গাড়িকে <b>পার হবেন না</b>।</li><li>Test-এ crossing-এর উপর থামা = <b>immediate fail</b>।</li></ul></div>`,
mem:'Island নেই = পুরো crossing · Island আছে = আমার অর্ধেক', ref:[dr('city-and-town-driving/driving-around-pedestrian-and-school-crossings','Crossings'),LINKS.dn]},
{n:'9.2', t:'School crossing, school bus, school zone', src:'DR RC', img:[['cartoon/p36_2.svg','School warning sign'],['sign-school-patrol.png','School patrol STOP']], h:`
<ul><li><b>School patrol STOP</b> sign বের হলে limit line-এর পেছনে থামুন; <b>সব sign</b> ভেতরে না নেওয়া পর্যন্ত থেমে থাকুন।</li>
<li>সকাল <b>৮–৯</b> ও বিকেল <b>৩–৪</b> টায় বিশেষ সাবধান; শিশু নামানো-ওঠানো গাড়ি ও bus।</li>
<li><b>Active school speed sign</b> জ্বললে sign-এর <b>30 বা 40 km/h</b>।</li></ul>
<div class="rule">থেমে থাকা <b>school bus</b> (lights জ্বলছে, বা শিশু ওঠানো/নামানো চলছে — light না জ্বললেও): <b>দুই দিক থেকেই ২০ km/h বা কম</b>, bus পুরোপুরি পার না হওয়া পর্যন্ত।</div>`,
mem:'School bus = ২০ km/h, দুই দিক থেকেই', ref:[rc('about-limits/speed-limits','School bus signs'),dr('city-and-town-driving/driving-around-pedestrian-and-school-crossings','School crossings')]},
{n:'9.3', t:'Railway level crossing', src:'DR DN', img:[['cartoon/p36_3.svg','Railway crossing — lights ও bells']], h:`
<table><tr><th>যা দেখবেন</th><th>কী করবেন</th></tr>
<tr><td>Barrier নামা / লাল বাতি জ্বলছে / ঘণ্টা বাজছে</td><td>থামুন; <b>সব</b> বন্ধ না হওয়া পর্যন্ত অপেক্ষা</td></tr>
<tr><td><b>STOP</b> sign</td><td>পুরো থামুন, দুদিকে দেখে ট্রেন না থাকলে পার হন</td></tr>
<tr><td><b>Give Way</b> sign বা কোনো sign নেই</td><td>Slow, থামতে প্রস্তুত, দুদিকে দেখে</td></tr></table>
<div class="rule"><ul style="margin:0"><li>থামলে limit line-এর পেছনে; লাইন না থাকলে রেললাইন থেকে <b>কমপক্ষে ৫ m</b> দূরে (পেছন থেকে ধাক্কা খেলে যেন লাইনে না যান)।</li><li>ওপারে গাড়ির জায়গা না থাকলে crossing-এ ঢুকবেন না।</li></ul></div>
<ul><li>ট্রেন আসলে যত কাছে ও দ্রুত, তত দূরে ও ধীরে মনে হয়; ট্রেন থামতে অনেক সময় লাগে।</li><li>একাধিক লাইন থাকলে একটা ট্রেন গেলেও অন্যদিক থেকে আরেকটা আসতে পারে।</li></ul>`,
mem:'Railway: limit line না থাকলে ৫ m', ref:[dr('driving-on-the-road/railway-crossings','Railway crossings'),LINKS.dn]},
{n:'9.4', t:'Cyclist, e-scooter, horse — নতুন ১.৫ m নিয়ম', src:'RC DR DN', img:[['cartoon/p57_2.svg','Cyclist-এর পাশে জায়গা রাখুন'],['cartoon/p57_3.svg','Intersection-এ cyclist']], h:`
<div class="rule"><ul style="margin:0">
<li><b>১ অক্টোবর ২০২৬ থেকে</b>: একই দিকে, একই lane-এ চলা <b>cyclist</b>, <b>horse rider</b> ও অন্য road user-কে পার হতে <b>সব speed-এ কমপক্ষে ১.৫ m</b> ফাঁকা রাখুন। না পারলে slow করে পেছনে অপেক্ষা।</li>
<li>Turn করার সময় cycle lane ও bus lane-এর cyclist এবং <b>cycle lane-এর e-scooter</b>-কে give way।</li>
<li>Cycle path পার হলে দুদিকে দেখুন।</li>
</ul></div>
<ul><li>Cyclist নিরাপত্তার জন্য lane-এর মাঝে আসতে পারে (<b>"taking the lane"</b>)। নিরাপদে ১.৫ m রেখে flush median দিয়ে পার হওয়া যায়।</li>
<li><b>১২ বছর বা কম</b> বয়সী শিশু (আর তাদের সাথে বাবা-মা) footpath-এ সাইকেল চালাতে পারে — driveway থেকে বের হওয়ার সময় খেয়াল রাখুন।</li>
<li>পার হওয়ার পর পুরো সরে গেছেন নিশ্চিত হয়ে ফিরুন — cyclist যা ভাবেন তার চেয়ে দ্রুত।</li>
<li><b>দরজা খোলার আগে</b> mirror ও কাঁধ (<b>Dutch reach</b>: দূরের হাত দিয়ে দরজা খুলুন, শরীর ঘুরে পেছনে চোখ যায়)।</li>
<li>বামে turn-এ বাম mirror ও কাঁধে cyclist/motorcyclist; ডানে turn-এ সোজা আসা বা বামে turn করা cyclist।</li></ul>`,
mem:'Cyclist / horse পার = সবসময় ১.৫ m', ref:[LINKS.upd,dr('city-and-town-driving/driving-in-traffic-bike-riders-and-pedestrians','Bike riders and pedestrians'),LINKS.dn]},
{n:'9.5', t:'Truck ও bus', src:'DR RC', h:`
<ul><li>কমপক্ষে <b>৩ সেকেন্ড</b> পেছনে এবং এমন জায়গায় যাতে তার <b>দুটো side mirror</b> দেখা যায় — mirror দেখতে পেলে driver আপনাকে দেখে।</li>
<li>বড় গাড়ি পার হতে বেশি সময় ও বেশি খালি রাস্তা লাগে।</li>
<li>Turn করা truck/bus-কে পার হবেন না — lane-এর বাইরে আসতে পারে।</li>
<li>মুখোমুখি বড় গাড়ি বা পার হওয়ার সময় বাতাসের ধাক্কা — দুই হাতে steering শক্ত।</li>
<li><b>"Wide load follows"</b> sign দেখলে সাথে সাথে slow করে যতটা সম্ভব রাস্তার বাইরে।</li></ul>
<div class="rule"><b>৬০ km/h বা কম</b> রাস্তায় bus stop, রাস্তার পাশ বা bus lane থেকে বের হওয়া <b>bus-কে give way</b> (১ অক্টো ২০২৬ থেকে; আগে ছিল ৫০ km/h)।</div>`,
mem:'Truck-এর mirror না দেখলে সে আপনাকে দেখে না', ref:[dr('city-and-town-driving/driving-in-traffic-trucks-and-buses','Trucks and buses'),LINKS.upd]},
{n:'9.6', t:'Emergency vehicle ও police', src:'DR DN', h:`
<table><tr><th>রাস্তা</th><th>কী করবেন</th></tr>
<tr><td>এক lane</td><td>Signal দিয়ে পাশে সরে থামুন</td></tr>
<tr><td>Multi-lane</td><td>Slow করে বাম lane-এ (আগে থেকেই থাকলে সেখানেই)</td></tr>
<tr><td>Multi-lane, দুই lane-ই জ্যাম</td><td>বাম lane-এ থাকলে যতটা বামে, ডান lane-এ থাকলে যতটা ডানে — মাঝখানে পথ তৈরি</td></tr></table>
<ul><li>Siren শুনছেন কিন্তু কোন দিক বুঝছেন না → নিরাপদে পাশে থামুন; থামা নিরাপদ না হলে slow করে বামে।</li>
<li>চলে গেলে রাস্তা খালি দেখে তবেই ফিরুন। পথ না দিলে <b>$150 fine</b>।</li></ul>
<div class="rule"><b>Police</b> পেছনে লাল-নীল আলো/siren দিলে যত দ্রুত সম্ভব নিরাপদে পাশে থামুন এবং <b>গাড়িতে বসে</b> অপেক্ষা করুন। না থামলে: 35 demerit, গ্রেপ্তার, গাড়ি জব্দ, $10,000 পর্যন্ত fine।</div>`,
mem:'জ্যামে: বাম বামে, ডান ডানে — মাঝে পথ', ref:[dr('city-and-town-driving/driving-in-traffic-emergency-vehicles','Emergency vehicles'),LINKS.dn]},
{n:'9.7', t:'অন্যান্য vulnerable road user', src:'DR EB', img:[['cartoon/p56_1.svg','Traffic-এর মধ্যে motorcycle']], h:`
<ul><li>দেখা কঠিন জায়গা: <b>intersection, driveway, roundabout, car park</b> — mirror ও blind spot দুবার।</li>
<li>Slow বা থামতে প্রস্তুত: <b>school, shopping centre, bus stop, pedestrian crossing</b>।</li>
<li>Driveway-তে ঢোকা/বের হওয়া: footpath-এর pedestrian-কে সবসময় give way।</li></ul>`,
mem:'Driveway = footpath-এর মানুষ আগে', ref:[dr('city-and-town-driving/driving-in-traffic-bike-riders-and-pedestrians','Bike riders and pedestrians')]}
]},
/* =================================================================== 10 */
{id:'cond', icon:'🌧️', title:'আবহাওয়া ও Emergency', intro:'রাত, বৃষ্টি, কুয়াশা, বরফ, পাহাড়; হঠাৎ থামা, brake ফেল, tyre ফাটা, breakdown, crash, trailer।',
subs:[
{n:'10.1', t:'রাতে driving ও headlights', src:'RC DR', img:[['cartoon/p28_1.svg','রাতের রাস্তা']], h:`
<div class="rule"><ul style="margin:0">
<li>Headlights চালু: <b>সূর্যাস্তের ৩০ মিনিট পর থেকে সূর্যোদয়ের ৩০ মিনিট আগ পর্যন্ত</b>, আর যখনই <b>১০০ m</b> দূরের মানুষ বা গাড়ি পরিষ্কার দেখা যায় না।</li>
<li>শুধু park light জ্বেলে কখনো চালাবেন না।</li>
<li><b>Dip</b> করতেই হবে: মুখোমুখি গাড়ি এলে · সামনের গাড়িকে follow করলে · traffic নিয়ন্ত্রণকারী police-এর দিকে যেতে · পাশে park করা অবস্থায়।</li>
<li>Lane আছে এমন রাস্তায় দেখা রাস্তার মধ্যে থামতে পারার speed; lane নেই — অর্ধেকে। (Headlight-এ যতটুকু আলো ততটুকুই।)</li>
</ul></div>
<ul><li>কেউ high beam দিলে চোখ <b>বাম পাশের সাদা লাইনে</b>; চোখ ধাঁধালে slow বা থামুন।</li><li>রাস্তার আলো না থাকলে প্রয়োজনমতো full beam।</li><li>Windscreen ও light পরিষ্কার; রাতে কালো চশমা নয়।</li><li>শেখার সময় ৪ সেকেন্ড দূরত্ব; রাতে মাতাল driver বেশি।</li><li>কুয়াশায় dip করা পরামর্শ, আইনি বাধ্যবাধকতা নয়।</li></ul>`,
mem:'৩০ মিনিট (সূর্যাস্ত/সূর্যোদয়) · ১০০ m দেখা না গেলে', ref:[rc('about-driving/when-conditions-change/night-driving','Night driving'),dr('driving-to-the-conditions/night-driving','Night driving')]},
{n:'10.2', t:'বৃষ্টি', src:'DR', img:[['cartoon/p29_2.svg','ভেজা রাস্তা']], h:`
<ul><li>বৃষ্টি শুরু হলেই <b>headlights</b> ও wipers (সামনে-পেছনে), <b>demister</b>।</li><li>Speed কমান — limit-এর চেয়েও কম লাগতে পারে; কমপক্ষে <b>৪ সেকেন্ড</b>।</li><li>শুকনো সময়ের পর প্রথম বৃষ্টিতে রাস্তা সবচেয়ে পিচ্ছিল।</li><li>৭০ km/h-এর বেশি speed-এ বড় puddle-এ grip হারায় (<b>aquaplaning</b>) — ১২ সেকেন্ড সামনে দেখুন।</li><li>সামনের গাড়ির চাকার দাগে চালান; বড় গাড়ির spray থেকে দূরে।</li></ul>`,
mem:'বৃষ্টি = headlights + ৪ সেকেন্ড', ref:[dr('driving-to-the-conditions/wet-weather-driving','Wet weather')]},
{n:'10.3', t:'কুয়াশা', src:'EB RC', img:[['cartoon/p29_3.svg','কুয়াশা']], h:`
<ul><li>Slow — speedometer দেখে speed বুঝুন।</li><li><b>Low beam</b> — high beam কুয়াশায় ফিরে এসে চোখ ধাঁধায়।</li><li>Fog light থাকলে চালু।</li><li>Centreline থেকে দূরে, বাম সাদা লাইনের কাছে।</li><li>রাস্তায় থামবেন না; থামতে হলে traffic থেকে দূরে।</li></ul>`,
mem:'কুয়াশা = low beam', ref:[LINKS.eb,rc('about-driving/when-conditions-change/driving-in-bad-weather','Bad weather')]},
{n:'10.4', t:'বরফ ও তুষার', src:'DR DN', h:`
<ul><li>রওনার আগে forecast, রাস্তা বন্ধ কিনা (<b>nzta.govt.nz/traffic</b>, metservice.com); সম্ভব হলে দিনের মাঝে।</li><li>Windscreen-এ <b>ঠান্ডা পানি</b> — গরম পানিতে কাচ ফাটে। Demister পুরো।</li><li>তুষারে headlights dip; নীল flashing আলোর <b>ice marker</b> খেয়াল করুন।</li><li>কমপক্ষে ৪ সেকেন্ড; brake আগে ও আস্তে; bridge ও ছায়ায় বরফ বেশি।</li><li>Snow chain লাগালে <b>৫০ km/h-এর নিচে</b>; rental গাড়িতে chain দিলে আগে লাগানো শিখে নিন।</li></ul>
<div class="rule"><b>Skid হলে</b>: accelerator ছাড়ুন → যেদিকে যেতে চান সেদিকে তাকান → <b>skid-এর দিকে steer</b> (পেছন যেদিকে পিছলাচ্ছে) → brake নয়; নিয়ন্ত্রণ ফিরলে ABS থাকলে steady brake, না থাকলে আস্তে pump।</div>`,
mem:'Skid = accelerator ছাড়ো, skid-এর দিকে steer, brake নয়', ref:[dr('driving-to-the-conditions/driving-in-snow-and-ice','Snow and ice'),LINKS.dn]},
{n:'10.5', t:'পাহাড়ি রাস্তা', src:'EB', img:[['cartoon/p30_1.svg','পাহাড়ি রাস্তা']], h:`
<ul><li>রওনার আগে brakes, wipers, demister check।</li><li>Downhill-এ <b>নিচের gear</b> — শুধু brake-এ ভরসা করলে brake গরম হয়ে কাজ কমে (<b>brake fade</b>)।</li><li>খাড়া uphill-এ নিচের gear, temperature gauge দেখুন।</li><li>বাঁকে centreline-এর কাছে নয়।</li></ul>`,
mem:'Downhill = নিচের gear', ref:[LINKS.eb]},
{n:'10.6', t:'হঠাৎ থামা (ABS ও non-ABS)', src:'DR EB', img:[['cartoon/p34_2.svg','Skid এড়াতে']], h:`
<table><tr><th>ABS আছে (steering-এ ABS logo)</th><th>ABS নেই</th></tr>
<tr><td>যত জোরে পারেন brake চেপে <b>ধরে রাখুন</b> — pedal কাঁপলেও। Pump নয়।</td><td>প্রথমে আস্তে, তারপর চাপ বাড়ান। চাকা lock হলে মুহূর্তের জন্য ছেড়ে আবার।</td></tr></table>
<ul><li>সামনে যেদিকে যেতে হবে সেদিকে তাকান, দুই হাতে steering, বাধা এড়িয়ে steer।</li><li>Manual: আগে brake; সময় থাকলে থামার ঠিক আগে clutch। Stall হলে চিন্তা নেই — নিরাপদে থামাই আগে।</li><li>Practice: খালি car park, শুকনো রাস্তা, ২০–৩০ km/h থেকে শুরু।</li></ul>`,
mem:'ABS = চেপে ধরো, pump নয়', ref:[dr('set-up-and-get-moving/stopping-suddenly','Stopping suddenly')]},
{n:'10.7', t:'Steer করে বিপদ এড়ানো', src:'EB', img:[['cartoon/p31_2.svg','৯ ও ৩ টায় হাত']], h:`
<ul><li>৪০ km/h-এর বেশি speed-এ প্রায়ই brake-এর চেয়ে steer করে এড়ানো দ্রুত।</li><li>একসাথে জোরে brake আর তীক্ষ্ণ turn নয় — চাকা lock হতে পারে (ABS না থাকলে)।</li><li>দরকারের বেশি ঘোরাবেন না; বাধা পার হলে উল্টো দিকে <b>counter-steer</b>।</li></ul>`,
mem:'বাধা পার হলে counter-steer', ref:[LINKS.eb]},
{n:'10.8', t:'Brake ফেল ও accelerator আটকে গেলে', src:'EB', img:[['cartoon/p31_3.svg','Brake system'],['cartoon/p32_2.svg','Speed নিয়ন্ত্রণ']], h:`
<h4>Brake ফেল</h4><ol class="steps"><li>নিচের gear, থামার জায়গা খুঁজুন</li><li>দ্রুত কয়েকবার brake <b>pump</b></li><li>না হলে আস্তে handbrake (পেছনের চাকা skid করলে একটু ছাড়ুন)</li><li>Headlights, <b>hazard lights</b>, horn</li><li>রাস্তার বাইরে বা uphill রাস্তায় steer; শেষ উপায়ে রেলিং/kerb-এ ঘষে গতি কমান</li></ol>
<h4>Accelerator আটকে গেলে</h4><ol class="steps"><li>শান্ত, দুই হাত steering-এ</li><li>Pedal কয়েকবার tap, পায়ের আঙুল দিয়ে তুলে দেখুন</li><li>না হলে <b>neutral</b>, তারপর brake</li><li>পাশে থেমে engine বন্ধ, hazard lights</li><li>Neutral না গেলে শেষ উপায়ে ignition বন্ধ — কিন্তু <b>LOCK</b>-এ নয় (steering আটকে যাবে)</li></ol>`,
mem:'Accelerator আটকালে = Neutral, তারপর brake', ref:[LINKS.eb]},
{n:'10.9', t:'Tyre ফাটা ও চাকা বদলানো', src:'DR EB', img:[['cartoon/p33_2.svg','Tyre blowout']], h:`
<p>সামনের tyre ফাটলে গাড়ি সেদিকে <b>টানে</b>; পেছনেরটা ফাটলে পেছন <b>দোলে</b>।</p>
<ol class="steps"><li>Steering শক্ত করে ধরুন, <b>বেশি সংশোধন নয়</b></li><li>Mirror ও কাঁধ — পেছনে কেউ আছে?</li><li><b>আস্তে ও smooth</b> ভাবে slow (eBook: প্রথমে accelerator ছেড়ে দিন, হঠাৎ brake নয়)</li><li>Indicate করে বামে, সমতল-শক্ত জায়গায়, traffic থেকে দূরে থামুন</li><li>চাকা সোজা, handbrake, <b>hazard lights</b>; auto-তে P, manual-এ flat/uphill = 1st, downhill = R; engine বন্ধ</li></ol>
<h4>চাকা বদলানো</h4><ol class="steps"><li>Wheel nut <b>anticlockwise</b> ঢিলা করুন (খুলবেন না)</li><li>নির্দিষ্ট lifting point-এ jack দিয়ে তুলুন</li><li>Nut খুলে spare লাগান, হাতে টাইট</li><li>Tool দিয়ে <b>উপরেরটা → বিপরীতটা → বামেরটা → ডানেরটা</b></li><li>নামিয়ে আবার একই ক্রমে পুরো টাইট</li></ol>
<ul><li>Jack-এ থাকা গাড়ির নিচে কখনো নয়; engine চালু নয়; যাত্রীরা বাইরে; শক্ত সমতল জায়গা।</li><li>Space-saver tyre-এ <b>৮০ km/h-এর বেশি নয়</b>।</li></ul>`,
mem:'Blowout: শক্ত ধরো, আস্তে slow, বামে থামো', ref:[dr('bonus-skills/changing-a-tyre','Changing a tyre'),LINKS.eb]},
{n:'10.10', t:'Breakdown', src:'DR RC', h:`
<ol class="steps"><li>সোজা রাস্তায় (বাঁকে নয়), সম্ভব হলে রাস্তার পুরো বাইরে থামুন</li><li><b>Hazard lights</b>; রাতে ভেতরের আলো</li><li>Bonnet ও boot তুলে দিন; reflective triangle পেছনে</li><li>সাহায্য: পরিবার, বন্ধু, AA, <b>*555</b>, garage</li><li>সাহায্য না আসা পর্যন্ত গাড়ির কাছে; <b>motorway-তে হাঁটবেন না</b> — নিরাপদ হলে গাড়িতে বসে থাকুন</li></ol>`,
mem:'Breakdown: Hazard lights · bonnet তুলুন · *555', ref:[dr('bonus-skills/dealing-with-a-breakdown','Breakdown')]},
{n:'10.11', t:'Crash হলে', src:'RC', h:`
<ol class="steps"><li>থামুন; কেউ আহত কিনা দেখে সাহায্য করুন</li><li>আহত থাকলে <b>111</b> (ambulance, police, fire); traffic incident জানাতে <b>*555</b></li><li>খুব দরকার না হলে আহতকে সরাবেন না (মেরুদণ্ডে আঘাত); না-খোলা airbag-এর সামনে যাবেন না</li></ol>
<div class="rule"><table style="margin:0"><tr><th>পরিস্থিতি</th><th>সময়সীমা</th></tr>
<tr><td>কেউ <b>আহত</b></td><td>যত দ্রুত সম্ভব, <b>২৪ ঘণ্টার মধ্যে</b> police-কে</td></tr>
<tr><td>কেউ আহত নয়</td><td>অন্য গাড়ি/সম্পত্তির মালিককে নাম, ঠিকানা, plate number — <b>৪৮ ঘণ্টার মধ্যে</b></td></tr>
<tr><td>মালিককে খুঁজে না পেলে</td><td>Police-কে <b>৬০ ঘণ্টার মধ্যে</b></td></tr></table></div>
<p>Crash sign পার হতে <b>২০ km/h বা কম</b>। Insurance থাকলে company-কে জানান।</p>`,
mem:'আহত = ২৪ ঘণ্টা · মালিক = ৪৮ · খুঁজে না পেলে = ৬০', ref:[rc('about-driver-responsibility/crashes','Crashes')]},
{n:'10.12', t:'Trailer টানা ও reverse', src:'DR RC', img:[['drive-bonus05-reversing-with-a-trailer-v11.gif','Drive animation: trailer reverse'],['cartoon/p26_3.svg','Trailer']], h:`
<ul><li>Towbar-এ lock, safety chain, light ও indicator কাজ করছে; load মাঝখানে ও শক্ত বাঁধা; mirror।</li>
<li>সর্বোচ্চ <b>৯০ km/h</b>; <b>৪ সেকেন্ড</b> দূরত্ব; intersection-এর আগে আগেই slow; বড় gap লাগে।</li>
<li>Corner একটু চওড়া করে নিন — trailer ভেতর দিয়ে কাটে।</li>
<li>পেছনে গাড়ির সারি হলে নিরাপদ জায়গায় থেমে পার হতে দিন।</li></ul>
<div class="rule">মোট ওজন (গাড়ি + trailer + load): <b>learner/restricted সর্বোচ্চ ৪৫০০ kg</b>, full licence ৬০০০ kg।</div>
<h4>Reverse</h4><ul><li>শুরুতে গাড়ি ও trailer-এর চাকা সোজা।</li><li>Trailer যেদিকে নিতে চান steering তার <b>উল্টো</b> দিকে।</li><li>Trailer ঠিক দিকে গেলে চাকা সোজা, তারপর গাড়িকে trailer-এর পেছনে নিন।</li><li>ধীরে, ছোট ছোট smooth steering। Jack-knife হলে সামনে গিয়ে আবার শুরু।</li></ul>`,
mem:'Trailer: ৯০ km/h · ৪ সেকেন্ড · steering উল্টো', ref:[dr('bonus-skills/towing-a-trailer','Towing a trailer'),dr('bonus-skills/reversing-with-a-trailer','Reversing with a trailer')]},
{n:'10.13', t:'লম্বা যাত্রার প্রস্তুতি', src:'DR DN', h:`
<ul><li>Route, বিরতির জায়গা, আবহাওয়া ও রাস্তার অবস্থা আগে দেখুন (journeys.nzta.govt.nz)।</li><li>NZ-এর রাস্তা সরু, আঁকাবাঁকা, পাহাড়ি — map-এ যত কাছে মনে হয় তার চেয়ে বেশি সময় লাগে।</li><li>গাড়ি roadworthy, কাচ পরিষ্কার, যথেষ্ট petrol।</li><li>Playlist আগে ঠিক করুন, phone silent; বিরতিতে খাওয়া।</li><li>দৃশ্য দেখতে চাইলে রাস্তার পুরো বাইরে নিরাপদ জায়গায় থামুন — no stopping sign বা ভাঙা হলুদ লাইনে নয়।</li></ul>`,
mem:'Map-এ যত কাছে, রাস্তায় তত কাছে নয়', ref:[dr('bonus-skills/preparing-and-planning-for-a-journey','Planning a journey'),LINKS.dn]}
]},
/* =================================================================== 11 */
{id:'compare', icon:'🔍', title:'তুলনা ও Updates', intro:'চারটি source মিলিয়ে কী পাওয়া গেল — কোথায় মিল, কোথায় পার্থক্য, কোনটা ঠিক, আর ২০২৬ সালের আইন পরিবর্তন।',
subs:[
{n:'11.1', t:'চারটি source', src:'', h:`
<table><tr><th>Source</th><th>কী</th><th>কতটা নির্ভরযোগ্য</th></tr>
<tr><td><span class="src rc">Road Code</span></td><td>Official NZ Road Code 2026 (১ এপ্রিল ২০২৬) + updates page</td><td><b>চূড়ান্ত</b> — theory test এখান থেকে</td></tr>
<tr><td><span class="src dr">Drive</span></td><td>drive.govt.nz-এর ৫৫টি restricted skill page (NZTA + ACC)</td><td><b>Official</b> — practical test-এর পদ্ধতি</td></tr>
<tr><td><span class="src dn">Driving in NZ</span></td><td>NZTA leaflet 2026, ৬ পৃষ্ঠা</td><td><b>Official</b> — সংক্ষিপ্ত</td></tr>
<tr><td><span class="src eb">eBook</span></td><td>A1 Driving School, ৬১ পৃষ্ঠা</td><td>ভালো practical tips; কিছু তথ্য পুরোনো বা ভিন্ন</td></tr></table>
<h4>ছবি</h4>
<ul><li><b>Animation</b> — Drive (NZTA)।</li><li><b>Road sign</b> — Wikimedia Commons-এর NZ sign diagram।</li><li><b>Cartoon</b> — এই guide-এর জন্য নতুন করে আঁকা, NZ-এর নিয়মে (বাম দিকে চলা, right-hand drive, clockwise roundabout)। eBook-এর কোনো ছবি আর ব্যবহার করা হয়নি।</li></ul>`},
{n:'11.2', t:'পার্থক্য ও সংশোধন (আগের version থেকে)', src:'', h:`
<table><tr><th>বিষয়</th><th>আগে / eBook-এ</th><th>Official (এখন guide-এ)</th><th>উৎস</th></tr>
<tr><td>Cyclist পার হওয়ার দূরত্ব</td><td>৬০ km/h পর্যন্ত ১ m, বেশি হলে ১.৫ m</td><td><b>সবসময় ১.৫ m</b> (১ অক্টো ২০২৬ থেকে); horse rider-ও</td><td>RC updates</td></tr>
<tr><td>Bus-কে give way</td><td>৫০ km/h বা কম</td><td><b>৬০ km/h বা কম</b>, bus stop/রাস্তার পাশ/bus lane থেকে</td><td>RC updates</td></tr>
<tr><td>পাহাড়ে uphill park</td><td>"চাকা kerb-এর দিকে"</td><td>Uphill: steering ডানে, চাকা <b>kerb থেকে দূরে</b>; downhill: বামে, kerb-এর দিকে</td><td>Drive</td></tr>
<tr><td>Angle park থেকে বের হওয়া</td><td>পেছালে steering ডানে</td><td>বামের গাড়ি পার হলে steering <b>বামে</b>, তারপর ডানে signal দিয়ে সামনে</td><td>Drive</td></tr>
<tr><td>L plate</td><td>শুধু পেছনে</td><td><b>সামনে ও পেছনে</b></td><td>RC</td></tr>
<tr><td>Headlight dip</td><td>২০০ m-এর মধ্যে</td><td>Road Code-এ কোনো দূরত্ব নেই — মুখোমুখি গাড়ি, follow করা, police, park অবস্থায় dip</td><td>RC</td></tr>
<tr><td>School-এর বাইরে speed</td><td>urban 30, rural 60</td><td>Active school sign-এ দেখানো <b>30 বা 40</b></td><td>RC</td></tr>
<tr><td>Crash: কেউ আহত নয়</td><td>শুধু ৬০ ঘণ্টা</td><td>মালিককে <b>৪৮ ঘণ্টা</b>; না পেলে police-কে ৬০ ঘণ্টা</td><td>RC</td></tr>
<tr><td>Give Way sign</td><td>"sign-বিহীন রাস্তার সবাইকে"</td><td>সবাইকে — <b>শুধু STOP sign-এ থাকাদের ছাড়া</b></td><td>RC, DN</td></tr>
<tr><td>Restricted passenger</td><td>spouse, dependants, caregiver</td><td>+ parent/guardian, benefit পাওয়া আত্মীয়; auto-তে test দিলে শুধু auto</td><td>RC</td></tr>
<tr><td>Driveway থেকে বের হওয়া</td><td>pedestrian ও গাড়ি</td><td>+ footpath, cycle path, shared path-এর সবাই</td><td>RC</td></tr>
<tr><td>Tyre blowout</td><td>eBook: brake এড়িয়ে চলুন</td><td>Drive: "brake slowly and smoothly" — দুটো মিলিয়ে: হঠাৎ নয়, আস্তে</td><td>Drive, EB</td></tr>
<tr><td>Fatigue nap</td><td>—</td><td>Drive: ১৫–২০ মিনিট; Driving in NZ: ১৫–৩০ মিনিট; ৪০-এর বেশি নয়</td><td>Drive, DN</td></tr>
<tr><td>Learner-এ following distance</td><td>eBook: ৩ সেকেন্ড</td><td>আইন ২/৪ সেকেন্ড; Drive-এর পরামর্শ বেশি speed-এ শেখার সময় ৩</td><td>RC, Drive</td></tr>
<tr><td>Licence system</td><td>"বদলানোর ঘোষণা"</td><td>২৫ জানু ২০২৭ থেকে বিস্তারিত (1.8 দেখুন)</td><td>NZTA</td></tr></table>`,
mem:'সন্দেহ হলে Road Code-ই চূড়ান্ত'},
{n:'11.3', t:'২০২৬ সালের আইন পরিবর্তন', src:'RC', h:`
<table><tr><th>কার্যকর</th><th>পরিবর্তন</th></tr>
<tr><td>১ এপ্রিল ২০২৬</td><td>Road Code 2026 edition; নতুন fee</td></tr>
<tr><td>৬ আগস্ট ২০২৬</td><td>Class 1 full licence-এ 6001–7500 kg zero-emission গাড়ি চালানো যাবে</td></tr>
<tr><td>১ অক্টোবর ২০২৬</td><td>Cyclist, horse rider ইত্যাদিকে পার হতে <b>১.৫ m</b> · ১২ বছর বা কম শিশু footpath-এ সাইকেল · cycle lane-এ e-scooter · ৬০ km/h বা কম রাস্তায় <b>bus-কে give way</b></td></tr>
<tr><td>২২ অক্টোবর ২০২৬</td><td>Tractor ও special-type গাড়ি সর্বোচ্চ <b>৪০ km/h</b></td></tr>
<tr><td>এ বছর</td><td>Beach/river variable speed sign (৩০/৬০); crash site-এ reflective triangle; theory test-এ Fijian ও Thai</td></tr>
<tr><td>২৫ জানু ২০২৭</td><td>নতুন GDLS (1.8)</td></tr></table>`,
mem:'১ অক্টো ২০২৬: ১.৫ m + bus give way ৬০', ref:[LINKS.upd,LINKS.gdls]},
{n:'11.4', t:'Restricted test — যেসব ভুলে সাথে সাথে fail', src:'DR', h:`
<table><tr><th>ভুল</th><th>ধরন</th></tr>
<tr><td>STOP sign-এ পুরো না থামা</td><td>Critical / immediate fail</td></tr>
<tr><td>Give way না করা</td><td>Immediate fail</td></tr>
<tr><td>Pedestrian crossing-এর উপর থামা</td><td>Immediate fail</td></tr>
<tr><td>Manual-এ stall</td><td>Critical error</td></tr>
<tr><td>Speeding</td><td>Fail-এর সবচেয়ে বড় কারণগুলোর একটি</td></tr>
<tr><td>Roundabout থেকে বের হওয়ার signal না দেওয়া</td><td>সাধারণ ভুল</td></tr>
<tr><td>প্রথম নিরাপদ gap না নেওয়া</td><td>Officer লক্ষ্য রাখেন</td></tr></table>`,
mem:'STOP পুরো থামো · give way · crossing-এ থেমো না', ref:[dr('driving-on-the-road/choosing-a-gap-in-traffic-and-turning-left-at-an-intersection','Turning left'),dr('city-and-town-driving/driving-in-traffic-town-and-city-traffic','Town traffic'),dr('driving-to-the-conditions/controlling-your-speed-and-sticking-to-the-limits','Speed')]}
]},
/* =================================================================== 12 */
{id:'exam', icon:'📝', title:'Exam Prep', intro:'Quick revision (সব memory hook এক জায়গায়), সংখ্যার তালিকা, flashcard, ৩৫ প্রশ্নের mock test, শব্দকোষ।',
subs:[
{n:'12.1', t:'🧠 Quick revision — সব memory hook', src:'', h:`<div id="revision"></div>`},
{n:'12.2', t:'সংখ্যা মুখস্থ (Numbers to remember)', src:'RC DR DN', h:`
<div class="numgrid">
<div><b>16</b><span>learner বয়স</span></div><div><b>16½</b><span>restricted বয়স</span></div><div><b>6 মাস</b><span>learner কমপক্ষে</span></div><div><b>35 / 32</b><span>theory প্রশ্ন / pass</span></div>
<div><b>2 বছর</b><span>supervisor-এর full licence</span></div><div><b>10pm–5am</b><span>restricted একা নয়</span></div><div><b>0</b><span>alcohol, ২০-এর কম</span></div><div><b>250 / 50</b><span>২০+ breath mcg / blood mg</span></div>
<div><b>3 সে.</b><span>signal কমপক্ষে</span></div><div><b>2 সে.</b><span>following স্বাভাবিক</span></div><div><b>4 সে.</b><span>ভেজা / খারাপ / trailer</span></div><div><b>12 সে.</b><span>সামনে scan</span></div>
<div><b>100 m</b><span>overtake শেষেও খালি</span></div><div><b>100 m</b><span>দেখা না গেলে headlights</span></div><div><b>30 মিনিট</b><span>sunset পরে / sunrise আগে</span></div><div><b>1.5 m</b><span>cyclist / horse পার</span></div>
<div><b>20 km/h</b><span>school bus · crash site</span></div><div><b>30 / 40</b><span>active school sign</span></div><div><b>30 / 60</b><span>beach (মানুষ / নেই)</span></div><div><b>90 km/h</b><span>trailer</span></div>
<div><b>60 km/h</b><span>এর নিচে bus-কে give way</span></div><div><b>6 m</b><span>intersection / crossing / bus stop</span></div><div><b>1 m</b><span>driveway</span></div><div><b>50 cm</b><span>fire hydrant</span></div>
<div><b>30 cm</b><span>kerb থেকে park</span></div><div><b>5 m</b><span>railway (line না থাকলে)</span></div><div><b>50 m</b><span>flush median / special lane</span></div><div><b>50 m</b><span>3-point turn-এ দেখা</span></div>
<div><b>4 · 2 মিনিট</b><span>parallel park move · সময়</span></div><div><b>7 m</b><span>parallel park-এ সর্বোচ্চ পেছনে</span></div><div><b>1.5 mm</b><span>tyre tread</span></div><div><b>80 km/h</b><span>space-saver tyre</span></div>
<div><b>20</b><span>phone demerit</span></div><div><b>100 / 2 বছর</b><span>demerit → 3 মাস</span></div><div><b>+40 km/h</b><span>→ ২৮ দিন suspension</span></div><div><b>24 / 48 / 60 ঘণ্টা</b><span>crash report</span></div>
<div><b>৭-এর কম</b><span>child restraint</span></div><div><b>১৫-এর কম</b><span>belt-এ driver দায়ী</span></div><div><b>2 ঘণ্টা</b><span>বিরতি</span></div><div><b>111 · *555</b><span>emergency · traffic</span></div>
</div>`},
{n:'12.3', t:'Flashcards — tap করে উত্তর', src:'', h:`<div class="flash" id="flash"></div>`},
{n:'12.4', t:'Mock theory test (৩৫ প্রশ্ন)', src:'', h:`<div class="score" id="score">Score: 0 / 0</div><div id="quiz"></div><button class="btn" onclick="buildQuiz(true)">🔀 নতুন ক্রমে আবার শুরু</button>`},
{n:'12.5', t:'শব্দকোষ — Tough words', src:'RC', h:`
<table><tr><th>English</th><th>বাংলা</th></tr>
<tr><td><b>Give way</b></td><td>অন্যকে আগে যেতে দেওয়া — তাকে যেন brake বা সরতে না হয়</td></tr>
<tr><td><b>Limit line</b></td><td>থামার সাদা (বা railway-তে হলুদ) লাইন</td></tr>
<tr><td><b>Kerb</b></td><td>রাস্তার কিনারের উঁচু পাড়</td></tr>
<tr><td><b>Footpath / shared path</b></td><td>হাঁটার পথ / হাঁটা ও সাইকেল দুটোর পথ</td></tr>
<tr><td><b>Centreline</b></td><td>রাস্তার মাঝের লাইন</td></tr>
<tr><td><b>Flush median</b></td><td>মাঝে diagonal দাগের জায়গা — ডানে turn-এর অপেক্ষা</td></tr>
<tr><td><b>Terminating road</b></td><td>T-intersection-এ যে রাস্তা শেষ হয় (T-এর নিচ)</td></tr>
<tr><td><b>Uncontrolled intersection</b></td><td>Sign বা light নেই</td></tr>
<tr><td><b>Blind spot / shoulder (head) check</b></td><td>Mirror-এ অদেখা জায়গা / মাথা ঘুরিয়ে দেখা</td></tr>
<tr><td><b>Tailgating</b></td><td>খুব কাছে follow করা</td></tr>
<tr><td><b>Overtake / pass</b></td><td>পার হওয়া</td></tr>
<tr><td><b>Merge (zip)</b></td><td>দুই lane মেলা, পালাক্রমে</td></tr>
<tr><td><b>Feeder lane / on-ramp</b></td><td>Motorway-তে ঢোকার speed তোলার lane</td></tr>
<tr><td><b>Passing lane</b></td><td>Overtake-এর জন্য বাড়তি lane</td></tr>
<tr><td><b>No-passing line</b></td><td>একটানা হলুদ লাইন</td></tr>
<tr><td><b>Clearway / transit lane (T2/T3)</b></td><td>নির্দিষ্ট সময়ে থামা নিষেধ / ২-৩ জন যাত্রীর গাড়ির lane</td></tr>
<tr><td><b>Level crossing</b></td><td>রাস্তা-রেললাইনের সংযোগ</td></tr>
<tr><td><b>Cul-de-sac</b></td><td>এক মুখ বন্ধ রাস্তা</td></tr>
<tr><td><b>Hazard / hazard lights</b></td><td>বিপদ / চার indicator একসাথে</td></tr>
<tr><td><b>Dip / low beam · full beam</b></td><td>Headlight নিচু · উঁচু</td></tr>
<tr><td><b>Supervisor / driving coach</b></td><td>Learner-এর পাশে বসা ২ বছরের full licence holder</td></tr>
<tr><td><b>Demerit points · infringement</b></td><td>Penalty point · court ছাড়া fine</td></tr>
<tr><td><b>Disqualification · suspension · impound</b></td><td>Licence বাতিল · স্থগিত · গাড়ি জব্দ</td></tr>
<tr><td><b>WoF · rego</b></td><td>Warrant of Fitness (গাড়ির fitness সনদ) · registration</td></tr>
<tr><td><b>Advisory speed</b></td><td>বাঁকের পরামর্শ speed</td></tr>
<tr><td><b>Aquaplaning</b></td><td>পানিতে চাকার grip হারানো</td></tr>
<tr><td><b>Stall · bite point · revs</b></td><td>Engine বন্ধ হওয়া · clutch ধরার জায়গা · engine-এর ঘূর্ণন</td></tr>
<tr><td><b>Chevron</b></td><td>বাঁকের দিক দেখানো তীর-বোর্ড</td></tr>
<tr><td><b>Taking the lane</b></td><td>Cyclist-এর lane-এর মাঝে আসা</td></tr>
<tr><td><b>Road</b> (আইনি অর্থ)</td><td>Beach, bridge, car park, street, motorway — সবই road</td></tr></table>`,
mem:'আইনে beach, car park-ও "road"', ref:[LINKS.upd]},
{n:'12.6', t:'Learner-দের ১০টি সাধারণ ভুল (eBook)', src:'EB', img:[['cartoon/p59_0.svg','Learner driver: 10 common mistakes']], h:`
<table><tr><th>#</th><th>ভুল</th><th>কী করবেন</th></tr>
<tr><td>1</td><td>Seat belt না পরা</td><td>উঠেই belt (2.3)</td></tr>
<tr><td>2</td><td>STOP sign-এ না থামা</td><td>পুরো থামুন — test-এ immediate fail (5.1)</td></tr>
<tr><td>3</td><td>Indicate ভুলে যাওয়া</td><td>৩ সেকেন্ড (5.4)</td></tr>
<tr><td>4</td><td>না দেখে lane change</td><td>Mirror-Signal-Shoulder (7.2)</td></tr>
<tr><td>5</td><td>Speeding</td><td>Limit = সর্বোচ্চ (3.4)</td></tr>
<tr><td>6</td><td>ভুল following distance</td><td>২ / ৪ সেকেন্ড (3.3)</td></tr>
<tr><td>7</td><td>ক্লান্ত অবস্থায় চালানো</td><td>২ ঘণ্টায় বিরতি (3.7)</td></tr>
<tr><td>8</td><td>রাস্তায় ভুল position</td><td>Keep left, lane-এর মাঝে (3.9)</td></tr>
<tr><td>9</td><td>হঠাৎ জোরে brake</td><td>আগে দেখে smooth brake (3.2)</td></tr>
<tr><td>10</td><td>মনোযোগ হারানো</td><td>Phone নয় (3.6)</td></tr></table>`},
{n:'12.7', t:'Practice কোথায় করবেন', src:'DR', h:`
<ul><li><b>drive.govt.nz</b> — free account খুলে real theory test-এর প্রশ্ন, "Tough words" ও "Tricky questions" test।</li>
<li><b>Drive Go app</b> — restricted skills।</li>
<li>Road Code-এর "Updates" page — নতুন theory প্রশ্নের তালিকা (C, S, RP, B, I)।</li>
<li>Practice-এর ক্রম (Drive অনুযায়ী): খালি car park → শান্ত রাস্তা → সাধারণ intersection → ব্যস্ত শহর → multi-lane → বেশি speed → রাত ও বৃষ্টি।</li></ul>`,
ref:[LINKS.drivetests,LINKS.upd]}
]}
];

/* ---------------- Flashcards ---------------- */
const FLASH = [
['২০-এর কম বয়সে alcohol limit?','Zero'],
['২০+ breath alcohol limit?','250 mcg / litre (blood 50 mg / 100 mL)'],
['ভেজা রাস্তা বা trailer — following distance?','কমপক্ষে ৪ সেকেন্ড'],
['Signal কতক্ষণ আগে?','কমপক্ষে ৩ সেকেন্ড'],
['Restricted-এ একা চালানোর সময়?','5am – 10pm'],
['Roundabout-এ কাকে give way?','ডান দিক থেকে আসা সবাইকে'],
['Roundabout-এ সোজা যেতে ঢোকার signal?','কোনো signal নয়; বের হওয়ার আগে left'],
['Right-turner vs মুখোমুখি left-turner?','Right-turner give way করবে'],
['Give Way sign-এ কাকে give way?','সবাইকে — শুধু STOP sign-এ থাকাদের ছাড়া'],
['Cyclist পার হতে কত জায়গা?','কমপক্ষে ১.৫ m (সব speed-এ)'],
['কত speed-এর রাস্তায় bus-কে give way?','৬০ km/h বা কম'],
['School bus পার হওয়ার speed?','২০ km/h, দুই দিক থেকেই'],
['Overtake শেষ হলেও সামনে কত খালি?','১০০ m'],
['Intersection থেকে park কত দূরে?','কমপক্ষে ৬ m'],
['Uphill-এ park — steering?','ডানে (চাকা kerb থেকে দূরে)'],
['Downhill-এ park — steering?','বামে (চাকা kerb-এর দিকে)'],
['Headlights কখন বাধ্যতামূলক?','Sunset +৩০ মিনিট → sunrise −৩০ মিনিট; বা ১০০ m দেখা না গেলে'],
['Centreline নেই — কত দূরত্বে থামতে পারবেন?','দেখা রাস্তার অর্ধেকে'],
['Beach-এ মানুষ আছে — speed?','৩০ km/h'],
['Hand-held phone — demerit?','২০'],
['L plate কোথায়?','সামনে ও পেছনে'],
['Crash-এ কেউ আহত — police-কে কখন?','যত দ্রুত সম্ভব, ২৪ ঘণ্টার মধ্যে'],
['MSCBGA মানে?','Mirrors · Signal · Course · Brake · Gear · Assess'],
['IPDA মানে?','Identify · Predict · Decide · Act'],
];

/* ---------------- Quiz (35, like the real test) ---------------- */
const QUIZ = [
['আপনার বয়স ১৯। আপনার alcohol limit কত?',['250 mcg/L breath','150 mcg/L breath','Zero','400 mcg/L breath'],2,'২০-এর কম = zero।'],
['আপনি ডানে turn করছেন; মুখোমুখি গাড়ি সোজা যাচ্ছে। কে give way করবে?',['মুখোমুখি গাড়ি','আপনি','যে আগে এসেছে','কেউ না'],1,'Turning traffic সোজা traffic-কে give way করে।'],
['আপনি ডানে, মুখোমুখি গাড়ি বামে turn করছে; দুজনেই green light-এ। কে give way করবে?',['আপনি','বামে turn করা গাড়ি','যে আগে নড়বে','কেউ না — green'],0,'Right-turner, left-turner-কে give way করে — একই control-এ থাকলেও।'],
['আপনি STOP sign-এ বামে turn করবেন; মুখোমুখি গাড়ি Give Way sign-এ ডানে turn করবে। কে give way করবে?',['মুখোমুখি গাড়ি','আপনি','দুজনেই থামবে','বড় গাড়ি'],1,'Give Way sign-এর গাড়ি STOP sign-এর গাড়িকে give way করে না — তাই আপনি করবেন।'],
['Roundabout-এ ডানে যাবেন। ঢোকার সময় signal?',['Left','Right','কোনো signal নয়','Hazard lights'],1,'ডানে = right signal; বের হওয়ার আগে left।'],
['Roundabout-এ সোজা যাবেন। কীভাবে signal দেবেন?',['ঢোকার সময় right','ঢোকার সময় left','ঢোকার সময় কিছু না, আগের exit পার হলে left','কোনো signal নয়'],2,'সোজা: ঢোকার সময় signal নয়; আপনার exit-এর আগের exit পার হলে left।'],
['স্বাভাবিক অবস্থায় following distance-এর নিয়ম?',['১ সেকেন্ড','২ সেকেন্ড','৪ সেকেন্ড','১০ m'],1,'২-second rule; খারাপ অবস্থায় ৪।'],
['ভেজা রাস্তায় বা trailer টানলে following distance?',['২ সেকেন্ড','৩ সেকেন্ড','৪ সেকেন্ড','৬ সেকেন্ড'],2,'৪-second rule।'],
['কখন headlights চালু রাখতেই হবে?',['শুধু অন্ধকারে','সূর্যাস্তের ৩০ মিনিট পর থেকে সূর্যোদয়ের ৩০ মিনিট আগ পর্যন্ত, এবং ১০০ m দেখা না গেলে','সন্ধ্যা ৬টা থেকে','শুধু বৃষ্টিতে'],1,'৩০ মিনিট নিয়ম + ১০০ m।'],
['রাতে lane-ওয়ালা রাস্তায় দেখা রাস্তার অর্ধেকে থামতে পারতে হবে — সত্য না মিথ্যা?',['সত্য','মিথ্যা'],1,'মিথ্যা। Lane আছে = পুরো দেখা দূরত্বে; অর্ধেক শুধু lane/centreline ছাড়া রাস্তায়।'],
['Driveway থেকে বের হওয়ার সময় footpath, cycle path, shared path ও রাস্তার সবাইকে give way করতে হবে — সত্য না মিথ্যা?',['সত্য','মিথ্যা'],0,'সত্য।'],
['৮০ km/h রাস্তায় চলছেন, সামনে ১০০ km/h sign। কখন speed বাড়াবেন?',['Sign দেখামাত্র','Sign পার হওয়ার পরে','২০০ m আগে','যখন ইচ্ছা'],1,'বেশি limit-এ sign পার হওয়ার পরে।'],
['৮০ km/h রাস্তায়, সামনে ৬০ km/h sign। কখন ৬০-এ নামতে হবে?',['Sign পার হওয়ার পরে','Sign-এ পৌঁছানোর মধ্যে','১ km পরে','পরের intersection-এ'],1,'কম limit-এ sign-এ পৌঁছানোর আগেই।'],
['আপনি limit-এর চেয়ে ধীরে চালাচ্ছেন, পেছনে গাড়ির সারি। কী করবেন?',['Speed বাড়িয়ে দেবেন','Hazard lights দেবেন','বামে থাকবেন এবং নিরাপদ হলে থেমে পার হতে দেবেন','কিছু না'],2,'Slow drivers নিয়ম।'],
['Curve sign-এ 35 লেখা মানে ভালো অবস্থায় ৩৫ km/h পরামর্শ — সত্য না মিথ্যা?',['সত্য','মিথ্যা'],0,'সত্য — advisory speed।'],
['Give Way sign-এ কী করতে হবে?',['শুধু slow','সবাইকে give way — শুধু STOP sign-এ থাকাদের ছাড়া','পুরো থামতেই হবে','ডান দিকের গাড়িকে শুধু'],1,'Give Way sign = STOP-এ থাকা ছাড়া সবাইকে give way।'],
['আপনার দিকে একটানা হলুদ লাইন মানে?',['সাবধানে overtake','Overtake করা নিষেধ','Bus lane','Parking'],1,'No-passing line।'],
['Kerb-এর পাশে ভাঙা হলুদ লাইন মানে?',['৫ মিনিট park','No stopping','Loading zone','Bus lane'],1,'No stopping।'],
['ডানে turn করে multi-lane রাস্তায় ঢুকছেন। কোন lane-এ?',['বাম lane','Centreline-এর পাশের (সবচেয়ে কাছের) lane','যেকোনো','ডান lane-এ গিয়ে পরে বদল'],1,'সবচেয়ে কাছের lane।'],
['Flush median-এ অপেক্ষা করে ডানে turn করা যায়?',['হ্যাঁ, নিরাপদ gap পর্যন্ত','না, কখনো না','শুধু রাতে','শুধু bus'],0,'হ্যাঁ — এটাই flush median-এর কাজ।'],
['বামে turn-এর লাইনে দাঁড়িয়ে cycle lane-এর উপর থামা যায়?',['হ্যাঁ','না'],1,'না — cycle lane-এ থামা যাবে না।'],
['একই lane-এ একই দিকে চলা cyclist-কে পার হতে কমপক্ষে কত জায়গা?',['০.৫ m','১ m','১.৫ m','৩ m'],2,'১ অক্টো ২০২৬ থেকে সবসময় ১.৫ m।'],
['৫০ km/h রাস্তায় bus stop থেকে bus ডানে indicate করছে। কী করবেন?',['আগে চলে যাবেন','Bus-কে give way','Horn','Overtake'],1,'৬০ km/h বা কম রাস্তায় bus-কে give way।'],
['হাতে phone নিয়ে call করা যায় (গাড়ি চলার সময়)?',['হ্যাঁ, ছোট call','না — শুধু mount করা phone কদাচিৎ ও সংক্ষেপে','লাল বাতিতে হ্যাঁ','Speaker দিলে হ্যাঁ'],1,'Hand-held নিষেধ, লাল বাতিতেও।'],
['থেমে থাকা school bus (শিশু নামছে) পার হওয়ার সর্বোচ্চ speed?',['৫০','৩০','২০','১০ km/h'],2,'দুই দিক থেকেই ২০ km/h।'],
['Beach-এ এই variable sign; সামনে মানুষ আছে। Speed limit?',['৩০ km/h','৬০ km/h','৫০ km/h','১০০ km/h'],0,'মানুষ থাকলে ৩০, না থাকলে ৬০।'],
['Intersection থেকে কমপক্ষে কত দূরে park?',['১ m','৩ m','৬ m','১০ m'],2,'৬ m।'],
['Railway crossing-এ থামতে হবে কিন্তু limit line নেই। কোথায়?',['লাইনের উপর','লাইন থেকে কমপক্ষে ৫ m আগে','১ m আগে','থামতে হবে না'],1,'৫ m।'],
['Motorway-তে U-turn করা যায়?',['হ্যাঁ, ফাঁকা থাকলে','না','রাতে হ্যাঁ','Exit মিস হলে হ্যাঁ'],1,'কখনো নয়।'],
['দুই lane মিলে এক lane হচ্ছে। সবচেয়ে ভালো উপায়?',['বড় গাড়ি আগে','Zip — পালাক্রমে একটা করে','ডান lane আগে','যে দ্রুত'],1,'Merge like a zip।'],
['Learner driver-এর supervisor কোথায় বসবেন?',['পেছনের seat','সামনের passenger seat, আপনার পাশে','যেকোনো seat','গাড়িতে না থাকলেও চলবে'],1,'সামনের passenger seat।'],
['Learner driver গাড়িতে L plate কোথায় লাগাবে?',['শুধু পেছনে','শুধু সামনে','সামনে ও পেছনে','Windscreen-এর ভেতরে'],2,'সামনে ও পেছনে।'],
['Motorway-তে গাড়ি নষ্ট হলে কী করবেন?',['Motorway ধরে হেঁটে সাহায্য খুঁজবেন','যতটা সম্ভব রাস্তার বাইরে থামবেন, hazard lights, সাহায্য ডাকবেন, নিরাপদ হলে গাড়িতে থাকবেন','রাস্তার মাঝে থামবেন','Reverse করে exit-এ যাবেন'],1,'Motorway-তে হাঁটবেন না।'],
['Uncontrolled crossroads, দুজনেই সোজা যাচ্ছেন। কাকে give way?',['বাম দিক থেকে আসা','ডান দিক থেকে আসা','কাউকে না','বড় গাড়ি'],1,'বাকি সব ক্ষেত্রে ডান দিকের traffic-কে give way।'],
['কেউ আহত হয়েছে এমন crash police-কে কখন জানাবেন?',['৬০ ঘণ্টার মধ্যে','১ সপ্তাহে','যত দ্রুত সম্ভব, ২৪ ঘণ্টার মধ্যে','জানানো লাগে না'],2,'২৪ ঘণ্টা।'],
];
