# Agent #2 : Qualification Automatique Leads LinkedIn

**Priorité** : ⭐⭐⭐ (Top 3)
**Effort** : 1 semaine (40h)
**ROI Business** : 🔥🔥🔥 Très élevé
**Valeur Démo** : 🎯🎯 Bonne

---

## 🎯 Problème Résolu

### Pour Doveaia (Usage Interne)

**Avant** :
- ❌ Prospection manuelle LinkedIn : 5-10h/semaine
- ❌ 100 profils analysés → 80% peu qualifiés (perte de temps)
- ❌ Difficile identifier les "hot leads" rapidement
- ❌ Pas de scoring systématique (feeling subjectif)
- ❌ Informations dispersées (profil LinkedIn, Google, site entreprise)

**Après** :
- ✅ Agent analyse automatiquement 50-100 profils/semaine
- ✅ Scoring 0-10 selon critères : Poste, Secteur, Pain Points, Budget
- ✅ Focus sur top 20% leads (score ≥ 8/10)
- ✅ Gain temps : 5h/semaine → 1h/semaine (80% automatisé)
- ✅ Taux conversion prospects → meetings : +30-50%

---

### Pour Prospects (Valeur Démo)

**Cas d'usage similaires** :
- Prospection commerciale B2B (tous secteurs)
- Recrutement (screening CV automatique)
- Veille concurrentielle (monitoring profils clés)
- Account-Based Marketing (ABM : identifier décideurs)

**Message pitch** :
> "Notre agent analyse 100 profils LinkedIn par jour. Il score chaque lead selon 15 critères (poste, secteur, signaux d'achat). On contacte seulement les leads score > 8/10. Résultat : Notre taux de conversion prospects → meetings a doublé."

---

## 🏗️ Architecture Technique

### Stack

```
┌───────────────────────────────────────────────────┐
│       INPUT - Sources Profils LinkedIn            │
│  - Sales Navigator (export CSV)                   │
│  - LinkedIn Search URLs (scraping légal)          │
│  - CRM existant (import liste)                    │
│  - Ou manuel : Coller URL profil                  │
└───────────────────────────────────────────────────┘
                    │
                    ▼
┌───────────────────────────────────────────────────┐
│    EXTRACTION - Data Enrichment                   │
│  - Scraper LinkedIn (Apify ou Phantombuster)      │
│  - OU API LinkedIn (si accès partenaire)          │
│  - Complément : Google Search (entreprise)        │
│  - Extraction :                                   │
│    • Nom, Poste, Entreprise                       │
│    • Bio, Expérience, Posts récents              │
│    • Taille entreprise, Secteur                   │
│    • Signaux (recrute, levée fonds, projet IA)   │
└───────────────────────────────────────────────────┘
                    │
                    ▼
┌───────────────────────────────────────────────────┐
│   AZURE AI FOUNDRY - Agent Scoring                │
│  - Model : GPT-4o (analyse sémantique)            │
│  - Prompt : "Score ce profil /10 pour Doveaia"   │
│  - Analyse :                                      │
│    • Poste = DSI, CTO, CDO ? (+3 points)         │
│    • Secteur = Banque, Industrie ? (+2)          │
│    • Pain Points IA détectés ? (+2)               │
│    • Budget estimé (taille boîte) (+2)            │
│    • Timing (recrute, projet) (+1)                │
│  - Output : Score /10 + Justification             │
└───────────────────────────────────────────────────┘
                    │
                    ▼
┌───────────────────────────────────────────────────┐
│      STORAGE - Base de Données Leads              │
│  - Notion Database (simple, visuel)               │
│  - OU Airtable (plus features)                    │
│  - OU CRM (HubSpot, Pipedrive)                    │
│  - Colonnes :                                     │
│    • Nom, Poste, Entreprise, LinkedIn URL        │
│    • Score /10, Justification                     │
│    • Statut (Nouveau, Contacté, Meeting, etc.)   │
│    • Date ajout, Date dernier contact            │
└───────────────────────────────────────────────────┘
                    │
                    ▼
┌───────────────────────────────────────────────────┐
│      OUTPUT - Actions Automatisées                │
│  - Filtre : Afficher leads score ≥ 8/10          │
│  - Génération message LinkedIn personnalisé       │
│  - Notification Slack : "Nouveau lead 9/10"      │
│  - Dashboard : Top 20 leads semaine               │
└───────────────────────────────────────────────────┘
```

---

## 📋 Fonctionnalités

### V1 (Semaine 1) - Scoring Manuel

**Périmètre** :
- ✅ Input : URL profil LinkedIn (1 par 1)
- ✅ Scraping basique (nom, poste, bio)
- ✅ Agent Azure AI Foundry score /10
- ✅ Output : Notion database
- ✅ 15 critères de scoring

**Critères scoring V1** :

| Critère | Poids | Exemples |
|---------|-------|----------|
| **Poste** (Max 3 pts) | 3 | DSI, CTO, CDO, Dir Innovation = 3 pts<br>Responsable IT = 2 pts<br>Chef projet = 1 pt |
| **Secteur** (Max 2 pts) | 2 | Banque, Assurance, Industrie = 2 pts<br>Services, Retail = 1 pt |
| **Taille entreprise** (Max 2 pts) | 2 | 500-5000 employés = 2 pts (sweet spot ETI)<br>5000+ = 1 pt (gros, lent)<br><500 = 1 pt (budget limité) |
| **Pain Points IA** (Max 2 pts) | 2 | Posts récents mentionnent "IA", "ChatGPT", "agents" = 2 pts<br>Bio mentionne "transformation digitale" = 1 pt |
| **Timing** (Max 1 pt) | 1 | Recrute (offres sur LinkedIn) = 1 pt<br>Levée fonds récente = 1 pt<br>Nouveau poste < 6 mois = 0,5 pt |

**Score final** :
- 9-10/10 : 🔥 Hot lead (contacter immédiatement)
- 7-8/10 : ✅ Bon lead (contacter cette semaine)
- 5-6/10 : ⚠️ Lead tiède (contacter si temps)
- 0-4/10 : ❌ Mauvais lead (ignorer)

---

### V2 (Semaine 2) - Batch Processing

**Améliorations** :
- ✅ Input : CSV Sales Navigator (50-100 profils)
- ✅ Processing parallèle (10 profils/min)
- ✅ Enrichissement Google (taille entreprise, levées fonds)
- ✅ Dashboard Notion : Tri par score, filtres
- ✅ Notification Slack : Top 5 leads jour

---

### V3 (Mois 2+) - Intelligence Avancée

**Fonctionnalités avancées** :
- Détection signaux achat (posts, articles, changements poste)
- Scoring prédictif (ML : historique leads convertis)
- Génération auto message LinkedIn personnalisé
- A/B testing messages (optimisation taux réponse)

---

## 💻 Code Exemple : Agent Scoring

```python
# agents/lead-scoring/score_profile.py

from azure.ai.projects import AIProjectClient
import os

project_client = AIProjectClient(
    endpoint=os.environ["AZURE_AI_FOUNDRY_ENDPOINT"],
    credential=os.environ["AZURE_AI_FOUNDRY_KEY"]
)

def score_linkedin_profile(profile_data: dict) -> dict:
    """
    Score un profil LinkedIn /10 selon critères Doveaia

    Args:
        profile_data: {
            "name": "Paul Durand",
            "title": "DSI",
            "company": "BNP Paribas",
            "company_size": "10000+",
            "sector": "Banque",
            "bio": "Passionné par l'IA et la transformation digitale...",
            "recent_posts": ["Post sur ChatGPT", "Article IA générative"],
            "hiring": True  # Si offres d'emploi actives
        }

    Returns:
        {
            "score": 9,
            "justification": "DSI dans grande banque, posts récents sur IA...",
            "priority": "hot"
        }
    """

    # System prompt
    system_prompt = """
Tu es un expert en qualification de leads B2B pour Doveaia, spécialiste agents IA sur Azure.

## Ta mission
Analyser un profil LinkedIn et lui attribuer un score /10 selon notre fit produit.

## Critères de scoring (total 10 points)

**Poste (0-3 pts)** :
- DSI, CTO, CDO, Directeur Innovation = 3 pts
- Responsable IT, Chef de projet Digital = 2 pts
- Autres postes tech = 1 pt

**Secteur (0-2 pts)** :
- Banque, Assurance, Industrie = 2 pts (gros budgets IA)
- Services, Retail, Santé = 1,5 pts
- Autres = 1 pt

**Taille entreprise (0-2 pts)** :
- 500-5000 employés = 2 pts (ETI, sweet spot)
- 5000+ = 1,5 pts (budget mais lent)
- 100-500 = 1 pt (PME, budget limité)
- <100 = 0,5 pt

**Pain Points IA détectés (0-2 pts)** :
- Posts récents mentionnent "IA", "agents IA", "ChatGPT", "LLMOps" = 2 pts
- Bio mentionne "transformation digitale", "innovation" = 1 pt
- Aucun signal = 0 pt

**Timing (0-1 pt)** :
- Entreprise recrute (offres IT/IA actives) = 1 pt
- Levée de fonds récente = 1 pt
- Nouveau dans le poste (<6 mois, veut faire ses preuves) = 0,5 pt
- Aucun signal = 0 pt

## Output attendu

JSON format :
{
  "score": 8,
  "justification": "DSI chez BNP Paribas (grande banque), posts récents sur IA générative. Entreprise recrute des profils IA. Excellent fit.",
  "priority": "hot",  // "hot" (9-10), "warm" (7-8), "cold" (<7)
  "recommended_message_angle": "Mentionner posts récents sur IA, proposer audit gouvernance agents IA"
}

Sois précis dans la justification. Cite les éléments du profil qui justifient le score.
"""

    # User message avec données profil
    user_message = f"""
Voici le profil à scorer :

**Nom** : {profile_data['name']}
**Poste** : {profile_data['title']}
**Entreprise** : {profile_data['company']}
**Taille entreprise** : {profile_data['company_size']}
**Secteur** : {profile_data['sector']}
**Bio** : {profile_data['bio']}
**Posts récents** : {', '.join(profile_data.get('recent_posts', []))}
**Recrute actuellement** : {'Oui' if profile_data.get('hiring') else 'Non'}

Score ce profil /10 selon les critères Doveaia.
"""

    # Call Azure AI Foundry
    response = project_client.inference.get_chat_completions(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_message}
        ],
        temperature=0.3,  # Peu de créativité, reproductible
        response_format={"type": "json_object"}
    )

    result = response.choices[0].message.content
    return json.loads(result)


# Exemple usage
if __name__ == "__main__":
    profile = {
        "name": "Paul Durand",
        "title": "Directeur des Systèmes d'Information",
        "company": "BNP Paribas",
        "company_size": "50000+",
        "sector": "Banque",
        "bio": "Passionné par l'IA et la transformation digitale. 20 ans d'expérience IT dans le secteur bancaire.",
        "recent_posts": [
            "Comment ChatGPT va transformer la banque de détail",
            "Retour sur le salon AI Paris 2024"
        ],
        "hiring": True
    }

    result = score_linkedin_profile(profile)
    print(f"Score: {result['score']}/10")
    print(f"Priorité: {result['priority']}")
    print(f"Justification: {result['justification']}")

    # Output attendu :
    # Score: 9/10
    # Priorité: hot
    # Justification: DSI dans grande banque (BNP Paribas), posts récents sur IA générative et ChatGPT. Entreprise recrute des profils IA. Excellent fit produit.
```

---

## 💻 Code Exemple : Batch Processing

```python
# agents/lead-scoring/batch_score.py

import pandas as pd
from concurrent.futures import ThreadPoolExecutor, as_completed
from score_profile import score_linkedin_profile
from extract_linkedin import extract_profile_data  # Scraper
import time

def batch_score_leads(csv_file: str, output_file: str):
    """
    Score un batch de profils LinkedIn depuis CSV Sales Navigator

    Args:
        csv_file: CSV avec colonnes [Name, Title, Company, LinkedIn URL]
        output_file: CSV output avec scores ajoutés
    """
    # Load CSV
    df = pd.read_csv(csv_file)
    print(f"📊 {len(df)} profils à scorer")

    results = []

    # Process en parallèle (max 5 threads pour éviter rate limit)
    with ThreadPoolExecutor(max_workers=5) as executor:
        futures = {}

        for idx, row in df.iterrows():
            linkedin_url = row['LinkedIn URL']

            # Submit task : Extract data + Score
            future = executor.submit(
                process_single_lead,
                linkedin_url,
                row['Name'],
                row['Title'],
                row['Company']
            )
            futures[future] = idx

        # Collect results
        for future in as_completed(futures):
            idx = futures[future]
            try:
                result = future.result()
                results.append(result)
                print(f"✅ {idx+1}/{len(df)} - {result['name']} : {result['score']}/10")
            except Exception as e:
                print(f"❌ Erreur profil {idx+1} : {e}")
                results.append({
                    "name": df.loc[idx, 'Name'],
                    "score": 0,
                    "error": str(e)
                })

    # Save results
    df_results = pd.DataFrame(results)
    df_results.to_csv(output_file, index=False)
    print(f"\n🎉 Scoring terminé ! Résultats dans {output_file}")

    # Summary
    hot_leads = len(df_results[df_results['score'] >= 9])
    warm_leads = len(df_results[(df_results['score'] >= 7) & (df_results['score'] < 9)])
    print(f"\n📊 Résumé :")
    print(f"   🔥 Hot leads (9-10) : {hot_leads}")
    print(f"   ✅ Warm leads (7-8) : {warm_leads}")
    print(f"   → À contacter : {hot_leads + warm_leads}")


def process_single_lead(linkedin_url, name, title, company):
    """Process 1 lead : extract + score"""

    # 1. Extract data from LinkedIn
    profile_data = extract_profile_data(linkedin_url)

    # 2. Score
    score_result = score_linkedin_profile(profile_data)

    # 3. Return enriched data
    return {
        "name": name,
        "title": title,
        "company": company,
        "linkedin_url": linkedin_url,
        "score": score_result['score'],
        "priority": score_result['priority'],
        "justification": score_result['justification'],
        "recommended_message_angle": score_result.get('recommended_message_angle', '')
    }


# Usage
if __name__ == "__main__":
    batch_score_leads(
        csv_file="exports/sales_navigator_export_2024-12.csv",
        output_file="results/scored_leads_2024-12.csv"
    )
```

---

## 📊 Intégration Notion (CRM Simple)

### Structure Base Notion

**Database "Leads Doveaia"** :

| Colonne | Type | Exemple |
|---------|------|---------|
| Nom | Title | Paul Durand |
| Poste | Text | DSI |
| Entreprise | Text | BNP Paribas |
| LinkedIn URL | URL | https://linkedin.com/in/paul-durand |
| Score | Number | 9 |
| Priorité | Select | 🔥 Hot / ✅ Warm / ❄️ Cold |
| Justification | Text | DSI grande banque, posts IA récents... |
| Statut | Select | Nouveau / Contacté / Meeting / Perdu |
| Date ajout | Date | 2024-12-26 |
| Message suggéré | Text | Bonjour Paul, j'ai vu votre post sur... |

**Vues utiles** :
- Vue "Hot Leads" : Filtre Score ≥ 9, Statut = Nouveau
- Vue "À contacter cette semaine" : Score ≥ 7, Statut = Nouveau
- Vue "En cours" : Statut = Contacté ou Meeting
- Vue "Kanban" : Par statut (Nouveau → Contacté → Meeting → Client)

---

## 💰 ROI Business Chiffré

### Coûts

**Développement** :
- Temps dev : 40h (1 semaine)
- Coût opportunité : 4 000€

**Opérationnel mensuel** :
- Azure AI Foundry (GPT-4o) : 30-50€/mois (100 profils scorés)
- Scraper LinkedIn (Apify ou Phantombuster) : 30€/mois
- **Total** : 60-80€/mois

---

### Gains

**Gain temps prospection** :
- Avant : 5h/semaine recherche + analyse manuelle
- Après : 1h/semaine (agent fait 80% du travail)
- Gain : 4h/semaine × 4 semaines = 16h/mois
- Valeur : 16h × 100€/h = **1 600€/mois**

**Amélioration taux conversion** :
- Avant : Contact 100 leads → 5 meetings (5%)
- Après : Contact 20 leads (score > 8) → 4 meetings (20%)
- Gain : 80% moins de contacts pour même résultat = Focus temps sur leads qualité
- Plus : Meilleure qualification → +1-2 deals/mois supplémentaires = **10-20k€ CA/mois**

**ROI** :
- Investissement : 4 000€ (dev) + 70€/mois (ops)
- Retour : 1 600€/mois (temps) + 15 000€/mois (CA deals supplémentaires)
- **Break-even : 10 jours** 🚀

---

## 🎬 Script Démo Prospect

### Démo Backend (5 min)

**Étape 1 : Montrer Dashboard Notion (1 min)**
> "Voici notre CRM Notion. On a 150 leads analysés ce mois-ci."
> [Montrer colonnes : Nom, Score, Priorité, Justification]

**Étape 2 : Filtrer Hot Leads (1 min)**
> "Je filtre : Score ≥ 9/10."
> [Résultat : 12 leads]
> "Ces 12 personnes sont nos cibles prioritaires. DSI, CTO dans banques/industrie."

**Étape 3 : Drill Down 1 Lead (2 min)**
> [Cliquer sur "Paul Durand - DSI BNP"]
> "Notre agent a analysé son profil LinkedIn. Regardez la justification :
> - Poste : DSI (3/3 points)
> - Secteur : Banque (2/2 points)
> - Posts récents sur IA générative (2/2 points)
> - BNP recrute des profils IA (1/1 point)
> **Score total : 9/10**
>
> Il a même généré un angle d'approche : 'Mentionner son post sur ChatGPT, proposer audit gouvernance IA'."

**Étape 4 : Montrer Velocity (1 min)**
> "On score 20 profils/jour. Temps par profil : 3 minutes (agent) vs 15 minutes (manuellement).
> En 1 mois : 400 profils analysés. Avant avec ma méthode manuelle : J'en aurais fait 50."

---

## 📝 Checklist Développement

### Semaine 1 : MVP

**Jour 1 : Setup Scraper LinkedIn**
- [ ] Créer compte Apify ou Phantombuster
- [ ] Tester extraction 1 profil (nom, poste, bio)
- [ ] Script Python appel API scraper

**Jour 2-3 : Agent Scoring**
- [ ] Créer agent Azure AI Foundry
- [ ] Écrire system prompt critères scoring
- [ ] Tests avec 10 profils réels
- [ ] Ajuster prompt si scores incohérents

**Jour 4 : Intégration Notion**
- [ ] Créer database Notion "Leads"
- [ ] Script Python écriture via API Notion
- [ ] Test end-to-end : URL profil → Score → Notion

**Jour 5 : Batch Processing**
- [ ] Script batch 50 profils
- [ ] Parallélisation (5 threads)
- [ ] Dashboard résumé (hot/warm/cold)
- [ ] Notification Slack top 5 leads

---

## 🚀 Next Steps : Évolutions

### Court Terme (Mois 2)

- [ ] Génération auto message LinkedIn personnalisé
- [ ] Détection signaux achat (posts, changements poste)
- [ ] Export CSV pour campagnes email (si emails trouvés)
- [ ] A/B testing angles messages

### Moyen Terme (Mois 3-6)

- [ ] ML prédictif : Apprendre des leads convertis (features importants)
- [ ] Monitoring continu profils (alertes si changement poste)
- [ ] Intégration CRM pro (HubSpot, Pipedrive)
- [ ] Scoring entreprises (en plus des individus)

---

**Document créé le 26/12/2024**
**Prochaine étape** : Setup scraper + Premier test scoring
