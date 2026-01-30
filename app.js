const lessons = JSON.parse(localStorage.getItem("lessons")) || [];

const saveBtn = document.getElementById("saveBtn");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const lessonList = document.getElementById("lessonList");

saveBtn.addEventListener("click", function () {
  const title = titleInput.value;
  const content = contentInput.value;

  if (title === "" || content === "") {
    alert("Please fill in both fields");
    return;
  }

  lessons.push({ title, content });
  localStorage.setItem("lessons", JSON.stringify(lessons));

  titleInput.value = "";
  contentInput.value = "";

  displayLessons();
});

function displayLessons() {
  lessonList.innerHTML = "";

  lessons.forEach((lesson) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${lesson.title}</h3>
      <p>${lesson.content}</p>
      <hr>
    `;
    lessonList.appendChild(div);
  });
}

// show saved lessons when page loads
displayLessons();
