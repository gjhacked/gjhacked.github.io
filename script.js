const settingsForm = document.getElementById("settings-form");
settingsForm.addEventListener("submit", (event) => {
    event.preventDefault();
});

settingsForm.style.display = "none";

function saveSettings() {
    const title = document.getElementById("tab-title").value;
    const favicon = document.getElementById("favicon-url").value;

    if (title) {
        document.title = title;
    }
    if (favicon) {
        let faviconElement = document.querySelector("link[rel~='icon']");
        faviconElement.href = favicon;
    }
}

function showSettings() {
    if (settingsForm.style.display === "block") {
        settingsForm.style.display = "none";
    } else {
        settingsForm.style.display = "block";
    }
}