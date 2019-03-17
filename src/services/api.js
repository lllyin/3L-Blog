import lyRequest from "../utils/lyRequest";
import { SSO_URL, SSO_FRONT } from "../constant/config";

// 跳转去登录页
export function jumpToLogin() {
  const { protocol, host } = window.location;
  const redirect = encodeURIComponent(`${protocol}//${host}/#/verify`);
  window.location.href = `${SSO_FRONT}/login?redirect=${redirect}`;
}

// 跳转去登注册页
export function jumpToRegister() {
  const { protocol, host } = window.location;
  const redirect = encodeURIComponent(`${protocol}//${host}/#/verify`);
  
  window.location.href = `${SSO_FRONT}/register?redirect=${redirect}`;
}

// 查询用户信息
export async function queryUser({ authorization }) {
  if (authorization) {
    return lyRequest(`${SSO_URL}/verify`, {
      headers: { Authorization: authorization }
    });
  }
  return lyRequest(`${SSO_URL}/verify`, {});
}
