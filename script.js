// ============================================
// PRODUCT DATA
// ============================================
const products = [
    {
        name: "Classic White Shirt",
        price: "₹899",
        imageColor: "#667eea"
    },
    {
        name: "Denim Jeans",
        price: "₹1,299",
        imageColor: "#764ba2"
    },
    {
        name: "Cotton T-Shirt",
        price: "₹499",
        imageColor: "#f093fb"
    },
    {
        name: "Formal Trousers",
        price: "₹1,499",
        imageColor: "#4facfe"
    },
    {
        name: "Casual Shirt",
        price: "₹799",
        imageColor: "#43e97b"
    },
    {
        name: "Slim Fit Jeans",
        price: "₹1,399",
        imageColor: "#fa709a"
    },
    {
        name: "Polo T-Shirt",
        price: "₹599",
        imageColor: "#fee140"
    },
    {
        name: "Chinos",
        price: "₹1,199",
        imageColor: "#30cfd0"
    },
    {
        name: "Hoodie",
        price: "₹1,599",
        imageColor: "#a8edea"
    },
    {
        name: "Cargo Pants",
        price: "₹1,349",
        imageColor: "#ff9a9e"
    },
    {
        name: "V-Neck T-Shirt",
        price: "₹449",
        imageColor: "#fecfef"
    },
    {
        name: "Blazer",
        price: "₹2,499",
        imageColor: "#ffecd2"
    }
];

// ============================================
// DISPLAY PRODUCTS
// ============================================
function displayProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) {
        console.error('Products grid not found');
        return;
    }
    
    productsGrid.innerHTML = products.map((product, index) => {
        const gradientEnd = adjustColor(product.imageColor, -20);
        return `
        <div class="product-card">
            <div class="product-image" style="background: linear-gradient(135deg, ${product.imageColor} 0%, ${gradientEnd} 100%);">
                <span style="color: white; font-size: 1.1rem; font-weight: 500; text-align: center; padding: 20px;">${product.name}</span>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}</p>
            </div>
        </div>
    `;
    }).join('');
}

// Helper function to create gradient colors
function adjustColor(color, amount) {
    // For simplicity, we'll use complementary colors
    // In production, you'd use a proper color manipulation library
    const colorMap = {
        '#667eea': '#764ba2',
        '#764ba2': '#667eea',
        '#f093fb': '#4facfe',
        '#4facfe': '#f093fb',
        '#43e97b': '#fa709a',
        '#fa709a': '#43e97b',
        '#fee140': '#30cfd0',
        '#30cfd0': '#fee140',
        '#a8edea': '#ff9a9e',
        '#ff9a9e': '#a8edea',
        '#fecfef': '#ffecd2',
        '#ffecd2': '#fecfef'
    };
    return colorMap[color] || color;
}

// ============================================
// WHATSAPP BUTTON FUNCTIONALITY
// ============================================
function initWhatsAppButton() {
    const whatsappButton = document.getElementById('whatsappButton');
    
    if (whatsappButton) {
        // Add click event listener
        whatsappButton.addEventListener('click', function(e) {
            // The href already handles the navigation
            // This is just for any additional functionality if needed
            console.log('WhatsApp button clicked');
        });
        
        // Ensure button stays visible on scroll
        window.addEventListener('scroll', function() {
            // Button is fixed, so it will always stay visible
            // This is just a placeholder for any scroll-based animations if needed
        });
    }
}

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================
function initSmoothScrolling() {
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
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    initWhatsAppButton();
    initSmoothScrolling();
    
    console.log('Cloth Shop website loaded successfully!');
});

// ============================================
// ADD LOADING ANIMATION (OPTIONAL)
// ============================================
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
});

