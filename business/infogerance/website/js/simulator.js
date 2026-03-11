/**
 * DOVEAIA Infogérance - Simulateur de Projet avec Alpine.js
 * Offres BUILD (environnements serveur) + RUN (exploitation & maintenance)
 */

document.addEventListener('alpine:init', () => {
    Alpine.data('simulator', () => ({
        // ========== État du formulaire ==========
        build: 'none',
        buildOptions: {
            cicd: false,
            extraServers: 0,
            formation: false
        },
        run: 'none',
        runOptions: {
            soir: false,
            weekend: false,
            feries: false,
            full247: false
        },
        extraDeploys: 0,

        // ========== Initialisation ==========
        init() {
            this.loadFromURL();

            this.$watch('build', () => this.updateURL());
            this.$watch('buildOptions', () => this.updateURL(), { deep: true });
            this.$watch('run', () => this.updateURL());
            this.$watch('runOptions', () => this.updateURL(), { deep: true });
            this.$watch('extraDeploys', () => this.updateURL());
        },

        loadFromURL() {
            const params = new URLSearchParams(window.location.search);

            if (params.has('build')) {
                const b = params.get('build');
                if (['none', 'essentiel', 'standard', 'premium'].includes(b)) {
                    this.build = b;
                }
            }

            if (params.has('buildOptions')) {
                const opts = params.get('buildOptions').split(',');
                this.buildOptions.cicd = opts.includes('cicd');
                this.buildOptions.formation = opts.includes('formation');
            }
            if (params.has('extraServers')) {
                const val = parseInt(params.get('extraServers'), 10);
                if (!isNaN(val) && val >= 0 && val <= 20) this.buildOptions.extraServers = val;
            }

            if (params.has('run')) {
                const r = params.get('run');
                if (['none', 'basic', 'standard', 'premium'].includes(r)) {
                    this.run = r;
                }
            }

            if (params.has('runOptions')) {
                const opts = params.get('runOptions').split(',');
                this.runOptions.soir = opts.includes('soir');
                this.runOptions.weekend = opts.includes('weekend');
                this.runOptions.feries = opts.includes('feries');
                this.runOptions.full247 = opts.includes('full247');
            }

            if (params.has('extraDeploys')) {
                const val = parseInt(params.get('extraDeploys'), 10);
                if (!isNaN(val) && val >= 0 && val <= 50) this.extraDeploys = val;
            }
        },

        updateURL() {
            const params = new URLSearchParams();

            if (this.build !== 'none') params.set('build', this.build);

            const bOpts = [];
            if (this.buildOptions.cicd) bOpts.push('cicd');
            if (this.buildOptions.formation) bOpts.push('formation');
            if (bOpts.length > 0) params.set('buildOptions', bOpts.join(','));
            if (this.buildOptions.extraServers > 0) params.set('extraServers', this.buildOptions.extraServers);

            if (this.run !== 'none') params.set('run', this.run);

            const rOpts = [];
            if (this.runOptions.soir) rOpts.push('soir');
            if (this.runOptions.weekend) rOpts.push('weekend');
            if (this.runOptions.feries) rOpts.push('feries');
            if (this.runOptions.full247) rOpts.push('full247');
            if (rOpts.length > 0) params.set('runOptions', rOpts.join(','));

            if (this.extraDeploys > 0) params.set('extraDeploys', this.extraDeploys);

            const newURL = params.toString()
                ? window.location.pathname + '?' + params.toString() + '#simulateur'
                : window.location.pathname + '#simulateur';
            window.history.replaceState({}, '', newURL);
        },

        copyButtonText: 'Copier le lien de cette simulation',

        async copyShareableLink() {
            this.updateURL();
            const url = window.location.href;
            try {
                await navigator.clipboard.writeText(url);
                this.copyButtonText = 'Lien copié !';
                setTimeout(() => { this.copyButtonText = 'Copier le lien de cette simulation'; }, 2000);
            } catch (err) {
                const ta = document.createElement('textarea');
                ta.value = url;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
                this.copyButtonText = 'Lien copié !';
                setTimeout(() => { this.copyButtonText = 'Copier le lien de cette simulation'; }, 2000);
            }
        },

        // ========== Tarifs ==========
        prices: {
            build: {
                none: 0,
                essentiel: 1600,
                standard: 2800,
                premium: 6000
            },
            buildOptions: {
                cicd: 2000,
                extraServer: 650,
                formation: 1000
            },
            run: {
                none: 0,
                basic: 6000,
                standard: 12000,
                premium: 30000
            },
            runOptions: {
                soir: 4200,      // 350 x 12
                weekend: 6000,   // 500 x 12
                feries: 3000,    // 250 x 12
                full247: 14400   // 1200 x 12
            },
            extraDeploy: {
                basic: 250,
                standard: 250,
                premium: 200
            }
        },

        labels: {
            build: {
                none: 'Aucun',
                essentiel: 'Essentiel (2 srv)',
                standard: 'Standard (3 srv)',
                premium: 'Premium (5 srv)'
            },
            run: {
                none: 'Aucun',
                basic: 'Basic',
                standard: 'Standard',
                premium: 'Premium'
            }
        },

        // ========== Computed: BUILD ==========
        get buildPrice() {
            return this.prices.build[this.build] || 0;
        },

        get buildOptionsPrice() {
            let total = 0;
            if (this.buildOptions.cicd) total += this.prices.buildOptions.cicd;
            if (this.buildOptions.extraServers > 0) total += this.buildOptions.extraServers * this.prices.buildOptions.extraServer;
            if (this.buildOptions.formation) total += this.prices.buildOptions.formation;
            return total;
        },

        get buildOptionsDetails() {
            const details = [];
            if (this.buildOptions.cicd) details.push({ name: 'CI/CD complète', price: this.prices.buildOptions.cicd });
            if (this.buildOptions.extraServers > 0) details.push({ name: this.buildOptions.extraServers + ' serveur(s) supp.', price: this.buildOptions.extraServers * this.prices.buildOptions.extraServer });
            if (this.buildOptions.formation) details.push({ name: 'Formation (1 jour)', price: this.prices.buildOptions.formation });
            return details;
        },

        get buildDelai() {
            const delais = { none: '', essentiel: '2 jours', standard: '4 jours', premium: '10 jours' };
            return delais[this.build] || '';
        },

        // ========== Computed: Remise BUILD+RUN ==========
        get hasBuildRunDiscount() {
            return this.build !== 'none' && this.run !== 'none';
        },

        get buildRunDiscount() {
            if (!this.hasBuildRunDiscount) return 0;
            return Math.round((this.buildPrice + this.buildOptionsPrice) * 0.10);
        },

        // ========== Computed: RUN ==========
        get runPrice() {
            return this.prices.run[this.run] || 0;
        },

        get runMonthly() {
            const monthly = { none: 0, basic: 500, standard: 1000, premium: 2500 };
            return monthly[this.run] || 0;
        },

        get deploysIncluded() {
            const deploys = { none: 0, basic: 5, standard: 10, premium: 20 };
            return deploys[this.run] || 0;
        },

        get showRunOptions() {
            return this.run === 'basic' || this.run === 'standard';
        },

        get runOptionsPrice() {
            if (!this.showRunOptions) return 0;
            let total = 0;
            if (this.runOptions.soir) total += this.prices.runOptions.soir;
            if (this.runOptions.weekend) total += this.prices.runOptions.weekend;
            if (this.runOptions.feries) total += this.prices.runOptions.feries;
            if (this.runOptions.full247) total += this.prices.runOptions.full247;
            return total;
        },

        get runOptionsDetails() {
            if (!this.showRunOptions) return [];
            const details = [];
            const names = { soir: 'Astreinte soir', weekend: 'Astreinte week-end', feries: 'Astreinte fériés', full247: 'Astreinte 24/7' };
            for (const [key, selected] of Object.entries(this.runOptions)) {
                if (selected) details.push({ name: names[key], price: this.prices.runOptions[key] });
            }
            return details;
        },

        get extraDeploysPrice() {
            if (this.extraDeploys <= 0 || this.run === 'none') return 0;
            const rate = this.prices.extraDeploy[this.run] || 250;
            return this.extraDeploys * rate;
        },

        // ========== Computed: Total ==========
        get totalBuild() {
            const base = this.buildPrice + this.buildOptionsPrice;
            return base - this.buildRunDiscount;
        },

        get totalRunAnnual() {
            return this.runPrice + this.runOptionsPrice + this.extraDeploysPrice;
        },

        get total() {
            return this.totalBuild + this.totalRunAnnual;
        },

        get totalLabel() {
            if (this.build !== 'none' && this.run !== 'none') return 'BUILD + RUN annuel';
            if (this.build !== 'none') return 'BUILD (ponctuel)';
            if (this.run !== 'none') return 'RUN (annuel)';
            return 'Total';
        },

        // ========== Computed: Services inclus ==========
        get services() {
            const list = [];

            if (this.build !== 'none') {
                const srvCount = { essentiel: 2, standard: 3, premium: 5 };
                list.push('Configuration ' + srvCount[this.build] + ' serveurs Linux');
                list.push('Hardening sécurité (pare-feu, SSH, fail2ban)');
                list.push('Stack applicative (JVM, Nginx, Spring Boot)');
                list.push('Base de données (PostgreSQL/MySQL/MongoDB)');
                list.push('SSL/HTTPS + Configuration DNS');
                list.push('Sauvegardes automatisées');
                list.push('Documentation & runbook');

                if (this.build === 'standard' || this.build === 'premium') {
                    list.push('Load balancer (HAProxy/Nginx)');
                }
                if (this.build === 'premium') {
                    list.push('HA base de données (actif/passif)');
                    list.push('Observabilité (Prometheus, Grafana, Loki)');
                }
            }

            if (this.buildOptions.cicd) list.push('CI/CD complète (GitLab CI / GitHub Actions)');
            if (this.buildOptions.formation) list.push('Formation équipe (1 journée)');

            if (this.run !== 'none') {
                list.push('Patchs sécurité OS/JVM');
                list.push('Certificats SSL');
                list.push('Monitoring de disponibilité');
                list.push(this.deploysIncluded + ' déploiements/an inclus');

                if (this.run === 'standard' || this.run === 'premium') {
                    list.push('Mise à jour serveurs Linux + JVM');
                    list.push('Vérification sauvegardes');
                    list.push('Monitoring CPU/RAM/disque');
                }
                if (this.run === 'premium') {
                    list.push('Astreinte 24/7 incluse');
                    list.push('Logs centralisés + dashboards');
                    list.push('MCO complet + tuning');
                }
            }

            if (this.showRunOptions) {
                if (this.runOptions.soir) list.push('Astreinte soir (18h-22h)');
                if (this.runOptions.weekend) list.push('Astreinte week-end');
                if (this.runOptions.feries) list.push('Astreinte jours fériés');
                if (this.runOptions.full247) list.push('Astreinte 24/7 complète');
            }

            return list;
        },

        // ========== Méthodes utilitaires ==========
        formatPrice(price) {
            return new Intl.NumberFormat('fr-FR', {
                style: 'decimal',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(price) + ' \u20AC';
        },

        incrementServers() {
            if (this.buildOptions.extraServers < 20) this.buildOptions.extraServers++;
        },
        decrementServers() {
            if (this.buildOptions.extraServers > 0) this.buildOptions.extraServers--;
        },
        incrementDeploys() {
            if (this.extraDeploys < 50) this.extraDeploys++;
        },
        decrementDeploys() {
            if (this.extraDeploys > 0) this.extraDeploys--;
        }
    }));
});
