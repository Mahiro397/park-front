import { useNavigate } from 'react-router-dom';

const CancelButton = () => {
    const navigate = useNavigate();
  return (
    <button
          onClick={() => navigate('/')}
          className="text-gray-700"
        >
          キャンセル
        </button>
  )
}

export default CancelButton