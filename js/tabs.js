/**
 * 노량진 청춘 야시장 - 탭 기능 스크립트
 * 프로그램 탭 및 콘텐츠 전환을 관리합니다.
 */

document.addEventListener('DOMContentLoaded', function() {
    // 탭 네비게이션 기능
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // 모든 탭 버튼에서 active 클래스 제거
                tabBtns.forEach(b => {
                    b.classList.remove('active');
                });
                
                // 현재 클릭한 버튼에 active 클래스 추가
                this.classList.add('active');
                
                // 탭 컨텐츠 전환
                const programId = this.getAttribute('data-program');
                
                // 모든 탭 패널 숨기기
                tabPanes.forEach(pane => {
                    pane.classList.remove('active');
                });
                
                // 해당하는 탭 패널 표시
                document.getElementById(programId + '-tab').classList.add('active');
            });
        });
    }
    
    // 애니메이션 활성화
    const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-fade-right, .animate-fade-left, .animate-scale');
    
    // 인터섹션 옵저버 생성
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // 각 요소 관찰 시작
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
