import { Card, Typography, theme } from 'antd'

const { Text } = Typography

type Props = {
  icon: React.ReactNode
  label: string
  value: React.ReactNode
}

function CustomerDetailStatCard({ icon, label, value }: Props) {
  const { token } = theme.useToken()

  return (
    <Card variant="borderless" style={{ background: '#f3f6ff' }} styles={{ body: { padding: 10 } }}>
      {icon}
      <Text style={{ marginLeft: 8 }}>{label}</Text>
      <Text style={{ marginLeft: 8, color: token.colorPrimary }} strong>
        {value}
      </Text>
    </Card>
  )
}

export { CustomerDetailStatCard }
