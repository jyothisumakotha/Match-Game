import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  return (
    <li className="tab-item">
      <button
        className={`tab-button ${activeTabBtnClassName}`}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
