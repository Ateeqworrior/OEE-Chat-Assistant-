const chatArea = document.getElementById("chatArea");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const fileInput = document.getElementById("fileInput");
const oeeOutput = document.getElementById("oeeOutput");

const deviceIdFilter = document.getElementById("deviceIdFilter");
const locationFilter = document.getElementById("locationFilter");
const dateFilter = document.getElementById("dateFilter");

let dataFromExcel = [];

function addMessage(type, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", type);

  if (type === "bot") {
    const icon = document.createElement("span");
    icon.classList.add("bot-icon");
    icon.textContent = "🤖";

    const msgText = document.createElement("div");
    msgText.classList.add("bot-text");
    msgText.textContent = text;

    msg.appendChild(icon);
    msg.appendChild(msgText);
  } else {
    msg.textContent = text;
  }

  chatArea.appendChild(msg);
  chatArea.scrollTop = chatArea.scrollHeight;
}

sendBtn.onclick = () => {
  const message = userInput.value.trim();
  const deviceId = deviceIdFilter.value;
  const location = locationFilter.value;
  const date = dateFilter.value;

  if (!deviceId || !location || !date) {
    addMessage("bot", "Please select Device ID, Location, and Date to calculate OEE.");
    return;
  }

  if (!message) return;

  addMessage("user", message);
  userInput.value = "";

  if (message.toLowerCase().includes("oee")) {
    const filters = { deviceId, location, date };
    const oee = calculateOEE(dataFromExcel, filters);
    addMessage("bot", `Calculated OEE: ${oee}%`);
    oeeOutput.textContent = `Calculated OEE: ${oee}%`;
  } else {
    addMessage("bot", "Please ask for OEE calculation or upload a file.");
  }
};

fileInput.onchange = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (evt) => {
    const data = new Uint8Array(evt.target.result);
    const workbook = XLSX.read(data, { type: "array" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    dataFromExcel = XLSX.utils.sheet_to_json(sheet, { raw: false });
    populateFilters(dataFromExcel);
  };
  reader.readAsArrayBuffer(file);
};

function populateFilters(data) {
  const deviceIds = [...new Set(data.map(row => row.DeviceID))];
  const locations = [...new Set(data.map(row => row.Location))];
  const dates = [...new Set(data.map(row => formatDate(row.Date)))];

  deviceIdFilter.innerHTML = `<option value="">Select Device ID</option>`;
  locationFilter.innerHTML = `<option value="">Select Location</option>`;
  dateFilter.innerHTML = `<option value="">Select Date</option>`;

  deviceIds.forEach(id => deviceIdFilter.innerHTML += `<option value="${id}">${id}</option>`);
  locations.forEach(location => locationFilter.innerHTML += `<option value="${location}">${location}</option>`);
  dates.forEach(date => dateFilter.innerHTML += `<option value="${date}">${date}</option>`);
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  if (isNaN(date)) return "";
  return date.toISOString().split("T")[0];
}

function calculateOEE(data, filters) {
  let totalAvailability = 0, totalPerformance = 0, totalQuality = 0, count = 0;

  const filteredData = data.filter(row => {
    const formattedDate = formatDate(row.Date);
    return (
      (!filters.deviceId || row.DeviceID === filters.deviceId) &&
      (!filters.location || row.Location === filters.location) &&
      (!filters.date || formattedDate === filters.date)
    );
  });

  if (filteredData.length === 0) return "No data available for the selected filters.";

  filteredData.forEach(row => {
    totalAvailability += parseFloat(row.Availability);
    totalPerformance += parseFloat(row.Performance);
    totalQuality += parseFloat(row.Quality);
    count++;
  });

  const avgAvailability = totalAvailability / count;
  const avgPerformance = totalPerformance / count;
  const avgQuality = totalQuality / count;

  const oee = avgAvailability * avgPerformance * avgQuality * 100;
  return oee.toFixed(2);
}
