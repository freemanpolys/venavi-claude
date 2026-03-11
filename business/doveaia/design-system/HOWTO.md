# 1. Se connecter a GitHub
  gh auth login

  # 2. Creer le repo
  gh repo create doveaia/design-system --public

  # 3. Push depuis exports/
  cd exports
  git init && git add . && git commit -m "feat: Doveaia Design System v0.1.0"
  git remote add origin https://github.com/doveaia/design-system.git
  git push -u origin main

  # 4. Activer GitHub Pages (Settings > Pages > Source: GitHub Actions)

  Apres publication, l'installation devient :

  # Angular
  npm install doveaia/design-system#main

  # Tailwind
  npm install doveaia/design-system#main

  Et le site de doc sera live sur https://doveaia.github.io/design-system/.
