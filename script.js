// Sayfa yüklendiğinde çalışacak kodlar
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animasyon eklenecek bölümleri seçiyoruz (Giriş/Hero kısmı hariç)
    const animatedSections = document.querySelectorAll('.highlights, .about, .skills, .projects, .experience, .future-goals, .contact');
    
    // 2. CSS'teki başlangıç ayarlarını (görünmezlik ve aşağıda durma) uyguluyoruz
    animatedSections.forEach(section => {
        section.classList.add('reveal');
    });

    // 3. Ekranı kaydırdıkça bölümleri takip eden sistem (Intersection Observer)
    const observerOptions = {
        threshold: 0.15, // Bölümün %15'i ekranda göründüğünde tetikle
        rootMargin: "0px 0px -50px 0px"
    };

    const sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            // Eğer bölüm ekrana girdiyse 'active' class'ını ekle ve görünür yap
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Sadece bir kere çalışsın, sürekli tekrarlamasın
            }
        });
    }, observerOptions);

    // 4. Takip sistemini tüm bölümler için başlat
    animatedSections.forEach(section => {
        sectionObserver.observe(section);
    });
});