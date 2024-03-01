document.addEventListener('DOMContentLoaded', function() {
    var towriteDiv = document.getElementById('towrite');
    var roles = ["Software Engineer", "Web Developer"];
    var roleIndex = 0;
    var currentRole = "";
    
    function typeRole() {
        if (currentRole.length < roles[roleIndex].length) {
            currentRole += roles[roleIndex].charAt(currentRole.length);
            towriteDiv.textContent =   currentRole;
            setTimeout(typeRole, 100); // Adjust the delay between each character
        } else {
            setTimeout(eraseRole, 1000); // Adjust the delay before erasing
        }
    }
    
    function eraseRole() {
        if (currentRole.length > 0) {
            currentRole = currentRole.slice(0, -1);
            towriteDiv.textContent =   currentRole;
            setTimeout(eraseRole, 50); // Adjust the delay between each character erasure
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 500); // Adjust the delay before typing the next role
        }
    }
    
    typeRole(); // Start typing the first role
});
