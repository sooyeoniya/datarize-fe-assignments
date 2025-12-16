import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Button, Card, Typography } from 'antd'

const { Text } = Typography

type Props = {
  title: string
  onRetry?: () => void
}

function CardErrorFallback({ title, onRetry }: Props) {
  return (
    <Card title={title} style={{ height: '100%', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 240,
          gap: 16,
        }}
      >
        <ExclamationCircleOutlined style={{ fontSize: 48, color: '#ff4d4f' }} />
        <Text type="danger">오류가 발생했습니다.</Text>
        {onRetry && (
          <Button type="primary" onClick={onRetry}>
            다시 시도
          </Button>
        )}
      </div>
    </Card>
  )
}

export { CardErrorFallback }
