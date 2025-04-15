document.getElementById("jobForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const job = {
      role: document.getElementById("role").value,
      company: document.getElementById("company").value,
      status: document.getElementById("status").value,
      appliedDate: document.getElementById("appliedDate").value,
      notes: document.getElementById("notes").value,
    };
  
    addToTable(job);
    this.reset(); // reset form
  });
  
  function addToTable(job) {
    const tbody = document.getElementById("jobTableBody");
  
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${job.role}</td>
      <td>${job.company}</td>
      <td>${job.status}</td>
      <td>${job.appliedDate}</td>
      <td>${job.notes}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;
  
    tr.querySelector(".delete-btn").addEventListener("click", () => {
      tr.remove();
    });
  
    tbody.appendChild(tr);
  }
  