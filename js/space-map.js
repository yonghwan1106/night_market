/**
 * 노량진 청춘 야시장 - 공간 맵 인터랙션 스크립트
 * 공간 구성 맵과 상세 정보 간의 인터랙션을 관리합니다.
 */

document.addEventListener('DOMContentLoaded', function() {
    // 공간 존 요소와 상세 정보 요소 참조
    const zones = document.querySelectorAll('.zone');
    const zoneDetails = document.querySelectorAll('.zone-detail');
    
    // 초기 상태 설정 (첫 번째 존이 활성화 상태)
    if (zones.length > 0 && zoneDetails.length > 0) {
        zones[0].classList.add('active');
        zoneDetails[0].classList.add('active');
        
        // 각 존 요소에 이벤트 리스너 추가
        zones.forEach(zone => {
            zone.addEventListener('click', function() {
                const zoneType = this.getAttribute('data-zone');
                
                // 모든 존과 상세 정보에서 활성 클래스 제거
                zones.forEach(z => z.classList.remove('active'));
                zoneDetails.forEach(d => d.classList.remove('active'));
                
                // 클릭한 존과 관련 상세 정보 활성화
                this.classList.add('active');
                document.getElementById(zoneType + '-detail').classList.add('active');
            });
            
            // 호버 효과
            zone.addEventListener('mouseenter', function() {
                this.classList.add('hover');
            });
            
            zone.addEventListener('mouseleave', function() {
                this.classList.remove('hover');
            });
        });
    }
    
    // 존 상세 정보에 대한 스크롤 애니메이션
    const zoneFeatures = document.querySelectorAll('.zone-features .feature');
    
    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                featureObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    zoneFeatures.forEach(feature => {
        featureObserver.observe(feature);
    });
    
    // 공간 맵 확대/축소 기능 (선택 사항)
    const spaceMap = document.querySelector('.space-map');
    
    if (spaceMap) {
        let scale = 1;
        const scaleFactor = 0.1;
        const maxScale = 1.5;
        const minScale = 1;
        
        spaceMap.addEventListener('click', function(e) {
            if (e.target.classList.contains('map-image') || e.target.classList.contains('map-overlay')) {
                // 더블 클릭 확대/축소 기능
                if (scale === 1) {
                    scale = maxScale;
                } else {
                    scale = 1;
                }
                
                this.style.transform = `scale(${scale})`;
            }
        });
    }
});
