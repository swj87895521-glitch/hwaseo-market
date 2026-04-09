import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function TopBar() {
  return (
    <div className="top-bar">
      <Container className="top-bar__inner">
        <Link href="#">로그인</Link>
        <span>|</span>
        <Link href="#">회원가입</Link>
        <span>|</span>
        <Link href="/notices">고객센터</Link>
      </Container>
    </div>
  );
}
