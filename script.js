document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');

    if (hamburger && navLinks && authButtons) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            authButtons.classList.toggle('active');
        });
    }

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    if (testimonials.length && dots.length && prevBtn && nextBtn) {
        let currentTestimonial = 0;
        let testimonialInterval;

        function showTestimonial(index) {
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            testimonials[index].classList.add('active');
            dots[index].classList.add('active');
            currentTestimonial = index;
        }

        function startTestimonialRotation() {
            testimonialInterval = setInterval(() => {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(currentTestimonial);
            }, 5000);
        }

        function stopTestimonialRotation() {
            clearInterval(testimonialInterval);
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                stopTestimonialRotation();
                showTestimonial(index);
                startTestimonialRotation();
            });
        });

        prevBtn.addEventListener('click', () => {
            stopTestimonialRotation();
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
            startTestimonialRotation();
        });

        nextBtn.addEventListener('click', () => {
            stopTestimonialRotation();
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
            startTestimonialRotation();
        });

        // Start auto-rotation
        showTestimonial(0);
        startTestimonialRotation();
    }

    // Wardrobe Tab System
    const tabButtons = document.querySelectorAll('.tab-btn');
    const wardrobeItems = document.querySelector('.wardrobe-items');

    // Enhanced Wardrobe Data with season and more attributes
    const wardrobeData = {
        shirts: [
            { id: 1, name: 'White T-Shirt', color: 'white', type: 'casual', season: 'all', image: 'https://i5.walmartimages.com/asr/c9ecef4f-8e1e-4f24-8786-e88f1846255c.a79d87519fef1e4e9d626ff3b446742c.jpeg' },
            { id: 2, name: 'Blue Button-Up', color: 'blue', type: 'business', season: 'all', image: 'https://cdnd.lystit.com/photos/16db-2014/12/19/river-island-blue-navy-long-sleeve-button-shirt-product-1-26188743-2-748304559-normal.jpeg' },
            { id: 3, name: 'Black Polo', color: 'black', type: 'casual', season: 'all', image: 'https://cdna.lystit.com/photos/2c51-2015/04/06/polo-ralph-lauren-black-logo-embroidered-polo-shirt-product-2-841116472-normal.jpeg' },
            { id: 4, name: 'Striped Shirt', color: 'multicolor', type: 'casual', season: 'summer', image: 'https://tse4.mm.bing.net/th/id/OIP.hXjf9kMAPxcFNPpkDFndtwHaHa?rs=1&pid=ImgDetMain' },
            { id: 5, name: 'Denim Shirt', color: 'blue', type: 'casual', season: 'fall', image: 'https://tse2.mm.bing.net/th/id/OIP.KvC57GfDVDJKhABsivTpcQHaHa?rs=1&pid=ImgDetMain' },
            { id: 6, name: 'Red kurta', color: 'red', type: 'party', season: 'all', image: 'https://tse2.mm.bing.net/th/id/OIP.KNLrTzVaay4Y3dkvdecn3AHaHa?rs=1&pid=ImgDetMain' },

            { id: 6, name: 'Formal White Shirt', color: 'white', type: 'business', season: 'all', image: 'https://tse3.mm.bing.net/th/id/OIP.fvoD8omL8_A_PuPqA8LFVAHaJQ?rs=1&pid=ImgDetMain' },
        ],
        pants: [
            { id: 7, name: 'Blue Jeans', color: 'blue', type: 'casual', season: 'all', image: 'https://res.cloudinary.com/yerdle/image/upload/c_fit,f_auto,h_500,q_auto,w_500/v1604600094/production/partners/8/inventoryItem/700610/hzbvvkq3honzf25kzgio.jpg' },
            { id: 9, name: 'Gray Dress Pants', color: 'gray', type: 'business', season: 'all', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 10, name: 'Beige Khakis', color: 'beige', type: 'casual', season: 'summer', image: 'https://tse2.mm.bing.net/th/id/OIP.QbmrrL_skWPiaSLbsqiXBwAAAA?rs=1&pid=ImgDetMain' },
            { id: 11, name: 'Black Chinos', color: 'black', type: 'casual', season: 'all', image: 'https://images.tailorstore.com/YToyOntzOjU6IndpZHRoIjtpOjE2MDA7czo2OiJoZWlnaHQiO2I6MDt9/images/catalog/wales-black-1.jpg' },
            { id: 12, name: 'White Linen Pants', color: 'white', type: 'casual', season: 'summer', image: 'https://cdnd.lystit.com/photos/mclabels/3dfbfa30/eleventy-WHITE-White-Linen-Pants.jpeg' },
            { id: 13, name: 'Navy Formal Trousers', color: 'navy', type: 'business', season: 'winter', image: 'https://happygentleman.com/wp-content/uploads/2019/11/mens-herringbone-tweed-trousers-cavani-martez-navy2.jpg' },
            
            { id: 15, name: 'Trouser', color: 'white', type: 'party', season: 'all', image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/BP/RT/TL/100421433/whatsapp-image-2022-11-15-at-1-22-36-pm-500x500.jpeg' },
            { id: 14, name: 'Olive Joggers', color: 'olive', type: 'casual', season: 'fall', image: 'https://images.bewakoof.com/original/men-s-olive-oversized-joggers-555634-1685694973-2.jpg' },
            { id: 15, name: 'Brown Corduroy Pants', color: 'brown', type: 'casual', season: 'winter', image: 'https://media.endclothing.com/media/catalog/product/0/5/05-10-23-NS_38210005791-20_1_1.jpg' },
        ],
        shoes: [
            { id: 16, name: 'White Sneakers', color: 'white', type: 'casual', season: 'all', image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 17, name: 'Black Dress Shoes', color: 'black', type: 'business', season: 'all', image: 'https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/15823372/2022/7/6/194b82ce-a6c1-4181-af3e-e24272fc77291657108162701-INVICTUS-Men-Black-Textured-Formal-Derbys-7101657108162610-7.jpg' },
            { id: 18, name: 'Brown Loafers', color: 'brown', type: 'business', season: 'all', image: 'https://tse1.explicit.bing.net/th/id/OIP.cH_2WZzO391pezcsan-CvQHaKe?rs=1&pid=ImgDetMain' }
        ],
        accessories: [
            { id: 19, name: 'Leather Belt', color: 'brown', type: 'business', season: 'all', image: 'https://i5.walmartimages.com/asr/a5135d19-826f-499b-8cf7-d70f3e9b3228_1.dd9a82b10d178223eef4e38e811b5e72.jpeg' },
            { id: 20, name: 'Baseball Cap', color: 'blue', type: 'casual', season: 'summer', image: 'https://i5.walmartimages.com/asr/5145b2a0-d651-4e6f-93bc-82d6231a69ad_1.e24f04f5aac30d74385f92746b06c5b7.jpeg' },
            { id: 21, name: 'Silk Tie', color: 'red', type: 'business', season: 'all', image: 'https://tse2.mm.bing.net/th/id/OIP.JyDytw6fCIvsQk8BPNTvcwHaIa?rs=1&pid=ImgDetMain' },
            { id: 22, name: 'Silver Watch', color: 'silver', type: 'accessory', season: 'all', image: 'https://tse2.mm.bing.net/th/id/OIP.hRj2h4omc1PupdttO6aIdwHaHa?rs=1&pid=ImgDetMain' }
        ]
    };

    // Enhanced render function with item details overlay
    function renderWardrobeItems(category) {
        if (!wardrobeItems) return;
        
        wardrobeItems.innerHTML = '';
        const items = wardrobeData[category] || [];
        
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'wardrobe-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-overlay">
                    <h4>${item.name}</h4>
                    <p>Color: ${item.color}</p>
                    <p>Type: ${item.type}</p>
                    <p>Season: ${item.season}</p>
                    <div class="item-actions">
                        <button class="btn small edit-btn" data-id="${item.id}">Edit</button>
                        <button class="btn small delete-btn" data-id="${item.id}">Delete</button>
                    </div>
                </div>
            `;
            wardrobeItems.appendChild(itemElement);
        });

        // Add event listeners for the new buttons
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.dataset.id);
                editItem(itemId);
            });
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.dataset.id);
                deleteItem(itemId, category);
            });
        });
    }

    function editItem(itemId) {
        // Find the item in any category
        let itemToEdit = null;
        let category = '';
        
        for (const cat in wardrobeData) {
            const foundItem = wardrobeData[cat].find(item => item.id === itemId);
            if (foundItem) {
                itemToEdit = foundItem;
                category = cat;
                break;
            }
        }
        
        if (!itemToEdit) return;

        // In a real app, you would show a modal with a form to edit the item
        const newName = prompt('Edit item name:', itemToEdit.name);
        if (newName !== null) {
            itemToEdit.name = newName;
            renderWardrobeItems(category);
        }
    }

    function deleteItem(itemId, category) {
        if (confirm('Are you sure you want to delete this item?')) {
            wardrobeData[category] = wardrobeData[category].filter(item => item.id !== itemId);
            renderWardrobeItems(category);
        }
    }

    // Initialize wardrobe tab system if elements exist
    if (tabButtons.length && wardrobeItems) {
        // Set default tab
        tabButtons[0].classList.add('active');
        renderWardrobeItems('shirts');

        // Tab switching
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                renderWardrobeItems(button.dataset.category);
            });
        });
    }

    // Upload functionality
    const uploadBtn = document.querySelector('.upload-btn');
    const fileInput = document.getElementById('clothing-upload');

    if (uploadBtn && fileInput) {
        uploadBtn.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', function(e) {
            if (this.files && this.files.length > 0) {
                const file = this.files[0];
                
                // Validate image type
                if (!file.type.match('image.*')) {
                    alert('Please select an image file (JPEG, PNG, etc.)');
                    return;
                }
                
                // Create object URL for preview
                const imageUrl = URL.createObjectURL(file);
                
                // For demo purposes, we'll add the uploaded image to the wardrobe
                const activeTab = document.querySelector('.tab-btn.active');
                if (!activeTab) return;
                
                const category = activeTab.dataset.category;
                
                const newItem = {
                    id: Date.now(),
                    name: `Uploaded ${category.slice(0, -1)}`,
                    color: 'unknown',
                    type: 'casual',
                    season: 'all',
                    image: imageUrl
                };
                
                if (!wardrobeData[category]) {
                    wardrobeData[category] = [];
                }
                
                wardrobeData[category].push(newItem);
                renderWardrobeItems(category);
                
                // Reset the file input
                this.value = '';
            }
        });
    }

    // Form submission for adding new items
    const addItemForm = document.querySelector('#add-item-form');
    if (addItemForm) {
        addItemForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const newItem = {
                id: Date.now(),
                name: formData.get('name'),
                color: formData.get('color'),
                type: formData.get('type'),
                season: formData.get('season') || 'all',
                image: formData.get('image-url') || 'https://via.placeholder.com/200'
            };
            
            const category = formData.get('category');
            if (!wardrobeData[category]) {
                wardrobeData[category] = [];
            }
            wardrobeData[category].push(newItem);
            
            // Update the display
            const activeTab = document.querySelector('.tab-btn.active');
            if (activeTab) {
                renderWardrobeItems(activeTab.dataset.category);
            }
            
            // Reset form
            this.reset();
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.textContent = 'Item added successfully!';
            this.appendChild(successMsg);
            
            setTimeout(() => {
                successMsg.remove();
            }, 3000);
        });
    }

    // ======================================================================
    // IMPROVED OUTFIT GENERATION CODE STARTS HERE
    // ======================================================================

    // Outfit Generation with Improved Matching Logic
    const generateBtn = document.querySelector('.generate-btn');
    const occasionSelect = document.getElementById('occasion-select');
    const seasonSelect = document.getElementById('season-select');
    const outfitGrid = document.querySelector('.outfit-grid');
    const loadingSpinner = document.querySelector('.loading-spinner');

    // More flexible color compatibility rules
    const colorCompatibility = {
        white: ['black', 'blue', 'gray', 'beige', 'brown', 'navy', 'khaki', 'denim'],
        black: ['white', 'gray', 'red', 'blue', 'pink', 'silver'],
        blue: ['white', 'black', 'gray', 'beige', 'brown', 'khaki', 'navy'],
        gray: ['white', 'black', 'blue', 'pink', 'red', 'navy'],
        beige: ['white', 'blue', 'brown', 'black', 'navy', 'olive'],
        brown: ['white', 'blue', 'beige', 'green', 'cream'],
        red: ['white', 'black', 'gray', 'navy', 'khaki'],
        multicolor: ['white', 'black', 'denim'],
        silver: ['black', 'white', 'blue', 'gray'],
        unknown: ['white', 'black', 'gray', 'blue', 'beige']
    };

    // More flexible style compatibility
    const styleCompatibility = {
        business: ['business', 'formal', 'smart casual'],
        casual: ['casual', 'sport', 'smart casual'],
        formal: ['business', 'formal'],
        'smart casual': ['business', 'casual']
    };

    function getCompatibleItems(category, occasion, season, colorToMatch = null, styleToMatch = null, attempt = 0) {
        let items = [];
        
        if (wardrobeData[category]) {
            items = wardrobeData[category];
        }
        
        // First attempt - strict matching
        let filteredItems = items.filter(item => {
            const styleMatch = !styleToMatch || 
                             (styleCompatibility[item.type] && 
                              styleCompatibility[item.type].includes(styleToMatch));
            
            const colorMatch = !colorToMatch || 
                              (colorCompatibility[colorToMatch]?.includes(item.color) || 
                              colorCompatibility[item.color]?.includes(colorToMatch) ||
                              item.color === 'unknown' || 
                              colorToMatch === 'unknown');
            
            return (item.type === occasion || 
                   (styleCompatibility[item.type] && 
                    styleCompatibility[item.type].includes(occasion))) &&
                   (item.season === season || item.season === 'all') &&
                   styleMatch &&
                   colorMatch;
        });
        
        // If no results and we're on first attempt, try relaxing color matching
        if (filteredItems.length === 0 && attempt === 0) {
            return getCompatibleItems(category, occasion, season, colorToMatch, styleToMatch, 1);
        }
        
        // If still no results, try relaxing style matching
        if (filteredItems.length === 0 && attempt === 1) {
            filteredItems = items.filter(item => {
                return (item.type === occasion || 
                       (styleCompatibility[item.type] && 
                        styleCompatibility[item.type].includes(occasion))) &&
                       (item.season === season || item.season === 'all');
            });
        }
        
        return filteredItems;
    }

    function generateOutfit(occasion, season) {
        // Try strict matching first
        let shirt = findBestItem('shirts', occasion, season);
        if (!shirt) return null;
        
        let pant = findBestItem('pants', occasion, season, shirt.color, shirt.type);
        if (!pant) {
            // If pants don't match shirt exactly, try without color matching
            pant = findBestItem('pants', occasion, season, null, shirt.type);
            if (!pant) return null;
        }
        
        let shoe = findBestItem('shoes', occasion, season, pant.color, pant.type);
        if (!shoe) {
            shoe = findBestItem('shoes', occasion, season, null, pant.type);
            if (!shoe) return null;
        }
        
        // Accessories are optional
        let accessory = findBestItem('accessories', occasion, season, shirt.color, shirt.type);
        
        return {
            name: `${occasion.charAt(0).toUpperCase() + occasion.slice(1)} Outfit`,
            description: `Perfect for ${occasion} occasions in ${season}`,
            items: [shirt, pant, shoe, accessory].filter(Boolean)
        };
    }

    function findBestItem(category, occasion, season, colorToMatch = null, styleToMatch = null) {
        const items = getCompatibleItems(category, occasion, season, colorToMatch, styleToMatch);
        if (items.length === 0) return null;
        return items[Math.floor(Math.random() * items.length)];
    }

    if (generateBtn && occasionSelect && outfitGrid && loadingSpinner) {
        generateBtn.addEventListener('click', function() {
            const occasion = occasionSelect.value;
            const season = seasonSelect ? seasonSelect.value : 'all'; // Default to 'all' if no season select
            
            loadingSpinner.style.display = 'block';
            outfitGrid.innerHTML = '';
            
            setTimeout(() => {
                loadingSpinner.style.display = 'none';
                
                // Generate 3 outfits
                const outfits = [];
                let attempts = 0;
                const maxAttempts = 10;
                
                while (outfits.length < 3 && attempts < maxAttempts) {
                    attempts++;
                    const outfit = generateOutfit(occasion, season);
                    if (outfit) {
                        // Basic uniqueness check
                        const outfitKey = outfit.items.map(i => i.id).join('-');
                        const isUnique = !outfits.some(o => o.items.map(i => i.id).join('-') === outfitKey);
                        
                        if (isUnique) {
                            outfits.push(outfit);
                        }
                    }
                }
                
                if (outfits.length === 0) {
                    outfitGrid.innerHTML = `
                        <div class="no-outfits">
                            <p>No complete outfits found for ${occasion} in ${season}.</p>
                            <p>Try adding more clothes or selecting a different occasion/season.</p>
                        </div>
                    `;
                    return;
                }
                
                // Display the generated outfits
                outfits.forEach(outfit => {
                    const outfitCard = createOutfitCard(outfit);
                    outfitGrid.appendChild(outfitCard);
                });
            }, 1000);
        });
    }

    function createOutfitCard(outfit) {
        const outfitCard = document.createElement('div');
        outfitCard.className = 'outfit-card';
        
        const mainImage = outfit.items[0].image;
        const thumbnails = outfit.items.map(item => 
            `<img src="${item.image}" alt="${item.name}" title="${item.name}" class="outfit-thumbnail">`
        ).join('');
        
        const itemList = outfit.items.map(item => 
            `<li>${item.name} (${item.color}, ${item.type})</li>`
        ).join('');
        
        outfitCard.innerHTML = `
            <img src="${mainImage}" alt="${outfit.name}" class="outfit-main-image">
            <div class="outfit-details">
                <h4>${outfit.name}</h4>
                <p class="outfit-description">${outfit.description}</p>
                <div class="outfit-items">
                    <p><strong>Includes:</strong></p>
                    <ul>${itemList}</ul>
                    <div class="outfit-thumbnails">${thumbnails}</div>
                </div>
                <div class="outfit-actions">
                    <button class="btn secondary save-outfit">Save</button>
                    <button class="btn primary view-details">View Details</button>
                </div>
            </div>
        `;
        
        outfitCard.querySelector('.save-outfit').addEventListener('click', () => {
            alert(`Outfit "${outfit.name}" saved to your favorites!`);
        });
        
        outfitCard.querySelector('.view-details').addEventListener('click', () => {
            const details = outfit.items.map(item => 
                `${item.name} - Color: ${item.color}, Type: ${item.type}, Season: ${item.season}`
            ).join('\n\n');
            
            alert(`Outfit Details:\n\n${outfit.description}\n\nItems:\n\n${details}`);
        });
        
        return outfitCard;
    }

    // ======================================================================
    // IMPROVED OUTFIT GENERATION CODE ENDS HERE
    // ======================================================================

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                if (navLinks) navLinks.classList.remove('active');
                if (authButtons) authButtons.classList.remove('active');
            }
        });
    });

    // Get Started button
    const getStartedBtn = document.querySelector('.get-started');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const outfitGenerator = document.querySelector('.outfit-generator');
            if (outfitGenerator) {
                outfitGenerator.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});