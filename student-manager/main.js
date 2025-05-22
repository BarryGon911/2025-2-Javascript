"use strict";

let students = [];

function addStudent() {
  const name = document.getElementById("nameInput").value.trim();
  const grade = parseFloat(document.getElementById("gradeInput").value);

  const student = { name, grade };
  students.push(student);

  displayStudents();
  updateAverage();
}

function displayStudents() {
  const list = document.getElementById("studentList");
  list.innerHTML = ``;

  for (let i = 0; i < students.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `
      <p>${students[i].name} - ${students[i].grade} </p>
    `;
    list.appendChild(li);
  }
}

function updateAverage() {
  if (students.length === 0) {
    return;
  }
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total = total + students[i].grade;
  }
  let average = total / students.length;

  document.getElementById(
    "averageDisplay"
  ).textContent = `Average Grade: ${average.toFixed(2)}`;
}

function saveToLocalStorage() {}
