# Makefile - Génération du support de cours depuis Markdown

# Nom du fichier source (sans extension)
SOURCE=cours-claude-code

# Dossiers de sortie
OUT_DIR=build
PDF=$(OUT_DIR)/$(SOURCE).pdf
PPTX=$(OUT_DIR)/$(SOURCE).pptx
HTML=$(OUT_DIR)/$(SOURCE).html
DOCX=$(OUT_DIR)/$(SOURCE).docx


# Template et options Pandoc
PDF_ENGINE=xelatex
# utiliser  --number-sections pour avoir les numeros de sections
PANDOC_OPTIONS=--toc --standalone  --syntax-highlighting=zenburn

# Thèmes personnalisables pour reveal.js (slides HTML)
REVEAL_THEME=white

# Cibles principales
.PHONY: all pdf pptx html docx clean

all: pdf pptx html docx

pdf: $(PDF)

pptx: $(PPTX)

html: $(HTML)

docx: $(DOCX)

# --- Génération PDF ---
$(PDF): $(SOURCE).md | $(OUT_DIR)
	pandoc $(SOURCE).md \
		-o $(PDF) \
		$(PANDOC_OPTIONS) \
		--pdf-engine=$(PDF_ENGINE) \
                --include-in-header=header.tex  \
		-V geometry:margin=2.5cm \
		-V mainfont="Helvetica" \
		-V monofont="Menlo" \
		-V colorlinks=true \
		-V linkcolor=blue \
		-V urlcolor=blue

# --- Génération PowerPoint ---
$(PPTX): $(SOURCE).md | $(OUT_DIR)
	pandoc $(SOURCE).md \
		-o $(PPTX) \
		$(PANDOC_OPTIONS)

# --- Génération HTML (reveal.js pour slides web) ---
$(HTML): $(SOURCE).md | $(OUT_DIR)
	pandoc $(SOURCE).md \
		-t revealjs \
		-s \
		-o $(HTML) \
		-V theme=$(REVEAL_THEME) \
		-V revealjs-url=https://unpkg.com/reveal.js@5.0.4/

# --- Génération Word ---

$(DOCX): $(SOURCE).md | $(OUT_DIR)
	pandoc $(SOURCE).md -o $(DOCX) $(PANDOC_OPTIONS)

# --- Créer le dossier de sortie ---
$(OUT_DIR):
	mkdir -p $(OUT_DIR)

# --- Nettoyage ---
clean:
	rm -rf $(OUT_DIR)

# --- Aide ---
help:
	@echo "Cibles disponibles :"
	@echo "  make all     → Génère PDF et PPTX"
	@echo "  make pdf     → Génère uniquement le PDF"
	@echo "  make pptx    → Génère uniquement le PowerPoint"
	@echo "  make html    → Génère une version web (reveal.js)"
	@echo "  make clean   → Supprime les fichiers générés"

