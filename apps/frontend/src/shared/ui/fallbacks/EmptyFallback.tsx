import { InboxOutlined } from '@ant-design/icons'
import { Typography } from 'antd'

const { Text } = Typography

type Props = {
  icon?: React.ReactNode
  text: string
}

function EmptyFallback({ icon = <InboxOutlined />, text }: Props) {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        color: '#999',
      }}
    >
      <div style={{ fontSize: 40, lineHeight: 1 }}>{icon}</div>
      <Text type="secondary">{text}</Text>
    </div>
  )
}

export { EmptyFallback }
