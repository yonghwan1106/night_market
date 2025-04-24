// 페이지가 로드되면 차트 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 인구 구성 차트
    if(document.getElementById('populationChart')) {
        const populationCtx = document.getElementById('populationChart').getContext('2d');
        const populationChart = new Chart(populationCtx, {
            type: 'pie',
            data: {
                labels: ['20대', '30대', '40대', '50대 이상', '10대'],
                datasets: [{
                    label: '인구 비율',
                    data: [48, 25, 15, 8, 4],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                        '#9966FF'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: '노량진 지역 연령별 인구 구성'
                    }
                }
            }
        });
    }

    // 상권 구조 차트
    if(document.getElementById('businessChart')) {
        const businessCtx = document.getElementById('businessChart').getContext('2d');
        const businessChart = new Chart(businessCtx, {
            type: 'bar',
            data: {
                labels: ['학원/학습', '식당/카페', '고시원', '문구/서점', '생활편의', '문화/여가'],
                datasets: [{
                    label: '업종별 비율 (%)',
                    data: [35, 28, 15, 12, 5, 5],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                        '#9966FF',
                        '#FF9F40'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 40
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: '노량진 상권 업종별 분포'
                    }
                }
            }
        });
    }

    // 시간대별 활동 패턴 차트
    if(document.getElementById('timePatternChart')) {
        const timePatternCtx = document.getElementById('timePatternChart').getContext('2d');
        const timePatternChart = new Chart(timePatternCtx, {
            type: 'line',
            data: {
                labels: ['6-9시', '9-12시', '12-15시', '15-18시', '18-21시', '21-24시', '0-3시', '3-6시'],
                datasets: [
                    {
                        label: '수험생 활동 지수',
                        data: [45, 85, 65, 80, 75, 60, 25, 10],
                        borderColor: '#36A2EB',
                        backgroundColor: 'rgba(54, 162, 235, 0.1)',
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: '문화시설 이용 가능성',
                        data: [10, 45, 55, 65, 40, 15, 5, 0],
                        borderColor: '#FF6384',
                        backgroundColor: 'rgba(255, 99, 132, 0.1)',
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: '활동 지수 (0-100)'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: '시간대별 활동 패턴과 시설 이용 가능성'
                    }
                }
            }
        });
    }

    // 경제 추이 차트
    if(document.getElementById('economicTrendChart')) {
        const economicTrendCtx = document.getElementById('economicTrendChart').getContext('2d');
        const economicTrendChart = new Chart(economicTrendCtx, {
            type: 'line',
            data: {
                labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
                datasets: [
                    {
                        label: '학원 업체 수',
                        data: [100, 98, 97, 96, 94, 88, 90, 92, 91.3],
                        borderColor: '#FF6384',
                        tension: 0.1
                    },
                    {
                        label: '외식업체 수',
                        data: [100, 99, 98, 97, 95, 80, 83, 85, 86.7],
                        borderColor: '#36A2EB',
                        tension: 0.1
                    },
                    {
                        label: '고시원 수',
                        data: [100, 98, 96, 95, 92, 70, 73, 74, 75],
                        borderColor: '#FFCE56',
                        tension: 0.1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 60,
                        max: 110,
                        title: {
                            display: true,
                            text: '2015년 대비 지수 (2015=100)'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: '노량진 지역 경제 추이 (2015-2023)'
                    }
                }
            }
        });
    }
});
