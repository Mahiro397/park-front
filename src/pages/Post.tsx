import { useState , ChangeEvent} from 'react';
import CancelButton from '../components/CancelButton';
import { useNavigate } from 'react-router-dom';


function Post() {
  const [selectedPark, setSelectedPark] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [viewImage, setViewImage] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();


  const handlePost = async () => {
    if (!selectedPark || !comment || !image) {
      alert('公園、コメント、および画像をすべて入力してください。');
      return;
    }

    const formData = new FormData();
    formData.append('comment', comment);
    formData.append('parkId', selectedPark);
    formData.append('image', image); 

    try {
      const response = await fetch('http://localhost:3000/v1/post/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('アップロードに失敗しました');
      }

      alert('投稿が完了しました');
      navigate('/')
    } catch (error) {
      console.error('Error:', error);
      alert('エラーが発生しました');
    }
  };

  
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]; // ここでファイルを取得
            setImage(file); // ファイルオブジェクトを状態に保存
            setViewImage(URL.createObjectURL(file)); 
          }
  };
  return (
    <div className="p-4 max-w-md mx-auto">
      {/* ヘッダー */}
      <div className="flex justify-between items-center mb-4">
        <CancelButton/>
        <button
          onClick={handlePost}
          className="px-4 py-2 bg-[#899BFB] text-white rounded-lg"
        >
          ポスト
        </button>
      </div>

      {/* 公園選択 */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">公園を選択してください</label>
        <select
          value={selectedPark}
          onChange={(e) => setSelectedPark(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#899BFB]"
        >
          <option value="">公園を選択</option>
          <option value="dc89098c-de22-474a-a821-327485905387">テスト公園</option>
          <option value="69d855f1-2446-47a8-880f-a5091f047dac">墨田区立隅田公園</option>
          <option value="290d1086-ec36-41e3-829e-a31eac7534ae">錦糸公園</option>
        </select>
      </div>

      {/* コメント入力 */}
      <div className="mb-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="コメントを入力してください"
          className="w-full p-2 border rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#899BFB]"
        />
      </div>

      {/* 画像投稿 */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">画像を投稿してください</label>
        <div className="flex items-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="imageUpload"
          />
          <label
            htmlFor="imageUpload"
            className="w-24 h-24 border rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100"
          >
            {viewImage ? (
              <img src={viewImage} alt="選択した画像" className="w-full h-full object-cover rounded-lg m-2" />
            ) : (
              <span className="text-gray-400">画像を選択</span>
            )}
          </label>
          {/* カメラを起動するボタンを追加 */}
          <label
            htmlFor="imageUpload"
            className="w-24 h-24 border rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 m-2"
          >
            <span className="text-gray-400">カメラを起動</span>
          </label>
        </div>
      </div>
    </div>
    
  )
}

export default Post