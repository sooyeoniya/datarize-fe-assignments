import { Col, Row } from 'antd'
import { DashboardLayout } from './ui/DashboardLayout/DashboardLayout'

function DashboardPage() {
  return (
    <DashboardLayout>
      <Row gutter={24} style={{ height: '100%', width: '100%', margin: 0 }}>
        <Col span={8} style={{ height: '100%', display: 'flex' }}>
          {/* 고객 목록 패널 */}
        </Col>

        <Col span={16} style={{ height: '100%', display: 'flex' }}>
          <Row
            gutter={[0, 24]}
            style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', margin: 0 }}
          >
            <Col span={24} style={{ flex: 1 }}>
              {/* 가격대별 구매 빈도 차트 패널 */}
            </Col>

            <Col span={24} style={{ flex: 1 }}>
              {/* 고객 상세 구매 내역 패널 */}
            </Col>
          </Row>
        </Col>
      </Row>
    </DashboardLayout>
  )
}

export { DashboardPage }
