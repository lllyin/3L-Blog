import lyRequest from '../utils/lyRequest';
import { API_URL } from '../constant/config';

// 获取文章列表
export async function queryArticles() {
  return lyRequest(`${API_URL}/articles`, {
  })
}

// 获取文章详情
export async function queryArticleDetail({articleId}) {
  return lyRequest(`${API_URL}/articles/${articleId}`, {
  })
}