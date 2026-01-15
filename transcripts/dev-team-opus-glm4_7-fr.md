# Dev Team Opus GLM 4.7 - Configuration de ZDI avec Claude Code

**Source**: Fichier local
**Chemin du fichier**: `/Users/jgaglo/Documents/screenshots-and-records/dev-team-opus-glm4_7.mov`
**Durée**: 00:14:54
**Taille**: 337M
**Langue**: Français (fr)
**Transcrit le**: 2026-01-15 11:02:14
**Backend de transcription**: whisper.cpp (medium model)

---

## Transcription

[00:00:00] Bonjour, bienvenue dans cette série de vidéos dans laquelle je teste les agents de code pour avoir un agent de code autonome comme copilote.

[00:00:12] Alors, si vous vous rappelez bien, la dernière fois, j'ai commencé à tester Cloud et je vous montrais un peu comment utiliser Cloud Code avec d'autres modèles.

[00:00:30] Voilà. Donc, dans la dernière vidéo, j'avais testé Cloud Code Proxy, Cloud Router avec GPT-5.2. Et voilà, c'est la configuration que je vous ai montrée.

[00:00:45] Alors, de pas mes expérimentations, je sentais que GPT-5.2 ne faisait pas aussi bien que Opus.

[00:00:55] Je suis sur un laptop tout bête lorsque je lance Cloud Code avec le Proxy. Peut-être que c'est le Proxy qui ne supporte pas tous les endpoints qu'Anthropic utilise pour Cloud Code, mais peut-être que c'est ça, je ne sais pas.

[00:01:13] Au lieu d'utiliser GPT-5.2 avec Cloud Code, je pense que ce serait préférable d'aller utiliser Codex parce que, oui, c'est sur ça que OpenAI a bossé.

[00:01:26] Donc, pour la petite anecdote, quand je lance le Cloud Code dans un répétoire de code avec GPT-5.2 et je prends un Sonnet ou un Opus, la réponse de Cloud est différente avec les modèles Anthropique, Code te dit "Bonjour, je suis dans le Code" qui est en Go.

[00:01:43] Alors, qu'est-ce que tu veux ajouter comme feature?

[00:01:52] Quand je le fais avec la GPT-5.2, il te dit juste un bonjour générique. Je me suis dit "Ah, les modèles Anthropique sont prêts à coder dans la codebase avec Cloud.

[00:02:04] Mais GPT-5.2, il faut déjà que tu le dises et que tu es dans un répétoire de code, et ainsi de suite.

[00:02:11] Donc, je me suis dit "Bon, je vais perdre du temps en utilisant cette méthode.

[00:02:14] Donc, pour ça, je me suis dit "Allez, je pars avec Anthropique.

[00:02:22] C'est vrai que je ne voulais pas dépenser des sous, mais je ne voulais pas non plus perdre du temps.

[00:02:31] Du coup, j'ai pris l'abonnement de 17 dollars qui fait 21 euros de mémoire TDC. C'est 20 dollars pas moins, oui, ça fait 21 euros de TDC et c'était assez intéressant.

[00:02:50] J'ai commencé à coder ainsi de suite, mais la limite que j'ai, c'est qu'il y a une fenêtre de 5 heures dans laquelle on a un quota et ce quota, je l'explose très rapidement.

[00:03:04] Par exemple, la capture que je vous ai faite ici, en voyant là, je suis à 100%, il me reste 4-15 minutes pour le renouvellement du quota.

[00:03:17] Ça veut dire qu'en 45 minutes, j'ai explosé le quota qui m'était alloué.

[00:03:26] Ça veut dire que j'ai explosé le quota très rapidement, du coup, je cherchais une alternative, des solutions pour pouvoir toujours bosser avec le celui de 20 euros, ne pas passer à 100 dollars, 200 dollars.

[00:03:41] Quand j'aurai les sous, je passerai à 100 dollars, 200 dollars, mais bon, voilà. Je voulais bien déjà utiliser celui-là.

[00:03:51] J'ai plein de pistes, la première piste simple à exploiter, c'est d'avoir un autre modèle aussi qui s'interconnait bien avec Cloud Code et sur les réseaux sociaux, on a le modèle JLM7 de ZI, on a aussi le Midmax.

[00:04:06] Mais selon les sondages et tout, apparemment le JLM7.4 marche un peu mieux avec Cloud Code, donc je suis parti dessus.

[00:04:15] J'ai pris l'abonnement de 6 dollars par mois, je l'ai pris en période de fait, ça m'avait coûté 3 dollars, mais à partir du mois prochain, je vais payer 6 dollars par mois.

[00:04:27] J'ai pris le Lite et déjà dans le Lite, vous voyez qu'on a trois fois d'utilisation que le plan entropique, donc ça c'est sympa.

[00:04:35] Et pour vous dire, depuis que je l'utilise, je n'ai jamais atteint le quota, si ce n'est sur les outils Web Search, Reader et tout ça.

[00:04:50] Ici par exemple, je n'ai jamais atteint le quota, je suis toujours dedans et vous pouvez aussi prendre le second, qui est à 15 dollars, qui lui a 5 fois plus de quota que le plan Pro.

[00:05:04] J'ai arrivé de l'entropique et apparemment il est plus rapide que le Lite. C'est vrai que le Lite est un peu lent, mais bon, ça fait l'affaire.

[00:05:13] Concrètement, ce qui s'affiche comme leaderboard, donc JLM4.7 est très proche de Opus en termes de code.

[00:05:22] En dessous, on a JPT5.2, pour vous dire que c'est une alternative sérieuse pour Cloud Opus.

[00:05:28] Comment est-ce que j'utilise ? Cloud, simple, j'ai juste un alias, j'aurais pu utiliser Cloud aussi directement, mais c'est parce que j'utilise le Dangerous Keep Permission pour qu'il ne me fatigue pas à me demander les permissions pour les outils de base.

[00:05:48] Ok, derrière, j'ai des Hooks pour bloquer les trucs dangereux et j'ai une fonction. Tout ça, c'est dans mon ZDZSHRH, donc si vous êtes un bash, ça sera bash.rc et voilà.

[00:06:05] Et ici, j'ai une fonction qui, c'est très simple, utilise les variés d'environnement d'entropique et met plutôt mon token que je récupère dans mon interface.

[00:06:17] J'ai ZEDI, et voilà l'URL, le endpoint de ZEDI à utiliser pour entropique.

[00:06:27] Et après, je relance la même commande, mais cette fois-ci, je change juste le chemin du Settings parce que par défaut, Cloud, lui-même, il voit dans home.cloud/setting.dizon.

[00:06:39] Donc moi, j'en ai créé un qui s'appelle ZEDI.settings.dizon et que j'utilise. Je vais vous montrer tout à l'heure comment ça se fait, tout ça.

[00:06:52] Et concrètement, comment est-ce que j'utilise pour coder ? J'utilise Opus, c'est pour ça que je crame très rapidement mes tokens, comme l'ITech Architect.

[00:07:02] C'est-à-dire, j'utilise avec le framework spec kit qui me permet de faire les spécifications, le plan, planifier les tâches et créer les tâches.

[00:07:16] Je vais le faire avec Opus comme ça, c'est bien carré, c'est bien fait et tout ça.

[00:07:21] Du coup, comme c'est bien fait, je montre un peu, par exemple, ça, par exemple, c'est une tâche, vous voyez comme c'est bien décrit, il y a même des bouts de code pour montrer un peu l'implémentation tout de suite.

[00:07:36] Du coup les modèles, même s'ils ne sont pas top, même si le modèle n'est pas top, en lisant l'implémentation de la tâche, il doit pouvoir coder, c'est sur cette assumption que je suis parti.

[00:07:44] Du coup, je m'arrête là et maintenant je passe la main à GLM 4.7 de ZEDI comme DevSenior pour coder la future.

[00:07:54] Donc j'utilise le Ralph, je pense que vous en avez entendu parler si vous utilisez tout ce qui est Vibe Coding, Ralph, ça fait une boucle jusqu'à ce que la tâche soit faite.

[00:08:05] Comme ça, je m'assure que GLM fait les tâches et que les tâches soient bien faites.

[00:08:12] Et après, je pense à rajouter Gemini dans la team pour le design et le front, mais ce n'est pas encore fait.

[00:08:23] Donc, rapidement, je vais montrer comment ça se passe pour configurer ZEDI dans votre outil.

[00:08:36] Après avoir obtenu le token, dans la documentation, il y a Cloud Code qui est là.

[00:08:46] Lorsqu'on venait dedans, vous avez la partie de Configure Environment Variable, dans cette partie, vous avez la partie automatique avec un helper, un outil qu'ils ont fait.

[00:08:56] Vous avez la partie manuelle qui permet de faire ça. Donc, là, vous voyez, vous avez juste à mettre votre token, ça, le time out.

[00:09:05] Mais non, si vous ne voulez pas le faire manuellement, si vous êtes sur Max, si vous utilisez le helper, je vous conseille de sauvegarder votre configuration, votre settings, votre settings de base de Cloud.

[00:09:16] Vous le sauvegarder et vous lancer la commande, il va vous monter un prompt comme ça et il va vous configurer les choses, il va récupérer, je pense qu'il va vous demander l'API key, quelque chose comme ça, et il configure le settings.

[00:09:30] Après, lorsque vous avez configuré, vous n'avez qu'à faire Cloud et ça va utiliser l'API de ZEDI.

[00:09:38] Mais bon, moi, comme je voulais utiliser les deux, vous voyez, après, ça va configurer le settings, je vais les renormer et j'ai une commande Cloud, mais qui pointe sur le settings que je veux utiliser.

[00:09:52] Donc, on peut manuellement aussi rajouter des variés d'environnement pour utiliser l'M7, pour Sonnet utiliser l'M4.7 ou pour Haiku, utilise celui-là.

[00:10:03] Mais je vous conseille de ne pas le faire parce qu'eux-mêmes, ils le font directement chez eux, voilà, si vous voulez le faire chez vous, c'est ça.

[00:10:12] Mais eux, ils le font automatiquement dans leurs API, ce qui fait que quand ils auront d'autres modèles, ce sera automatique.

[00:10:20] Par contre, si vous le faites manuellement, s'il y a d'autres modèles, c'est à vous de venir changer.

[00:10:28] Donc, pour vous assurer que la commande de votre Cloud pointe bien sur ZEDI, il suffit de, lorsque vous lancez, de faire /status.

[00:10:37] Vous voulez que vous aurez l'URL qui sera là et vous aurez des informations vous concernant un peu sur, voilà, dans le statut de Cloud, donc vous savez qu'ils tapent sur les pièces et les directions.

[00:10:49] La dernière chose à faire, c'est de configurer leur MCPCerver, ok, ces MCPCerver vous permettent de faire du websearch, webread, ils sont là, donc c'est très simple à faire aussi.

[00:11:02] Moi, j'ai configuré, ouais, la vision aussi, je pense que comme ça vous pouvez passer des images dans, voilà, à Cloud Code, voilà, vous voyez, il peut analyser les images, les vidéos.

[00:11:13] Donc, comment ça se fait ? Bon, il y a un quota dessus, donc vous verrez le quota, donc c'est toujours avec les API key, mais ils ont, voilà, voilà un peu la commande pour le faire.

[00:11:26] Quand vous faites Cloud mcp add -s user, ça, ok, bon, c'est à remplacer, bon, c'est l'API key qui est à remplacer, donc vous emplacez votre API key, ça le fait.

[00:11:34] Maintenant, ce que ça fait, voilà, si vous voulez aussi, vous pouvez le faire manuellement, c'est ça, c'est ça un peu la config, votre API key, ainsi de suite.

[00:11:41] C'est assez sympa parce que comment je l'utilise, ça remplace le web search de Cloud, donc ce que ça fait, c'est ça écrit directement dans, comment ça s'appelle, cloud.json.

[00:11:53] Qui est la racine de votre home, voilà, votre repertoire de base, du coup, quand j'utilise le Cloud normal aussi, il utilise ce web search, ça me permet de diminuer le nombre de tokens.

[00:12:05] Qui est utilisé pour chercher sur le web, donc ça utilise plutôt les tokens de ZDI, donc le search aussi, il faut l'installer, voilà, le web search.

[00:12:16] L'autre c'est le vision, donc c'est pareil, la commande est là, ok, vous remplacez juste votre API key et c'est fait.

[00:12:25] Web reader aussi, après avoir cherché, il faut lire le contenu, donc c'est pareil aussi, donc c'est tous ces outils et cette configuration que je fais.

[00:12:36] Et avec l'alias et la fonction, j'arrive à soutenir les deux, voilà comment j'utilise ZDI, j'ai d'autres pistes pour diminuer mon utilisation de tokens.

[00:12:47] Je suis en train de les tester, je vous partagerai ça dans une autre vidéo et là actuellement, on peut voir que je suis en train de, voilà, il y a ZDI qui est en train de bosser sur les tâches créées par code.

[00:13:01] Avec Cloud Code avec Opus, sur du SpecKit, voilà, j'utilise plutôt SpecKitty qui me permet d'avoir un dashboard assez sympa pour voir que les tâches sont implémentées.

[00:13:11] Actuellement, c'est celui qui est en cours assez manuel, donc c'est moi qui dois aller le tester pour voir si tout marche bien.

[00:13:20] Mais tout ça a été implémenté pendant que je suis en train de vous parler, donc les tests unitaires, vous voyez un peu ça, c'est tout ce qui est créé dans une tâche par Opus.

[00:13:29] Et c'est assez détaillé pour que n'importe quel agent lise et puis code, parce que les bouts de code aussi sont déjà là, ainsi de suite.

[00:13:39] Donc je pense que c'est un bon workflow. Voilà ce que je voulais partager dans cette vidéo, si vous voulez connaître la suite de cette aventure, abonnez-vous, souscrivez.

[00:13:49] Je mettrai en place bientôt une newsletter, comme ça je pourrais pousser les trucs que je teste de temps en temps avant de faire des vidéos, parce que les vidéos ça prend du temps et de l'énergie à faire.

[00:14:02] Merci et à plus.

---

## Informations sur le fichier

- **Format**: MOV (QuickTime)
- **Codec audio**: AAC (LC), 48000 Hz, stéréo
- **Codec vidéo**: Non spécifié
- **Taille**: 337M
- **Durée**: 00:14:54

## Résumé

Cette vidéo explique comment configurer et utiliser ZDI (GLM 4.7) comme alternative à Claude Opus pour réduire les coûts d'utilisation de Claude Code. L'auteur démontre sa configuration personnelle utilisant Opus pour l'architecture et la planification (via SpecKit), et GLM 4.7 pour l'implémentation du code (via Ralph Loop). Il montre également comment configurer les serveurs MCP pour websearch, webread et vision.
