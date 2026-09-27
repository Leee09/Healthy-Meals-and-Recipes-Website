/* ==========================================================================
   Healthy Meals and Recipes - Main Script
   --------------------------------------------------------------------------
   Vanilla JavaScript only. Features:
   1. JavaScript-enabled flag for CSS
   2. Recipe data used by the recipe detail modal
   3. Mobile navigation toggle
   4. Recipe category filtering
   5. Recipe detail modal
   6. Contact form validation
   7. Automatic current year in the footer
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. JavaScript-enabled flag
   This file is loaded in the <head>, so this line runs before the page is
   drawn. CSS uses the "no-js" class to keep the menu visible if JavaScript
   is unavailable.
   -------------------------------------------------------------------------- */
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');


/* --------------------------------------------------------------------------
   2. Recipe data
   Each key matches the data-recipe-id attribute on a "View Recipe" button.
   -------------------------------------------------------------------------- */
var IMAGE_BASE = 'https://images.unsplash.com/';
var IMAGE_OPTIONS = '?auto=format&fit=crop&w=1200&q=80';

var RECIPES = {
  'avocado-egg-toast': {
    title: 'Avocado and Egg Toast',
    category: 'Breakfast',
    prepTime: '5 min',
    cookTime: '5 min',
    servings: '1',
    image: IMAGE_BASE + 'photo-1525351484163-7529414344d8' + IMAGE_OPTIONS,
    alt: 'Slices of toast topped with mashed avocado and eggs on a plate',
    description: 'Creamy mashed avocado on crisp wholegrain toast, topped with a soft egg. It is filling, full of healthy fats and protein, and ready in about ten minutes.',
    ingredients: [
      '2 slices wholegrain bread',
      '1 ripe avocado',
      '2 large eggs',
      '1 teaspoon lemon juice',
      '4 cherry tomatoes, halved',
      'A pinch of chilli flakes (optional)',
      'Salt and black pepper, to taste'
    ],
    steps: [
      'Bring a small pan of water to a gentle simmer over medium heat.',
      'Toast the bread until golden and crisp.',
      'Halve the avocado, remove the stone and scoop the flesh into a bowl. Mash it with the lemon juice, a pinch of salt and some black pepper.',
      'Crack each egg into a cup and gently slide it into the simmering water. Poach for 3 to 4 minutes, until the white is set and the yolk is still soft. Lift out with a slotted spoon. (You can also fry the eggs in a non-stick pan with a few drops of oil.)',
      'Spread the avocado over the toast and top each slice with an egg and the cherry tomatoes.',
      'Finish with chilli flakes and a little extra pepper. Serve straight away.'
    ],
    tip: 'Add a handful of spinach or rocket under the egg for extra vegetables at breakfast.'
  },

  'berry-oat-smoothie': {
    title: 'Berry Oat Smoothie',
    category: 'Breakfast',
    prepTime: '5 min',
    cookTime: 'No cooking',
    servings: '2',
    image: IMAGE_BASE + 'photo-1553530666-ba11a7da3888' + IMAGE_OPTIONS,
    alt: 'Glasses of pink berry smoothie with fresh fruit',
    description: 'A thick, naturally sweet smoothie made with frozen berries, banana and oats. The oats and yogurt keep you full for longer, making it a great breakfast on the go.',
    ingredients: [
      '1 cup (150 g) frozen mixed berries',
      '1/3 cup (30 g) rolled oats',
      '1 ripe banana',
      '1 cup (250 ml) milk or unsweetened plant milk',
      '1/2 cup (125 g) plain Greek yogurt',
      '1 teaspoon honey (optional)'
    ],
    steps: [
      'Add the oats to the blender first and blend for 10 seconds until they look like a fine powder.',
      'Add the banana, frozen berries, yogurt and milk.',
      'Blend for 45 to 60 seconds, until completely smooth.',
      'If the smoothie is too thick, add a splash more milk and blend again. Taste and add honey only if needed.',
      'Pour into two glasses and serve straight away.'
    ],
    tip: 'Freeze ripe bananas in slices so you always have a smoothie base ready.'
  },

  'greek-yogurt-parfait': {
    title: 'Greek Yogurt Parfait',
    category: 'Breakfast',
    prepTime: '5 min',
    cookTime: 'No cooking',
    servings: '1',
    image: IMAGE_BASE + 'photo-1488477181946-6428a0291777' + IMAGE_OPTIONS,
    alt: 'Glass of layered yogurt with fresh berries and granola',
    description: 'Layers of creamy Greek yogurt, fresh berries and crunchy granola. High in protein and ready in five minutes, it works as a breakfast or an afternoon snack.',
    ingredients: [
      '3/4 cup (180 g) plain Greek yogurt',
      '1/2 cup mixed fresh berries',
      '3 tablespoons low-sugar granola',
      '1 tablespoon chopped nuts or mixed seeds',
      '1 teaspoon honey (optional)',
      '1/4 teaspoon ground cinnamon (optional)'
    ],
    steps: [
      'Stir the cinnamon into the yogurt, if using.',
      'Spoon half of the yogurt into a glass or jar.',
      'Add half of the berries and half of the granola.',
      'Repeat with the remaining yogurt, berries and granola.',
      'Top with the nuts or seeds and drizzle with honey if you like.',
      'Serve straight away. If you are preparing it the night before, keep the granola in a separate container so it stays crunchy.'
    ],
    tip: 'Choose plain yogurt and sweeten it with fruit to keep added sugar low.'
  },

  'chicken-quinoa-bowl': {
    title: 'Chicken Quinoa Bowl',
    category: 'Lunch',
    prepTime: '10 min',
    cookTime: '20 min',
    servings: '2',
    image: IMAGE_BASE + 'photo-1546069901-ba9599a7e63c' + IMAGE_OPTIONS,
    alt: 'Colourful bowl of grains, fresh vegetables and greens',
    description: 'Seasoned chicken with fluffy quinoa, crisp vegetables and a light lemon yogurt dressing. A balanced lunch that is easy to pack for work or college.',
    ingredients: [
      '1/2 cup (90 g) quinoa, rinsed',
      '1 cup (250 ml) water',
      '2 small chicken breasts (about 300 g)',
      '1 tablespoon olive oil',
      '1 teaspoon paprika',
      '1/2 teaspoon garlic powder',
      '1 cup baby spinach',
      '1/2 cucumber, diced',
      '1 cup cherry tomatoes, halved',
      '1/2 avocado, sliced',
      '2 tablespoons plain yogurt and 1 tablespoon lemon juice, for the dressing',
      'Salt and black pepper, to taste'
    ],
    steps: [
      'Place the quinoa and water in a saucepan and bring to the boil. Cover, reduce the heat and simmer for 15 minutes, until the water is absorbed. Leave to stand for 5 minutes, then fluff with a fork.',
      'While the quinoa cooks, rub the chicken with half of the olive oil, the paprika, garlic powder, salt and pepper.',
      'Heat the remaining oil in a frying pan over medium heat. Cook the chicken for 6 to 7 minutes on each side, until it is cooked through with no pink meat in the centre.',
      'Rest the chicken for 5 minutes, then slice it.',
      'Whisk the yogurt and lemon juice with a pinch of salt and pepper to make the dressing.',
      'Divide the spinach and quinoa between two bowls. Top with the chicken, cucumber, tomatoes and avocado, then drizzle with the dressing.'
    ],
    tip: 'Cook a double batch of quinoa and keep it in the fridge for up to three days.'
  },

  'tuna-bean-salad': {
    title: 'Tuna and Bean Salad',
    category: 'Lunch',
    prepTime: '10 min',
    cookTime: 'No cooking',
    servings: '2',
    image: IMAGE_BASE + 'photo-1512621776951-a57141f2eefd' + IMAGE_OPTIONS,
    alt: 'Fresh salad bowl with vegetables, greens and beans',
    description: 'A budget-friendly salad made from store-cupboard tuna and beans with crunchy vegetables and a zesty dressing. Packed with protein and fibre.',
    ingredients: [
      '1 can (145 g) tuna in water, drained',
      '1 can (400 g) cannellini or mixed beans, drained and rinsed',
      '1/2 small red onion, finely chopped',
      '1 cup cherry tomatoes, halved',
      '1/2 cucumber, diced',
      'A handful of fresh parsley, chopped',
      '1 tablespoon olive oil',
      '1 tablespoon lemon juice or red wine vinegar',
      '1/2 teaspoon Dijon mustard',
      'Salt and black pepper, to taste'
    ],
    steps: [
      'In a large bowl, whisk together the olive oil, lemon juice, mustard, salt and pepper.',
      'Add the beans and red onion. Toss well and leave for 2 minutes so the onion softens slightly.',
      'Add the tomatoes, cucumber and parsley and toss again.',
      'Flake the tuna over the top and fold it in gently so it stays in chunks.',
      'Serve straight away, or store in a sealed container in the fridge for up to one day.'
    ],
    tip: 'Choose tuna canned in water and low-salt beans to keep sodium down.'
  },

  'baked-salmon-vegetables': {
    title: 'Baked Salmon with Vegetables',
    category: 'Dinner',
    prepTime: '10 min',
    cookTime: '25 min',
    servings: '2',
    image: IMAGE_BASE + 'photo-1467003909585-2f8a72700288' + IMAGE_OPTIONS,
    alt: 'Baked salmon fillet served with vegetables and lemon',
    description: 'Lemon and herb salmon baked on one tray with sweet potato, broccoli and pepper. Rich in omega-3 fats and very little washing up.',
    ingredients: [
      '2 salmon fillets (120 g to 150 g each)',
      '1 medium sweet potato, cut into 2 cm cubes',
      '1 small head of broccoli, cut into florets',
      '1 red bell pepper, sliced',
      '1 tablespoon olive oil',
      '1 lemon (half juiced, half sliced)',
      '1 garlic clove, crushed',
      '1 teaspoon dried mixed herbs',
      'Salt and black pepper, to taste'
    ],
    steps: [
      'Preheat the oven to 200°C (400°F / Gas Mark 6) and line a large baking tray with baking paper.',
      'Toss the sweet potato with half of the olive oil, salt and pepper. Spread it on the tray and roast for 10 minutes.',
      'Meanwhile, mix the remaining oil with the lemon juice, garlic and herbs.',
      'Remove the tray from the oven. Add the broccoli and pepper, push the vegetables to the sides and place the salmon in the centre.',
      'Brush the salmon and vegetables with the lemon and garlic mixture and lay the lemon slices on top of the fish.',
      'Bake for 12 to 15 minutes, until the salmon flakes easily with a fork and the vegetables are tender. Serve with any tray juices spooned over.'
    ],
    tip: 'Frozen salmon fillets are often cheaper and work well. Thaw them in the fridge overnight.'
  },

  'vegetable-stir-fry': {
    title: 'Vegetable Stir Fry',
    category: 'Dinner',
    prepTime: '15 min',
    cookTime: '10 min',
    servings: '2',
    image: IMAGE_BASE + 'photo-1512058564366-18510be2db19' + IMAGE_OPTIONS,
    alt: 'Bowl of rice mixed with colourful stir-fried vegetables',
    description: 'Crisp, colourful vegetables tossed in a quick garlic, ginger and soy sauce, served over brown rice. A fast way to eat a rainbow of vegetables.',
    ingredients: [
      '1 tablespoon vegetable or sesame oil',
      '2 garlic cloves, thinly sliced',
      '1 thumb-sized piece of ginger, grated',
      '1 carrot, cut into thin strips',
      '1 cup broccoli florets',
      '1 red bell pepper, sliced',
      '1 cup snap peas or green beans',
      '4 spring onions, sliced',
      '2 tablespoons reduced-salt soy sauce',
      '1 teaspoon honey',
      '1 teaspoon cornflour mixed with 3 tablespoons water',
      '2 cups cooked brown rice, to serve',
      '1 teaspoon sesame seeds (optional)'
    ],
    steps: [
      'Mix the soy sauce, honey and cornflour mixture in a small cup. Set aside.',
      'Heat the oil in a wok or large frying pan over high heat.',
      'Add the carrot and broccoli and stir-fry for 3 minutes.',
      'Add the pepper, snap peas, garlic and ginger. Stir-fry for another 2 to 3 minutes, until the vegetables are bright and tender but still crunchy.',
      'Pour in the sauce and toss for about 1 minute, until it thickens and coats the vegetables.',
      'Stir through the spring onions and serve over the brown rice, sprinkled with sesame seeds.'
    ],
    tip: 'Add tofu, chicken or a fried egg for extra protein, or use any vegetables left in the fridge.'
  },

  'apple-peanut-butter-bites': {
    title: 'Apple and Peanut Butter Bites',
    category: 'Snacks',
    prepTime: '10 min',
    cookTime: 'No cooking',
    servings: '2',
    image: IMAGE_BASE + 'photo-1568702846914-96b305d2aaeb' + IMAGE_OPTIONS,
    alt: 'Fresh red apples ready to be sliced for a snack',
    description: 'Crunchy apple rounds topped with peanut butter, oats and raisins. A satisfying snack that balances natural sweetness with protein and healthy fats.',
    ingredients: [
      '2 crisp apples',
      '3 tablespoons natural peanut butter (or sunflower seed butter for a nut-free option)',
      '1 tablespoon rolled oats or granola',
      '1 tablespoon raisins or dark chocolate chips',
      '1 teaspoon chia seeds (optional)',
      '1 teaspoon lemon juice mixed with 2 tablespoons water'
    ],
    steps: [
      'Wash the apples, remove the cores and slice them into rounds about 1 cm thick.',
      'Brush the slices lightly with the lemon water to stop them turning brown, then pat dry.',
      'Spread each apple round with a thin layer of peanut butter.',
      'Sprinkle with oats, raisins and chia seeds.',
      'Serve straight away, or chill in a sealed container for up to 2 hours.'
    ],
    tip: 'Choose peanut butter with no added sugar or palm oil. The only ingredient should be peanuts, with maybe a little salt.'
  }
};


/* --------------------------------------------------------------------------
   Start all features once the page structure is ready
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  initMobileNavigation();
  initRecipeFilter();
  initRecipeModal();
  initContactForm();
  setFooterYear();
});


/* --------------------------------------------------------------------------
   3. Mobile navigation toggle
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  var toggleButton = document.querySelector('.nav-toggle');
  var navigation = document.getElementById('primary-navigation');

  if (!toggleButton || !navigation) {
    return;
  }

  var desktopQuery = window.matchMedia('(min-width: 901px)');

  // Open or close the menu and keep ARIA attributes in sync
  function setMenuState(isOpen) {
    toggleButton.setAttribute('aria-expanded', String(isOpen));
    navigation.classList.toggle('is-open', isOpen);
  }

  function isMenuOpen() {
    return toggleButton.getAttribute('aria-expanded') === 'true';
  }

  toggleButton.addEventListener('click', function () {
    setMenuState(!isMenuOpen());
  });

  // Close the menu with the Escape key and return focus to the toggle
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isMenuOpen()) {
      setMenuState(false);
      toggleButton.focus();
    }
  });

  // Close the menu when a navigation link is chosen
  navigation.addEventListener('click', function (event) {
    if (event.target.closest('a')) {
      setMenuState(false);
    }
  });

  // Close the menu when the user clicks outside the header
  document.addEventListener('click', function (event) {
    if (isMenuOpen() && !event.target.closest('.site-header')) {
      setMenuState(false);
    }
  });

  // Reset the menu when the screen becomes wide enough for the desktop layout
  function handleScreenChange(query) {
    if (query.matches) {
      setMenuState(false);
    }
  }

  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener('change', handleScreenChange);
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener(handleScreenChange); // Older Safari support
  }

  setMenuState(false);
}


/* --------------------------------------------------------------------------
   4. Recipe category filtering (Recipes page)
   -------------------------------------------------------------------------- */
function initRecipeFilter() {
  var filterButtons = document.querySelectorAll('.filter-btn');
  var recipeCards = document.querySelectorAll('.recipe-grid[data-filterable] .recipe-card');
  var statusMessage = document.getElementById('filter-status');
  var noResults = document.getElementById('no-results');

  if (!filterButtons.length || !recipeCards.length) {
    return;
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FADE_DURATION = reduceMotion ? 0 : 350; // Matches --transition-medium in CSS

  // Hide a card with a fade, then remove it from the layout
  function hideCard(card) {
    clearTimeout(card.fadeTimer);
    card.classList.add('is-fading');
    card.fadeTimer = setTimeout(function () {
      card.hidden = true;
    }, FADE_DURATION);
  }

  // Put a card back in the layout, then fade it in
  function showCard(card) {
    clearTimeout(card.fadeTimer);
    card.hidden = false;
    // Reading offsetWidth forces the browser to apply the change before fading in
    void card.offsetWidth;
    card.classList.remove('is-fading');
  }

  // Build a readable status message such as "Showing 3 Breakfast recipes."
  function updateStatus(category, count) {
    if (statusMessage) {
      var label = category === 'all' ? '' : ' ' + category.charAt(0).toUpperCase() + category.slice(1);
      var noun = count === 1 ? 'recipe' : 'recipes';
      statusMessage.textContent = 'Showing ' + count + label + ' ' + noun + '.';
    }

    if (noResults) {
      noResults.hidden = count !== 0;
    }
  }

  function applyFilter(category) {
    var visibleCount = 0;

    recipeCards.forEach(function (card) {
      var matches = category === 'all' || card.getAttribute('data-category') === category;

      if (matches) {
        visibleCount += 1;
        showCard(card);
      } else {
        hideCard(card);
      }
    });

    // Show the selected button as pressed
    filterButtons.forEach(function (button) {
      var isSelected = button.getAttribute('data-filter') === category;
      button.setAttribute('aria-pressed', String(isSelected));
    });

    updateStatus(category, visibleCount);
  }

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      applyFilter(button.getAttribute('data-filter'));
    });
  });

  applyFilter('all');
}


/* --------------------------------------------------------------------------
   5. Recipe detail modal (Home and Recipes pages)
   Uses the native <dialog> element, which provides focus handling and
   closes with the Escape key.
   -------------------------------------------------------------------------- */
function initRecipeModal() {
  var modal = document.getElementById('recipe-modal');
  var triggerButtons = document.querySelectorAll('[data-recipe-id]');

  if (!modal || !triggerButtons.length) {
    return;
  }

  var closeButton = modal.querySelector('.modal-close');
  var modalImage = document.getElementById('modal-image');
  var modalTitle = document.getElementById('modal-title');
  var modalCategory = document.getElementById('modal-category');
  var modalDescription = document.getElementById('modal-description');
  var modalPrep = document.getElementById('modal-prep');
  var modalCook = document.getElementById('modal-cook');
  var modalServings = document.getElementById('modal-servings');
  var modalIngredients = document.getElementById('modal-ingredients');
  var modalSteps = document.getElementById('modal-steps');
  var modalTip = document.getElementById('modal-tip');
  var lastTrigger = null;
  var supportsDialog = typeof modal.showModal === 'function';

  // Replace the contents of a list with new items
  function fillList(listElement, items) {
    listElement.innerHTML = '';
    items.forEach(function (text) {
      var item = document.createElement('li');
      item.textContent = text;
      listElement.appendChild(item);
    });
  }

  // Place a recipe's details into the modal
  function populateModal(recipe) {
    modalImage.src = recipe.image;
    modalImage.alt = recipe.alt;
    modalTitle.textContent = recipe.title;
    modalCategory.textContent = recipe.category;
    modalDescription.textContent = recipe.description;
    modalPrep.textContent = recipe.prepTime;
    modalCook.textContent = recipe.cookTime;
    modalServings.textContent = recipe.servings;
    fillList(modalIngredients, recipe.ingredients);
    fillList(modalSteps, recipe.steps);
    modalTip.textContent = recipe.tip;
  }

  function openModal(recipeId, trigger) {
    var recipe = RECIPES[recipeId];
    if (!recipe) {
      return;
    }

    lastTrigger = trigger;
    populateModal(recipe);
    modal.scrollTop = 0;

    if (supportsDialog) {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }

    document.body.classList.add('modal-open');
    closeButton.focus();
  }

  function closeModal() {
    if (supportsDialog && modal.open) {
      modal.close();
    } else {
      modal.removeAttribute('open');
      handleClosed();
    }
  }

  // Tidy up after the dialog closes (by button, backdrop or Escape key)
  function handleClosed() {
    document.body.classList.remove('modal-open');
    if (lastTrigger) {
      lastTrigger.focus();
    }
  }

  triggerButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      openModal(button.getAttribute('data-recipe-id'), button);
    });
  });

  closeButton.addEventListener('click', closeModal);

  // The "close" event fires however the dialog is closed
  modal.addEventListener('close', handleClosed);

  // Close when the dark backdrop outside the dialog box is clicked
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      var box = modal.getBoundingClientRect();
      var clickedInside =
        event.clientX >= box.left && event.clientX <= box.right &&
        event.clientY >= box.top && event.clientY <= box.bottom;

      if (!clickedInside) {
        closeModal();
      }
    }
  });
}


/* --------------------------------------------------------------------------
   6. Contact form validation (Contact page)
   The form is a demonstration only. No data is sent anywhere.
   -------------------------------------------------------------------------- */
function initContactForm() {
  var form = document.getElementById('contact-form');

  if (!form) {
    return;
  }

  var formMessage = document.getElementById('form-message');
  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var hasTriedSubmit = false;

  // Each field has a function that returns an error message, or '' if valid
  var fields = [
    {
      input: document.getElementById('full-name'),
      validate: function (value) {
        if (value === '') {
          return 'Please enter your full name.';
        }
        if (value.length < 2) {
          return 'Your name must be at least 2 characters long.';
        }
        return '';
      }
    },
    {
      input: document.getElementById('email'),
      validate: function (value) {
        if (value === '') {
          return 'Please enter your email address.';
        }
        if (!EMAIL_PATTERN.test(value)) {
          return 'Please enter a valid email address, for example name@example.com.';
        }
        return '';
      }
    },
    {
      input: document.getElementById('subject'),
      validate: function (value) {
        if (value === '') {
          return 'Please enter a subject for your message.';
        }
        return '';
      }
    },
    {
      input: document.getElementById('message'),
      validate: function (value) {
        if (value === '') {
          return 'Please enter your message.';
        }
        if (value.length < 10) {
          return 'Your message must be at least 10 characters long.';
        }
        return '';
      }
    }
  ];

  // Show or clear the error for one field. Returns true when the field is valid.
  function checkField(field) {
    var input = field.input;
    var errorElement = document.getElementById(input.id + '-error');
    var errorText = field.validate(input.value.trim());

    errorElement.textContent = errorText;

    if (errorText) {
      input.classList.add('is-invalid');
      input.setAttribute('aria-invalid', 'true');
      return false;
    }

    input.classList.remove('is-invalid');
    input.removeAttribute('aria-invalid');
    return true;
  }

  function showFormMessage(text, type) {
    formMessage.textContent = text;
    formMessage.classList.remove('is-success', 'is-error');
    if (type) {
      formMessage.classList.add(type === 'success' ? 'is-success' : 'is-error');
    }
  }

  // After the first submit attempt, re-check fields as the user corrects them
  fields.forEach(function (field) {
    field.input.addEventListener('input', function () {
      if (hasTriedSubmit) {
        checkField(field);
      }
    });

    field.input.addEventListener('blur', function () {
      if (hasTriedSubmit) {
        checkField(field);
      }
    });
  });

  form.addEventListener('submit', function (event) {
    // Stop the browser from sending the form anywhere
    event.preventDefault();
    hasTriedSubmit = true;

    var firstInvalidInput = null;

    fields.forEach(function (field) {
      var isValid = checkField(field);
      if (!isValid && !firstInvalidInput) {
        firstInvalidInput = field.input;
      }
    });

    if (firstInvalidInput) {
      showFormMessage('Please correct the highlighted fields and try again.', 'error');
      firstInvalidInput.focus();
      return;
    }

    // All fields are valid: thank the user by name and reset the form
    var firstName = fields[0].input.value.trim().split(' ')[0];
    showFormMessage(
      'Thank you, ' + firstName + '! Your message has been checked successfully. ' +
      'This is a demonstration form, so nothing has been sent.',
      'success'
    );

    form.reset();
    hasTriedSubmit = false;
    formMessage.focus();
  });
}


/* --------------------------------------------------------------------------
   7. Automatic current year in the footer
   -------------------------------------------------------------------------- */
function setFooterYear() {
  var yearElement = document.getElementById('current-year');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
