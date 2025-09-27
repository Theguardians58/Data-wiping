
const API = (typeof window !== 'undefined') ? (window.API_BASE_URL || '') : '';

// Simple router
const views = document.querySelectorAll('.view');
const buttons = document.querySelectorAll('.nav-btn');
buttons.forEach(btn => btn.addEventListener('click', () => {
  const v = btn.dataset.view;
  views.forEach(x => x.classList.remove('active'));
  document.getElementById(v).classList.add('active');
}));

// Device analysis simulator
const analyzeBtn = document.getElementById('analyzeBtn');
const deviceInfo = document.getElementById('deviceInfo');
if (analyzeBtn) {
  analyzeBtn.onclick = async () => {
    try {
      const res = await fetch(`${API}/api/devices/simulated`);
      const data = await res.json();
      deviceInfo.textContent = JSON.stringify(data, null, 2);
    } catch (e) {
      deviceInfo.textContent = 'Failed to analyze device: ' + e.message;
    }
  };
}

// Load wiping methods
const methodsList = document.getElementById('methodsList');
async function loadMethods() {
  try {
    const res = await fetch(`${API}/api/wiping/methods`);
    const data = await res.json();
    methodsList.innerHTML = data.methods.map(m => (
      `<div class="card"><strong>${m.name}</strong><br/>Passes: ${m.passes}<br/>Level: ${m.securityLevel}</div>`
    )).join('');
  } catch (e) {
    methodsList.innerHTML = `<div class="card">Failed to load methods: ${e.message}</div>`;
  }
}
if (methodsList) loadMethods();

// Wipe simulation
const startWipe = document.getElementById('startWipe');
const progressBar = document.getElementById('progressBar');
const statusOut = document.getElementById('status');
if (startWipe) {
  startWipe.onclick = async () => {
    statusOut.textContent = 'Starting simulation...';
    for (let i=0;i<=100;i+=5) {
      progressBar.style.width = i + '%';
      statusOut.textContent = `Progress: ${i}%`;
      await new Promise(r => setTimeout(r, 150));
    }
    statusOut.textContent = 'Verification complete. Report ready.';
  };
}

// Reports
const genReport = document.getElementById('genReport');
const reportOut = document.getElementById('reportOut');
if (genReport) {
  genReport.onclick = async () => {
    try {
      const res = await fetch(`${API}/api/reports/sample`);
      const data = await res.json();
      reportOut.textContent = JSON.stringify(data, null, 2);
    } catch (e) {
      reportOut.textContent = 'Failed to generate report: ' + e.message;
    }
  };
}
