/**
 * AKOUENDY Kubernetes - Internationalization (i18n)
 * French / English translations
 */

const translations = {
    fr: {
        // Navigation
        nav: {
            services: "Services",
            pricing: "Tarifs",
            training: "Formations",
            simulator: "Simulateur",
            technologies: "Technologies",
            contact: "Contact"
        },

        // Hero
        hero: {
            title: "Infogérance Kubernetes",
            subtitle: "Build | Run | Deploy",
            description: "Experts Kubernetes en France. Nous construisons, exploitons et faisons évoluer vos clusters pour que vous puissiez vous concentrer sur votre métier.",
            cta_simulator: "Simuler mon projet",
            cta_services: "Découvrir nos services",
            stat_availability: "Disponibilité garantie",
            stat_response: "Temps de réponse P1",
            stat_support: "Support disponible"
        },

        // Services
        services: {
            title: "Nos Services",
            subtitle: "Une offre complète couvrant tout le cycle de vie de votre infrastructure Kubernetes",
            popular: "Populaire",
            build: {
                title: "BUILD",
                tagline: "Construction de Cluster",
                features: [
                    "Architecture haute disponibilité",
                    "Installation RKE2 + Rancher",
                    "Configuration réseau (Calico, Cilium)",
                    "Stack observabilité (Prometheus, Grafana)",
                    "Sécurité (RBAC, Network Policies)",
                    "Documentation et formation"
                ],
                price: "À partir de"
            },
            run: {
                title: "RUN",
                tagline: "Infogérance & MCO",
                features: [
                    "Surveillance 24/7 et alerting",
                    "Gestion des certificats TLS",
                    "Mises à jour de sécurité",
                    "Support SLA garanti",
                    "Audit de sécurité trimestriel",
                    "Rapports d'exploitation"
                ],
                price: "À partir de"
            },
            deploy: {
                title: "DEPLOY",
                tagline: "Déploiement Applicatif",
                features: [
                    "Containerisation d'applications",
                    "Manifests Kubernetes optimisés",
                    "Configuration CI/CD",
                    "Stratégies de déploiement",
                    "Accompagnement DevOps",
                    "Formation des équipes"
                ],
                price: "À partir de"
            }
        },

        // Toolchain
        toolchain: {
            title: "Toolchain CI/CD Complète",
            subtitle: "Une chaîne DevSecOps intégrée pour industrialiser vos déploiements",
            tools: {
                cicd: { title: "GitLab / Jenkins", desc: "Pipelines automatisés" },
                registry: { title: "Harbor", desc: "Registry Docker privé" },
                scan: { title: "Trivy", desc: "Vulnérabilités images" },
                dast: { title: "OWASP ZAP", desc: "Sécurité applicative" },
                quality: { title: "SonarQube", desc: "Qualité de code" },
                secrets: { title: "Vault", desc: "Gestion des secrets" }
            },
            price: "Option Toolchain CI/CD :"
        },

        // Pricing
        pricing: {
            title: "Nos Tarifs",
            subtitle: "Des offres transparentes adaptées à vos besoins",
            tabs: {
                packs: "Packs",
                build: "BUILD",
                run: "RUN",
                deploy: "DEPLOY"
            },
            recommended: "Recommandé",
            request_quote: "Demander un devis",
            contact_us: "Nous contacter",
            instead_of: "Au lieu de",
            savings: "Économie",
            starting_from: "À partir de",
            on_quote: "Sur devis",
            per_month: "/mois",
            per_year: "/an",
            per_day: "/jour",
            excl_vat: "HT",
            min_commitment: "Engagement minimum",
            months: "mois",
            days: "jours",
            option_cicd: "Option CI/CD",
            packs: {
                starter: {
                    name: "Pack Démarrage",
                    description: "Idéal pour une première mise en production",
                    features: [
                        "Cluster 3 workers, 1 master",
                        "Rancher (interface d'administration)",
                        "RUN Essentiel 12 mois",
                        "Support H+4 jours ouvrés",
                        "1 application déployée",
                        "1 journée de formation"
                    ]
                },
                production: {
                    name: "Pack Production",
                    description: "Pour les environnements critiques",
                    features: [
                        "Cluster HA 5 workers, 3 masters",
                        "Rancher + Toolchain CI/CD complète",
                        "GitOps avec ArgoCD",
                        "RUN Standard 12 mois",
                        "Support H+2 jours ouvrés",
                        "3 applications déployées",
                        "2 journées de formation"
                    ]
                },
                enterprise: {
                    name: "Pack Enterprise",
                    description: "Solution complète grandes organisations",
                    features: [
                        "Cluster HA multi-AZ 10+ workers",
                        "Toolchain CI/CD + Service Mesh",
                        "GitOps ArgoCD + Istio",
                        "RUN Premium 12 mois",
                        "Support 24/7 dédié",
                        "20 jours de régie annuels",
                        "5 journées de formation"
                    ]
                }
            },
            tables: {
                tier: "Offre",
                nodes: "Nœuds",
                control_plane: "Control-Plane",
                timeline: "Délai",
                price: "Tarif HT",
                max_nodes: "Nœuds max",
                hours: "Plage horaire",
                support: "Support",
                report: "Rapport",
                complexity: "Complexité",
                days_included: "Jours inclus",
                daily_rate: "Tarif jour",
                options: "Options",
                on_call: "Options astreinte",
                coverage: "Plage couverte"
            },
            notes: {
                commitment: "Engagement minimum : 12 mois. Interventions hors contrat : 150 €/h (min. 2h).",
                rollover: "Report des jours non consommés : 25% max, sur le trimestre suivant."
            }
        },

        // Simulator
        simulator: {
            title: "Simulateur de Projet",
            subtitle: "Composez votre offre et estimez votre budget en quelques clics",
            steps: {
                build: "Construction du cluster (BUILD)",
                run: "Infogérance (RUN) — 12 mois",
                deploy: "Déploiement applicatif (DEPLOY)",
                training: "Formation"
            },
            labels: {
                cluster_size: "Taille du cluster",
                build_options: "Options BUILD",
                support_level: "Niveau de support",
                on_call_options: "Options Astreinte",
                apps_to_deploy: "Applications à déployer",
                annual_package: "Forfait annuel DEPLOY (optionnel)",
                training_days: "Journées de formation (900 €/jour)",
                simple_apps: "Applications simples (1 800 €)",
                standard_apps: "Applications standard (3 500 €)",
                complex_apps: "Applications complexes (7 000 €)",
                none: "Aucun"
            },
            options: {
                multicloud: "Cluster multi-cloud / hybride",
                gitops: "GitOps ArgoCD/FluxCD",
                servicemesh: "Service Mesh Istio/Linkerd",
                cicd: "Toolchain CI/CD complète",
                evening: "Astreinte soir 18h-22h",
                weekend: "Astreinte week-end",
                holidays: "Astreinte jours fériés"
            },
            tiers: {
                starter: { name: "Starter", desc: "3 workers, 1 master" },
                standard: { name: "Standard", desc: "5 workers, 3 masters HA" },
                enterprise: { name: "Enterprise", desc: "10+ workers, multi-AZ" },
                essential: { name: "Essentiel", desc: "H+4, Lun-Ven 9h-18h" },
                standard_run: { name: "Standard", desc: "H+2, Lun-Ven 9h-18h" },
                premium: { name: "Premium", desc: "30min, 24/7" }
            },
            summary: {
                title: "Récapitulatif",
                build: "BUILD",
                run: "RUN (12 mois)",
                deploy: "DEPLOY",
                training: "Formation",
                total: "Total estimé HT",
                services: "Services inclus",
                cta: "Demander un devis détaillé",
                note: "Estimation non contractuelle. Devis personnalisé sur demande."
            },
            services_list: {
                ha_cluster: "Cluster Kubernetes haute disponibilité",
                cluster: "Cluster Kubernetes",
                rancher: "Rancher (interface d'administration)",
                monitoring: "Stack monitoring Prometheus/Grafana",
                support_h4: "Support H+4 jours ouvrés",
                support_h2: "Support H+2 jours ouvrés",
                support_247: "Support 24/7 avec astreinte",
                mco_mcs: "MCO + MCS inclus",
                multicloud: "Architecture multi-cloud / hybride",
                gitops: "GitOps avec ArgoCD/FluxCD",
                servicemesh: "Service Mesh (Istio/Linkerd)",
                cicd: "CI/CD complet (GitLab, Harbor, Trivy, SonarQube, Vault)",
                days_annual: "jours de régie annuels",
                training_day: "journée de formation",
                training_days: "journées de formation"
            }
        },

        // Technologies
        technologies: {
            title: "Technologies Maîtrisées",
            subtitle: "Une expertise reconnue sur l'écosystème Cloud Native",
            categories: {
                distributions: "Distributions Kubernetes",
                cloud: "Cloud Providers",
                networking: "Networking",
                observability: "Observabilité",
                security: "Sécurité",
                cicd: "CI/CD & GitOps"
            }
        },

        // SLA
        sla: {
            title: "Nos Engagements",
            items: {
                availability: { value: "99.9%", title: "Disponibilité", desc: "Cluster garanti disponible hors maintenance planifiée" },
                response: { value: "30min", title: "Réactivité P1", desc: "Prise en charge des incidents critiques en moins de 30 minutes" },
                confidentiality: { value: "NDA", title: "Confidentialité", desc: "Accord de confidentialité systématique" },
                reversibility: { value: "DOC", title: "Réversibilité", desc: "Documentation complète et accompagnement sortie" }
            }
        },

        // Contact
        contact: {
            title: "Prêt à industrialiser votre infrastructure Kubernetes ?",
            subtitle: "Contactez-nous pour un échange sans engagement. Nous analyserons vos besoins et vous proposerons une solution adaptée.",
            labels: {
                email: "Email",
                phone: "Téléphone",
                website: "Site web"
            },
            steps: {
                title: "Prochaines étapes",
                items: [
                    { title: "Échange découverte", desc: "Compréhension de vos besoins" },
                    { title: "Proposition personnalisée", desc: "Offre adaptée à votre contexte" },
                    { title: "Validation technique", desc: "Revue d'architecture et planning" },
                    { title: "Démarrage", desc: "Lancement sous 2 semaines" }
                ]
            },
            form: {
                name: "Nom complet *",
                email: "Email professionnel *",
                company: "Société",
                phone: "Téléphone",
                project: "Décrivez votre projet *",
                project_placeholder: "Contexte, besoins, contraintes...",
                budget: "Budget estimé",
                budget_options: {
                    select: "Sélectionnez",
                    lt20k: "Moins de 20 000 €",
                    "20-50k": "20 000 € - 50 000 €",
                    "50-100k": "50 000 € - 100 000 €",
                    gt100k: "Plus de 100 000 €"
                },
                submit: "Envoyer ma demande"
            }
        },

        // Footer
        footer: {
            tagline: "Expert Kubernetes & Cloud Native en France",
            services: "Services",
            resources: "Ressources",
            contact: "Contact",
            copyright: "Tous droits réservés."
        },

        // Training
        training: {
            hero: {
                title: "Formations Kubernetes",
                subtitle: "Des formations pratiques dispensées par des experts certifiés CKA/CKAD pour maîtriser Kubernetes de A à Z"
            },
            badges: {
                certified: "Formateurs certifiés CKA/CKAD",
                practice: "70% de pratique",
                small_groups: "Petits groupes (4-10)"
            },
            catalog: {
                title: "Notre catalogue de formations",
                subtitle: "Des parcours adaptés à tous les niveaux, du débutant à l'expert"
            },
            labels: {
                program: "Programme",
                included: "Inclus",
                intra: "Intra-entreprise",
                individual: "Individuel",
                with_voucher: "Avec voucher examen",
                bundle: "Bundle CKA + CKAD",
                up_to_8: "(jusqu'à 8 pers.)"
            },
            courses: {
                fundamentals: {
                    title: "Kubernetes Fondamentaux",
                    subtitle: "Maîtrisez les bases de l'orchestration de conteneurs",
                    duration: "3 jours",
                    topics: {
                        1: "Architecture Kubernetes et composants",
                        2: "Pods, Deployments, Services",
                        3: "ConfigMaps, Secrets, Volumes",
                        4: "Ingress et réseau",
                        5: "Monitoring avec Prometheus/Grafana"
                    }
                },
                ckad: {
                    title: "Préparation CKAD",
                    subtitle: "Certified Kubernetes Application Developer",
                    duration: "4 jours",
                    topics: {
                        1: "Application Design and Build (20%)",
                        2: "Application Deployment (20%)",
                        3: "Observability and Maintenance (15%)",
                        4: "Environment and Security (25%)",
                        5: "Services and Networking (20%)"
                    }
                },
                cka: {
                    title: "Préparation CKA",
                    subtitle: "Certified Kubernetes Administrator",
                    duration: "5 jours",
                    topics: {
                        1: "Cluster Architecture & Installation (25%)",
                        2: "Workloads and Scheduling (15%)",
                        3: "Services and Networking (20%)",
                        4: "Storage (10%)",
                        5: "Troubleshooting (30%)"
                    }
                }
            },
            included: {
                materials: "Support de cours PDF",
                materials_200: "Support de cours 200+ pages",
                materials_300: "Support de cours 300+ pages",
                lab_30: "Accès lab 30 jours",
                lab_60: "Accès lab 60 jours",
                lab_90: "Accès lab multi-clusters 90 jours",
                certificate: "Attestation de formation",
                support_2h: "2h de support post-formation",
                exercises_150: "150+ exercices type examen",
                exercises_200: "200+ exercices type examen",
                mock_exams: "2 examens blancs"
            },
            certifications: {
                title: "Les certifications Kubernetes CNCF",
                subtitle: "Des certifications reconnues mondialement par l'industrie",
                duration: { title: "Durée de l'examen", desc: "Examen pratique de 2 heures sur environnement réel" },
                score: { title: "Score de réussite", desc: "Minimum 66% pour obtenir la certification" },
                validity: { title: "Validité (années)", desc: "Certification valable 3 ans après obtention" },
                cost: { title: "Coût de l'examen", desc: "Inclut 1 passage + 1 repasse gratuite" }
            },
            comparison: {
                title: "Comparatif des formations",
                headers: { criteria: "Critère" },
                rows: {
                    duration: "Durée",
                    level: "Niveau",
                    focus: "Focus",
                    certification: "Certification",
                    lab: "Accès Lab",
                    price: "Tarif"
                },
                levels: {
                    beginner: "Débutant → Intermédiaire",
                    intermediate: "Intermédiaire",
                    advanced: "Intermédiaire → Avancé"
                },
                focus: {
                    general: "Utilisation générale",
                    dev: "Développement applicatif",
                    admin: "Administration cluster"
                },
                cert: {
                    attestation: "Attestation AKOUENDY",
                    cncf: "Certification CNCF"
                }
            },
            why_us: {
                title: "Pourquoi choisir nos formations ?",
                certified: { title: "Formateurs certifiés", desc: "Tous nos formateurs sont certifiés CKA et CKAD avec une expérience terrain" },
                practice: { title: "70% de pratique", desc: "Exercices sur environnement réel avec la même stack que nos offres d'infogérance" },
                guarantee: { title: "Garantie de réussite", desc: "Accès gratuit à la prochaine session si vous ne réussissez pas l'examen" },
                support: { title: "Suivi personnalisé", desc: "Accompagnement post-formation avec heures de support incluses" }
            },
            cta: {
                title: "Prêt à vous former sur Kubernetes ?",
                subtitle: "Contactez-nous pour discuter de vos besoins et planifier votre formation",
                contact: "Demander un devis",
                simulator: "Simuler mon projet"
            }
        },

        // Notifications
        notifications: {
            form_error: "Veuillez remplir tous les champs obligatoires.",
            email_error: "Veuillez entrer une adresse email valide.",
            form_success: "Votre demande a bien été envoyée. Nous vous recontacterons rapidement."
        }
    },

    en: {
        // Navigation
        nav: {
            services: "Services",
            pricing: "Pricing",
            training: "Training",
            simulator: "Simulator",
            technologies: "Technologies",
            contact: "Contact"
        },

        // Hero
        hero: {
            title: "Kubernetes Managed Services",
            subtitle: "Build | Run | Deploy",
            description: "Kubernetes experts in France. We build, operate, and evolve your clusters so you can focus on your business.",
            cta_simulator: "Simulate my project",
            cta_services: "Discover our services",
            stat_availability: "Guaranteed availability",
            stat_response: "P1 response time",
            stat_support: "Support available"
        },

        // Services
        services: {
            title: "Our Services",
            subtitle: "A complete offering covering the entire lifecycle of your Kubernetes infrastructure",
            popular: "Popular",
            build: {
                title: "BUILD",
                tagline: "Cluster Construction",
                features: [
                    "High availability architecture",
                    "RKE2 + Rancher installation",
                    "Network configuration (Calico, Cilium)",
                    "Observability stack (Prometheus, Grafana)",
                    "Security (RBAC, Network Policies)",
                    "Documentation and training"
                ],
                price: "Starting from"
            },
            run: {
                title: "RUN",
                tagline: "Managed Operations",
                features: [
                    "24/7 monitoring and alerting",
                    "TLS certificate management",
                    "Security updates",
                    "Guaranteed SLA support",
                    "Quarterly security audit",
                    "Operations reports"
                ],
                price: "Starting from"
            },
            deploy: {
                title: "DEPLOY",
                tagline: "Application Deployment",
                features: [
                    "Application containerization",
                    "Optimized Kubernetes manifests",
                    "CI/CD configuration",
                    "Deployment strategies",
                    "DevOps support",
                    "Team training"
                ],
                price: "Starting from"
            }
        },

        // Toolchain
        toolchain: {
            title: "Complete CI/CD Toolchain",
            subtitle: "An integrated DevSecOps pipeline to industrialize your deployments",
            tools: {
                cicd: { title: "GitLab / Jenkins", desc: "Automated pipelines" },
                registry: { title: "Harbor", desc: "Private Docker registry" },
                scan: { title: "Trivy", desc: "Image vulnerabilities" },
                dast: { title: "OWASP ZAP", desc: "Application security" },
                quality: { title: "SonarQube", desc: "Code quality" },
                secrets: { title: "Vault", desc: "Secrets management" }
            },
            price: "CI/CD Toolchain option:"
        },

        // Pricing
        pricing: {
            title: "Our Pricing",
            subtitle: "Transparent offers tailored to your needs",
            tabs: {
                packs: "Packs",
                build: "BUILD",
                run: "RUN",
                deploy: "DEPLOY"
            },
            recommended: "Recommended",
            request_quote: "Request a quote",
            contact_us: "Contact us",
            instead_of: "Instead of",
            savings: "Savings",
            starting_from: "Starting from",
            on_quote: "On quote",
            per_month: "/month",
            per_year: "/year",
            per_day: "/day",
            excl_vat: "excl. VAT",
            min_commitment: "Minimum commitment",
            months: "months",
            days: "days",
            option_cicd: "CI/CD option",
            packs: {
                starter: {
                    name: "Starter Pack",
                    description: "Ideal for a first production deployment",
                    features: [
                        "3 workers, 1 master cluster",
                        "Rancher (admin interface)",
                        "Essential RUN 12 months",
                        "H+4 business days support",
                        "1 deployed application",
                        "1 training day"
                    ]
                },
                production: {
                    name: "Production Pack",
                    description: "For critical environments",
                    features: [
                        "HA cluster 5 workers, 3 masters",
                        "Rancher + complete CI/CD toolchain",
                        "GitOps with ArgoCD",
                        "Standard RUN 12 months",
                        "H+2 business days support",
                        "3 deployed applications",
                        "2 training days"
                    ]
                },
                enterprise: {
                    name: "Enterprise Pack",
                    description: "Complete solution for large organizations",
                    features: [
                        "HA multi-AZ cluster 10+ workers",
                        "CI/CD toolchain + Service Mesh",
                        "GitOps ArgoCD + Istio",
                        "Premium RUN 12 months",
                        "Dedicated 24/7 support",
                        "20 annual support days",
                        "5 training days"
                    ]
                }
            },
            tables: {
                tier: "Tier",
                nodes: "Nodes",
                control_plane: "Control-Plane",
                timeline: "Timeline",
                price: "Price (excl. VAT)",
                max_nodes: "Max nodes",
                hours: "Hours",
                support: "Support",
                report: "Report",
                complexity: "Complexity",
                days_included: "Days included",
                daily_rate: "Daily rate",
                options: "Options",
                on_call: "On-call options",
                coverage: "Coverage"
            },
            notes: {
                commitment: "Minimum commitment: 12 months. Out-of-contract interventions: €150/h (min. 2h).",
                rollover: "Unused days rollover: 25% max, during the following quarter."
            }
        },

        // Simulator
        simulator: {
            title: "Project Simulator",
            subtitle: "Build your offer and estimate your budget in a few clicks",
            steps: {
                build: "Cluster construction (BUILD)",
                run: "Managed services (RUN) — 12 months",
                deploy: "Application deployment (DEPLOY)",
                training: "Training"
            },
            labels: {
                cluster_size: "Cluster size",
                build_options: "BUILD options",
                support_level: "Support level",
                on_call_options: "On-call options",
                apps_to_deploy: "Applications to deploy",
                annual_package: "Annual DEPLOY package (optional)",
                training_days: "Training days (€900/day)",
                simple_apps: "Simple applications (€1,800)",
                standard_apps: "Standard applications (€3,500)",
                complex_apps: "Complex applications (€7,000)",
                none: "None"
            },
            options: {
                multicloud: "Multi-cloud / hybrid cluster",
                gitops: "GitOps ArgoCD/FluxCD",
                servicemesh: "Service Mesh Istio/Linkerd",
                cicd: "Complete CI/CD toolchain",
                evening: "Evening on-call 6pm-10pm",
                weekend: "Weekend on-call",
                holidays: "Holiday on-call"
            },
            tiers: {
                starter: { name: "Starter", desc: "3 workers, 1 master" },
                standard: { name: "Standard", desc: "5 workers, 3 masters HA" },
                enterprise: { name: "Enterprise", desc: "10+ workers, multi-AZ" },
                essential: { name: "Essential", desc: "H+4, Mon-Fri 9am-6pm" },
                standard_run: { name: "Standard", desc: "H+2, Mon-Fri 9am-6pm" },
                premium: { name: "Premium", desc: "30min, 24/7" }
            },
            summary: {
                title: "Summary",
                build: "BUILD",
                run: "RUN (12 months)",
                deploy: "DEPLOY",
                training: "Training",
                total: "Estimated total (excl. VAT)",
                services: "Included services",
                cta: "Request a detailed quote",
                note: "Non-contractual estimate. Custom quote on request."
            },
            services_list: {
                ha_cluster: "High availability Kubernetes cluster",
                cluster: "Kubernetes cluster",
                rancher: "Rancher (admin interface)",
                monitoring: "Prometheus/Grafana monitoring stack",
                support_h4: "H+4 business days support",
                support_h2: "H+2 business days support",
                support_247: "24/7 support with on-call",
                mco_mcs: "MCO + MCS included",
                multicloud: "Multi-cloud / hybrid architecture",
                gitops: "GitOps with ArgoCD/FluxCD",
                servicemesh: "Service Mesh (Istio/Linkerd)",
                cicd: "Complete CI/CD (GitLab, Harbor, Trivy, SonarQube, Vault)",
                days_annual: "annual support days",
                training_day: "training day",
                training_days: "training days"
            }
        },

        // Technologies
        technologies: {
            title: "Technologies Mastered",
            subtitle: "Recognized expertise in the Cloud Native ecosystem",
            categories: {
                distributions: "Kubernetes Distributions",
                cloud: "Cloud Providers",
                networking: "Networking",
                observability: "Observability",
                security: "Security",
                cicd: "CI/CD & GitOps"
            }
        },

        // SLA
        sla: {
            title: "Our Commitments",
            items: {
                availability: { value: "99.9%", title: "Availability", desc: "Cluster guaranteed available excluding planned maintenance" },
                response: { value: "30min", title: "P1 Response", desc: "Critical incident handling in less than 30 minutes" },
                confidentiality: { value: "NDA", title: "Confidentiality", desc: "Systematic non-disclosure agreement" },
                reversibility: { value: "DOC", title: "Reversibility", desc: "Complete documentation and exit support" }
            }
        },

        // Contact
        contact: {
            title: "Ready to industrialize your Kubernetes infrastructure?",
            subtitle: "Contact us for a no-obligation discussion. We'll analyze your needs and propose a tailored solution.",
            labels: {
                email: "Email",
                phone: "Phone",
                website: "Website"
            },
            steps: {
                title: "Next steps",
                items: [
                    { title: "Discovery call", desc: "Understanding your needs" },
                    { title: "Custom proposal", desc: "Offer tailored to your context" },
                    { title: "Technical validation", desc: "Architecture review and planning" },
                    { title: "Kickoff", desc: "Launch within 2 weeks" }
                ]
            },
            form: {
                name: "Full name *",
                email: "Business email *",
                company: "Company",
                phone: "Phone",
                project: "Describe your project *",
                project_placeholder: "Context, needs, constraints...",
                budget: "Estimated budget",
                budget_options: {
                    select: "Select",
                    lt20k: "Less than €20,000",
                    "20-50k": "€20,000 - €50,000",
                    "50-100k": "€50,000 - €100,000",
                    gt100k: "More than €100,000"
                },
                submit: "Send my request"
            }
        },

        // Footer
        footer: {
            tagline: "Kubernetes & Cloud Native Expert in France",
            services: "Services",
            resources: "Resources",
            contact: "Contact",
            copyright: "All rights reserved."
        },

        // Training
        training: {
            hero: {
                title: "Kubernetes Training",
                subtitle: "Hands-on training delivered by CKA/CKAD certified experts to master Kubernetes from A to Z"
            },
            badges: {
                certified: "CKA/CKAD certified trainers",
                practice: "70% hands-on",
                small_groups: "Small groups (4-10)"
            },
            catalog: {
                title: "Our training catalog",
                subtitle: "Courses adapted to all levels, from beginner to expert"
            },
            labels: {
                program: "Program",
                included: "Included",
                intra: "Private session",
                individual: "Individual",
                with_voucher: "With exam voucher",
                bundle: "CKA + CKAD Bundle",
                up_to_8: "(up to 8 people)"
            },
            courses: {
                fundamentals: {
                    title: "Kubernetes Fundamentals",
                    subtitle: "Master the basics of container orchestration",
                    duration: "3 days",
                    topics: {
                        1: "Kubernetes architecture and components",
                        2: "Pods, Deployments, Services",
                        3: "ConfigMaps, Secrets, Volumes",
                        4: "Ingress and networking",
                        5: "Monitoring with Prometheus/Grafana"
                    }
                },
                ckad: {
                    title: "CKAD Preparation",
                    subtitle: "Certified Kubernetes Application Developer",
                    duration: "4 days",
                    topics: {
                        1: "Application Design and Build (20%)",
                        2: "Application Deployment (20%)",
                        3: "Observability and Maintenance (15%)",
                        4: "Environment and Security (25%)",
                        5: "Services and Networking (20%)"
                    }
                },
                cka: {
                    title: "CKA Preparation",
                    subtitle: "Certified Kubernetes Administrator",
                    duration: "5 days",
                    topics: {
                        1: "Cluster Architecture & Installation (25%)",
                        2: "Workloads and Scheduling (15%)",
                        3: "Services and Networking (20%)",
                        4: "Storage (10%)",
                        5: "Troubleshooting (30%)"
                    }
                }
            },
            included: {
                materials: "PDF course materials",
                materials_200: "200+ pages course materials",
                materials_300: "300+ pages course materials",
                lab_30: "30-day lab access",
                lab_60: "60-day lab access",
                lab_90: "90-day multi-cluster lab access",
                certificate: "Training certificate",
                support_2h: "2h post-training support",
                exercises_150: "150+ exam-style exercises",
                exercises_200: "200+ exam-style exercises",
                mock_exams: "2 mock exams"
            },
            certifications: {
                title: "CNCF Kubernetes Certifications",
                subtitle: "Globally recognized industry certifications",
                duration: { title: "Exam duration", desc: "2-hour hands-on exam on real environment" },
                score: { title: "Passing score", desc: "Minimum 66% to obtain certification" },
                validity: { title: "Validity (years)", desc: "Certification valid for 3 years after passing" },
                cost: { title: "Exam cost", desc: "Includes 1 attempt + 1 free retake" }
            },
            comparison: {
                title: "Training comparison",
                headers: { criteria: "Criteria" },
                rows: {
                    duration: "Duration",
                    level: "Level",
                    focus: "Focus",
                    certification: "Certification",
                    lab: "Lab access",
                    price: "Price"
                },
                levels: {
                    beginner: "Beginner → Intermediate",
                    intermediate: "Intermediate",
                    advanced: "Intermediate → Advanced"
                },
                focus: {
                    general: "General usage",
                    dev: "Application development",
                    admin: "Cluster administration"
                },
                cert: {
                    attestation: "AKOUENDY certificate",
                    cncf: "CNCF certification"
                }
            },
            why_us: {
                title: "Why choose our training?",
                certified: { title: "Certified trainers", desc: "All our trainers are CKA and CKAD certified with real-world experience" },
                practice: { title: "70% hands-on", desc: "Exercises on real environment with the same stack as our managed services" },
                guarantee: { title: "Pass guarantee", desc: "Free access to next session if you don't pass the exam" },
                support: { title: "Personalized support", desc: "Post-training support with included hours" }
            },
            cta: {
                title: "Ready to get trained on Kubernetes?",
                subtitle: "Contact us to discuss your needs and plan your training",
                contact: "Request a quote",
                simulator: "Simulate my project"
            }
        },

        // Notifications
        notifications: {
            form_error: "Please fill in all required fields.",
            email_error: "Please enter a valid email address.",
            form_success: "Your request has been sent. We will contact you shortly."
        }
    }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'fr';

// Get translation by key path
function t(keyPath) {
    const keys = keyPath.split('.');
    let value = translations[currentLang];

    for (const key of keys) {
        if (value && value[key] !== undefined) {
            value = value[key];
        } else {
            console.warn(`Translation not found: ${keyPath}`);
            return keyPath;
        }
    }

    return value;
}

// Set language
function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        updatePageContent();
        updateLangSwitcher();
    }
}

// Toggle language
function toggleLanguage() {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
}

// Update language switcher display
function updateLangSwitcher() {
    const switcher = document.getElementById('lang-switcher');
    if (switcher) {
        switcher.textContent = currentLang === 'fr' ? 'EN' : 'FR';
        switcher.setAttribute('title', currentLang === 'fr' ? 'Switch to English' : 'Passer en français');
    }
}

// Update all page content
function updatePageContent() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);

        if (typeof translation === 'string') {
            el.textContent = translation;
        }
    });

    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    // Update all elements with data-i18n-title attribute
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = t(key);
    });

    // Update HTML lang attribute
    document.documentElement.lang = currentLang;

    // Dispatch event for other scripts to react
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    updateLangSwitcher();
    updatePageContent();
});

// Export for use in other scripts
window.i18n = {
    t,
    setLanguage,
    toggleLanguage,
    getCurrentLang: () => currentLang
};
