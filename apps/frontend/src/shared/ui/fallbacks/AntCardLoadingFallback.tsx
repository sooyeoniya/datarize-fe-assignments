import { Spin, Card } from 'antd'

type Props = {
  title: string
}

function AntdCardLoadingFallback({ title }: Props) {
  return (
    <Card title={title} style={{ height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 240 }}>
        <Spin />
      </div>
    </Card>
  )
}

export { AntdCardLoadingFallback }
