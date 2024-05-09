function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!

    // TODO: Alert the user of the job that they applied for!
    const openPositions = document.getElementsByName('job');
    let selectedJob = '';

    for (const position of openPositions) {
        if (position.checked) {
            selectedJob = position.value;

            console.log(selectedJob);

            alert("Thank you for applying to be a " + selectedJob);

            break;
        } else if (position === openPositions[openPositions.length - 1]) {
            alert("Please select a job!");
        }
    }
    // console.log(selectedJob);
    // document.getElementById("btn-apply").addEventListener("click", () => {
    //     alert("Thank you for applying to be a " + selectedJob);
    // });
}