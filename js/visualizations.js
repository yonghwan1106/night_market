/**
 * 노량진 청춘 야시장 - 시각화 스크립트
 * 차트, 다이어그램, 데이터 시각화 관련 코드
 */

document.addEventListener('DOMContentLoaded', function() {
    // 기대효과 차트 초기화
    function initBenefitsChart() {
        // 차트 컨테이너 생성
        const benefitsSection = document.querySelector('.benefits-section');
        if (!benefitsSection) return;
        
        const chartContainer = document.createElement('div');
        chartContainer.className = 'benefits-chart-container';
        chartContainer.style.marginTop = '50px';
        chartContainer.style.height = '400px';
        chartContainer.style.position = 'relative';
        
        // 차트 캔버스 생성
        const canvas = document.createElement('canvas');
        canvas.id = 'benefitsChart';
        chartContainer.appendChild(canvas);
        
        // 차트 제목 추가
        const chartTitle = document.createElement('h3');
        chartTitle.textContent = '청춘 야시장 기대효과 분석';
        chartTitle.style.textAlign = 'center';
        chartTitle.style.marginBottom = '20px';
        
        // 섹션에 차트 추가
        benefitsSection.querySelector('.container').appendChild(chartTitle);
        benefitsSection.querySelector('.container').appendChild(chartContainer);
        
        // 차트 데이터 설정
        const chartData = {
            labels: ['지역 이미지 개선', '청년 정신 건강 증진', '지역 경제 활성화', '청년 창업 지원', '커뮤니티 형성', '문화관광 자원화'],
            datasets: [{
                label: '영향력 지수',
                data: [85, 78, 92, 80, 75, 88],
                backgroundColor: [
                    'rgba(255, 82, 82, 0.7)',
                    'rgba(124, 77, 255, 0.7)',
                    'rgba(0, 191, 165, 0.7)',
                    'rgba(255, 31, 113, 0.7)',
                    'rgba(74, 0, 224, 0.7)',
                    'rgba(0, 255, 240, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 82, 82, 1)',
                    'rgba(124, 77, 255, 1)',
                    'rgba(0, 191, 165, 1)',
                    'rgba(255, 31, 113, 1)',
                    'rgba(74, 0, 224, 1)',
                    'rgba(0, 255, 240, 1)'
                ],
                borderWidth: 2,
                hoverBorderWidth: 4
            }]
        };
        
        // 차트 설정
        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    pointLabels: {
                        color: 'rgba(255, 255, 255, 0.8)',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.6)',
                        backdropColor: 'transparent',
                        max: 100,
                        min: 0,
                        stepSize: 20
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(32, 32, 38, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    bodyFont: {
                        size: 14
                    },
                    padding: 15,
                    cornerRadius: 8,
                    displayColors: false
                }
            }
        };
        
        // 레이더 차트 생성
        const ctx = document.getElementById('benefitsChart').getContext('2d');
        const radarChart = new Chart(ctx, {
            type: 'radar',
            data: chartData,
            options: chartOptions
        });
        
        // 애니메이션 효과: 차트 인터렉션 옵저버
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 데이터셋 애니메이션
                    radarChart.data.datasets[0].data = [0, 0, 0, 0, 0, 0];
                    radarChart.update();
                    
                    setTimeout(() => {
                        radarChart.data.datasets[0].data = [85, 78, 92, 80, 75, 88];
                        radarChart.update({
                            duration: 1500,
                            easing: 'easeOutQuart'
                        });
                    }, 300);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(chartContainer);
    }
    
    // 타임라인 차트 시각화
    function initTimelineChart() {
        const timelineSection = document.querySelector('.timeline-section');
        if (!timelineSection) return;
        
        const timelineProgress = document.createElement('div');
        timelineProgress.className = 'timeline-progress-container';
        timelineProgress.style.maxWidth = '800px';
        timelineProgress.style.margin = '50px auto 0';
        timelineProgress.style.padding = '20px';
        timelineProgress.style.background = 'rgba(32, 32, 38, 0.5)';
        timelineProgress.style.borderRadius = '10px';
        timelineProgress.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        
        // 차트 제목 추가
        const progressTitle = document.createElement('h3');
        progressTitle.textContent = '단계별 진행 상황';
        progressTitle.style.textAlign = 'center';
        progressTitle.style.marginBottom = '20px';
        
        // 차트 컨테이너
        const progressChart = document.createElement('div');
        progressChart.className = 'timeline-progress-chart';
        
        // 단계별 진행 상황
        const stages = [
            { name: '시범 운영', progress: 100, color: '#FF5252' },
            { name: '안정화', progress: 65, color: '#7C4DFF' },
            { name: '확장', progress: 25, color: '#00BFA5' },
            { name: '브랜드화', progress: 10, color: '#FF1F71' }
        ];
        
        // 진행 바 생성
        stages.forEach(stage => {
            const stageContainer = document.createElement('div');
            stageContainer.className = 'stage-container';
            stageContainer.style.marginBottom = '20px';
            
            const stageInfo = document.createElement('div');
            stageInfo.className = 'stage-info';
            stageInfo.style.display = 'flex';
            stageInfo.style.justifyContent = 'space-between';
            stageInfo.style.marginBottom = '5px';
            
            const stageName = document.createElement('span');
            stageName.textContent = stage.name;
            stageName.style.fontSize = '1rem';
            stageName.style.color = 'rgba(255, 255, 255, 0.8)';
            
            const stagePercent = document.createElement('span');
            stagePercent.textContent = `${stage.progress}%`;
            stagePercent.style.fontSize = '1rem';
            stagePercent.style.fontWeight = 'bold';
            stagePercent.style.color = stage.color;
            
            stageInfo.appendChild(stageName);
            stageInfo.appendChild(stagePercent);
            
            const progressBarContainer = document.createElement('div');
            progressBarContainer.className = 'progress-bar-container';
            progressBarContainer.style.height = '10px';
            progressBarContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            progressBarContainer.style.borderRadius = '5px';
            progressBarContainer.style.overflow = 'hidden';
            
            const progressBar = document.createElement('div');
            progressBar.className = 'progress-bar';
            progressBar.style.width = '0%';
            progressBar.style.height = '100%';
            progressBar.style.backgroundColor = stage.color;
            progressBar.style.borderRadius = '5px';
            progressBar.style.transition = 'width 1.5s ease';
            progressBar.setAttribute('data-progress', stage.progress);
            
            progressBarContainer.appendChild(progressBar);
            stageContainer.appendChild(stageInfo);
            stageContainer.appendChild(progressBarContainer);
            progressChart.appendChild(stageContainer);
        });
        
        timelineProgress.appendChild(progressTitle);
        timelineProgress.appendChild(progressChart);
        timelineSection.querySelector('.container').appendChild(timelineProgress);
        
        // 인터렉션 옵저버로 스크롤 시 애니메이션 적용
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBars = entry.target.querySelectorAll('.progress-bar');
                    
                    progressBars.forEach((bar, index) => {
                        setTimeout(() => {
                            const progress = bar.getAttribute('data-progress');
                            bar.style.width = `${progress}%`;
                        }, index * 200); // 순차적으로 애니메이션
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(timelineProgress);
    }
    
    // 방문자 예상 그래프
    function initVisitorsChart() {
        const ctaSection = document.querySelector('.cta-section');
        if (!ctaSection) return;
        
        // 차트 컨테이너 생성
        const visitorsChartContainer = document.createElement('div');
        visitorsChartContainer.className = 'visitors-chart-container';
        visitorsChartContainer.style.maxWidth = '600px';
        visitorsChartContainer.style.margin = '40px auto 0';
        visitorsChartContainer.style.padding = '20px';
        visitorsChartContainer.style.background = 'rgba(19, 20, 25, 0.7)';
        visitorsChartContainer.style.borderRadius = '10px';
        visitorsChartContainer.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        
        // 차트 제목
        const visitorsChartTitle = document.createElement('h3');
        visitorsChartTitle.textContent = '월별 방문자 예상 추이';
        visitorsChartTitle.style.textAlign = 'center';
        visitorsChartTitle.style.marginBottom = '20px';
        visitorsChartTitle.style.color = 'rgba(255, 255, 255, 0.9)';
        
        // 차트 캔버스
        const visitorsCanvas = document.createElement('canvas');
        visitorsCanvas.id = 'visitorsChart';
        
        visitorsChartContainer.appendChild(visitorsChartTitle);
        visitorsChartContainer.appendChild(visitorsCanvas);
        
        ctaSection.querySelector('.container').appendChild(visitorsChartContainer);
        
        // 차트 데이터
        const months = ['3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월', '1월', '2월'];
        const visitorsData = [1200, 1800, 2500, 3200, 4100, 5500, 4800, 5200, 6000, 6800, 7500, 8200];
        
        // 그라디언트 생성
        const ctx = document.getElementById('visitorsChart').getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(255, 82, 82, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 82, 82, 0.1)');
        
        // 차트 생성
        const visitorsChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: '예상 방문자 수',
                    data: visitorsData,
                    backgroundColor: gradient,
                    borderColor: 'rgba(255, 82, 82, 1)',
                    borderWidth: 3,
                    pointBackgroundColor: 'rgba(255, 82, 82, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            font: {
                                size: 12
                            },
                            callback: function(value) {
                                return value.toLocaleString() + '명';
                            }
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(32, 32, 38, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        bodyFont: {
                            size: 14
                        },
                        padding: 15,
                        cornerRadius: 8,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return `방문자 수: ${context.raw.toLocaleString()}명`;
                            }
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
        
        // 인터렉션 옵저버로 스크롤 시 애니메이션 적용
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 데이터 초기화 후 애니메이션
                    visitorsChart.data.datasets[0].data = Array(12).fill(0);
                    visitorsChart.update();
                    
                    setTimeout(() => {
                        visitorsChart.data.datasets[0].data = visitorsData;
                        visitorsChart.update();
                    }, 300);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(visitorsChartContainer);
    }
    
    // 경제 효과 도넛 차트
    function initEconomicImpactChart() {
        const benefitsSection = document.querySelector('.benefits-section');
        if (!benefitsSection) return;
        
        // 차트 컨테이너 생성
        const economicChartContainer = document.createElement('div');
        economicChartContainer.className = 'economic-chart-container';
        economicChartContainer.style.maxWidth = '400px';
        economicChartContainer.style.height = '300px';
        economicChartContainer.style.margin = '40px auto 0';
        
        // 차트 제목
        const economicChartTitle = document.createElement('h3');
        economicChartTitle.textContent = '지역 경제 활성화 효과';
        economicChartTitle.style.textAlign = 'center';
        economicChartTitle.style.marginBottom = '20px';
        
        // 차트 캔버스
        const economicCanvas = document.createElement('canvas');
        economicCanvas.id = 'economicChart';
        
        economicChartContainer.appendChild(economicChartTitle);
        economicChartContainer.appendChild(economicCanvas);
        
        // 차트 컨테이너를 기존 차트 뒤에 삽입
        const firstChartContainer = benefitsSection.querySelector('.benefits-chart-container');
        if (firstChartContainer) {
            firstChartContainer.after(economicChartContainer);
        } else {
            benefitsSection.querySelector('.container').appendChild(economicChartContainer);
        }
        
        // 차트 데이터
        const economicData = {
            labels: ['상권 매출 증가', '일자리 창출', '창업 활성화', '문화 관광 수익', '지역 이미지 가치'],
            datasets: [{
                data: [35, 20, 15, 18, 12],
                backgroundColor: [
                    '#FF5252',
                    '#7C4DFF',
                    '#00BFA5',
                    '#FF1F71',
                    '#4A00E0'
                ],
                borderColor: 'transparent',
                borderWidth: 0,
                hoverOffset: 15
            }]
        };
        
        // 차트 생성
        const ctx = document.getElementById('economicChart').getContext('2d');
        const economicChart = new Chart(ctx, {
            type: 'doughnut',
            data: economicData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '65%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: 'rgba(255, 255, 255, 0.8)',
                            font: {
                                size: 12
                            },
                            padding: 15
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(32, 32, 38, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        bodyFont: {
                            size: 14
                        },
                        padding: 15,
                        cornerRadius: 8,
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    }
                },
                animation: {
                    animateRotate: true,
                    animateScale: true,
                    duration: 2000,
                    easing: 'easeOutCirc'
                }
            }
        });
        
        // 인터렉션 옵저버로 스크롤 시 애니메이션 적용
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 애니메이션 시작
                    economicChart.options.animation.animateRotate = true;
                    economicChart.options.animation.animateScale = true;
                    economicChart.reset();
                    economicChart.update();
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(economicChartContainer);
    }
    
    // 마켓 맵 인터랙티브 기능 강화
    function enhanceMarketMap() {
        const marketMap = document.getElementById('market-map');
        if (!marketMap) return;
        
        // 툴팁 컨테이너 생성
        const tooltipContainer = document.createElement('div');
        tooltipContainer.className = 'market-map-tooltip';
        tooltipContainer.style.position = 'absolute';
        tooltipContainer.style.display = 'none';
        tooltipContainer.style.padding = '10px 15px';
        tooltipContainer.style.backgroundColor = 'rgba(32, 32, 38, 0.95)';
        tooltipContainer.style.borderRadius = '5px';
        tooltipContainer.style.color = '#fff';
        tooltipContainer.style.fontSize = '14px';
        tooltipContainer.style.fontWeight = 'bold';
        tooltipContainer.style.zIndex = '100';
        tooltipContainer.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        tooltipContainer.style.pointerEvents = 'none';
        
        marketMap.appendChild(tooltipContainer);
        
        // 영역 정보 정의
        const areaInfos = {
            'popup-zone': {
                title: '청년 창업자 팝업 스토어 존',
                description: '20-30개 팝업 스토어가 운영되는 창업 실험 공간',
                stats: '전체 공간의 40% 차지, 월 100여명의 창업자 경험 제공',
                color: '#FF5252'
            },
            'job-zone': {
                title: '취업 정보 공유 존',
                description: '채용 정보, 모의면접, 커리어 컨설팅 서비스 제공',
                stats: '매회 50명 이상의 취업 상담 서비스 제공',
                color: '#448AFF'
            },
            'culture-zone': {
                title: '문화 공연 존',
                description: '라이브 음악, 퍼포먼스, 참여형 문화 프로그램 운영',
                stats: '무대 크기 6m×4m, 100명 수용 가능 객석',
                color: '#7C4DFF'
            },
            'food-zone': {
                title: '푸드 존 & 네트워킹 공간',
                description: '다양한 음식과 자유로운 소통 공간 제공',
                stats: '푸드트럭 5대, 테이블 20개, 300명 동시 수용 가능',
                color: '#00BFA5'
            }
        };
        
        // 맵 요소에 이벤트 리스너 추가
        marketMap.addEventListener('mouseover', function(e) {
            const target = e.target;
            
            // SVG 요소의 ID 확인
            if (target.id && areaInfos[target.id]) {
                const info = areaInfos[target.id];
                
                // 툴팁 내용 설정
                tooltipContainer.innerHTML = `
                    <div style="font-size: 16px; margin-bottom: 5px; color: ${info.color};">${info.title}</div>
                    <div style="margin-bottom: 5px; font-weight: normal;">${info.description}</div>
                    <div style="font-size: 12px; opacity: 0.8; font-weight: normal;">${info.stats}</div>
                `;
                
                // 툴팁 위치 설정
                const mapRect = marketMap.getBoundingClientRect();
                const x = e.clientX - mapRect.left;
                const y = e.clientY - mapRect.top;
                
                tooltipContainer.style.left = `${x + 15}px`;
                tooltipContainer.style.top = `${y + 15}px`;
                tooltipContainer.style.display = 'block';
                
                // 해당 영역 강조
                target.style.opacity = '0.8';
                target.style.stroke = info.color;
                target.style.strokeWidth = '3';
            }
        });
        
        marketMap.addEventListener('mousemove', function(e) {
            // 툴팁이 표시중일 때만 위치 업데이트
            if (tooltipContainer.style.display === 'block') {
                const mapRect = marketMap.getBoundingClientRect();
                const x = e.clientX - mapRect.left;
                const y = e.clientY - mapRect.top;
                
                tooltipContainer.style.left = `${x + 15}px`;
                tooltipContainer.style.top = `${y + 15}px`;
            }
        });
        
        marketMap.addEventListener('mouseout', function(e) {
            tooltipContainer.style.display = 'none';
            
            // 모든 영역 원래 스타일로 복원
            const areas = marketMap.querySelectorAll('.map-area');
            areas.forEach(area => {
                area.style.opacity = '1';
                area.style.stroke = '';
                area.style.strokeWidth = '2';
            });
        });
    }
    
    // Chart.js 로드 확인 및 초기화
    if (typeof Chart !== 'undefined') {
        // 차트 폰트 스타일 전역 설정
        Chart.defaults.font.family = "'Noto Sans KR', sans-serif";
        Chart.defaults.color = 'rgba(255, 255, 255, 0.7)';
        
        // 모든 시각화 초기화
        initBenefitsChart();
        initTimelineChart();
        initVisitorsChart();
        initEconomicImpactChart();
        enhanceMarketMap();
    } else {
        // Chart.js 라이브러리가 없을 경우 동적 로드
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        script.onload = function() {
            // 차트 폰트 스타일 전역 설정
            Chart.defaults.font.family = "'Noto Sans KR', sans-serif";
            Chart.defaults.color = 'rgba(255, 255, 255, 0.7)';
            
            // 모든 시각화 초기화
            initBenefitsChart();
            initTimelineChart();
            initVisitorsChart();
            initEconomicImpactChart();
            enhanceMarketMap();
        };
        document.head.appendChild(script);
    }
});
