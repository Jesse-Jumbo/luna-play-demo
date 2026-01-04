// Check login status and update navigation
function updateNavigation() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loginNavItem = document.getElementById('loginNavItem');
    const dashboardNavItem = document.getElementById('dashboardNavItem');
    const logoutNavItem = document.getElementById('logoutNavItem');
    
    if (loginNavItem && dashboardNavItem && logoutNavItem) {
        if (isLoggedIn) {
            loginNavItem.style.display = 'none';
            dashboardNavItem.style.display = 'block';
            logoutNavItem.style.display = 'block';
        } else {
            loginNavItem.style.display = 'block';
            dashboardNavItem.style.display = 'none';
            logoutNavItem.style.display = 'none';
        }
    }
}

// Check login before redirecting to community
function checkLoginAndRedirect(url) {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = url;
    } else {
        if (confirm('需要登入才能進入社群，是否前往登入頁面？')) {
            window.location.href = 'login.html';
        }
    }
}

// Handle logout
function handleLogout() {
    if (confirm('確定要登出嗎？')) {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('loginTime');
        window.location.href = 'index.html';
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Purchase Modal Functions
function openPurchaseModal(planType) {
    const modal = document.getElementById('purchaseModal');
    const modalTitle = document.getElementById('modalTitle');
    
    const planNames = {
        'single': '單次購買',
        'quarterly': '每季訂閱',
        'yearly': '每年訂閱'
    };
    
    modalTitle.textContent = `${planNames[planType]} - 選擇加購項目`;
    modal.style.display = 'block';
    
    // Store the plan type for later use
    modal.dataset.planType = planType;
}

function closePurchaseModal() {
    const modal = document.getElementById('purchaseModal');
    modal.style.display = 'none';
    
    // Reset checkboxes
    const checkboxes = modal.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = false);
}

function confirmPurchase() {
    const modal = document.getElementById('purchaseModal');
    const planType = modal.dataset.planType;
    const selectedAddons = [];
    
    const checkboxes = modal.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(cb => {
        selectedAddons.push(cb.value);
    });
    
    // Show confirmation message
    alert(`感謝您的訂購！\n\n訂閱方案：${planType}\n加購項目：${selectedAddons.length > 0 ? selectedAddons.join('、') : '無'}\n\n（此為 Demo 版本，實際功能需連接後端系統）`);
    
    closePurchaseModal();
}

// Close modals when clicking outside
window.onclick = function(event) {
    const purchaseModal = document.getElementById('purchaseModal');
    
    if (event.target == purchaseModal) {
        closePurchaseModal();
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Theme products data
const themeProducts = {
    'roleplay': [
        { name: '水手服（女）', image: 'assets/水手服女.webp' },
        { name: '水手服（男）', image: 'assets/水手服男.webp' },
        { name: '水手服（男）', image: 'assets/水手服男2.webp' },
        { name: '制服', image: 'assets/制服女.webp' },
        { name: '性感網紗睡衣', image: 'assets/性感女睡衣網紗.jpg' },
        { name: '男性網紗服裝', image: 'assets/男性感網紗服裝.jpg' }
    ],
    'sensory': [
        { name: '感官刺激羽毛', image: 'assets/感官刺激羽毛.webp' },
        { name: '羽毛挑逗棒', image: 'assets/羽毛挑逗棒.jpg' },
        { name: '蕾絲眼罩', image: 'assets/雷斯眼罩.jpg' },
        { name: '低溫蠟燭', image: 'assets/低溫蠟燭.jpg' },
        { name: '香精', image: 'assets/香精.webp' }
    ],
    'bdsm': [
        { name: '束縛手銬', image: 'assets/束縛手銬.jpeg' },
        { name: '粉色手銬', image: 'assets/手銬（粉）.png' },
        { name: '項圈', image: 'assets/項圈.webp' },
        { name: '乳鏈乳夾', image: 'assets/乳鏈乳夾.jpg' },
        { name: 'BDSM道具', image: 'assets/BDSM.webp' }
    ],
    'romantic': [
        { name: '香精', image: 'assets/香精.webp' },
        { name: '潤滑液', image: 'assets/潤滑液.jpg' },
        { name: '熱感潤滑液', image: 'assets/熱感潤滑液.jpg' },
        { name: '迷你震動棒', image: 'assets/迷你震動棒.jpg' }
    ],
    'addon-safety': [
        { name: '標準型保險套', image: 'assets/潤滑液.jpg' },
        { name: '大尺寸保險套', image: 'assets/熱感潤滑液.jpg' },
        { name: '特殊功能保險套', image: 'assets/潤滑液.jpg' }
    ],
    'addon-lubricant': [
        { name: '水基潤滑液', image: 'assets/潤滑液.jpg' },
        { name: '矽基潤滑液', image: 'assets/熱感潤滑液.jpg' },
        { name: '特殊功能潤滑液', image: 'assets/潤滑液.jpg' },
        { name: '按摩油', image: 'assets/香精.webp' }
    ],
    'addon-cleaning': [
        { name: '清潔噴霧', image: 'assets/潤滑液.jpg' },
        { name: '玩具專用清潔液', image: 'assets/熱感潤滑液.jpg' },
        { name: '清潔濕巾', image: 'assets/潤滑液.jpg' }
    ],
    'addon-other': [
        { name: '基礎情趣道具', image: 'assets/束縛手銬.jpeg' },
        { name: '進階情趣道具', image: 'assets/項圈.webp' },
        { name: '高級情趣道具', image: 'assets/BDSM.webp' },
        { name: '迷你震動棒', image: 'assets/迷你震動棒.jpg' }
    ]
};

// Carousel positions for each theme
const carouselPositions = {
    'roleplay': 0,
    'sensory': 0,
    'bdsm': 0,
    'romantic': 0,
    'addon-safety': 0,
    'addon-lubricant': 0,
    'addon-cleaning': 0,
    'addon-other': 0
};

// Auto-play intervals for each theme
const carouselIntervals = {
    'roleplay': null,
    'sensory': null,
    'bdsm': null,
    'romantic': null,
    'addon-safety': null,
    'addon-lubricant': null,
    'addon-cleaning': null,
    'addon-other': null
};

// Toggle theme products carousel
function toggleThemeProducts(themeId, element) {
    // Prevent event bubbling if called from button click
    if (event) {
        event.stopPropagation();
    }
    
    const card = element || event?.currentTarget || document.querySelector(`.theme-card[data-theme="${themeId}"]`);
    if (!card) return;
    
    const carousel = document.getElementById(`carousel-${themeId}`);
    if (!carousel) return;
    
    // Check if currently showing
    const isExpanding = !carousel.classList.contains('show');
    
    // Close all other carousels
    document.querySelectorAll('.theme-products-carousel').forEach(c => {
        if (c !== carousel) {
            c.classList.remove('show');
            const otherId = c.id.replace('carousel-', '');
            stopAutoPlay(otherId);
        }
    });
    
    // Close all addon carousels
    document.querySelectorAll('.addon-category').forEach(c => {
        c.classList.remove('expanded');
        const otherCategoryId = c.dataset.category;
        if (otherCategoryId) {
            const otherCarousel = document.getElementById(`carousel-addon-${otherCategoryId}`);
            if (otherCarousel) {
                otherCarousel.classList.remove('show');
            }
            stopAutoPlay(`addon-${otherCategoryId}`);
        }
    });
    
    // Close all theme cards expanded state
    document.querySelectorAll('.theme-card').forEach(c => {
        c.classList.remove('expanded');
    });
    
    // Toggle current carousel
    if (isExpanding) {
        card.classList.add('expanded');
        carousel.classList.add('show');
        initializeCarousel(themeId);
    } else {
        card.classList.remove('expanded');
        carousel.classList.remove('show');
        stopAutoPlay(themeId);
    }
}

// Toggle addon category carousel
// Track active addon item
let activeAddonItem = null;
let activeAddonCategory = null;

function toggleAddonCategory(categoryId, element) {
    if (event) {
        event.stopPropagation();
    }
    
    const category = element || event?.currentTarget || document.querySelector(`.addon-category[data-category="${categoryId}"]`);
    if (!category) return;
    
    const themeId = `addon-${categoryId}`;
    const carousel = document.getElementById(`carousel-${themeId}`);
    if (!carousel) return;
    
    // Check if currently showing
    const isExpanding = !carousel.classList.contains('show');
    
    // Reset all arrows to right
    document.querySelectorAll('.addon-item-icon').forEach(icon => {
        icon.textContent = '▶';
    });
    
    // Close all other addon carousels and reset their arrows
    document.querySelectorAll('.addon-category').forEach(c => {
        if (c !== category) {
            c.classList.remove('expanded');
            const otherId = `addon-${c.dataset.category}`;
            const otherCarousel = document.getElementById(`carousel-${otherId}`);
            if (otherCarousel) {
                otherCarousel.classList.remove('show');
            }
            stopAutoPlay(otherId);
            // Reset arrows in other categories
            c.querySelectorAll('.addon-item-icon').forEach(icon => {
                icon.textContent = '▶';
            });
        }
    });
    
    // Close all theme carousels
    document.querySelectorAll('.theme-card').forEach(c => {
        c.classList.remove('expanded');
        const otherThemeId = c.dataset.theme;
        if (otherThemeId) {
            const otherCarousel = document.getElementById(`carousel-${otherThemeId}`);
            if (otherCarousel) {
                otherCarousel.classList.remove('show');
            }
            stopAutoPlay(otherThemeId);
        }
    });
    
    // Close all other carousels
    document.querySelectorAll('.theme-products-carousel').forEach(c => {
        if (c !== carousel) {
            c.classList.remove('show');
            const otherId = c.id.replace('carousel-', '');
            stopAutoPlay(otherId);
        }
    });
    
    // Toggle current carousel
    if (isExpanding) {
        category.classList.add('expanded');
        carousel.classList.add('show');
        initializeCarousel(themeId);
        // Set all arrows in this category to down
        category.querySelectorAll('.addon-item-icon').forEach(icon => {
            icon.textContent = '▼';
        });
        activeAddonCategory = categoryId;
        activeAddonItem = null;
    } else {
        category.classList.remove('expanded');
        carousel.classList.remove('show');
        stopAutoPlay(themeId);
        // Reset arrows in this category to right
        category.querySelectorAll('.addon-item-icon').forEach(icon => {
            icon.textContent = '▶';
        });
        activeAddonCategory = null;
    }
}

function toggleAddonItem(categoryId, element) {
    if (event) {
        event.stopPropagation();
    }
    
    const item = element || event?.currentTarget;
    if (!item) return;
    
    const icon = item.querySelector('.addon-item-icon');
    if (!icon) return;
    
    const themeId = `addon-${categoryId}`;
    const carousel = document.getElementById(`carousel-${themeId}`);
    if (!carousel) return;
    
    // Check if this item is currently active
    const isCurrentlyActive = activeAddonItem === item && carousel.classList.contains('show');
    
    // Reset all arrows to right
    document.querySelectorAll('.addon-item-icon').forEach(i => {
        i.textContent = '▶';
    });
    
    // Close all other carousels
    document.querySelectorAll('.addon-category').forEach(c => {
        c.classList.remove('expanded');
        const otherId = `addon-${c.dataset.category}`;
        const otherCarousel = document.getElementById(`carousel-${otherId}`);
        if (otherCarousel && otherCarousel !== carousel) {
            otherCarousel.classList.remove('show');
        }
        if (otherId !== themeId) {
            stopAutoPlay(otherId);
        }
    });
    
    // Close all theme carousels
    document.querySelectorAll('.theme-card').forEach(c => {
        c.classList.remove('expanded');
        const otherThemeId = c.dataset.theme;
        if (otherThemeId) {
            const otherCarousel = document.getElementById(`carousel-${otherThemeId}`);
            if (otherCarousel) {
                otherCarousel.classList.remove('show');
            }
            stopAutoPlay(otherThemeId);
        }
    });
    
    // Close all other carousels
    document.querySelectorAll('.theme-products-carousel').forEach(c => {
        if (c !== carousel) {
            c.classList.remove('show');
            const otherId = c.id.replace('carousel-', '');
            stopAutoPlay(otherId);
        }
    });
    
    // Toggle current carousel
    if (isCurrentlyActive) {
        // Close if clicking the same item again
        carousel.classList.remove('show');
        stopAutoPlay(themeId);
        icon.textContent = '▶';
        activeAddonItem = null;
        activeAddonCategory = null;
    } else {
        // Open carousel
        carousel.classList.add('show');
        initializeCarousel(themeId);
        icon.textContent = '▼';
        activeAddonItem = item;
        activeAddonCategory = null;
    }
}

// Initialize carousel with products
function initializeCarousel(themeId) {
    const track = document.getElementById(`track-${themeId}`);
    const carousel = document.getElementById(`carousel-${themeId}`);
    if (!track || !carousel) return;
    
    const products = themeProducts[themeId];
    if (!products) return;
    
    // Clear existing items
    track.innerHTML = '';
    
    const itemWidth = 250 + 32;
    const containerWidth = track.parentElement.offsetWidth || 1400;
    const visibleItems = Math.ceil(containerWidth / itemWidth);
    
    // If products don't fill screen, duplicate until they do
    let itemsToShow = [...products];
    while (itemsToShow.length < visibleItems) {
        itemsToShow = [...itemsToShow, ...products];
    }
    
    // Clone last items at the beginning for seamless loop
    const cloneCount = Math.max(visibleItems, products.length);
    const lastItems = itemsToShow.slice(-cloneCount);
    lastItems.forEach((product) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="carousel-item-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22250%22 height=%22220%22%3E%3Crect fill=%22%23F3F4F6%22 width=%22250%22 height=%22220%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%236B7280%22%3E無圖片%3C/text%3E%3C/svg%3E';">
            <div class="carousel-item-info">
                <div class="carousel-item-name">${product.name}</div>
            </div>
        `;
        track.appendChild(item);
    });
    
    // Create main items
    itemsToShow.forEach((product) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="carousel-item-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22250%22 height=%22220%22%3E%3Crect fill=%22%23F3F4F6%22 width=%22250%22 height=%22220%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%236B7280%22%3E無圖片%3C/text%3E%3C/svg%3E';">
            <div class="carousel-item-info">
                <div class="carousel-item-name">${product.name}</div>
            </div>
        `;
        track.appendChild(item);
    });
    
    // Clone first items at the end for seamless loop
    const firstItems = itemsToShow.slice(0, cloneCount);
    firstItems.forEach((product) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="carousel-item-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22250%22 height=%22220%22%3E%3Crect fill=%22%23F3F4F6%22 width=%22250%22 height=%22220%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%236B7280%22%3E無圖片%3C/text%3E%3C/svg%3E';">
            <div class="carousel-item-info">
                <div class="carousel-item-name">${product.name}</div>
            </div>
        `;
        track.appendChild(item);
    });
    
    // Add dots navigation (only for original products)
    const container = carousel.querySelector('.carousel-container');
    if (container && !container.querySelector('.carousel-dots')) {
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'carousel-dots';
        dotsContainer.id = `dots-${themeId}`;
        products.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
            dot.onclick = () => goToSlide(themeId, index);
            dotsContainer.appendChild(dot);
        });
        container.appendChild(dotsContainer);
    }
    
    // Set initial position to start of main items (after cloned items at beginning)
    const cloneWidth = cloneCount * itemWidth;
    carouselPositions[themeId] = cloneWidth;
    updateCarouselPosition(themeId);
    
    // Start auto-play
    startAutoPlay(themeId);
}

// Update carousel position
function updateCarouselPosition(themeId) {
    const track = document.getElementById(`track-${themeId}`);
    if (!track) return;
    
    const products = themeProducts[themeId];
    if (!products) return;
    
    const itemWidth = 250 + 32; // item width + gap
    const containerWidth = track.parentElement.offsetWidth || 1400;
    const visibleItems = Math.ceil(containerWidth / itemWidth);
    
    // Calculate how many items we need to fill screen
    let itemsNeeded = [...products];
    while (itemsNeeded.length < visibleItems) {
        itemsNeeded = [...itemsNeeded, ...products];
    }
    const mainItemsWidth = itemsNeeded.length * itemWidth;
    const cloneCount = Math.max(visibleItems, products.length);
    const cloneWidth = cloneCount * itemWidth;
    
    let position = carouselPositions[themeId];
    const mainStart = cloneWidth;
    const mainEnd = cloneWidth + mainItemsWidth;
    const totalEnd = cloneWidth + mainItemsWidth + cloneWidth;
    
    // Apply the transform first to show the animation
    track.style.transform = `translateX(-${position}px)`;
    
    // Remove any existing transitionend listener
    const handleTransitionEnd = () => {
        const currentPos = carouselPositions[themeId];
        
        // After scrolling past the end clones, jump back to start of main items
        if (currentPos >= mainEnd) {
            const offset = currentPos - mainEnd;
            carouselPositions[themeId] = mainStart + offset;
            track.style.transition = 'none';
            track.style.transform = `translateX(-${carouselPositions[themeId]}px)`;
            void track.offsetWidth;
            track.style.transition = '';
        }
        // After scrolling before the start clones, jump to end of main items
        else if (currentPos < mainStart) {
            const offset = currentPos;
            carouselPositions[themeId] = mainEnd + offset;
            track.style.transition = 'none';
            track.style.transform = `translateX(-${carouselPositions[themeId]}px)`;
            void track.offsetWidth;
            track.style.transition = '';
        }
        
        track.removeEventListener('transitionend', handleTransitionEnd);
    };
    
    // Add transitionend listener to check position after animation
    track.addEventListener('transitionend', handleTransitionEnd, { once: true });
    
    // Update dots based on position within main items
    let positionInMain = position - cloneWidth;
    if (positionInMain < 0) {
        positionInMain = mainItemsWidth + positionInMain;
    } else if (positionInMain >= mainItemsWidth) {
        positionInMain = positionInMain - mainItemsWidth;
    }
    const currentSlide = Math.floor((positionInMain % mainItemsWidth) / itemWidth) % products.length;
    const dotsContainer = document.getElementById(`dots-${themeId}`);
    if (dotsContainer) {
        dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
}

// Carousel navigation
function carouselPrev(themeId) {
    if (event) event.stopPropagation();
    stopAutoPlay(themeId);
    const itemWidth = 250 + 32;
    carouselPositions[themeId] -= itemWidth * 2;
    updateCarouselPosition(themeId);
    startAutoPlay(themeId);
}

function carouselNext(themeId) {
    if (event) event.stopPropagation();
    stopAutoPlay(themeId);
    const itemWidth = 250 + 32;
    carouselPositions[themeId] += itemWidth * 2;
    updateCarouselPosition(themeId);
    startAutoPlay(themeId);
}

function goToSlide(themeId, slideIndex) {
    if (event) event.stopPropagation();
    stopAutoPlay(themeId);
    const itemWidth = 250 + 32;
    const track = document.getElementById(`track-${themeId}`);
    const containerWidth = track ? track.parentElement.offsetWidth || 1400 : 1400;
    const visibleItems = Math.ceil(containerWidth / itemWidth);
    const products = themeProducts[themeId];
    let itemsNeeded = [...products];
    while (itemsNeeded.length < visibleItems) {
        itemsNeeded = [...itemsNeeded, ...products];
    }
    const cloneCount = Math.max(visibleItems, products.length);
    const cloneWidth = cloneCount * itemWidth;
    // Set position to start of main items + target slide
    carouselPositions[themeId] = cloneWidth + (slideIndex * itemWidth);
    updateCarouselPosition(themeId);
    startAutoPlay(themeId);
}

// Auto-play functions
function startAutoPlay(themeId) {
    stopAutoPlay(themeId);
    carouselIntervals[themeId] = setInterval(() => {
        const itemWidth = 250 + 32;
        carouselPositions[themeId] += itemWidth * 2;
        updateCarouselPosition(themeId);
    }, 3000); // Auto-play every 3 seconds
}

function stopAutoPlay(themeId) {
    if (carouselIntervals[themeId]) {
        clearInterval(carouselIntervals[themeId]);
        carouselIntervals[themeId] = null;
    }
}

// Add scroll animation on load
window.addEventListener('load', function() {
    // Update navigation based on login status
    updateNavigation();
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.feature-card, .theme-card, .pricing-card, .community-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(card);
    });
});

