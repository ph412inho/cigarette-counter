let saveEl = document.getElementById("save-el")
let smokeEl = document.getElementById("smoke-el")
let cigarette = 0

function smoke() {
    cigarette += 1
    smokeEl.textContent = cigarette
}

function save() {
    let smokeStr = cigarette + " - "
    saveEl.textContent += smokeStr    // ← เปลี่ยนเป็น saveEl
    smokeEl.textContent = 0           // ← reset counter display
    cigarette = 0                      // ← reset ตัวแปร
}
