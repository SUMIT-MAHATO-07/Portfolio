
  // Hide preloader after everything loads
  window.onload = function() {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  };

function sharePage() {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: 'Check out this page!',
        url: window.location.href
      })
      .then(() => console.log('Page shared successfully!'))
      .catch(error => console.log('Error sharing:', error));
    } else {
      alert('Sharing not supported on this browser.');
    }
  }

  function showMyInfo() {
    const info = document.getElementById("myInfo");
    if (info.style.display === "none" || info.style.display === "") {
      info.style.display = "block";
    } else {
      info.style.display = "none";
    }
  }

 // Toggle Section Open/Close
const button = document.getElementById('toggleButton');  
// Sidebar Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

if (menuToggle && sidebar && closeBtn) {
  menuToggle.addEventListener('click', function() {
    sidebar.classList.add('active');
  });

  closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('active');
  });
}

function openForm() {
      document.getElementById("hire-me-form").style.display = "flex";
    }

    function closeForm() {
      document.getElementById("hire-me-form").style.display = "none";
    }

    document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();
      document.getElementById("thankYouMessage").style.display = "block";
      
      // Optional: You can integrate EmailJS or Formspree here

      // Auto-close form after 2 seconds
      setTimeout(() => {
        closeForm();
        document.getElementById("thankYouMessage").style.display = "none";
        document.getElementById("contactForm").reset();
      }, 2000);
    });
    
