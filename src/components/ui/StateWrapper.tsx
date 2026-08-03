import type { ReactNode } from 'react'
import './StateWrapper.css'

export type WrapperState = 'loading' | 'error' | 'empty' | 'ready'

interface StateWrapperProps {
  state: WrapperState
  loadingLabel?: string
  errorLabel?: string
  emptyLabel?: string
  children?: ReactNode
}

export default function StateWrapper({
  state,
  loadingLabel = 'Loading…',
  errorLabel = 'Something went wrong.',
  emptyLabel = 'Nothing here yet.',
  children,
}: StateWrapperProps) {
  if (state === 'loading') {
    return (
      <div className="state-wrapper state-wrapper--loading">
        <div className="state-wrapper__spinner" />
        <p>{loadingLabel}</p>
      </div>
    )
  }

  if (state === 'error') {
    return (
      <div className="state-wrapper state-wrapper--error">
        <p>{errorLabel}</p>
      </div>
    )
  }

  if (state === 'empty') {
    return (
      <div className="state-wrapper state-wrapper--empty">
        <p>{emptyLabel}</p>
      </div>
    )
  }

  return <>{children}</>
}
