
const categories = [
  { icon: '🏖️', name: 'Amazing pools' },
  { icon: '🏕️', name: 'Camping' },
  { icon: '🏰', name: 'Castles' },
  { icon: '❄️', name: 'Arctic' },
  { icon: '🏜️', name: 'Desert' },
  { icon: '🏝️', name: 'Islands' },
  { icon: '🏔️', name: 'Amazing views' },
  { icon: '🍷', name: 'Vineyards' },
  { icon: '🎾', name: 'Play' },
  { icon: '🏌️', name: 'Golfing' },
  { icon: '🏄', name: 'Surfing' },
  { icon: '🚣', name: 'Lake' },
  { icon: '🏡', name: 'Tiny homes' },
  { icon: '🛸', name: 'OMG!' },
  { icon: '🥘', name: 'Bed & breakfasts' },
  
];

const listings = [
  { id: 1, location: 'Santorini, Greece', distance: '1,243 miles away', dates: 'Jun 10 – 15', price: '$450', rating: '4.92', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800' },
  { id: 2, location: 'Kyoto, Japan', distance: '5,600 miles away', dates: 'May 22 – 27', price: '$180', rating: '4.85', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800' },
  { id: 3, location: 'Bali, Indonesia', distance: '8,120 miles away', dates: 'Sep 1 – 6', price: '$120', rating: '4.98', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800' },
  { id: 4, location: 'Swiss Alps, Switzerland', distance: '650 miles away', dates: 'Dec 12 – 17', price: '$350', rating: '4.95', img: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=800' },
  { id: 5, location: 'Tulum, Mexico', distance: '2,100 miles away', dates: 'Apr 5 – 10', price: '$220', rating: '4.78', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { id: 6, location: 'Reykjavik, Iceland', distance: '1,500 miles away', dates: 'Jan 20 – 25', price: '$280', rating: '4.88', img: 'https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&q=80&w=800' },
  { id: 7, location: 'Amalfi Coast, Italy', distance: '980 miles away', dates: 'Jul 15 – 20', price: '$520', rating: '4.96', img: 'https://images.unsplash.com/photo-1612730871336-67982ca02410?auto=format&fit=crop&q=80&w=800' },
  { id: 8, location: 'Queenstown, New Zealand', distance: '11,000 miles away', dates: 'Nov 8 – 13', price: '$310', rating: '4.91', img: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&q=80&w=800' },
  { id: 9, location: 'Santorini, Greece', distance: '1,243 miles away', dates: 'Jun 10 – 15', price: '$450', rating: '4.92', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800' },
  { id: 10, location: 'Kyoto, Japan', distance: '5,600 miles away', dates: 'May 22 – 27', price: '$180', rating: '4.85', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800' },
  { id: 11, location: 'Bali, Indonesia', distance: '8,120 miles away', dates: 'Sep 1 – 6', price: '$120', rating: '4.98', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800' },
  { id: 12, location: 'Swiss Alps, Switzerland', distance: '650 miles away', dates: 'Dec 12 – 17', price: '$350', rating: '4.95', img: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=800' },
  { id: 13, location: 'Tulum, Mexico', distance: '2,100 miles away', dates: 'Apr 5 – 10', price: '$220', rating: '4.78', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { id: 14, location: 'Reykjavik, Iceland', distance: '1,500 miles away', dates: 'Jan 20 – 25', price: '$280', rating: '4.88', img: 'https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&q=80&w=800' },
  { id: 15, location: 'Amalfi Coast, Italy', distance: '980 miles away', dates: 'Jul 15 – 20', price: '$520', rating: '4.96', img: 'https://images.unsplash.com/photo-1612730871336-67982ca02410?auto=format&fit=crop&q=80&w=800' },
  { id: 16, location: 'Queenstown, New Zealand', distance: '11,000 miles away', dates: 'Nov 8 – 13', price: '$310', rating: '4.91', img: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&q=80&w=800' },
];

function renderSkeleton() {
  const grid = document.querySelector('.listings-grid');
  if (!grid) return;
  grid.innerHTML = Array(8).fill(0).map(() => `
    <div class="skeleton-card">
      <div class="skeleton-image"></div>
      <div class="skeleton-info">
        <div class="skeleton-line location"></div>
        <div class="skeleton-line distance"></div>
        <div class="skeleton-line dates"></div>
        <div class="skeleton-line price"></div>
      </div>
    </div>
  `).join('');
}

function renderListings() {
  const grid = document.querySelector('.listings-grid');
  if (!grid) return;
  grid.innerHTML = listings.map(item => `
    <article class="listing-card animate-fade-in">
      <div class="card-image-wrapper">
        <img src="${item.img}" alt="${item.location}" loading="lazy" class="card-image">
        <button class="heart-btn" aria-label="Add to wishlist">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: rgba(0, 0, 0, 0.5); height: 24px; width: 24px; stroke: white; stroke-width: 2; overflow: visible;"><path d="m16 28c7-4.733 14-10 14-17 0-3.868-3.132-7-7-7-2.267 0-4.309 1.011-5.67 2.587l-1.33 1.515-1.33-1.515c-1.361-1.576-3.403-2.587-5.67-2.587-3.868 0-7 3.132-7 7 0 7 7 12.267 14 17z"></path></svg>
        </button>
      </div>
      <div class="card-info">
        <div class="info-row">
          <h3 class="location">${item.location}</h3>
          <span class="rating">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 12px; width: 12px; fill: currentcolor;"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27c-.453.058-.633.614-.299.922l7.213 6.624-1.92 9.682c-.089.45.39.797.781.57l8.775-5.113 8.774 5.113c.391.227.87-.12.781-.57l-1.92-9.682 7.213-6.624c.334-.308.154-.864-.299-.922l-9.86-1.27-4.124-8.885c-.19-.408-.77-.408-.959 0z"></path></svg>
            ${item.rating}
          </span>
        </div>
        <p class="distance">${item.distance}</p>
        <p class="dates">${item.dates}</p>
        <p class="price"><strong>${item.price}</strong> night</p>
      </div>
    </article>
  `).join('');

  // Add heart button listeners
  document.querySelectorAll('.heart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.classList.toggle('active');
    });
  });
}

function renderCategories() {
  console.log("caasas1")
  const categoriesgrid = document.querySelector('.categories-scroll') ;
  if (!categoriesgrid) return;
  console.log("caasas")
  categoriesgrid.innerHTML = categories.map((cat, i) => `
    <button class="category-item ${i === 0 ? 'active' : ''}">
      <span class="category-icon">${cat.icon}</span>
      <span class="category-name">${cat.name}</span>
    </button>
  `).join('');
}

function init() {
  
  renderSkeleton();
  renderCategories();
  setTimeout(renderListings, 1500);
    
    // Category scrolling logic
  const categoriesScroll = document.querySelector('.categories-scroll') ;
  const nextBtn = document.querySelector('.scroll-btn.next') ;
  const prevBtn = document.querySelector('.scroll-btn.prev') ;

  if (categoriesScroll && nextBtn && prevBtn) {
    nextBtn.onclick = () => {
      categoriesScroll.scrollBy({ left: 400, behavior: 'smooth' });
    };
    prevBtn.onclick = () => {
      categoriesScroll.scrollBy({ left: -400, behavior: 'smooth' });
    };

    categoriesScroll.onscroll = () => {
      prevBtn.style.display = categoriesScroll.scrollLeft > 0 ? 'flex' : 'none';
      const maxScroll = categoriesScroll.scrollWidth - categoriesScroll.clientWidth;
      nextBtn.style.display = categoriesScroll.scrollLeft < maxScroll - 5 ? 'flex' : 'none';
    };
    
    // Initial state
    prevBtn.style.display = 'none';
  }

  // Search expansion logic
  const searchToggle = document.querySelector('.search-bar-toggle') ;
  const searchExpanded = document.querySelector('.search-expanded') ;
  const header = document.querySelector('.header') ;
  const headerContent = document.querySelector('.header-content')
  const logo = document.querySelector('.logo') ;
  const userNav = document.querySelector('.user-nav') ;
  const inputGroups = document.querySelectorAll('.search-input-group');
  
  const overlay = document.createElement('div');
  overlay.className = 'search-overlay visually-hidden';
  document.body.appendChild(overlay);

  if (searchToggle && searchExpanded) {
    const focusSearch = () => {
      searchToggle.classList.add('visually-hidden');
      searchExpanded.classList.remove('visually-hidden');
      header.classList.add('expanded');
      headerContent.classList.add('expanded')
      logo.classList.add('hidden');
      userNav.classList.add('hidden');
      overlay.classList.remove('visually-hidden');
      document.body.style.overflow = 'hidden';
      
      const firstInput = searchExpanded.querySelector('.input') ;
      if (firstInput) firstInput.focus();
    };

    const closeSearch = () => {
      searchToggle.classList.remove('visually-hidden');
      searchExpanded.classList.add('visually-hidden');
      header.classList.remove('expanded');
      logo.classList.remove('hidden');
      userNav.classList.remove('hidden');
      overlay.classList.add('visually-hidden');
      document.body.style.overflow = 'auto';
    };

    searchToggle.onclick = focusSearch;
    overlay.onclick = closeSearch;

    inputGroups.forEach(group => {
      group.addEventListener('click', (e) => {
        e.stopPropagation();
        inputGroups.forEach(g => g.classList.remove('active'));
        group.classList.add('active');
        const input = group.querySelector('.input');
        if (input) input.focus();
      });
    });
    
    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !searchExpanded.classList.contains('visually-hidden')) {
        closeSearch();
      }
    });
  }

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Category active state
  const categoryItems = document.querySelectorAll('.category-item');
  categoryItems.forEach(item => {
    (item ).onclick = () => {
      categoryItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    };
  });
}

document.addEventListener('DOMContentLoaded', init);
init();