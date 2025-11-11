// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to switch tabs
    function switchTab(tabName) {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to selected tab button and content
        const selectedButton = document.querySelector(`[data-tab="${tabName}"]`);
        const selectedContent = document.getElementById(tabName);

        if (selectedButton && selectedContent) {
            selectedButton.classList.add('active');
            selectedContent.classList.add('active');
            
            // Save selected tab to localStorage
            localStorage.setItem('selectedTab', tabName);
        }
    }

    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    // Restore last selected tab from localStorage
    const lastSelectedTab = localStorage.getItem('selectedTab');
    if (lastSelectedTab) {
        switchTab(lastSelectedTab);
    }

    // Add search functionality
    addSearchFeature();

    // Add table sorting
    addTableSorting();
});

// Search functionality
function addSearchFeature() {
    // Create search box for each tab with tables
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabContents.forEach(tabContent => {
        const tables = tabContent.querySelectorAll('.modern-table');
        
        if (tables.length > 0) {
            // Create search box
            const searchDiv = document.createElement('div');
            searchDiv.className = 'search-box';
            searchDiv.innerHTML = `
                <input type="text" placeholder="🔍 検索..." class="search-input">
            `;
            
            // Insert search box before the table
            const tableWrapper = tabContent.querySelector('.table-wrapper');
            if (tableWrapper) {
                tabContent.insertBefore(searchDiv, tableWrapper);
                
                // Add search event listener
                const searchInput = searchDiv.querySelector('.search-input');
                searchInput.addEventListener('keyup', function() {
                    const searchTerm = this.value.toLowerCase();
                    const table = tableWrapper.querySelector('.modern-table');
                    const rows = table.querySelectorAll('tbody tr');
                    
                    rows.forEach(row => {
                        const text = row.textContent.toLowerCase();
                        if (text.includes(searchTerm)) {
                            row.style.display = '';
                        } else {
                            row.style.display = 'none';
                        }
                    });
                });
            }
        }
    });
    
    // Add CSS for search box
    const style = document.createElement('style');
    style.textContent = `
        .search-box {
            margin-bottom: 20px;
        }
        
        .search-input {
            width: 100%;
            padding: 12px 20px;
            font-size: 1rem;
            border: 2px solid var(--border-color);
            border-radius: 8px;
            transition: all 0.3s ease;
        }
        
        .search-input:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }
    `;
    document.head.appendChild(style);
}

// Table sorting functionality
function addTableSorting() {
    const tables = document.querySelectorAll('.modern-table');
    
    tables.forEach(table => {
        const headers = table.querySelectorAll('thead th');
        
        headers.forEach((header, index) => {
            header.style.cursor = 'pointer';
            header.style.userSelect = 'none';
            header.title = 'クリックして並び替え';
            
            header.addEventListener('click', function() {
                sortTable(table, index);
            });
        });
    });
}

function sortTable(table, columnIndex) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const isAscending = table.dataset.sortOrder !== 'asc';
    
    rows.sort((a, b) => {
        const aValue = a.querySelectorAll('td')[columnIndex]?.textContent.trim() || '';
        const bValue = b.querySelectorAll('td')[columnIndex]?.textContent.trim() || '';
        
        // Try to parse as number
        const aNum = parseFloat(aValue);
        const bNum = parseFloat(bValue);
        
        if (!isNaN(aNum) && !isNaN(bNum)) {
            return isAscending ? aNum - bNum : bNum - aNum;
        }
        
        // Otherwise sort as string
        return isAscending 
            ? aValue.localeCompare(bValue, 'ja')
            : bValue.localeCompare(aValue, 'ja');
    });
    
    // Clear and re-append sorted rows
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
    
    // Update sort order
    table.dataset.sortOrder = isAscending ? 'asc' : 'desc';
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Alt + number keys to switch tabs
    if (e.altKey && e.key >= '1' && e.key <= '9') {
        e.preventDefault();
        const tabButtons = document.querySelectorAll('.tab-button');
        const index = parseInt(e.key) - 1;
        if (tabButtons[index]) {
            tabButtons[index].click();
        }
    }
});

// Add tooltip for keyboard shortcuts
window.addEventListener('load', function() {
    const firstTabButton = document.querySelector('.tab-button');
    if (firstTabButton) {
        firstTabButton.title = 'Alt + 1-9 でタブを素早く切り替え';
    }
});

