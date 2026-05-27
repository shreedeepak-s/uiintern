let responses = [];

function submitSurvey() {

    let username = document.getElementById("username").value;
    let task = Number(document.getElementById("task").value);
    let ease = Number(document.getElementById("ease").value);
    let satisfaction = Number(document.getElementById("satisfaction").value);
    let feedback = document.getElementById("feedback").value;

    let userData = {
        username,
        task,
        ease,
        satisfaction,
        feedback
    };

    responses.push(userData);

    generateReport();
}

function generateReport() {

    let totalTask = 0;
    let totalEase = 0;
    let totalSatisfaction = 0;

    responses.forEach(user => {
        totalTask += user.task;
        totalEase += user.ease;
        totalSatisfaction += user.satisfaction;
    });

    let avgTask = (totalTask / responses.length).toFixed(2);
    let avgEase = (totalEase / responses.length).toFixed(2);
    let avgSatisfaction = (totalSatisfaction / responses.length).toFixed(2);

    let report = `
        <h3>Usability Analysis Report</h3>
        <p><b>Total Participants:</b> ${responses.length}</p>
        <p><b>Average Task Completion:</b> ${avgTask}</p>
        <p><b>Average Ease of Use:</b> ${avgEase}</p>
        <p><b>Average Satisfaction:</b> ${avgSatisfaction}</p>
    `;

    responses.forEach(user => {
        report += `
            <hr>
            <p><b>User:</b> ${user.username}</p>
            <p><b>Feedback:</b> ${user.feedback}</p>
        `;
    });

    document.getElementById("results").innerHTML = report;
}