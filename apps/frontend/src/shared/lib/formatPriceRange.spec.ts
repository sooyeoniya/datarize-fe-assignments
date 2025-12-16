import { describe, expect, it } from 'vitest'
import { formatPriceRange } from './formatPriceRange'

describe('formatPriceRange 함수 테스트', () => {
  it('숫자 범위를 가격 범위 문자열로 변환한다', () => {
    expect(formatPriceRange('1000 - 2000')).toBe('1,000 ~ 2,000')
    expect(formatPriceRange('10000-50000')).toBe('10,000 ~ 50,000')
  })

  it('숫자로 파싱할 수 없으면 원본 문자열을 반환한다', () => {
    expect(formatPriceRange('무료 - 유료')).toBe('무료 - 유료')
    expect(formatPriceRange('1000 - abc')).toBe('1000 - abc')
  })
})
