/* Structured educational content for the Renal Medicine Lab. */
(() => {
  "use strict";
  const U = window.RenalLabUI;
  if (!U) throw new Error("RenalLabUI must load before data.js");
  const {section,cards,callout,table,bullets,numbered,flow,routeLinks,badge,stats,kidneyDiagram,nephronDiagram,barrierDiagram,urineColors} = U;
  const M = (title,kicker,summary,meta,body) => ({title,kicker,summary,meta,body});

  const navGroups = [
    {title:"Renal principles",items:[
      {id:"overview",label:"Overview & study map"},{id:"renal-anatomy",label:"Kidney anatomy"},{id:"blood-flow",label:"Blood flow & nephron"},{id:"filtration",label:"Glomerular filtration"},{id:"tubular-handling",label:"Tubular handling"},{id:"water-hormones",label:"Water & hormonal control"},{id:"acid-base",label:"Acid-base integration"}
    ]},
    {title:"Renal investigations",items:[
      {id:"investigation-framework",label:"Investigation framework"},{id:"blood-tests",label:"Blood markers"},{id:"egfr-crcl",label:"eGFR, cystatin C & CrCl"},{id:"urinalysis",label:"Urinalysis"},{id:"urine-microscopy",label:"Microscopy, crystals & casts"},{id:"culture-function",label:"Culture & tubular tests"},{id:"imaging",label:"Renal imaging"},{id:"kidney-biopsy",label:"Kidney biopsy"}
    ]},
    {title:"Proteinuria",items:[
      {id:"proteinuria-core",label:"Core concepts"},{id:"proteinuria-categories",label:"Categories & thresholds"},{id:"proteinuria-mechanisms",label:"Mechanisms & causes"},{id:"proteinuria-testing",label:"Detection & quantification"},{id:"proteinuria-workup",label:"Diagnostic work-up"},{id:"proteinuria-management",label:"Management & referral"},{id:"proteinuria-special",label:"Special situations & traps"}
    ]},
    {title:"Hematuria",items:[
      {id:"hematuria-confirmation",label:"Confirm true hematuria"},{id:"hematuria-localization",label:"Localize the source"},{id:"hematuria-causes",label:"Causes & patterns"},{id:"hematuria-assessment",label:"Assessment sequence"},{id:"hematuria-risk",label:"Risk-based pathway"},{id:"hematuria-emergencies",label:"Visible hematuria & emergencies"}
    ]},
    {title:"Interactive revision",items:[
      {id:"nephron-lab",label:"Nephron transport lab"},{id:"filtration-lab",label:"Filtration forces lab"},{id:"crcl-lab",label:"Creatinine clearance lab"},{id:"urine-interpreter",label:"Urine pattern interpreter"},{id:"proteinuria-lab",label:"Proteinuria classifier"},{id:"clinical-cases",label:"Clinical cases"},{id:"flashcards",label:"Flashcards"},{id:"quiz",label:"Scored quiz"},{id:"sources",label:"Sources & original PDFs"}
    ]}
  ];

  const clusters = {
    principles:["overview","renal-anatomy","blood-flow","filtration","tubular-handling","water-hormones","acid-base"],
    investigations:["investigation-framework","blood-tests","egfr-crcl","urinalysis","urine-microscopy","culture-function","imaging","kidney-biopsy"],
    proteinuria:["proteinuria-core","proteinuria-categories","proteinuria-mechanisms","proteinuria-testing","proteinuria-workup","proteinuria-management","proteinuria-special"],
    hematuria:["hematuria-confirmation","hematuria-localization","hematuria-causes","hematuria-assessment","hematuria-risk","hematuria-emergencies"],
    revision:["nephron-lab","filtration-lab","crcl-lab","urine-interpreter","proteinuria-lab","clinical-cases","flashcards","quiz","sources"]
  };

  const modules = {
    overview:M("Renal Medicine Lab","Four connected chapters · one clinical model","Move from normal renal structure and physiology to question-driven investigations, then apply the same logic to proteinuria and hematuria. Every module links forward to interpretation, cases, flashcards, and scored revision.",["37 connected modules","4 original PDFs","Offline-first"],()=>`
      ${section("The whole renal map",`${kidneyDiagram()}${callout("The central model","The glomerulus filters, the tubule modifies, and the collecting duct finalizes urine. Clinical investigation asks four linked questions: Is filtration reduced? Is kidney damage present? Is homeostasis failing? Is there a structural or tissue diagnosis that changes management?","success")}`)}
      ${section("Four layers of understanding",cards([
        {icon:"1",title:"Principles",body:"<p>Know anatomy, renal blood flow, the filtration barrier, nephron segments, hormones, water handling, and acid-base physiology.</p>"},
        {icon:"2",title:"Investigations",body:"<p>Interpret trends in creatinine and eGFR together with urinalysis, microscopy, targeted imaging, and selective biopsy.</p>"},
        {icon:"3",title:"Proteinuria",body:"<p>Separate albumin from total protein, quantify persistence and amount, then identify glomerular, tubular, overflow, or post-renal patterns.</p>"},
        {icon:"4",title:"Hematuria",body:"<p>Confirm intact red cells, distinguish glomerular from urologic bleeding, recognize emergencies, and apply risk-based evaluation.</p>"}
      ]))}
      ${section("A reusable bedside algorithm",flow([
        {title:"Stabilize",body:"Hyperkalemia, pulmonary edema, acidosis, sepsis, anuria, clot retention, or rapidly progressive disease come first."},
        {title:"Confirm",body:"Check prior results, collection quality, microscopy, urine output, drugs, and transient triggers."},
        {title:"Localize",body:"Combine kidney function, albumin/protein, sediment, symptoms, and imaging."},
        {title:"Explain",body:"Order targeted serology, culture, paraprotein studies, vascular tests, or biopsy only when they answer a real question."},
        {title:"Act",body:"Treat reversible causes, reduce renal and cardiovascular risk, and refer urgently when red flags are present."}
      ]))}
      ${section("Start studying",`${stats([{value:"9",label:"principles pages"},{value:"13",label:"investigation pages"},{value:"12",label:"proteinuria pages"},{value:"11",label:"hematuria pages"}])}${routeLinks([["renal-anatomy","Begin with anatomy"],["investigation-framework","Jump to investigations"],["clinical-cases","Test clinical reasoning"]])}`)}
    `),

    "renal-anatomy":M("Kidney Anatomy","Chapter 1 · foundations","Build a spatial map from retroperitoneal kidney to cortex, medulla, papilla, calyces, pelvis, and ureter. Anatomy explains where filtration occurs and how obstruction affects upstream pressure.",["T12-L3 approximately","Cortex contains glomeruli","Papilla to ureter"],()=>`
      ${section("Position and gross organization",`${kidneyDiagram()}${cards([
        {icon:"◐",title:"Position",body:"<p>Paired retroperitoneal organs on the posterior abdominal wall. They commonly span about T12-L3; the right kidney usually lies slightly lower because of the liver.</p>"},
        {icon:"C",title:"Cortex",body:"<p>Outer region containing every renal corpuscle plus proximal and distal convoluted tubules.</p>"},
        {icon:"M",title:"Medulla",body:"<p>Inner pyramids containing loops of Henle and collecting ducts. Lower medullary blood flow helps preserve the osmotic gradient.</p>"},
        {icon:"U",title:"Urine pathway",body:"<p>Collecting duct → papillary duct → minor calyx → major calyx → renal pelvis → ureter → bladder.</p>"}
      ])}`)}
      ${section("Why anatomy matters clinically",table(["Finding","Anatomic meaning","Clinical bridge"],[
        ["Small echogenic kidneys","Chronic parenchymal loss and fibrosis","May make a reversible tissue diagnosis less likely; interpret with history."],
        ["Hydronephrosis","Dilatation upstream from impaired drainage","Search for obstruction; an infected obstructed system is urgent."],
        ["Enlarged kidneys","Infiltration, cystic disease, acute inflammation, diabetes, or other causes","Size alone is not a diagnosis; combine with imaging pattern and context."],
        ["Unequal kidneys","Asymmetric scarring, vascular disease, congenital variation, or obstruction","May direct vascular or urologic evaluation."]
      ],"Clinical relevance of kidney anatomy"))}
      ${callout("Exam pearl","Glomeruli are in the cortex. Long tubular segments in the medulla create and exploit the corticomedullary osmotic gradient.","warning")}
    `),

    "blood-flow":M("Renal Blood Flow & the Nephron","Chapter 1 · foundations","Trace blood from renal artery to glomerulus and understand why the glomerular capillary bed sits between two arterioles. Then connect each nephron segment to its dominant task.",["~20% resting cardiac output","Two-arteriole capillary bed","Juxtaglomerular apparatus"],()=>`
      ${section("Blood-flow sequence",`${flow([
        {title:"Renal artery",body:"Enters at the hilum."},{title:"Segmental → interlobar",body:"Travel between pyramids."},{title:"Arcuate → interlobular",body:"Distribute blood along the corticomedullary border and cortex."},{title:"Afferent arteriole",body:"Delivers blood to the filtration bed."},{title:"Glomerular capillaries",body:"High-pressure ultrafiltration."},{title:"Efferent arteriole",body:"Exits to peritubular capillaries or vasa recta."}
      ])}${nephronDiagram()}`)}
      ${section("Why two arterioles?",table(["Segment","Main role","Effect of resistance change"],[
        ["Afferent arteriole","Delivers blood; participates in autoregulation","Constriction lowers renal blood flow and usually lowers glomerular pressure."],
        ["Glomerular capillaries","Forms ultrafiltrate into Bowman space","Pressure is higher than in most capillary beds."],
        ["Efferent arteriole","Carries blood away and sustains glomerular pressure","Moderate constriction can raise filtration pressure; severe constriction may reduce renal blood flow and increase oncotic opposition."],
        ["Peritubular capillaries","Support cortical reabsorption and secretion","Low hydrostatic and higher oncotic forces favor reabsorption."],
        ["Vasa recta","Countercurrent exchange beside long loops","Slow flow limits washout of the medullary gradient."]
      ]))}
      ${section("Juxtaglomerular apparatus",cards([
        {icon:"Na",title:"Macula densa",body:"<p>Senses tubular sodium chloride delivery and contributes to tubuloglomerular feedback.</p>"},
        {icon:"R",title:"Granular cells",body:"<p>Release renin when perfusion pressure falls, sympathetic input rises, or macula-densa signaling indicates low delivery.</p>"},
        {icon:"↔",title:"Mesangial signaling",body:"<p>Extraglomerular mesangial cells help transmit local signals between tubule and arterioles.</p>"}
      ]))}
      ${callout("Clinical bridge","Reduced effective circulating volume activates sympathetic tone and RAAS. The same response that supports pressure can worsen sodium retention and edema when chronically activated.","purple")}
    `),

    filtration:M("Glomerular Filtration","Chapter 1 · foundations","Understand the three-layer filtration barrier, Starling forces, GFR, filtration fraction, and why albuminuria or hematuria points to barrier injury rather than simple loss of filtration.",["Barrier selectivity","GFR indexed to 1.73 m²","Net filtration pressure"],()=>`
      ${section("The three-layer barrier",`${barrierDiagram()}${callout("What normally crosses?","Water, electrolytes, glucose, amino acids, urea, and many small molecules are readily filtered. Blood cells and most large plasma proteins are retained. Filtration depends on size, shape, protein binding, and barrier integrity; there is no single universal molecular-weight cutoff.","success")}`)}
      ${section("Forces that set filtration",table(["Determinant","Direction","Interpretation"],[
        ["Glomerular capillary hydrostatic pressure","Favors filtration","Main driving force; altered by afferent and efferent tone."],
        ["Plasma oncotic pressure","Opposes filtration","Rises along the capillary as protein-free fluid is filtered."],
        ["Bowman-space hydrostatic pressure","Opposes filtration","May rise with urinary obstruction."],
        ["Filtration coefficient (Kf)","Scales filtration","Depends on available surface area and barrier permeability."]
      ]))}
      ${section("Equations worth understanding",cards([
        {icon:"NFP",title:"Net filtration pressure",body:"<p><strong>NFP ≈ P<sub>GC</sub> − P<sub>BS</sub> − π<sub>GC</sub></strong> when oncotic pressure in Bowman space is negligible.</p>"},
        {icon:"GFR",title:"Glomerular filtration rate",body:"<p><strong>GFR = Kf × NFP.</strong> A young healthy adult often has measured GFR near 120 mL/min, but age, body size, and physiological state matter.</p>"},
        {icon:"FF",title:"Filtration fraction",body:"<p><strong>FF = GFR / renal plasma flow.</strong> It describes the fraction of renal plasma flow filtered into Bowman space.</p>"}
      ]))}
      ${callout("Damage versus function","eGFR estimates filtration. Albuminuria, dysmorphic RBCs, and RBC casts signal structural glomerular injury. A patient may have normal filtration early in disease yet still have clinically important kidney damage.","warning")}
      ${routeLinks([["filtration-lab","Change filtration forces interactively"],["proteinuria-core","See barrier failure as proteinuria"],["hematuria-localization","See glomerular bleeding clues"]])}
    `),

    "tubular-handling":M("Tubular Reabsorption, Secretion & Excretion","Chapter 1 · foundations","Use one handling equation and a segment-by-segment map. The proximal tubule performs bulk recovery; distal segments provide smaller but decisive fine control.",["Filtered − reabsorbed + secreted","Segment-specific transport","Final urine is regulated"],()=>`
      ${section("The renal handling equation",`${callout("Excretion = filtration − reabsorption + secretion","A filtered substance enters tubular fluid at the glomerulus. Reabsorption returns it to blood. Secretion adds it from blood to tubular fluid. What remains is excreted.","success")}${nephronDiagram()}`)}
      ${section("Segment-by-segment logic",table(["Segment","Dominant handling","High-yield consequence"],[
        ["Proximal tubule","Bulk sodium and water reabsorption; most bicarbonate; nearly all normal glucose and amino acids; secretion of organic acids/bases","Tubular injury can cause glycosuria without hyperglycemia, bicarbonate loss, phosphate wasting, and low-molecular-weight proteinuria."],
        ["Thin descending limb","High water permeability; limited solute transport","Tubular fluid becomes concentrated entering the medulla."],
        ["Thick ascending limb","Reabsorbs Na-K-2Cl; effectively impermeable to water","Dilutes tubular fluid and helps build the medullary gradient."],
        ["Distal convoluted tubule","NaCl via NCC; calcium handling influenced by PTH","Fine salt and calcium control."],
        ["Collecting duct principal cells","ENaC sodium uptake, potassium secretion, ADH-regulated water permeability","Aldosterone, distal sodium delivery, flow, and ADH strongly influence final urine."],
        ["Intercalated cells","Acid or bicarbonate secretion","Final acid-base regulation."]
      ]))}
      ${section("Do not memorize false absolutes",cards([
        {icon:"≈",title:"Percentages are approximate",body:"<p>Segmental fractions vary with diet, hemodynamics, hormones, medications, and disease.</p>"},
        {icon:"K+",title:"Potassium is not simply reabsorbed",body:"<p>Most filtered potassium is reclaimed proximally, but final excretion is set by distal secretion and reabsorption.</p>"},
        {icon:"HCO₃",title:"Bicarbonate handling is distributed",body:"<p>Most filtered bicarbonate is reclaimed proximally; net acid excretion also requires ammonium generation and distal H+ secretion.</p>"}
      ]))}
      ${routeLinks([["nephron-lab","Explore each nephron segment"],["acid-base","Connect transport to acid-base"],["urine-microscopy","See tubular injury in sediment"]])}
    `),

    "water-hormones":M("Water Handling & Hormonal Control","Chapter 1 · foundations","Concentrating urine requires a medullary gradient, intact tubular delivery, and ADH-responsive collecting ducts. Hormones coordinate volume, osmolality, potassium, calcium, erythropoiesis, and vitamin D.",["Countercurrent multiplier","ADH sets final water permeability","RAAS and natriuretic balance"],()=>`
      ${section("How concentrated urine is produced",numbered([
        "Glomerular filtration delivers water and solutes to the nephron.",
        "The proximal tubule reabsorbs water with solute, keeping tubular fluid roughly iso-osmotic.",
        "The descending limb allows water to leave into the hypertonic medulla.",
        "The thick ascending limb reabsorbs salt without water, both diluting tubular fluid and building the gradient.",
        "The vasa recta preserves the gradient by countercurrent exchange.",
        "ADH inserts aquaporin-2 channels in collecting-duct principal cells, determining how much water is reclaimed."
      ]))}
      ${section("Hormonal control map",table(["Hormone/system","Trigger","Renal effect"],[
        ["Renin-angiotensin-aldosterone system","Reduced perfusion, sympathetic activation, low distal NaCl","Supports pressure and sodium retention; aldosterone promotes ENaC activity and potassium/H+ secretion."],
        ["ADH (vasopressin)","Raised plasma osmolality or reduced effective circulating volume","Increases collecting-duct water permeability; high ADH produces concentrated, low-volume urine."],
        ["Natriuretic peptides","Cardiac chamber stretch","Promote natriuresis and oppose sodium-retaining systems."],
        ["PTH","Low calcium or related mineral signals","Increases distal calcium reabsorption and reduces proximal phosphate reabsorption."],
        ["Erythropoietin","Renal tissue hypoxia","Stimulates red-cell production in bone marrow."],
        ["Calcitriol activation","PTH and mineral balance","Kidney converts vitamin D to its active form, supporting calcium and phosphate physiology."]
      ]))}
      ${section("Autoregulation",cards([
        {icon:"M",title:"Myogenic response",body:"<p>Afferent arteriolar smooth muscle constricts when stretched and relaxes when pressure falls, buffering flow over a physiological range.</p>"},
        {icon:"TGF",title:"Tubuloglomerular feedback",body:"<p>Macula-densa sodium chloride delivery adjusts arteriolar tone and renin signaling to stabilize filtration.</p>"},
        {icon:"!",title:"Limits",body:"<p>Severe hypotension, sepsis, drugs, vascular disease, or major volume disturbance can overwhelm autoregulation.</p>"}
      ]))}
      ${callout("Clinical integration","A patient with edema can have excessive total body sodium while the kidney senses low effective arterial filling. RAAS and ADH may remain activated, worsening sodium and water retention.","warning")}
    `),

    "acid-base":M("Renal Acid-Base Control","Chapter 1 · foundations","The kidney prevents bicarbonate loss, excretes daily acid, and generates new bicarbonate. Proximal ammoniagenesis and distal acid secretion are complementary, not competing explanations.",["HCO₃ reclamation","NH₄+ excretion","Titratable acid"],()=>`
      ${section("Three linked jobs",cards([
        {icon:"1",title:"Reclaim filtered bicarbonate",body:"<p>Mostly in the proximal tubule. Secreted H+ allows filtered bicarbonate to be converted and returned to blood without net acid excretion at that step.</p>"},
        {icon:"2",title:"Generate ammonium",body:"<p>Proximal glutamine metabolism produces NH4+ for urinary excretion and new bicarbonate for blood.</p>"},
        {icon:"3",title:"Secrete final acid",body:"<p>Distal nephron H+ secretion traps ammonium and produces titratable acid, mainly buffered by phosphate.</p>"}
      ]))}
      ${section("Cell and segment map",table(["Process","Main location","Result"],[
        ["Filtered bicarbonate reclamation","Predominantly proximal tubule","Prevents massive bicarbonate loss."],
        ["Ammoniagenesis","Proximal tubule","Generates NH4+ and new bicarbonate."],
        ["Titratable-acid excretion","Distal nephron","H+ is buffered, especially by phosphate, and excreted."],
        ["Final urine acidification","Collecting-duct alpha-intercalated cells","Active H+ secretion can markedly lower urine pH."],
        ["Bicarbonate secretion","Beta-intercalated cells","Can contribute to correction of metabolic alkalosis."]
      ]))}
      ${section("Integrated mental model",table(["Question","Think first about"],[
        ["Is bicarbonate low?","Filtered bicarbonate handling, ammonium production, distal H+ secretion, diarrhea, and acid generation."],
        ["Is potassium high?","GFR, distal sodium delivery, aldosterone, flow, acid-base state, and medicines."],
        ["Can urine acidify?","Urine pH alone is not enough; assess systemic acid-base status, ammonium surrogates, and context."],
        ["Why does advanced kidney disease cause acidosis?","Reduced functioning nephron mass limits ammonium generation and net acid excretion."]
      ]))}
      ${callout("Correction to avoid","New bicarbonate generation is not simply a distal-convoluted-tubule event. Proximal ammoniagenesis is central, while distal secretion enables NH4+ trapping and titratable-acid excretion.","danger")}
    `),

    "investigation-framework":M("A Clinical Framework for Renal Investigations","Chapter 2 · investigations","No single test describes filtration, damage, tubular performance, structure, and cause. Ask a clinical question, stabilize emergencies, then combine blood, urine, and targeted imaging.",["Question-driven testing","Trend + urine + structure","Urgent red flags first"],()=>`
      ${section("The five questions",table(["Clinical question","First-line tools","What an abnormal result suggests"],[
        ["Is filtration reduced?","Serum creatinine with eGFR; cystatin C when helpful","Acute or chronic fall in filtration, interpreted against previous values and current status."],
        ["Is kidney damage present?","Urinalysis, microscopy, spot UACR and/or PCR","Albuminuria, glomerular bleeding, tubular injury, infection, or crystalluria."],
        ["Is homeostasis failing?","K+, Na+, bicarbonate, Ca, phosphate, glucose; blood gas when indicated","Hyperkalemia, acid-base disturbance, mineral disorder, or severe systemic illness."],
        ["Is there a structural cause?","Kidney/bladder ultrasound; CT or MRI for a focused question","Obstruction, stones, cysts, tumors, congenital, or vascular abnormality."],
        ["Will tissue change management?","Kidney biopsy after risk assessment","Histologic diagnosis, activity versus chronicity, prognosis, and treatment selection."]
      ]))}
      ${section("Practical sequence",flow([
        {title:"1. Stabilize",body:"Look for severe hyperkalemia, pulmonary edema, marked acidosis, uremic complications, sepsis, anuria, or rapidly progressive failure."},
        {title:"2. Confirm change",body:"Review previous creatinine/eGFR, urine output, fluid balance, drugs, illness, and hemodynamic events."},
        {title:"3. Blood + urine",body:"Order creatinine/eGFR, electrolytes, urinalysis, microscopy, and UACR/PCR as appropriate."},
        {title:"4. Reversible causes",body:"Assess volume status and use ultrasound when obstruction or structural disease is possible."},
        {title:"5. Target cause",body:"Cultures, immune tests, paraproteins, viral studies, or vascular imaging only when indicated."},
        {title:"6. Biopsy selectively",body:"Proceed when histology is likely to change diagnosis, prognosis, or treatment and risk is acceptable."}
      ]))}
      ${callout("Urgent renal red flags",bullets(["ECG changes or severe hyperkalemia.","Refractory pulmonary edema.","Severe metabolic acidosis.","Anuria or worsening oliguria.","Suspected infected obstruction.","Rapidly rising creatinine with active urine sediment.","Uremic encephalopathy or pericarditis."]),"danger")}
    `),

    "blood-tests":M("Blood Investigations & Filtration Markers","Chapter 2 · investigations","Interpret the whole panel and its trend. Urea and creatinine are influenced by production, distribution, medications, and nonrenal factors; neither should be read in isolation.",["CBC and electrolytes","Urea/BUN context","Creatinine limitations"],()=>`
      ${section("Baseline blood panel",table(["Test","Why useful","Interpretive caution"],[
        ["CBC","Anemia of CKD, infection, hemolysis, or thrombocytopenia before biopsy","Anemia is nonspecific and often multifactorial."],
        ["Electrolytes and bicarbonate","Potassium disturbance, sodium/water disorders, metabolic acidosis","Hemolysis can falsely elevate potassium; ECG and urgent repeat testing may be needed."],
        ["Calcium, phosphate, ALP, PTH","CKD-mineral and bone disorder when CKD is established","Abnormalities depend on stage, nutrition, and treatment."],
        ["Albumin and liver profile","Interpret edema, protein loss, nutrition, and low urea","Hypoalbuminemia is not synonymous with nephrotic syndrome."],
        ["Glucose/HbA1c","Diabetes and hyperglycemia-related glycosuria","HbA1c may be less reliable in advanced CKD, anemia, or recent transfusion."],
        ["CRP/ESR and targeted serology","Supports selected infection, inflammation, vasculitis, or immune disease","Nonspecific screening creates false positives; use pretest probability."]
      ]))}
      ${section("Urea and BUN",cards([
        {icon:"↑",title:"Higher than expected",body:"<p>Reduced perfusion or filtration, dehydration, gastrointestinal bleeding, high protein intake, or catabolism from fever, trauma, or corticosteroids.</p>"},
        {icon:"↓",title:"Lower than expected",body:"<p>Low protein intake, severe liver dysfunction, pregnancy with increased GFR, overhydration, or reduced catabolism.</p>"},
        {icon:"!",title:"Not a pure GFR marker",body:"<p>Urea production and tubular reabsorption vary. A high urea-to-creatinine pattern can support reduced perfusion or GI bleeding but is not diagnostic by itself.</p>"}
      ]))}
      ${section("Serum creatinine: six limitations",bullets([
        "Derived mainly from muscle creatine and influenced by muscle mass.",
        "A normal value can hide low GFR in frailty, amputation, paralysis, or cachexia.",
        "A muscular person may have a higher value without intrinsic kidney damage.",
        "Cooked meat, creatine supplements, intense exercise, and assay interference can alter the result.",
        "Trimethoprim, cimetidine, and some antiretrovirals can raise creatinine by inhibiting tubular secretion without a true fall in GFR.",
        "Interpret absolute change, percentage change, and time course rather than waiting for the value to exceed the reference range."
      ]))}
    `),

    "egfr-crcl":M("eGFR, Cystatin C & Creatinine Clearance","Chapter 2 · investigations","Use race-free adult eGFR equations for stable kidney function, recognize when creatinine is misleading, and distinguish standardized eGFR from creatinine clearance used in some drug labels.",["CKD-EPI 2021 commonly used","Combined creatinine-cystatin more accurate","CrCl often overestimates GFR"],()=>`
      ${section("GFR categories",table(["Category","eGFR (mL/min/1.73 m²)","Description"],[
        ["G1","≥90","Normal or high; CKD requires another marker of kidney damage."],
        ["G2","60-89","Mildly decreased; CKD still requires another marker of kidney damage."],
        ["G3a","45-59","Mildly to moderately decreased."],
        ["G3b","30-44","Moderately to severely decreased."],
        ["G4","15-29","Severely decreased."],
        ["G5","<15","Kidney failure category; clinical decisions are not based on eGFR alone."]
      ]))}
      ${callout("Chronicity matters","CKD requires an abnormality of kidney structure or function for at least 3 months. One low eGFR during acute illness does not establish CKD.","warning")}
      ${section("When creatinine-based eGFR may mislead",table(["Situation","Problem","Better approach"],[
        ["Very low/high muscle mass, amputation, paralysis, cachexia, bodybuilding","Creatinine generation differs from the equation population","Use cystatin C or combined eGFRcr-cys; consider measured GFR for high-stakes decisions."],
        ["Rapidly changing kidney function","Creatinine is not at steady state","Use serial creatinine, urine output, and trajectory; do not rely on one eGFR."],
        ["Extremes of body size","Indexed eGFR may not equal absolute clearance","For drug dosing near a cutoff, consider de-indexing and follow the medicine label."],
        ["Pregnancy","Standard adult equations are not validated for routine use","Use obstetric/nephrology assessment and trends."]
      ]))}
      ${section("Cystatin C and CrCl",cards([
        {icon:"Cys",title:"Cystatin C",body:"<p>Less dependent on muscle mass. The combined creatinine-cystatin equation is usually more accurate, but steroids, thyroid disease, inflammation, smoking, and adiposity can influence levels.</p>"},
        {icon:"CG",title:"Cockcroft-Gault",body:"<p>Traditional estimate: [(140 − age) × weight] / [72 × creatinine], multiplied by 0.85 for women in the original equation. It estimates creatinine clearance, not standardized eGFR.</p>"},
        {icon:"24h",title:"Timed urine CrCl",body:"<p>Urine creatinine concentration × urine flow / plasma creatinine. It often overestimates true GFR because of tubular secretion and is vulnerable to collection error.</p>"}
      ]))}
      ${routeLinks([["crcl-lab","Calculate Cockcroft-Gault CrCl"],["proteinuria-categories","Combine GFR with albuminuria"]])}
    `),

    urinalysis:M("Urine Collection & Routine Urinalysis","Chapter 2 · investigations","Specimen quality comes first. Urine appearance, concentration, pH, dipstick chemistry, and quantitative albumin/protein testing answer different questions.",["Clean-catch midstream","Prompt analysis","First-morning confirmation"],()=>`
      ${section("Specimen quality",numbered([
        "Use a clean-catch midstream sample and a correctly labeled container.",
        "Analyze promptly or refrigerate according to laboratory policy; cells, casts, glucose, pH, and bacteria change with delay.",
        "For albumin confirmation, a first-morning midstream sample is preferred; a random spot sample is acceptable for screening.",
        "Repeat unexpected albuminuria or hematuria after transient causes such as exercise, fever, menstruation, or infection resolve."
      ]))}
      ${section("Approximate normal findings",table(["Domain","Typical finding","Qualification"],[
        ["Appearance","Clear, pale yellow to amber","Hydration, foods, and medicines alter color."],
        ["Daily volume","Often about 0.8-2.0 L/day","Interpret against intake, losses, diuretics, and body size."],
        ["Specific gravity","About 1.005-1.030","Osmolality is more informative when precision matters."],
        ["pH","About 4.5-8.0","Diet, handling, infection, and acid-base state influence pH."],
        ["Protein","Negative/trace; total protein usually <150 mg/day","Dipsticks detect albumin better than light chains."],
        ["UACR","A1 <30 mg/g (<3 mg/mmol)","Values ≥30 mg/g usually require confirmation."],
        ["Microscopy","RBC often 0-2/HPF; WBC often 0-5/HPF","Laboratory ranges vary; morphology and casts matter."]
      ]))}
      ${section("Volume terminology",table(["Term","Common adult definition","Clinical meaning"],[
        ["Polyuria",">3 L/day","Excess water or solute excretion; distinguish from frequency."],
        ["Oliguria","<0.5 mL/kg/h for at least 6 h in KDIGO AKI criteria","May reflect low perfusion, intrinsic AKI, or obstruction."],
        ["Anuria","Approximately <100 mL/day or absent urine","Consider complete obstruction, severe shock, vascular occlusion, or advanced renal failure; urgent evaluation."],
        ["Nocturia","Waking from sleep to void","May occur with impaired concentration, heart failure, sleep disorders, or lower-tract disease."]
      ]))}
      ${section("Dipstick interpretation",`${urineColors()}${table(["Pad","What a positive result may mean","Common trap"],[
        ["Blood","RBCs, hemoglobin, or myoglobin","Microscopy is required to prove intact RBCs."],
        ["Protein","Mostly albumin","Can miss light chains and other non-albumin proteins."],
        ["Leukocyte esterase","White cells/inflammation","Contamination and noninfectious inflammation are possible."],
        ["Nitrite","Nitrate-reducing bacteria","A negative result does not exclude UTI."],
        ["Glucose","Hyperglycemia or proximal tubular dysfunction","Check serum glucose; SGLT2 inhibitors intentionally cause glycosuria."],
        ["Ketones","Fasting, vomiting, or ketoacidosis","Interpret with clinical and acid-base status."],
        ["Bilirubin/urobilinogen","Hepatobiliary or hemolytic clues","Not primary kidney-function tests."]
      ])}`)}
    `),

    "urine-microscopy":M("Urine Microscopy, Crystals & Casts","Chapter 2 · investigations","The sediment localizes injury. Cell morphology and casts usually carry more diagnostic weight than the simple presence of cells.",["Dysmorphic RBCs","WBC and epithelial cells","Casts form in tubules"],()=>`
      ${section("Cells in the sediment",table(["Finding","Interpretation","Important nuance"],[
        ["Dysmorphic RBCs / acanthocytes","Supports glomerular bleeding","Operator experience and specimen handling matter."],
        ["Isomorphic RBCs","More compatible with non-glomerular bleeding","Not perfectly specific; integrate with protein, casts, and symptoms."],
        ["WBCs","Infection or sterile inflammation","Can occur in pyelonephritis, interstitial nephritis, stones, or contamination."],
        ["Squamous epithelial cells","Likely contamination","Repeat a properly collected sample if results are inconsistent."],
        ["Renal tubular epithelial cells","Tubular injury","Abundant cells or granular casts support acute tubular injury."]
      ]))}
      ${section("Urinary casts",table(["Cast","Typical meaning","Exam pearl"],[
        ["Hyaline","Can be normal, dehydration, exercise, or low flow","Nonspecific."],
        ["RBC cast","Glomerular bleeding / nephritic process","Strongly supports glomerulonephritis."],
        ["WBC cast","Pyelonephritis or interstitial inflammation","Localizes white cells to the kidney rather than simple cystitis."],
        ["Granular muddy-brown cast","Acute tubular injury","Classic but not mandatory."],
        ["Epithelial-cell cast","Tubular epithelial injury","May accompany acute tubular injury or toxins."],
        ["Fatty cast / oval fat body","Heavy glomerular protein loss","Supports nephrotic syndrome pattern."],
        ["Broad waxy cast","Advanced chronic kidney disease / low-flow dilated tubules","Often called renal failure casts."]
      ]))}
      ${section("Crystals",table(["Crystal/context","Clue","Caution"],[
        ["Calcium oxalate","Envelope or dumbbell shapes; stones or ethylene glycol context","Crystals can occur without stones."],
        ["Uric acid","Rhomboid/rosette, often acidic urine","May occur with tumor lysis, gout, or high cell turnover."],
        ["Struvite","Coffin-lid crystals, alkaline urine, urease-positive infection","Think infection stones and possible obstruction."],
        ["Cystine","Hexagonal crystals","Suggest cystinuria."],
        ["Drug crystals","Sulfonamides, acyclovir, indinavir, others","Medication history and hydration matter."]
      ]))}
      ${callout("Pattern over isolated object","Proteinuria plus dysmorphic RBCs or RBC casts is a glomerular-inflammatory pattern. WBC casts plus fever and flank pain suggest pyelonephritis, while sterile pyuria with drug exposure can suggest interstitial nephritis.","purple")}
      ${routeLinks([["urine-interpreter","Interpret a mixed urine pattern"],["hematuria-localization","Apply RBC morphology"],["proteinuria-mechanisms","Apply protein patterns"]])}
    `),

    "culture-function":M("Urine Culture & Specialized Tubular Tests","Chapter 2 · investigations","Culture answers whether clinically relevant organisms are present; tubular tests answer concentration, acidification, and solute-handling questions. Order both selectively.",["Culture before antibiotics when possible","Symptoms + counts + collection","Functional tests are question-specific"],()=>`
      ${section("Urine culture best practice",table(["Clinical situation","Best practice"],[
        ["Typical lower UTI symptoms","Obtain culture when risk, recurrence, atypical features, pregnancy, male sex, treatment failure, or local policy indicates."],
        ["Suspected pyelonephritis or sepsis","Send culture before antibiotics if this does not delay treatment; assess obstruction."],
        ["Indwelling catheter","Interpret bacteriuria with symptoms and catheter context; colonization is common."],
        ["Contaminated sample","Repeat with careful collection or catheter specimen when justified."],
        ["After treatment","Repeat only when clinically indicated, but hematuria attributed to infection should be shown to resolve."]
      ]))}
      ${section("Tubular function questions",cards([
        {icon:"H₂O",title:"Concentrating ability",body:"<p>Urine osmolality and response to water deprivation or desmopressin may help distinguish causes of polyuria, under specialist supervision.</p>"},
        {icon:"Na",title:"Sodium handling",body:"<p>Urine sodium and fractional excretion indices can support reasoning in AKI, but diuretics, CKD, sepsis, and mixed states limit accuracy.</p>"},
        {icon:"pH",title:"Acidification",body:"<p>Urine pH, ammonium surrogates, serum bicarbonate, and potassium help assess renal tubular acidosis; urine pH alone is insufficient.</p>"},
        {icon:"PO₄",title:"Solute wasting",body:"<p>Fractional excretion or tubular reabsorption measures may assess phosphate, urate, glucose, or amino-acid handling in suspected tubulopathy.</p>"}
      ]))}
      ${callout("Legacy-test caution","Older concentration, dye-excretion, and clearance tests may appear in examinations. Modern practice favors validated filtration estimates, urine osmolality, targeted dynamic testing, and imaging selected for the clinical question.","warning")}
    `),

    imaging:M("Imaging the Kidneys & Urinary Tract","Chapter 2 · investigations","Select imaging by the question: obstruction and structure, stone, mass, vascular disease, functional drainage, or hematuria risk. One scan does not answer every question.",["Ultrasound first for obstruction","CT for focused anatomy","MRI/nuclear/vascular studies selectively"],()=>`
      ${section("Modality selection",table(["Modality","Best at","Limitations / cautions"],[
        ["Kidney and bladder ultrasound","Hydronephrosis, kidney size, cysts, bladder volume, gross structural survey","Operator and body-habitus dependent; may miss small ureteric stones or urothelial lesions."],
        ["Noncontrast CT","Stones, calcification, acute flank pain","Ionizing radiation; not the same as CT urography."],
        ["Contrast CT / CT urography","Masses, trauma, vascular anatomy, high-risk upper-tract urothelial evaluation","Contrast and radiation decisions require patient-specific assessment."],
        ["MRI / MR urography","Selected masses, vessels, soft tissue, pregnancy-related alternatives when appropriate","Longer study, availability, device and contrast considerations."],
        ["Doppler ultrasound","Renal blood flow, renal vein, selected stenosis questions","Technically demanding; screening accuracy varies."],
        ["Radionuclide renography","Differential function and drainage","Lower anatomic detail; interpretation depends on protocol and renal function."]
      ]))}
      ${section("Ultrasound interpretation",cards([
        {icon:"↔",title:"Size and symmetry",body:"<p>Small echogenic kidneys suggest chronicity; asymmetry may point to scarring, vascular disease, congenital variation, or obstruction.</p>"},
        {icon:"◌",title:"Hydronephrosis",body:"<p>Dilatation suggests impaired drainage but can be absent early or occur without fixed obstruction. Interpret with symptoms and bladder status.</p>"},
        {icon:"□",title:"Cysts and masses",body:"<p>Simple cysts have characteristic benign features; complex lesions require cross-sectional characterization.</p>"},
        {icon:"B",title:"Bladder and residual",body:"<p>Bladder volume, wall, and post-void residual can reveal lower-tract obstruction or retention.</p>"}
      ]))}
      ${section("Choosing the next image",flow([
        {title:"Suspected obstruction",body:"Ultrasound first in many settings; urgent decompression if infected obstruction."},
        {title:"Renal colic",body:"Noncontrast CT is highly sensitive; ultrasound may be preferred in pregnancy or selected young patients."},
        {title:"Painless visible hematuria",body:"Urologic evaluation usually includes cystoscopy plus upper-tract imaging selected by risk and suitability."},
        {title:"Renal mass",body:"Contrast-enhanced CT or MRI characterization."},
        {title:"Vascular question",body:"Doppler, CT angiography, MR angiography, or catheter angiography according to purpose and risk."}
      ]))}
    `),

    "kidney-biopsy":M("Kidney Biopsy","Chapter 2 · investigations","Biopsy is justified when histology is likely to change diagnosis, prognosis, or treatment. Safe practice requires blood-pressure and bleeding-risk assessment, imaging guidance, and post-procedure observation.",["Selective tissue diagnosis","Ultrasound-guided percutaneous common","Bleeding is key complication"],()=>`
      ${section("Common indications",table(["Indication","Examples"],[
        ["Glomerular syndrome","Nephrotic syndrome, significant proteinuria with active sediment, rapidly progressive GN."],
        ["Unexplained AKI","When pre-renal, obstructive, and obvious toxic causes are excluded and tissue will change care."],
        ["Systemic disease with renal involvement","Lupus, amyloidosis, paraprotein disease, vasculitis, selected infections."],
        ["Unexplained CKD with treatable possibility","Especially when kidney size is preserved and diagnosis would change management."],
        ["Transplant dysfunction","Rejection, recurrent disease, drug toxicity, or unexplained allograft dysfunction."]
      ]))}
      ${section("Before the procedure",bullets([
        "Confirm the indication and that the result is likely to change care.",
        "Review blood pressure, CBC/platelets, coagulation, kidney imaging, medications, and allergies.",
        "Manage antiplatelet or anticoagulant therapy according to individualized bleeding and thrombosis risk.",
        "Treat uncontrolled hypertension and active infection.",
        "Obtain informed consent and plan post-biopsy observation.",
        "Percutaneous ultrasound-guided native-kidney biopsy is common; alternative approaches may be selected when risk is high."
      ]))}
      ${section("Contraindications and complications",table(["Issue","Why it matters","Response"],[
        ["Uncorrectable bleeding tendency","Raises risk of major hemorrhage","Correct if possible or choose an alternative approach."],
        ["Severe uncontrolled hypertension","Increases bleeding risk","Control pressure before elective biopsy."],
        ["Active infection near site or uncontrolled systemic infection","Procedural infection risk","Treat first unless exceptional urgency."],
        ["Pain and microscopic hematuria","Common minor effects","Observe and reassess if persistent or severe."],
        ["Perinephric hematoma / gross hematuria","May be clinically significant","Monitor vitals, hemoglobin, urine; image or intervene when indicated."],
        ["Arteriovenous fistula","Often asymptomatic, occasionally causes bleeding or hypertension","Doppler assessment and embolization when clinically important."]
      ]))}
      ${callout("Aftercare red flags","New hypotension, tachycardia, severe flank pain, falling hemoglobin, persistent gross hematuria, urinary retention, or inability to void requires urgent reassessment.","danger")}
    `),

    "proteinuria-core":M("Proteinuria: Core Concepts","Chapter 3 · proteinuria","Proteinuria is excess total urinary protein. Albuminuria is urinary albumin specifically. The distinction matters because albumin is the preferred CKD damage marker, while total protein can reveal non-albumin disorders such as light-chain overflow.",["Sign not final diagnosis","Albumin vs total protein","Nephrotic range ≠ syndrome"],()=>`
      ${section("Four definitions",table(["Term","What it means","Clinical role"],[
        ["Total urinary protein","Albumin plus globulins, low-molecular-weight proteins, and other proteins","Quantifies overall loss; useful when non-albumin protein is possible."],
        ["Albuminuria","Abnormal urinary albumin specifically","Preferred CKD screening and risk marker in diabetes, hypertension, and most glomerular disease."],
        ["Nephrotic-range proteinuria","Classically ≥3.5 g total protein/24 h or approximate PCR equivalent","Signals heavy glomerular loss but does not by itself prove nephrotic syndrome."],
        ["Nephrotic syndrome","Heavy proteinuria plus hypoalbuminemia, usually edema and often dyslipidemia","A clinical syndrome requiring etiologic evaluation."]
      ]))}
      ${callout("High-yield distinction","Heavy proteinuria is not synonymous with nephrotic syndrome. The syndrome includes systemic consequences of albumin loss, especially hypoalbuminemia and edema.","warning")}
      ${section("Why persistent protein matters",cards([
        {icon:"Dx",title:"Diagnostic marker",body:"<p>Can reflect glomerular, tubular, overflow, or urinary-tract pathology.</p>"},
        {icon:"CKD",title:"Risk classifier",body:"<p>Persistent albuminuria is part of CKD classification and predicts kidney and cardiovascular risk independently of eGFR.</p>"},
        {icon:"↘",title:"Treatment response",body:"<p>Reduction in albuminuria often accompanies effective kidney-protective therapy.</p>"},
        {icon:"Bx",title:"Guides urgency",body:"<p>The amount and sediment pattern help determine differential diagnosis, referral, and need for biopsy.</p>"}
      ]))}
      ${routeLinks([["proteinuria-categories","Classify the amount"],["proteinuria-mechanisms","Classify the mechanism"],["proteinuria-lab","Use the classifier"]])}
    `),

    "proteinuria-categories":M("Proteinuria Categories & Thresholds","Chapter 3 · proteinuria","Classify albuminuria separately from total protein. Ratios correct for urine concentration but depend on creatinine generation, so they estimate rather than perfectly convert daily excretion.",["A1/A2/A3","Subnephrotic vs nephrotic range","Ratios have body-composition bias"],()=>`
      ${section("KDIGO albuminuria categories",table(["Category","ACR mg/g","ACR mg/mmol","AER mg/24 h","Current term"],[
        ["A1","<30","<3","<30","Normal to mildly increased"],
        ["A2","30-300","3-30","30-300","Moderately increased"],
        ["A3",">300",">30",">300","Severely increased"]
      ]))}
      ${callout("Terminology update","Older terms microalbuminuria and macroalbuminuria remain common in exams, but current terminology is A2 moderately increased and A3 severely increased albuminuria.","purple")}
      ${section("Total protein at the bedside",table(["Approximate amount","Interpretation","Caveat"],[
        ["<150 mg/day","Typical reference point","Method and laboratory range vary."],
        ["150-500 mg/day","Low-grade proteinuria","Can be tubular, early glomerular, post-renal, or transient."],
        ["0.5-3.5 g/day","Subnephrotic proteinuria","Occurs in many glomerular and chronic kidney diseases."],
        ["≥3.5 g/day","Nephrotic-range proteinuria","Interpret with serum albumin, edema, lipids, kidney function, and cause."],
        ["High total protein with little albumin","Consider non-albumin/overflow protein","Dipstick may be weak or negative."]
      ]))}
      ${section("Ratios are estimates",cards([
        {icon:"ACR",title:"Albumin-to-creatinine ratio",body:"<p>Best for CKD detection and albuminuria monitoring. A first-morning sample improves confirmation.</p>"},
        {icon:"PCR",title:"Protein-to-creatinine ratio",body:"<p>Estimates total protein and is useful in established proteinuria or suspected non-albumin protein.</p>"},
        {icon:"Cr",title:"Creatinine denominator",body:"<p>Low muscle mass can make a ratio look higher; high muscle mass can make it look lower. Use timed collection when precision changes a major decision.</p>"}
      ]))}
    `),

    "proteinuria-mechanisms":M("Mechanisms & Causes of Proteinuria","Chapter 3 · proteinuria","Mechanism predicts the protein type, amount, sediment, and next test. Glomerular loss is albumin-predominant; tubular and overflow patterns may be missed by an albumin-focused dipstick.",["Glomerular","Tubular","Overflow","Post-renal","Transient/orthostatic"],()=>`
      ${section("Mechanism-based classification",table(["Mechanism","Pathophysiology","Pattern","Representative causes"],[
        ["Glomerular","Increased permeability of the filtration barrier","Albumin-predominant; subnephrotic or nephrotic","Diabetic kidney disease, primary GN, lupus nephritis, amyloidosis, preeclampsia."],
        ["Tubular","Filtered low-molecular-weight proteins are not adequately reabsorbed","Usually lower-grade; albumin may be a minority","Tubulointerstitial nephritis, acute tubular injury, Fanconi syndrome, toxins, inherited tubulopathies."],
        ["Overflow","Excess production of small proteins exceeds reabsorptive capacity","Non-albumin; dipstick may underestimate","Monoclonal light chains, myoglobin, hemoglobin, marked lysozyme production."],
        ["Post-renal","Protein enters distal to the kidney from inflammation, bleeding, or secretions","Usually modest with cells or infection findings","UTI, stones, tumors, gross hematuria, semen or vaginal contamination."],
        ["Transient/functional","Temporary hemodynamic or physiological increase","Resolves after trigger","Fever, strenuous exercise, acute illness, seizures, severe stress, short-lived HF decompensation."],
        ["Orthostatic","Excretion rises upright but is normal in first-morning recumbent sample","Usually low-grade and isolated","Adolescents or young adults."]
      ]))}
      ${section("Pattern recognition",table(["Finding","Most useful interpretation"],[
        ["Proteinuria + dysmorphic RBCs or RBC casts","Glomerular inflammation until proved otherwise."],
        ["Proteinuria + edema + low serum albumin","Nephrotic syndrome pattern."],
        ["Proteinuria + WBC casts or tubular markers","Tubulointerstitial disease or pyelonephritis, depending on context."],
        ["Weak/negative dipstick + high total protein or unexplained AKI","Consider non-albumin protein, especially monoclonal light chains."],
        ["Proteinuria only after daytime activity","Use first-morning sample to evaluate orthostatic proteinuria."],
        ["Proteinuria during fever, exercise, menstruation, or UTI","Repeat after the transient factor resolves before diagnosing CKD."]
      ]))}
      ${callout("Selectivity is not enough","Older teaching divides selective from nonselective proteinuria. It helps pathophysiology but modern diagnosis relies more on sediment, serology, kidney function, and often histology.","warning")}
    `),

    "proteinuria-testing":M("Detecting & Quantifying Protein","Chapter 3 · proteinuria","Choose the test by the question. Dipstick screens, ACR detects and classifies albumin, PCR estimates total protein, timed collections improve precision in selected cases, and electrophoresis characterizes monoclonal proteins.",["Dipstick screens","ACR preferred for CKD","PCR for total protein","24 h selectively"],()=>`
      ${section("Test comparison",table(["Test","Strengths","Limitations","Best use"],[
        ["Reagent dipstick","Rapid and inexpensive","Semiquantitative; affected by concentration and pH; albumin-sensitive","Initial screening when quantitative testing is unavailable."],
        ["Urine ACR","Sensitive at low albumin levels; corrects for concentration","Affected by creatinine generation and transient albumin excretion","Preferred initial CKD screening and monitoring."],
        ["Urine PCR/UPCR","Estimates albumin plus non-albumin protein","Does not identify protein type; creatinine denominator bias","Established proteinuria or suspected non-albumin protein."],
        ["Timed 24-hour urine","Directly measures excretion over time","Collection error is common and burdensome","When accurate amount is essential or spot ratios are unreliable."],
        ["Urine electrophoresis/immunofixation + serum free light chains","Characterizes monoclonal protein","Requires targeted interpretation; CKD alters free-light-chain ratios","Suspected overflow proteinuria or plasma-cell disorder."]
      ]))}
      ${section("How to collect a 24-hour urine",numbered([
        "At the start time, empty the bladder and discard that first specimen; record the time.",
        "Collect every urine specimen for the next 24 hours in the supplied container.",
        "At exactly 24 hours, void and add this final specimen.",
        "Follow laboratory instructions for refrigeration or preservative.",
        "Review total volume and urine creatinine; an incomplete collection can markedly distort the result."
      ]))}
      ${section("Why results mislead",table(["Factor","Effect","Response"],[
        ["Exercise, fever, acute illness, seizures","Transient increase","Repeat after recovery."],
        ["Menstruation, UTI, semen, vaginal secretions","Contamination or post-renal protein","Repeat a clean sample after the factor resolves."],
        ["Very dilute urine","Dipstick may under-read","Use quantitative ratio and specimen quality review."],
        ["Very concentrated or alkaline urine","Dipstick false-positive tendency","Confirm with ACR/PCR."],
        ["Low muscle mass","ACR/PCR may appear higher","Interpret body composition; use timed collection if high stakes."],
        ["SGLT2 inhibitor","Expected glycosuria","Do not mislabel proximal tubulopathy without context."]
      ]))}
      ${callout("Modern testing rule","Use a first-morning UACR to confirm albuminuria when possible. Add PCR when total or non-albumin protein matters. Do not diagnose CKD from one borderline sample.","success")}
    `),

    "proteinuria-workup":M("Diagnostic Work-up of Proteinuria","Chapter 3 · proteinuria","Verify persistence, quantify the protein, examine the sediment, assess kidney function and systemic features, then order targeted tests. Active sediment changes the urgency.",["Verify → quantify → localize","Target serology","Biopsy when histology matters"],()=>`
      ${section("Seven-step approach",flow([
        {title:"1. Verify",body:"Collection, menstruation, UTI, exercise, fever, and transient illness."},
        {title:"2. Quantify",body:"First-morning UACR; add PCR for total/non-albumin protein."},
        {title:"3. Sediment",body:"RBC morphology, casts, WBCs, tubular cells, crystals."},
        {title:"4. Function",body:"Creatinine/eGFR, electrolytes, bicarbonate, serum albumin."},
        {title:"5. Systemic clues",body:"Diabetes, autoimmune disease, infection, malignancy, drugs, family history."},
        {title:"6. Target tests",body:"HbA1c, complements, ANA/dsDNA, ANCA, anti-GBM, hepatitis/HIV, paraprotein tests as indicated."},
        {title:"7. Image/biopsy",body:"Ultrasound for structure; biopsy when tissue will change management."}
      ]))}
      ${section("History and examination",table(["Domain","Look for"],[
        ["Time course","Previous urinalysis, pregnancy, intercurrent infection, exercise, recent hospitalization."],
        ["Glomerular/systemic","Edema, hypertension, rash, arthritis, sinus/pulmonary symptoms, neuropathy."],
        ["Metabolic/vascular","Diabetes, obesity, hypertension, cardiovascular disease."],
        ["Drug/toxin","NSAIDs, lithium, antibiotics, herbal products, supplements, chemotherapy."],
        ["Paraprotein","Bone pain, anemia, hypercalcemia, weight loss, recurrent infections."],
        ["Family history","Kidney failure, hearing/eye disease, cystic disease, hereditary nephropathy."]
      ]))}
      ${callout("Active sediment changes urgency","Proteinuria with RBC casts, dysmorphic RBCs, rapidly worsening creatinine, severe hypertension, pulmonary symptoms, or systemic vasculitic features requires urgent nephrology assessment.","danger")}
      ${section("When biopsy becomes likely",bullets([
        "Nephrotic syndrome without an obvious established cause.",
        "Significant persistent proteinuria with active urine sediment.",
        "Suspected immune-complex, vasculitic, anti-GBM, or paraprotein-related disease.",
        "Unexplained decline in kidney function where histology will change therapy.",
        "Atypical features in presumed diabetic kidney disease, such as rapid onset, active sediment, or rapid loss of function."
      ]))}
    `),

    "proteinuria-management":M("Management, Referral & Kidney Protection","Chapter 3 · proteinuria","Treat the cause, lower intraglomerular and systemic risk, monitor response and safety, manage nephrotic complications, and refer when severity or diagnostic uncertainty exceeds primary care.",["Cause-specific + supportive","RAAS/SGLT2 when appropriate","Referral by risk and red flags"],()=>`
      ${section("Supportive management framework",cards([
        {icon:"BP",title:"Blood pressure and RAAS",body:"<p>ACE inhibitor or ARB therapy can reduce albuminuria and protect kidney function in appropriate patients. Monitor creatinine and potassium after initiation or dose change.</p>"},
        {icon:"SGLT2",title:"SGLT2 inhibition",body:"<p>Provides kidney and cardiovascular protection in many albuminuric CKD settings, with or without diabetes, when eligible and tolerated.</p>"},
        {icon:"Na",title:"Sodium and volume",body:"<p>Dietary sodium reduction and diuretics help edema and improve antiproteinuric response. Avoid overdiuresis.</p>"},
        {icon:"CV",title:"Cardiovascular risk",body:"<p>Address diabetes, lipids, smoking, weight, vaccination, and overall vascular risk.</p>"}
      ]))}
      ${section("Nephrotic syndrome complications",table(["Problem","Why","Management principle"],[
        ["Edema","Low oncotic pressure plus renal sodium retention","Sodium restriction and carefully titrated diuretics; severe cases need specialist care."],
        ["Thrombosis","Urinary loss and altered coagulation balance","Assess individual thrombotic and bleeding risk; prophylactic anticoagulation is not automatic."],
        ["Infection","Loss of immune proteins and immunosuppression","Vaccination, prompt infection assessment, and treatment-specific prevention."],
        ["Dyslipidemia","Altered hepatic lipoprotein production","Manage cardiovascular risk according to overall indication."],
        ["Malnutrition / drug binding changes","Protein loss and hypoalbuminemia","Monitor nutrition and medicines with high protein binding."]
      ]))}
      ${section("Refer or escalate",table(["Pattern","Response"],[
        ["Rapidly falling eGFR, oliguria, severe electrolyte or acid-base disturbance","Urgent or emergency evaluation."],
        ["RBC casts, vasculitic/pulmonary features, suspected anti-GBM","Immediate nephrology involvement."],
        ["Nephrotic syndrome or very heavy new proteinuria","Prompt nephrology assessment and cause-specific work-up."],
        ["Persistent A3 albuminuria, significant proteinuria, or uncertain mechanism","Specialist evaluation according to local pathways."],
        ["Suspected monoclonal protein","Urgent renal/hematology evaluation because kidney injury can progress despite small plasma-cell burden."]
      ]))}
      ${callout("Therapeutic pearl","A modest early creatinine rise after starting an ACE inhibitor, ARB, or SGLT2 inhibitor may reflect hemodynamic change rather than structural injury, but magnitude, potassium, volume status, and clinical context must be reviewed.","warning")}
    `),

    "proteinuria-special":M("Special Situations & Proteinuria Traps","Chapter 3 · proteinuria","Age, pregnancy, diabetes, body composition, paraproteins, and transient factors change interpretation. Avoid both overdiagnosis from one sample and underdiagnosis from an albumin-only test.",["Pregnancy thresholds differ","Orthostatic pattern","Light chains can evade dipstick"],()=>`
      ${section("Special situations",table(["Situation","Key point"],[
        ["Pregnancy","Proteinuria can signal preeclampsia or renal disease; use obstetric thresholds and urgent assessment when hypertension or symptoms coexist."],
        ["Diabetes","Albuminuria is common but active sediment, abrupt nephrotic syndrome, rapid decline, or systemic features suggest another/additional disease."],
        ["Children/adolescents","Orthostatic proteinuria is more common; adult CKD and biopsy pathways do not automatically apply."],
        ["Older/frail adults","Low creatinine generation can hide reduced GFR and inflate ACR/PCR ratios."],
        ["Plasma-cell disorder","Dipstick may be weak despite substantial light-chain protein; use serum free light chains and immunofixation when suspected."],
        ["Hematuria/UTI","Blood and inflammation can add post-renal protein; repeat after treatment or resolution."]
      ]))}
      ${section("Exam traps",bullets([
        "A negative dipstick does not exclude non-albumin proteinuria.",
        "A3 albuminuria is not the same as nephrotic-range total proteinuria.",
        "Nephrotic-range proteinuria alone does not prove full nephrotic syndrome.",
        "One borderline ACR does not establish CKD.",
        "Orthostatic proteinuria requires a normal first-morning sample.",
        "Proteinuria with RBC casts is not explained by uncomplicated diabetes or hypertension without further assessment.",
        "ACE inhibitors and ARBs should not routinely be combined for antiproteinuric effect because harm outweighs benefit."
      ]))}
      ${callout("One-line rule","Confirm persistence, quantify albumin and total protein, read the sediment, assess kidney function and systemic clues, then treat the cause and risk rather than treating the number alone.","success")}
    `),

    "hematuria-confirmation":M("Confirm True Hematuria","Chapter 4 · hematuria","Red urine is not always blood, and a heme-positive dipstick does not prove intact red cells. Adult microhematuria is defined microscopically, not by color or dipstick alone.",["≥3 RBC/HPF in adults","Dipstick detects heme","Fresh microscopy confirms"],()=>`
      ${section("Definitions",table(["Term","Definition","Implication"],[
        ["Visible/gross hematuria","Urine appears pink, red, smoky, cola-colored, or frankly bloody","Prompt assessment; consider clot retention, malignancy, and major renal disease."],
        ["Microscopic hematuria","At least 3 RBC/HPF on microscopy of one properly collected adult specimen","Evaluate according to persistence, renal features, and malignancy risk."],
        ["Persistent hematuria","Remains on repeat testing after transient causes are removed","Can indicate glomerular, other renal, or urologic disease."],
        ["Transient hematuria","Resolves after exercise, fever, infection, trauma, menstruation, or another trigger","Repeat when unexpected or risk is significant."]
      ]))}
      ${section("Dipstick positive but no RBCs",table(["Possibility","Clues","Next step"],[
        ["Hemoglobinuria","Anemia, jaundice, high LDH, low haptoglobin; plasma may be pink","Evaluate intravascular hemolysis."],
        ["Myoglobinuria","Muscle pain/weakness, dark urine, very high CK; plasma usually clear","Assess rhabdomyolysis and AKI."],
        ["Lysed RBCs","Very dilute or alkaline urine can destroy cells before microscopy","Repeat a fresh properly collected sample promptly."],
        ["False-positive dipstick","Oxidizing contaminants or antiseptics","Repeat with a clean specimen and laboratory confirmation."],
        ["Pigment/pseudohematuria","Beetroot, dyes, rifampicin, phenazopyridine, porphyria, contamination","History plus microscopy clarifies."]
      ]))}
      ${callout("First diagnostic rule","Do not call a heme-positive dipstick hematuria until microscopy confirms RBCs. Conversely, do not dismiss a strongly positive dipstick with no RBCs: hemolysis and rhabdomyolysis can be urgent.","danger")}
    `),

    "hematuria-localization":M("Localizing the Source of Hematuria","Chapter 4 · hematuria","Timing during urination is a clue, not a definitive localizer. RBC morphology, casts, protein, color, symptoms, and risk factors better separate glomerular from non-glomerular bleeding.",["Glomerular vs urologic","Clots favor non-glomerular","Parallel referrals may be needed"],()=>`
      ${section("Timing during micturition",table(["Pattern","Traditional localization","Modern interpretation"],[
        ["Initial hematuria","Urethra","Suggests anterior urethral source, but timing alone is imperfect."],
        ["Terminal hematuria","Bladder neck, trigone, or prostate","May suggest lower-tract bleeding near the outlet."],
        ["Total hematuria","Bladder or upper tract","Can arise anywhere from kidney to bladder; investigate the full tract when indicated."],
        ["Blood clots","Usually non-glomerular","Clots strongly favor urologic bleeding; worm-like clots may have an upper-tract origin."]
      ]))}
      ${section("Glomerular versus non-glomerular",table(["Feature","Glomerular source","Non-glomerular/urologic source"],[
        ["Appearance","Smoky, tea, or cola; may be microscopic","Pink or bright red; may contain clots"],
        ["RBC morphology","Dysmorphic RBCs/acanthocytes","Predominantly isomorphic RBCs"],
        ["Casts","RBC casts strongly support glomerular bleeding","RBC casts absent"],
        ["Protein","Albuminuria/proteinuria may be substantial","Usually absent or modest unless bleeding is heavy or renal disease coexists"],
        ["Clinical context","Edema, hypertension, reduced eGFR, inflammatory or pulmonary features","Dysuria, colic, voiding symptoms, smoking, occupational exposure"],
        ["Referral","Nephrology; risk-based urology may still be needed","Urology or cause-specific pathway"]
      ]))}
      ${callout("Important overlap","Suspected medical renal disease does not automatically cancel urologic evaluation. Persistent hematuria can require nephrology and concurrent risk-based urologic assessment.","warning")}
      ${routeLinks([["urine-interpreter","Practice localization"],["hematuria-risk","Apply the risk pathway"]])}
    `),

    "hematuria-causes":M("Causes & Symptom Patterns","Chapter 4 · hematuria","Use an anatomic and mechanistic differential, then let pain, infection features, systemic clues, sediment, and cancer risk reorder the list. Anticoagulation can reveal an underlying lesion and does not close the case.",["Glomerular","Renal non-glomerular","Ureter/bladder/prostate","Pseudohematuria"],()=>`
      ${section("Clinically useful differential",table(["Group","Representative causes","Typical clues"],[
        ["Systemic bleeding tendency","Thrombocytopenia, coagulopathy, severe hypertension, anticoagulants/antiplatelets","Bleeding elsewhere may coexist, but urinary evaluation still follows risk."],
        ["Glomerular disease","IgA nephropathy, post-infectious GN, lupus, ANCA, anti-GBM, thin basement membrane, Alport","Dysmorphic RBCs, RBC casts, albuminuria, hypertension, impaired function."],
        ["Renal non-glomerular","Stones, pyelonephritis, infarction, papillary necrosis, PKD, trauma, renal tumor","Flank pain, fever, mass, vascular risk, sickle/analgesic history, imaging lesion."],
        ["Ureter","Stone, urothelial tumor, trauma, obstruction","Colic, hydronephrosis, filling defect, cancer risk."],
        ["Bladder","Cystitis, stone, tumor, radiation injury, foreign body","Dysuria/frequency, suprapubic pain, painless visible hematuria, smoking."],
        ["Prostate/urethra","BPH, prostatitis, cancer, urethritis, stricture, instrumentation","Voiding symptoms, pelvic pain, discharge, initial/terminal bleeding."],
        ["Contamination/pseudohematuria","Menstrual/vaginal blood, rectal bleeding, foods, medicines, porphyria","Careful collection and microscopy clarify."]
      ]))}
      ${section("Symptom-pattern shortcuts",table(["Pattern","Think first — but do not stop there"],[
        ["Painful hematuria with colic","Urolithiasis or obstruction; infection and vascular causes remain possible."],
        ["Dysuria/frequency","Cystitis or urethritis; culture when indicated and repeat urinalysis after treatment."],
        ["Fever plus flank tenderness","Pyelonephritis; assess obstruction, sepsis, and abscess risk."],
        ["Painless visible hematuria","Urothelial or renal malignancy until adequately evaluated, although benign causes are common."],
        ["Hematuria simultaneous with URI","IgA nephropathy is classic."],
        ["Hematuria 1-3 weeks after infection","Post-infectious glomerulonephritis is classic."],
        ["Hematuria plus hemoptysis","Pulmonary-renal syndrome such as anti-GBM or ANCA vasculitis; urgent."],
        ["Hematuria plus purpura/abdominal pain","IgA vasculitis or another systemic inflammatory disease."]
      ]))}
      ${callout("Anticoagulants do not explain the case away","Patients taking anticoagulants or antiplatelets should receive the same risk-based evaluation because medication-associated bleeding can unmask cancer, stones, or renal disease.","danger")}
    `),

    "hematuria-assessment":M("Assessment Sequence for Hematuria","Chapter 4 · hematuria","Confirm the sample, identify emergencies, search for renal features, remove transient causes, then use risk-based urologic evaluation. History and examination should run in parallel with urine and kidney tests.",["History + exam","Urine microscopy + ACR/PCR","Risk and structure"],()=>`
      ${section("History checklist",bullets([
        "Visible versus incidental microscopic; onset, duration, recurrence, and relation to exercise, infection, menstruation, trauma, or instrumentation.",
        "Pain, dysuria, frequency, urgency, fever, chills, retention, and reduced urine output.",
        "Clots, prior stones, recurrent UTI, renal disease, urologic procedures, pelvic radiation, and urinary devices.",
        "Smoking pack-years, aromatic-amine exposure, prior cyclophosphamide/ifosfamide, family history of urothelial cancer or Lynch syndrome.",
        "Rash, arthritis, sinus/pulmonary symptoms, edema, recent infection, hearing/eye disease, and family kidney failure.",
        "Anticoagulants, antiplatelets, NSAIDs, antibiotics, and drugs that discolor urine."
      ]))}
      ${section("Core tests",table(["Test","What it answers"],[
        ["Repeat urinalysis with microscopy","Confirms RBCs, degree, morphology, WBCs, epithelial cells, crystals, and casts."],
        ["UACR/PCR","Shows whether renal parenchymal disease accompanies bleeding."],
        ["Creatinine/eGFR and electrolytes","Assesses kidney function, urgency, and safety of imaging/therapy."],
        ["CBC","Anemia, infection, platelet count."],
        ["Urine culture","When infection is suspected; repeat urine after treatment to document resolution."],
        ["Targeted serology","When glomerular or systemic inflammatory disease is suggested."],
        ["Ultrasound / axial imaging / cystoscopy","Selected according to symptoms, risk, and the structure being assessed."]
      ]))}
      ${section("Practical sequence",flow([
        {title:"1. Confirm RBCs",body:"Fresh microscopy and collection quality."},
        {title:"2. Triage",body:"Instability, retention, obstruction, AKI, sepsis, trauma, pulmonary-renal syndrome."},
        {title:"3. Remove transient causes",body:"UTI, menstruation, exercise, trauma; repeat after resolution."},
        {title:"4. Identify renal features",body:"Protein, dysmorphic RBCs, casts, hypertension, reduced eGFR."},
        {title:"5. Risk-stratify urologically",body:"Age, sex, smoking, degree/persistence, visible hematuria, exposures."},
        {title:"6. Investigate in parallel",body:"Nephrology and urology pathways can coexist."}
      ]))}
      ${callout("When nephrology becomes important","Proteinuria, dysmorphic RBCs, cellular casts, reduced eGFR, severe hypertension, edema, or systemic inflammatory/pulmonary features should trigger renal evaluation.","warning")}
    `),

    "hematuria-risk":M("Adult Microhematuria: Risk-Based Pathway","Chapter 4 · hematuria","After excluding transient causes and identifying renal features, adult microhematuria evaluation is stratified by malignancy risk. The pathway avoids immediate CT and cystoscopy for everyone while protecting high-risk patients.",["Low: repeat urine","Intermediate: cystoscopy + ultrasound","High: cystoscopy + axial imaging"],()=>`
      ${section("Risk factors that raise concern",cards([
        {icon:"Age",title:"Demographics",body:"<p>Age and sex contribute to malignancy risk. Pediatric and adolescent pathways are different.</p>"},
        {icon:"Smoke",title:"Tobacco exposure",body:"<p>Pack-years are a major urothelial cancer risk factor.</p>"},
        {icon:"RBC",title:"Degree and persistence",body:"<p>Higher RBC counts, persistent hematuria, and any history of visible hematuria increase concern.</p>"},
        {icon:"Exp",title:"Additional exposures",body:"<p>Occupational aromatic amines, pelvic radiation, cyclophosphamide, indwelling foreign bodies, and relevant family syndromes matter.</p>"}
      ]))}
      ${section("Simplified pathway from the chapter",table(["Risk group","Typical next step","What the tests contribute"],[
        ["Low/negligible risk","Repeat urinalysis within about 6 months rather than immediate invasive evaluation","Resolution may avoid unnecessary testing; persistence triggers reclassification."],
        ["Intermediate risk","Cystoscopy plus renal/bladder ultrasound","Cystoscopy sees bladder mucosa; ultrasound surveys kidneys, hydronephrosis, and bladder."],
        ["High risk","Cystoscopy plus axial upper-tract imaging, usually CT urography when suitable","Evaluates bladder and upper-tract urothelium/renal anatomy."],
        ["Renal features at any risk","Nephrology assessment in parallel","Urologic risk evaluation may still be required."]
      ]))}
      ${section("What each test sees",table(["Test","Strength","Blind spot"],[
        ["Cystoscopy","Direct bladder and urethral mucosal inspection","Does not assess renal parenchyma or all upper-tract lesions."],
        ["Ultrasound","No radiation; structure, hydronephrosis, bladder residual","Less sensitive for small urothelial tumors and some stones."],
        ["CT urography","Detailed upper tract, renal masses, stones, urothelium","Radiation and contrast; suitability must be assessed."],
        ["Urine cytology","May help in selected high-risk or persistent cases","Not a replacement for cystoscopy and imaging; limited sensitivity for low-grade tumors."]
      ]))}
      ${callout("Do not over-apply adult risk tables","Pregnancy, children, known hereditary disease, active glomerular features, trauma, and acute visible hematuria require cause-specific pathways rather than a simple adult microhematuria score.","warning")}
    `),

    "hematuria-emergencies":M("Visible Hematuria & Acute Emergencies","Chapter 4 · hematuria","Gross hematuria can obstruct urine flow, cause major blood loss, reveal infection above obstruction, or accompany rapidly progressive renal disease. Stabilization comes before definitive localization.",["Clot retention","Infected obstruction","Pulmonary-renal syndrome","Major trauma"],()=>`
      ${section("Immediate red flags",cards([
        {icon:"BP",title:"Hemodynamic instability",body:"<p>Hypotension, tachycardia, syncope, ongoing heavy bleeding, or falling hemoglobin.</p>"},
        {icon:"Clot",title:"Clot retention",body:"<p>Painful distended bladder, inability to void, falling urine output, or catheter obstruction.</p>"},
        {icon:"Sepsis",title:"Infected obstruction",body:"<p>Fever, flank pain, sepsis, hydronephrosis, or anuria requires urgent drainage plus antibiotics.</p>"},
        {icon:"Lung",title:"Pulmonary-renal syndrome",body:"<p>Hematuria with hemoptysis, hypoxia, rapidly rising creatinine, or active sediment is a nephrologic emergency.</p>"}
      ]))}
      ${section("Stabilization of clot-forming gross hematuria",numbered([
        "Assess airway, breathing, circulation, vital signs, urine output, and hemoglobin trend.",
        "Review anticoagulation and reverse only when clinically justified, balancing bleeding severity against thrombosis risk.",
        "Relieve retention and evacuate clots; continuous bladder irrigation is a urologic tool, not definitive diagnosis.",
        "Identify and treat infection or obstruction promptly.",
        "Arrange definitive evaluation of the bleeding source after stabilization."
      ]))}
      ${section("Special high-risk patterns",table(["Pattern","Concern","Immediate direction"],[
        ["Painless visible hematuria with clots","Urothelial or renal malignancy","Prompt urologic evaluation after stabilization."],
        ["Flank trauma + hematuria","Renal/urinary tract injury","Trauma protocol and appropriate contrast imaging."],
        ["Sickle trait/disease or analgesic exposure","Papillary necrosis, but also malignancy and stones","Cause-specific imaging and specialist assessment."],
        ["Anuria with bilateral pain or solitary kidney","Complete obstruction","Urgent imaging and decompression."],
        ["Severe hypertension + edema + RBC casts","Acute glomerulonephritis","Urgent nephrology and immune work-up."]
      ]))}
      ${callout("One-line diagnostic rule","Confirm RBCs, remove transient causes, identify renal features, assess urgency, then apply a cause-specific and malignancy-risk-based evaluation.","success")}
    `),

    "nephron-lab":M("Nephron Transport Lab","Interactive physiology","Select a nephron segment to see its major transport tasks, hormonal control, diuretic target, and clinical failure pattern.",["6 segments","Transport + drugs","Keyboard accessible"],()=>`
      ${section("Explore the nephron",`<div class="tool-panel" id="nephron-tool"><div class="segment-selector" role="tablist" aria-label="Nephron segment"><button type="button" data-segment="glomerulus">Glomerulus</button><button type="button" data-segment="proximal">Proximal tubule</button><button type="button" data-segment="descending">Descending limb</button><button type="button" data-segment="tal">Thick ascending limb</button><button type="button" data-segment="dct">Distal tubule</button><button type="button" data-segment="collecting">Collecting duct</button></div><div class="tool-output" id="nephron-output"></div></div>`)}
      ${callout("Use the lab actively","Before selecting each segment, predict: water permeability, dominant transporter, hormone influence, and the urine/serum abnormality expected when that segment fails.","purple")}
    `),

    "filtration-lab":M("Filtration Forces Lab","Interactive physiology","Change glomerular pressure, Bowman-space pressure, plasma oncotic pressure, and Kf to see how net filtration pressure and relative GFR move.",["NFP = PGC − PBS − πGC","Relative GFR","Concept model"],()=>`
      ${section("Manipulate Starling forces",`<div class="tool-panel" id="filtration-tool"><div class="tool-controls"><label class="field"><span>Glomerular capillary pressure, PGC (mmHg)</span><input id="f-pgc" type="number" min="20" max="90" step="1" value="55"></label><label class="field"><span>Bowman-space pressure, PBS (mmHg)</span><input id="f-pbs" type="number" min="0" max="40" step="1" value="15"></label><label class="field"><span>Plasma oncotic pressure, πGC (mmHg)</span><input id="f-onc" type="number" min="5" max="50" step="1" value="30"></label><label class="field"><span>Filtration coefficient, Kf (relative 0.2-2.0)</span><input id="f-kf" type="number" min="0.2" max="2" step="0.1" value="1"></label></div><div class="tool-output" id="filtration-output"></div></div>`)}
      ${callout("Educational model","Real glomerular pressures and Kf vary along capillaries and between disease states. This tool demonstrates direction and integration, not patient-specific GFR prediction.","warning")}
    `),

    "crcl-lab":M("Creatinine Clearance Lab","Interactive investigation","Calculate the traditional Cockcroft-Gault estimate and immediately see why body composition, steady state, and drug-label instructions can change interpretation.",["Cockcroft-Gault","mg/dL units","Not eGFR"],()=>`
      ${section("Traditional estimate",`<div class="tool-panel" id="crcl-tool"><div class="tool-controls"><label class="field"><span>Age (years)</span><input id="cg-age" type="number" min="18" max="110" value="60"></label><label class="field"><span>Weight (kg)</span><input id="cg-weight" type="number" min="25" max="250" step="0.1" value="70"></label><label class="field"><span>Serum creatinine (mg/dL)</span><input id="cg-creatinine" type="number" min="0.2" max="20" step="0.1" value="1.2"></label><label class="field"><span>Sex factor in original equation</span><select id="cg-sex"><option value="1">Male (×1.00)</option><option value="0.85">Female (×0.85)</option></select></label></div><div class="tool-output" id="crcl-output"></div></div>`)}
      ${callout("Do not use blindly","Cockcroft-Gault estimates creatinine clearance, not standardized eGFR. It is unreliable in changing kidney function and highly sensitive to weight choice and muscle mass. Follow the specific medicine label and local pharmacy guidance.","danger")}
    `),

    "urine-interpreter":M("Urine Pattern Interpreter","Interactive diagnostic reasoning","Combine dipstick, microscopy, protein, casts, symptoms, and kidney function. The output explains the dominant pattern and urgent alternatives rather than naming a single diagnosis from one result.",["Blood vs pigment","Glomerular vs urologic","Infection vs tubular injury"],()=>`
      ${section("Build a urine pattern",`<div class="tool-panel" id="urine-tool"><div class="tool-controls"><label class="field"><span>Dipstick blood</span><select id="u-blood"><option value="negative">Negative</option><option value="positive">Positive</option></select></label><label class="field"><span>RBCs on microscopy</span><select id="u-rbc"><option value="none">None / 0-2 HPF</option><option value="few">3-10 HPF</option><option value="many">>10 HPF</option></select></label><label class="field"><span>RBC morphology / casts</span><select id="u-morph"><option value="none">No special feature</option><option value="dysmorphic">Dysmorphic RBCs / acanthocytes</option><option value="rbccast">RBC casts</option><option value="clots">Visible clots</option></select></label><label class="field"><span>Protein / albumin</span><select id="u-protein"><option value="none">Negative or trace</option><option value="moderate">A2/A3 or moderate protein</option><option value="heavy">Nephrotic-range / marked</option></select></label><label class="field"><span>WBC / infection markers</span><select id="u-wbc"><option value="none">None</option><option value="lower">WBCs, leukocyte esterase or nitrite</option><option value="wbccast">WBC casts</option></select></label><label class="field"><span>Clinical clue</span><select id="u-clue"><option value="none">No dominant clue</option><option value="dysuria">Dysuria / frequency</option><option value="flank">Fever / flank pain</option><option value="colic">Colicky flank pain</option><option value="muscle">Muscle pain / very high CK</option><option value="hemolysis">Anemia / hemolysis features</option><option value="pulmonary">Hemoptysis / pulmonary symptoms</option></select></label></div><div class="tool-output" id="urine-output"></div></div>`)}
    `),

    "proteinuria-lab":M("Proteinuria Classifier","Interactive diagnostic reasoning","Enter ACR, PCR, serum albumin, edema, dipstick, and sediment to classify albuminuria, total protein range, nephrotic syndrome pattern, and possible non-albumin protein.",["A1/A2/A3","Subnephrotic/nephrotic","Mechanism clues"],()=>`
      ${section("Classify the pattern",`<div class="tool-panel" id="protein-tool"><div class="tool-controls"><label class="field"><span>UACR (mg/g)</span><input id="p-acr" type="number" min="0" max="10000" step="1" value="120"></label><label class="field"><span>UPCR/PCR (g/g approximately)</span><input id="p-pcr" type="number" min="0" max="20" step="0.1" value="0.8"></label><label class="field"><span>Serum albumin (g/dL)</span><input id="p-albumin" type="number" min="1" max="6" step="0.1" value="4"></label><label class="field"><span>Edema</span><select id="p-edema"><option value="no">No</option><option value="yes">Yes</option></select></label><label class="field"><span>Dipstick protein</span><select id="p-dip"><option value="negative">Negative/trace</option><option value="positive">Clearly positive</option></select></label><label class="field"><span>Sediment clue</span><select id="p-sediment"><option value="bland">Bland</option><option value="rbc">Dysmorphic RBCs / RBC casts</option><option value="wbc">WBC casts / tubular cells</option><option value="blood">Heavy visible blood / infection</option></select></label></div><div class="tool-output" id="protein-output"></div></div>`)}
      ${callout("Ratios are estimates","PCR in g/g is often numerically similar to grams/day in average creatinine excretion, but this is not exact. Body composition and collection quality matter.","warning")}
    `),

    "clinical-cases":M("Progressive Clinical Cases","Interactive revision","Work through renal physiology, investigation, proteinuria, and hematuria cases. Reveal diagnosis, reasoning, next-step framework, and exam pearl in stages.",["16 cases","Progressive reveals","Mixed topics"],()=>`
      ${section("Case navigator",`<div class="case-shell"><div class="case-list" id="case-list" aria-label="Clinical case list"></div><article class="case-card speech-unit" id="case-card"></article></div>`)}
    `),

    flashcards:M("Flashcards","Interactive revision","Flip 72 cards, filter by topic, shuffle, and mark cards as known or needing review. Progress is stored only in this browser.",["72 cards","5 categories","Local review status"],()=>`
      ${section("Active recall deck",`<div id="flashcard-app"><div class="flash-toolbar"><div><strong id="flash-count">Card 1</strong><div class="muted small" id="flash-stats"></div></div><div class="choice-row"><label class="field compact"><span>Category</span><select id="flash-category"></select></label><button class="secondary-button" id="flash-shuffle" type="button">Shuffle</button><button class="secondary-button" id="flash-reset" type="button">Reset ratings</button></div></div><div class="flash-stage" id="flash-stage"></div></div>`)}
    `),

    quiz:M("Scored Renal Quiz","Interactive revision","Complete 40 single-best-answer questions. Every response includes an explanation, and progress remains available after closing the browser.",["40 questions","Immediate explanations","Saved progress"],()=>`
      ${section("Mixed-question assessment",`<div id="quiz-app"><div class="quiz-toolbar"><div><strong id="quiz-progress">Question 1</strong><div class="progress-track quiz-track" aria-hidden="true"><span id="quiz-meter"></span></div></div><button class="secondary-button" id="quiz-restart" type="button">Restart quiz</button></div><div id="quiz-stage"></div></div>`)}
    `),

    sources:M("Sources, Scope & Original PDFs","Reference library","Open any of the four original chapters inside the site or in a new tab. The interactive content reorganizes the supplied PDFs without replacing their full tables, references, or clinical cautions.",["4 embedded PDFs","Chapter references","Educational scope"],()=>`
      ${section("Original chapter viewer",`<div class="tool-panel" id="source-tool"><div class="tool-controls"><label class="field"><span>Select PDF</span><select id="pdf-select"><option value="01-renal-principles.pdf">01 · Renal Principles</option><option value="02-renal-investigations.pdf">02 · Renal Investigations</option><option value="03-proteinuria.pdf">03 · Proteinuria</option><option value="04-hematuria.pdf">04 · Hematuria</option></select></label><div class="source-open"><a class="primary-button" id="pdf-open" href="01-renal-principles.pdf" target="_blank" rel="noopener">Open selected PDF in a new tab</a></div></div><object class="pdf-frame" id="pdf-frame" data="01-renal-principles.pdf" type="application/pdf"><p>Your browser cannot embed the PDF. Use the open button above.</p></object></div>`)}
      ${section("Chapter sources",`<div class="source-grid">
        <article class="source-card"><h3>01 · Renal Principles</h3><p>Anatomy, renal blood flow, nephron function, filtration, tubular handling, hormonal and acid-base control.</p><a href="01-renal-principles.pdf" target="_blank" rel="noopener">Open PDF</a></article>
        <article class="source-card"><h3>02 · Renal Investigations</h3><p>Blood and filtration markers, urinalysis, microscopy, culture, imaging, radionuclide tests, and biopsy.</p><a href="02-renal-investigations.pdf" target="_blank" rel="noopener">Open PDF</a></article>
        <article class="source-card"><h3>03 · Proteinuria</h3><p>Albumin versus total protein, categories, mechanisms, testing, work-up, management, and referral.</p><a href="03-proteinuria.pdf" target="_blank" rel="noopener">Open PDF</a></article>
        <article class="source-card"><h3>04 · Hematuria</h3><p>Confirmation, localization, differential diagnosis, adult risk stratification, and emergencies.</p><a href="04-hematuria.pdf" target="_blank" rel="noopener">Open PDF</a></article>
      </div>`)}
      ${section("Key external references named in the chapters",bullets([
        '<a href="https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf" target="_blank" rel="noopener">KDIGO 2024 CKD Guideline</a>',
        '<a href="https://kdigo.org/guidelines/gd/" target="_blank" rel="noopener">KDIGO Glomerular Diseases Guideline</a>',
        '<a href="https://www.niddk.nih.gov/health-information/kidney-disease/kidneys-how-they-work" target="_blank" rel="noopener">NIDDK: Your Kidneys & How They Work</a>',
        '<a href="https://www.auanet.org/guidelines-and-quality/guidelines/microhematuria" target="_blank" rel="noopener">AUA/SUFU Microhematuria Guideline (amended 2025)</a>',
        '<a href="https://acsearch.acr.org/docs/69490/narrative" target="_blank" rel="noopener">ACR Appropriateness Criteria: Hematuria</a>'
      ]))}
      ${callout("Scope","The site is designed for education and revision. Numerical thresholds and pathways should be checked against current local laboratory units, medicine labels, imaging protocols, and specialist guidance before clinical use.","danger")}
    `)
  };

  const cases = [
    {title:"Creatinine rises after dehydration",tag:"Investigations",stem:"A 72-year-old with vomiting and poor intake has creatinine 2.0 mg/dL from a baseline of 0.9 mg/dL. Blood pressure is low, urine output is reduced, and urinalysis is bland.",clues:["Acute change from baseline","Volume loss","Bland sediment","Oliguria"],question:"What is the dominant process and the immediate framework?",diagnosis:"Hemodynamic/pre-renal AKI is likely, while obstruction and intrinsic injury still require exclusion.",reasoning:"The abrupt creatinine rise, hypotension, poor intake, oliguria, and bland sediment support reduced renal perfusion. A single eGFR is unreliable because creatinine is changing.",action:"Stabilize circulation, review nephrotoxins, measure urine output and electrolytes, repeat creatinine, and use ultrasound if obstruction is possible. Escalate for hyperkalemia, pulmonary edema, acidosis, or persistent oliguria.",pearl:"In AKI, use trajectory and urine output; do not interpret automated eGFR as a precise steady-state measurement."},
    {title:"Normal creatinine in severe frailty",tag:"eGFR",stem:"An 84-year-old cachectic patient has serum creatinine 0.8 mg/dL, but medication toxicity is suspected after a renally cleared drug.",clues:["Very low muscle mass","Apparently normal creatinine","Drug toxicity","High-stakes dosing"],question:"Why can the creatinine be misleading?",diagnosis:"Creatinine generation is low, so the serum value may conceal reduced filtration.",reasoning:"Creatinine-based estimates assume average creatinine production. Frailty and low muscle mass reduce production, making kidney function look better than it is.",action:"Review eGFR and drug label, consider cystatin C or combined eGFRcr-cys, and involve pharmacy/nephrology if dosing is near a critical cutoff.",pearl:"A normal creatinine is not a normal GFR when muscle mass is abnormal."},
    {title:"Dipstick blood with no RBCs",tag:"Hematuria",stem:"A patient after a prolonged seizure has dark urine. Dipstick is strongly positive for blood, microscopy shows no RBCs, and creatine kinase is markedly elevated.",clues:["Seizure","Muscle injury","Heme-positive dipstick","No RBCs"],question:"What is the urine pigment and why is this urgent?",diagnosis:"Myoglobinuria from rhabdomyolysis.",reasoning:"Dipstick detects heme pigment, including myoglobin. Absence of RBCs plus muscle injury and high CK points away from true hematuria.",action:"Assess potassium, creatinine, calcium, acid-base status, urine output, and volume status; treat rhabdomyolysis promptly according to severity and contraindications.",pearl:"Heme-positive urine without RBCs is not normal and may represent a renal emergency."},
    {title:"Cola urine during an upper respiratory infection",tag:"Hematuria",stem:"A 24-year-old develops cola-colored urine while still symptomatic with an upper respiratory infection. Blood pressure is elevated; microscopy shows dysmorphic RBCs and RBC casts; UACR is high.",clues:["Synpharyngitic hematuria","Dysmorphic RBCs","RBC casts","Albuminuria"],question:"Where is the bleeding and what is a classic diagnosis?",diagnosis:"Glomerular hematuria; IgA nephropathy is a classic possibility.",reasoning:"RBC casts and dysmorphic RBCs localize bleeding to the glomerulus. Timing simultaneous with infection supports IgA nephropathy, though other GN causes require evaluation.",action:"Urgent renal assessment with kidney function, protein quantification, complements and targeted serology; biopsy depending on severity and trajectory.",pearl:"RBC casts are strongly glomerular. Do not treat this as cystitis."},
    {title:"Painless visible hematuria in a smoker",tag:"Hematuria",stem:"A 67-year-old man with a 40 pack-year smoking history develops painless bright-red urine with clots. Creatinine is normal.",clues:["Older adult","Heavy smoking","Visible painless blood","Clots"],question:"What pathway is required?",diagnosis:"High-risk urologic hematuria until adequately evaluated.",reasoning:"Clots favor a non-glomerular source. Normal creatinine does not exclude bladder or upper-tract malignancy.",action:"Stabilize and relieve retention if present, then arrange prompt cystoscopy and appropriate upper-tract imaging, usually CT urography when suitable.",pearl:"Painless visible hematuria plus smoking is cancer until investigated, not until proven by creatinine."},
    {title:"Heavy protein with edema",tag:"Proteinuria",stem:"A patient has generalized edema, UPCR 6.2 g/g, serum albumin 2.1 g/dL, and hyperlipidemia. Urine sediment is bland.",clues:["Nephrotic-range protein","Hypoalbuminemia","Edema","Bland sediment"],question:"What syndrome is present?",diagnosis:"Nephrotic syndrome.",reasoning:"Heavy protein loss plus low serum albumin and edema establishes the syndrome. The underlying glomerular cause still needs evaluation.",action:"Assess kidney function, secondary causes and thrombosis/infection risk; manage sodium and edema, kidney protection, and obtain prompt nephrology assessment with biopsy consideration.",pearl:"Nephrotic-range proteinuria alone is not enough; here the systemic consequences make it nephrotic syndrome."},
    {title:"Negative dipstick but high PCR",tag:"Proteinuria",stem:"A patient with anemia, bone pain, and AKI has a trace protein dipstick but UPCR 4 g/g. UACR is only mildly increased.",clues:["High total protein","Low albumin fraction","AKI","Myeloma features"],question:"What mechanism should be suspected?",diagnosis:"Overflow proteinuria from monoclonal light chains.",reasoning:"Conventional dipsticks are most sensitive to albumin. A high PCR with relatively low ACR suggests non-albumin protein.",action:"Order serum free light chains, serum and urine immunofixation/electrophoresis, and urgent renal/hematology assessment.",pearl:"A weak dipstick does not exclude dangerous proteinuria."},
    {title:"Daytime proteinuria in a student",tag:"Proteinuria",stem:"A healthy 17-year-old has low-grade proteinuria on a school sample. First-morning UACR and PCR are normal; kidney function, BP, and sediment are normal.",clues:["Adolescent","Only daytime sample abnormal","Normal first morning","No renal features"],question:"What is the likely explanation?",diagnosis:"Orthostatic proteinuria.",reasoning:"Protein excretion rises upright but is normal after overnight recumbency. Persistent first-morning proteinuria would argue against this diagnosis.",action:"Reassure and follow according to pediatric/local guidance while ensuring no hypertension, hematuria, or impaired kidney function develops.",pearl:"The first-morning sample is the key test for orthostatic proteinuria."},
    {title:"Proteinuria after fever",tag:"Proteinuria",stem:"An adult has UACR 55 mg/g during febrile influenza. Two months later, when well, first-morning UACR is 8 mg/g.",clues:["Acute fever","Moderate albuminuria","Resolution","Normal confirmation"],question:"Does this establish CKD?",diagnosis:"No. This was transient functional albuminuria.",reasoning:"CKD requires persistence for at least 3 months or another chronic structural marker. Acute illness can transiently increase albumin excretion.",action:"No CKD label from the isolated result; continue routine risk-based care.",pearl:"Do not diagnose CKD from one borderline or illness-associated sample."},
    {title:"WBC casts with fever",tag:"Urine sediment",stem:"A patient has fever, flank pain, pyuria, bacteriuria, and WBC casts.",clues:["Systemic infection","Flank tenderness","Pyuria","WBC casts"],question:"Where is the inflammation localized?",diagnosis:"Upper urinary tract / renal inflammation, classically pyelonephritis.",reasoning:"WBC casts form in tubules and therefore localize white cells to the kidney, unlike uncomplicated lower cystitis.",action:"Send culture, start appropriate antibiotics without delay when ill, and assess for obstruction or sepsis.",pearl:"WBC casts imply renal inflammation, not simple bladder infection."},
    {title:"Muddy brown casts after shock",tag:"Urine sediment",stem:"After septic shock, a patient has persistent AKI. Urine microscopy shows granular muddy-brown casts and renal tubular epithelial cells.",clues:["Shock","Persistent AKI","Muddy-brown casts","Tubular cells"],question:"What injury is most likely?",diagnosis:"Acute tubular injury.",reasoning:"Prolonged ischemia damages tubular epithelium, producing granular casts and tubular epithelial cells.",action:"Treat the cause, optimize hemodynamics, avoid further nephrotoxins, monitor complications, and provide kidney replacement therapy if standard indications develop.",pearl:"Sediment can show the transition from hemodynamic AKI to structural tubular injury."},
    {title:"Anuria with pelvic cancer",tag:"Imaging",stem:"A patient with advanced pelvic malignancy becomes anuric and develops bilateral flank discomfort. Creatinine rises rapidly.",clues:["Anuria","Pelvic mass","Bilateral symptoms","Rapid AKI"],question:"What must be excluded immediately?",diagnosis:"Bilateral urinary obstruction.",reasoning:"Anuria in the context of pelvic malignancy strongly suggests obstruction at both ureters or bladder outlet.",action:"Urgent bladder assessment and renal ultrasound or other rapid imaging, with immediate urologic decompression if obstruction is confirmed.",pearl:"Anuria is not a routine outpatient imaging problem."},
    {title:"Creatinine rises after trimethoprim",tag:"Investigations",stem:"Creatinine rises from 1.0 to 1.3 mg/dL two days after trimethoprim. Urine output, potassium, urinalysis, and clinical status are stable.",clues:["Recent trimethoprim","Small isolated rise","Stable urine output","Bland urine"],question:"What non-GFR mechanism can explain the change?",diagnosis:"Inhibition of tubular creatinine secretion.",reasoning:"Trimethoprim can raise serum creatinine without a true fall in GFR. However, AKI and hyperkalemia still require clinical assessment.",action:"Review trend, dose, potassium, volume status, and other nephrotoxins; repeat testing and use alternative filtration assessment if uncertainty matters.",pearl:"Not every creatinine rise equals structural injury, but every rise deserves context."},
    {title:"Hypertension, hemoptysis, RBC casts",tag:"Emergency",stem:"A 35-year-old has rapidly worsening dyspnea, hemoptysis, creatinine rise, severe hypertension, and RBC casts.",clues:["Pulmonary hemorrhage","Rapid renal decline","RBC casts","Systemic emergency"],question:"What syndrome must be recognized?",diagnosis:"Pulmonary-renal syndrome, including anti-GBM disease or ANCA-associated vasculitis.",reasoning:"Concurrent alveolar hemorrhage and glomerulonephritis is life-threatening and cannot wait for routine outpatient work-up.",action:"Urgent nephrology and respiratory/critical-care evaluation, targeted serology, chest assessment, and treatment planning; biopsy often confirms the renal lesion when safe.",pearl:"Hematuria plus hemoptysis is an emergency pattern, not two unrelated symptoms."},
    {title:"Hydronephrosis with fever",tag:"Emergency",stem:"A patient with a known ureteric stone develops fever, rigors, hypotension, and hydronephrosis.",clues:["Stone","Obstruction","Sepsis","Hypotension"],question:"What is the management priority?",diagnosis:"Infected obstructed urinary system.",reasoning:"Antibiotics alone may not control infection behind obstruction. Source control is urgent.",action:"Sepsis resuscitation, immediate antibiotics, and urgent urologic drainage by stent or nephrostomy as appropriate.",pearl:"Infected obstruction is a drainage emergency."},
    {title:"Biopsy after negative work-up",tag:"Biopsy",stem:"A patient has persistent A3 albuminuria, RBC casts, falling eGFR, low complement, and positive lupus serology.",clues:["A3 albuminuria","Active sediment","Reduced complement","Systemic autoimmune clue"],question:"Why is kidney biopsy useful?",diagnosis:"Suspected lupus nephritis requiring histologic classification.",reasoning:"Tissue distinguishes pattern, activity, chronicity, prognosis, and treatment intensity.",action:"Control BP and bleeding risk, review CBC/coagulation and imaging, then perform guided biopsy if safe and management will change.",pearl:"Biopsy is valuable when the answer changes therapy, not merely because urine is abnormal."}
  ];

  const flashcards = [
    {tag:"Principles",q:"Where are renal corpuscles located?",a:"In the renal cortex."},{tag:"Principles",q:"Trace urine from collecting duct to bladder.",a:"Collecting duct → papillary duct → minor calyx → major calyx → renal pelvis → ureter → bladder."},{tag:"Principles",q:"Why is the right kidney usually lower?",a:"Because of the liver."},{tag:"Principles",q:"Trace blood from renal artery to the glomerulus.",a:"Renal artery → segmental → interlobar → arcuate → interlobular/cortical radiate arteries → afferent arteriole → glomerular capillaries."},{tag:"Principles",q:"What follows the efferent arteriole?",a:"Peritubular capillaries in cortical nephrons or vasa recta in long-loop nephrons."},{tag:"Principles",q:"What does the macula densa sense?",a:"Tubular sodium chloride delivery."},{tag:"Principles",q:"What are the three filtration-barrier layers?",a:"Fenestrated endothelium, glomerular basement membrane, and podocyte slit diaphragm."},{tag:"Principles",q:"State the renal handling equation.",a:"Excretion = filtration − reabsorption + secretion."},{tag:"Principles",q:"Which segment performs most bulk reabsorption?",a:"The proximal tubule."},{tag:"Principles",q:"Which limb reabsorbs salt but is effectively impermeable to water?",a:"The thick ascending limb of the loop of Henle."},{tag:"Principles",q:"What does ADH do in the collecting duct?",a:"Increases water permeability by promoting aquaporin-2 insertion."},{tag:"Principles",q:"Where does most ammoniagenesis occur?",a:"In the proximal tubule from glutamine metabolism."},
    {tag:"Investigations",q:"What three data streams should be combined in renal assessment?",a:"Filtration trend, urine findings, and targeted imaging/serology or biopsy."},{tag:"Investigations",q:"Why is eGFR unreliable in rapidly changing AKI?",a:"Creatinine is not at steady state, so the equation assumptions are violated."},{tag:"Investigations",q:"What can falsely elevate serum potassium in a sample?",a:"Hemolysis."},{tag:"Investigations",q:"Name two drugs that raise creatinine by blocking tubular secretion.",a:"Trimethoprim and cimetidine."},{tag:"Investigations",q:"What CKD chronicity criterion is required?",a:"Abnormal kidney structure or function for at least 3 months."},{tag:"Investigations",q:"What is G3a eGFR?",a:"45-59 mL/min/1.73 m²."},{tag:"Investigations",q:"What is G3b eGFR?",a:"30-44 mL/min/1.73 m²."},{tag:"Investigations",q:"Why can low muscle mass hide low GFR?",a:"It lowers creatinine generation, so serum creatinine may remain apparently normal."},{tag:"Investigations",q:"What is the best urine sample for confirming albuminuria?",a:"A first-morning midstream sample."},{tag:"Investigations",q:"Define polyuria in an adult.",a:"Usually more than 3 L/day."},{tag:"Investigations",q:"Define KDIGO oliguria threshold.",a:"Urine output below 0.5 mL/kg/h for at least 6 hours."},{tag:"Investigations",q:"Does a positive dipstick for blood prove hematuria?",a:"No. It detects heme and requires microscopy to confirm RBCs."},{tag:"Investigations",q:"What does an RBC cast indicate?",a:"Glomerular bleeding, usually a nephritic/glomerulonephritis pattern."},{tag:"Investigations",q:"What do WBC casts suggest?",a:"Renal inflammation such as pyelonephritis or interstitial nephritis."},{tag:"Investigations",q:"What are muddy-brown granular casts associated with?",a:"Acute tubular injury."},{tag:"Investigations",q:"Best first imaging for suspected obstruction in many settings?",a:"Kidney and bladder ultrasound."},{tag:"Investigations",q:"What is noncontrast CT particularly good for?",a:"Urinary stones and calcification."},{tag:"Investigations",q:"What is the key major complication of kidney biopsy?",a:"Bleeding, including gross hematuria or perinephric hematoma."},
    {tag:"Proteinuria",q:"Proteinuria versus albuminuria?",a:"Proteinuria is excess total urinary protein; albuminuria is abnormal urinary albumin specifically."},{tag:"Proteinuria",q:"What is A1 albuminuria?",a:"ACR below 30 mg/g or below 3 mg/mmol."},{tag:"Proteinuria",q:"What is A2 albuminuria?",a:"ACR 30-300 mg/g or 3-30 mg/mmol."},{tag:"Proteinuria",q:"What is A3 albuminuria?",a:"ACR above 300 mg/g or above 30 mg/mmol."},{tag:"Proteinuria",q:"Classical nephrotic-range total protein threshold?",a:"At least 3.5 g per 24 hours or approximate PCR equivalent."},{tag:"Proteinuria",q:"What additional features make nephrotic syndrome?",a:"Heavy proteinuria plus hypoalbuminemia, usually edema and often dyslipidemia."},{tag:"Proteinuria",q:"What protein pattern is typical of glomerular disease?",a:"Albumin-predominant proteinuria."},{tag:"Proteinuria",q:"What protein pattern is typical of tubular disease?",a:"Usually lower-grade total protein with low-molecular-weight proteins and a smaller albumin fraction."},{tag:"Proteinuria",q:"Why can overflow proteinuria be missed by dipstick?",a:"Standard dipsticks are most sensitive to albumin, not light chains or other non-albumin proteins."},{tag:"Proteinuria",q:"What is post-renal proteinuria?",a:"Protein added distal to the kidney from urinary tract inflammation, bleeding, or secretions."},{tag:"Proteinuria",q:"How is orthostatic proteinuria confirmed?",a:"Protein is absent/normal in a first-morning recumbent sample but appears after upright activity."},{tag:"Proteinuria",q:"Preferred initial quantitative CKD screening test?",a:"Urine albumin-to-creatinine ratio (UACR)."},{tag:"Proteinuria",q:"When is PCR especially useful?",a:"Established proteinuria or suspected total/non-albumin protein loss."},{tag:"Proteinuria",q:"Why can a ratio be high in low muscle mass?",a:"Urine creatinine in the denominator is low."},{tag:"Proteinuria",q:"What sediment finding makes proteinuria urgent?",a:"RBC casts or dysmorphic RBCs with worsening kidney function or systemic features."},{tag:"Proteinuria",q:"What tests detect monoclonal protein?",a:"Serum free light chains plus serum/urine electrophoresis and immunofixation."},{tag:"Proteinuria",q:"Can one ACR of 40 mg/g diagnose CKD?",a:"No. Confirm persistence after transient causes are removed."},{tag:"Proteinuria",q:"Why avoid routine ACE inhibitor plus ARB combination?",a:"It increases harm such as hyperkalemia and AKI without sufficient added benefit."},
    {tag:"Hematuria",q:"Adult definition of microhematuria?",a:"At least 3 RBCs per high-power field on microscopy of a properly collected specimen."},{tag:"Hematuria",q:"Dipstick blood positive with no RBCs suggests what two major pigments?",a:"Hemoglobin or myoglobin."},{tag:"Hematuria",q:"What morphology supports glomerular bleeding?",a:"Dysmorphic RBCs, especially acanthocytes."},{tag:"Hematuria",q:"What do blood clots suggest?",a:"A non-glomerular/urologic source."},{tag:"Hematuria",q:"What does initial hematuria traditionally suggest?",a:"An anterior urethral source, though timing is imperfect."},{tag:"Hematuria",q:"What does terminal hematuria traditionally suggest?",a:"Bladder neck, trigone, or prostate/lower outlet source."},{tag:"Hematuria",q:"Can anticoagulation remove the need for evaluation?",a:"No. It may unmask an underlying lesion."},{tag:"Hematuria",q:"Hematuria simultaneous with URI suggests which classic disease?",a:"IgA nephropathy."},{tag:"Hematuria",q:"Hematuria 1-3 weeks after infection suggests?",a:"Post-infectious glomerulonephritis."},{tag:"Hematuria",q:"Hematuria plus hemoptysis suggests?",a:"Pulmonary-renal syndrome such as anti-GBM disease or ANCA vasculitis."},{tag:"Hematuria",q:"What should follow UTI-associated hematuria?",a:"Repeat urinalysis after treatment to document resolution."},{tag:"Hematuria",q:"Low-risk adult microhematuria next step?",a:"Repeat urinalysis within about 6 months rather than immediate invasive testing."},{tag:"Hematuria",q:"Intermediate-risk adult evaluation?",a:"Cystoscopy plus renal/bladder ultrasound."},{tag:"Hematuria",q:"High-risk adult evaluation?",a:"Cystoscopy plus axial upper-tract imaging, usually CT urography when suitable."},{tag:"Hematuria",q:"What emergency does fever plus obstruction represent?",a:"An infected obstructed urinary system requiring urgent drainage."},{tag:"Hematuria",q:"What is clot retention?",a:"Bladder outlet blockage by clots causing painful distension and inability to void."},{tag:"Hematuria",q:"Does normal creatinine exclude urinary malignancy?",a:"No."},{tag:"Hematuria",q:"What does painless visible hematuria in a smoker require?",a:"Prompt urologic evaluation for malignancy, including cystoscopy and upper-tract imaging."},
    {tag:"Integration",q:"What comes before etiologic testing in severe kidney presentations?",a:"Stabilization of hyperkalemia, pulmonary edema, acidosis, sepsis, anuria, or other emergencies."},{tag:"Integration",q:"How do proteinuria and hematuria together change localization?",a:"Albuminuria/proteinuria plus dysmorphic RBCs or RBC casts strongly favors glomerular disease."},{tag:"Integration",q:"Why can nephrology and urology referrals be parallel?",a:"Medical renal features do not eliminate malignancy or structural urinary-tract risk."},{tag:"Integration",q:"What is the safest interpretation of one abnormal result?",a:"Confirm collection and trend, remove transient factors, and integrate with clinical context."},{tag:"Integration",q:"What is the purpose of kidney biopsy?",a:"To obtain histology when it will change diagnosis, prognosis, or treatment."},{tag:"Integration",q:"What is the website's central renal model?",a:"The glomerulus filters, the tubule modifies, and the collecting duct finalizes urine; investigations combine function, damage, homeostasis, and structure."}
  ];

  const quiz = [
    {q:"Which renal region contains all glomeruli?",options:["Medulla","Cortex","Renal pelvis","Papilla"],answer:1,explanation:"Renal corpuscles are confined to the cortex."},
    {q:"The glomerular capillary bed lies between:",options:["An artery and vein","An afferent and efferent arteriole","A venule and lymphatic","Two veins"],answer:1,explanation:"The two-arteriole arrangement allows control of glomerular pressure and filtration."},
    {q:"Which nephron segment reabsorbs salt but is effectively impermeable to water?",options:["Thin descending limb","Thick ascending limb","Collecting duct with ADH","Proximal tubule"],answer:1,explanation:"The thick ascending limb is a major diluting segment and builds the medullary gradient."},
    {q:"The correct renal handling equation is:",options:["Excretion = filtration + reabsorption − secretion","Excretion = filtration − reabsorption + secretion","Excretion = secretion − filtration","Excretion = reabsorption only"],answer:1,explanation:"What is filtered minus what returns to blood plus what is secreted is excreted."},
    {q:"ADH primarily increases:",options:["Glomerular fenestrations","Collecting-duct water permeability","Proximal glucose secretion","Renal artery diameter only"],answer:1,explanation:"ADH promotes aquaporin-2 insertion in collecting-duct principal cells."},
    {q:"Most renal ammoniagenesis occurs in the:",options:["Proximal tubule","Glomerulus","Renal pelvis","Bladder"],answer:0,explanation:"Proximal glutamine metabolism produces NH4+ and new bicarbonate."},
    {q:"Which finding requires immediate escalation?",options:["Stable ACR 35 mg/g","Severe hyperkalemia with ECG changes","One hyaline cast","Clear urine"],answer:1,explanation:"Severe hyperkalemia with ECG changes is an emergency."},
    {q:"A creatinine-based eGFR is least reliable when:",options:["Kidney function is stable","Creatinine is rapidly changing","A first-morning urine is used","The patient is fasting"],answer:1,explanation:"eGFR equations assume a relatively stable filtration marker."},
    {q:"CKD requires kidney abnormality for at least:",options:["24 hours","7 days","1 month","3 months"],answer:3,explanation:"Chronic kidney disease requires persistence for at least 3 months."},
    {q:"Which eGFR range is G3b?",options:["60-89","45-59","30-44","15-29"],answer:2,explanation:"G3b is 30-44 mL/min/1.73 m²."},
    {q:"Which drug can raise creatinine by inhibiting tubular secretion without reducing GFR?",options:["Trimethoprim","Furosemide only","Insulin","Calcium carbonate"],answer:0,explanation:"Trimethoprim can cause a non-GFR creatinine rise."},
    {q:"A positive urine dipstick for blood detects:",options:["Only intact RBCs","Heme pigment","Only myoglobin","Only hemoglobin"],answer:1,explanation:"The reagent detects heme and cannot distinguish RBCs, hemoglobin, and myoglobin."},
    {q:"Which cast most strongly supports glomerulonephritis?",options:["Hyaline cast","RBC cast","Fatty cast","Waxy cast"],answer:1,explanation:"RBC casts indicate glomerular bleeding."},
    {q:"Muddy-brown granular casts are classically associated with:",options:["Acute tubular injury","Simple cystitis","Renal artery stenosis","Orthostatic proteinuria"],answer:0,explanation:"They are a classic sediment finding in acute tubular injury."},
    {q:"The preferred first imaging test for suspected obstruction in many settings is:",options:["PET scan","Kidney/bladder ultrasound","Chest X-ray","Bone scan"],answer:1,explanation:"Ultrasound rapidly shows hydronephrosis and bladder retention without radiation."},
    {q:"Which statement about kidney biopsy is correct?",options:["It is required for every proteinuria result","It is useful when histology will change care","Bleeding risk does not matter","It never causes hematuria"],answer:1,explanation:"Biopsy is selective and requires risk assessment because bleeding is the major complication."},
    {q:"Albuminuria means:",options:["Any red urine","Urinary albumin specifically","Only light chains","Urinary glucose"],answer:1,explanation:"Albuminuria is abnormal urinary albumin; proteinuria includes all proteins."},
    {q:"A2 albuminuria is an ACR of:",options:["<30 mg/g","30-300 mg/g",">3000 mg/g only","Exactly 3.5 g/day"],answer:1,explanation:"A2 is 30-300 mg/g (3-30 mg/mmol)."},
    {q:"Nephrotic-range proteinuria is classically:",options:["≥150 mg/day","≥500 mg/day","≥3.5 g/day","Any positive dipstick"],answer:2,explanation:"The classical threshold is at least 3.5 g total protein per 24 hours or approximate PCR equivalent."},
    {q:"Which finding is required in addition to heavy proteinuria for nephrotic syndrome?",options:["Hypoalbuminemia, usually with edema","RBC casts","Dysuria","Hypernatremia"],answer:0,explanation:"Nephrotic syndrome includes systemic consequences, especially hypoalbuminemia and edema."},
    {q:"A negative dipstick with high PCR and low ACR suggests:",options:["No proteinuria","Non-albumin protein such as light chains","Only dehydration","A laboratory impossibility"],answer:1,explanation:"Dipsticks preferentially detect albumin and may miss overflow protein."},
    {q:"Orthostatic proteinuria is supported by:",options:["High first-morning protein","Normal first-morning sample with daytime protein","RBC casts","Severe hypertension"],answer:1,explanation:"Overnight recumbency normalizes protein excretion in orthostatic proteinuria."},
    {q:"One ACR of 45 mg/g during fever:",options:["Always proves CKD","Should be confirmed after the transient illness resolves","Requires immediate dialysis","Means nephrotic syndrome"],answer:1,explanation:"Acute illness can transiently raise albumin excretion; chronicity must be confirmed."},
    {q:"Proteinuria with dysmorphic RBCs and RBC casts suggests:",options:["Glomerular inflammation","Simple contamination","Only lower UTI","Orthostatic proteinuria"],answer:0,explanation:"This is an active glomerular sediment pattern."},
    {q:"The adult microscopic hematuria definition is:",options:["Any positive dipstick","≥3 RBC/HPF on microscopy","Red urine only","≥100 RBC/HPF only"],answer:1,explanation:"The AUA/SUFU adult definition is at least 3 RBC/HPF in a properly collected specimen."},
    {q:"Dipstick blood positive, no RBCs, severe muscle pain, high CK indicates:",options:["Myoglobinuria","Glomerular hematuria","Bladder cancer","Normal urine"],answer:0,explanation:"Myoglobin from muscle injury produces a heme-positive dipstick without intact RBCs."},
    {q:"Blood clots in urine favor:",options:["A purely glomerular source","A non-glomerular/urologic source","No bleeding","Only nephrotic syndrome"],answer:1,explanation:"Clots strongly favor urologic bleeding."},
    {q:"Hematuria occurring simultaneously with an upper respiratory infection classically suggests:",options:["IgA nephropathy","Post-infectious GN after 3 weeks","Minimal change disease","Renal vein thrombosis only"],answer:0,explanation:"Synpharyngitic hematuria is classic for IgA nephropathy."},
    {q:"Hematuria 1-3 weeks after infection classically suggests:",options:["Post-infectious GN","IgA nephropathy only","Cystinuria","BPH"],answer:0,explanation:"The delayed interval is typical of post-infectious glomerulonephritis."},
    {q:"A patient on anticoagulation develops hematuria. The best statement is:",options:["No evaluation is needed","Use the same risk-based evaluation because an underlying lesion may exist","Stop all anticoagulation permanently","It must be glomerular"],answer:1,explanation:"Anticoagulants may unmask pathology and do not remove the need for evaluation."},
    {q:"After UTI-associated hematuria is treated, the next step is:",options:["No follow-up ever","Repeat urinalysis to document resolution","Immediate kidney biopsy for everyone","Ignore persistent blood"],answer:1,explanation:"Persistence after treatment requires further evaluation."},
    {q:"Intermediate-risk adult microhematuria is generally evaluated with:",options:["Repeat only in 10 years","Cystoscopy plus renal/bladder ultrasound","Kidney biopsy only","No imaging or cystoscopy"],answer:1,explanation:"The chapter summarizes intermediate risk as cystoscopy plus ultrasound."},
    {q:"High-risk adult microhematuria generally requires:",options:["Cystoscopy plus axial upper-tract imaging","Urine color chart only","No bladder assessment","Antibiotics only"],answer:0,explanation:"High-risk evaluation assesses both bladder and upper urinary tract."},
    {q:"Which situation is a drainage emergency?",options:["Asymptomatic simple cyst","Infected obstructed kidney","A1 albuminuria","Orthostatic proteinuria"],answer:1,explanation:"Antibiotics alone are insufficient when infected urine is trapped behind obstruction."},
    {q:"Hematuria plus hemoptysis and rapidly rising creatinine suggests:",options:["Pulmonary-renal syndrome","Simple cystitis","Only kidney stone","Nephrotic syndrome without inflammation"],answer:0,explanation:"Anti-GBM disease or ANCA vasculitis must be considered urgently."},
    {q:"Which statement best integrates eGFR and albuminuria?",options:["They measure the same thing","eGFR estimates filtration while albuminuria marks damage and risk","Albuminuria is irrelevant if eGFR is normal","Only eGFR is needed"],answer:1,explanation:"Function and damage are complementary dimensions of kidney assessment."},
    {q:"Which finding supports tubular rather than glomerular proteinuria?",options:["Very high albumin-predominant loss","Low-grade non-albumin protein with proximal tubular defects","RBC casts","Nephrotic edema"],answer:1,explanation:"Tubular proteinuria consists largely of low-molecular-weight proteins not reabsorbed proximally."},
    {q:"Why can a low-muscle-mass patient have an inflated ACR?",options:["Urine albumin is always false","Urine creatinine denominator is low","Serum sodium is high","The kidney makes more creatinine"],answer:1,explanation:"Ratios depend on creatinine generation in the denominator."},
    {q:"The best overall approach to an unexpected urine abnormality is:",options:["Diagnose from one strip","Confirm collection and persistence, integrate sediment, function, and context","Order every serology panel","Ignore it if asymptomatic"],answer:1,explanation:"Question-driven confirmation prevents both false diagnosis and missed disease."},
    {q:"Which sentence best summarizes the renal lab?",options:["The kidney only removes urea","The glomerulus filters, tubules modify, and investigations integrate function, damage, homeostasis, and structure","Urinalysis replaces all blood tests","Every hematuria case needs the same CT"],answer:1,explanation:"This integrated model connects normal physiology to clinical reasoning."}
  ];

  const labels = Object.fromEntries(navGroups.flatMap(group=>group.items).map(item=>[item.id,item.label]));
  window.RenalLabData = {navGroups,clusters,modules,cases,flashcards,quiz,labels};
})();
