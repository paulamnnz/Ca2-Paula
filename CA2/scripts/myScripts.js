let scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar-main' });


// Open the modal for the email form
function openContactForm() {
    const contactFormModal = new bootstrap.Modal(document.getElementById('contactFormModal'));
    contactFormModal.show();
}





function updateEducationDetails(education) {
    const educationImage = document.getElementById('educationImage');
    const contactInfo = document.getElementById('contactInfo');

    if (education === 'tudublin') {
        educationImage.src = 'images/tud.jpg';
        educationImage.alt = 'TU Dublin';
        contactInfo.innerHTML = `
            <h5>Technological University Dublin</h5>
            <p>Website: <a href="https://www.tudublin.ie" target="_blank">TU Dublin Website</a></p>
        `;
    } else if (education === 'upv') {
        educationImage.src = 'images/upv.jpg';
        educationImage.alt = 'Universitat Politècnica de València';
        contactInfo.innerHTML = `
            <h5>Universitat Politècnica de València</h5>
            <p>Website: <a href="https://www.upv.es" target="_blank">UPV Website</a>   Sep 2021 - Present. </p>
        `;
    } else if (education === 'highschool') {
        educationImage.src = 'images/insti.jpg';
        educationImage.alt = 'I.E.S Ricardo Ortega';
        contactInfo.innerHTML = `
            <h5>I.E.S Ricardo Ortega</h5>
            <p>Scientific High School Diploma with Honors</p>
        `;
    }
}

// Function to toggle visibility of skill details (progress bars)
function toggleSkillDetails(skillType) {
    const skillDetails = document.querySelectorAll('.skill-details');
    
    // Hide all skill details sections
    skillDetails.forEach(function (element) {
        element.style.display = 'none';
    });

    // Show the selected skill category
    const selectedCategory = document.getElementById(skillType + '-details');
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');
    const educationImages = {
        'headingTUD': 'educationTUD',
        'headingUPV': 'educationUPV',
        'headingHS': 'educationHS'
    };

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', function () {
            // Hide all images
            Object.values(educationImages).forEach(imageId => {
                document.getElementById(imageId).classList.add('d-none');
            });

            // Show the corresponding image
            const selectedImageId = educationImages[header.id];
            document.getElementById(selectedImageId).classList.remove('d-none');
        });
    });
});




function showSkillCategory(categoryId) {
    // Hide all skill details sections
    let skillDetails = document.querySelectorAll('.skills-details');
    skillDetails.forEach(function (element) {
        element.style.display = 'none';
    });

    // Show the selected skill category
    let selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }
}


document.addEventListener("DOMContentLoaded", () => {
    // Toggle Working Hours Visibility
    const availabilityBtn = document.getElementById("availabilityBtn");
    const availabilitySection = document.getElementById("availability");
  
    if (availabilityBtn && availabilitySection) {
      availabilityBtn.addEventListener("click", function () {
        if (availabilitySection.style.display === "none" || availabilitySection.style.display === "") {
          availabilitySection.style.display = "block"; // Show the working hours
          this.textContent = "Hide Working Hours"; // Change button text
        } else {
          availabilitySection.style.display = "none"; // Hide the working hours
          this.textContent = "Show Working Hours"; // Reset button text
        }
      });
    }
  
    // Form Submission Alert
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        alert("Thank you for your message! I'll get back to you shortly.");
        this.reset(); // Clear the form
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.getElementById("backToTop");
  
    // Show the button when scrolling down
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
  
    // Scroll to the top when the button is clicked
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  