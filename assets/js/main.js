/**
 * APR GROUP OF COMPANY - Real Estate & Plotting Solutions
 * Official Website: aprgroupbhadohi.com
 * Interactive Frontend JavaScript
 */

(function () {
  'use strict';

  // Master Project Dataset
  const PROJECTS_DATA = [
    {
      id: 'rajpura-phase-1',
      name: 'Rajpura Phase 1 (Siddhi Vinayak Colony)',
      shortName: 'Rajpura Phase 1',
      location: 'Siddhi Vinayak Colony, Rajpura, Bhadohi',
      rate: 2500,
      badge: 'Flagship & Prime',
      badgeClass: 'hot',
      category: 'premium',
      roadWidth: '30 Ft Wide Pitch Road',
      electricity: 'Available (Transformer Installed)',
      water: 'Groundwater / Line Connection Available',
      registry: 'Immediate Registry & Dakhil Kharij',
      highlights: [
        'Close to Bhadohi Railway Station (3.5 KM)',
        'Gated Community Feel in Siddhi Vinayak Colony',
        'Direct connection to Main Rajpura Highway',
        'High rental & commercial appreciation'
      ],
      description: 'Our most sought-after prime residential layout in Siddhi Vinayak Colony, Rajpura Phase 1. Complete with wide pitched roads, rapid housing construction, and highest appreciation rate in Bhadohi.'
    },
    {
      id: 'kanshraipur',
      name: 'Kanshraipur Township Project',
      shortName: 'Kanshraipur',
      location: 'Kanshraipur, Near Bhadohi City Link',
      rate: 2300,
      badge: 'High Appreciation',
      badgeClass: 'hot',
      category: 'premium',
      roadWidth: '25 Ft Internal Roads',
      electricity: 'Pole Line Ready',
      water: 'Available',
      registry: 'Immediate Registry',
      highlights: [
        'Near Bhadohi-Gyanpur 4-lane Highway link',
        'Ideal for immediate home construction',
        'Surrounded by premium residential bungalows',
        'Clear Title 100% Freehold'
      ],
      description: 'Premium plotting project situated at Kanshraipur. An emerging hotspot with clean air, planned layout, and easy accessibility to schools, markets, and Bhadohi town.'
    },
    {
      id: 'ugapur',
      name: 'Ugapur Greens Plotting',
      shortName: 'Ugapur, Bhadohi',
      location: 'Ugapur Main Road, Bhadohi',
      rate: 1300,
      badge: 'Best Value',
      badgeClass: '',
      category: 'budget',
      roadWidth: '25 Ft Roads',
      electricity: 'Electrified Sector',
      water: 'Submersible Ready',
      registry: 'Immediate Registry',
      highlights: [
        'Excellent connectivity to Carpet City Bhadohi',
        'Calm green environment, zero pollution',
        'Affordable entry rate for middle-class families',
        'High future appreciation potential'
      ],
      description: 'Ugapur project offers peaceful living with great connectivity at very attractive rates. Designed with modern layout plotting and spacious internal lanes.'
    },
    {
      id: 'chauri-bazar',
      name: 'Chauri Bazar Commercial & Residential',
      shortName: 'Chauri Bazar',
      location: 'Chauri Bazar, Bhadohi Highway',
      rate: 1300,
      badge: 'Commercial & Living',
      badgeClass: 'budget',
      category: 'budget',
      roadWidth: '30 Ft Main & 22 Ft Internal',
      electricity: 'Available',
      water: 'Available',
      registry: 'Immediate Registry',
      highlights: [
        'Walking distance to Chauri Railway Station & Market',
        'Both commercial frontage & quiet residential plots',
        'Strong daily commuter and public transit access',
        'High demand for shop cum residence construction'
      ],
      description: 'Chauri Bazar is one of the busiest trade hubs in Bhadohi district. Plots here are ideal for both business establishments and convenient residential living.'
    },
    {
      id: 'parjapatpur',
      name: 'Parjapatpur City Extension',
      shortName: 'Parjapatpur, Bhadohi',
      location: 'Parjapatpur, Bhadohi',
      rate: 1200,
      badge: 'Fast Developing',
      badgeClass: 'budget',
      category: 'budget',
      roadWidth: '22 Ft Wide Roads',
      electricity: 'Connected',
      water: 'Available',
      registry: 'Immediate Registry',
      highlights: [
        'Rapidly expanding residential sector',
        'Extremely economical pricing for budget buyers',
        'Clear paperwork & freehold ownership',
        'Ideal for safe long-term land investment'
      ],
      description: 'Parjapatpur provides top-tier value for home builders and investors who want high land appreciation within 2-3 years at an unbeatable per sq. ft. rate.'
    },
    {
      id: 'gosai-bazar',
      name: 'Gosai Bazar Enclave (Gyanpur)',
      shortName: 'Gosai Bazar, Gyanpur',
      location: 'Gosai Bazar, Near Gyanpur District HQ',
      rate: 1000,
      badge: 'Most Affordable',
      badgeClass: 'budget',
      category: 'gyanpur',
      roadWidth: '25 Ft Wide Road',
      electricity: 'Poles Erected',
      water: 'Available',
      registry: 'Immediate Registry',
      highlights: [
        'Only ₹1,000 / Sq. Ft. - Best Entry Price in District',
        'Near Gyanpur Administrative & District Offices',
        'Colleges, hospitals and markets nearby',
        'Doubling investment potential in coming years'
      ],
      description: 'Located in the prominent Gosai Bazar area near Gyanpur, this project offers the lowest entry price in the district without compromising on connectivity or legal clarity.'
    }
  ];

  const STANDARD_SIZES = [500, 600, 800, 1000, 1200, 1500, 1800, 2000, 2400, 3000];
  const STANDARD_BUDGETS = [
    { val: 300000, label: '₹3 Lakh' },
    { val: 500000, label: '₹5 Lakh' },
    { val: 750000, label: '₹7.5 Lakh' },
    { val: 1000000, label: '₹10 Lakh' },
    { val: 1500000, label: '₹15 Lakh' },
    { val: 2000000, label: '₹20 Lakh' },
    { val: 2500000, label: '₹25 Lakh' },
    { val: 3000000, label: '₹30 Lakh' },
    { val: 5000000, label: '₹50 Lakh' }
  ];

  const WHATSAPP_PHONE = '916392199296';
  const CALL_PHONE = '+916392199296';

  // Helper: Format Currency (INR)
  function formatINR(number) {
    return '₹' + Math.round(number).toLocaleString('en-IN');
  }

  // DOM Elements
  const locSelect = document.getElementById('calc-location');
  const sizeSelect = document.getElementById('calc-size');
  const budgetSelect = document.getElementById('calc-budget');
  const calcBtn = document.getElementById('btn-calculate-plot');
  const calcResultBox = document.getElementById('calc-result-box');
  
  const budgetModeSelect = document.getElementById('budget-mode-select');
  const budgetCalcBtn = document.getElementById('btn-calculate-budget');
  const budgetResultBox = document.getElementById('budget-result-box');

  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');

  // Initialize Select Dropdowns
  function initCalculatorDropdowns() {
    if (locSelect) {
      locSelect.innerHTML = '<option value="">-- Choose Project Location --</option>';
      PROJECTS_DATA.forEach((proj, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = `${proj.shortName} (₹${proj.rate}/sq.ft)`;
        locSelect.appendChild(opt);
      });
    }

    if (sizeSelect) {
      sizeSelect.innerHTML = '<option value="">-- Choose Plot Size --</option>';
      STANDARD_SIZES.forEach(size => {
        const opt = document.createElement('option');
        opt.value = size;
        opt.textContent = `${size} Sq. Ft.`;
        sizeSelect.appendChild(opt);
      });
    }

    if (budgetSelect) {
      budgetSelect.innerHTML = '<option value="">-- Select Your Target Budget --</option>';
      STANDARD_BUDGETS.forEach(b => {
        const opt = document.createElement('option');
        opt.value = b.val;
        opt.textContent = `Up to ${b.label}`;
        budgetSelect.appendChild(opt);
      });
    }

    if (budgetModeSelect) {
      budgetModeSelect.innerHTML = '<option value="">-- Choose Your Budget --</option>';
      STANDARD_BUDGETS.forEach(b => {
        const opt = document.createElement('option');
        opt.value = b.val;
        opt.textContent = b.label;
        budgetModeSelect.appendChild(opt);
      });
    }
  }

  // Calculator Tab Switching
  const tabLocBtn = document.getElementById('tab-btn-location');
  const tabBudBtn = document.getElementById('tab-btn-budget');
  const tabLocContent = document.getElementById('tab-content-location');
  const tabBudContent = document.getElementById('tab-content-budget');

  if (tabLocBtn && tabBudBtn) {
    tabLocBtn.addEventListener('click', () => {
      tabLocBtn.classList.add('active');
      tabBudBtn.classList.remove('active');
      tabLocContent.style.display = 'block';
      tabBudContent.style.display = 'none';
      if (calcResultBox) calcResultBox.style.display = 'none';
      if (budgetResultBox) budgetResultBox.style.display = 'none';
    });

    tabBudBtn.addEventListener('click', () => {
      tabBudBtn.classList.add('active');
      tabLocBtn.classList.remove('active');
      tabBudContent.style.display = 'block';
      tabLocContent.style.display = 'none';
      if (calcResultBox) calcResultBox.style.display = 'none';
      if (budgetResultBox) budgetResultBox.style.display = 'none';
    });
  }

  // Calculate By Location & Size
  if (calcBtn) {
    calcBtn.addEventListener('click', function () {
      const locIdx = locSelect.value;
      const sizeVal = Number(sizeSelect.value);
      const budgetVal = Number(budgetSelect.value);

      if (locIdx === '' || !sizeVal) {
        alert('कृपया लोकेशन और प्लॉट साइज़ का चयन करें (Please select Location and Plot Size).');
        return;
      }

      const project = PROJECTS_DATA[locIdx];
      const totalPrice = sizeVal * project.rate;

      let budgetMsg = '';
      let badgeClass = 'badge-teal';
      if (budgetVal > 0) {
        if (totalPrice <= budgetVal) {
          const savings = budgetVal - totalPrice;
          budgetMsg = `✅ यह प्लॉट आपके बजट (${formatINR(budgetVal)}) के अंदर है! आपके ₹${savings.toLocaleString('en-IN')} बच रहे हैं।`;
          badgeClass = 'badge-teal';
        } else {
          const extra = totalPrice - budgetVal;
          budgetMsg = `ℹ️ यह प्लॉट आपके चुने हुए बजट से ₹${extra.toLocaleString('en-IN')} अधिक है। आप साइज़ थोड़ा कम कर सकते हैं या दूसरी लोकेशन देख सकते हैं।`;
          badgeClass = 'badge-gold';
        }
      }

      const waMsg = `Hello APR Group of Company,\nI calculated a plot estimate on your website aprgroupbhadohi.com:\n- Project: ${project.name}\n- Plot Size: ${sizeVal} Sq. Ft.\n- Rate: ₹${project.rate} / Sq. Ft.\n- Estimated Price: ${formatINR(totalPrice)}\n\nPlease share availability and arrange a site visit.`;
      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waMsg)}`;

      calcResultBox.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:16px;">
          <h3 style="font-size:18px; font-weight:700; color:var(--apr-navy-900); margin:0;">
            📊 प्लॉट कीमत अनुमान (Estimated Plot Breakdown)
          </h3>
          <span class="badge-tag ${badgeClass}">${project.shortName}</span>
        </div>
        <div class="calc-result-grid">
          <div class="calc-card-metric">
            <div class="metric-label">प्रोजेक्ट लोकेशन</div>
            <div class="metric-value" style="font-size:16px;">${project.shortName}</div>
          </div>
          <div class="calc-card-metric">
            <div class="metric-label">प्लॉट एरिया</div>
            <div class="metric-value">${sizeVal} <span style="font-size:14px; font-weight:500;">Sq. Ft.</span></div>
          </div>
          <div class="calc-card-metric">
            <div class="metric-label">रेट प्रति वर्ग फुट</div>
            <div class="metric-value">₹${project.rate}</div>
          </div>
          <div class="calc-card-metric" style="background:#f0fdf4; border-color:#86efac;">
            <div class="metric-label" style="color:#166534;">कुल अनुमानित कीमत</div>
            <div class="metric-value highlight-price">${formatINR(totalPrice)}</div>
          </div>
        </div>
        ${budgetMsg ? `<p style="font-size:13.5px; font-weight:600; color:var(--apr-navy-900); background:#ffffff; padding:12px 16px; border-radius:var(--radius-md); border:1px solid var(--apr-border); margin-bottom:16px;">${budgetMsg}</p>` : ''}
        <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
          <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp">
            <span>💬 इस प्लॉट के लिए WhatsApp पर सम्पर्क करें</span>
          </a>
          <button class="btn btn-outline" onclick="window.viewProjectDetails('${project.id}')">
            <span>📄 प्रोजेक्ट के सभी रेट्स व डिटेल्स देखें</span>
          </button>
        </div>
      `;
      calcResultBox.style.display = 'block';
      calcResultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // Calculate By Budget (Reverse Lookup)
  if (budgetCalcBtn) {
    budgetCalcBtn.addEventListener('click', function () {
      const budgetVal = Number(budgetModeSelect.value);
      if (!budgetVal) {
        alert('कृपया अपना बजट चुनें (Please select your budget).');
        return;
      }

      let cardsHtml = '';
      PROJECTS_DATA.forEach(proj => {
        const areaSqFt = (budgetVal / proj.rate).toFixed(1);
        const waMsg = `Hello APR Group,\nMy budget is ${formatINR(budgetVal)}. On your website I saw I can get approx ${areaSqFt} Sq. Ft. plot at ${proj.name} (Rate: ₹${proj.rate}/sqft). Please guide me further.`;
        const waLink = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waMsg)}`;

        cardsHtml += `
          <div class="budget-location-card">
            <div class="budget-card-top">
              <div class="budget-card-title">${proj.shortName}</div>
              <div class="budget-card-rate">रेट: ₹${proj.rate} / वर्ग फुट</div>
            </div>
            <div>
              <div style="font-size:11px; text-transform:uppercase; color:var(--apr-muted); font-weight:700;">अनुमानित ज़मीन एरिया:</div>
              <div class="budget-card-area">${areaSqFt} <span style="font-size:14px; font-weight:600;">Sq. Ft.</span></div>
            </div>
            <div style="display:flex; gap:8px; margin-top:12px;">
              <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-sm btn-whatsapp" style="flex:1;">
                WhatsApp
              </a>
              <button class="btn btn-sm btn-outline" onclick="window.viewProjectDetails('${proj.id}')">
                डिटेल्स
              </button>
            </div>
          </div>
        `;
      });

      budgetResultBox.innerHTML = `
        <h3 style="font-size:18px; font-weight:700; color:var(--apr-navy-900); margin-bottom:16px; text-align:left;">
          🎯 ${formatINR(budgetVal)} बजट में आपको मिलने वाला संभावित प्लॉट एरिया:
        </h3>
        <div class="calc-budget-grid">
          ${cardsHtml}
        </div>
      `;
      budgetResultBox.style.display = 'block';
      budgetResultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // Render Project Cards in HTML Grid
  const projectGridContainer = document.getElementById('project-grid-container');
  function renderProjectCards(filter = 'all') {
    if (!projectGridContainer) return;

    projectGridContainer.innerHTML = '';
    const filtered = PROJECTS_DATA.filter(p => {
      if (filter === 'all') return true;
      if (filter === 'premium') return p.category === 'premium';
      if (filter === 'budget') return p.category === 'budget' || p.category === 'gyanpur';
      if (filter === 'gyanpur') return p.category === 'gyanpur';
      return true;
    });

    filtered.forEach(proj => {
      const sample1000Price = formatINR(1000 * proj.rate);
      const waMsg = `Hello APR Group,\nI am interested in ${proj.name} (Rate: ₹${proj.rate}/sq.ft.). Please share plot map and schedule my site visit.`;
      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waMsg)}`;

      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="project-media">
          <span class="project-badge-pill ${proj.badgeClass}">${proj.badge}</span>
          <div class="project-art">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18"/>
              <path d="M9 21V9"/>
            </svg>
            <div style="font-size:16px; font-weight:800; letter-spacing:0.5px;">APR GROUP</div>
            <div style="font-size:11px; opacity:0.85;">PLOTTING & RESIDENTIAL</div>
          </div>
        </div>
        <div class="project-body">
          <div class="project-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${proj.location}</span>
          </div>
          <h3 class="project-title">${proj.name}</h3>
          
          <div class="project-meta-list">
            <div class="project-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span><strong>रास्ता:</strong> ${proj.roadWidth}</span>
            </div>
            <div class="project-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span><strong>बिजली व पानी:</strong> ${proj.electricity}</span>
            </div>
            <div class="project-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span><strong>रजिस्ट्री:</strong> ${proj.registry}</span>
            </div>
          </div>

          <div class="project-price-wrap">
            <div class="project-rate-label">रेट प्रति वर्ग फुट (Rate Per Sq. Ft.)</div>
            <div class="project-rate-value">₹${proj.rate.toLocaleString('en-IN')} <span style="font-size:14px; font-weight:600; color:var(--apr-muted);">/ Sq. Ft.</span></div>
            <div class="project-sample-price">1000 Sq. Ft. प्लॉट: <strong>${sample1000Price}</strong></div>
          </div>

          <div class="project-card-actions">
            <button class="btn btn-outline btn-sm" onclick="window.viewProjectDetails('${proj.id}')">
              रेट चार्ट व डिटेल्स
            </button>
            <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">
              WhatsApp
            </a>
          </div>
        </div>
      `;
      projectGridContainer.appendChild(card);
    });
  }

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjectCards(btn.dataset.filter);
    });
  });

  // Global Function to View Project Details Modal
  window.viewProjectDetails = function (projectId) {
    const proj = PROJECTS_DATA.find(p => p.id === projectId);
    if (!proj) return;

    modalTitle.textContent = proj.name;

    let rateRows = '';
    [500, 600, 800, 1000, 1200, 1500, 2000, 2500, 3000].forEach(size => {
      const price = size * proj.rate;
      rateRows += `
        <tr>
          <td><strong>${size} Sq. Ft.</strong></td>
          <td>₹${proj.rate} / sq.ft</td>
          <td><strong style="color:var(--apr-teal-700);">${formatINR(price)}</strong></td>
        </tr>
      `;
    });

    let highlightsHtml = '';
    proj.highlights.forEach(h => {
      highlightsHtml += `<li style="margin-bottom:6px;">✔ ${h}</li>`;
    });

    const waMsg = `Hello APR Group,\nI checked details of ${proj.name} on aprgroupbhadohi.com and want to book a site visit. Please connect with me.`;
    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waMsg)}`;

    modalContent.innerHTML = `
      <div style="margin-bottom:18px;">
        <p style="font-size:14px; color:var(--apr-muted); margin-bottom:12px;">${proj.description}</p>
        <div style="background:var(--apr-blue-50); padding:12px 16px; border-radius:var(--radius-md); font-size:13.5px; color:var(--apr-navy-900); margin-bottom:16px;">
          📍 <strong>लोकेशन पता:</strong> ${proj.location}
        </div>
      </div>

      <h4 style="font-size:16px; font-weight:700; color:var(--apr-navy-900); margin-bottom:10px;">
        📐 प्लॉट साइज़ व अनुमानित कीमत सूची (Rate & Price Chart)
      </h4>
      <div style="overflow-x:auto;">
        <table class="rate-table">
          <thead>
            <tr>
              <th>प्लॉट एरिया (Plot Size)</th>
              <th>रेट प्रति वर्ग फुट</th>
              <th>कुल अनुमानित लागत</th>
            </tr>
          </thead>
          <tbody>
            ${rateRows}
          </tbody>
        </table>
      </div>

      <div style="margin:20px 0;">
        <h4 style="font-size:16px; font-weight:700; color:var(--apr-navy-900); margin-bottom:8px;">
          🌟 मुख्य सुविधाएं व विशेषताएं (Key Project Highlights)
        </h4>
        <ul style="list-style:none; padding-left:0; font-size:14px; color:var(--apr-text);">
          ${highlightsHtml}
        </ul>
      </div>

      <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:24px; padding-top:16px; border-top:1px solid var(--apr-border);">
        <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp" style="flex:1;">
          💬 WhatsApp पर प्लॉट बुक करें / विज़िट शेड्यूल करें
        </a>
        <a href="tel:${CALL_PHONE}" class="btn btn-primary">
          📞 डायरेक्ट कॉल करें
        </a>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Populate Dropdown in Header Navigation for Projects
  const navProjectsDropdown = document.getElementById('nav-projects-dropdown');
  const drawerProjectsSubmenu = document.getElementById('drawer-projects-submenu');

  if (navProjectsDropdown) {
    navProjectsDropdown.innerHTML = '';
    PROJECTS_DATA.forEach(proj => {
      const link = document.createElement('a');
      link.className = 'dropdown-link';
      link.href = '#projects';
      link.innerHTML = `
        <span class="dropdown-title">${proj.shortName}</span>
        <span class="dropdown-desc">₹${proj.rate}/sq.ft · ${proj.badge}</span>
      `;
      link.addEventListener('click', () => {
        setTimeout(() => window.viewProjectDetails(proj.id), 300);
      });
      navProjectsDropdown.appendChild(link);
    });
  }

  if (drawerProjectsSubmenu) {
    drawerProjectsSubmenu.innerHTML = '';
    PROJECTS_DATA.forEach(proj => {
      const item = document.createElement('li');
      item.innerHTML = `<a href="#projects" class="drawer-sublink">${proj.shortName} (₹${proj.rate}/sq.ft)</a>`;
      item.querySelector('a').addEventListener('click', () => {
        closeDrawer();
        setTimeout(() => window.viewProjectDetails(proj.id), 300);
      });
      drawerProjectsSubmenu.appendChild(item);
    });
  }

  // Mobile Drawer Toggle
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawerProjectToggle = document.getElementById('drawer-project-toggle');

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('active');
    if (drawerOverlay) drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('active');
    if (drawerOverlay) drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  if (drawerProjectToggle) {
    drawerProjectToggle.addEventListener('click', (e) => {
      e.preventDefault();
      drawerProjectsSubmenu.classList.toggle('show');
    });
  }

  // Close drawer on clicking any drawer link
  document.querySelectorAll('.drawer-link:not(#drawer-project-toggle)').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Contact / Site Visit Form Submission via WhatsApp
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('cf-name').value.trim();
      const phone = document.getElementById('cf-phone').value.trim();
      const project = document.getElementById('cf-project').value;
      const date = document.getElementById('cf-date').value;
      const message = document.getElementById('cf-message').value.trim();

      const waText = `*New Website Enquiry - APR Group of Company*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `📍 *Interested Project:* ${project || 'Not specified'}\n` +
        `📅 *Preferred Visit Date:* ${date || 'Immediate'}\n` +
        `💬 *Message:* ${message || 'I would like to get complete details and plot availability.'}\n\n` +
        `_Source: aprgroupbhadohi.com_`;

      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank');

      // Feedback message on screen
      alert(`धन्यवाद ${name} जी! आपका संदेश तैयार हो गया है और WhatsApp पर भेजा जा रहा है। हमारी टीम जल्द ही आपसे सम्पर्क करेगी।`);
      contactForm.reset();
    });
  }

  // Quick Site Visit Form (Hero Section)
  const quickVisitForm = document.getElementById('quick-visit-form');
  if (quickVisitForm) {
    quickVisitForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('qv-name').value.trim();
      const phone = document.getElementById('qv-phone').value.trim();
      const loc = document.getElementById('qv-location').value;

      const waText = `*Schedule Free Site Visit - APR Group*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `📍 *Location:* ${loc || 'Any project in Bhadohi'}\n` +
        `🚗 *Request:* Free Site Visit Vehicle & Project Consultation\n\n` +
        `_Source: aprgroupbhadohi.com_`;

      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank');
      alert(`धन्यवाद ${name} जी! विज़िट रिक्वेस्ट WhatsApp पर भेजी जा रही है।`);
      quickVisitForm.reset();
    });
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    initCalculatorDropdowns();
    renderProjectCards('all');
  });

})();
