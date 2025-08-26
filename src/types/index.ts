/**
 * 컬러풀한 관리자 대시보드 타입 정의
 * 모든 데이터 모델과 인터페이스를 정의합니다.
 */

// KPI 데이터 모델
export interface KPIData {
  id: string
  title: string
  value: number
  change: number // 변화율 (%)
  changeType: 'increase' | 'decrease'
  icon: string
  color: string
  trend?: number[] // 미니 차트 데이터
}

// 차트 데이터 포인트
export interface ChartDataPoint {
  [key: string]: string | number
}

// 차트 설정
export interface ChartConfig {
  type: 'line' | 'column' | 'pie' | 'area'
  title: string
  data: ChartDataPoint[]
  style: {
    palette: string[]
    lineWidth?: number
    innerRadius?: number
  }
  responsive: boolean
}

// 테이블 행 데이터
export interface TableRow {
  id: string
  name: string
  status: 'active' | 'inactive' | 'pending'
  createdAt: Date
  [key: string]: any
}

// 테이블 컬럼 정의
export interface TableColumn {
  key: string
  title: string
  sortable?: boolean
  width?: string
  render?: (value: any, row: TableRow) => React.ReactNode
}

// 테이블 설정
export interface TableConfig {
  columns: TableColumn[]
  data: TableRow[]
  pagination: {
    page: number
    pageSize: number
    total: number
  }
  sorting: {
    column: string
    direction: 'asc' | 'desc'
  }
}

// 사이드바 메뉴 항목
export interface MenuItem {
  id: string
  title: string
  icon: string
  href: string
  active?: boolean
  badge?: string | number
}

// 레이아웃 상태
export interface LayoutState {
  sidebarCollapsed: boolean
  sidebarOpen: boolean // 모바일용
  theme: 'light' | 'dark'
}

// API 응답 타입
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}

// 로딩 상태
export interface LoadingState {
  isLoading: boolean
  error?: string
}
