import PropTypes from 'prop-types'

const Card = ({children}) => {
  return (
    <>
        {children}
    </>
  )
}
Card.PropTypes = {
    children: PropTypes.element.isRequired
}

export default Card

