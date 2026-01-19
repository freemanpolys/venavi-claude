/**
 * AKOUENDY Kubernetes - Simulateur de Projet
 * Permet aux clients de composer leur offre et d'estimer le budget
 */

document.addEventListener('DOMContentLoaded', function() {
    initSimulator();
});

function initSimulator() {
    // Éléments du formulaire
    const buildRadios = document.querySelectorAll('input[name="build"]');
    const buildOptions = document.querySelectorAll('input[name="build-options"]');
    const runRadios = document.querySelectorAll('input[name="run"]');
    const runOptions = document.querySelectorAll('input[name="run-options"]');
    const deploySimple = document.querySelector('input[name="deploy-simple"]');
    const deployStandard = document.querySelector('input[name="deploy-standard"]');
    const deployComplex = document.querySelector('input[name="deploy-complex"]');
    const deployAnnual = document.querySelectorAll('input[name="deploy-annual"]');
    const formationInput = document.querySelector('input[name="formation"]');

    // Boutons +/-
    const btnMinus = document.querySelector('.btn-minus');
    const btnPlus = document.querySelector('.btn-plus');

    // Ajouter les écouteurs d'événements
    buildRadios.forEach(radio => radio.addEventListener('change', updateSimulator));
    buildOptions.forEach(checkbox => checkbox.addEventListener('change', updateSimulator));
    runRadios.forEach(radio => radio.addEventListener('change', updateSimulator));
    runOptions.forEach(checkbox => checkbox.addEventListener('change', updateSimulator));
    deployAnnual.forEach(radio => radio.addEventListener('change', updateSimulator));

    if (deploySimple) deploySimple.addEventListener('change', updateSimulator);
    if (deployStandard) deployStandard.addEventListener('change', updateSimulator);
    if (deployComplex) deployComplex.addEventListener('change', updateSimulator);
    if (formationInput) formationInput.addEventListener('change', updateSimulator);

    // Boutons +/-
    if (btnMinus) {
        btnMinus.addEventListener('click', function() {
            const input = formationInput;
            if (input && parseInt(input.value) > 0) {
                input.value = parseInt(input.value) - 1;
                updateSimulator();
            }
        });
    }

    if (btnPlus) {
        btnPlus.addEventListener('click', function() {
            const input = formationInput;
            if (input && parseInt(input.value) < 10) {
                input.value = parseInt(input.value) + 1;
                updateSimulator();
            }
        });
    }

    // Initialiser le simulateur
    updateSimulator();
}

function updateSimulator() {
    let total = 0;
    const services = [];

    // ========== BUILD ==========
    const buildSelected = document.querySelector('input[name="build"]:checked');
    let buildPrice = 0;
    let buildName = '';

    if (buildSelected) {
        buildPrice = parseInt(buildSelected.dataset.price) || 0;
        buildName = buildSelected.value.charAt(0).toUpperCase() + buildSelected.value.slice(1);
        total += buildPrice;

        // Services de base selon le build
        services.push('Cluster Kubernetes ' + (buildSelected.value === 'starter' ? '' : 'haute disponibilité'));
        services.push('Rancher (interface d\'administration)');
        services.push('Stack monitoring Prometheus/Grafana');
    }

    // Options BUILD
    let buildOptionsTotal = 0;
    const buildOptionsSelected = document.querySelectorAll('input[name="build-options"]:checked');
    const buildOptionsDetails = [];

    buildOptionsSelected.forEach(option => {
        const price = parseInt(option.dataset.price) || 0;
        buildOptionsTotal += price;
        total += price;

        switch(option.value) {
            case 'multicloud':
                buildOptionsDetails.push({ name: 'Multi-cloud', price: price });
                services.push('Architecture multi-cloud / hybride');
                break;
            case 'gitops':
                buildOptionsDetails.push({ name: 'GitOps', price: price });
                services.push('GitOps avec ArgoCD/FluxCD');
                break;
            case 'servicemesh':
                buildOptionsDetails.push({ name: 'Service Mesh', price: price });
                services.push('Service Mesh (Istio/Linkerd)');
                break;
            case 'cicd':
                buildOptionsDetails.push({ name: 'Toolchain CI/CD', price: price });
                services.push('CI/CD complet (GitLab, Harbor, Trivy, SonarQube, Vault)');
                break;
        }
    });

    // Mise à jour affichage BUILD
    const summaryBuild = document.getElementById('summary-build');
    if (summaryBuild) {
        summaryBuild.innerHTML = `<span>${buildName}</span><span>${formatPrice(buildPrice)}</span>`;
    }

    const summaryBuildOptions = document.getElementById('summary-build-options');
    if (summaryBuildOptions) {
        if (buildOptionsDetails.length > 0) {
            summaryBuildOptions.innerHTML = buildOptionsDetails.map(opt =>
                `<span style="font-size: 0.85em; color: #666;">+ ${opt.name}</span><span style="font-size: 0.85em; color: #666;">${formatPrice(opt.price)}</span>`
            ).join('');
        } else {
            summaryBuildOptions.innerHTML = '';
        }
    }

    // ========== RUN ==========
    const runSelected = document.querySelector('input[name="run"]:checked');
    let runPrice = 0;
    let runName = '';

    if (runSelected) {
        runPrice = parseInt(runSelected.dataset.price) || 0;
        runName = runSelected.value.charAt(0).toUpperCase() + runSelected.value.slice(1);
        total += runPrice;

        // Services de support
        switch(runSelected.value) {
            case 'essentiel':
                services.push('Support H+4 jours ouvrés');
                break;
            case 'standard':
                services.push('Support H+2 jours ouvrés');
                break;
            case 'premium':
                services.push('Support 24/7 avec astreinte');
                break;
        }
        services.push('MCO + MCS inclus');
    }

    // Options RUN (astreintes)
    let runOptionsTotal = 0;
    const runOptionsSelected = document.querySelectorAll('input[name="run-options"]:checked');
    const runOptionsDetails = [];

    runOptionsSelected.forEach(option => {
        const price = parseInt(option.dataset.price) || 0;
        runOptionsTotal += price;
        total += price;

        switch(option.value) {
            case 'soir':
                runOptionsDetails.push({ name: 'Astreinte soir', price: price });
                break;
            case 'weekend':
                runOptionsDetails.push({ name: 'Astreinte week-end', price: price });
                break;
            case 'feries':
                runOptionsDetails.push({ name: 'Astreinte fériés', price: price });
                break;
        }
    });

    // Mise à jour affichage RUN
    const summaryRun = document.getElementById('summary-run');
    if (summaryRun) {
        summaryRun.innerHTML = `<span>${runName} (12 mois)</span><span>${formatPrice(runPrice)}</span>`;
    }

    const summaryRunOptions = document.getElementById('summary-run-options');
    if (summaryRunOptions) {
        if (runOptionsDetails.length > 0) {
            summaryRunOptions.innerHTML = runOptionsDetails.map(opt =>
                `<span style="font-size: 0.85em; color: #666;">+ ${opt.name}</span><span style="font-size: 0.85em; color: #666;">${formatPrice(opt.price)}</span>`
            ).join('');
        } else {
            summaryRunOptions.innerHTML = '';
        }
    }

    // ========== DEPLOY ==========
    const deploySimple = document.querySelector('input[name="deploy-simple"]');
    const deployStandard = document.querySelector('input[name="deploy-standard"]');
    const deployComplex = document.querySelector('input[name="deploy-complex"]');

    let deployTotal = 0;
    const deployDetails = [];

    if (deploySimple && parseInt(deploySimple.value) > 0) {
        const count = parseInt(deploySimple.value);
        const price = count * 1800;
        deployTotal += price;
        deployDetails.push(`${count}x Simple`);
    }

    if (deployStandard && parseInt(deployStandard.value) > 0) {
        const count = parseInt(deployStandard.value);
        const price = count * 3500;
        deployTotal += price;
        deployDetails.push(`${count}x Standard`);
    }

    if (deployComplex && parseInt(deployComplex.value) > 0) {
        const count = parseInt(deployComplex.value);
        const price = count * 7000;
        deployTotal += price;
        deployDetails.push(`${count}x Complexe`);
    }

    total += deployTotal;

    // Forfait annuel DEPLOY
    const deployAnnualSelected = document.querySelector('input[name="deploy-annual"]:checked');
    let deployAnnualPrice = 0;
    let deployAnnualName = '';

    if (deployAnnualSelected && deployAnnualSelected.value !== 'none') {
        deployAnnualPrice = parseInt(deployAnnualSelected.dataset.price) || 0;
        total += deployAnnualPrice;

        switch(deployAnnualSelected.value) {
            case 'deploy10':
                deployAnnualName = 'DEPLOY 10 (10 jours/an)';
                services.push('10 jours de régie annuels');
                break;
            case 'deploy20':
                deployAnnualName = 'DEPLOY 20 (20 jours/an)';
                services.push('20 jours de régie annuels');
                break;
        }
    }

    // Mise à jour affichage DEPLOY
    const summaryDeploy = document.getElementById('summary-deploy');
    if (summaryDeploy) {
        if (deployDetails.length > 0) {
            summaryDeploy.innerHTML = `<span>${deployDetails.join(', ')}</span><span>${formatPrice(deployTotal)}</span>`;
        } else {
            summaryDeploy.innerHTML = `<span>Aucune application</span><span>0 €</span>`;
        }
    }

    const summaryDeployAnnual = document.getElementById('summary-deploy-annual');
    if (summaryDeployAnnual) {
        if (deployAnnualPrice > 0) {
            summaryDeployAnnual.innerHTML = `<span style="font-size: 0.85em; color: #666;">+ ${deployAnnualName}</span><span style="font-size: 0.85em; color: #666;">${formatPrice(deployAnnualPrice)}</span>`;
        } else {
            summaryDeployAnnual.innerHTML = '';
        }
    }

    // ========== FORMATION ==========
    const formationInput = document.querySelector('input[name="formation"]');
    let formationPrice = 0;
    let formationDays = 0;

    if (formationInput) {
        formationDays = parseInt(formationInput.value) || 0;
        formationPrice = formationDays * 900;
        total += formationPrice;

        if (formationDays > 0) {
            services.push(`${formationDays} journée${formationDays > 1 ? 's' : ''} de formation`);
        }
    }

    // Mise à jour affichage Formation
    const summaryFormation = document.getElementById('summary-formation');
    if (summaryFormation) {
        if (formationDays > 0) {
            summaryFormation.innerHTML = `<span>${formationDays} journée${formationDays > 1 ? 's' : ''}</span><span>${formatPrice(formationPrice)}</span>`;
        } else {
            summaryFormation.innerHTML = `<span>Aucune</span><span>0 €</span>`;
        }
    }

    // ========== TOTAL ==========
    const totalPrice = document.getElementById('total-price');
    if (totalPrice) {
        totalPrice.textContent = formatPrice(total);
    }

    // ========== SERVICES INCLUS ==========
    const servicesList = document.getElementById('services-list');
    if (servicesList) {
        servicesList.innerHTML = services.map(service => `<li>${service}</li>`).join('');
    }
}

function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price) + ' €';
}
