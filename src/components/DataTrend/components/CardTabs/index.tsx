import React from 'react'
import CardItem from './CardItem'
import { CardItemType } from './types'
import './style.scss'

interface IProps {
  cardData: CardItemType[]
  onChange?: (selectedId: string) => void
}

interface IStates { }

class CardTabs extends React.Component<IProps, IStates> {
  state = {}

  handleChange = (selectedId: string) => {
    const { onChange } = this.props
    if (onChange) {
      onChange(selectedId)
    }
  }

  render() {
    const { cardData } = this.props
    return (
      <div className='cardtabs-component-box'>
        {
          cardData.map((cardItem: CardItemType) => (
            <CardItem
              name={cardItem.name}
              value={cardItem.value}
              persent={cardItem.persent}
              icon={cardItem.icon}
              isSelected={cardItem.isSelected}
              id={cardItem.id}
              onClick={(selectedId: string) => { this.handleChange(selectedId) }}
              key={cardItem.id}
            />
          ))
        }
      </div>
    )
  }
}

export default CardTabs
