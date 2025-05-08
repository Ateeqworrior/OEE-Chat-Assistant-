# 📊 SmartOEE – Gen AI Chat-Based OEE Calculator

This project is built as part of the **NTT DATA Gen AI Case Study** evaluation. It is an interactive Gen AI application that calculates and displays the **Overall Equipment Efficiency (OEE)** of packaging devices deployed in a biscuit manufacturing facility. The interface mimics a **ChatGPT-style conversational UI**, offering an engaging and intuitive way to query and analyze manufacturing performance using IoT sensor data.

---

## 📌 Problem Statement

**Objective:**  
Develop a web-based Gen AI interface that lets users query OEE based on filters such as:

- 📟 Device ID  
- 🏭 Location  
- 📅 Month  

The system takes operational data from IoT sensors (in `.xlsx` format), processes it, and returns calculated OEE results in a user-friendly chat window.

---

## ⚙️ Features

- 🧠 ChatGPT-style UI for querying OEE  
- 📁 Upload `.xlsx` data directly into the interface  
- 📌 Filters by Device ID, Location, and Month  
- 📊 Displays OEE results conversationally  
- 🌐 Responsive and clean user interface  
- 🎨 Stylish dropdowns and upload boxes  

---

## 🏗️ Architecture & Methodology

- **Frontend**: HTML, CSS, and JavaScript
- **UI Logic**:
  - Sidebar for navigation
  - Main chat window for interaction
  - Filters to refine the data
- **OEE Calculation**:
  - Formula: `OEE = Availability × Performance × Quality`
  - Parsed from `.xlsx` uploaded files
- **Chatbot Responses**: Pre-defined rules simulate Gen AI behavior

---

## 🔧 Technology Stack

| Layer      | Tools Used             |
|------------|------------------------|
| Language   | HTML, CSS, JavaScript  |
| UI Design  | Flexbox, Custom CSS    |
| File Parsing | (To be integrated) XLSX reader (e.g. `SheetJS`) |

### ✅ Code Quality

- Modular and well-commented JavaScript code  
- Reusable CSS classes  
- Consistent styling with transitions and hover effects  
- Responsive design for different devices

---

## 💡 Innovation Highlights

- ✅ Chat-based OEE query system (unlike traditional dashboards)  
- ✅ Live data filtering without page reload  
- ✅ Custom-designed dropdowns with visibility fixes  
- ✅ Human-friendly bot replies and visual feedback

---

## 📈 Performance & Scalability

- Efficient in handling filtered dataset queries  
- Built to be scalable with backend integrations (can plug into Node.js, Flask, etc.)  
- UI responsive on desktops and tablets  
- Can integrate real Gen AI APIs for advanced functionality

---
![image](https://github.com/user-attachments/assets/d76453d4-5d3f-4192-b9bd-f399c50f8658)


## 🧪 Future Enhancements

- Integrate OpenAI API for real Gen AI conversational capability  
- Backend with database support  
- Role-based access for operations managers  
- Visual dashboards for trends over months

---

## 🏫 Submission Details

- **Full Name**: Ateeq Ur Rahaman  
- **Email ID**: [ateequrrahaman2004@gmail.com]  
- **Mobile Number**: [9113963212]  
- **College Name**: PES University  

---

## 📝 Remarks

This solution showcases how Gen AI-style interfaces can be adapted beyond chat to handle **industrial metrics like OEE**, enhancing decision-making in manufacturing units. It is built with extensibility in mind, keeping scope for integration with real AI and database systems.

---

## 📄 License

This project is open-source under the [MIT License](https://opensource.org/licenses/MIT). Contributions and forks are welcome!

