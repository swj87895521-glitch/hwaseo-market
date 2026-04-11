import Link from 'next/link';
import {
  formatNoticeDate,
  sortedNoticeItems,
} from '@/content/notices/noticeItems';

export function NoticeList({
  variant = 'compact',
}: {
  variant?: 'compact' | 'page';
}) {
  if (variant === 'page') {
    const pinnedCount = sortedNoticeItems.filter(
      (item) => item.isPinned,
    ).length;

    return (
      <div className="notice-board">
        <div
          className="notice-board__table"
          role="table"
          aria-label="공지사항 목록"
        >
          <div className="notice-board__head" role="rowgroup">
            <div
              className="notice-board__row notice-board__row--head"
              role="row"
            >
              <span
                className="notice-board__cell notice-board__cell--number"
                role="columnheader"
              >
                번호
              </span>
              <span
                className="notice-board__cell notice-board__cell--title"
                role="columnheader"
              >
                제목
              </span>
              <span
                className="notice-board__cell notice-board__cell--date"
                role="columnheader"
              >
                작성일
              </span>
              <span
                className="notice-board__cell notice-board__cell--views"
                role="columnheader"
              >
                조회
              </span>
            </div>
          </div>

          <div className="notice-board__body" role="rowgroup">
            {sortedNoticeItems.map((notice, index) => {
              const normalNumber =
                sortedNoticeItems.length - pinnedCount - (index - pinnedCount);

              return (
                <div
                  key={notice.id}
                  className={`notice-board__row ${notice.isPinned ? 'is-pinned' : ''}`}
                  role="row"
                >
                  <span
                    className="notice-board__cell notice-board__cell--number"
                    role="cell"
                  >
                    {notice.isPinned ? (
                      <span className="notice-chip">필독</span>
                    ) : (
                      normalNumber
                    )}
                  </span>
                  <span
                    className="notice-board__cell notice-board__cell--title"
                    role="cell"
                  >
                    <Link
                      href={`/notices/${notice.slug}`}
                      className="notice-board__link"
                    >
                      {notice.title}
                    </Link>
                  </span>
                  <span
                    className="notice-board__cell notice-board__cell--date"
                    role="cell"
                  >
                    {formatNoticeDate(notice.createdAt)}
                  </span>
                  <span
                    className="notice-board__cell notice-board__cell--views"
                    role="cell"
                  >
                    {notice.views}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="notice-list">
      {sortedNoticeItems.slice(0, 4).map((notice) => (
        <div key={notice.id} className="notice-item">
          <Link href={`/notices/${notice.slug}`}>
            {notice.isPinned ? (
              <span className="notice-imp">[필독] </span>
            ) : null}
            {notice.title}
          </Link>
          <span className="notice-date">
            {formatNoticeDate(notice.createdAt)}
          </span>
        </div>
      ))}
    </div>
  );
}
