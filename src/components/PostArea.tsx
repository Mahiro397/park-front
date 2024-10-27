import { Post } from '../types/postType';

type PostProps = {
    post:Post;
}

function formatDate(dateString: string): string {
    const targetDate = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - targetDate.getTime();

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 60) {
        return `${minutes}分前`;
    } else if (hours < 24) {
        return `${hours}時間前`;
    } else if (days < 7) {
        return `${days}日前`;
    } else {
        return `${targetDate.getFullYear()}/${targetDate.getMonth() + 1}/${targetDate.getDate()}`;
    }
}


function PostArea({post}:PostProps) {
    const formattedDate = formatDate(post.created_at);
  return (
    <div className="flex justify-center p-5 border-b border-[#e1e8ed] bg-white rounded-lg mb-2">
      <div className="flex-1 max-w-[517px] ml-3">
        <div className="font-bold text-sm p-2 ">
          {post.park.name}<span className="text-[#8899a6] text-xs ml-2 ">{formattedDate }</span>
        </div>
        <div className="text-sm text-[#14171a]">
          {post.comment}
          <div className="mt-2 w-full">
            <img
              src={post.images[0].img}
              className="max-w-full w-full h-auto rounded-lg object-cover"
              alt={post.park.name}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostArea