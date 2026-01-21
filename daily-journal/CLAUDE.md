# Daily Journal — Build Logs

Ce dossier contient les build logs quotidiens pour le système "Code → Contenu" de DoveAIA Labs.

## Workflow quotidien

### Début de session
1. Créer le fichier du jour : `cp TEMPLATE-build-log.md YYYY-MM-DD-build-log.md`
2. Lancer OBS (screen recording)
3. Noter l'objectif de la session dans le build log

### Pendant le coding
- Noter au fil de l'eau : découvertes, erreurs, solutions
- Parler à voix haute (optionnel, utile pour les vidéos)

### Fin de session (5 min)
1. Stopper OBS
2. Compléter le build log
3. Cocher ce qui est "publiable"

## Structure des fichiers

```
daily-journal/
├── CLAUDE.md                  ← Ce fichier (instructions)
├── TEMPLATE-build-log.md      ← Template à copier
└── YYYY-MM-DD-build-log.md    ← Build logs quotidiens
```

## Screen recordings

Les enregistrements OBS sont stockés dans :
```
~/Videos/build-logs/YYYY-MM-DD.mkv
```

## Transformation en contenu

| Source | Devient | Fréquence |
|--------|---------|-----------|
| Build log intéressant | Post LinkedIn/X | 2-3x/semaine |
| Build log + screen | Vidéo YouTube | 1x/semaine |
| Plusieurs build logs | Newsletter récap | 1x/semaine |

## Convention de nommage

- Build logs : `YYYY-MM-DD-build-log.md`
- Screen recordings : `YYYY-MM-DD.mkv` (ou `.mp4` après remux)
- Si plusieurs sessions/jour : `YYYY-MM-DD-session2.mkv`

## Tags "Publiable"

Dans chaque build log, cocher ce qui peut devenir du contenu :
- **Post LinkedIn/X** : une découverte, un problème résolu, une leçon
- **Post Skool** : contenu plus détaillé pour la communauté
- **Vidéo YouTube** : session de coding intéressante à éditer
- **Newsletter** : récap de la semaine
- **Juste archive** : rien de publiable, mais utile pour mémoire
