import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useDebounce } from './useDebounce'

describe('useDebounce 훅 테스트', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.clearAllTimers()
    vi.useRealTimers()
  })

  it('초기 렌더에서는 원본 값을 그대로 사용한다', () => {
    const { result } = renderHook(() => useDebounce('hello', 300))

    expect(result.current).toBe('hello')
  })

  it('delay 이전에는 값이 변경되지 않는다', () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 300), {
      initialProps: { value: 'hello' },
    })

    rerender({ value: 'world' })

    act(() => {
      vi.advanceTimersByTime(299)
    })

    expect(result.current).toBe('hello')
  })

  it('delay 이후에 값이 변경된다', () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 300), {
      initialProps: { value: 'hello' },
    })

    rerender({ value: 'world' })

    expect(result.current).toBe('hello')

    act(() => {
      vi.advanceTimersByTime(300)
    })

    expect(result.current).toBe('world')
  })

  it('delay가 변경되면 새로운 delay가 적용된다', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'hello', delay: 300 },
    })

    rerender({ value: 'world', delay: 100 })

    act(() => {
      vi.advanceTimersByTime(100)
    })

    expect(result.current).toBe('world')
  })
})
