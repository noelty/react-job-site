import PropTypes from 'prop-types'

const Card = ({children, bg}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  )
}
Card.PropTypes = {
    children: PropTypes.node.isRequired,
    bg: PropTypes.string.isRequired
}

export default Card

