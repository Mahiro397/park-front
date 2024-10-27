export type Image = {
  img_id: string;
  post_id: string;
  img_path: string;
  is_processed: boolean;
  created_at: string;
  img: string;
};

export type Park = {
  park_id: string;
  name: string;
  lon: number | null;
  lat: number | null;
  created_at: string;
};

export type Post = {
  post_id: string;
  user_id: string | null;
  park_id: string;
  comment: string;
  lon: number | null;
  lat: number | null;
  created_at: string;
  images: Image[];
  park: Park;
};

  
  // 投稿の配列の型
  export type Posts = Post[];