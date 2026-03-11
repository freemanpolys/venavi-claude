# Trame Pitch - Entretien DevOps

## 01 - Introduction

Je vais faire un récapitulatif assez synthétique, donc n'hésitez pas à m'arrêter si vous voulez que je détaille un point plus particulier. Sinon, je vous laisserez me poser des questions à la fin.
## 02- Présentation des expériences pertinentes

Je m'appelle James Kokou GAGLO. Depuis 12 ans, je travaille exclusivement sur des problématiques DevOps et Cloud, dans des environnements très différents - télécom, finance, services. Cette diversité m'a permis de m'adapter à des contextes techniques et organisationnels variés, tout en gardant le même objectif : livrer de la valeur plus vite et plus sereinement.

**People Input (Sénégal)**
J'ai démarré ma carrière chez People Input, une petite entreprise au Sénégal, recruté comme développeur. Mais mes compétences Linux m'ont rapidement amené à porter une double casquette : en plus du dev, je suis devenu responsable de l'infrastructure (avec deux ops dans mon équipe plus tard) - nos serveurs internes et ceux de nos clients, des bare metal chez OVH qu'il fallait sécuriser et administrer.

Ces serveurs hébergeaient nos environnements de développement et de recette. Très vite, pour ne plus être le goulot d'étranglement à chaque déploiement, j'ai commencé à automatiser avec Ansible et Jenkins sur des VMs dans le cluster Proxmox que j'avais mis en place avec les bare metal OVH. C'est là que j'ai vraiment découvert l'approche DevOps, même si le terme n'était pas encore aussi répandu.

People Input avait créé un lab interne pour développer ses propres solutions. On est parti sur un stack Spring Boot/ Angular avec Spring Cloud pour les microservices. Cette architecture nous a naturellement poussés vers la conteneurisation.

J'ai alors cherché une solution d'orchestration pour garantir un environnement de production stable et hautement disponible. J'ai comparé les options de l'époque : Kubernetes, Cattle (Rancher) et Docker Swarm. J'avais retenu Cattle/Rancher pour déployer notre cluster - c'était la solution qui se rapprochait le plus de docker à l'époque, Kubernetes avait trop d'abstractions. Mais on sait tous comment ça s'est terminé : Kubernetes a gagné la guerre des orchestrateurs.

**Orange Sénégal (via ESN)**
Cette expertise sur Spring Cloud, Angular et Docker m'a ouvert les portes d'une ESN sénégalaise, qui m'a placé en mission chez Orange Sénégal en tant que Consultant Développeur Senior sur l'application Orange Money dans la DIGITAL FACTORY