 

    <script>
        function showPage(pageId) {
            
            let pages = document.querySelectorAll('.page');
            pages.forEach(page => {
                page.classList.remove('active');
            });

            
            let selectedPage = document.getElementById(pageId);
            selectedPage.classList.add('active');
        }
    </script>
