/**
 * DOVEAIA Kubernetes - Simulateur de Projet avec Alpine.js
 * Permet aux clients de composer leur offre et d'estimer le budget
 */

document.addEventListener('alpine:init', () => {
    Alpine.data('simulator', () => ({
        // ========== État du formulaire ==========
        build: 'standard',
        buildOptions: {
            multicloud: false,
            gitops: false,
            servicemesh: false,
            cicd: false
        },
        run: 'standard',
        audit: 'none',
        runOptions: {
            soir: false,
            weekend: false,
            feries: false
        },
        deploySimple: 0,
        deployStandard: 0,
        deployComplex: 0,
        deployAnnual: 'none',
        formation: 0,

        // ========== Initialisation depuis URL ==========
        init() {
            this.loadFromURL();

            // Mettre à jour l'URL quand l'état change
            this.$watch('build', () => this.updateURL());
            this.$watch('buildOptions', () => this.updateURL(), { deep: true });
            this.$watch('run', () => this.updateURL());
            this.$watch('audit', () => this.updateURL());
            this.$watch('runOptions', () => this.updateURL(), { deep: true });
            this.$watch('deploySimple', () => this.updateURL());
            this.$watch('deployStandard', () => this.updateURL());
            this.$watch('deployComplex', () => this.updateURL());
            this.$watch('deployAnnual', () => this.updateURL());
            this.$watch('formation', () => this.updateURL());
        },

        loadFromURL() {
            const params = new URLSearchParams(window.location.search);

            // BUILD
            if (params.has('build')) {
                const build = params.get('build');
                if (['none', 'starter', 'standard', 'enterprise'].includes(build)) {
                    this.build = build;
                }
            }

            // Build Options
            if (params.has('buildOptions')) {
                const options = params.get('buildOptions').split(',');
                this.buildOptions.multicloud = options.includes('multicloud');
                this.buildOptions.gitops = options.includes('gitops');
                this.buildOptions.servicemesh = options.includes('servicemesh');
                this.buildOptions.cicd = options.includes('cicd');
            }

            // RUN
            if (params.has('run')) {
                const run = params.get('run');
                if (['none', 'essentiel', 'standard', 'premium'].includes(run)) {
                    this.run = run;
                }
            }

            // Audit
            if (params.has('audit')) {
                const audit = params.get('audit');
                if (['none', 'small', 'medium', 'large'].includes(audit)) {
                    this.audit = audit;
                }
            }

            // Run Options
            if (params.has('runOptions')) {
                const options = params.get('runOptions').split(',');
                this.runOptions.soir = options.includes('soir');
                this.runOptions.weekend = options.includes('weekend');
                this.runOptions.feries = options.includes('feries');
            }

            // DEPLOY
            if (params.has('deploySimple')) {
                const val = parseInt(params.get('deploySimple'), 10);
                if (!isNaN(val) && val >= 0 && val <= 10) this.deploySimple = val;
            }
            if (params.has('deployStandard')) {
                const val = parseInt(params.get('deployStandard'), 10);
                if (!isNaN(val) && val >= 0 && val <= 10) this.deployStandard = val;
            }
            if (params.has('deployComplex')) {
                const val = parseInt(params.get('deployComplex'), 10);
                if (!isNaN(val) && val >= 0 && val <= 10) this.deployComplex = val;
            }

            // Deploy Annual
            if (params.has('deployAnnual')) {
                const deployAnnual = params.get('deployAnnual');
                if (['none', 'deploy10', 'deploy20', 'deploy40'].includes(deployAnnual)) {
                    this.deployAnnual = deployAnnual;
                }
            }

            // Formation
            if (params.has('formation')) {
                const val = parseInt(params.get('formation'), 10);
                if (!isNaN(val) && val >= 0 && val <= 10) this.formation = val;
            }
        },

        updateURL() {
            const params = new URLSearchParams();

            // BUILD (seulement si différent de la valeur par défaut)
            if (this.build !== 'standard') {
                params.set('build', this.build);
            }

            // Build Options
            const buildOpts = Object.entries(this.buildOptions)
                .filter(([_, v]) => v)
                .map(([k, _]) => k);
            if (buildOpts.length > 0) {
                params.set('buildOptions', buildOpts.join(','));
            }

            // RUN
            if (this.run !== 'standard') {
                params.set('run', this.run);
            }

            // Audit
            if (this.audit !== 'none') {
                params.set('audit', this.audit);
            }

            // Run Options
            const runOpts = Object.entries(this.runOptions)
                .filter(([_, v]) => v)
                .map(([k, _]) => k);
            if (runOpts.length > 0) {
                params.set('runOptions', runOpts.join(','));
            }

            // DEPLOY
            if (this.deploySimple > 0) params.set('deploySimple', this.deploySimple);
            if (this.deployStandard > 0) params.set('deployStandard', this.deployStandard);
            if (this.deployComplex > 0) params.set('deployComplex', this.deployComplex);

            // Deploy Annual
            if (this.deployAnnual !== 'none') {
                params.set('deployAnnual', this.deployAnnual);
            }

            // Formation
            if (this.formation > 0) {
                params.set('formation', this.formation);
            }

            // Mettre à jour l'URL sans recharger la page
            const newURL = params.toString()
                ? `${window.location.pathname}?${params.toString()}#simulateur`
                : `${window.location.pathname}#simulateur`;
            window.history.replaceState({}, '', newURL);
        },

        // Texte du bouton de copie
        copyButtonText: 'Copier le lien de cette simulation',

        // Générer un lien partageable
        getShareableURL() {
            this.updateURL();
            return window.location.href;
        },

        // Copier le lien dans le presse-papiers
        async copyShareableLink() {
            const url = this.getShareableURL();
            try {
                await navigator.clipboard.writeText(url);
                this.copyButtonText = 'Lien copié !';
                setTimeout(() => {
                    this.copyButtonText = 'Copier le lien de cette simulation';
                }, 2000);
            } catch (err) {
                // Fallback pour les navigateurs plus anciens
                const textArea = document.createElement('textarea');
                textArea.value = url;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                this.copyButtonText = 'Lien copié !';
                setTimeout(() => {
                    this.copyButtonText = 'Copier le lien de cette simulation';
                }, 2000);
            }
        },

        // ========== Tarifs ==========
        prices: {
            build: {
                none: 0,
                starter: 6000,
                standard: 10000,
                enterprise: 16000
            },
            buildOptions: {
                multicloud: 4000,
                gitops: 3000,
                servicemesh: 3000,
                cicd: 6000
            },
            run: {
                none: 0,
                essentiel: 9600,
                standard: 14400,
                premium: 21600
            },
            audit: {
                none: 0,
                small: 2400,
                medium: 3600,
                large: 0
            },
            runOptions: {
                soir: 4800,
                weekend: 7200,
                feries: 3600
            },
            deploy: {
                simple: 2800,
                standard: 5000,
                complex: 10500
            },
            deployAnnual: {
                none: 0,
                deploy10: 12000,
                deploy20: 22000,
                deploy40: 40000
            },
            formation: 1200
        },

        // ========== Labels ==========
        labels: {
            build: {
                none: 'Aucun',
                starter: 'Starter',
                standard: 'Standard',
                enterprise: 'Enterprise'
            },
            run: {
                none: 'Aucun',
                essentiel: 'Essentiel',
                standard: 'Standard',
                premium: 'Premium'
            },
            audit: {
                none: 'Aucun',
                small: 'Audit 1-5 nœuds',
                medium: 'Audit 6-15 nœuds',
                large: 'Audit 16+ nœuds'
            },
            deployAnnual: {
                none: 'Aucun',
                deploy10: 'DEPLOY 10 (10 jours/an)',
                deploy20: 'DEPLOY 20 (20 jours/an)',
                deploy40: 'DEPLOY 40 (40 jours/an)'
            }
        },

        // ========== Computed: Afficher l'audit ==========
        get showAudit() {
            return this.build === 'none' && this.run !== 'none';
        },

        // ========== Computed: Prix BUILD ==========
        get buildPrice() {
            return this.prices.build[this.build] || 0;
        },

        get buildOptionsPrice() {
            let total = 0;
            for (const [key, selected] of Object.entries(this.buildOptions)) {
                if (selected) total += this.prices.buildOptions[key];
            }
            return total;
        },

        get buildOptionsDetails() {
            const details = [];
            const names = {
                multicloud: 'Multi-cloud',
                gitops: 'GitOps',
                servicemesh: 'Service Mesh',
                cicd: 'Toolchain CI/CD'
            };
            for (const [key, selected] of Object.entries(this.buildOptions)) {
                if (selected) {
                    details.push({
                        name: names[key],
                        price: this.prices.buildOptions[key]
                    });
                }
            }
            return details;
        },

        // ========== Computed: Prix RUN ==========
        get runPrice() {
            return this.prices.run[this.run] || 0;
        },

        get auditPrice() {
            if (!this.showAudit) return 0;
            return this.prices.audit[this.audit] || 0;
        },

        get runOptionsPrice() {
            let total = 0;
            for (const [key, selected] of Object.entries(this.runOptions)) {
                if (selected) total += this.prices.runOptions[key];
            }
            return total;
        },

        get runOptionsDetails() {
            const details = [];
            const names = {
                soir: 'Astreinte soir',
                weekend: 'Astreinte week-end',
                feries: 'Astreinte fériés'
            };
            for (const [key, selected] of Object.entries(this.runOptions)) {
                if (selected) {
                    details.push({
                        name: names[key],
                        price: this.prices.runOptions[key]
                    });
                }
            }
            return details;
        },

        // ========== Computed: Prix DEPLOY ==========
        get deployAppsPrice() {
            return (this.deploySimple * this.prices.deploy.simple) +
                   (this.deployStandard * this.prices.deploy.standard) +
                   (this.deployComplex * this.prices.deploy.complex);
        },

        get deployAppsLabel() {
            const parts = [];
            if (this.deploySimple > 0) parts.push(`${this.deploySimple}x Simple`);
            if (this.deployStandard > 0) parts.push(`${this.deployStandard}x Standard`);
            if (this.deployComplex > 0) parts.push(`${this.deployComplex}x Complexe`);
            return parts.length > 0 ? parts.join(', ') : 'Aucune application';
        },

        get deployAnnualPrice() {
            return this.prices.deployAnnual[this.deployAnnual] || 0;
        },

        // ========== Computed: Prix Formation ==========
        get formationPrice() {
            return this.formation * this.prices.formation;
        },

        get formationLabel() {
            if (this.formation === 0) return 'Aucune';
            return `${this.formation} journée${this.formation > 1 ? 's' : ''}`;
        },

        // ========== Computed: Total ==========
        get total() {
            return this.buildPrice +
                   this.buildOptionsPrice +
                   this.runPrice +
                   this.auditPrice +
                   this.runOptionsPrice +
                   this.deployAppsPrice +
                   this.deployAnnualPrice +
                   this.formationPrice;
        },

        // ========== Computed: Services inclus ==========
        get services() {
            const list = [];

            // Services BUILD
            if (this.build !== 'none') {
                list.push('Cluster Kubernetes ' + (this.build === 'starter' ? '' : 'haute disponibilité'));
                list.push("Rancher (interface d'administration)");
                list.push('Stack monitoring Prometheus/Grafana');
            }

            // Options BUILD
            if (this.buildOptions.multicloud) list.push('Architecture multi-cloud / hybride');
            if (this.buildOptions.gitops) list.push('GitOps avec ArgoCD/FluxCD');
            if (this.buildOptions.servicemesh) list.push('Service Mesh (Istio/Linkerd)');
            if (this.buildOptions.cicd) list.push('CI/CD complet (GitLab, Harbor, Trivy, SonarQube, Vault)');

            // Services RUN
            if (this.run !== 'none') {
                switch (this.run) {
                    case 'essentiel':
                        list.push('Support H+4 jours ouvrés');
                        break;
                    case 'standard':
                        list.push('Support H+2 jours ouvrés');
                        break;
                    case 'premium':
                        list.push('Support 24/7 avec astreinte');
                        break;
                }
                list.push('MCO + MCS inclus');
            }

            // Audit
            if (this.showAudit) {
                list.push(`Audit de reprise (${this.audit === 'small' ? '1-5' : this.audit === 'medium' ? '6-15' : '16+'} nœuds)`);
            }

            // Options astreinte
            if (this.runOptions.soir) list.push('Astreinte soir (18h-22h)');
            if (this.runOptions.weekend) list.push('Astreinte week-end');
            if (this.runOptions.feries) list.push('Astreinte jours fériés');

            // Forfait DEPLOY annuel
            if (this.deployAnnual === 'deploy10') list.push('10 jours de régie annuels');
            if (this.deployAnnual === 'deploy20') list.push('20 jours de régie annuels');
            if (this.deployAnnual === 'deploy40') list.push('40 jours de régie annuels');

            // Formation
            if (this.formation > 0) {
                list.push(`${this.formation} journée${this.formation > 1 ? 's' : ''} de formation`);
            }

            return list;
        },

        // ========== Méthodes utilitaires ==========
        formatPrice(price) {
            return new Intl.NumberFormat('fr-FR', {
                style: 'decimal',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(price) + ' €';
        },

        incrementFormation() {
            if (this.formation < 10) this.formation++;
        },

        decrementFormation() {
            if (this.formation > 0) this.formation--;
        }
    }));
});
