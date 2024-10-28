import useSWR from 'swr';
import PostBotton from '../components/PostButton'
import PostArea from '../components/PostArea';
import { Post, Posts } from '../types/postType';



async function fetcher(key: string) {// keyはuseSWR()の第１引数で渡されたURL
  return fetch(key).then((res) => res.json() as Promise<Posts | null>);
}

function Home() {

  const { data, error, isLoading } = useSWR('http://localhost:3000/v1/post/', fetcher);
  console.log(data);

  if (error) return <div>エラーです</div>;
  if(isLoading) return <div>読み込み中...</div>;

  return (
    <div className="max-w-full mx-auto p-2 bg-[#f5f8fa] font-sans flex flex-col items-center justify-center min-h-screen">
  {/* タイトル */}
    <div className="flex justify-center items-center p-4 text-2xl font-bold text-[#1da1f2]">
        {/* タイトルの内容が必要であればここに追加 */}
        タイトル
    </div>

  {/* タイムラインエリア */}
    <div className="overflow-y-auto w-full h-full md:max-w-[635px] md:h-[80vh] box-border p-0 flex-grow">
        {data?.slice().reverse().map((post: Post) => (
        <PostArea key={post.post_id} post={post} />
        ))}
    
  {/* 投稿ボタン */}
    <PostBotton></PostBotton>
    </div>
  {/*　▲タイムラインエリア ここまで */}
    </div>

  )
}

export default Home
