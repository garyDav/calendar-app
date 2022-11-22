import { useDispatch } from 'react-redux'
import { uiOpenModal } from '../../actions/ui'

export const AddNewFab = () => {
  const dispatch = useDispatch()

  const onClickFab = e => {
    dispatch(uiOpenModal())
  }

  return (
    <button className='btn btn-primary fab' onClick={onClickFab}>
      <i className='fas fa-plus'></i>
    </button>
  )
}
