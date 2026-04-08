import resourceDoc from "../../content/resources.json";

export type ResourceItem = {
  type: string;
  typeClass: string;
  title: string;
  date: string;
  href: string;
  action: string;
  /** 相对站点根的静态文件路径，如 /uploads/guide.pdf（须同步上传到 public/uploads） */
  downloadUrl?: string;
  showOnHomepage?: boolean;
  sortOrder?: number;
};

type ResourceDoc = { items: ResourceItem[] };

const doc = resourceDoc as ResourceDoc;

function sortItems(items: ResourceItem[]) {
  return [...items].sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

export function getAllResourceItems(): ResourceItem[] {
  return sortItems(doc.items);
}

export function getHomepageResourceItems(): ResourceItem[] {
  return sortItems(
    doc.items.filter((it) => it.showOnHomepage !== false)
  );
}
