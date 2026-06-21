// Navigation
        const navButtons = document.querySelectorAll('.nav-btn');
        const sections = document.querySelectorAll('section');

        navButtons.forEach(button => {
            button.addEventListener('click', function() {
                const sectionId = this.getAttribute('data-section');
                navigateTo(sectionId);
            });
        });

        function navigateTo(sectionId) {
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Remove active class from all buttons
            navButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Show selected section
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Add active class to clicked button
            const activeButton = document.querySelector(`[data-section="${sectionId}"]`);
            if (activeButton) {
                activeButton.classList.add('active');
            }

            // Scroll to top
            window.scrollTo(0, 0);
        }

        // CSS Demo
        const cssColor = document.getElementById('cssColor');
        const cssSize = document.getElementById('cssSize');
        const cssPreview = document.getElementById('cssPreview');

        if (cssColor && cssSize && cssPreview) {
            cssColor.addEventListener('input', updateCSSPreview);
            cssSize.addEventListener('input', updateCSSPreview);

            function updateCSSPreview() {
                cssPreview.style.color = cssColor.value;
                cssPreview.style.fontSize = cssSize.value + 'px';
            }
        }

        // JavaScript Search Demo
        const jsSearchBox = document.getElementById('jsSearchBox');
        const jsSearchResults = document.getElementById('jsSearchResults');

        if (jsSearchBox && jsSearchResults) {
            jsSearchBox.addEventListener('keyup', function() {
                const query = this.value.toLowerCase();
                const items = jsSearchResults.querySelectorAll('li');

                items.forEach(item => {
                    if (item.textContent.toLowerCase().includes(query) || query === '') {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        }

        // JavaScript Counter Demo
        let jsCount = 0;

        function increaseJSCount() {
            jsCount++;
            document.getElementById('jsCounter').textContent = jsCount;
            document.getElementById('jsCounterText').textContent = jsCount;
        }

        function decreaseJSCount() {
            jsCount--;
            document.getElementById('jsCounter').textContent = jsCount;
            document.getElementById('jsCounterText').textContent = jsCount;
        }

        // HTML Form Demo
        const htmlForm = document.getElementById('htmlForm');
        if (htmlForm) {
            htmlForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for submitting the form! This demonstrates HTML form handling.');
                this.reset();
            });
        }
