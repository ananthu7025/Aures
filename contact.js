
  document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.cursor');
    const imageSectionImages = document.querySelectorAll('.image-section img');
	const footer = document.querySelector('.footer-last');
	// const viewProjectCursor=this.querySelector('.animated-section')
    const body = document.body;
    document.addEventListener('mousemove', e => {
		const cursorSize = 20; // Adjust the cursor size as needed
        const cursorOffset = 20; // Adjust the offset from the right edge

        // Calculate the cursor's position
        const cursorTop = (e.pageY - cursorSize / 2) + 'px';
        const cursorLeft = Math.min(e.pageX, window.innerWidth - cursorSize - cursorOffset) + 'px';

        // Set the cursor's position
        cursor.style.top = cursorTop;
        cursor.style.left = cursorLeft;
		footer.addEventListener('mouseenter', () => {
			cursor.style.display = 'none'; // Hide the cursor circle
		});
	
		// Event listener for when the mouse leaves the footer
		footer.addEventListener('mouseleave', () => {
			cursor.style.display = 'block'; // Show the cursor circle
		});
        viewProjectCursor.style.top = (e.pageY - 30) + "px";
		
        viewProjectCursor.style.left = (e.pageX - 20) + "px";

        if (e.target.closest('.image-section img')) {
            viewProjectCursor.style.display = 'block';
        } else {
            viewProjectCursor.style.display = 'none';
        }
    });

    document.addEventListener('click', () => {
        cursor.classList.add("expand");
        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500);
    });
    document.getElementById('contact-form').addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(event.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
          formDataObject[key] = value;
        });      
        try {
          const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObject),
          });
          if (response.ok) {
            const responseData = await response.json();
            launch_toast()
          } else {
            console.error('Error:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      });
  });
  
  function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

document.addEventListener("DOMContentLoaded", function() {
	// Get the "Scroll to Top" button element
	var scrollToTopBtn = document.getElementById("scrollToTopBtn");
	console.log("one d");
  
	// Show the button when the user scrolls down
	window.addEventListener("scroll", function() {
	  if (window.scrollY > 200) {
		scrollToTopBtn.style.display = "block";
	  } else {
		scrollToTopBtn.style.display = "none";
	  }
	});
  
	// Scroll to the top when the button is clicked
	scrollToTopBtn.addEventListener("click", function() {
	  // Smooth scroll to the top
	  window.scrollTo({
		top: 0,
		behavior: "smooth"
	  });
	});
  });