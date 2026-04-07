/**
 * Animation des barres de compétences au défilement
 * Utilise l'API IntersectionObserver pour plus de performance
 */
document.addEventListener('DOMContentLoaded', () => {
    
    const progressBars = document.querySelectorAll('.animate-bar');

    // Configuration de l'observateur
    const observerOptions = {
        threshold: 0.5 // Déclenche l'animation quand 50% de l'élément est visible
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetLevel = bar.getAttribute('data-level');
                
                // Applique la largeur pour déclencher la transition CSS
                bar.style.width = targetLevel;
                
                // Une fois animé, on arrête d'observer cet élément
                observer.unobserve(bar);
            }
        });
    }, observerOptions);

    // Initialisation : on cache les barres et on lance l'observation
    progressBars.forEach(bar => {
        bar.style.width = '0';
        animationObserver.observe(bar);
    });

});

/**
 * Optionnel : Effet fluide sur les liens de navigation (si ajoutés plus tard)
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});