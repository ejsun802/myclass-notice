const schedules = [
  { date: "2025-06-10", title: "수학 수행평가" },
  { date: "2025-06-12", title: "국어 발표 준비 제출" },
  { date: "2025-06-15", title: "과학 시험" },
];

const container = document.getElementById("schedule-list");

schedules.forEach(item => {
  const div = document.createElement("div");
  div.className = "schedule-item";
  div.innerHTML = `<strong>${item.date}</strong>: ${item.title}`;
  container.appendChild(div);
});
