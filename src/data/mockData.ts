/**
 * 컬러풀한 관리자 대시보드 샘플 데이터
 * 개발 및 테스트용 모의 데이터를 제공합니다.
 */

import { KPIData, ChartConfig, TableRow, MenuItem } from '@/types'

// KPI 카드 샘플 데이터
export const mockKPIData: KPIData[] = [
  {
    id: 'revenue',
    title: '총 매출',
    value: 45231.89,
    change: 20.1,
    changeType: 'increase',
    icon: 'DollarSign',
    color: 'blue',
    trend: [4000, 3000, 5000, 4500, 6000, 5500, 7000]
  },
  {
    id: 'users',
    title: '활성 사용자',
    value: 2350,
    change: 180.1,
    changeType: 'increase',
    icon: 'Users',
    color: 'green',
    trend: [2000, 2100, 2200, 2150, 2300, 2250, 2350]
  },
  {
    id: 'orders',
    title: '주문 수',
    value: 12234,
    change: 19,
    changeType: 'increase',
    icon: 'ShoppingCart',
    color: 'purple',
    trend: [10000, 10500, 11000, 11500, 12000, 11800, 12234]
  },
  {
    id: 'conversion',
    title: '전환율',
    value: 3.24,
    change: -2.1,
    changeType: 'decrease',
    icon: 'TrendingUp',
    color: 'orange',
    trend: [3.5, 3.4, 3.3, 3.2, 3.1, 3.2, 3.24]
  }
]

// 차트 설정 샘플 데이터
export const mockChartConfigs: Record<string, ChartConfig> = {
  lineChart: {
    type: 'line',
    title: '월별 매출 트렌드',
    data: [
      { time: '1월', value: 4000 },
      { time: '2월', value: 3000 },
      { time: '3월', value: 5000 },
      { time: '4월', value: 4500 },
      { time: '5월', value: 6000 },
      { time: '6월', value: 5500 },
      { time: '7월', value: 7000 }
    ],
    style: {
      palette: ['#3b82f6', '#10b981', '#8b5cf6'],
      lineWidth: 3
    },
    responsive: true
  },
  columnChart: {
    type: 'column',
    title: '카테고리별 판매량',
    data: [
      { category: '전자제품', value: 2400 },
      { category: '의류', value: 1398 },
      { category: '도서', value: 9800 },
      { category: '스포츠', value: 3908 },
      { category: '홈&가든', value: 4800 }
    ],
    style: {
      palette: ['#f59e0b', '#ef4444', '#06b6d4', '#10b981', '#8b5cf6']
    },
    responsive: true
  },
  pieChart: {
    type: 'pie',
    title: '트래픽 소스',
    data: [
      { category: '직접 방문', value: 35 },
      { category: '검색 엔진', value: 45 },
      { category: '소셜 미디어', value: 20 }
    ],
    style: {
      palette: ['#8b5cf6', '#10b981', '#f59e0b'],
      innerRadius: 0.6
    },
    responsive: true
  },
  areaChart: {
    type: 'area',
    title: '일일 사용자 활동',
    data: [
      { time: '00:00', value: 120 },
      { time: '06:00', value: 80 },
      { time: '12:00', value: 300 },
      { time: '18:00', value: 250 },
      { time: '24:00', value: 180 }
    ],
    style: {
      palette: ['#06b6d4']
    },
    responsive: true
  }
}

// 테이블 샘플 데이터
export const mockTableData: TableRow[] = [
  {
    id: '1',
    name: '김철수',
    status: 'active',
    createdAt: new Date('2024-01-15'),
    email: 'kim@example.com',
    role: 'Admin'
  },
  {
    id: '2',
    name: '이영희',
    status: 'inactive',
    createdAt: new Date('2024-02-20'),
    email: 'lee@example.com',
    role: 'User'
  },
  {
    id: '3',
    name: '박민수',
    status: 'pending',
    createdAt: new Date('2024-03-10'),
    email: 'park@example.com',
    role: 'Moderator'
  },
  {
    id: '4',
    name: '정수진',
    status: 'active',
    createdAt: new Date('2024-03-25'),
    email: 'jung@example.com',
    role: 'User'
  },
  {
    id: '5',
    name: '최동욱',
    status: 'active',
    createdAt: new Date('2024-04-05'),
    email: 'choi@example.com',
    role: 'Admin'
  }
]

// 사이드바 메뉴 샘플 데이터
export const mockMenuItems: MenuItem[] = [
  {
    id: 'dashboard',
    title: '대시보드',
    icon: 'Home',
    href: '/',
    active: true
  },
  {
    id: 'analytics',
    title: '분석',
    icon: 'BarChart3',
    href: '/analytics',
    badge: 'New'
  },
  {
    id: 'users',
    title: '사용자 관리',
    icon: 'Users',
    href: '/users',
    badge: 12
  },
  {
    id: 'settings',
    title: '설정',
    icon: 'Settings',
    href: '/settings'
  }
]

// 색상 팔레트 정의
export const colorPalette = {
  blue: {
    primary: '#3b82f6',
    secondary: '#1d4ed8',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
  },
  green: {
    primary: '#10b981',
    secondary: '#059669',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
  },
  purple: {
    primary: '#8b5cf6',
    secondary: '#7c3aed',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
  },
  orange: {
    primary: '#f59e0b',
    secondary: '#d97706',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
  }
}
