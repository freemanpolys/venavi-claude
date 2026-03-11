# Trame Pitch - Entretien DevOps

## 01 - Introduction

Je vais faire un récapitulatif assez synthétique, donc n'hésitez pas à m'arrêter si vous voulez que je détaille un point plus particulier. Sinon, je vous laisserez me poser des questions à la fin.
## 02- Présentation des expériences pertinentes

Je m'appelle James Kokou GAGLO je suis diplômé de l'Ecole Supérieur Polytechnique de Dakar au Sénégal. Depuis 12 ans, je travaille exclusivement sur des problématiques DevOps et Cloud, dans des environnements très différents - télécom, finance, services. Cette diversité m'a permis d'évoluer dans des contextes techniques et organisationnels variés, tout en gardant le même objectif : livrer de la valeur plus vite et plus sereinement.
Je vais illustrer avec deux ou trois expériences en lien direct avec votre besoin - et on pourra creuser celles qui vous intéressent.

**Orange Sénégal/Sonatel

Orange Sénégal est le premier opérateur télécom du pays. Orange Money, c'est leur application de mobile money - un service critique, car c'est le moyen de paiement dominant au Sénégal et en Afrique de l'Ouest, le taux de bancarisation étant faible mais tout le monde a un téléphone.

J'ai intégré la Digital Factory en tant que Consultant Dev Senior sur la stack Spring Boot / Spring Cloud / Angular. Mais très vite, j'ai pris en charge la dimension DevOps du projet :
  - Mise en place de la pipeline Jenkins avec des étapes de qualité et de sécurité (exigences de l'équipe sécu transverse)
  - Automatisation des déploiements avec Ansible sur les environnements de  dev,recette et pré-prod (sur VM)
  - La prod restait manuelle - les ops ne voulaient pas de risque - mais tout le reste était automatisé

Mes compétences DevOps démontrées sur Orange Money m'ont valu d'être recruté en interne, cette fois en tant que DevOps dans le Centre d'Expertise. On était deux, responsables de :
  - La toolchain des équipes de dev de la Direction Digitale qui a remplacé la Digital Factory avec beaucoup plus de projets de d'équipes organisée en agile
  - La mise à disposition d'images Docker standardisées, des templates de déploiement, des scans applicatifs couvrant la qualité , la sécurité (Qualys, Sonar)
  - Les pipelines CI/CD couvrant l'intégration continue (couvrant les builds, tests, scan de sécurité), de la livraison continue sur Nexus et de du déploiement continue basé sur de l'ansible pour les VMs et des templates Openshift pour les envirennements Kubernetes
  - Openshift/Kubernetes : j'ai participé à l'installation du cluster OpenShift avec l'accompagnement d'un partenaire français (BeOpenIT)
  - J'ai également déployé un cluster Rancher pour l'orchestration, ainsi qu'un cluster Elastic (ELK) pour les besoins d'observabilité et de SIEM.
  (Elasticsearch, Logstash, Kibana).
  - Support N3 et formation des équipes aux bonnes pratiques DevOps

  C'est sur ce projet Kubernetes que j'ai consolidé mon expertise et obtenu ma première certification.

  J'ai poursuivi chez BeOpenIT en France, une ESN spécialisée DevOps/Cloud.

**BeOpenIT/BNP Parisbas**

Chez BeOpenIT, j'ai d'abord travaillé sur un SaaS interne destiné à faciliter l'onboarding des développeurs sur Kubernetes.
  - Pipelines sur Azure DevOps
  - Provisionnement de clusters Kubernetes sur Azure et GCP via des modules Terraform
  - Infrastructure as Code complète : création et déprovisionnement de clusters à la demande
  C'est là que j'ai vraiment approfondi Terraform et le cloud public multi-provider.

J'ai ensuite été envoyé en mission par BeOpenIT chez BNP Paribas, dans une équipe toolchain - un peu comme à Sonatel. Le contexte : ils avaient CloudBees CI et migraient leurs workloads de Mesos vers Kubernetes.
  Mon périmètre :
  - Maintenance de l'outillage : CloudBees CI, Ansible (templates + tests Molecule), Artifactory, SonarQube
  - Accompagnement de la migration vers Kubernetes
  -
  Ma valeur ajoutée :
  L'équipe n'avait pas d'accès admin au cluster Kubernetes - c'était géré par une équipe Cloud séparée. Chaque bug nécessitait une demande. J'ai pris l'initiative de demander des accès admin, ce qui m'a permis de débugger directement les problèmes Jenkins dans le cluster et de former l'équipe à Kubernetes pour qu'ils gagnent en autonomie.

Toujours via BeOpenIT, j'ai été positionné chez ICDC - Informatique Caisse des Dépôts Consignations en tant que Consultant DevOps Senior  et  puis internalisé plus tard.

  **ICDC - Informatique Caisse des Dépôts et Consignations**
ICDC mène une transformation applicative cloud native : tout conteneuriser, adopter les principes DevOps et Agile.

J'ai intégré le projet avec en tant que DevOps. Ma mission : accompagner les équipes qui déployaient sur VM à conteneuriser leurs applications Spring Boot / Angular / Python.
  Concrètement :
  - Mise à jour des pipelines existantes : ajout des stages de build, scan de sécurité, construction d'images
  - Formation et accompagnement au déploiement sur Kubernetes (cluster Rancher interne)
  - Création de templates Helm standardisés pour que les Ops (responsables de la pré-prod et prod) aient une vue claire et homogène des déploiements

La transformation Agile intégrait des Ops dans les équipes. Je les ai formés sur toute la chaîne DevOps :
  - Git, Artifactory, pipelines CI/CD
  - Kubernetes et Helm

La plateforme a migré de CloudBees CI vers GitLab CI pour une approche full Infrastructure as Code. J'ai accompagné les devs sur cette transition.

  En parallèle, j'ai travaillé avec l'équipe plateforme pour développer :
  - Des modules Terraform pour déployer sur Azure
  - Des providers Terraform custom pour automatiser les interactions avec les outils internes (ex : création de topics
   Kafka)


## 03 - Conclusion
Ce parcours m'a donné une vision complète de la chaîne DevOps : du code à la prod, de l'outillage à l'accompagnement des équipes. C'est exactement ce que je souhaite apporter chez vous. Je vous laisse me poser vos questions.