import lyRequest from '../utils/lyRequest';
import { API_URL } from '../constant/config';

// 获取文章列表
export async function queryArticles(params) {
  return lyRequest(`${API_URL}/articles`, { params });
}

// 获取文章详情
export async function queryArticleDetail({ articleId }) {
  return lyRequest(`${API_URL}/articles/${articleId}`, {});
}

// 添加评论
export async function postComment({ postId, data }) {
  return lyRequest(`${API_URL}/comment/${postId}`, {
    method: 'post',
    data,
  });
}

// 评论点赞
export async function likeComment({ commentId }) {
  return lyRequest(`${API_URL}/comment/${commentId}`);
}
