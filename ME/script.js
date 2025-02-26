// CV Submission Functionality
document.getElementById('submit-cv').addEventListener('click', function() {
    const companies = [
        "China Road Construction",
        "Dhanjal Construction Company",
        "Other leading engineering firms"
    ];
    
    const confirmation = confirm("Are you sure you want to send your CV to top engineering companies in Kenya?");
    
    if (confirmation) {
        // Prepare email content
        const emailSubject = "CV Submission Confirmation";
        const emailBody = `Your CV has been sent to the following companies:\n\n${companies.join('\n')}`;
        
        // Create mailto link
        const mailtoLink = `mailto:kalvinmusyoka@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        alert("Your CV has been successfully sent! Please check your email for confirmation.");
        
        // Log submission
        console.log("CV sent to:", companies.join(', '));
    } else {
        console.log("CV submission cancelled.");
    }
});


// Additional JavaScript functionality can be added here
