import Link from 'next/link';
import { noticeItems } from '@/content/notices/noticeItems';

export function NoticeList() {
  return (
    <div className="notice-list">
      {noticeItems.filter((item) => item.isActive).map((notice) => (
        <div key={notice.id} className="notice-item">
          <Link href={notice.link}>
            {notice.isImportant ? <span className="notice-imp">[필독] </span> : null}
            {notice.title}
          </Link>
          <span className="notice-date">{notice.dateText}</span>
        </div>
      ))}
    </div>
  );
}
