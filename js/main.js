/**
 * 노량진 청춘 야시장 - 메인 자바스크립트
 * 사용자 인터페이스 기능 및 상호작용 관리
 */

document.addEventListener('DOMContentLoaded', function() {
    // 전역 변수
    const body = document.body;
    const mainNav = document.querySelector('.main-nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const backToTop = document.getElementById('backToTop');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const statNumbers = document.querySelectorAll('.stat-number');
    const proposalModal = document.getElementById('proposal-modal');
    
    // 내비게이션 스크롤 이벤트
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
        
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
        
        // 스크롤 애니메이션 체크
        checkScrollAnimation();
    });
    
    // 모바일 메뉴 토글
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('show');
    });
    
    // 내비게이션 링크 클릭 시 모바일 메뉴 닫기
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('show');
            menuToggle.classList.remove('active');
        });
    });
    
    // 백 투 탑 버튼 클릭 이벤트
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 탭 전환 기능
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // 활성 탭 버튼 업데이트
            tabBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 활성 탭 콘텐츠 업데이트
            tabPanes.forEach(pane => pane.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // 숫자 카운팅 애니메이션
    function animateNumbers() {
        statNumbers.forEach(stat => {
            const targetNumber = parseInt(stat.getAttribute('data-count'));
            const duration = 2000; // 2초 동안 애니메이션
            const steps = 60; // 총 스텝 수
            const stepTime = duration / steps;
            const increment = targetNumber / steps;
            let current = 0;
            let step = 0;
            
            const timer = setInterval(() => {
                step++;
                current += increment;
                
                if (step >= steps) {
                    clearInterval(timer);
                    stat.textContent = targetNumber;
                } else {
                    stat.textContent = Math.round(current);
                }
            }, stepTime);
        });
    }
    
    // 스크롤 애니메이션 체크
    function checkScrollAnimation() {
        const elements = document.querySelectorAll('.animate-fade-up, .animate-fade-right, .animate-fade-left, .animate-scale');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('active');
            }
        });
    }
    
    // 인트로 섹션이 뷰포트에 들어오면 숫자 애니메이션 시작
    const introObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                introObserver.disconnect(); // 한 번만 실행
            }
        });
    }, { threshold: 0.5 });
    
    const introSection = document.querySelector('.intro-section');
    if (introSection) {
        introObserver.observe(introSection);
    }
    
    // 공간 구성도 SVG 애니메이션
    function initMarketMap() {
        const marketMap = document.getElementById('market-map');
        
        if (!marketMap) return;
        
        // SVG 맵 로드 (실제 프로젝트에서는 SVG 파일을 불러오거나 직접 SVG 코드 작성)
        // 이 데모에서는 임의의 공간 구성을 보여주는 간단한 SVG를 생성합니다
        
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", "0 0 800 600");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        
        // 배경
        const background = document.createElementNS(svgNS, "rect");
        background.setAttribute("x", "0");
        background.setAttribute("y", "0");
        background.setAttribute("width", "800");
        background.setAttribute("height", "600");
        background.setAttribute("fill", "#131419");
        svg.appendChild(background);
        
        // 영역 정의
        const areas = [
            { name: "청년 창업자 팝업 스토어 존", x: 50, y: 50, width: 350, height: 250, color: "#FF5252", id: "popup-zone" },
            { name: "취업 정보 공유 존", x: 450, y: 50, width: 300, height: 200, color: "#448AFF", id: "job-zone" },
            { name: "문화 공연 존", x: 450, y: 300, width: 300, height: 250, color: "#7C4DFF", id: "culture-zone" },
            { name: "푸드 존 & 네트워킹 공간", x: 50, y: 350, width: 350, height: 200, color: "#00BFA5", id: "food-zone" }
        ];
        
        // 영역 그리기
        areas.forEach(area => {
            const areaRect = document.createElementNS(svgNS, "rect");
            areaRect.setAttribute("x", area.x);
            areaRect.setAttribute("y", area.y);
            areaRect.setAttribute("width", area.width);
            areaRect.setAttribute("height", area.height);
            areaRect.setAttribute("fill", area.color + "33"); // 투명도 추가
            areaRect.setAttribute("stroke", area.color);
            areaRect.setAttribute("stroke-width", "2");
            areaRect.setAttribute("rx", "10");
            areaRect.setAttribute("ry", "10");
            areaRect.setAttribute("id", area.id);
            areaRect.setAttribute("class", "map-area");
            
            // 영역에 마우스 오버 시 효과
            areaRect.addEventListener("mouseenter", function() {
                this.setAttribute("fill", area.color + "66"); // 더 진한 투명도
                
                // 영역 이름 표시
                const tooltip = document.createElementNS(svgNS, "text");
                tooltip.setAttribute("x", area.x + area.width / 2);
                tooltip.setAttribute("y", area.y + area.height / 2);
                tooltip.setAttribute("fill", "#ffffff");
                tooltip.setAttribute("text-anchor", "middle");
                tooltip.setAttribute("alignment-baseline", "middle");
                tooltip.setAttribute("font-size", "16");
                tooltip.setAttribute("font-weight", "bold");
                tooltip.setAttribute("class", "area-tooltip");
                tooltip.setAttribute("id", "tooltip-" + area.id);
                tooltip.textContent = area.name;
                
                svg.appendChild(tooltip);
            });
            
            areaRect.addEventListener("mouseleave", function() {
                this.setAttribute("fill", area.color + "33"); // 원래 투명도로 복원
                
                // 툴팁 제거
                const tooltip = document.getElementById("tooltip-" + area.id);
                if (tooltip) {
                    svg.removeChild(tooltip);
                }
            });
            
            svg.appendChild(areaRect);
            
            // 영역 레이블
            const label = document.createElementNS(svgNS, "text");
            label.setAttribute("x", area.x + 20);
            label.setAttribute("y", area.y + 30);
            label.setAttribute("fill", "#ffffff");
            label.setAttribute("font-size", "14");
            label.textContent = area.name;
            svg.appendChild(label);
            
            // 아이콘 추가 (간단한 아이콘을 만들기 위한 예시)
            const icon = document.createElementNS(svgNS, "circle");
            icon.setAttribute("cx", area.x + 10);
            icon.setAttribute("cy", area.y + 26);
            icon.setAttribute("r", "6");
            icon.setAttribute("fill", area.color);
            svg.appendChild(icon);
        });
        
        // 경로 및 연결 추가
        const paths = [
            { start: [225, 300], end: [225, 350], color: "#ffffff" }, // 위 → 아래 연결
            { start: [400, 150], end: [450, 150], color: "#ffffff" }, // 좌 → 우 연결
            { start: [400, 450], end: [450, 450], color: "#ffffff" }, // 좌 → 우 연결
            { start: [600, 250], end: [600, 300], color: "#ffffff" }  // 위 → 아래 연결
        ];
        
        paths.forEach(pathData => {
            const path = document.createElementNS(svgNS, "path");
            const d = `M${pathData.start[0]} ${pathData.start[1]} L${pathData.end[0]} ${pathData.end[1]}`;
            path.setAttribute("d", d);
            path.setAttribute("stroke", pathData.color);
            path.setAttribute("stroke-width", "2");
            path.setAttribute("stroke-dasharray", "5,5");
            path.setAttribute("fill", "none");
            
            svg.appendChild(path);
        });
        
        // 메인 입구 표시
        const entrance = document.createElementNS(svgNS, "polygon");
        entrance.setAttribute("points", "400,580 380,550 420,550");
        entrance.setAttribute("fill", "#ffffff");
        svg.appendChild(entrance);
        
        const entranceText = document.createElementNS(svgNS, "text");
        entranceText.setAttribute("x", "400");
        entranceText.setAttribute("y", "540");
        entranceText.setAttribute("text-anchor", "middle");
        entranceText.setAttribute("fill", "#ffffff");
        entranceText.setAttribute("font-size", "14");
        entranceText.textContent = "메인 입구";
        svg.appendChild(entranceText);
        
        marketMap.appendChild(svg);
    }
    
    // 공간 구성도 초기화
    initMarketMap();
    
    // 모달 기능
    const modalTriggers = document.querySelectorAll('a[href="#proposal"]');
    const closeModal = document.querySelector('.close-modal');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            proposalModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // 스크롤 방지
        });
    });
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            proposalModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // 스크롤 복원
        });
    }
    
    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', function(e) {
        if (e.target === proposalModal) {
            proposalModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // 스크롤 애니메이션 초기화
    checkScrollAnimation();
    
    // 네온 글리치 효과를 위한 랜덤 글리치 생성
    function randomGlitch() {
        const glitchText = document.querySelector('.glitch-text');
        if (!glitchText) return;
        
        // 랜덤 글리치 효과를 위한 CSS 업데이트
        const glitchUpdate = () => {
            const beforeClip = `rect(${Math.floor(Math.random() * 100)}px, 9999px, ${Math.floor(Math.random() * 100)}px, 0)`;
            const afterClip = `rect(${Math.floor(Math.random() * 100)}px, 9999px, ${Math.floor(Math.random() * 100)}px, 0)`;
            
            glitchText.style.setProperty('--before-clip', beforeClip);
            glitchText.style.setProperty('--after-clip', afterClip);
        };
        
        // 1-3초마다 랜덤 글리치 생성
        setInterval(() => {
            glitchUpdate();
            
            // 짧은 글리치 효과를 위해 클래스 추가 후 제거
            glitchText.classList.add('active-glitch');
            
            setTimeout(() => {
                glitchText.classList.remove('active-glitch');
            }, 200);
        }, Math.random() * 2000 + 1000);
    }
    
    // 백그라운드 파티클 효과
    function createParticles() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;
        
        const createParticle = (x, y) => {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // 랜덤 파티클 속성
            const size = Math.random() * 5 + 1; // 1-6px
            const duration = Math.random() * 1 + 1; // 1-2s
            const translationX = (Math.random() - 0.5) * 200; // -100 to 100px
            const translationY = (Math.random() - 0.5) * 200; // -100 to 100px
            const opacity = Math.random() * 0.5 + 0.5; // 0.5-1
            
            // 랜덤 색상 (네온 컬러 팔레트)
            const colors = ['#FF5252', '#7C4DFF', '#00BFA5', '#FF1F71', '#4A00E0', '#00FFF0'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            // 파티클 스타일 설정
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = color;
            particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
            particle.style.opacity = opacity;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.setProperty('--tx', `${translationX}px`);
            particle.style.setProperty('--ty', `${translationY}px`);
            particle.style.animationDuration = `${duration}s`;
            
            heroSection.appendChild(particle);
            
            // 애니메이션 종료 후 요소 제거
            setTimeout(() => {
                heroSection.removeChild(particle);
            }, duration * 1000);
        };
        
        // 마우스 이동 시 파티클 생성
        heroSection.addEventListener('mousemove', (e) => {
            // 마우스 위치에 상대적인 좌표
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // 일정 확률로 파티클 생성 (너무 많이 생성되지 않도록)
            if (Math.random() < 0.1) {
                createParticle(x, y);
            }
        });
        
        // 초기 파티클 몇 개 생성
        for (let i = 0; i < 30; i++) {
            const x = Math.random() * heroSection.offsetWidth;
            const y = Math.random() * heroSection.offsetHeight;
            createParticle(x, y);
        }
    }
    
    // 스무스 스크롤링
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#proposal') return; // 모달 트리거는 제외
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            window.scrollTo({
                top: targetElement.offsetTop - 80, // 헤더 높이 고려
                behavior: 'smooth'
            });
        });
    });
    
    // 네온 효과 애니메이션 초기화
    randomGlitch();
    
    // 백그라운드 파티클 효과 초기화
    createParticles();
    
    // 특별 비주얼 효과 (페이지 로딩 완료 후)
    window.addEventListener('load', function() {
        // 페이드인 애니메이션 트리거
        document.querySelectorAll('.fade-in').forEach(element => {
            element.classList.add('visible');
        });
        
        // 히어로 컨텐츠 특수 효과
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.classList.add('zoom-in');
        }
    });
    
    // 타임라인 애니메이션
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length) {
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-up', 'active');
                    
                    // 각 항목마다 지연 시간 설정
                    const index = Array.from(timelineItems).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.2}s`;
                }
            });
        }, { threshold: 0.2 });
        
        timelineItems.forEach(item => {
            timelineObserver.observe(item);
        });
    }
    
    // 타이핑 효과
    function typingEffect() {
        const elements = document.querySelectorAll('.typing-effect');
        
        elements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            element.style.display = 'inline-block';
            
            let charIndex = 0;
            const typeChar = () => {
                if (charIndex < text.length) {
                    element.textContent += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeChar, 100);
                }
            };
            
            typeChar();
        });
    }
    
    // 페이지가 완전히 로드된 후 타이핑 효과 초기화
    if (document.querySelector('.typing-effect')) {
        typingEffect();
    }
});
