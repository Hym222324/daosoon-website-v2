/** 静态导出 + GitHub Pages 时，裸 <a href> 需手动加 basePath（Link 组件会自动加）。 */
export function withBasePath(path: string): string {
  if (!path || path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
