const schedules = [
  { date: "2025-06-02 ~ 06-05", title: "생활과 과학 - 생활 속 과학 주제 탐구", subject: "science" },
  { date: "2025-06-02", title: "일본어2 - 주제탐구", subject: "etc" },
  { date: "2025-06-05", title: "미적분 - 주제 탐구", subject: "math" },
  { date: "2025-06-05", title: "화학2 - 에세이 작성하기", subject: "science" },
  { date: "2025-06-10", title: "언어와 매체 - 미디어 주체적 수용 활동", subject: "korean" },
  { date: "2025-06-12", title: "화학2 - 기체의 분자량 구하기", subject: "science" }
];

const container = document.getElementById("schedule-list");

schedules.forEach(item => {
  const div = document.createElement("div");
  div.className = `schedule-item ${item.subject}`;
  div.innerHTML = `
    <div class="schedule-date">${item.date}</div>
    <div class="schedule-title">${item.title}</div>
  `;
  container.appendChild(div);
});
