import './index.css'

const ListItem = props => {
  const {imageDetails, clickImage} = props
  const {thumbnailUrl, id} = imageDetails
  const onImageItem = () => {
    clickImage(id)
  }
  return (
    <li className="list-item">
      <button type="button" className="item-button" onClick={onImageItem}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}
export default ListItem
