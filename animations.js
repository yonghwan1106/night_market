/**
 * 노량진 청춘 야시장 - 애니메이션 스크립트
 * 다양한 시각적 효과와 애니메이션을 관리합니다.
 */

document.addEventListener('DOMContentLoaded', function() {
    // 글리치 효과 강화
    function enhanceGlitchEffect() {
        const glitchText = document.querySelector('.glitch-text');
        if (!glitchText) return;
        
        // 주기적인 강한 글리치 효과
        setInterval(() => {
            // 강한 글리치 효과 적용
            glitchText.classList.add('intense-glitch');
            
            // 짧은 시간 후 제거
            setTimeout(() => {
                glitchText.classList.remove('intense-glitch');
            }, 200);
        }, 5000); // 5초마다 실행
    }
    
    // 마우스 움직임에 반응하는 3D 호버 효과
    function init3DHoverEffect() {
        const cards = document.querySelectorAll('.issue-card, .benefit-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const cardRect = this.getBoundingClientRect();
                const cardCenterX = cardRect.left + cardRect.width / 2;
                const cardCenterY = cardRect.top + cardRect.height / 2;
                
                const mouseX = e.clientX - cardCenterX;
                const mouseY = e.clientY - cardCenterY;
                
                // 회전 각도 계산 (최대 10도)
                const rotateY = 10 * mouseX / (cardRect.width / 2);
                const rotateX = -10 * mouseY / (cardRect.height / 2);
                
                // 그림자 위치 계산
                const shadowX = 20 * mouseX / (cardRect.width / 2);
                const shadowY = 20 * mouseY / (cardRect.height / 2);
                
                // 변형 적용
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                this.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.3)`;
            });
            
            card.addEventListener('mouseleave', function() {
                // 원래 상태로 복원
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            });
        });
    }
    
    // 네온 펄스 효과
    function initNeonPulseEffect() {
        const elements = document.querySelectorAll('.logo-text, .section-title .highlight, .cta-title .highlight');
        
        elements.forEach(element => {
            setInterval(() => {
                element.classList.add('neon-pulse');
                
                setTimeout(() => {
                    element.classList.remove('neon-pulse');
                }, 2000); // 펄스 효과 지속 시간
            }, 5000); // 5초마다 펄스 효과 적용
        });
    }
    
    // 패럴랙스 스크롤 효과
    function initParallaxEffect() {
        const parallaxElements = document.querySelectorAll('.hero, .cta-section');
        
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            
            parallaxElements.forEach(element => {
                // 스크롤 위치에 비례하여 배경 위치 이동
                const offset = scrollPosition * 0.4;
                element.style.backgroundPosition = `center ${-offset}px`;
            });
        });
    }
    
    // 스크롤 진행 바
    function initScrollProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.position = 'fixed';
        progressBar.style.top = '0';
        progressBar.style.left = '0';
        progressBar.style.height = '3px';
        progressBar.style.width = '0%';
        progressBar.style.background = 'linear-gradient(90deg, #FF5252, #7C4DFF)';
        progressBar.style.zIndex = '1001';
        progressBar.style.transition = 'width 0.1s ease';
        
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;
            
            progressBar.style.width = `${scrollProgress}%`;
        });
    }
    
    // 인터랙티브 타임라인 호버 효과
    function enhanceTimelineInteraction() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                // 다른 항목 흐리게 처리
                timelineItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.style.opacity = '0.5';
                        otherItem.style.transform = 'scale(0.98)';
                    }
                });
                
                // 현재 항목 강조
                this.style.transform = 'scale(1.03)';
                this.style.zIndex = '1';
                this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
            });
            
            item.addEventListener('mouseleave', function() {
                // 모든 항목 원래대로
                timelineItems.forEach(otherItem => {
                    otherItem.style.opacity = '1';
                    otherItem.style.transform = 'scale(1)';
                    otherItem.style.zIndex = 'auto';
                    otherItem.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                });
            });
        });
    }
    
    // 숫자 애니메이션 개선
    function enhanceNumberAnimation() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const animateValue = (element, start, end, duration) => {
            const range = end - start;
            const increment = end > start ? 1 : -1;
            const stepTime = Math.abs(Math.floor(duration / range));
            
            let current = start;
            const timer = setInterval(() => {
                current += increment;
                element.textContent = current;
                
                if (current === end) {
                    clearInterval(timer);
                    
                    // 숫자 완료 후 효과
                    element.classList.add('highlight-number');
                    setTimeout(() => {
                        element.classList.remove('highlight-number');
                    }, 300);
                }
            }, stepTime);
        };
        
        // 관찰자 설정
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const finalValue = parseInt(element.getAttribute('data-count'));
                    animateValue(element, 0, finalValue, 2000);
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.5 });
        
        // 관찰 시작
        statNumbers.forEach(stat => {
            observer.observe(stat);
        });
    }
    
    // 마우스 커서 트레일 효과
    function initCursorTrailEffect() {
        const trailContainer = document.createElement('div');
        trailContainer.className = 'cursor-trail-container';
        trailContainer.style.position = 'fixed';
        trailContainer.style.top = '0';
        trailContainer.style.left = '0';
        trailContainer.style.width = '100%';
        trailContainer.style.height = '100%';
        trailContainer.style.pointerEvents = 'none';
        trailContainer.style.zIndex = '9999';
        document.body.appendChild(trailContainer);
        
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // 특정 요소 위에 있을 때만 트레일 생성 (불필요한 트레일 방지)
            const targetElement = document.elementFromPoint(mouseX, mouseY);
            if (targetElement && (
                targetElement.closest('.hero') || 
                targetElement.closest('.issue-card') || 
                targetElement.closest('.benefit-card') ||
                targetElement.closest('.tab-btn') ||
                targetElement.closest('.solution-image')
            )) {
                createTrail();
            }
        });
        
        function createTrail() {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            
            // 랜덤 색상 (네온 컬러 팔레트)
            const colors = ['#FF5252', '#7C4DFF', '#00BFA5', '#FF1F71', '#4A00E0', '#00FFF0'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            trail.style.position = 'absolute';
            trail.style.width = '10px';
            trail.style.height = '10px';
            trail.style.borderRadius = '50%';
            trail.style.backgroundColor = color;
            trail.style.boxShadow = `0 0 15px ${color}`;
            trail.style.left = mouseX + 'px';
            trail.style.top = mouseY + 'px';
            trail.style.pointerEvents = 'none';
            trail.style.opacity = '1';
            trail.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
            
            trailContainer.appendChild(trail);
            
            // 랜덤한 방향으로 퍼지는 효과
            requestAnimationFrame(() => {
                trail.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(0)`;
                trail.style.opacity = '0';
            });
            
            // 애니메이션 종료 후 요소 제거
            setTimeout(() => {
                trailContainer.removeChild(trail);
            }, 800);
        }
    }
    
    // 타이핑 효과 개선
    function enhanceTypingEffect() {
        const typingElements = document.querySelectorAll('.subtitle, .section-subtitle');
        
        typingElements.forEach((element, index) => {
            // 원본 텍스트 저장
            const originalText = element.textContent;
            element.dataset.originalText = originalText;
            
            // 인터섹션 옵저버로 화면에 나타날 때만 타이핑 효과 적용
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // 텍스트 초기화
                        element.textContent = '';
                        element.style.opacity = '1';
                        
                        // 글자 하나씩 타이핑
                        let charIndex = 0;
                        const typeInterval = setInterval(() => {
                            if (charIndex < originalText.length) {
                                element.textContent += originalText.charAt(charIndex);
                                charIndex++;
                            } else {
                                clearInterval(typeInterval);
                            }
                        }, 30); // 타이핑 속도
                        
                        observer.unobserve(element);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(element);
        });
    }
    
    // 탭 전환 시 부드러운 전환 효과
    function enhanceTabTransitions() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabPanes = document.querySelectorAll('.tab-pane');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                const activePane = document.querySelector('.tab-pane.active');
                const targetPane = document.getElementById(tabId);
                
                if (activePane === targetPane) return;
                
                // 현재 활성 탭 페이드 아웃
                activePane.style.opacity = '0';
                activePane.style.transform = 'translateY(20px)';
                
                // 전환 시간 후 새 탭 표시
                setTimeout(() => {
                    tabPanes.forEach(pane => pane.classList.remove('active'));
                    targetPane.classList.add('active');
                    
                    // 새 탭 페이드인
                    setTimeout(() => {
                        targetPane.style.opacity = '1';
                        targetPane.style.transform = 'translateY(0)';
                    }, 50);
                }, 300);
            });
        });
        
        // 초기 스타일 설정
        tabPanes.forEach(pane => {
            pane.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            if (pane.classList.contains('active')) {
                pane.style.opacity = '1';
                pane.style.transform = 'translateY(0)';
            } else {
                pane.style.opacity = '0';
                pane.style.transform = 'translateY(20px)';
            }
        });
    }
    
    // 스크롤 기반 배경색 변경 효과
    function initScrollColorEffect() {
        const sections = document.querySelectorAll('.section');
        const colors = [
            'linear-gradient(135deg, rgba(19, 20, 25, 1) 0%, rgba(32, 32, 38, 1) 100%)',
            'linear-gradient(135deg, rgba(32, 32, 38, 1) 0%, rgba(19, 20, 25, 1) 100%)'
        ];
        
        // 스크롤 위치에 따라 색상 변경
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            
            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                // 현재 섹션이 화면에 보이는지 확인
                if (scrollPosition >= sectionTop - window.innerHeight / 2 && 
                    scrollPosition < sectionTop + sectionHeight - window.innerHeight / 2) {
                    
                    // 배경색 변경 (홀수/짝수 섹션 구분)
                    section.style.background = colors[index % 2];
                    
                    // 추가 효과: 현재 섹션 강조
                    section.style.boxShadow = '0 0 50px rgba(0, 0, 0, 0.3)';
                    section.style.zIndex = '1';
                } else {
                    section.style.boxShadow = 'none';
                    section.style.zIndex = '0';
                }
            });
        });
    }
    
    // 이미지 효과 초기화 (배경 이미지가 없는 경우를 위한 임시 이미지 효과)
    function initImageEffects() {
        const visualPlaceholders = document.querySelectorAll('.solution-img-placeholder');
        
        visualPlaceholders.forEach(placeholder => {
            // 그라데이션 배경 추가
            placeholder.style.background = `linear-gradient(135deg, rgba(32, 32, 38, 0.9) 0%, rgba(19, 20, 25, 0.9) 100%)`;
            
            // 랜덤 패턴 생성
            for (let i = 0; i < 10; i++) {
                const pattern = document.createElement('div');
                pattern.className = 'visual-pattern';
                
                // 랜덤 위치 및 크기
                const size = Math.random() * 100 + 50;
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                
                // 랜덤 색상 (네온 컬러 팔레트)
                const colors = ['#FF5252', '#7C4DFF', '#00BFA5', '#FF1F71', '#4A00E0', '#00FFF0'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                pattern.style.position = 'absolute';
                pattern.style.width = `${size}px`;
                pattern.style.height = `${size}px`;
                pattern.style.borderRadius = '50%';
                pattern.style.background = color;
                pattern.style.filter = 'blur(40px)';
                pattern.style.opacity = '0.2';
                pattern.style.left = `${x}%`;
                pattern.style.top = `${y}%`;
                
                placeholder.appendChild(pattern);
                
                // 플로팅 애니메이션
                pattern.style.animation = `float ${Math.random() * 5 + 5}s ease-in-out infinite`;
                pattern.style.animationDelay = `${Math.random() * 5}s`;
            }
            
            // 각 섹션별 아이콘 추가
            const placeholderId = placeholder.id;
            let icon;
            
            switch(placeholderId) {
                case 'operations-visual':
                    icon = createSVGIcon('M19 4h-4V2h-2v2H9V2H7v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM7 12h5v5H7v-5z');
                    break;
                case 'spaces-visual':
                    icon = createSVGIcon('M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7z');
                    break;
                case 'programs-visual':
                    icon = createSVGIcon('M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H3V5h18v14zM8 15a1 1 0 01-1-1v-4a1 1 0 012 0v4a1 1 0 01-1 1zm4 0a1 1 0 01-1-1V8a1 1 0 012 0v6a1 1 0 01-1 1zm4 0a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1z');
                    break;
                case 'community-visual':
                    icon = createSVGIcon('M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z');
                    break;
                case 'tech-visual':
                    icon = createSVGIcon('M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z');
                    break;
            }
            
            if (icon) {
                icon.style.position = 'absolute';
                icon.style.top = '50%';
                icon.style.left = '50%';
                icon.style.transform = 'translate(-50%, -50%)';
                icon.style.width = '80px';
                icon.style.height = '80px';
                icon.style.fill = 'white';
                icon.style.opacity = '0.8';
                icon.style.zIndex = '1';
                placeholder.appendChild(icon);
            }
        });
    }
    
    // SVG 아이콘 생성 헬퍼 함수
    function createSVGIcon(pathData) {
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", "0 0 24 24");
        
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", pathData);
        
        svg.appendChild(path);
        return svg;
    }
    
    // 모든 애니메이션 초기화
    function initAllAnimations() {
        enhanceGlitchEffect();
        init3DHoverEffect();
        initNeonPulseEffect();
        initParallaxEffect();
        initScrollProgressBar();
        enhanceTimelineInteraction();
        enhanceNumberAnimation();
        initCursorTrailEffect();
        enhanceTypingEffect();
        enhanceTabTransitions();
        initImageEffects();
    }
    
    // 페이지 로드 후 초기화
    initAllAnimations();
});
