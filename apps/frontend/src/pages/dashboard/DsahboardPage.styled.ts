import styled from '@emotion/styled'
import { Row, Col } from 'antd'

export const RootRow = styled(Row)`
  height: 100%;
  width: 100%;
`

export const LeftCol = styled(Col)`
  height: 100%;
  display: flex;
`

export const RightCol = styled(Col)`
  height: 100%;
  display: flex;
`

export const RightInnerRow = styled(Row)`
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
`

export const PanelCol = styled(Col)`
  flex: 1;
`
