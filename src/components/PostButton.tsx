import { useNavigate } from 'react-router-dom';

const PostButton = () => {
  const navigate = useNavigate();
  

  return (
    <button onClick={() => navigate('/post')} className="fixed bottom-5 right-5 bg-[#899BFB] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-[#7a8dfc] transition-colors">
      <span className="text-4xl relative top-[-2px]">+</span>
    </button>
  )
}

export default PostButton