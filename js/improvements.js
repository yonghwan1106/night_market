// 노량진 청춘 야시장 - 공간 구성 상호작용 스크립트

document.addEventListener('DOMContentLoaded', function() {
    // 공간 구성 맵 상호작용
    const zoneAreas = document.querySelectorAll('.zone');
    const zoneDetails = document.querySelectorAll('.zone-detail');
    
    // 초기 상태 설정 (첫 번째 구역 활성화)
    if (zoneAreas.length > 0 && zoneDetails.length > 0) {
        const firstZone = zoneAreas[0];
        const firstZoneType = firstZone.getAttribute('data-zone');
        const firstZoneDetail = document.getElementById(firstZoneType + '-detail');
        
        if (firstZone && firstZoneDetail) {
            firstZone.classList.add('active');
            firstZoneDetail.classList.add('active');
        }
    }
    
    // 각 구역에 이벤트 리스너 추가
    zoneAreas.forEach(zone => {
        zone.addEventListener('click', function() {
            const zoneType = this.getAttribute('data-zone');
            const targetDetail = document.getElementById(zoneType + '-detail');
            
            // 모든 구역 비활성화
            zoneAreas.forEach(z => z.classList.remove('active'));
            zoneDetails.forEach(d => d.classList.remove('active'));
            
            // 선택한 구역 활성화
            this.classList.add('active');
            if (targetDetail) {
                targetDetail.classList.add('active');
            }
        });
        
        // 호버 효과
        zone.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        zone.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
    
    // 백 투 탑 버튼
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // 애니메이션 요소 활성화
    const animatedElements = document.querySelectorAll('.animate-fade-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});