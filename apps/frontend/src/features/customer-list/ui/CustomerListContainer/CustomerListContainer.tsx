import { Card, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

type Props = {
  search: string
  onSearchChange: (value: string) => void
} & React.PropsWithChildren

function CustomerListContainer({ search, onSearchChange, children }: Props) {
  return (
    <Card
      title="고객 목록"
      extra={
        <Input
          prefix={<SearchOutlined />}
          placeholder="고객 이름 검색"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          allowClear
        />
      }
      style={cardStyle}
      styles={{ body: cardBodyStyle }}
    >
      {children}
    </Card>
  )
}

const cardStyle = {
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
} as const

const cardBodyStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  minHeight: 0,
  overflow: 'auto',
} as const

export { CustomerListContainer }
