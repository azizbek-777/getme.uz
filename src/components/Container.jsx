import { forwardRef } from 'react'
import clsx from 'clsx'

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      {/* use ceneter */}
      <div className="mx-auto max-w-4xl lg:px-10">{children}</div>
    </div>
  )
})

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-8 sm:px-8 lg:px-12', className)} // "flex" qo'shildi
      {...props}
    >
      <div className="mx-auto max-w-xl lg:max-w-4xl">{children}</div>
    </div>

  )
})

export const Container = forwardRef(function Container(
  { children, ...props },
  ref
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer >{children}</InnerContainer>
    </OuterContainer>
  )
})

Container.Outer = OuterContainer
Container.Inner = InnerContainer
