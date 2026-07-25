/* Chapters 06-08: Diabetic kidney disease, nephrotic syndrome, nephritic syndrome, and new interactive tools. */
(() => {
  "use strict";

  const data = window.RenalLabData;
  const U = window.RenalLabUI;
  if (!data || !U) throw new Error("RenalLabData and RenalLabUI must load before chapters-6-8.js");

  const {
    section, cards, callout, table, bullets, numbered, flow, routeLinks, stats
  } = U;
  const M = (title, kicker, summary, meta, body) => ({title, kicker, summary, meta, body});

  const chapterGroups = [
    {title:"Diabetic kidney disease",items:[
      {id:"dkd-foundations",label:"DKD foundations & pathology"},
      {id:"dkd-screening",label:"Screening, confirmation & CGA"},
      {id:"dkd-atypical",label:"Atypical disease & biopsy"},
      {id:"dkd-management",label:"Layered kidney protection"},
      {id:"dkd-medications",label:"SGLT2i, finerenone & GLP-1 RA"},
      {id:"dkd-monitoring",label:"Monitoring & special situations"}
    ]},
    {title:"Nephrotic syndrome",items:[
      {id:"ns-definition",label:"Definition, causes & age patterns"},
      {id:"ns-pathophysiology",label:"Protein loss, edema & thrombosis"},
      {id:"ns-presentation",label:"Presentation & complications"},
      {id:"ns-investigation",label:"Investigation, biopsy & genetics"},
      {id:"ns-edema",label:"Edema & supportive management"},
      {id:"ns-thrombosis",label:"Thrombosis, infection & lipids"},
      {id:"ns-pediatric-adult",label:"Pediatric & adult pathways"}
    ]},
    {title:"Nephritic syndrome",items:[
      {id:"nph-core",label:"Core phenotype & mechanisms"},
      {id:"nph-causes",label:"Causes, complement & timing"},
      {id:"nph-investigation",label:"Investigation & biopsy algorithm"},
      {id:"nph-psgn",label:"Post-streptococcal GN"},
      {id:"nph-management",label:"Acute management & dialysis"},
      {id:"nph-rpgn",label:"RPGN & pulmonary-renal disease"},
      {id:"nph-mimics",label:"Mimics, follow-up & corrections"}
    ]}
  ];

  const revisionGroup = data.navGroups.find(group => group.title === "Interactive revision");
  const revisionIndex = data.navGroups.indexOf(revisionGroup);
  data.navGroups.splice(revisionIndex, 0, ...chapterGroups);
  const insertBeforeCases = revisionGroup.items.findIndex(item => item.id === "clinical-cases");
  revisionGroup.items.splice(insertBeforeCases, 0,
    {id:"dkd-risk-lab",label:"DKD risk & atypicality lab"},
    {id:"nephrotic-lab",label:"Nephrotic syndrome lab"},
    {id:"nephritic-lab",label:"Nephritic differential lab"}
  );

  data.clusters.dkd = chapterGroups[0].items.map(item => item.id);
  data.clusters.nephrotic = chapterGroups[1].items.map(item => item.id);
  data.clusters.nephritic = chapterGroups[2].items.map(item => item.id);
  const revisionCluster = data.clusters.revision;
  const revisionInsert = revisionCluster.indexOf("clinical-cases");
  revisionCluster.splice(revisionInsert, 0, "dkd-risk-lab", "nephrotic-lab", "nephritic-lab");

  Object.assign(data.modules, {
    "dkd-foundations":M(
      "Diabetic Kidney Disease: Foundations",
      "Chapter 6 · mechanism and pathology",
      "Diabetic kidney disease is a clinical diagnosis built from persistent albuminuria, reduced eGFR, or both. It may be albuminuric or nonalbuminuric, and the classical pathology can coexist with another renal lesion.",
      ["Clinical umbrella term","Hyperfiltration to fibrosis","Kimmelstiel-Wilson lesions"],
      () => `
        ${section("Definition and clinical importance",cards([
          {icon:"DKD",title:"Clinical definition",body:"<p>Chronic kidney disease in a person with diabetes that is attributable wholly or partly to diabetes, after transient findings and plausible alternative renal disease are considered.</p>"},
          {icon:"3m",title:"Persistence matters",body:"<p>CKD requires a structural or functional abnormality lasting at least 3 months. One elevated UACR during fever, UTI, exercise, severe hyperglycemia, heart failure, menstruation, or acute illness is not enough.</p>"},
          {icon:"A/G",title:"Two independent risk dimensions",body:"<p>Albuminuria and reduced eGFR independently predict kidney progression, cardiovascular disease, and mortality. Either may be abnormal while the other remains relatively preserved.</p>"},
          {icon:"Bx",title:"Usually clinical",body:"<p>Biopsy is not routine in a typical stable pattern. It is used when the presentation is atypical or tissue is likely to change diagnosis or treatment.</p>"}
        ]))}
        ${section("From metabolic stress to nephron loss",flow([
          {title:"Metabolic stress",body:"Hyperglycemia, advanced glycation, oxidative stress, and inflammatory signaling injure glomerular and tubular cells."},
          {title:"Hemodynamic stress",body:"Afferent vasodilation with relative efferent constriction raises intraglomerular pressure and may produce early hyperfiltration."},
          {title:"Barrier injury",body:"Podocyte dysfunction, altered GBM selectivity, and mesangial matrix expansion lead to albumin leakage."},
          {title:"Tubulointerstitial injury",body:"Filtered proteins, hypoxia, inflammation, and maladaptive repair activate fibrotic pathways."},
          {title:"Progressive CKD",body:"Nephron loss lowers eGFR and increases cardiovascular and kidney-failure risk."}
        ]))}
        ${section("Classic pathology",table(["Compartment","Characteristic change","Interpretation"],[
          ["Glomerular basement membrane","Early GBM thickening","Sensitive structural change, but not specific by itself."],
          ["Mesangium","Mesangial expansion and excess extracellular matrix","Correlates with progressive glomerular injury."],
          ["Glomerular tuft","Diffuse glomerulosclerosis; nodular Kimmelstiel-Wilson lesions in advanced disease","Nodules are classic but are not present in every patient."],
          ["Arterioles","Hyalinosis of afferent and efferent arterioles","Efferent arteriolar involvement is a useful classic clue."],
          ["Tubules and interstitium","Tubular atrophy, inflammation, and fibrosis","A strong determinant of long-term functional loss."]
        ]))}
        ${callout("Terminology pearl","Diabetic kidney disease is the preferred clinical umbrella term. Diabetic nephropathy is often used for the characteristic pathologic lesion, especially when biopsy proven.","success")}
        ${routeLinks([["dkd-screening","Screen and stage DKD"],["dkd-atypical","Recognize another kidney disease"],["dkd-management","Build layered treatment"]])}
      `
    ),

    "dkd-screening":M(
      "DKD Screening, Confirmation & CGA",
      "Chapter 6 · detect and stage",
      "Screen with UACR and eGFR, exclude transient causes, confirm persistence, then classify by Cause, GFR category, and Albuminuria category. Modern risk assessment replaces a rigid five-stage natural history.",
      ["UACR + eGFR","A1-A3 and G1-G5","Confirm ≥3 months"],
      () => `
        ${section("Who should be screened?",table(["Population","When to begin","Core tests"],[
          ["Type 1 diabetes","After 5 years of diabetes, then at least annually","Spot UACR and serum-creatinine eGFR."],
          ["Type 2 diabetes","At diagnosis, then at least annually","UACR and eGFR because kidney disease may predate diagnosis."],
          ["Established CKD","At least annually and more often with higher risk or treatment changes","UACR, eGFR, potassium, and stage-specific complications."]
        ]))}
        ${section("Confirm abnormal albuminuria",flow([
          {title:"1. Detect",body:"Obtain UACR and eGFR. Do not rely on serum creatinine alone or a qualitative protein dipstick."},
          {title:"2. Exclude transient causes",body:"Exercise, fever, UTI, marked hyperglycemia, severe hypertension, heart failure, menstruation, and acute illness can temporarily raise albumin excretion."},
          {title:"3. Confirm persistence",body:"Repeat an abnormal result, preferably in a first-morning sample. Diagnose CKD when the abnormality persists for at least 3 months."},
          {title:"4. Stage and act",body:"Assign G and A categories, estimate kidney and cardiovascular risk, start indicated therapy, and set monitoring frequency."}
        ]))}
        ${section("CGA categories",`${table(["G category","eGFR mL/min/1.73 m²","Meaning"],[
          ["G1","≥90","Normal or high; CKD requires another marker of damage."],
          ["G2","60-89","Mildly decreased."],
          ["G3a","45-59","Mildly to moderately decreased."],
          ["G3b","30-44","Moderately to severely decreased."],
          ["G4","15-29","Severely decreased."],
          ["G5","<15","Kidney failure category."]
        ])}${table(["A category","UACR mg/g","Meaning"],[
          ["A1","<30","Normal to mildly increased."],
          ["A2","30-300","Moderately increased."],
          ["A3",">300","Severely increased."]
        ])}`)}
        ${section("Mogensen stages: useful but legacy",table(["Historical stage","Classic description","Modern caution"],[
          ["1. Hyperfunction","Kidney enlargement and increased GFR early after diabetes onset","Hyperfiltration is not required to diagnose or stage DKD."],
          ["2. Silent structural change","GBM thickening and mesangial expansion","Exercise-only albuminuria is not a current diagnostic category."],
          ["3. Incipient nephropathy","Persistent microalbuminuria","Use confirmed A2 albuminuria with eGFR."],
          ["4. Overt nephropathy","Macroproteinuria, hypertension, and falling GFR","Use A3 plus G category; progression may occur with little albuminuria."],
          ["5. Kidney failure","Advanced CKD requiring replacement planning","Dialysis decisions are complication- and symptom-based, not a single creatinine threshold."]
        ]))}
        ${callout("Exam trap","A person with type 2 diabetes can have reduced eGFR and little albuminuria. The traditional sequence is not a rule.","warning")}
        ${routeLinks([["dkd-risk-lab","Use the DKD risk lab"],["dkd-atypical","Check atypical features"],["dkd-monitoring","Plan monitoring"]])}
      `
    ),

    "dkd-atypical":M(
      "When DKD Is Not the Whole Story",
      "Chapter 6 · differential and biopsy",
      "Diabetes does not protect a patient from glomerulonephritis, obstruction, renovascular disease, interstitial nephritis, monoclonal disease, or another glomerulopathy. Atypical features should change the diagnostic pathway.",
      ["Active sediment","Abrupt nephrotic syndrome","Rapid eGFR loss"],
      () => `
        ${section("Pattern supporting typical DKD",bullets([
          "Long-standing diabetes with gradually increasing albuminuria and/or a slowly declining eGFR.",
          "Hypertension and other microvascular complications may coexist.",
          "Bland urine sediment without dysmorphic RBCs or RBC casts.",
          "No abrupt unexplained deterioration, systemic inflammatory syndrome, or structural urologic abnormality.",
          "Retinopathy supports a microvascular phenotype but is not required, especially in type 2 diabetes."
        ]))}
        ${section("Atypical features",table(["Feature","Why it matters"],[
          ["Dysmorphic RBCs, RBC casts, or substantial hematuria","Suggests glomerulonephritis or another inflammatory lesion."],
          ["Abrupt nephrotic syndrome or rapid proteinuria increase","Consider membranous nephropathy, primary FSGS, amyloidosis, or another glomerulopathy."],
          ["Rapid or stepwise eGFR decline","Consider AKI, renovascular disease, obstruction, interstitial nephritis, or superimposed GN."],
          ["Short diabetes duration, particularly in type 1 diabetes","Classic diabetic nephropathy is less likely early in the course."],
          ["Rash, arthritis, vasculitis, infection, malignancy, or monoclonal clues","Requires targeted systemic evaluation."],
          ["Marked renal asymmetry or unexpectedly small kidneys","Suggests vascular, reflux, obstructive, or chronic non-diabetic disease."]
        ]))}
        ${section("Kidney biopsy",cards([
          {icon:"No",title:"Not routine",body:"<p>A stable classic diabetic pattern is generally diagnosed clinically.</p>"},
          {icon:"Yes",title:"Consider biopsy",body:"<p>Use biopsy for active sediment, unexplained hematuria, rapidly progressive dysfunction, abrupt nephrotic syndrome, systemic disease, or a course discordant with presumed DKD.</p>"},
          {icon:"≠",title:"Retinopathy nuance",body:"<p>Absence of retinopathy alone is not a definitive biopsy indication in type 2 diabetes. It is one clue among several.</p>"},
          {icon:"LM/IF/EM",title:"Integrate pathology",body:"<p>Diabetic lesions can coexist with another glomerular or tubulointerstitial disease. Interpret light microscopy, immunofluorescence, and electron microscopy with the clinical pattern.</p>"}
        ]))}
        ${callout("Urgent referral","Rapid eGFR loss, suspected RPGN, refractory hyperkalemia, severe resistant hypertension, nephrotic syndrome with complications, or advanced CKD requiring replacement planning warrants prompt nephrology assessment.","danger")}
        ${routeLinks([["gn-workflow","Review the GN workflow"],["ns-definition","Compare nephrotic causes"],["dkd-management","Return to DKD treatment"]])}
      `
    ),

    "dkd-management":M(
      "Layered Kidney & Cardiovascular Protection",
      "Chapter 6 · management foundation",
      "DKD treatment is cumulative. Start with lifestyle, safe glycemic control, standardized blood pressure management, and statin-based cardiovascular prevention, then layer disease-modifying therapies while monitoring tolerance.",
      ["Lifestyle + glycemia","RAS blockade","Cardiorenal prevention"],
      () => `
        ${section("The layered model",table(["Layer","Core intervention","Primary purpose"],[
          ["Foundation","Education, smoking cessation, activity, healthy diet, sodium moderation, weight management","Reduce global kidney and cardiovascular risk."],
          ["Glycemia","Individualized HbA1c target; metformin when appropriate; avoid hypoglycemia","Limit microvascular injury safely."],
          ["Hemodynamics","ACE inhibitor or ARB when indicated; individualized BP target","Reduce systemic and intraglomerular pressure."],
          ["SGLT2 inhibition","For most type 2 diabetes with CKD and eGFR ≥20","Kidney and heart-failure protection beyond glucose lowering."],
          ["Residual albuminuric risk","Finerenone in selected eligible type 2 diabetes","Further reduce kidney and cardiovascular events."],
          ["Additional metabolic/CV benefit","Long-acting GLP-1 receptor agonist with proven benefit","Glycemic control, weight reduction, and CV/kidney benefit."],
          ["ASCVD prevention","Statin-based therapy; antiplatelet only for a defined indication","Reduce atherosclerotic events."]
        ]))}
        ${section("Lifestyle and nutrition",bullets([
          "Use an individualized eating pattern rich in vegetables, fruits, whole grains, legumes, plant proteins, nuts, and unsaturated fats, while reducing processed meats, refined carbohydrates, and sweetened beverages.",
          "For non-dialysis diabetes with CKD, protein intake near 0.8 g/kg/day is generally suggested; very-low-protein diets are not routine.",
          "Aim for sodium intake below about 2 g/day when feasible and safe.",
          "Encourage about 150 minutes/week of moderate activity, adapted to cardiovascular, functional, and frailty status.",
          "Advise smoking cessation and avoid nephrotoxins, especially NSAIDs."
        ]))}
        ${section("Glycemia and blood pressure",cards([
          {icon:"HbA1c",title:"Individualize the target",body:"<p>For non-dialysis CKD, an HbA1c target from below 6.5% to below 8.0% may be appropriate depending on hypoglycemia risk, frailty, comorbidity, and life expectancy.</p>"},
          {icon:"Met",title:"Metformin",body:"<p>Appropriate for many adults with type 2 diabetes and eGFR ≥30. Review dose as eGFR declines and withhold during severe acute illness, hypoxia, shock, or another high-risk setting.</p>"},
          {icon:"BP",title:"Standardized measurement",body:"<p>A target below 130/80 mmHg is commonly reasonable for high kidney/CV risk when safely tolerated, but the target must be individualized.</p>"},
          {icon:"RAS",title:"ACE inhibitor or ARB",body:"<p>Preferred with hypertension and albuminuria. Titrate to the maximum tolerated dose, check creatinine and potassium after changes, and never combine ACEi with ARB.</p>"}
        ]))}
        ${callout("Important correction","ACE inhibitor or ARB is not recommended solely for primary prevention in a person with normal blood pressure, normal UACR, and normal eGFR. Use it for a defined clinical indication.","warning")}
        ${routeLinks([["dkd-medications","Study disease-modifying medicines"],["dkd-monitoring","Review safety monitoring"],["dkd-risk-lab","Apply the layered model"]])}
      `
    ),

    "dkd-medications":M(
      "SGLT2 Inhibitors, Finerenone & GLP-1 RA",
      "Chapter 6 · modern drug layers",
      "Modern DKD care uses organ-protective classes for defined indications. Their kidney benefit is not simply an extension of glucose lowering, and each requires specific initiation, sick-day, and laboratory safety rules.",
      ["eGFR thresholds","Early dip vs AKI","Potassium safety"],
      () => `
        ${section("SGLT2 inhibitors",cards([
          {icon:"20",title:"Who is eligible?",body:"<p>Use an SGLT2 inhibitor with proven kidney or cardiovascular benefit for most adults with type 2 diabetes and CKD when eGFR is at least 20 mL/min/1.73 m², unless contraindicated or not tolerated.</p>"},
          {icon:"↓",title:"Expected early eGFR dip",body:"<p>A small reversible dip can reflect the intended hemodynamic effect. Do not stop automatically when the patient is stable; distinguish it from volume depletion or true AKI.</p>"},
          {icon:"Sick",title:"Sick-day safety",body:"<p>Withhold during prolonged fasting, major surgery, or critical illness because of ketosis risk. Review diuretics and volume status in patients vulnerable to hypovolemia.</p>"},
          {icon:"Counsel",title:"Practical counseling",body:"<p>Discuss genital hygiene, infection symptoms, hydration, ketoacidosis symptoms, and the need to review insulin or sulfonylurea when glycemia is already near target.</p>"}
        ]))}
        ${section("Finerenone",table(["Requirement","Practical point"],[
          ["Type 2 diabetes with CKD","Used for residual cardiorenal risk, not as a glucose-lowering substitute."],
          ["eGFR ≥25","Follow product-specific eGFR initiation rules."],
          ["Persistent UACR ≥30 mg/g","Despite maximally tolerated RAS blockade."],
          ["Normal serum potassium","Do not initiate in hyperkalemia; recheck potassium regularly."],
          ["Combination strategy","May be layered with an SGLT2 inhibitor when eligible; it does not replace ACEi/ARB or SGLT2i."]
        ]))}
        ${section("Long-acting GLP-1 receptor agonists",bullets([
          "Use a preparation with proven cardiovascular benefit when individualized glycemic goals are not met with metformin/SGLT2 inhibitor or when these cannot be used.",
          "They are particularly helpful when obesity or established cardiovascular disease coexists.",
          "Start low and titrate gradually to reduce gastrointestinal adverse effects.",
          "Reduce insulin or sulfonylurea doses when hypoglycemia becomes likely."
        ]))}
        ${section("Do not confuse class roles",table(["Class","What it mainly adds","Key safety focus"],[
          ["ACEi/ARB","Antiproteinuric and hemodynamic protection in indicated patients","Creatinine, potassium, volume status; no dual blockade."],
          ["SGLT2 inhibitor","Kidney and heart-failure protection across a broad CKD range","Volume, genital infection, ketosis, early eGFR dip."],
          ["Finerenone","Additional kidney/CV protection in selected albuminuric type 2 diabetes","Hyperkalemia and eGFR."],
          ["GLP-1 RA","Metabolic, weight, cardiovascular, and kidney benefit","GI effects and hypoglycemia with other agents."]
        ]))}
        ${callout("Pregnancy safety","ACE inhibitors, ARBs, SGLT2 inhibitors, and finerenone are generally avoided or contraindicated in pregnancy. Preconception medication review is essential.","danger")}
        ${routeLinks([["dkd-monitoring","Monitor after treatment changes"],["dkd-management","Return to the full treatment stack"],["clinical-cases","Apply treatment reasoning"]])}
      `
    ),

    "dkd-monitoring":M(
      "DKD Monitoring & Special Situations",
      "Chapter 6 · safety and follow-up",
      "Monitoring is part of treatment, not an afterthought. The plan must track UACR and eGFR while anticipating potassium disorders, hypoglycemia, volume depletion, medication accumulation, pregnancy risk, and advanced-CKD complications.",
      ["2-4 week checks","Sick-day rules","Advanced CKD planning"],
      () => `
        ${section("After a therapy change",table(["Therapy or situation","Key monitoring"],[
          ["ACE inhibitor or ARB","BP, creatinine, and potassium 2-4 weeks after initiation or dose change. Evaluate volume depletion, NSAIDs, or renal artery stenosis if creatinine rises more than about 30%."],
          ["SGLT2 inhibitor","Volume status, genital infection symptoms, ketosis risk, and eGFR trajectory. Interpret the expected early dip correctly."],
          ["Finerenone","Potassium and eGFR at baseline and at product-guided intervals."],
          ["Metformin","eGFR, long-term vitamin B12 risk, and temporary suspension during high-risk acute illness."],
          ["Insulin or sulfonylurea","Hypoglycemia, especially as eGFR declines and drug/insulin clearance falls."],
          ["Established CKD","At least annual eGFR and UACR, more often for higher G/A risk or when a decision depends on the result."]
        ]))}
        ${section("Advanced CKD",bullets([
          "Manage anemia, metabolic acidosis, potassium disorders, and CKD-mineral bone disorder according to stage-specific guidance.",
          "Optimize vaccination, infection prevention, medication dose adjustment, and avoidance of nephrotoxic or contrast injury where possible.",
          "Refer for kidney replacement education and access or transplant planning before an emergency need develops.",
          "Kidney transplantation is preferred for suitable patients with kidney failure. Selected patients with type 1 diabetes may benefit from simultaneous pancreas-kidney transplantation.",
          "Start dialysis for refractory symptoms or complications, not solely because a historical laboratory threshold is crossed."
        ]))}
        ${section("Special situations",table(["Situation","Key point"],[
          ["Pregnancy","Preconception review is essential; ACEi, ARB, SGLT2 inhibitors, and finerenone are generally avoided or contraindicated."],
          ["Type 1 diabetes","Annual screening begins after 5 years. SGLT2 inhibitors are not routinely recommended because of diabetic ketoacidosis risk."],
          ["Older or frail adult","Prioritize safety, function, avoidance of hypoglycemia and orthostasis, and a manageable pill burden."],
          ["Acute illness","Apply clinician-guided sick-day rules to medicines that increase dehydration, ketosis, or lactic acidosis risk."]
        ]))}
        ${section("One-line memory aid",callout("Detect → Diagnose persistence → Differentiate atypical disease → Deploy layered kidney/CV protection → Document response and safety","Use the same sequence every time UACR or eGFR changes.","purple"))}
        ${routeLinks([["dkd-risk-lab","Practice DKD stratification"],["flashcards","Review key thresholds"],["quiz","Test the complete renal course"]])}
      `
    ),

    "ns-definition":M(
      "Nephrotic Syndrome: Definition & Causes",
      "Chapter 7 · syndrome first, etiology second",
      "Nephrotic syndrome is a clinicobiochemical pattern of heavy glomerular protein loss, hypoalbuminemia, and edema-related consequences. It is not a single disease, and nephrotic-range proteinuria alone is not synonymous with the full syndrome.",
      ["≥3.5 g/day in adults","Hypoalbuminemia + edema","Cause depends on age"],
      () => `
        ${section("Diagnostic framework",table(["Term","Adults","Children 1-18 years"],[
          ["Nephrotic-range proteinuria","Traditionally ≥3.5 g/24 h or an equivalent protein-creatinine ratio","uPCR ≥2 g/g, protein ≥1000 mg/m²/day, or usually dipstick 3+ to 4+."],
          ["Nephrotic syndrome","Nephrotic-range proteinuria plus hypoalbuminemia, usually with edema","Nephrotic-range proteinuria plus albumin <3.0 g/dL, or edema when albumin is unavailable."],
          ["Complete remission","Disease-specific; proteinuria normal or near normal","First-morning uPCR ≤0.2 g/g or negative/trace dipstick on at least 3 consecutive days."],
          ["Relapse","Reappearance of clinically important proteinuria after remission","Recurrence of nephrotic-range proteinuria after complete remission."]
        ]))}
        ${callout("Do not confuse","Heavy proteinuria can occur without profound hypoalbuminemia or edema, particularly in adaptive secondary FSGS and other proteinuric CKD. Conversely, timing or collection error can place a classic syndrome slightly below a traditional cutoff.","warning")}
        ${section("Cause map",table(["Category","Examples","Clues"],[
          ["Primary podocytopathies","Minimal change disease; primary FSGS","Abrupt edema; MCD often has bland sediment and preserved function; primary FSGS may have hypertension or reduced eGFR."],
          ["Immune-complex or antibody-mediated","Membranous nephropathy, lupus nephritis, infection-related GN, selected MPGN patterns","Hematuria, low complement, or systemic features may coexist; MN has high thrombotic risk."],
          ["Metabolic or deposition","DKD, amyloidosis, monoclonal immunoglobulin disease","Long-standing diabetes, neuropathy/retinopathy, cardiomyopathy, hepatosplenomegaly, or monoclonal clues."],
          ["Adaptive or secondary FSGS","Obesity, reduced nephron mass, reflux, sickle cell disease","Often heavy proteinuria without profound hypoalbuminemia; treat the driver rather than use routine immunosuppression."],
          ["Infection, drug, malignancy","HBV/HCV/HIV; NSAIDs; targeted therapies; solid tumors; lymphoma","Exposure, temporal relationship, systemic features, or age-specific cancer clues."],
          ["Genetic or congenital","Podocyte and basement-membrane disorders","Infancy, syndromic findings, family history, steroid resistance, or consanguinity."]
        ]))}
        ${section("Age-oriented exam approach",cards([
          {icon:"Child",title:"Typical young child",body:"<p>Most are steroid sensitive and MCD is the usual pathology. Immediate biopsy is generally unnecessary when the course is typical.</p>"},
          {icon:"<1",title:"Infant",body:"<p>Congenital, genetic, and infectious causes are central. Urgent pediatric nephrology assessment is required.</p>"},
          {icon:"Adult",title:"New adult syndrome",body:"<p>Biopsy is commonly required unless a convincing non-biopsy diagnosis is established, such as a typical diabetic phenotype or selected biomarker-supported membranous nephropathy.</p>"},
          {icon:"Older",title:"Older adult",body:"<p>Membranous nephropathy, amyloidosis, monoclonal gammopathy, malignancy, and drug-related disease deserve particular attention.</p>"}
        ]))}
        ${routeLinks([["ns-pathophysiology","Understand edema and thrombosis"],["ns-investigation","Build the work-up"],["nephrotic-lab","Use the nephrotic lab"]])}
      `
    ),

    "ns-pathophysiology":M(
      "Nephrotic Pathophysiology",
      "Chapter 7 · from barrier injury to systemic disease",
      "Severe protein leakage alters oncotic pressure, renal sodium handling, coagulation, immune defense, lipoprotein metabolism, carrier proteins, and tubular health. Edema is often a mixture of underfill and overfill physiology.",
      ["Underfill + overfill","Loss of anticoagulants","Lipiduria"],
      () => `
        ${section("Mechanistic cascade",flow([
          {title:"Filtration-barrier injury",body:"Podocyte, slit-diaphragm, GBM, or endothelial injury increases albumin and protein passage."},
          {title:"Massive urinary protein loss",body:"Albumin plus anticoagulant, immunologic, endocrine, and carrier proteins are lost."},
          {title:"Hypoalbuminemia and sodium retention",body:"Reduced oncotic pressure may contribute, while intrinsic renal sodium retention often sustains edema."},
          {title:"Systemic consequences",body:"Edema, dyslipidemia, thrombosis, infection susceptibility, and altered drug/protein binding."},
          {title:"Kidney consequences",body:"Tubular protein toxicity, inflammation, AKI risk, and progression of the underlying glomerular disease."}
        ]))}
        ${section("Underfill versus overfill",table(["Mechanism","Sequence","Clinical implication"],[
          ["Underfill","Severe hypoalbuminemia lowers oncotic pressure → effective circulating volume may fall → RAAS/ADH activation","A patient can be massively edematous but intravascularly depleted; aggressive diuresis may cause hypotension or AKI."],
          ["Overfill","Primary renal sodium retention expands extracellular volume","Many patients are not truly depleted and respond to sodium restriction plus adequately dosed diuretics."],
          ["Mixed state","Both mechanisms coexist and may change during treatment","Assess pulse, BP, perfusion, JVP, weight, urine output, creatinine, and treatment response rather than assuming one model."]
        ]))}
        ${section("Why dyslipidemia and thrombosis occur",bullets([
          "Hepatic lipoprotein synthesis increases while lipid catabolism and clearance fall, producing high cholesterol, LDL, and triglycerides; oval fat bodies and fatty casts may appear in urine.",
          "Urinary loss of antithrombin and other anticoagulant proteins combines with increased procoagulant factors, platelet activation, hemoconcentration, inflammation, and immobility.",
          "Thrombotic risk is not equal across diseases. Membranous nephropathy is particularly high risk, and risk rises with severe hypoalbuminemia and additional patient factors.",
          "Filtered proteins injure tubules and can contribute to inflammation, AKI, and long-term CKD progression."
        ]))}
        ${callout("Calcium pearl","Low total calcium often reflects reduced albumin-bound calcium. Ionized calcium may be normal; do not diagnose symptomatic hypocalcemia from total calcium alone.","purple")}
        ${routeLinks([["ns-presentation","Recognize complications"],["ns-edema","Manage edema safely"],["ns-thrombosis","Assess thrombotic risk"]])}
      `
    ),

    "ns-presentation":M(
      "Nephrotic Presentation & Complications",
      "Chapter 7 · clinical recognition",
      "Edema and frothy urine are common, but neither is specific. The urgent task is to identify respiratory compromise, infection, AKI, thrombosis, severe volume disturbance, and a mixed nephritic-nephrotic pattern.",
      ["Anasarca","VTE and renal vein thrombosis","AKI"],
      () => `
        ${section("Clinical presentation",table(["Feature","Typical pattern","Important caution"],[
          ["Edema","Periorbital swelling in children; dependent leg edema in adults; genital edema, ascites, or pleural effusions can occur","Edema can coexist with hypovolemia. Rapid weight gain or respiratory compromise is urgent."],
          ["Urine","Frothy urine; lipiduria may be present","Foam is nonspecific and requires quantitative testing."],
          ["Blood pressure","Normal, high, or occasionally low depending on cause and volume state","Marked hypertension, active sediment, or rapid eGFR decline suggests a nephritic or mixed syndrome."],
          ["Kidney function","May be preserved early","AKI may result from the primary disease, hypovolemia, sepsis, renal vein thrombosis, nephrotoxins, or excessive diuresis."],
          ["Systemic clues","Rash, arthritis, neuropathy, diabetes, infection, cancer symptoms, or drug exposure","A purely renal presentation does not exclude secondary disease."]
        ]))}
        ${section("Major complications",table(["Complication","Clues","Immediate response"],[
          ["Venous thromboembolism","DVT, PE, renal vein thrombosis; sudden flank pain, hematuria, dyspnea, unilateral leg swelling","Urgent imaging and therapeutic anticoagulation when confirmed unless contraindicated."],
          ["Arterial thrombosis","Stroke, myocardial infarction, or limb ischemia","Emergency arterial-event management plus treatment of the nephrotic state."],
          ["Infection","Loss of immunoglobulins/complement, edema, skin breakdown, and immunosuppression","Prompt cultures and treatment; vaccination and pre-immunosuppression screening are preventive priorities."],
          ["AKI","Hypovolemia, sepsis, interstitial edema, renal vein thrombosis, nephrotoxins, or active GN","Reassess volume and medications; investigate the cause instead of labeling it progression."],
          ["Endocrine and nutritional effects","Loss of vitamin D-binding, transferrin, thyroid-binding, and other carrier proteins","Interpret total hormone/mineral values carefully and replace only clinically relevant deficits."],
          ["Cardiovascular risk","Dyslipidemia, hypertension, CKD, inflammation","Treat persistent risk according to age, kidney function, and global CV risk."]
        ]))}
        ${callout("Emergency red flags","Dyspnea or pleuritic pain, unilateral leg swelling, sudden flank pain or gross hematuria, fever with abdominal pain, oliguria, hypotension, pulmonary edema, severe hypertension, or a rapid creatinine rise requires urgent assessment.","danger")}
        ${section("Mixed syndrome warning",callout("Active sediment + hypertension + reduced GFR + heavy proteinuria","This pattern suggests severe inflammatory glomerular disease such as lupus nephritis, infection-related GN, MPGN, severe IgA nephropathy, or crescentic GN rather than a simple podocytopathy.","warning"))}
        ${routeLinks([["ns-investigation","Investigate the syndrome"],["nph-core","Compare nephritic syndrome"],["clinical-cases","Work through emergencies"]])}
      `
    ),

    "ns-investigation":M(
      "Nephrotic Investigation, Biopsy & Genetics",
      "Chapter 7 · identify the cause",
      "Confirm the syndrome, characterize the urine sediment, search for systemic and monoclonal causes, assess complications before immunosuppression, and use biopsy or genetic testing when the result will change care.",
      ["PCR/uPCR and albumin","Anti-PLA2R and monoclonal tests","Biopsy by age and phenotype"],
      () => `
        ${section("Core diagnostic sequence",numbered([
          "Confirm and quantify proteinuria with a reliable protein-creatinine ratio or timed collection when precision will change a major decision.",
          "Confirm hypoalbuminemia and assess creatinine/eGFR, electrolytes, lipids, and complete blood count.",
          "Examine fresh urine sediment for hematuria, casts, lipiduria, and inflammatory clues.",
          "Identify a likely primary, systemic, infectious, malignant, drug-related, or genetic cause.",
          "Assess severe edema or hypovolemia, AKI, infection, and venous or arterial thrombosis.",
          "Decide whether kidney biopsy and/or genetic testing will alter diagnosis, prognosis, or treatment."
        ]))}
        ${section("Cause-directed testing",table(["Domain","Useful assessment"],[
          ["Diabetes","Glucose/HbA1c, duration, retinopathy/neuropathy, and whether the course is typical or abrupt."],
          ["Immune-complex disease","ANA, anti-dsDNA, and C3/C4 when lupus or another immune-complex process is suspected."],
          ["Infection","HBV, HCV, HIV, and exposure-specific endemic testing."],
          ["Monoclonal disease","Serum and urine electrophoresis with immunofixation plus serum free light chains."],
          ["Membranous nephropathy","Anti-PLA2R in a compatible phenotype, interpreted with kidney function and diagnostic uncertainty."],
          ["Structure or thrombosis","Ultrasound for size/obstruction; targeted Doppler, CT, or MR when renal vein thrombosis is suspected."],
          ["Treatment safety","TB and viral screening, vaccines, pregnancy status, reproductive plans, and separate bleeding/thrombotic risk assessment."]
        ]))}
        ${section("Biopsy and genetics by patient group",table(["Patient group","When biopsy or genetics is important","When initial biopsy may be deferred"],[
          ["Adults","Most new unexplained nephrotic syndrome, particularly when immunosuppression or monoclonal/systemic diagnosis depends on tissue","A secure established cause, such as a typical diabetic phenotype or selected biomarker-supported membranous nephropathy."],
          ["Children 1-18 years","Steroid resistance, atypical course, impaired function, systemic or syndromic features, family history","Typical first presentation: response to initial glucocorticoids predicts prognosis better than immediate biopsy."],
          ["Infants <1 year","Early specialist genetic and congenital evaluation; biopsy individualized","Never treat as routine childhood steroid-sensitive syndrome without specialist assessment."]
        ]))}
        ${callout("Procedural correction","A nephrotoxic medicine is not itself a biopsy contraindication. Contraindications are procedural, such as uncontrolled hypertension, uncorrectable bleeding risk, or unsafe anatomy. The decision depends on whether tissue will change care.","warning")}
        ${routeLinks([["kidney-biopsy","Review biopsy principles"],["ns-pediatric-adult","Compare age-specific pathways"],["ns-edema","Move to supportive care"]])}
      `
    ),

    "ns-edema":M(
      "Nephrotic Edema & Supportive Management",
      "Chapter 7 · volume-aware treatment",
      "Treat the cause and protect the kidney while managing sodium retention. Loop diuretics and moderate sodium restriction are first-line, but treatment must be adjusted to effective circulating volume and kidney response.",
      ["Loop first-line","Sequential nephron blockade","Albumin is selective"],
      () => `
        ${section("Supportive care for all patients",table(["Goal","Practical approach"],[
          ["Treat the cause","Use pathology, serology, genetics, and comorbidity to guide disease-specific therapy; treat infection, stop causal drugs, and manage diabetes, malignancy, or systemic disease."],
          ["Reduce sodium retention","Moderate sodium restriction, generally around 1.5-2 g/day in adults, individualized to age and nutrition."],
          ["Control proteinuria and BP","ACE inhibitor or ARB when indicated and tolerated; never combine. Add CKD-protective therapy according to the underlying disease."],
          ["Avoid kidney insults","Avoid NSAIDs and unnecessary contrast, adjust doses, prevent dehydration, and review nephrotoxins during illness."],
          ["Nutrition","Adequate energy and normal—not high—protein intake. Fluid restriction only for a specific indication such as significant hyponatremia."],
          ["Monitor objectively","Daily weight during active edema, BP, urine output, edema, creatinine/electrolytes, albumin, and quantified proteinuria."]
        ]))}
        ${section("Stepwise edema algorithm",flow([
          {title:"1. Reassess volume and urgency",body:"Check BP, pulse, perfusion, JVP, respiratory status, weight, urine output, creatinine, and sodium."},
          {title:"2. Restrict sodium",body:"Use moderate sodium restriction. Restrict fluid only for a clear indication such as significant hyponatremia or severe overload."},
          {title:"3. Start a loop diuretic",body:"Oral loop therapy may require higher or twice-daily dosing because nephrotic edema can be resistant."},
          {title:"4. Escalate rationally",body:"Confirm adherence and sodium intake, use IV loop therapy if gut edema or severe resistance is present, and add a thiazide-like agent for sequential blockade."},
          {title:"5. Reserve albumin or ultrafiltration",body:"Use IV albumin plus loop only in selected severe hypoalbuminemic, diuretic-resistant, or intravascularly depleted cases. Dialysis/ultrafiltration is uncommon but may be needed with AKI."}
        ]))}
        ${section("Troubleshooting diuresis",table(["Problem","Response"],[
          ["Hypotension, tachycardia, rising creatinine, poor perfusion","Stop aggressive diuresis, reassess effective volume, and search for sepsis, bleeding, or thrombosis."],
          ["Hypokalemia or metabolic alkalosis","Adjust loop/thiazide dosing, replace potassium, and use potassium-sparing strategies only with close kidney and potassium monitoring."],
          ["No response to oral diuretic","Check sodium intake, adherence, drug absorption, and dose; consider IV therapy and sequential blockade."],
          ["Pulmonary edema or respiratory compromise","Urgent hospital care, respiratory support, and IV therapy; dialysis if refractory."]
        ]))}
        ${callout("Albumin is not routine","Infused albumin is often rapidly lost in urine, its benefit is usually transient, and it can worsen pulmonary edema. It is not a prerequisite before every diuretic dose.","danger")}
        ${routeLinks([["nephrotic-lab","Practice volume assessment"],["ns-thrombosis","Prevent complications"],["ns-pediatric-adult","Choose disease-specific care"]])}
      `
    ),

    "ns-thrombosis":M(
      "Thrombosis, Infection & Dyslipidemia",
      "Chapter 7 · risk prevention",
      "Confirmed thrombosis requires treatment, but prophylactic anticoagulation is not universal. Infection prevention and lipid management should match age, disease activity, immunosuppression, kidney function, and overall cardiovascular risk.",
      ["MN = higher VTE risk","Balance bleeding","Vaccinate before immunosuppression"],
      () => `
        ${section("Thromboembolism",table(["Situation","Current principle"],[
          ["Confirmed DVT, PE, renal vein, or arterial thrombosis","Use full therapeutic anticoagulation unless contraindicated; duration is individualized and commonly extends through the active nephrotic state."],
          ["No thrombosis","Do not anticoagulate every patient. Consider prophylaxis only when estimated thrombotic risk exceeds patient-specific major bleeding risk."],
          ["High-risk pattern","Membranous nephropathy, severe hypoalbuminemia, very heavy proteinuria, prior VTE, immobility, obesity, heart failure, surgery, thrombophilia, or cancer increase concern."],
          ["Drug selection","Warfarin and heparins have the longest experience. Severe proteinuria/hypoalbuminemia may alter DOAC pharmacokinetics; selection requires specialist and kidney-function review."],
          ["Aspirin","Not a substitute for anticoagulation to prevent VTE and not routinely prescribed solely because nephrotic syndrome is present."]
        ]))}
        ${section("Infection prevention",bullets([
          "Give pneumococcal and annual influenza vaccination according to age and local schedules; update other indicated non-live vaccines before immunosuppression when feasible.",
          "Avoid live vaccines during significant immunosuppression and coordinate timing with the treating team.",
          "Screen for TB, HBV, HCV, HIV, and relevant regional infections when the planned regimen or exposure makes this important.",
          "Consider Pneumocystis prophylaxis with high-dose glucocorticoids or selected combination regimens according to protocol.",
          "Fever, abdominal pain, cellulitis, or respiratory symptoms require prompt cultures and evaluation."
        ]))}
        ${section("Dyslipidemia and carrier-protein effects",cards([
          {icon:"LDL",title:"Lipids",body:"<p>Severe dyslipidemia may improve with remission. Persistent adult disease is treated according to CKD and cardiovascular risk; statins are not automatic for every child with transient steroid-sensitive disease.</p>"},
          {icon:"Ca",title:"Calcium",body:"<p>Low total calcium can simply reflect low albumin-bound calcium. Use symptoms and ionized calcium when clinically relevant.</p>"},
          {icon:"T4",title:"Hormone binding",body:"<p>Loss of thyroid- and vitamin-binding proteins can lower total measured values without the same change in active free hormone.</p>"},
          {icon:"Drug",title:"Protein binding",body:"<p>Severe hypoalbuminemia can change free drug fractions and pharmacokinetics; medication choice and monitoring may need adjustment.</p>"}
        ]))}
        ${callout("Safety rule","Assess thrombotic risk and bleeding risk separately. Heavy proteinuria by itself is not an automatic indication for anticoagulation.","warning")}
        ${routeLinks([["nephrotic-lab","Estimate the pattern"],["ns-presentation","Review red flags"],["ns-pediatric-adult","Study disease-specific pathways"]])}
      `
    ),

    "ns-pediatric-adult":M(
      "Pediatric & Adult Nephrotic Pathways",
      "Chapter 7 · response and pathology guide therapy",
      "In a typical child, glucocorticoid response predicts prognosis and initial biopsy is often unnecessary. In adults, biopsy and etiology usually direct therapy. Immunosuppression is never universal.",
      ["KDIGO 2025 children","Adult biopsy","Cause-specific treatment"],
      () => `
        ${section("Pediatric definitions",table(["Term","Definition or implication"],[
          ["Steroid-sensitive NS","Complete remission within 4 weeks of standard-dose prednisone/prednisolone."],
          ["Steroid-resistant NS","No complete remission within 4 weeks; a confirmation period to 6 weeks may clarify late response while evaluation proceeds."],
          ["Infrequently relapsing","Fewer than 2 relapses in the first 6 months after initial remission or fewer than 3 in a later 12-month period."],
          ["Frequently relapsing or steroid dependent","Relapse frequency or relationship to steroid taper/withdrawal guides steroid-sparing therapy."]
        ]))}
        ${section("Pediatric pathway",numbered([
          "Assess a typical child aged 1-18 years clinically; immediate biopsy is usually unnecessary.",
          "Use a current weight/body-surface-area glucocorticoid protocol under pediatric supervision; do not copy an old fixed regimen.",
          "Use response to the initial course and relapse pattern to define prognosis and the need for steroid-sparing therapy.",
          "For steroid resistance, confirm adherence, evaluate with biopsy and genetic testing when indicated, and use specialist cause-directed treatment.",
          "Refer infants under 1 year and children with syndromic features or strong family history early for genetic and specialist assessment."
        ]))}
        ${section("Adult disease-specific overview",table(["Underlying lesion","General treatment direction"],[
          ["Minimal change disease","Glucocorticoid-based induction in most adults; alternatives for contraindication, relapse, dependence, or toxicity."],
          ["Primary FSGS","Immunosuppression only for a convincing primary nephrotic clinicopathologic phenotype; secondary/adaptive or genetic FSGS receives supportive and driver-directed care."],
          ["Membranous nephropathy","Risk-stratified therapy using anti-PLA2R, proteinuria, kidney function, and complications; rituximab, cyclophosphamide/glucocorticoid, or CNI strategies in selected patients."],
          ["Lupus nephritis","Class- and activity-based combination therapy plus supportive care; nephrotic syndrome alone does not define the regimen."],
          ["Typical DKD","Layered glycemic, BP, RAS, SGLT2, and cardiorenal care; no immunosuppression."],
          ["Amyloid or monoclonal disease","Treat the precursor protein, clone, or inflammatory driver with multidisciplinary care."],
          ["Infection or drug associated","Eradicate infection or stop the offending drug; empirical immunosuppression may be harmful."]
        ]))}
        ${callout("Essential distinction","Nephrotic syndrome describes the severity and complications of protein loss. The biopsy or etiology determines which disease-specific treatment is appropriate.","success")}
        ${section("Urgent referral",bullets([
          "New adult nephrotic syndrome or any child with atypical features.",
          "Rapidly falling eGFR, severe hypertension, active sediment, or suspected systemic disease.",
          "Suspected renal vein thrombosis, DVT/PE, sepsis, or severe refractory edema.",
          "Steroid resistance, frequent relapse, steroid dependence, or major treatment toxicity.",
          "Pregnancy, congenital onset, suspected genetic disease, or monoclonal gammopathy."
        ]))}
        ${routeLinks([["gn-mcd-fsgs","Review MCD and FSGS"],["gn-membranous","Review membranous nephropathy"],["flashcards","Revise nephrotic syndrome"]])}
      `
    ),

    "nph-core":M(
      "Nephritic Syndrome: Core Phenotype",
      "Chapter 8 · inflammatory glomerular injury",
      "Nephritic syndrome results from inflammatory capillary-wall injury. Red cells and protein cross the barrier while filtration falls and sodium is retained, producing hematuria, active sediment, oliguria, edema, hypertension, and AKI in variable combinations.",
      ["RBC casts","Reduced GFR","Sodium retention"],
      () => `
        ${section("Core phenotype",table(["Feature","Typical finding","Clinical meaning"],[
          ["Hematuria","Microscopic or visible; tea, cola, or smoky brown urine","Glomerular erythrocyte leakage; brown color reflects altered blood during tubular transit."],
          ["Active sediment","Dysmorphic RBCs, acanthocytes, and/or RBC casts","Strongly supports glomerular bleeding. RBC casts are highly specific but insensitive."],
          ["Proteinuria","Usually subnephrotic but may be nephrotic range","Heavy protein does not exclude nephritic disease; mixed syndromes are important."],
          ["Reduced GFR","Rising creatinine, oliguria, or anuria","Inflammatory capillary obstruction and hemodynamic changes reduce filtration."],
          ["Sodium and water retention","Periorbital/dependent edema, hypertension, pulmonary congestion","Volume expansion is common and may become an emergency."]
        ]))}
        ${section("Mechanistic cascade",flow([
          {title:"Immune or inflammatory trigger",body:"Immune complexes, in-situ antibodies, complement dysregulation, or pauci-immune small-vessel vasculitis."},
          {title:"Capillary injury",body:"Endothelial/mesangial proliferation, leukocyte influx, GBM disruption, or necrosis."},
          {title:"Urinary leakage",body:"RBCs and protein cross the barrier; casts form within tubules."},
          {title:"Falling filtration",body:"Capillary-lumen narrowing, vasoconstriction, and reduced ultrafiltration lower GFR."},
          {title:"Clinical syndrome",body:"Oliguria, salt/water retention, edema, hypertension, hyperkalemia, and azotemia."}
        ]))}
        ${section("Nephritic versus nephrotic",table(["Feature","Nephritic-predominant","Nephrotic-predominant"],[
          ["Primary lesion","Inflammatory capillary-wall injury","Podocyte/barrier dysfunction with marked protein leak."],
          ["Urine","Hematuria, dysmorphic RBCs, RBC casts","Heavy proteinuria, lipiduria, fatty casts; sediment may be bland."],
          ["Proteinuria","Often <3.5 g/day but can be heavier","Typically nephrotic range."],
          ["BP and GFR","Hypertension and AKI are common","GFR may initially be preserved; thrombosis and severe edema are prominent."],
          ["Overlap","Lupus, MPGN, infection-related, IgA, and crescentic disease can be mixed","The same diseases may have a nephrotic-dominant presentation."]
        ]))}
        ${callout("Exam pearl","Visible brown urine with edema and hypertension is classic, but nephritic syndrome may present only as microscopic hematuria, proteinuria, and a creatinine rise.","warning")}
        ${routeLinks([["nph-causes","Classify causes"],["nph-investigation","Build the diagnostic algorithm"],["nephritic-lab","Use the nephritic lab"]])}
      `
    ),

    "nph-causes":M(
      "Nephritic Causes, Complement & Timing",
      "Chapter 8 · mechanism-based differential",
      "Complement pattern, infection timing, systemic manifestations, and tempo rapidly narrow the differential. Normal complement does not mean benign disease, and low complement is not specific for post-streptococcal GN.",
      ["Low C3 vs low C3/C4","Synpharyngitic vs latent","ANCA and anti-GBM"],
      () => `
        ${section("Mechanistic groups",table(["Group","Important causes","High-yield clues"],[
          ["Infection-related immune-complex GN","PSGN, staphylococcal GN, endocarditis, shunt infection, HBV/HCV","Recent or ongoing infection, low complement, cultures/serology; adults may have active infection at presentation."],
          ["IgA-mediated disease","IgA nephropathy and IgA vasculitis","Hematuria during or within days of infection; purpura, abdominal pain, and arthralgia suggest IgA vasculitis."],
          ["Lupus and immune-complex disease","Lupus nephritis, cryoglobulinemic GN, MPGN patterns","Systemic features, low C3/C4, ANA/anti-dsDNA, or cryoglobulins."],
          ["Pauci-immune crescentic GN","GPA, MPA, renal-limited AAV","Rapid creatinine rise, ENT/lung/skin/nerve findings, MPO- or PR3-ANCA."],
          ["Anti-GBM disease","Renal-limited or pulmonary-renal Goodpasture phenotype","Rapid kidney failure, RBC casts, alveolar hemorrhage, anti-GBM antibody."],
          ["Complement-mediated disease","C3 glomerulopathy and selected infection-triggered complement disorders","C3-dominant deposits, persistent hypocomplementemia, recurrent/progressive disease."],
          ["Hereditary mimics","Alport spectrum and thin-GBM lesions","Persistent familial hematuria with hearing or ocular features; usually not an acute inflammatory syndrome."]
        ]))}
        ${section("Complement matrix",table(["Pattern","Important possibilities","Next step"],[
          ["Low C3; C4 relatively preserved","PSGN/infection-related GN, C3 glomerulopathy, selected MPGN patterns","Search for infection, trend C3 recovery, and biopsy if the course is atypical or low C3 persists."],
          ["Low C3 and low C4","Lupus nephritis, cryoglobulinemic GN, endocarditis-associated GN, other immune-complex disease","ANA/anti-dsDNA, cryoglobulins, viral tests, cultures, and systemic evaluation."],
          ["Normal complement","IgA disease, ANCA-associated GN, anti-GBM disease, hereditary hematuria, and several other disorders","Use timing, systemic clues, ANCA, anti-GBM antibodies, and biopsy when indicated."]
        ]))}
        ${section("Timing and systemic clues",cards([
          {icon:"Now",title:"Synpharyngitic",body:"<p>Hematuria during or within days of a mucosal infection strongly suggests IgA nephropathy.</p>"},
          {icon:"1-3w",title:"Latent interval",body:"<p>Nephritic syndrome 1-3 weeks after pharyngitis or several weeks after impetigo supports PSGN.</p>"},
          {icon:"Active",title:"Ongoing infection",body:"<p>In an older adult, think staphylococcal infection-related GN, endocarditis, or a deep-seated infected source.</p>"},
          {icon:"Lung",title:"Pulmonary-renal",body:"<p>Hemoptysis, hypoxemia, falling hemoglobin, or diffuse opacities with GN suggests anti-GBM disease or AAV and is an emergency.</p>"}
        ]))}
        ${routeLinks([["nph-investigation","Order focused tests"],["nph-psgn","Study PSGN"],["nph-rpgn","Recognize RPGN"]])}
      `
    ),

    "nph-investigation":M(
      "Nephritic Investigation & Biopsy Algorithm",
      "Chapter 8 · stabilize, classify, confirm",
      "Use a fresh urine specimen, quantify protein, trend kidney function, and order complement and serology according to phenotype. Rapidly progressive disease justifies a broad urgent panel and early biopsy without delaying life-saving treatment.",
      ["Fresh microscopy","Focused serology","Biopsy for severity and cause"],
      () => `
        ${section("Initial investigations",table(["Test","What to seek","Interpretation caution"],[
          ["Dipstick and microscopy","Blood, protein, dysmorphic RBCs/acanthocytes, RBC casts; WBC or granular casts may coexist","Dipstick also detects hemoglobin and myoglobin. Absence of casts does not exclude GN."],
          ["Protein quantification","Spot ACR/PCR or timed collection","Nephritic disease may be nephrotic range; quantify rather than relying on dipstick."],
          ["Creatinine/eGFR/urea","Severity and trend","A single value cannot establish tempo; compare with baseline and repeat promptly."],
          ["Electrolytes and acid-base","Hyperkalemia, acidosis, dilutional hyponatremia","Severity directs emergency treatment and dialysis decisions."],
          ["CBC and blood film","Anemia, infection, thrombocytopenia, hemolysis","Thrombocytopenia and schistocytes suggest thrombotic microangiopathy."],
          ["Albumin, lipids, inflammatory markers","Mixed syndrome or systemic inflammation/infection","Inflammatory markers are nonspecific and cannot classify GN."],
          ["Ultrasound","Kidney size, anatomy, obstruction, biopsy planning","A normal scan does not exclude GN."]
        ]))}
        ${section("Diagnostic algorithm",flow([
          {title:"1. Confirm glomerular pattern",body:"Hematuria plus proteinuria plus dysmorphic RBCs/RBC casts, with BP, edema, and kidney-function assessment."},
          {title:"2. Stabilize emergencies",body:"Treat pulmonary edema, severe hypertension, hyperkalemia, acidosis, sepsis, and uremic complications."},
          {title:"3. Determine tempo",body:"Is the process acute and recovering, recurrent, or rapidly progressive over days to weeks?"},
          {title:"4. Order focused tests",body:"C3/C4, infection studies, ANA/anti-dsDNA, ANCA, anti-GBM, and other tests guided by history."},
          {title:"5. Biopsy when it changes urgent care",body:"Especially for rapid decline, atypical complement course, systemic disease, heavy proteinuria, or diagnostic uncertainty."}
        ]))}
        ${section("Biopsy: urgent versus deferrable",table(["Strongly consider or urgent","May defer initially"],[
          ["Rapidly rising creatinine or suspected RPGN","Typical recovering child with PSGN, low C3, and improving kidney function."],
          ["Pulmonary-renal syndrome or positive ANCA/anti-GBM when tissue informs prognosis","Mild self-limited syndrome with a secure diagnosis and close follow-up."],
          ["Persistent/severe AKI, nephrotic-range proteinuria, unclear cause","Temporary deferral for uncontrolled hypertension, bleeding risk, or unstable condition."],
          ["Persistently low complement, recurrent disease, lupus, monoclonal disease, or suspected C3G","—"]
        ]))}
        ${callout("ANCA update","When the phenotype is compatible with small-vessel vasculitis and MPO- or PR3-ANCA is positive, waiting for biopsy should not delay immunosuppressive treatment in a rapidly deteriorating patient.","danger")}
        ${routeLinks([["gn-biopsy","Review LM/IF/EM patterns"],["nph-rpgn","Open the emergency pathway"],["nephritic-lab","Practice the differential"]])}
      `
    ),

    "nph-psgn":M(
      "Acute Post-Streptococcal GN",
      "Chapter 8 · classic nephritic syndrome",
      "PSGN is an immune-mediated complication of nephritogenic group A Streptococcus. It is classic in children, but adults may have more severe AKI and a higher risk of residual impairment.",
      ["Latent interval","Low C3","Subepithelial humps"],
      () => `
        ${section("Classic pattern",table(["Aspect","High-yield detail"],[
          ["Latency","Usually 1-3 weeks after streptococcal pharyngitis and several weeks after impetigo; exact timing varies."],
          ["Presentation","Edema, hypertension, dark urine, oliguria, and AKI, ranging from asymptomatic urinary findings to severe overload."],
          ["Urine","Hematuria, dysmorphic RBCs/RBC casts, and variable proteinuria; nephrotic-range proteinuria can occur."],
          ["Blood","Low C3 is typical; creatinine may rise; ASO and/or anti-DNase B support recent infection."],
          ["Pathology","Diffuse endocapillary proliferative/exudative GN, granular deposits, and possible subepithelial humps."],
          ["Prognosis","More than 90% of children recover fully; adults have a higher risk of residual kidney impairment."]
        ]))}
        ${section("When the course is atypical",bullets([
          "No convincing evidence of preceding streptococcal infection and another diagnosis remains plausible.",
          "Complement is normal from the start despite a PSGN-like phenotype, or C3 fails to recover within the expected weeks.",
          "Kidney function continues to worsen, oliguria persists, or dialysis is required without improvement.",
          "Nephrotic-range proteinuria persists, systemic features appear, or urinary abnormalities do not resolve as expected.",
          "Episodes recur; classic PSGN recurrence is uncommon and should prompt reconsideration."
        ]))}
        ${section("Complement follow-up",callout("C3 commonly returns toward normal within about 6-8 weeks","Persistent hypocomplementemia should trigger evaluation for ongoing infection-related, immune-complex, or complement-mediated disease rather than automatic acceptance of PSGN.","warning"))}
        ${section("Treatment principle",cards([
          {icon:"Loop",title:"Supportive care",body:"<p>Monitor BP, weight, respiratory status, urine output, creatinine, potassium, and bicarbonate. Use sodium restriction and loop diuretics for congestion.</p>"},
          {icon:"Pen",title:"Eradicate residual strep",body:"<p>Use appropriate antibiotic therapy to reduce transmission and clear remaining infection. Antibiotics do not reverse established immune-mediated GN.</p>"},
          {icon:"No",title:"No routine steroids",body:"<p>Uncomplicated PSGN is managed supportively. Immunosuppression is reserved for another defined disease or exceptional biopsy-supported scenario.</p>"},
          {icon:"FU",title:"Document recovery",body:"<p>Follow BP, urine, creatinine/eGFR, and complement until clear improvement.</p>"}
        ]))}
        ${routeLinks([["nph-management","Manage acute nephritic syndrome"],["gn-infection","Compare other infection-related GN"],["nph-mimics","Plan follow-up"]])}
      `
    ),

    "nph-management":M(
      "Acute Nephritic Management",
      "Chapter 8 · stabilize before etiology",
      "The immediate priorities are respiratory status, blood pressure, potassium, acid-base balance, infection, and urine output. Disease-specific immunosuppression follows the cause and may be harmful in uncontrolled infection.",
      ["Volume and BP","Hyperkalemia/acidosis","Dialysis indications"],
      () => `
        ${section("Practical management",table(["Goal","Management"],[
          ["Monitor severity","Frequent BP, weight, edema, respiratory status, urine output, creatinine, potassium, and bicarbonate; hospitalize with instability or significant AKI."],
          ["Control volume overload","Sodium restriction and a loop diuretic are first-line when congested. Fluid restriction is individualized for oliguria, hyponatremia, or severe overload."],
          ["Treat hypertension","Remove excess volume and add an appropriate antihypertensive. Temporarily avoid ACEi/ARB with active AKI, hyperkalemia, or major hemodynamic instability."],
          ["Treat infection","Eradicate remaining group A strep in PSGN and treat any active infection. Antibiotics do not reverse established immune GN."],
          ["Correct chemistry","Treat emergency hyperkalemia and severe acidosis immediately; adjust medicines and dietary potassium to the laboratory state."],
          ["Avoid nephrotoxins","Stop NSAIDs and unnecessary nephrotoxic drugs and adjust doses to current kidney function."],
          ["Use immunosuppression selectively","Not indicated for uncomplicated PSGN. Use disease-specific treatment for AAV, anti-GBM, lupus, and other defined disorders."]
        ]))}
        ${section("Kidney replacement therapy indications",cards([
          {icon:"Lung",title:"Refractory pulmonary edema",body:"<p>Dialysis is indicated when severe volume overload does not respond to medical therapy.</p>"},
          {icon:"K+",title:"Refractory hyperkalemia",body:"<p>Urgent medical stabilization comes first; dialysis is required when potassium remains dangerous.</p>"},
          {icon:"pH",title:"Severe metabolic acidosis",body:"<p>Use kidney replacement therapy when acidosis is severe and unresponsive to appropriate medical treatment.</p>"},
          {icon:"U",title:"Uremic complications",body:"<p>Encephalopathy, pericarditis, or clinically important uremic bleeding are classic indications.</p>"},
          {icon:"0",title:"Persistent severe oliguria/anuria",body:"<p>Dialysis may be required when progressive complications accumulate.</p>"}
        ]))}
        ${callout("Antibiotic correction","Antibiotics eliminate residual infection and reduce transmission. They do not reliably prevent or shorten the nephritic syndrome once immune injury is established.","warning")}
        ${callout("Pulmonary warning","Do not assume every diffuse opacity is fluid overload. Alveolar hemorrhage from anti-GBM disease or AAV can resemble edema and may occur without hemoptysis.","danger")}
        ${routeLinks([["nph-rpgn","Open the RPGN emergency page"],["nph-mimics","Review complications and mimics"],["clinical-cases","Apply acute management"]])}
      `
    ),

    "nph-rpgn":M(
      "RPGN & Pulmonary-Renal Syndromes",
      "Chapter 8 · nephrology emergency",
      "Rapidly progressive glomerulonephritis is rapid kidney-function loss over days to weeks, usually with an active sediment and often crescents. Delay can convert reversible inflammation into irreversible fibrosis.",
      ["Linear, granular, pauci-immune","Treat before biopsy when necessary","Alveolar hemorrhage may be occult"],
      () => `
        ${section("Three major immunopathologic patterns",table(["Pattern","Typical diseases","Treatment direction"],[
          ["Linear IgG","Anti-GBM disease","Urgent glucocorticoids plus cyclophosphamide and plasma exchange in appropriate patients; decisions depend on kidney and pulmonary severity."],
          ["Granular immune-complex","Lupus nephritis, infection-related GN, IgA disease, other immune-complex disorders","Treat the cause; immunosuppression is used for selected immune disease but may be harmful in uncontrolled infection."],
          ["Pauci-immune","ANCA-associated or ANCA-negative pauci-immune GN","Prompt induction with glucocorticoids plus rituximab or cyclophosphamide; avacopan may reduce glucocorticoid exposure in selected AAV."]
        ]))}
        ${section("Emergency sequence",numbered([
          "Send ANCA, anti-GBM antibodies, C3/C4, ANA/anti-dsDNA, infection studies, and other cause-directed tests immediately.",
          "Assess lungs with oxygenation and imaging; bronchoscopy may be needed when alveolar hemorrhage is uncertain.",
          "Arrange urgent kidney biopsy when safe, but do not delay life-saving treatment in a strongly supported rapidly progressive syndrome.",
          "Exclude or control active infection before escalating immunosuppression as far as the emergency permits.",
          "Provide dialysis, respiratory, critical-care, and apheresis support when indicated."
        ]))}
        ${section("Pulmonary-renal clues",cards([
          {icon:"Hb",title:"Falling hemoglobin",body:"<p>Can reveal diffuse alveolar hemorrhage even without visible hemoptysis.</p>"},
          {icon:"O₂",title:"Hypoxemia",body:"<p>Combined with diffuse infiltrates and GN, this requires urgent pulmonary-renal evaluation.</p>"},
          {icon:"ENT",title:"Systemic AAV clues",body:"<p>Sinusitis, otitis, nasal crusting, nodules, purpura, mononeuritis, and constitutional symptoms support vasculitis.</p>"},
          {icon:"GBM",title:"Anti-GBM clues",body:"<p>Severe RPGN with linear IgG and pulmonary hemorrhage is the classic pattern.</p>"}
        ]))}
        ${callout("Treatment warning","Plasma exchange is not universal for every nephritic syndrome. Its clearest role is anti-GBM disease, with selective use in severe ANCA-associated presentations according to current specialist guidance.","danger")}
        ${routeLinks([["gn-rpgn","Review crescentic GN in depth"],["gn-anca-antigbm","Compare AAV and anti-GBM"],["nephritic-lab","Practice emergency pattern recognition"]])}
      `
    ),

    "nph-mimics":M(
      "Nephritic Mimics, Follow-up & Corrections",
      "Chapter 8 · avoid diagnostic shortcuts",
      "Dark urine, AKI, hematuria, and proteinuria can arise from urologic bleeding, infection, interstitial disease, pigment injury, thrombotic microangiopathy, or malignant hypertension. Recovery must be documented rather than assumed.",
      ["UTI and stones","TMA and malignant HTN","Document complement recovery"],
      () => `
        ${section("Important mimics",table(["Condition","Why it resembles nephritic syndrome","Clue against primary GN"],[
          ["UTI or pyelonephritis","Hematuria, pyuria, fever, and AKI","Bacteriuria/culture and flank pain; RBC casts and marked dysmorphism are not typical."],
          ["Stone or urologic bleeding","Visible hematuria and pain","Clots, isomorphic RBCs, limited albuminuria, and an imaging source."],
          ["Thrombotic microangiopathy","AKI, hypertension, hematuria/proteinuria","Thrombocytopenia, hemolysis, and schistocytes."],
          ["Malignant hypertension","AKI, hematuria, and proteinuria","Severe BP with retinal or neurologic injury; it may cause, result from, or coexist with GN."],
          ["Acute interstitial nephritis","AKI, hematuria, proteinuria, WBC casts","Drug exposure, pyuria, eosinophilia, or hypersensitivity; RBC casts are less typical."],
          ["Rhabdomyolysis or hemoglobinuria","Dark urine and positive dipstick blood","Few or no RBCs on microscopy with high CK or hemolysis evidence."]
        ]))}
        ${section("Follow-up after presumed PSGN",bullets([
          "Recheck BP, urine, creatinine/eGFR, and complement until clear recovery.",
          "Gross hematuria and edema usually resolve before microscopic hematuria; mild urinary abnormalities can persist longer.",
          "Persistent hypertension, reduced eGFR, substantial proteinuria, or low complement requires reassessment and often biopsy.",
          "Adults require particularly careful follow-up because residual kidney dysfunction is more common.",
          "Recurrent visible hematuria suggests IgA disease or another chronic disorder more than classic PSGN."
        ]))}
        ${section("Legacy corrections",table(["Shortcut","Current interpretation"],[
          ["PSGN explains all nephritic syndrome","Age and setting matter; consider IgA disease, lupus, ongoing infection, AAV, anti-GBM, and complement disease."],
          ["Biopsy is rarely needed","Biopsy is central in RPGN, systemic disease, atypical complement, and severe or persistent disease."],
          ["ASO or culture confirms PSGN alone","They support recent infection; diagnosis remains clinicopathologic and anti-DNase B is often more useful after impetigo."],
          ["All patients need fixed bed rest and diet","Activity and sodium/fluid/potassium/protein restrictions are individualized to symptoms, urine output, electrolytes, and kidney function."],
          ["ACE inhibitors are routine in acute nephritis","They may worsen active AKI or hyperkalemia; acute BP therapy follows severity, volume, and renal function."],
          ["Steroids can be used broadly","Immunosuppression is disease specific and can be dangerous in uncontrolled infection."],
          ["Oliguria is mainly RBC tubular blockage","Capillary inflammation and intrarenal hemodynamic reduction in GFR are central; tubular obstruction may contribute."]
        ]))}
        ${callout("Exam trap","Proteinuria below 3.5 g/day is not required for nephritic syndrome. Inflammatory glomerular injury may produce mild, moderate, or nephrotic-range protein loss.","warning")}
        ${routeLinks([["hematuria-localization","Revisit glomerular vs urologic blood"],["nph-core","Return to the core syndrome"],["quiz","Test all chapters"]])}
      `
    ),

    "dkd-risk-lab":M(
      "DKD Risk & Atypicality Lab",
      "Interactive clinical reasoning",
      "Enter eGFR, UACR, diabetes type and clinical flags. The tool assigns G/A categories, gives a simplified KDIGO-style risk tier, and highlights features that should trigger evaluation for non-diabetic kidney disease.",
      ["G and A categories","Risk tier","Biopsy/referral flags"],
      () => `
        ${section("Stratify the pattern",`<div class="tool-panel" id="dkd-risk-tool"><div class="tool-controls">
          <label class="field"><span>eGFR (mL/min/1.73 m²)</span><input id="dkd-egfr" type="number" min="1" max="160" step="1" value="52"></label>
          <label class="field"><span>UACR (mg/g)</span><input id="dkd-uacr" type="number" min="0" max="10000" step="1" value="180"></label>
          <label class="field"><span>Diabetes type</span><select id="dkd-type"><option value="t2">Type 2</option><option value="t1">Type 1</option></select></label>
          <label class="field"><span>Diabetes duration</span><select id="dkd-duration"><option value="long">Long-standing / compatible</option><option value="short">Short duration</option></select></label>
          <label class="field"><span>Urine sediment</span><select id="dkd-sediment"><option value="bland">Bland</option><option value="active">Dysmorphic RBCs / RBC casts</option><option value="gross">Substantial unexplained hematuria</option></select></label>
          <label class="field"><span>Clinical trajectory</span><select id="dkd-trajectory"><option value="slow">Slow or stable</option><option value="rapid">Rapid/stepwise eGFR loss</option><option value="abrupt-nephrotic">Abrupt nephrotic syndrome</option></select></label>
          <label class="field"><span>Systemic clues</span><select id="dkd-systemic"><option value="none">None</option><option value="yes">Rash, vasculitis, infection, malignancy or monoclonal clue</option></select></label>
        </div><div class="tool-output" id="dkd-risk-output" aria-live="polite"></div></div>`)}
        ${callout("Scope","The risk tier is an educational simplification of the G/A heatmap. It does not replace a full CKD prognosis model, local referral criteria, or patient-specific prescribing.","warning")}
      `
    ),

    "nephrotic-lab":M(
      "Nephrotic Syndrome Lab",
      "Interactive syndrome and complication assessment",
      "Combine protein amount, serum albumin, edema, perfusion, kidney trajectory, and thrombotic clues. The output separates nephrotic-range proteinuria from full nephrotic syndrome and suggests the next clinical priorities.",
      ["Syndrome confirmation","Underfill vs overfill","VTE red flags"],
      () => `
        ${section("Build the clinical pattern",`<div class="tool-panel" id="nephrotic-tool"><div class="tool-controls">
          <label class="field"><span>Urine PCR (g/g)</span><input id="ns-pcr" type="number" min="0" max="30" step="0.1" value="5.2"></label>
          <label class="field"><span>Serum albumin (g/dL)</span><input id="ns-albumin" type="number" min="0.5" max="6" step="0.1" value="2.2"></label>
          <label class="field"><span>Edema</span><select id="ns-edema"><option value="yes">Present</option><option value="no">Absent</option></select></label>
          <label class="field"><span>Perfusion / effective volume</span><select id="ns-volume"><option value="congested">Congested, high JVP/BP</option><option value="stable">Stable perfusion</option><option value="depleted">Hypotension, tachycardia or poor perfusion</option></select></label>
          <label class="field"><span>Kidney trajectory</span><select id="ns-kidney"><option value="stable">Stable</option><option value="rising">Creatinine rising / oliguria</option></select></label>
          <label class="field"><span>Urine sediment</span><select id="ns-sediment"><option value="bland">Bland / lipiduria</option><option value="active">Dysmorphic RBCs or RBC casts</option></select></label>
          <label class="field"><span>Thrombotic clue</span><select id="ns-thrombosis"><option value="none">None</option><option value="risk">High-risk factors only</option><option value="symptoms">Dyspnea, unilateral leg swelling or sudden flank pain</option></select></label>
          <label class="field"><span>Likely disease context</span><select id="ns-context"><option value="unknown">Unknown</option><option value="mn">Membranous nephropathy</option><option value="dkd">Typical diabetic disease</option><option value="child">Typical child first episode</option></select></label>
        </div><div class="tool-output" id="nephrotic-output" aria-live="polite"></div></div>`)}
        ${callout("Safety","This tool supports pattern recognition only. Anticoagulation, albumin infusion, diuretic escalation, biopsy, and immunosuppression require patient-specific specialist assessment.","danger")}
      `
    ),

    "nephritic-lab":M(
      "Nephritic Differential Lab",
      "Interactive complement, timing and emergency reasoning",
      "Select infection timing, complement, serology, sediment, systemic clues, and kidney trajectory. The tool ranks diagnostic families and identifies pulmonary-renal or rapidly progressive emergencies.",
      ["Complement pattern","Timing clue","RPGN alert"],
      () => `
        ${section("Classify the inflammatory pattern",`<div class="tool-panel" id="nephritic-tool"><div class="tool-controls">
          <label class="field"><span>Infection timing</span><select id="nph-timing"><option value="none">No clear infection</option><option value="syn">During/within days of URI</option><option value="latent">1-3 weeks after pharyngitis / later after impetigo</option><option value="active">Ongoing bacterial infection/endocarditis</option></select></label>
          <label class="field"><span>Complement</span><select id="nph-comp"><option value="normal">Normal</option><option value="lowc3">Low C3, C4 preserved</option><option value="lowboth">Low C3 and C4</option><option value="unknown">Unknown</option></select></label>
          <label class="field"><span>Serology</span><select id="nph-serology"><option value="none">No result</option><option value="anca">PR3/MPO-ANCA positive</option><option value="antigbm">Anti-GBM positive</option><option value="lupus">ANA/anti-dsDNA supportive</option></select></label>
          <label class="field"><span>Urine sediment</span><select id="nph-sediment"><option value="glomerular">Dysmorphic RBCs / RBC casts</option><option value="nonspecific">No casts / uncertain</option><option value="clots">Clots / isomorphic RBCs</option></select></label>
          <label class="field"><span>Systemic clue</span><select id="nph-systemic"><option value="none">None</option><option value="pulmonary">Hemoptysis/hypoxemia/diffuse infiltrates</option><option value="purpura">Purpura, abdominal pain or arthralgia</option><option value="ent">ENT, lung nodules or neuropathy</option></select></label>
          <label class="field"><span>Kidney trajectory</span><select id="nph-trajectory"><option value="stable">Stable or improving</option><option value="aki">AKI but not rapidly progressive</option><option value="rapid">Rapid loss over days to weeks</option></select></label>
        </div><div class="tool-output" id="nephritic-output" aria-live="polite"></div></div>`)}
        ${callout("Emergency rule","Rapid creatinine rise with RBC casts, severe hypertension, pulmonary edema, hyperkalemia, or pulmonary symptoms requires urgent hospital and nephrology assessment.","danger")}
      `
    )
  });

  const newCases = [
    {title:"Annual screening finds silent DKD",tag:"Diabetic kidney disease",stem:"A 58-year-old with type 2 diabetes has no urinary symptoms. eGFR is 78 mL/min/1.73 m² and UACR is 95 mg/g on a routine annual test. He had a febrile UTI last week.",clues:["Type 2 diabetes","A2-range UACR","Preserved eGFR","Recent UTI"],question:"Can DKD be diagnosed from this result, and what is the next step?",diagnosis:"Possible albuminuric CKD, but the abnormal UACR must be repeated after the transient UTI resolves.",reasoning:"Albuminuria and eGFR are independent risk markers, but UTI can transiently raise urinary albumin. CKD requires persistence for at least 3 months.",action:"Treat/resolve the UTI, repeat a first-morning UACR, trend eGFR, assess BP and diabetes control, then assign G and A categories if persistent.",pearl:"Screen type 2 diabetes with both UACR and eGFR from diagnosis; one abnormal sample is not persistent CKD."},
    {title:"Diabetes with an active sediment",tag:"Diabetic kidney disease",stem:"A 46-year-old with 3 years of type 1 diabetes develops edema, creatinine rises rapidly, and microscopy shows dysmorphic RBCs and RBC casts.",clues:["Short diabetes duration","Rapid eGFR loss","RBC casts","Edema"],question:"Is this a typical diabetic nephropathy presentation?",diagnosis:"No. A superimposed inflammatory glomerulonephritis or another non-diabetic kidney disease is likely.",reasoning:"Classic DKD is less likely after a short duration of type 1 diabetes, and an active sediment plus rapid functional loss is strongly atypical.",action:"Arrange urgent nephrology assessment, send focused GN serology/complement, quantify protein, treat complications, and pursue biopsy when safe without delaying emergency therapy.",pearl:"Diabetes does not explain every renal abnormality. Active sediment changes the pathway."},
    {title:"Expected eGFR dip after SGLT2 inhibitor",tag:"Diabetic kidney disease",stem:"A stable adult with type 2 diabetes, CKD G3aA3, and no congestion starts an SGLT2 inhibitor. eGFR falls modestly after 2 weeks, potassium is normal, BP and volume status are stable.",clues:["Eligible CKD","Small early eGFR dip","Stable volume","Normal potassium"],question:"Should the SGLT2 inhibitor be stopped automatically?",diagnosis:"No. A small early reversible eGFR dip can be an expected hemodynamic effect.",reasoning:"SGLT2 inhibitors reduce intraglomerular pressure and may cause an early dip. The concern is a larger decline with volume depletion, hypotension, or true AKI.",action:"Continue with clinical monitoring, review diuretics and hydration, recheck kidney function according to the treatment plan, and apply sick-day rules during fasting, surgery, or critical illness.",pearl:"Interpret trajectory and clinical stability; do not equate every early dip with drug toxicity."},
    {title:"Anasarca with hypotension after diuresis",tag:"Nephrotic syndrome",stem:"An adult with nephrotic syndrome and severe edema receives escalating diuretics. Weight falls quickly, but BP becomes 88/56 mmHg, heart rate rises, urine output falls, and creatinine increases.",clues:["Anasarca","Aggressive diuresis","Hypotension","Rising creatinine"],question:"How can edema coexist with circulatory depletion?",diagnosis:"Underfill physiology or mixed nephrotic volume state with diuretic-induced effective-volume depletion.",reasoning:"Severe hypoalbuminemia can lower oncotic pressure and effective circulating volume even while interstitial edema remains extensive.",action:"Stop aggressive diuresis, reassess perfusion and JVP, exclude sepsis/bleeding/thrombosis, correct the volume problem carefully, and use albumin plus loop only in selected specialist-managed cases.",pearl:"Anasarca does not prove intravascular overload."},
    {title:"Sudden flank pain in membranous nephropathy",tag:"Nephrotic syndrome",stem:"A patient with active membranous nephropathy, albumin 1.8 g/dL, and heavy proteinuria develops sudden flank pain and gross hematuria.",clues:["Membranous nephropathy","Severe hypoalbuminemia","Sudden flank pain","Gross hematuria"],question:"What complication must be excluded urgently?",diagnosis:"Renal vein thrombosis, with possible extension or pulmonary embolism risk.",reasoning:"Membranous nephropathy and severe hypoalbuminemia confer high venous thrombotic risk. Sudden flank pain and hematuria are classic warning symptoms.",action:"Obtain urgent vascular imaging and assess for PE/DVT. Treat confirmed thrombosis with therapeutic anticoagulation unless contraindicated and manage the nephrotic disease.",pearl:"Prophylaxis is individualized, but symptomatic suspected thrombosis is an urgent diagnostic problem."},
    {title:"Child with first nephrotic episode",tag:"Nephrotic syndrome",stem:"A 5-year-old has periorbital edema, urine dipstick 4+, low serum albumin, normal complement, normal kidney function, and no hematuria or systemic features.",clues:["Typical age","Bland presentation","Normal complement","First episode"],question:"Is immediate kidney biopsy routinely required?",diagnosis:"Typical childhood nephrotic syndrome, most likely steroid sensitive; initial biopsy is usually unnecessary.",reasoning:"In a typical child, response to the initial glucocorticoid course predicts prognosis better than immediate histology.",action:"Use a current pediatric nephrotic-syndrome protocol under specialist supervision, monitor remission and toxicity, and reserve biopsy/genetics for steroid resistance or atypical features.",pearl:"Do not apply the adult biopsy rule to a typical child."},
    {title:"Cola urine two weeks after impetigo",tag:"Nephritic syndrome",stem:"An 8-year-old develops cola-colored urine, periorbital edema, hypertension, and oliguria several weeks after impetigo. C3 is low and microscopy shows RBC casts.",clues:["Latent infection interval","Low C3","RBC casts","Volume expansion"],question:"What is the likely diagnosis and main management principle?",diagnosis:"Acute post-streptococcal glomerulonephritis.",reasoning:"The latent interval, nephritic phenotype, low C3, and active glomerular sediment are classic. Most children recover with supportive care.",action:"Monitor BP, respiratory status, urine output, creatinine, potassium and bicarbonate; restrict sodium, use loop diuresis if congested, eradicate residual strep, and document C3 recovery.",pearl:"Antibiotics clear residual infection but do not reverse established immune GN."},
    {title:"Pulmonary-renal syndrome without hemoptysis",tag:"Nephritic syndrome",stem:"A 62-year-old has rapidly rising creatinine, RBC casts, hypoxemia, falling hemoglobin, and bilateral lung opacities but denies hemoptysis.",clues:["Rapid kidney decline","RBC casts","Falling hemoglobin","Diffuse infiltrates"],question:"Does absence of hemoptysis make alveolar hemorrhage unlikely?",diagnosis:"No. Occult diffuse alveolar hemorrhage from anti-GBM disease or ANCA-associated vasculitis is a major concern.",reasoning:"Pulmonary hemorrhage can occur without visible hemoptysis. The combined renal and lung pattern is a life-threatening pulmonary-renal emergency.",action:"Send anti-GBM and PR3/MPO-ANCA urgently, assess oxygenation and chest imaging, arrange urgent biopsy when safe, and start life-saving disease-specific treatment without waiting when the syndrome is strongly supported.",pearl:"Falling hemoglobin plus new diffuse opacities can be the clue to occult alveolar hemorrhage."}
  ];
  data.cases.push(...newCases);

  const newFlashcards = [
    {tag:"Diabetic kidney disease",q:"What two tests screen for DKD?",a:"Spot urine UACR and serum-creatinine eGFR."},
    {tag:"Diabetic kidney disease",q:"When does annual DKD screening begin in type 1 diabetes?",a:"After 5 years of diabetes duration."},
    {tag:"Diabetic kidney disease",q:"When does DKD screening begin in type 2 diabetes?",a:"At diagnosis."},
    {tag:"Diabetic kidney disease",q:"Can DKD occur without albuminuria?",a:"Yes. Nonalbuminuric DKD with reduced eGFR is especially recognized in type 2 diabetes."},
    {tag:"Diabetic kidney disease",q:"What are UACR categories A1, A2, and A3?",a:"A1 <30 mg/g; A2 30-300 mg/g; A3 >300 mg/g."},
    {tag:"Diabetic kidney disease",q:"What confirms chronic rather than transient albuminuria?",a:"Persistence for at least 3 months after transient causes are excluded."},
    {tag:"Diabetic kidney disease",q:"Classic nodular lesion in advanced diabetic nephropathy?",a:"Kimmelstiel-Wilson nodular glomerulosclerosis."},
    {tag:"Diabetic kidney disease",q:"Classic arteriolar clue in DKD?",a:"Hyalinosis of both afferent and efferent arterioles."},
    {tag:"Diabetic kidney disease",q:"What urine finding strongly suggests non-diabetic kidney disease?",a:"Dysmorphic RBCs or RBC casts—an active glomerular sediment."},
    {tag:"Diabetic kidney disease",q:"SGLT2 inhibitor eGFR threshold in most type 2 diabetes with CKD?",a:"Initiate when eGFR is at least 20 mL/min/1.73 m² if appropriate."},
    {tag:"Diabetic kidney disease",q:"Finerenone eligibility core?",a:"Selected type 2 diabetes with eGFR ≥25, normal potassium, and persistent albuminuria despite maximal tolerated RAS blockade."},
    {tag:"Diabetic kidney disease",q:"Can ACE inhibitor and ARB be combined in DKD?",a:"No. Dual RAS blockade is potentially harmful."},

    {tag:"Nephrotic syndrome",q:"What defines adult nephrotic syndrome?",a:"Nephrotic-range proteinuria plus hypoalbuminemia, usually with edema and related systemic consequences."},
    {tag:"Nephrotic syndrome",q:"Does nephrotic-range proteinuria alone equal nephrotic syndrome?",a:"No. The full syndrome requires hypoalbuminemia and clinical consequences, usually edema."},
    {tag:"Nephrotic syndrome",q:"Two major edema mechanisms in nephrotic syndrome?",a:"Underfill from low oncotic pressure/effective-volume depletion and overfill from primary renal sodium retention."},
    {tag:"Nephrotic syndrome",q:"First-line edema treatment?",a:"Moderate sodium restriction plus an adequately dosed loop diuretic, with volume-aware monitoring."},
    {tag:"Nephrotic syndrome",q:"When is IV albumin used?",a:"Selectively in severe hypoalbuminemia with diuretic resistance or clinically important intravascular depletion; not routinely."},
    {tag:"Nephrotic syndrome",q:"Which nephrotic lesion has especially high VTE risk?",a:"Membranous nephropathy."},
    {tag:"Nephrotic syndrome",q:"Should every nephrotic patient receive prophylactic anticoagulation?",a:"No. Use prophylaxis only when thrombotic risk exceeds bleeding risk."},
    {tag:"Nephrotic syndrome",q:"What urinary lipid structures may be seen?",a:"Oval fat bodies and fatty casts."},
    {tag:"Nephrotic syndrome",q:"Why may total calcium be low in nephrotic syndrome?",a:"Loss of albumin lowers albumin-bound calcium while ionized calcium may remain normal."},
    {tag:"Nephrotic syndrome",q:"Initial biopsy rule for a typical child?",a:"Usually no immediate biopsy; response to glucocorticoids guides prognosis."},
    {tag:"Nephrotic syndrome",q:"Adult unexplained nephrotic syndrome biopsy rule?",a:"Most adults require biopsy unless a secure non-biopsy diagnosis is established."},
    {tag:"Nephrotic syndrome",q:"What defines steroid-resistant nephrotic syndrome in children?",a:"No complete remission within 4 weeks of standard glucocorticoids, with specialist confirmation/evaluation."},

    {tag:"Nephritic syndrome",q:"Core nephritic features?",a:"Glomerular hematuria, proteinuria, reduced GFR/oliguria, sodium retention, edema, and hypertension."},
    {tag:"Nephritic syndrome",q:"Best sediment clue to nephritic GN?",a:"RBC casts and acanthocytes/dysmorphic RBCs."},
    {tag:"Nephritic syndrome",q:"Does absence of RBC casts exclude GN?",a:"No. RBC casts are highly specific but insensitive."},
    {tag:"Nephritic syndrome",q:"PSGN timing after pharyngitis?",a:"Usually about 1-3 weeks after infection."},
    {tag:"Nephritic syndrome",q:"PSGN timing after impetigo?",a:"Usually several weeks after the skin infection."},
    {tag:"Nephritic syndrome",q:"PSGN complement pattern?",a:"Low C3, which usually recovers within about 6-8 weeks."},
    {tag:"Nephritic syndrome",q:"Synpharyngitic hematuria suggests?",a:"IgA nephropathy."},
    {tag:"Nephritic syndrome",q:"Normal complement plus pulmonary hemorrhage suggests?",a:"ANCA-associated vasculitis or anti-GBM disease."},
    {tag:"Nephritic syndrome",q:"Three major RPGN IF patterns?",a:"Linear anti-GBM, granular immune-complex, and pauci-immune ANCA-associated patterns."},
    {tag:"Nephritic syndrome",q:"Can alveolar hemorrhage occur without hemoptysis?",a:"Yes. Falling hemoglobin, hypoxemia, and diffuse infiltrates may be the clues."},
    {tag:"Nephritic syndrome",q:"Are steroids routine in uncomplicated PSGN?",a:"No. Supportive care and eradication of residual streptococcal infection are standard."},
    {tag:"Nephritic syndrome",q:"When is nephritic biopsy urgent?",a:"Rapid creatinine rise, pulmonary-renal syndrome, suspected RPGN, severe/atypical disease, or uncertain systemic cause."}
  ];
  data.flashcards.push(...newFlashcards);

  const newQuiz = [
    {q:"The preferred clinical screening combination for diabetic kidney disease is:",options:["Serum urea only","UACR plus eGFR","Dipstick glucose only","Renal ultrasound only"],answer:1,explanation:"UACR detects albuminuric damage while eGFR measures filtration; both are needed."},
    {q:"Annual kidney screening in type 1 diabetes generally begins:",options:["At diagnosis","After 5 years of diabetes","After 20 years only","Only when edema appears"],answer:1,explanation:"Screening begins after about 5 years of type 1 diabetes and is then repeated at least annually."},
    {q:"Which finding is most atypical for stable DKD?",options:["Gradual eGFR decline","Bland sediment","RBC casts with rapid creatinine rise","Long-standing hypertension"],answer:2,explanation:"An active sediment and rapid decline suggest superimposed GN or another non-diabetic kidney disease."},
    {q:"A2 albuminuria corresponds to UACR:",options:["<30 mg/g","30-300 mg/g",">3000 mg/g","Exactly 3.5 g/day"],answer:1,explanation:"A2 is moderately increased albuminuria, 30-300 mg/g."},
    {q:"Which statement about early SGLT2 inhibitor treatment is correct?",options:["Any eGFR dip requires permanent discontinuation","A small stable early dip can be expected","It is used only for glucose lowering","It is routine in type 1 diabetes"],answer:1,explanation:"A modest early hemodynamic dip may be expected; clinical stability and volume status determine interpretation."},
    {q:"Finerenone is most appropriately considered in:",options:["Any person with normal potassium and no diabetes","Selected type 2 diabetes with persistent albuminuria despite RAS blockade","Acute post-streptococcal GN","Type 1 diabetes with ketoacidosis"],answer:1,explanation:"Finerenone targets residual albuminuric cardiorenal risk in eligible type 2 diabetes."},
    {q:"Which combination should be avoided in DKD?",options:["SGLT2 inhibitor plus ACE inhibitor when indicated","ACE inhibitor plus ARB","Statin plus lifestyle measures","GLP-1 RA plus metformin when appropriate"],answer:1,explanation:"Dual RAS blockade increases harm without adequate benefit."},
    {q:"Nephrotic syndrome requires:",options:["Proteinuria alone","Heavy proteinuria plus hypoalbuminemia, usually with edema","Hematuria plus RBC casts only","Low C3 in every patient"],answer:1,explanation:"Nephrotic-range proteinuria alone is not synonymous with the full syndrome."},
    {q:"A patient with anasarca, hypotension, tachycardia and rising creatinine after diuresis most likely has:",options:["Guaranteed intravascular overload","Effective-volume depletion despite edema","Uncomplicated hypertension","Normal treatment response"],answer:1,explanation:"Underfill or mixed physiology can produce circulatory depletion despite extensive edema."},
    {q:"First-line pharmacologic treatment of nephrotic edema is usually:",options:["Spironolactone alone","A loop diuretic","Routine albumin before every dose","Aspirin"],answer:1,explanation:"Loop diuretics are first-line, combined with sodium restriction and volume-aware monitoring."},
    {q:"Which statement about albumin infusion in nephrotic edema is correct?",options:["Required before every diuretic","Never used under any circumstances","Reserved for selected severe resistant or depleted cases","It permanently corrects hypoalbuminemia"],answer:2,explanation:"Albumin benefit is often transient and use is selective because it may worsen pulmonary edema."},
    {q:"The nephrotic lesion with particularly high venous thrombosis risk is:",options:["Membranous nephropathy","Thin basement membrane lesion","Simple cystitis","PSGN in recovery"],answer:0,explanation:"Membranous nephropathy and severe hypoalbuminemia confer high VTE risk."},
    {q:"Prophylactic anticoagulation in nephrotic syndrome should be:",options:["Given to everyone","Never considered","Individualized by thrombotic versus bleeding risk","Replaced by aspirin"],answer:2,explanation:"The benefit-risk balance is patient and disease specific; aspirin does not substitute for VTE prophylaxis."},
    {q:"A typical 5-year-old with a first nephrotic episode and no atypical features usually needs:",options:["Immediate kidney biopsy","Initial clinical treatment and response monitoring","Permanent anticoagulation","Plasma exchange"],answer:1,explanation:"Typical childhood nephrotic syndrome is usually managed without initial biopsy; steroid response guides prognosis."},
    {q:"The defining lesion in nephritic syndrome is:",options:["Pure podocyte dysfunction without inflammation","Inflammatory glomerular capillary-wall injury","Lower urinary tract bleeding","Isolated tubular glucose wasting"],answer:1,explanation:"Inflammatory capillary injury causes glomerular hematuria, reduced filtration and sodium retention."},
    {q:"Which urinary finding is highly specific but not sensitive for glomerular inflammation?",options:["Hyaline casts","RBC casts","Calcium oxalate crystals","Bacteria"],answer:1,explanation:"RBC casts strongly support glomerular bleeding, but their absence does not exclude GN."},
    {q:"Low C3 with relatively preserved C4 most strongly suggests:",options:["PSGN/infection-related GN or C3 disease","Anti-GBM disease only","Minimal change disease","Urologic malignancy"],answer:0,explanation:"This pattern directs attention to infection-related and alternative-complement-pathway disease."},
    {q:"Hematuria during an upper respiratory infection is classically associated with:",options:["IgA nephropathy","PSGN after latency","Membranous nephropathy","Renal vein thrombosis"],answer:0,explanation:"Synpharyngitic hematuria is characteristic of IgA nephropathy."},
    {q:"C3 that remains low beyond expected PSGN recovery should prompt:",options:["No further action","Evaluation for ongoing immune-complex or complement-mediated disease","A diagnosis of MCD","Only a urine culture"],answer:1,explanation:"Persistent low C3 is atypical and may indicate C3 glomerulopathy or ongoing infection/immune-complex disease."},
    {q:"Antibiotics in established PSGN primarily:",options:["Reverse immune glomerular injury immediately","Eradicate residual infection and reduce transmission","Replace diuretics","Treat anti-GBM antibodies"],answer:1,explanation:"They clear the infectious source but do not reverse the already established immune process."},
    {q:"Which is an indication for urgent kidney replacement therapy in acute nephritic syndrome?",options:["Mild microscopic hematuria","Refractory pulmonary edema","Stable A2 albuminuria","One hyaline cast"],answer:1,explanation:"Refractory volume overload, hyperkalemia, acidosis and uremic complications are classic urgent indications."},
    {q:"Linear IgG in rapidly progressive GN indicates:",options:["Anti-GBM disease","IgA nephropathy","C3 glomerulopathy","MCD"],answer:0,explanation:"Anti-GBM antibodies produce linear IgG staining along the GBM."},
    {q:"Pauci-immune crescentic GN is most commonly linked to:",options:["ANCA-associated vasculitis","Membranous nephropathy","Diabetic nephropathy","Amyloidosis"],answer:0,explanation:"AAV is the classic cause of pauci-immune necrotizing crescentic GN."},
    {q:"A rapidly rising creatinine, RBC casts, falling hemoglobin and diffuse lung opacities requires:",options:["Routine outpatient review","Urgent pulmonary-renal syndrome assessment","A diagnosis of fluid overload only","No serology if hemoptysis is absent"],answer:1,explanation:"Alveolar hemorrhage may be occult and anti-GBM/AAV treatment may need to begin before biopsy confirmation."}
  ];
  data.quiz.push(...newQuiz);

  Object.assign(data.labels, Object.fromEntries(chapterGroups.flatMap(group => group.items).map(item => [item.id,item.label])));
  Object.assign(data.labels, {
    "dkd-risk-lab":"DKD risk & atypicality lab",
    "nephrotic-lab":"Nephrotic syndrome lab",
    "nephritic-lab":"Nephritic differential lab"
  });

  data.modules.overview = M(
    "Renal Medicine Lab",
    "Eight connected chapters · one clinical model",
    "Move from normal renal structure and question-driven investigations to proteinuria, hematuria, glomerular disease, diabetic kidney disease, nephrotic syndrome, and nephritic emergencies. Every chapter links to cases, flashcards, quizzes, and interactive reasoning tools.",
    ["76 connected modules","8 original PDFs","Fully offline"],
    () => `
      ${section("The complete renal map",cards([
        {icon:"1",title:"Renal principles",body:"<p>Anatomy, blood flow, filtration, nephron transport, hormonal control, water, and acid-base physiology.</p>"},
        {icon:"2",title:"Investigations",body:"<p>Creatinine/eGFR, cystatin C, urinalysis, microscopy, imaging, culture, tubular tests, and biopsy.</p>"},
        {icon:"3",title:"Proteinuria and hematuria",body:"<p>Confirm, quantify, localize, and distinguish glomerular, tubular, overflow, post-renal, and urologic patterns.</p>"},
        {icon:"4",title:"Glomerular disease",body:"<p>Nephritic, nephrotic, mixed, and rapidly progressive syndromes classified by complement, IF, EM, and systemic clues.</p>"},
        {icon:"5",title:"Diabetic kidney disease",body:"<p>Screen with UACR and eGFR, stage by CGA, recognize atypical disease, and layer cardiorenal protection.</p>"},
        {icon:"6",title:"Nephrotic syndrome",body:"<p>Heavy protein loss, edema physiology, thrombosis, infection, biopsy/genetics, and adult versus pediatric pathways.</p>"},
        {icon:"7",title:"Nephritic syndrome",body:"<p>Inflammatory sediment, complement and timing, PSGN, acute management, RPGN, and pulmonary-renal emergencies.</p>"},
        {icon:"8",title:"Active revision",body:"<p>Nine interactive tools, 32 progressive cases, 140 flashcards, and 84 scored MCQs with explanations.</p>"}
      ]))}
      ${section("A reusable bedside algorithm",flow([
        {title:"Stabilize",body:"Treat hyperkalemia, pulmonary edema, severe hypertension, acidosis, sepsis, anuria, clot retention, thrombosis, and pulmonary hemorrhage first."},
        {title:"Confirm",body:"Check prior results, collection quality, persistence, urine output, drugs, infection, and transient triggers."},
        {title:"Localize",body:"Integrate eGFR trajectory, ACR/PCR, urine sediment, symptoms, complement, serology, and imaging."},
        {title:"Classify",body:"Define nephritic, nephrotic, mixed, isolated urinary, diabetic, tubular, structural, or rapidly progressive patterns."},
        {title:"Act",body:"Treat reversible causes, provide kidney protection, use immunosuppression only when disease specific, and biopsy when tissue changes care."}
      ]))}
      ${section("Eight source chapters",`${stats([
        {value:"9",label:"renal principles pages"},{value:"13",label:"investigation pages"},{value:"12",label:"proteinuria pages"},{value:"11",label:"hematuria pages"},
        {value:"20",label:"glomerular pages"},{value:"13",label:"DKD pages"},{value:"15",label:"nephrotic pages"},{value:"17",label:"nephritic pages"}
      ])}${routeLinks([["renal-anatomy","Begin with normal kidney structure"],["dkd-foundations","Open diabetic kidney disease"],["ns-definition","Open nephrotic syndrome"],["nph-core","Open nephritic syndrome"],["clinical-cases","Test clinical reasoning"]])}`)}
    `
  );

  data.modules["clinical-cases"] = M(
    "Progressive Clinical Cases","Interactive revision",
    "Work through physiology, investigations, urinary patterns, glomerular disease, diabetic kidney disease, nephrotic syndrome, and nephritic emergencies. Reveal the diagnosis, reasoning, next-step framework, and exam pearl in stages.",
    ["32 cases","Progressive reveals","Eight chapters"],
    () => section("Case navigator", '<div class="case-layout"><aside class="case-list" id="case-list" aria-label="Clinical cases"></aside><article class="case-card speech-unit" id="case-card"></article></div>')
  );

  data.modules.flashcards = M(
    "Flashcards","Interactive revision",
    "Flip 140 cards, filter by topic, shuffle, and mark cards as known or needing review. Progress is stored only in this browser.",
    ["140 cards","9 categories","Local review status"],
    () => `${section("Active recall deck",`<div id="flashcard-app"><div class="flash-toolbar"><div><strong id="flash-count">Card 1</strong><div class="muted small" id="flash-stats"></div></div><div class="choice-row"><label class="field compact"><span>Category</span><select id="flash-category"></select></label><button class="secondary-button" id="flash-shuffle" type="button">Shuffle</button><button class="secondary-button" id="flash-reset" type="button">Reset ratings</button></div></div><div class="flash-stage" id="flash-stage"></div></div>`)}`
  );

  data.modules.quiz = M(
    "Scored Renal Quiz","Interactive revision",
    "Complete 84 single-best-answer questions. Every response includes an explanation, and progress remains available after closing the browser.",
    ["84 questions","Immediate explanations","Saved progress"],
    () => `${section("Mixed-question assessment",`<div id="quiz-app"><div class="quiz-toolbar"><div><strong id="quiz-progress">Question 1</strong><div class="progress-track quiz-track" aria-hidden="true"><span id="quiz-meter"></span></div></div><button class="secondary-button" id="quiz-restart" type="button">Restart quiz</button></div><div id="quiz-stage"></div></div>`)}`
  );

  data.modules.sources = M(
    "Sources, Scope & Original PDFs","Reference library",
    "Open any of the eight original renal chapters inside the website or in a new tab. The interactive modules reorganize the supplied PDFs without replacing their full tables, detailed correction boxes, references, or clinical cautions.",
    ["8 embedded PDFs","Authoritative references","Educational scope"],
    () => `
      ${section("Original chapter viewer",`<div class="tool-panel" id="source-tool"><div class="tool-controls"><label class="field"><span>Select PDF</span><select id="pdf-select">
        <option value="01-renal-principles.pdf">01 · Renal Principles</option>
        <option value="02-renal-investigations.pdf">02 · Renal Investigations</option>
        <option value="03-proteinuria.pdf">03 · Proteinuria</option>
        <option value="04-hematuria.pdf">04 · Hematuria</option>
        <option value="05-glomerulonephritis.pdf">05 · Glomerulonephritis</option>
        <option value="06-diabetic-kidney-disease.pdf">06 · Diabetic Kidney Disease</option>
        <option value="07-nephrotic-syndrome.pdf">07 · Nephrotic Syndrome</option>
        <option value="08-nephritic-syndrome.pdf">08 · Nephritic Syndrome</option>
      </select></label><div class="source-open"><a class="primary-button" id="pdf-open" href="01-renal-principles.pdf" target="_blank" rel="noopener">Open selected PDF in a new tab</a></div></div><object class="pdf-frame" id="pdf-frame" data="01-renal-principles.pdf" type="application/pdf"><p>Your browser cannot embed the PDF. Use the open button above.</p></object></div>`)}
      ${section("Chapter sources",`<div class="source-grid">
        <article class="source-card"><h3>01 · Renal Principles</h3><p>Anatomy, blood flow, nephron function, filtration, tubular handling, hormones and acid-base control.</p><a href="01-renal-principles.pdf" target="_blank" rel="noopener">Open PDF</a></article>
        <article class="source-card"><h3>02 · Renal Investigations</h3><p>Blood markers, urinalysis, microscopy, culture, imaging, tubular tests and kidney biopsy.</p><a href="02-renal-investigations.pdf" target="_blank" rel="noopener">Open PDF</a></article>
        <article class="source-card"><h3>03 · Proteinuria</h3><p>Albumin versus total protein, mechanisms, quantification, work-up, management and referral.</p><a href="03-proteinuria.pdf" target="_blank" rel="noopener">Open PDF</a></article>
        <article class="source-card"><h3>04 · Hematuria</h3><p>Confirmation, localization, differential, adult risk stratification and visible-hematuria emergencies.</p><a href="04-hematuria.pdf" target="_blank" rel="noopener">Open PDF</a></article>
        <article class="source-card"><h3>05 · Glomerulonephritis</h3><p>Immune mechanisms, biopsy patterns, major diseases, RPGN, modern management and legacy corrections.</p><a href="05-glomerulonephritis.pdf" target="_blank" rel="noopener">Open PDF</a></article>
        <article class="source-card"><h3>06 · Diabetic Kidney Disease</h3><p>Screening, CGA staging, pathology, atypical features and layered kidney/CV-protective therapy.</p><a href="06-diabetic-kidney-disease.pdf" target="_blank" rel="noopener">Open PDF</a></article>
        <article class="source-card"><h3>07 · Nephrotic Syndrome</h3><p>Causes, edema physiology, thrombosis, infection, biopsy/genetics and adult/pediatric pathways.</p><a href="07-nephrotic-syndrome.pdf" target="_blank" rel="noopener">Open PDF</a></article>
        <article class="source-card"><h3>08 · Nephritic Syndrome</h3><p>Inflammatory glomerular patterns, complement, PSGN, acute management, RPGN and pulmonary-renal emergencies.</p><a href="08-nephritic-syndrome.pdf" target="_blank" rel="noopener">Open PDF</a></article>
      </div>`)}
      ${section("Selected authoritative links named in the chapters",bullets([
        '<a href="https://kdigo.org/guidelines/ckd-evaluation-and-management/" target="_blank" rel="noopener">KDIGO CKD Evaluation and Management</a>',
        '<a href="https://kdigo.org/guidelines/diabetes-ckd/" target="_blank" rel="noopener">KDIGO Diabetes Management in CKD</a>',
        '<a href="https://kdigo.org/guidelines/glomerular-diseases/" target="_blank" rel="noopener">KDIGO Glomerular Diseases guideline suite</a>',
        '<a href="https://kdigo.org/guidelines/anca-associated-vasculitis/" target="_blank" rel="noopener">KDIGO ANCA-Associated Vasculitis update</a>',
        '<a href="https://kdigo.org/guidelines/iga-nephropathy/" target="_blank" rel="noopener">KDIGO IgA Nephropathy / IgA Vasculitis resources</a>',
        '<a href="https://kdigo.org/guidelines/nephrotic-syndrome-in-children/" target="_blank" rel="noopener">KDIGO Nephrotic Syndrome in Children</a>',
        '<a href="https://diabetesjournals.org/care/issue/49/Supplement_1" target="_blank" rel="noopener">ADA Standards of Care in Diabetes 2026</a>',
        '<a href="https://www.auanet.org/guidelines-and-quality/guidelines/microhematuria" target="_blank" rel="noopener">AUA/SUFU Microhematuria Guideline</a>'
      ]))}
      ${section("Scope and safety",cards([
        {icon:"PDF",title:"Source fidelity",body:"<p>The site preserves the source chapters' clinical logic, high-yield tables, modern-practice corrections, and emergency warnings while reorganizing them into connected modules.</p>"},
        {icon:"↻",title:"Current-practice notes",body:"<p>Drug access, licensing, exact dosing, monitoring, and local protocols vary. The source chapters identify the specific guideline updates used.</p>"},
        {icon:"!",title:"Educational use",body:"<p>This is revision material, not unsupervised prescribing. RPGN, pulmonary-renal syndrome, severe hyperkalemia, pulmonary edema, anuria, sepsis, thrombosis, and infected obstruction require urgent specialist care.</p>"}
      ]))}
    `
  );

  const $ = (selector, root = document) => root.querySelector(selector);
  const safe = U.escapeHTML;

  function gCategory(egfr){
    if(egfr >= 90) return "G1";
    if(egfr >= 60) return "G2";
    if(egfr >= 45) return "G3a";
    if(egfr >= 30) return "G3b";
    if(egfr >= 15) return "G4";
    return "G5";
  }
  function aCategory(uacr){return uacr < 30 ? "A1" : uacr <= 300 ? "A2" : "A3";}
  function riskTier(g,a){
    const matrix={
      G1:{A1:"Low",A2:"Moderate",A3:"High"},
      G2:{A1:"Low",A2:"Moderate",A3:"High"},
      G3a:{A1:"Moderate",A2:"High",A3:"Very high"},
      G3b:{A1:"High",A2:"Very high",A3:"Very high"},
      G4:{A1:"Very high",A2:"Very high",A3:"Very high"},
      G5:{A1:"Very high",A2:"Very high",A3:"Very high"}
    };
    return matrix[g][a];
  }

  function initDKDRisk(){
    const root=$("#dkd-risk-tool"); if(!root) return;
    const ids=["#dkd-egfr","#dkd-uacr","#dkd-type","#dkd-duration","#dkd-sediment","#dkd-trajectory","#dkd-systemic"], out=$("#dkd-risk-output",root);
    const value=id=>$(id,root)?.value;
    const render=()=>{
      const egfr=Number(value("#dkd-egfr")||0),uacr=Number(value("#dkd-uacr")||0),type=value("#dkd-type"),duration=value("#dkd-duration"),sed=value("#dkd-sediment"),traj=value("#dkd-trajectory"),systemic=value("#dkd-systemic");
      if(egfr<=0||uacr<0){out.innerHTML='<div class="callout danger"><h3>Enter valid values</h3></div>';return;}
      const g=gCategory(egfr),a=aCategory(uacr),risk=riskTier(g,a),flags=[];
      if(sed!=="bland")flags.push("Active or substantial hematuria is atypical for uncomplicated DKD.");
      if(traj==="rapid")flags.push("Rapid or stepwise eGFR loss requires evaluation for AKI, obstruction, vascular disease, interstitial nephritis, or superimposed GN.");
      if(traj==="abrupt-nephrotic")flags.push("Abrupt nephrotic syndrome suggests another glomerulopathy.");
      if(duration==="short")flags.push("Short diabetes duration weakens a classic diabetic-nephropathy explanation, especially in type 1 diabetes.");
      if(systemic==="yes")flags.push("Systemic inflammatory, infectious, malignant, or monoclonal clues require targeted testing.");
      const persistent = uacr>=30 || egfr<60;
      const tone=flags.length?"danger":risk==="Very high"?"danger":risk==="High"?"warning":risk==="Moderate"?"purple":"success";
      const screening=type==="t1"?"Type 1 diabetes is screened annually after 5 years of duration.":"Type 2 diabetes is screened from diagnosis.";
      out.innerHTML=`<div class="section-grid"><div class="mini-card stat-card"><strong>${g}</strong><span>eGFR category</span></div><div class="mini-card stat-card"><strong>${a}</strong><span>albuminuria category</span></div><div class="mini-card stat-card"><strong>${safe(risk)}</strong><span>simplified risk tier</span></div></div><div class="callout ${tone}"><h3>${flags.length?"Atypical features change the pathway":persistent?"Potential CKD pattern—confirm persistence":"No G/A CKD marker from these two values alone"}</h3><p>${screening}</p>${flags.length?`<ul class="clean-list">${flags.map(x=>`<li>${safe(x)}</li>`).join("")}</ul>`:`<p>${persistent?"Repeat abnormal UACR or eGFR as clinically appropriate, exclude transient causes, and document an abnormality for at least 3 months before labeling CKD.":"G1-A1 still requires another marker of kidney damage to diagnose CKD."}</p>`}</div><h3>Next-step framework</h3><ul class="clean-list"><li>Confirm UACR using a first-morning sample after transient causes resolve.</li><li>Review BP, diabetes control, medicines, potassium, volume status, and cardiovascular risk.</li><li>${flags.length?"Arrange targeted serology/imaging and nephrology review; biopsy may be appropriate if tissue changes care.":"Layer lifestyle, RAS blockade when indicated, SGLT2 inhibition for eligible type 2 diabetes, and additional therapy according to residual risk."}</li></ul>`;
    };
    ids.forEach(id=>$(id,root)?.addEventListener("input",render));
    ids.forEach(id=>$(id,root)?.addEventListener("change",render));
    render();
  }

  function initNephrotic(){
    const root=$("#nephrotic-tool");if(!root)return;
    const ids=["#ns-pcr","#ns-albumin","#ns-edema","#ns-volume","#ns-kidney","#ns-sediment","#ns-thrombosis","#ns-context"],out=$("#nephrotic-output",root);
    const v=id=>$(id,root)?.value;
    const render=()=>{
      const pcr=Number(v("#ns-pcr")||0),albumin=Number(v("#ns-albumin")||0),edema=v("#ns-edema"),volume=v("#ns-volume"),kidney=v("#ns-kidney"),sed=v("#ns-sediment"),thromb=v("#ns-thrombosis"),context=v("#ns-context");
      const range=pcr>=3.5, syndrome=range&&albumin<3&&edema==="yes";
      const urgent=[];
      if(thromb==="symptoms")urgent.push("Possible DVT, PE, or renal vein thrombosis—urgent imaging and acute assessment.");
      if(kidney==="rising")urgent.push("AKI/oliguria requires reassessment of volume, sepsis, thrombosis, nephrotoxins, active GN, and diuretic intensity.");
      if(volume==="depleted")urgent.push("Effective-volume depletion despite edema: stop aggressive diuresis and reassess perfusion.");
      if(sed==="active")urgent.push("Active glomerular sediment suggests a mixed nephritic-nephrotic syndrome and usually increases biopsy urgency.");
      const vteHigh=context==="mn"||albumin<2||thromb==="risk";
      const tone=urgent.length?"danger":syndrome?"warning":range?"purple":"success";
      let volumeText=volume==="congested"?"Overfill/congestion clues dominate: sodium restriction and appropriately dosed loop diuresis are usually central.":volume==="depleted"?"Underfill/depletion clues dominate: aggressive diuresis can worsen hypotension and AKI.":"The volume state is not clearly extreme; monitor BP, JVP, perfusion, weight, urine output, and creatinine during treatment.";
      out.innerHTML=`<div class="section-grid"><div class="mini-card stat-card"><strong>${pcr.toFixed(1)} g/g</strong><span>${range?"Nephrotic-range protein":"Below classic adult nephrotic range"}</span></div><div class="mini-card stat-card"><strong>${albumin.toFixed(1)} g/dL</strong><span>${albumin<3?"Hypoalbuminemia":"Albumin not below 3.0"}</span></div><div class="mini-card stat-card"><strong>${syndrome?"Yes":"Not confirmed"}</strong><span>Full nephrotic syndrome</span></div></div><div class="callout ${tone}"><h3>${urgent.length?"Urgent complication or mixed-syndrome flags":syndrome?"Nephrotic syndrome pattern":"Interpret the components separately"}</h3><p>${safe(volumeText)}</p>${urgent.length?`<ul class="clean-list">${urgent.map(x=>`<li>${safe(x)}</li>`).join("")}</ul>`:""}</div><h3>Complication prevention</h3><ul class="clean-list"><li>${vteHigh?"Thrombotic risk is elevated; assess bleeding risk and disease-specific prophylaxis criteria. Confirmed thrombosis requires therapeutic anticoagulation.":"Do not anticoagulate automatically. Reassess thrombotic and bleeding risk as disease activity changes."}</li><li>Search for the cause with sediment, serology, infection and monoclonal studies, medication review, and biopsy/genetics when indicated.</li><li>Use moderate sodium restriction and loop diuretic therapy according to the actual volume state; albumin is selective, not routine.</li></ul>`;
    };
    ids.forEach(id=>$(id,root)?.addEventListener("input",render));
    ids.forEach(id=>$(id,root)?.addEventListener("change",render));
    render();
  }

  function initNephritic(){
    const root=$("#nephritic-tool");if(!root)return;
    const ids=["#nph-timing","#nph-comp","#nph-serology","#nph-sediment","#nph-systemic","#nph-trajectory"],out=$("#nephritic-output",root);
    const v=id=>$(id,root)?.value;
    const render=()=>{
      const timing=v("#nph-timing"),comp=v("#nph-comp"),ser=v("#nph-serology"),sed=v("#nph-sediment"),systemic=v("#nph-systemic"),traj=v("#nph-trajectory");
      const scores={},reasons=[];
      const add=(name,p,reason)=>{scores[name]=(scores[name]||0)+p;if(reason)reasons.push(`${name}: ${reason}`);};
      if(timing==="syn")add("IgA nephropathy / IgA vasculitis",8,"synpharyngitic timing");
      if(timing==="latent")add("Post-streptococcal GN",9,"latent interval after streptococcal infection");
      if(timing==="active")add("Active infection-related GN / endocarditis",9,"infection remains active at presentation");
      if(comp==="lowc3"){add("Infection-related GN",5,"isolated low C3");add("C3 glomerulopathy",4,"persistent isolated low C3 would favor complement disease");}
      if(comp==="lowboth"){add("Lupus nephritis",6,"low C3 and C4");add("Cryoglobulinemic or endocarditis-associated GN",5,"classical-pathway consumption");}
      if(comp==="normal"&&timing==="syn")add("IgA nephropathy",4,"normal complement supports IgA over PSGN");
      if(ser==="anca")add("ANCA-associated vasculitis",12,"positive PR3/MPO-ANCA");
      if(ser==="antigbm")add("Anti-GBM disease",12,"positive anti-GBM antibody");
      if(ser==="lupus")add("Lupus nephritis",12,"supportive lupus serology");
      if(systemic==="pulmonary"){add("Anti-GBM disease",7,"pulmonary-renal syndrome");add("ANCA-associated vasculitis",7,"pulmonary capillaritis");}
      if(systemic==="purpura"){add("IgA vasculitis",6,"purpura and abdominal/joint symptoms");add("Systemic small-vessel vasculitis",4,"vasculitic skin clues");}
      if(systemic==="ent")add("ANCA-associated vasculitis",7,"ENT/lung/nerve phenotype");
      if(sed==="glomerular")Object.keys(scores).forEach(k=>scores[k]+=1);
      if(sed==="clots")add("Urologic bleeding / non-glomerular mimic",10,"clots and isomorphic RBCs favor a urologic source");
      if(traj==="rapid"){add("Rapidly progressive GN family",8,"rapid decline over days to weeks");}
      const ranked=Object.entries(scores).sort((a,b)=>b[1]-a[1]).slice(0,4);
      const emergency=traj==="rapid"||systemic==="pulmonary"||ser==="antigbm"||(ser==="anca"&&traj!=="stable");
      const top=ranked.length?ranked:[["Insufficient pattern information",1]];
      const next=["Trend creatinine, urine output, potassium, bicarbonate, BP, and respiratory status.","Quantify protein and confirm a fresh glomerular sediment."];
      if(comp==="unknown")next.push("Measure C3 and C4.");
      if(ser==="none"&&(traj!=="stable"||systemic!=="none"))next.push("Send ANCA, anti-GBM, ANA/anti-dsDNA, complement, infection studies, and other cause-directed tests urgently.");
      if(timing==="active")next.push("Obtain cultures and control the infectious source before immunosuppression whenever possible.");
      if(emergency)next.push("Arrange same-day nephrology/acute-care assessment and urgent biopsy when safe; do not delay life-saving treatment in a strongly supported syndrome.");
      out.innerHTML=`<div class="callout ${emergency?"danger":"warning"}"><h3>${emergency?"Emergency RPGN / pulmonary-renal pattern":"Ranked diagnostic families"}</h3>${emergency?"<p>Rapid irreversible kidney loss or alveolar hemorrhage is possible.</p>":""}<ol class="clean-list">${top.map(([name,score])=>`<li><strong>${safe(name)}</strong> <span class="muted small">score ${score}</span></li>`).join("")}</ol></div><h3>Pattern rationale</h3><ul class="clean-list">${reasons.slice(0,7).map(x=>`<li>${safe(x)}</li>`).join("")||"<li>More clinical, complement, serology, and biopsy information is needed.</li>"}</ul><h3>Next steps</h3><ul class="clean-list">${[...new Set(next)].map(x=>`<li>${safe(x)}</li>`).join("")}</ul>`;
    };
    ids.forEach(id=>$(id,root)?.addEventListener("change",render));
    render();
  }

  const previousLabs = window.RenalLabLabs;
  window.RenalLabLabs = {
    ...previousLabs,
    initRoute(route){
      previousLabs?.initRoute?.(route);
      if(route==="dkd-risk-lab") initDKDRisk();
      if(route==="nephrotic-lab") initNephrotic();
      if(route==="nephritic-lab") initNephritic();
    }
  };
})();
