brew install pandoc
brew install basictex   # (ou texlive sur Linux)
npm install -g reveal-md

make          # génère PDF + PowerPoint
make pdf      # seulement PDF
make pptx     # seulement PowerPoint
make html     # version slides web
make clean    # nettoie le dossier build/

sudo tlmgr update --self
sudo tlmgr install framed fancyvrb xcolor listings graphics geometry hyperref fontspec needspace



# FORMATING

## 1️⃣ Ajouter un header LaTeX pour Pandoc

Crée un fichier `header.tex` avec ce contenu :

`\usepackage{needspace}  % Garder les sections ensemble \let\oldsection\section \renewcommand{\section}[1]{\needspace{5\baselineskip}\oldsection{#1}}  \let\oldsubsection\subsection \renewcommand{\subsection}[1]{\needspace{3\baselineskip}\oldsubsection{#1}}`

Puis dans ton Makefile ou ta commande Pandoc pour générer le PDF :

`pandoc cours.md -o cours.pdf --pdf-engine=xelatex --include-in-header=header.tex`

**Avantage :** tous tes titres et sous-titres seront automatiquement “préservés” si la page manque de place.

---
## 2️⃣ Utiliser `samepage` pour des blocs spécifiques

Si tu as une liste ou un paragraphe que tu veux absolument garder sur la même page, tu peux entourer le Markdown avec des blocs LaTeX :

`\begin{samepage} - Point 1 - Point 2 - Point 3 \end{samepage}`

Ou pour un paragraphe :

`\begin{samepage} Ce paragraphe ne sera pas coupé entre deux pages. \end{samepage}`

---

## 3️⃣ Forcer un saut de page avant une section
Si tu veux qu’une section commence **toujours sur une nouvelle page**, tu peux utiliser :

`\newpage  # Nouvelle Section`

Ou pour les sous-sections :

`\newpage ## Sous-section importante`

---

## 4️⃣ Conseils Markdown généraux
- Limite la longueur des listes : si une liste est très longue, elle risque d’être coupée. Tu peux soit scinder la liste, soit mettre `\begin{samepage}` autour.
    
- Pour les images ou tableaux : idem, tu peux mettre `\begin{figure}[H]` via un filtre Pandoc ou directement en LaTeX pour qu’ils ne flottent pas.
    
- Tu peux créer un **fichier de configuration Pandoc** pour inclure automatiquement les packages LaTeX utiles (`needspace`, `titlesec`) à chaque génération.


