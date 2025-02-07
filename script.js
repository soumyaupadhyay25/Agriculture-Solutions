document.addEventListener("DOMContentLoaded", function () {
    const uploadInput = document.getElementById("upload");
    const previewImage = document.getElementById("preview");
    const resultDiv = document.getElementById("result");
    const diagnosisText = document.getElementById("diagnosis");
    const solutionText = document.getElementById("solution");

    const diseaseDatabase = [
        { name: "Calcium Deficiency", solution: "Use milk products like yogurt or eggshell powder to enrich soil." },
        { name: "Nitrogen Deficiency", solution: "Apply compost or organic manure to improve nitrogen levels." },
        { name: "Fungal Infection", solution: "Use neem oil spray and ensure proper drainage." },
        { name: "Pest Infestation", solution: "Introduce natural predators like ladybugs or use mild soap sprays." }
    ];

    uploadInput.addEventListener("change", handleImageUpload);

    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            previewImage.src = URL.createObjectURL(file);
            previewImage.style.display = "block";

            // Simulate AI model processing delay
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * diseaseDatabase.length);
                const diagnosis = diseaseDatabase[randomIndex];

                diagnosisText.textContent = diagnosis.name;
                solutionText.textContent = diagnosis.solution;
                resultDiv.style.display = "block";
            }, 2000);
        }
    }

    function navigate(page) {
        switch (page) {
            case "home":
                window.location.href = "index.html";
                break;
            case "history":
                alert("Viewing past diagnosis history...");
                break;
            case "login":
                alert("Redirecting to User Login...");
                break;
            case "switch":
                alert("Switching Accounts...");
                break;
            case "alerts":
                alert("Checking Alerts...");
                break;
            case "logout":
                alert("Logging out...");
                break;
            case "about":
                alert("About Agg Solutions...");
                break;
            default:
                alert("Unknown page");
        }
    }

    window.navigate = navigate; // Expose function globally for button click events
});
