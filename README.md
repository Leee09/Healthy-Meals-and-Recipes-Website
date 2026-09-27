# Healthy Meals and Recipes

A responsive, accessible static website that helps students, busy adults, families and beginner cooks find simple, affordable and healthy meals. It includes a filterable recipe collection with full recipe details, practical healthy eating tips, a weekly meal planning guide, an About page and a demonstration contact form with validation.

## Technologies used

- **HTML5** for semantic page structure
- **CSS3** for layout, styling and responsive design (Flexbox, Grid and media queries)
- **JavaScript** (vanilla, no frameworks or libraries) for interactive features

No build tools, servers, databases or external libraries are required. Images are loaded from Unsplash using direct image URLs.

## Website pages

| File           | Page                | Contents                                                                      |
| -------------- | ------------------- | ----------------------------------------------------------------------------- |
| `index.html`   | Home                | Hero section, three featured recipes, benefits and a call to action           |
| `recipes.html` | Recipes             | Eight recipes, category filter buttons and a recipe details window            |
| `tips.html`    | Healthy Eating Tips | Four healthy eating tips, a meal planning guide and a sample weekly plan      |
| `about.html`   | About               | Website purpose, mission, target audience and values                          |
| `contact.html` | Contact             | Contact form with required-field and email validation (demonstration only)   |

## JavaScript features

All scripts are in `js/script.js`:

- Mobile navigation menu (hamburger) toggle
- Recipe category filtering with a fade transition
- Recipe details modal with ingredients, instructions, servings and times
- Contact form validation with error and success messages
- Automatic current year in the footer

## Folder structure

```text
healthy-meals-recipes/
│
├── index.html
├── recipes.html
├── tips.html
├── about.html
├── contact.html
├── README.md
├── .nojekyll
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── images/
    └── README.txt
```

## Viewing the website locally

Open `index.html` in any modern web browser. No installation is required.

## Uploading the project to GitHub

1. Sign in to [GitHub](https://github.com).
2. Select the **+** icon in the top-right corner and choose **New repository**.
3. Enter a repository name, for example `healthy-meals-recipes`.
4. Set the repository to **Public** and select **Create repository**.
5. On the new repository page, select **uploading an existing file**.
6. Drag in **all** files and folders from inside the `healthy-meals-recipes` folder (`index.html`, `recipes.html`, `tips.html`, `about.html`, `contact.html`, `README.md`, `.nojekyll`, and the `css`, `js` and `images` folders). Keep the folder structure exactly as shown above so that `index.html` sits at the top level of the repository.
7. Add a short commit message, such as `Add website files`, and select **Commit changes**.

> **Tip:** `.nojekyll` begins with a dot, so some computers hide it. If it does not upload, create it on GitHub with **Add file → Create new file**, name it `.nojekyll`, leave it empty and commit.

## Deploying with GitHub Pages

1. **Create a repository** on GitHub (see the steps above).
2. **Upload all website files** to the repository.
3. Open the repository's **Settings** tab.
4. Select **Pages** from the left-hand menu.
5. Under **Build and deployment → Source**, choose **Deploy from a branch**.
6. Under **Branch**, select the `main` branch and the `/(root)` folder.
7. Select **Save**, wait one to two minutes, then refresh the page and open the generated website URL. It will look like:

   `https://your-username.github.io/healthy-meals-recipes/`

All links in the website use relative paths, so the site works correctly from a GitHub Pages project repository.
