import React, { FC } from 'react'
import { Units, StylePropType } from '@/store/formConfReducer'
import { Popover, InputNumber } from 'antd'
import { getKeyByValueInEnum } from '@/utils'
import styles from './UnitSelect.module.scss'

type PropsType = {
  onChange: (prop: StylePropType) => void
  onReset: (prop: StylePropType) => void
  prop: StylePropType
}

const UnitSelect: FC<PropsType> = (props: PropsType) => {
  const { onChange, prop, onReset } = props

  const keysArray: (keyof typeof Units)[] = Object.keys(Units) as (keyof typeof Units)[]
  function handleChangeVal(prop: StylePropType) {
    onChange(prop)
  }

  function handleClickAuto() {
    onReset({
      number: 0,
      unit: Units.px,
    })
  }
  return (
    <>
      {prop.unit === Units.auto ? (
        <div className={styles['auto-btn']} onClick={() => handleClickAuto()}>
          {Units.auto}
        </div>
      ) : (
        <div className={styles.container}>
          <InputNumber
            min={0}
            style={{ marginRight: '0.1rem' }}
            defaultValue={prop.number}
            onChange={val => {
              handleChangeVal({
                number: val ?? 0,
                unit: prop.unit,
              })
            }}
          />
          <Popover
            placement="bottom"
            content={
              <>
                {keysArray.map(key => (
                  <div
                    key={key}
                    className={styles['unit-item']}
                    onClick={() =>
                      handleChangeVal({
                        number: prop.number,
                        unit: Units[key],
                      })
                    }
                  >
                    {Units[key]}
                  </div>
                ))}
              </>
            }
          >
            <div className={styles['unit-wrapper']}>{getKeyByValueInEnum(Units, prop.unit)}</div>
          </Popover>
        </div>
      )}
    </>
  )
}

export default UnitSelect
