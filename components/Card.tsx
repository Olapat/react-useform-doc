import * as React from 'react'
import styles from '../styles/components/Card.module.css'

interface Props {
  children: React.ReactNode,
  /**
   * Auto add Padding
   */
  autoPadding?: Boolean
  /**
   * Auto add Padding X
   */
  autoPaddingX?: Boolean
  /**
   * Auto add Padding Y 
   */
  autoPaddingY?: Boolean
}

const Card: React.FC<Props> = props => {
  const { children, autoPadding, autoPaddingX, autoPaddingY } = props

  const className = React.useMemo((): string => {
    let result = styles.card
    if (autoPadding) result+= ' ' + styles.padding
    if (autoPaddingX) result+= ' ' + styles.paddingX
    if (autoPaddingY) result+= ' ' + styles.paddingY
    return result
  }, [autoPadding, autoPaddingX, autoPaddingY])

  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default React.memo(Card)
