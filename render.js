/* Accessible, reusable presentation components for the Renal Medicine Lab. */
(() => {
  "use strict";
  const escapeHTML = value => String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[c]);
  const section = (title, body, note = "", extraClass = "") => `
    <section class="section-block speech-unit ${extraClass}">
      <div class="section-heading"><div><h2>${title}</h2>${note ? `<p>${note}</p>` : ""}</div></div>
      ${body}
    </section>`;
  const cards = items => `<div class="section-grid ${items.length >= 4 ? "four" : items.length === 3 ? "three" : ""}">${items.map(item => `
    <article class="mini-card speech-unit ${item.className || ""}">
      <span class="icon-badge" aria-hidden="true">${item.icon || "•"}</span>
      <h3>${item.title}</h3>${item.body}
    </article>`).join("")}</div>`;
  const callout = (title, body, type = "info") => `<aside class="callout ${type} speech-unit"><h3>${title}</h3>${typeof body === "string" && !body.trim().startsWith("<") ? `<p>${body}</p>` : body}</aside>`;
  const table = (headers, rows, caption = "") => `<div class="table-wrap speech-unit"><table>${caption ? `<caption class="sr-only">${caption}</caption>` : ""}<thead><tr>${headers.map(h=>`<th scope="col">${h}</th>`).join("")}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map((cell,i)=>`<td${i===0?` data-label="${escapeHTML(headers[i])}"`:""}>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  const bullets = items => `<ul class="clean-list">${items.map(item=>`<li>${item}</li>`).join("")}</ul>`;
  const numbered = items => `<ol class="clean-list">${items.map(item=>`<li>${item}</li>`).join("")}</ol>`;
  const flow = items => `<div class="flow speech-unit">${items.map(item=>`<div class="flow-step"><strong>${item.title}</strong><span>${item.body}</span></div>`).join("")}</div>`;
  const routeLinks = items => `<div class="choice-row interactive-only">${items.map(item=>`<button class="secondary-button" type="button" data-route="${item[0]}">${item[1]} →</button>`).join("")}</div>`;
  const badge = (text, tone="") => `<span class="badge ${tone}">${text}</span>`;
  const stats = items => `<div class="section-grid ${items.length >= 4 ? "four" : items.length === 3 ? "three" : ""}">${items.map(item=>`<div class="mini-card stat-card"><strong>${item.value}</strong><span>${item.label}</span></div>`).join("")}</div>`;

  const kidneyDiagram = () => `<div class="renal-diagram" aria-label="Simplified kidney cross-section and urine outflow">
    <svg viewBox="0 0 720 390" role="img" aria-labelledby="kidneyTitle kidneyDesc">
      <title id="kidneyTitle">Kidney cross-section</title><desc id="kidneyDesc">A stylized kidney showing capsule, cortex, medulla, papillae, calyces, pelvis, ureter and renal vessels.</desc>
      <defs>
        <linearGradient id="renalOuter" x1="0" x2="1"><stop offset="0" stop-color="#f1b7a3"/><stop offset="1" stop-color="#ce6f67"/></linearGradient>
        <linearGradient id="renalInner" x1="0" x2="1"><stop offset="0" stop-color="#f8d8be"/><stop offset="1" stop-color="#e7a67d"/></linearGradient>
      </defs>
      <path d="M145 42C79 55 42 120 56 202c16 94 88 155 173 145 57-7 94-42 117-86 18-35 28-70 25-106-6-83-88-128-151-116-24 5-43 8-75 3Z" fill="url(#renalOuter)" stroke="currentColor" stroke-width="4"/>
      <path d="M153 76c-45 12-70 61-60 123 12 73 67 118 129 109 39-5 66-30 83-64 14-27 20-51 18-77-4-57-62-90-105-81-22 4-39 0-65-10Z" fill="url(#renalInner)" stroke="currentColor" stroke-width="3"/>
      <path d="M196 94l38 62-37 47-34-57Z M269 108l20 64-44 33-16-57Z M286 222l-34 57-38-42 32-45Z M181 215l31 70-47-24-25-61Z" fill="#b95b58" opacity=".82" stroke="currentColor" stroke-width="2"/>
      <path d="M303 150c-21 21-44 42-62 64 23 14 42 29 59 49 19-22 27-40 35-65 6-20 3-36-32-48Z" fill="#ffe6bf" stroke="currentColor" stroke-width="3"/>
      <path d="M332 196c33-4 64 2 97 13" fill="none" stroke="#d7a63f" stroke-width="18" stroke-linecap="round"/><path d="M424 208c41 5 77 3 117-4" fill="none" stroke="#d7a63f" stroke-width="18" stroke-linecap="round"/>
      <path d="M541 204v134" fill="none" stroke="#d7a63f" stroke-width="18" stroke-linecap="round"/>
      <path d="M343 160c50-6 91-25 151-38" fill="none" stroke="#d14c4f" stroke-width="14" stroke-linecap="round"/><path d="M347 226c51 18 95 31 149 41" fill="none" stroke="#4b84b8" stroke-width="14" stroke-linecap="round"/>
      <g class="diagram-label"><text x="78" y="48">Capsule</text><text x="79" y="104">Cortex</text><text x="107" y="300">Medulla / pyramids</text><text x="318" y="141">Renal pelvis</text><text x="552" y="352">Ureter</text><text x="500" y="111">Renal artery</text><text x="501" y="285">Renal vein</text></g>
      <path d="M112 54l27 22M114 105l44 20M186 292l31-42M350 143l-24 34M550 344l-9-34M501 116l-31 11M501 278l-28-7" stroke="currentColor" stroke-width="2"/>
    </svg>
  </div>`;

  const nephronDiagram = () => `<div class="renal-diagram" aria-label="Simplified nephron and segmental handling">
    <svg viewBox="0 0 760 420" role="img" aria-labelledby="nephronTitle nephronDesc">
      <title id="nephronTitle">Nephron segments</title><desc id="nephronDesc">Glomerulus, proximal tubule, loop of Henle, distal tubule and collecting duct with segment labels.</desc>
      <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="currentColor"/></marker></defs>
      <circle cx="100" cy="100" r="48" fill="#f4b7a5" stroke="currentColor" stroke-width="4"/><path d="M70 85c21-35 70-20 60 12-10 31-66 35-69 1 0-10 4-18 9-13 10 9 9 31 29 28 18-3 25-21 13-31-13-11-30 2-27 17" fill="none" stroke="#b22f43" stroke-width="8" stroke-linecap="round"/>
      <path d="M147 99c55-11 64 23 35 44-35 26-10 62 26 36 30-22 69-4 50 29-14 25-38 19-48 8" fill="none" stroke="#dd8569" stroke-width="18" stroke-linecap="round"/>
      <path d="M208 216c-5 61 4 113 44 139 34 22 75 3 82-31 10-50-7-116 5-170" fill="none" stroke="#e9a17f" stroke-width="18" stroke-linecap="round"/>
      <path d="M340 154c7-42 44-55 72-27 27 27 13 64-21 70-24 5-43 22-23 47 23 28 60 2 89 20" fill="none" stroke="#c384b2" stroke-width="18" stroke-linecap="round"/>
      <path d="M458 264h103c28 0 40 18 40 44v75" fill="none" stroke="#78a9c7" stroke-width="18" stroke-linecap="round"/>
      <path d="M601 85v298" fill="none" stroke="#4d8db6" stroke-width="24" stroke-linecap="round"/>
      <path d="M67 44C24 50 19 97 53 117M129 45c49 9 67 46 50 73" fill="none" stroke="#d14c4f" stroke-width="12" stroke-linecap="round" marker-end="url(#arrow)"/>
      <g class="diagram-label"><text x="43" y="177">Glomerulus</text><text x="154" y="73">Proximal tubule</text><text x="230" y="395">Loop of Henle</text><text x="365" y="92">Distal tubule</text><text x="555" y="55">Collecting duct</text><text x="48" y="25">Afferent</text><text x="151" y="27">Efferent</text></g>
    </svg>
  </div>`;

  const barrierDiagram = () => `<div class="barrier-diagram speech-unit" aria-label="Three-layer glomerular filtration barrier">
    <div><span>1</span><strong>Fenestrated endothelium</strong><small>Excludes cells; admits water and small solutes.</small></div>
    <div><span>2</span><strong>Glomerular basement membrane</strong><small>Structural and selective filtration layer.</small></div>
    <div><span>3</span><strong>Podocyte slit diaphragm</strong><small>Final specialized barrier to macromolecules.</small></div>
  </div>`;

  const urineColors = () => `<div class="urine-strip" role="img" aria-label="Illustrative urine appearance spectrum">
    <div style="--tone:#f8efae"><span>Pale</span><small>Dilute</small></div><div style="--tone:#eac451"><span>Amber</span><small>Concentrated</small></div><div style="--tone:#d77f7f"><span>Pink/red</span><small>Blood or pigment</small></div><div style="--tone:#70493a"><span>Tea/cola</span><small>Glomerular or pigment</small></div><div style="--tone:#f3e9d6"><span>Cloudy</span><small>Cells/crystals/lipid</small></div>
  </div>`;

  window.RenalLabUI = {escapeHTML, section, cards, callout, table, bullets, numbered, flow, routeLinks, badge, stats, kidneyDiagram, nephronDiagram, barrierDiagram, urineColors};
})();
